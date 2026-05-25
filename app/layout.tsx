import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Informational Ontology",
  description: "A structural ontology of information: master text, derivative papers, and interactive corpus map.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
