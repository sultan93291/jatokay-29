import LogoImg from "@/assets/images/logo.png";
import CommonButton from "@/common/CommonButton";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { level: "Home", path: "/" },
    { level: "About Us", path: "/about" },
    { level: "Service", path: "/service" },
    { level: "Financing", path: "/financing" },
    { level: "Blog", path: "/blog" },
    { level: "Contact", path: "/contact" },
  ];

  const serviceDropdownItems = [
    { level: "Mobile Mechanic", path: "/services/mobile-mechanic" },
    { level: "In Shop Repairs", path: "/services/in-shop-repairs" },
    { level: "Paint and body", path: "/services/paint-and-body" },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative w-full z-10">
      <div className="flex justify-between items-center px-12 w-full absolute top-8">
        {/* Logo */}
        <div>
          <img className="w-[104px] h-[88px]" src={LogoImg} alt="logo" />
        </div>

        {/* Navigation */}
        <div className="flex items-start space-x-6 text-white font-medium relative">
          {navItems.map((nav) =>
            nav.path === "/service" ? (
              <div
                key={nav.level}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <button
                  className={`flex items-center transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${
                    isServicesOpen
                      ? "text-[#FFF] font-bold border-b-2"
                      : "text-[#D5D5D5]"
                  }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden text-gray-800 border border-gray-100 px-4 py-2">
                    {serviceDropdownItems.map((item) => (
                      <NavLink
                        key={item.level}
                        to={item.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block text-lg font-bold hover:text-[#E63946] whitespace-nowrap border-b last:border-none last:mb-0 last:pb-0 border-[#D9D9D9] pb-3 mb-3"
                      >
                        {item.level}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={nav.level}
                to={nav.path}
                className={({ isActive, isPending }) =>
                  `transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FFF] font-bold border-b-2"
                      : "text-[#D5D5D5]"
                  }`
                }
              >
                {nav.level}
              </NavLink>
            )
          )}
        </div>

        {/* Button */}
        <div>
          <CommonButton name="Book Appointment" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;