import Header from './components/Header'
import './globals.css'


export const metadata = {
  title: 'Next js login',
  description: 'login with next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
