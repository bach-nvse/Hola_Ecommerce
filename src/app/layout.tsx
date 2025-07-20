// src/app/layout.tsx
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hola Ecommerce",
  description: "Modern Sneaker Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">
        <main className="min-h-screen pt-20">
          {children}
          </main>
      </body>
    </html>
  );
}