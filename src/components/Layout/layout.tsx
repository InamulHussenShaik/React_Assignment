import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen container max-w-none">
      {/* Sidebar */}
      <aside
        className={`${
          isExpanded ? "w-64" : "w-16"
        } h-screen bg-gray-800 text-white fixed transition-all duration-300`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 text-lg font-bold">{isExpanded ? "My App" : "M"}</div>
        <nav className="mt-4">
          <ul>
            {items.map((item) => (
              <li
                key={item.title}
                className="p-4 md:hover:bg-gray-700 flex items-center"
              >
                <item.icon className="mr-2" />
                {isExpanded && <Link to={item.url}>{item.title}</Link>}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col ${
          isExpanded ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        {/* Top Bar */}
        <header
          className={`w-full h-16 bg-gray-900 text-white flex items-center px-4 fixed top-0 z-10 transition-all duration-300 ${
            isExpanded ? "pl-64" : "pl-16"
          }`}
        >
          <h1 className="text-lg font-bold flex-1">My App</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* <li>
                <Link to="/" className="hover:underline flex items-center">
                  <Home className="w-5 h-5 mr-1" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="hover:underline flex items-center">
                  <Settings className="w-5 h-5 mr-1" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
              </li> */}
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 mt-16">{children}</main>
      </div>
    </div>
  );
}