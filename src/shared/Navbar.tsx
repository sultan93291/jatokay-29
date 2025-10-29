import LogoImg from "@/assets/images/logo.png";
import CommonButton from "@/common/CommonButton";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm, type FieldValues } from "react-hook-form";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Form Data:", data);
    reset();
  };
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
    const handleClickOutside = (event: MouseEvent) => {
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

        {/* Button */}
        <div>





          <Dialog>
            <form>
              <DialogTrigger>
                <CommonButton name="Book Appointment" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[750px] h-[90vh] overflow-y-scroll bg-white">
                <h2 className="text-[32px] text-[#1A1A2E] font-bold text-center">Book an Appointment</h2>
                <p className="text-[#585858] text-lg mt-2 text-center mb-8">Schedule your service online and get real-time updates via ShopMonkey. We'll confirm your appointment shortly.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name Field */}
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Cena"
                        {...register("fullName", { required: true })}
                        className="w-full rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-sm">Required</span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between w-full gap-6">
                    {/* Phone Number */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="flex">
                        {/* Placeholder for the country code dropdown (as seen in the image) */}
                        <div className=" rounded-l-md bg-[#F9F9F9] p-2 flex items-center">
                          <span className="text-sm">🇺🇸 </span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          placeholder="(503) 338-2573"
                          {...register("phone", { required: true })}
                          className="w-full  border-l-0 rounded-r-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-red-500 text-sm">Required</span>
                      )}
                    </div>
                    {/* Email */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="johncena369@gmail.com"
                        {...register("email", { required: true })}
                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">Required</span>
                      )}
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div>
                    <h2 className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Details
                    </h2>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Year
                        </label>
                        <input
                          type="text"
                          placeholder="2022"
                          {...register("year", { required: true })}
                          className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {errors.year && (
                          <span className="text-red-500 text-sm">Required</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Make
                        </label>
                        <input
                          type="text"
                          placeholder="Toyota"
                          {...register("make", { required: true })}
                          className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {errors.make && (
                          <span className="text-red-500 text-sm">Required</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Model
                        </label>
                        <input
                          type="text"
                          placeholder="Camry"
                          {...register("model", { required: true })}
                          className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {errors.model && (
                          <span className="text-red-500 text-sm">Required</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service Type
                    </label>
                    <select
                      {...register("serviceType", { required: true })}
                      className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="mobile">Mobile Mechanic</option>
                      <option value="in-shop">In Shop Repairs</option>
                      <option value="paint">Paint & Body</option>
                    </select>
                    {errors.serviceType && (
                      <span className="text-red-500 text-sm">Required</span>
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        {...register("preferredDate", { required: true })}
                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        {...register("preferredTime", { required: true })}
                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                      />
                    </div>
                  </div>

                  {/* Additional Notes (renamed from Message) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Enter your message..."
                      {...register("notes")}
                      className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy/Consent Text */}
                  <p className="text-xs text-gray-500 pt-2">
                    Submitting this form means you agree to receive booking and service notifications.
                  </p>

                  {/* Submit Button */}
                  <button type="submit" className="px-6 w-full py-3 active:scale-95 transition bg-[#E63946] rounded-md text-[#FFF] shadow-lg shadow-[#E63946]/30 cursor-pointer">
                    Send Message
                  </button>
                </form>
              </DialogContent>
            </form>
          </Dialog>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;