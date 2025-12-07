import Layout from '../components/layout/Layout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Contact from '../sections/Contact';

/**
 * Home page component - Portfolio V2.0
 * Refactored to use Layout and section components with separated data layer
 */
function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
}

export default Home;
