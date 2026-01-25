/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Archive compatibility:
  // The archived snapshot was originally a root site with paths like /intro, /faq, etc.
  // When hosted under /public/archive, those links would 404 unless we rewrite them.
  async rewrites() {
    const legacy = [
      "intro",
      "abstract",
      "faq",
      "ontology",
      "simulations",
      "glossary",
      "start",
      "deep",
      "context",
    ];

    // Map /intro -> /archive/intro.html and /intro/ -> /archive/intro.html
    const rules = legacy.flatMap((slug) => ([
      { source: `/${slug}`, destination: `/archive/${slug}.html` },
      { source: `/${slug}/`, destination: `/archive/${slug}.html` },
    ]));

    // Also support explicit /archive/<slug> without .html
    const archiveRules = legacy.flatMap((slug) => ([
      { source: `/archive/${slug}`, destination: `/archive/${slug}.html` },
      { source: `/archive/${slug}/`, destination: `/archive/${slug}.html` },
    ]));

    return [...rules, ...archiveRules];
  },
};

export default nextConfig;
