import Navbar from "@/components/Navbar";
import "./globals.css";
//import "@/library/fontawesome.js"

export const metadata = {
  title: "E-commerce",
  description: "My first e-commerce with NextJs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
