import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mặt Bằng 2 Mặt Tiền Đầu Đường Võ Nguyên Giáp - 3.200m², 2 Mặt Tiền + View Hồ",
  description:
    "Mặt bằng 39x72m tại đầu đường Võ Nguyên Giáp, TP Huế. 39m mặt tiền Võ Nguyên Giáp + 72m mặt tiền đường Cao đẳng Cộng đồng + 1 mặt giáp hồ. Đã tách 3 sổ, cách Hùng Vương 500m.",
  keywords: [
    "bán mặt bằng Huế",
    "mặt bằng Võ Nguyên Giáp",
    "đất 2 mặt tiền Huế",
    "mặt bằng kho bãi Huế",
    "bán đất Võ Nguyên Giáp",
    "mặt bằng kinh doanh Huế",
    "đất view hồ Huế",
  ],
  openGraph: {
    title: "Mặt Bằng 2 Mặt Tiền Đầu Đường Võ Nguyên Giáp - 3.200m², 2 Mặt Tiền + View Hồ",
    description:
      "39m mặt tiền Võ Nguyên Giáp + 72m mặt tiền đường Cao đẳng + 1 mặt giáp hồ. Cách Hùng Vương 500m.",
    type: "website",
    locale: "vi_VN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  )
}
