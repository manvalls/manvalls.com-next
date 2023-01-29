import './globals.css'

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
