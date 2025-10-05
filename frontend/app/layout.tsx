import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import { StarfieldBackground } from "@/components/space/StarfieldBackground";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chat.vercel.ai"),
  title: "ExoPlanet - AI | Descubrimiento de Exoplanetas con IA",
  description:
    "Aprendizaje automático avanzado para la detección de exoplanetas en las misiones Kepler, TESS y K2.",
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const THEME_COLOR = "hsl(0 0% 0%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', '${THEME_COLOR}');
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#8B5CF6",
          colorBackground: "#000000",
          colorText: "#FFFFFF",
        },
      }}
    >
      <html
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
        lang="es"
        suppressHydrationWarning
      >
        <head>
          <script
            // biome-ignore lint/security/noDangerouslySetInnerHtml: "Required"
            dangerouslySetInnerHTML={{
              __html: THEME_COLOR_SCRIPT,
            }}
          />
        </head>
        <body className="bg-black text-white antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableSystem={false}
            forcedTheme="dark"
          >
            <StarfieldBackground />
            <div className="relative z-10">
              <Toaster position="top-center" />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
