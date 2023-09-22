import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';
import CookieConsent from 'react-cookie-consent';
import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

// function MyApp({ Component, pageProps }) {

//   return 
  
//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp



function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(600);
    });
  });

  const router = useRouter();
  if(router.asPath =='/contact-us/' ||
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=navtobc_jan&utm_term=ds_us' ||
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=business_central_support&utm_term=ds_us' ||
      router.asPath =='/subscriber-thank-you/' ||
      router.asPath =='/not-for-profit-fundrasing-engagenment/' ||
      router.asPath == '/thank-you/email-subscriber/' ||
      router.asPath == '/subscribe-updates/' ||
      router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=business_central_support&utm_term=ds_us' ||
      router.asPath == '/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=navtobc_jan&utm_term=ds_us' ||
      router.asPath == '/thank-you/' ||
      router.asPath == '/thanks-webinar-registration/' ||
      router.asPath == '/dynamics-nav-support-ending-soon/' ||
      router.asPath =='/schedule-a-demo/'  ||
      router.asPath =='/schedule-a-demo' 
      
  )  {
    return (
      <>
      <LoadingBar
      color='#bb2b36'
      progress={progress}
      waitingTime={400}
      height={2}
      onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
      >
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking "Accept",
        you consent to the use of ALL the cookies. Do not sell my personal
        information.
      </CookieConsent>
      </>
    )
   
 };

  return <>
  <LoadingBar
      color='#bb2b36'
      progress={progress}
      waitingTime={400}
      height={2}
      onLoaderFinished={() => setProgress(0)}
      />
  <Layouts>
  <Component {...pageProps} />
  </Layouts>
  <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
      >
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking "Accept",
        you consent to the use of ALL the cookies. Do not sell my personal
        information.
      </CookieConsent>
  </>
}

export default MyApp
