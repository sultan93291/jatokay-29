import LogoImg from "@/assets/images/logo.png"
import { EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon } from "@/components/svg/SvgIcon";
import BookAppointmentDialog from "./BookAppointmentDialog";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {


    const navigate = useNavigate();

    const handleTestimonialClick = () => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById("testimonial");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <div className="m-2 md:m-3 lg:m-5 bg-[#1A1A1A] rounded-3xl">
            <div className="section-padding-x lg:py-20 py-10">
                <div className="bg-[#232323] rounded-3xl lg:p-8 p-4 md:flex items-center justify-between lg:mb-20 mb-10">
                    <div className="w-full md:w-[60%]">
                        <h2 className="text-[#FFF] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold">Your Car Deserves the Best Care</h2>
                        <p className="text-[#E0E0E0] lg:text-lg md:mt-4 mt-2">Schedule your next service today and experience the difference of professional auto care</p>
                    </div>


                    <BookAppointmentDialog
                        Button={
                            <button type="button" className="px-6 py-3 md:mt-0 mt-4 active:scale-95 transition bg-white rounded-2xl text-[#1A1A2E] shadow-lg shadow-white/30 cursor-pointer">
                                Book Appointment
                            </button>
                        }
                    />



                </div>
                <div className="flex flex-col xl:flex-row items-start justify-between">
                    <div className="xl:w-[30%]">
                        <img className="w-32 h-full md:w-34 object-cover" src={LogoImg} alt="logo image" />
                        <p className="text-[#FFF] md:text-xl my-6">Your trusted partner for professional auto repair
                            services. Quality workmanship and honest
                            pricing since 2010.</p>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#232323] hover:bg-white hover:text-black text-white cursor-pointer rounded-4xl w-12 h-12 flex justify-center items-center">
                                <FacebookIcon />
                            </div>
                            <div className="bg-[#232323] hover:bg-white hover:text-black text-white cursor-pointer rounded-4xl w-12 h-12 flex justify-center items-center">
                                <InstagramIcon />
                            </div>
                            <div className="bg-[#232323] hover:bg-white hover:text-black text-white cursor-pointer rounded-4xl w-12 h-12 flex justify-center items-center">
                                <LocationIcon />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row xl:gap-6 lg:gap-12 gap-6 xl:mt-0 mt-8">
                        <div>
                            <h2 className="text-[#FFF] text-lg md:text-xl lg:text-[23px] font-bold lg:mb-6 mb-4">Quick Actions</h2>
                            <div className="flex flex-col">
                                <Link className="text-[#585858] hover:text-gray-400 md:text-xl mb-2.5 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/">Home</Link>
                                <Link className="text-[#585858] hover:text-gray-400 md:text-xl mb-2.5 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/about">About us</Link>
                                <Link className="text-[#585858] hover:text-gray-400 md:text-xl mb-2.5 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/services/mobile-mechanic">Services</Link>
                                <a className="text-[#585858] hover:text-gray-400 md:text-xl mb-2.5 hover:underline cursor-pointer" onClick={handleTestimonialClick}>Testimonial</a>
                                <Link className="text-[#585858] hover:text-gray-400 md:text-xl mb-2.5 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/contact">Contact</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#FFF] text-lg md:text-xl lg:text-[23px] font-bold lg:mb-6 mb-4">Contact Us</h2>
                            <p className="text-[#585858] md:text-xl mb-2.5 flex items-center gap-2"><div className="text-white"><LocationIcon /></div> 23 Auto Street, Motor City, MC 12345</p>
                            <p className="text-[#585858] md:text-xl mb-2.5 flex items-center gap-2"><div className="text-white"><PhoneIcon /></div> (555) 123-4567</p>
                            <p className="text-[#585858] md:text-xl mb-2.5 flex items-center gap-2"><div className="text-white"><EmailIcon /></div> Info@expertauto.com</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#585858] pt-8 mt-8 flex justify-center items-center">
                    <p className="text-[#CACACA] text-sm">&copy; 2025 ULTIMACARS. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;