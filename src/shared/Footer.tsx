import LogoImg from "@/assets/images/logo.png"
import { EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon } from "@/components/svg/SvgIcon";
const Footer = () => {
    return (
        <div className="m-5 bg-[#1A1A1A] rounded-3xl">
            <div className="section-padding-x py-20">
                <div className="bg-[#232323] rounded-3xl p-8 flex items-center justify-between mb-20">
                    <div>
                        <h2 className="text-[#FFF] text-[32px] font-bold">Your Car Deserves the Best Care</h2>
                        <p className="text-[#E0E0E0] text-lg">Schedule your next service today and experience the difference of professional auto care</p>
                    </div>
                    <button type="button" className="px-6 py-3 active:scale-95 transition bg-white rounded-2xl text-[#1A1A2E] shadow-lg shadow-white/30 cursor-pointer">
                        Book Appointment
                    </button>
                </div>
                <div className="flex items-start justify-between">
                    <div className="w-[30%]">
                        <img className="h-[84px] w-[108px]" src={LogoImg} alt="logo image" />
                        <p className="text-[#FFF] text-xl my-6">Your trusted partner for professional auto repair
                            services. Quality workmanship and honest
                            pricing since 2010.</p>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#232323] rounded-4xl w-12 h-12 flex justify-center items-center">
                                <FacebookIcon />
                            </div>
                            <div className="bg-[#232323] rounded-4xl w-12 h-12 flex justify-center items-center">
                                <InstagramIcon />
                            </div>
                            <div className="bg-[#232323] rounded-4xl w-12 h-12 flex justify-center items-center">
                                <LocationIcon />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <h2 className="text-[#FFF] text-[23px] font-bold mb-6">Quick Actions</h2>
                            <div className="flex flex-col">
                                <a className="text-[#585858] text-xl mb-2.5 hover:underline" href="">Home</a>
                                <a className="text-[#585858] text-xl mb-2.5 hover:underline" href="">About us</a>
                                <a className="text-[#585858] text-xl mb-2.5 hover:underline" href="">Services</a>
                                <a className="text-[#585858] text-xl mb-2.5 hover:underline" href="">Testimonial</a>
                                <a className="text-[#585858] text-xl mb-2.5 hover:underline" href="">Contact</a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#FFF] text-[23px] font-bold mb-6">Contact Us</h2>
                            <p className="text-[#585858] text-xl mb-2.5 hover:underline flex items-center gap-2"><LocationIcon /> 23 Auto Street, Motor City, MC 12345</p>
                            <p className="text-[#585858] text-xl mb-2.5 hover:underline flex items-center gap-2"><PhoneIcon /> (555) 123-4567</p>
                            <p className="text-[#585858] text-xl mb-2.5 hover:underline flex items-center gap-2"><EmailIcon /> Info@expertauto.com</p>
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