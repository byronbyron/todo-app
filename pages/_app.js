import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
