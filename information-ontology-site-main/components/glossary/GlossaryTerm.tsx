import Link from "next/link";

export default function GlossaryTerm({
  term,
  slug,
  children,
  className = "",
  title,
}: {
  term?: string;
  slug: string;
  children?: React.ReactNode;
  className?: string;
  title?: string;
}) {
  const label = children ?? term ?? slug;
  return (
    <Link
      href={`/glossary/${slug}`}
      className={[
        "no-underline rounded-md px-0.5",
        "text-black/70 hover:text-black/80",
        "hover:bg-black/5 transition-colors",
        className,
      ].join(" ")}
      title={title ?? "Glossary entry"}
    >
      {label}
    </Link>
  );
}
