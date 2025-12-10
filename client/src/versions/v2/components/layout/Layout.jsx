import { Nav, Footer } from '@shared';
import { VersionSwitcher, VersionTimeline, VersionPreview } from '@v2';

/**
 * Layout wrapper component that includes Nav, Footer, and version features
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
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
