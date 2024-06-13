import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/MainLayout";


const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "EventFlo Admin",
  description: "Managing EventFlo Operations",
};

export default function RootLayout({ children, header }) {
  return (
    <html lang="en">
      <body>
        <MainLayout header={header}>{children}</MainLayout>
      </body>
    </html>
  );
}
