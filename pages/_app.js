import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/loginForm.module.css';

// Rest of _app.tsx...


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp