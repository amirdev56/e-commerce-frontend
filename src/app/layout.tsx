import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import LocalFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const localFont = LocalFont({ src: "../../fonts/geographwebregular.ttf" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={localFont.className}>
        <AntdRegistry>
          <div className="w-full absolute">
            <Header />
            <div className="mt-[100px] p-[16px]">{children}</div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
