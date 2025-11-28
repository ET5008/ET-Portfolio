import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Extras-Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';

/**
 * Home page component - Portfolio V2.0
 * Refactored to use Layout and section components with separated data layer
 */
function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Home;
