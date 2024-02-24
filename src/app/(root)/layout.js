import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Study Tools",
  description: "Main layout of app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
