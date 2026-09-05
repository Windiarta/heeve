export function SpotlightCard({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <article className={`spotlight-card ${className}`} {...props}>
      {children}
    </article>
  );
}
