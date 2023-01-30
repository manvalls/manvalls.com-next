import './globals.css'
import { locales } from '@/translations'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: any) {
  return (
    <html lang={locale}>
      <head />
      <body>{children}</body>
    </html>
  )
}
