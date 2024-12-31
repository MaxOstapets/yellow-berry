import Header from "@/app/Components/Header";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "400", "700"],
    variable: '--font-serif'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
