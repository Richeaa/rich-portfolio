import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Contact', href: '#contact' },
  ];

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50">
      <div
        className="backdrop-blur-xl bg-surface-900/70 rounded-full border border-surface-border shadow-bento"
        data-aos="fade-down"
      >
        <div className="relative flex h-14 items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-brand-300 transition-colors">
            <span className="font-mono text-sm font-semibold tracking-tight text-brand-400">
              rich<span className="text-slate-500">.</span>bi
            </span>
          </a>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                
                  key={item.name}
                  href={item.href}
                  className="px-2 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-surface-700/60 hover:bg-surface-700 border border-surface-border rounded-full px-3 py-1.5 transition-colors font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Query
              <kbd className="text-[10px] text-slate-500 border border-surface-border rounded px-1">CMD K</kbd>
            </button>

            
              href="https://github.com/Richeaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.12-1.48c-.91-.63.07-.62.07-.62a2.1 2.1 0 011.54 1.03 2.13 2.13 0 002.92.83 2.14 2.14 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 011.03-2.68 3.59 3.59 0 01.1-2.64s.84-.27 2.75 1.02a9.53 9.53 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02a3.59 3.59 0 01.1 2.64 3.86 3.86 0 011.03 2.68c0 3.83-2.34 4.68-4.57 4.93a2.4 2.4 0 01.69 1.88v2.8c0 .27.18.59.7.48A10 10 0 0012 2z"
                />
              </svg>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-400 hover:bg-surface-700/60 hover:text-white transition-colors"
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

      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="backdrop-blur-xl bg-surface-900/80 rounded-3xl border border-surface-border shadow-bento">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-surface-700/60 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={openCommandPalette}
                className="w-full flex items-center justify-center gap-2 text-slate-300 hover:text-white px-3 py-2.5 mt-2 rounded-xl bg-surface-700/60 border border-surface-border font-mono text-sm"
              >
                Quick Navigate
              </button>
              <div className="pt-2 mt-2 border-t border-surface-border">
                
                  href="https://github.com/Richeaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-slate-300 hover:text-brand-300 px-3 py-2 rounded-xl hover:bg-surface-700/60 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
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
