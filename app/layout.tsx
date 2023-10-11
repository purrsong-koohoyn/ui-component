import type { Metadata } from "next";

import { ThemeProvider } from "../providers/theme-provider";
import "../styles/globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Ninestring App",
  description: "Ninestring prictice app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
