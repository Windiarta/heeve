import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ElementType } from "react";
import { gsap } from "gsap";
import "./TextType.css";

type TextTypeProps = {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: React.ReactNode;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  startOnVisible?: boolean;
  reverseMode?: boolean;
};

export default function TextType({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  startOnVisible = false,
  reverseMode = false,
}: TextTypeProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const current = texts[index] ?? "";
  const processed = reverseMode
    ? current.split("").reverse().join("")
    : current;
  const getSpeed = useCallback(
    () =>
      variableSpeed
        ? Math.random() * (variableSpeed.max - variableSpeed.min) +
          variableSpeed.min
        : typingSpeed,
    [variableSpeed, typingSpeed],
  );

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    gsap.killTweensOf(cursorRef.current);
    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
    return () => {
      if (cursorRef.current) gsap.killTweensOf(cursorRef.current);
    };
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!visible) return;
    if (!deleting && displayed.length < processed.length) {
      const timeout = window.setTimeout(
        () => setDisplayed((value) => value + processed[displayed.length]),
        getSpeed(),
      );
      return () => window.clearTimeout(timeout);
    }
    if (!deleting) {
      if (!loop && index === texts.length - 1) return;
      const timeout = window.setTimeout(() => setDeleting(true), pauseDuration);
      return () => window.clearTimeout(timeout);
    }
    if (displayed.length > 0) {
      const timeout = window.setTimeout(
        () => setDisplayed((value) => value.slice(0, -1)),
        deletingSpeed,
      );
      return () => window.clearTimeout(timeout);
    }
    const timeout = window.setTimeout(() => {
      setDeleting(false);
      setIndex((value) => (value + 1) % texts.length);
    }, pauseDuration);
    return () => window.clearTimeout(timeout);
  }, [
    deleting,
    displayed,
    getSpeed,
    index,
    loop,
    pauseDuration,
    processed,
    texts.length,
    visible,
    deletingSpeed,
  ]);

  const hideCursor =
    hideCursorWhileTyping && (displayed.length < processed.length || deleting);
  return createElement(
    Component as ElementType,
    { ref: containerRef, className: `text-type ${className}` },
    <span
      className="text-type__content"
      style={{
        color: textColors.length
          ? textColors[index % textColors.length]
          : "inherit",
      }}
    >
      {displayed}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${hideCursor ? "text-type__cursor--hidden" : ""}`}
      >
        {cursorCharacter}
      </span>
    ),
  );
}
