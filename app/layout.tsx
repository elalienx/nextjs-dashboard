// Project files
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

/**
 * One benefit of using layouts in Next.js is that on navigation,
 * only the page components update while the layout won't re-render.
 * This is called partial rendering. See diagram:
 * https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fpartial-rendering-dashboard.png&w=3840&q=75
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
