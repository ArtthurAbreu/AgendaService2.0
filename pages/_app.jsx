import "/styles/globals.scss";
import Layout from "src/Layout/Layout";


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
