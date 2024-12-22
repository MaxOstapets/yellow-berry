import Header from "@/app/Components/Header";
// import dynamic from "next/dynamic";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const Header = dynamic(() => import("@/app/Components/Header"), { ssr: false })
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
