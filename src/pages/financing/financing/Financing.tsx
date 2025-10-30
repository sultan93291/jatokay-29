import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import { MoveLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Logo1 from "@/assets/images/sunbit logo.png"
import Logo2 from "@/assets/images/2023_synchrony_basic_logo 1.png"
import Logo3 from "@/assets/images/american logo.png"
import Logo4 from "@/assets/images/Copy-of-Logo-min-e1736503402897 1.png"
import Logo5 from "@/assets/images/affirm logo.png"

const Financing = () => {
    return (
        <div>
            <div className="m-2 md:m-3 lg:m-5">
                <CommonBanner BannerImg={BannerImg} title="Flexible Financing to Keep You Moving" description=" Car troubles shouldn’t slow you down. With our easy payment plans and trusted financing partners, you can get the repairs you need today — and pay over time with comfort and confidence." />
            </div>
            <div className="my-15 lg:my-30 section-padding-x">
                <h2 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Auto Repair Financing</h2>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl mt-4.5">Unexpected vehicle repairs can be stressful and disruptive. Rather than putting off crucial maintenance, our financing options allow you to spread the cost over manageable monthly payments. We work with you to identify the right solution for your budget — whether you’re dealing with minor service or major repair work.</p>
                <h2 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">Benefits of Auto Repair Financing</h2>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl mt-4.5">With auto repair financing, you can stop stressing about those necessary repairs that might strain your wallet. Instead of shelling out a big chunk of cash all at once, you can break it down into easy monthly payments. This way, your ride stays safe and dependable without emptying your bank account. We’re here to help you find financing options that work for you. Whether it’s a quick plan for minor fixes or a longer deal for bigger services, our team has got your back. With flexible terms and great rates, we aim to make auto repair financing easy for everyone. Bridgestone CFNA Credit Card.</p>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl mt-4.5">We partner with trusted financing providers to make your auto service more affordable:</p>
                <div>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> complete  battery and charging system test</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> Electrical draw testing</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> Clean battery terminals and cat)le connections</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> Install rew batter v with aoorooriate specifications</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> apply anti-corrosion treatment</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> Dispose of old battery properly</p>
                    <p className="flex items-center gap-2 text-[#585858] text-sm md:text-base lg:text-xl mb-3 mt-2"><span className="bg-[#E63946] w-6 h-6 rounded-full flex justify-center items-center text-sm text-white"><MoveLeftIcon width={16} height={16} /></span> Warranty registration and documentation</p>
                </div>
                <h2 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">Learn More About Auto Repair Financing</h2>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl mt-4.5">We're all about giving you great automotive services and flexible financing options that fit your needs. Whether you need a quick oil change, some serious repairs, or new tires, our friendly team is here to help you out.</p>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl">When it comes to financing for auto repairs, trust the folks at Rick’s Tire & Auto Service. We're committed to providing awesome service and finding the best financing deals for you. Don’t let repair costs stress you out –  <Link to={'/contact'} className="font-bold underline">Contact Us</Link>  today to find out more about our financing plans and book your service appointment in Irving, TX!</p>
            </div>
            <div className="mb-15 lg:mb-30 section-padding-x">
                <h2 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Trusted Financing Partners</h2>
                <p className="text-[#585858] text-sm md:text-base lg:text-xl mt-4.5">We’ve partnered with top automotive financing providers for quick approvals and flexible terms.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-11 items-center my-[30px] lg:my-15">
                    {
                        [Logo1, Logo2,Logo3, Logo4, Logo5]?.map(logo => (
                            <div className="bg-[#F8F8F8] py-8 rounded-xl flex justify-center items-center h-[140px]">
                                <img className="object-cover" src={logo} alt="logo" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Financing;