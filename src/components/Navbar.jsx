import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Certificate', href: '#certificate', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50">
      {/* Glass Container */}
      <div 
        className="backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-lg"
        data-aos="fade-down"
      >
        <div className="relative flex h-16 items-center justify-between px-6">
          {/* Left: Home Icon */}
          <div className="flex items-center">
            <div className="text-gray-300 hover:text-sky-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
          </div>

          {/* Center: Navigation Links (hidden on small screens) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    item.current
                      ? 'text-white'
                      : 'text-gray-300 hover:text-sky-200'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: GitHub Icon */}
          <div className="hidden md:flex">
            <a
              href="https://github.com/Richeaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.12-1.48c-.91-.63.07-.62.07-.62a2.1 2.1 0 011.54 1.03 2.13 2.13 0 002.92.83 2.14 2.14 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 011.03-2.68 3.59 3.59 0 01.1-2.64s.84-.27 2.75 1.02a9.53 9.53 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02a3.59 3.59 0 01.1 2.64 3.86 3.86 0 011.03 2.68c0 3.83-2.34 4.68-4.57 4.93a2.4 2.4 0 01.69 1.88v2.8c0 .27.18.59.7.48A10 10 0 0012 2z"
                />
              </svg>
            </a>
          </div>

          {/* Hamburger Menu Button (visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Panel (visible when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    item.current
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-sky-200 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/20">
                <a
                  href="https://github.com/Richeaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-sky-200 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.12-1.48c-.91-.63.07-.62.07-.62a2.1 2.1 0 011.54 1.03 2.13 2.13 0 002.92.83 2.14 2.14 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 011.03-2.68 3.59 3.59 0 01.1-2.64s.84-.27 2.75 1.02a9.53 9.53 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02a3.59 3.59 0 01.1 2.64 3.86 3.86 0 011.03 2.68c0 3.83-2.34 4.68-4.57 4.93a2.4 2.4 0 01.69 1.88v2.8c0 .27.18.59.7.48A10 10 0 0012 2z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;