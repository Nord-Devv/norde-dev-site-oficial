import { Metadata } from 'next';
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Nord Dev',
  icons: '/favicon/favicon.ico',
  description: 'Desenvolvimento web inovador para impulsionar o seu sucesso online. Conecte-se, inspire-se, evolua - somos a sua parceira no mundo digita'
}
export default function RootLayout({children}: {
children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
