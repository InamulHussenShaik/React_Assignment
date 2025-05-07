import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Menu,
  Github,
  Moon,
} from "lucide-react";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Inline CSS styles for links
  const linkStyle = {
    textDecoration: 'none',
    fontSize: '0.905rem', // 14px
    fontWeight: '500',
    color: 'black', // Black color for all items
    transition: 'color 0.2s ease',
  };

  const activeLinkStyle = {
    ...linkStyle,
    fontWeight: '600', // Bold for active link
    color: 'black',    // Ensure black color even for active items
  };

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      {/* Full-Width Fixed Top Nav */}
      <header className="w-full border-b bg-white text-gray-900 fixed top-0 left-0 right-0 z-10">
       <div className="container mx-auto px-4 flex items-center justify-between h-16">

          {/* Left Logo/Title */}
          <div className="flex items-center space-x-6">
          <Link to="/" className="font-semibold text-lg flex items-center space-x-2">
            <span className="font-bold text-black">/</span> {/* Bold and black for this span */}
            <span className="font-bold text-black">hussen/ui</span> {/* Bold and black for this span */}
          </Link>


            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.url;

                // Apply styles conditionally for active and non-active items
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    style={isActive ? activeLinkStyle : linkStyle}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search documentation..."
                className="pl-3 pr-10 py-1.5 rounded-md border text-sm bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <kbd className="absolute right-2 top-1.5 text-gray-400 text-xs">⌘K</kbd>
            </div>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
  <Github style={{ width: "20px", height: "20px", color: "black", strokeWidth: 2.5 }} />
</a>


            <button>
              <Moon className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white w-full border-t px-4 py-2">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url;
              return (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setMenuOpen(false)}
                  style={isActive ? activeLinkStyle : linkStyle}
                  className="flex items-center py-2 rounded hover:bg-gray-100"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1 bg-gray-100 w-full pt-16">
        <div className="w-full px-4 py-6">{children}</div>
      </main>
    </div>
  );
}
