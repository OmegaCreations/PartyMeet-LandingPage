import Header from './Header'
import Hero from './Hero'
import About from './About'
import MailForm from './MailForm'
import Reviews from './Reviews'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Loader from './Loader'
import { useEffect, useState } from 'react'

const App = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    
    let timer = setTimeout(() => setLoaded(true), 2500);

    return () => {
      clearTimeout(timer);
    };

  }, []);

  return(
    <>
      { !loaded ? (
        <Loader />
      ) : 
      (
        <>
          <Header />
          <Hero />
          <About />
          <MailForm />
          <Reviews />
          <Newsletter />
          <Footer />
        </>
      )
}
      
    </>
  )
}

export default App