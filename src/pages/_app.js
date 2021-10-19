import Layout from '../components/layout'
import Header from '../Components/Header'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Light from '../styles/Light'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Light}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </Layout>
    </ThemeProvider>
  )
}
