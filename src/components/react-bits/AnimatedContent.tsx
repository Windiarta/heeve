export function AnimatedContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`animated-content ${className}`}>{children}</div>;
}
