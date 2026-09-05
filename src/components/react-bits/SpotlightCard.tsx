export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`spotlight-card ${className}`}>{children}</article>
  );
}
