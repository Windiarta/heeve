import { useEffect, useRef } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import "./Threads.css";

type ThreadsProps = {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
};

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragmentShader = `
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;
varying vec2 vUv;
#define PI 3.1415926538
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  float strength = 0.0;
  for (int i = 0; i < 34; i++) {
    float p = float(i) / 34.0;
    float center = 0.5 + (p - 0.5) * uDistance;
    float wave = (noise(vec2(iTime * 0.12 + p * 3.0, uv.x * 2.5)) - 0.5) * uAmplitude * 0.12;
    wave *= smoothstep(0.0, 0.7, uv.x) * (1.0 + (uMouse.y - 0.5) * 0.15);
    float line = smoothstep(0.014, 0.0, abs(uv.y - center - wave));
    strength = max(strength, line * (1.0 - p * 0.45));
  }
  gl_FragColor = vec4(uColor * strength, strength * 0.9);
}
`;

export default function Threads({
  color = [0.2, 0.35, 0.8],
  amplitude = 1,
  distance = 0.7,
  enableMouseInteraction = true,
  className = "",
}: ThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef({
    color,
    amplitude,
    distance,
    enableMouseInteraction,
  });

  propsRef.current = { color, amplitude, distance, enableMouseInteraction };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const renderer = new Renderer({ alpha: true, antialias: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Color(1, 1, 1) },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    let frame = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;
    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      program.uniforms.iResolution.value.r = gl.canvas.width;
      program.uniforms.iResolution.value.g = gl.canvas.height;
      program.uniforms.iResolution.value.b =
        gl.canvas.width / Math.max(gl.canvas.height, 1);
    };
    const move = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width;
      targetY = 1 - (event.clientY - rect.top) / rect.height;
    };
    const render = (time: number) => {
      frame = requestAnimationFrame(render);
      const props = propsRef.current;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      program.uniforms.iTime.value = time * 0.001;
      program.uniforms.uColor.value.set(...props.color);
      program.uniforms.uAmplitude.value = props.amplitude;
      program.uniforms.uDistance.value = props.distance;
      if (props.enableMouseInteraction) {
        program.uniforms.uMouse.value[0] = mouseX;
        program.uniforms.uMouse.value[1] = mouseY;
      }
      renderer.render({ scene: mesh });
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener("mousemove", move);
    resize();
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.removeEventListener("mousemove", move);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`threads-container ${className}`}
      aria-hidden="true"
    />
  );
}
