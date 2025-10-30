import LogoImg from "@/assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BookAppointmentDialog from "./BookAppointmentDialog";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = (() => setIsOpen(false))
  const [scrolled, setScrolled] = useState(false);
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



  // ✅ Detect scroll and toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();


  const handleNavigate = (path: string) => {
    navigate(path);
    setIsServicesOpen(false);
  }

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-black/40 shadow-md backdrop-blur-md top-0" : "bg-transparent top-8"}`}>
      <div className="flex justify-between items-center lg:px-12 md:px-10 px-8 w-full py-5">
        {/* Logo */}
        <div>
          <img className="w-32 h-10 md:w-40 lg:h-[50px] md:h-15" src={LogoImg} alt="logo" />
        </div>

        {/* Navigation */}
        <div className="lg:flex items-start space-x-6 text-white font-medium relative hidden">
          {navItems.map((nav) =>
            nav.path === "/service" ? (
              <div
                key={nav.level}
                className="relative"
                ref={dropdownRef}
                onClick={() => setIsServicesOpen(true)}
              >
                <button
                  className={`flex items-center transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${isServicesOpen
                    ? "text-[#FFF] font-bold border-b-2"
                    : "text-[#D5D5D5]"
                    }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
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

                <div
                  className={cn(
                    "absolute z-40 top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden text-gray-800 border border-gray-100 px-4 py-2 transition-all duration-200",
                    !isServicesOpen && "opacity-0"
                  )}
                >
                  {serviceDropdownItems.map((item) => (
                    <button
                      key={item.level}
                      onClick={() => handleNavigate(item.path)}
                      className="block cursor-pointer text-lg font-bold hover:text-[#E63946] whitespace-nowrap border-b last:border-none last:mb-0 last:pb-0 border-[#D9D9D9] pb-3 mb-3"
                    >
                      {item.level}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={nav.level}
                to={nav.path}
                className={({ isActive, isPending }) =>
                  `transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${isPending
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
        <div className="lg:block hidden">
          <BookAppointmentDialog buttonLabel="Book Appointment" />

        </div>
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </button>

      </div>





      {/* ✅ Dark Overlay */}
      {
        isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeDrawer}
          ></div>
        )
      }

      {/* ✅ Mobile Drawer Working */}
      <div
        className={`fixed top-0 right-0 h-screen w-[260px] bg-[#E63946] shadow-lg z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 pt-10 border-b border-white/20">
          <X className="text-xl cursor-pointer text-white" onClick={closeDrawer} />
        </div>

        <div className="flex flex-col p-6 gap-5">
          {navItems.map((nav) =>
            nav.path === "/service" ? (
              <div
                key={nav.level}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <button
                  className={`flex items-center transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${isServicesOpen
                    ? "text-[#FFF] font-bold border-b-2"
                    : "text-[#D5D5D5]"
                    }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
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
                  <div className="absolute z-40 top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden text-gray-800 border border-gray-100 px-4 py-2">
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
                  `transition duration-150 ease-in-out hover:text-[#FFF] hover:border-b-2 ${isPending
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
        <div className="border mx-4 rounded-3xl flex justify-center items-center border-white hover:shadow-lg">
          <BookAppointmentDialog buttonLabel="Book Appointment" />
        </div>
      </div>
    </nav >
  );
};

export default Navbar;