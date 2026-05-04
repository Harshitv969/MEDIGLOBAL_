import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

const whatsappUrl = 'https://wa.me/447405040652';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <>
      <div
        className={`hidden md:block transition-all duration-300 ease-in-out ${scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-1.5 opacity-100'
          } overflow-hidden`}
        style={{ background: 'linear-gradient(90deg,#0f766e,#0d9488)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white text-[11px] tracking-wide">
          <div className="flex gap-6">
            <a href="tel:02039166660" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={11} /> 0203 916 6660
            </a>
            <a href="mailto:info@mediglobal.info" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail size={11} /> info@mediglobal.info
            </a>
          </div>
          <span className="opacity-85">24/7 Healthcare Staffing Support</span>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b ${scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg border-teal-100/60'
            : 'bg-white/95 backdrop-blur-md shadow-none border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="MediGlobal"
                className="h-12 md:h-14 w-auto object-contain shrink-0"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1 ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-all duration-200 group ${isActive(link.href) ? 'text-teal-700' : 'text-gray-500 hover:text-teal-700'
                    }`}
                >
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-200 ${isActive(link.href) ? 'bg-teal-50/80' : 'bg-transparent group-hover:bg-teal-50/60'
                      }`}
                  />
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ease-out ${isActive(link.href) ? 'w-5/6 opacity-100' : 'w-0 opacity-0 group-hover:w-5/6 group-hover:opacity-100'
                      }`}
                    style={{ background: 'linear-gradient(90deg,#0f766e,#14b8a6)' }}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 py-2 text-xs font-semibold rounded-lg border border-teal-600 text-teal-700 overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg,#0f766e,#14b8a6)' }} />
                <span className="relative z-10">WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="relative px-5 py-2 text-xs font-semibold rounded-lg text-white overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(20,184,166,0.4)]"
                style={{ background: 'linear-gradient(135deg,#b91c1c,#ef4444)' }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(link.href)
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50/60'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-sm font-medium text-center text-teal-700 border border-teal-600 rounded-xl hover:bg-teal-50 transition-all duration-200"
                >
                  WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-2.5 text-sm font-semibold text-center text-white rounded-xl transition-all duration-200 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg,#0f766e,#14b8a6)' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <img src="/logo.png" alt="MediGlobal" className="h-12 w-auto object-contain mb-4 brightness-110" />
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              A leading healthcare staffing agency connecting exceptional professionals with NHS
              and private providers across the UK.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-xs text-gray-400 hover:text-teal-400 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-2 text-xs text-gray-400">
            <a href="tel:02039166660" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Phone size={13} /> 0203 916 6660
            </a>
            <a href="mailto:info@mediglobal.info" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Mail size={13} /> info@mediglobal.info
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              WhatsApp: +44 7405 040 652
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} MediGlobal Healthcare Staffing. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] transition-all duration-300"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.150-1.255-.463-2.390-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.130-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.050-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.500-.669-.510-.173-.008-.371-.010-.570-.010-.198 0-.520.074-.792.372-.272.297-1.040 1.016-1.040 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.360.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.860 9.860 0 01-1.510-5.260c.001-5.450 4.436-9.884 9.888-9.884 2.640 0 5.122 1.030 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.450-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .160 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z" />
      </svg>
    </a>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}