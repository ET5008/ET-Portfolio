import Nav from './Nav';
import Footer from './Footer';
import VersionBanner from '../ui/VersionBanner';
import VersionSwitcher from '../ui/VersionSwitcher';
import VersionTimeline from '../version-history/VersionTimeline';
import VersionPreview from '../version-history/VersionPreview';

/**
 * Layout wrapper component that includes Nav, Footer, and version features
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <VersionBanner />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <VersionSwitcher />
      <VersionTimeline />
      <VersionPreview />
    </div>
  );
}
