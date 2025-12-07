import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Informational Ontology",
  description:
    "Official site for Informational Ontology (IO): a philosophical framework treating information and relation as fundamental."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <SiteHeader />
        <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Informational Ontology. Draft working
            edition.
          </div>
        </footer>
      </body>
    </html>
  );
}
