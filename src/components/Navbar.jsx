import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '#home', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Certificate', href: '#certificate', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-b-2" data-aos="fade-down" >
            <div className="relative flex h-24 items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-2xl text-neutral-50 font-bold">
                  Port<span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">folio</span>
                </h1>
              </div>

              {/* Center: Navigation Links (hidden on small screens) */}
              <div className="hidden md:block">
                <div className="space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? ' text-sky-200'
                          : 'text-gray-300  hover:text-sky-100',
                        'px-3 py-2 text-lg font-medium'
                      )}
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
                  className="text-gray-400 hover:text-blue-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
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
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Dropdown Panel (visible when hamburger is clicked) */}
          <DisclosurePanel className="md:hidden" >
            <div className="space-y-1 px-2 pb-3 pt-2 text-center ">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'text-sky-200'
                      : 'text-gray-300 hover:text-sky-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
