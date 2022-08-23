import '../styles/globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { firebase } from 'config/firebaseConfig'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
