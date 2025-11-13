import Nav from './Nav';
import Footer from './Footer';

/**
 * Layout wrapper component that includes Nav and Footer
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
    </div>
  );
}
