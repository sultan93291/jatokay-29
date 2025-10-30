import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import { RightCurveIcon } from "@/components/svg/SvgIcon";

const InShopRepairs = () => {
    return (
        <div>
            <div className="m-5">
                <CommonBanner BannerImg={BannerImg} title="Air Conditioning Repair" description="A reliable battery is crucial for starting your vehicle and powering systems. We test battery health and install quality batteries with warranties." />
            </div>
            <div className="section-padding-x flex flex-col lg:flex-row gap-4 xl:gap-10 my-15 lg:my-30">
                {/* Left Side Content */}
                <div className="lg:w-[65%] bg-[#f8f8f8] lg:p-10 p-4 rounded-3xl">
                    <h2 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">In Shop Repairs </h2>
                    <p className="text-[#585858] md:text-lg mt-4.5">
                        A reliable battery is crucial for starting your car and powering all its gadgets. We’ll check the battery’s health, the charging system, and any electrical draws to ensure a smooth start. If you need a replacement, we’ll provide a top-notch battery with a nationwide warranty!
                    </p>

                    {/* What's Included */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">what Included</h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> complete  battery and charging system test</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Electrical draw testing</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Clean battery terminals and cat)le connections</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Install rew batter v with aoorooriate specifications</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> apply anti-corrosion treatment</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Dispose of old battery properly</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Warranty registration and documentation</li>
                        </ul>
                    </div>

                    {/* Why This Service */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">Why This Service Matters</h3>
                        <p className="text-[#585858] md:text-lg mt-4.5">
                            Getting stuck with a dead battery is super annoying and can even be risky. Keeping an eye on your battery and swapping it out when needed can save you from surprises and keep your car's electronics safe from voltage issues.
                        </p>
                    </div>
                </div>

                {/* Right Side Card */}
                <div className="lg:w-[35%] bg-[#f8f8f8] rounded-2xl lg:p-8 p-4 h-fit  ">
                    <h3 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">Service Details</h3>

                    <p className="text-[#585858] md:text-xl lg:text-2xl lg:mb-5 mb-3 lg:mt-8 mt-4">
                        <span className="text-black">Duration:</span> 30 minutes
                    </p>
                    <p className="text-gray-700 md:text-xl lg:text-2xl lg:mb-5 mb-3 border-b pb-5 border-[#E2E2E2]">
                        <span className="text-black">Price Range:</span> $129 - $279
                    </p>

                    <div className="space-y-6">
                        <button type="button" className="w-full px-6 py-3 active:scale-95 transition bg-[#E63946] hover:bg-[#fa0419] rounded-2xl text-[#FFF] shadow-lg shadow-[#E63946]/30 cursor-pointer">
                            Book Appointment
                        </button>
                        <button type="button" className="px-6 w-full py-3 border-[#E2E2E2] border active:scale-95 transition bg-[#FAFAFA] rounded-2xl text-[#1A1A2E] shadow-lg shadow-[#FAFAFA]/30 cursor-pointer">
                            Ask A Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InShopRepairs;