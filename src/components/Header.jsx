import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto pl-8">
        <div className="flex items-center justify-between ">
          <a href="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="34" viewBox="0 0 100 34" className="text-[#DD2825]">
              <path fill="currentColor" d="M92.236 15.957h-3.14v6.296h3.14c2.24 0 3.63-1.28 3.63-3.148 0-1.868-1.39-3.148-3.63-3.148zm-9.635-5.115V27.33h6.476v-4.148h3.34c4.114 0 7.017-2.702 7.017-6.077 0-3.375-2.903-6.077-7.017-6.077h-9.816v-.186zM71.48 15.957h-3.14v6.296h3.14c2.24 0 3.63-1.28 3.63-3.148 0-1.868-1.39-3.148-3.63-3.148zm-9.635-5.115V27.33h6.476v-4.148h3.34c4.114 0 7.017-2.702 7.017-6.077 0-3.375-2.903-6.077-7.017-6.077h-9.816v-.186zM53.697 27.33h6.476V10.842h-6.476V27.33zM42.14 15.957H39v6.296h3.14c2.24 0 3.63-1.28 3.63-3.148 0-1.868-1.39-3.148-3.63-3.148zm-9.635-5.115V27.33h6.476v-4.148h3.34c4.114 0 7.017-2.702 7.017-6.077 0-3.375-2.903-6.077-7.017-6.077h-9.816v-.186zM20.912 27.33h6.476V10.842h-6.476V27.33zM0 27.33h6.476V10.842H0V27.33z" />
            </svg>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="/products" className="text-gray-600 hover:text-gray-900 py-2 inline-flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="/resources" className="text-gray-600 hover:text-gray-900 py-2 inline-flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="/docs" className="text-gray-600 hover:text-gray-900">
              Docs
            </a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <a href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </a>
            <a href="/book-meeting" className="text-gray-600 hover:text-gray-900">
              Book a meeting
            </a>
            <a href="/try-redis" className="bg-[#DD2825] text-white px-6 py-6 hover:bg-[#B71C1C] transition-colors">
              Try Redis
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
