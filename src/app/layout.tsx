import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Car",
  description:
    "CitiCar - Chúng tôi cung cấp dịch vụ mua và bán xe chuyên nghiệp với chất lượng được đặt lên hàng đầu và giá cả minh bạch.",
  icons: {
    icon: "@/components/icons/Logo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
