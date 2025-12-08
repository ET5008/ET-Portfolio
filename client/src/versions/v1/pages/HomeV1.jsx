// Portfolio V1.0 - Preserved Version
import { Nav, Footer } from '@shared';
import HeroV1 from '../sections/HeroV1';
import AboutV1 from '../sections/AboutV1';
import WorkV1 from '../sections/WorkV1';
import ContactV1 from '../sections/ContactV1';

/**
 * Home page component - Portfolio V1.0
 * Preserved version from initial portfolio launch
 */
function HomeV1() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <HeroV1 />
        <AboutV1 />
        <WorkV1 />
        <ContactV1 />
      </main>
      <Footer />
    </div>
  );
}

export default HomeV1;
