import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "E-commerce",
  description: "My first e-commerce with NextJs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-5 mt-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
