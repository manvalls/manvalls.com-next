import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { locales } from './translations'

acceptLanguage.languages(locales)

export const config = {
  matcher: ['/']
}

const cookieName = 'i18next'

export function middleware(req: any) {
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = locales[0]

  if (
    !locales.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  return NextResponse.next()
}
