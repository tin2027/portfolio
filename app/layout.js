import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
