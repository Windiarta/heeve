import { useEffect, useRef } from "react";
import "./CursorGrid.css";

type Falloff = "linear" | "smooth" | "sharp";
type CursorGridProps = {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: Falloff;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  className?: string;
};

const curves: Record<Falloff, (value: number) => number> = {
  linear: (value) => value,
  smooth: (value) => value * value * (3 - 2 * value),
  sharp: (value) => value * value * value,
};

const hexToRgb = (hex: string) => {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const number = Number.parseInt(full.slice(0, 6), 16);
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
};

type Pulse = { x: number; y: number; started: number };

export default function CursorGrid({
  cellSize = 70,
  color = "#D946EF",
  radius = 140,
  falloff = "smooth",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 600,
  className = "",
}: CursorGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const eventTarget = container?.parentElement;
    if (!container || !canvas || !context || !eventTarget) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let offsetX = 0;
    let offsetY = 0;
    let alpha = new Float32Array(0);
    let touched = new Float64Array(0);
    let pulses: Pulse[] = [];
    let frame = 0;
    let lastFrame = 0;
    let running = false;

    const rebuild = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
      offsetX = (width - columns * cellSize) / 2;
      offsetY = (height - rows * cellSize) / 2;
      alpha = new Float32Array(columns * rows);
      touched = new Float64Array(columns * rows);
    };

    const center = (index: number) => [
      offsetX + (index % columns) * cellSize + cellSize / 2,
      offsetY + Math.floor(index / columns) * cellSize + cellSize / 2,
    ];

    const energize = (x: number, y: number, boost = 1) => {
      const now = performance.now();
      const minColumn = Math.max(
        0,
        Math.floor((x - radius - offsetX) / cellSize),
      );
      const maxColumn = Math.min(
        columns - 1,
        Math.floor((x + radius - offsetX) / cellSize),
      );
      const minRow = Math.max(0, Math.floor((y - radius - offsetY) / cellSize));
      const maxRow = Math.min(
        rows - 1,
        Math.floor((y + radius - offsetY) / cellSize),
      );
      const ease = curves[falloff];
      for (let row = minRow; row <= maxRow; row += 1) {
        for (let column = minColumn; column <= maxColumn; column += 1) {
          const index = row * columns + column;
          const [cellX, cellY] = center(index);
          const distance = Math.hypot(cellX - x, cellY - y);
          if (distance > radius) continue;
          const level = ease(1 - distance / radius) * maxOpacity * boost;
          if (level > alpha[index]) alpha[index] = level;
          if (level > 0) touched[index] = now;
        }
      }
    };

    const draw = (now: number) => {
      const delta = Math.min(now - lastFrame, 50);
      lastFrame = now;
      context.clearRect(0, 0, width, height);
      const [red, green, blue] = hexToRgb(color);

      if (gridOpacity > 0) {
        context.strokeStyle = `rgba(${red},${green},${blue},${gridOpacity})`;
        context.lineWidth = 1;
        context.beginPath();
        for (let column = 0; column <= columns; column += 1) {
          const x = Math.round(offsetX + column * cellSize) + 0.5;
          context.moveTo(x, 0);
          context.lineTo(x, height);
        }
        for (let row = 0; row <= rows; row += 1) {
          const y = Math.round(offsetY + row * cellSize) + 0.5;
          context.moveTo(0, y);
          context.lineTo(width, y);
        }
        context.stroke();
      }

      for (
        let pulseIndex = pulses.length - 1;
        pulseIndex >= 0;
        pulseIndex -= 1
      ) {
        const pulse = pulses[pulseIndex];
        const ring = ((now - pulse.started) / 1000) * pulseSpeed;
        if (ring > Math.hypot(width, height)) {
          pulses.splice(pulseIndex, 1);
          continue;
        }
        const band = cellSize;
        const minColumn = Math.max(
          0,
          Math.floor((pulse.x - ring - band - offsetX) / cellSize),
        );
        const maxColumn = Math.min(
          columns - 1,
          Math.floor((pulse.x + ring + band - offsetX) / cellSize),
        );
        const minRow = Math.max(
          0,
          Math.floor((pulse.y - ring - band - offsetY) / cellSize),
        );
        const maxRow = Math.min(
          rows - 1,
          Math.floor((pulse.y + ring + band - offsetY) / cellSize),
        );
        for (let row = minRow; row <= maxRow; row += 1)
          for (let column = minColumn; column <= maxColumn; column += 1) {
            const index = row * columns + column;
            const [cellX, cellY] = center(index);
            if (
              Math.abs(Math.hypot(cellX - pulse.x, cellY - pulse.y) - ring) <
              band / 2
            ) {
              alpha[index] = maxOpacity;
              touched[index] = now;
            }
          }
      }

      let visible = pulses.length > 0;
      for (let index = 0; index < alpha.length; index += 1) {
        let level = alpha[index];
        if (level <= 0) continue;
        if (now - touched[index] > holdTime) {
          level = Math.max(0, level - delta / Math.max(fadeDuration, 16));
          alpha[index] = level;
          if (level <= 0) continue;
        }
        visible = true;
        const [cellX, cellY] = center(index);
        const gradient = context.createRadialGradient(
          cellX,
          cellY,
          cellSize * 0.05,
          cellX,
          cellY,
          cellSize,
        );
        gradient.addColorStop(0, `rgba(${red},${green},${blue},${level})`);
        gradient.addColorStop(1, `rgba(${red},${green},${blue},0)`);
        const x = cellX - cellSize / 2 + 0.5;
        const y = cellY - cellSize / 2 + 0.5;
        context.beginPath();
        if (cellRadius > 0)
          context.roundRect(x, y, cellSize - 1, cellSize - 1, cellRadius);
        else context.rect(x, y, cellSize - 1, cellSize - 1);
        if (fillOpacity > 0) {
          context.fillStyle = `rgba(${red},${green},${blue},${level * fillOpacity})`;
          context.fill();
        }
        context.strokeStyle = gradient;
        context.lineWidth = lineWidth;
        context.stroke();
      }
      if (visible) frame = requestAnimationFrame(draw);
      else running = false;
    };

    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      frame = requestAnimationFrame(draw);
    };
    const localPoint = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      return [event.clientX - rect.left, event.clientY - rect.top];
    };
    const onMove = (event: PointerEvent) => {
      const [x, y] = localPoint(event);
      energize(x, y);
      wake();
    };
    const onDown = (event: PointerEvent) => {
      if (clickPulse) {
        const [x, y] = localPoint(event);
        pulses.push({ x, y, started: performance.now() });
        wake();
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      rebuild();
      wake();
    });
    resizeObserver.observe(container);
    rebuild();
    eventTarget.addEventListener("pointermove", onMove);
    eventTarget.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      eventTarget.removeEventListener("pointermove", onMove);
      eventTarget.removeEventListener("pointerdown", onDown);
    };
  }, [
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  ]);

  return (
    <div
      ref={containerRef}
      className={`cursor-grid${className ? ` ${className}` : ""}`}
    >
      <canvas ref={canvasRef} className="cursor-grid__canvas" />
    </div>
  );
}
