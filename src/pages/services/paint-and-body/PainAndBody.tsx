 import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import { RightCurveIcon } from "@/components/svg/SvgIcon";

const PainAndBody = () => {
    return (
               <div>
            <div className="m-5">
                <CommonBanner BannerImg={BannerImg} title="Paint & Body Repair Bring Back the Original Shine" description="From minor scratches to severe collision damage, our skilled technicians bring your car’s body and paint back to flawless condition. Using advanced color-matching systems and premium-grade materials, we ensure your vehicle regains its original shine and showroom finish." />
            </div>
            <div className="section-padding-x flex flex-col lg:flex-row gap-4 xl:gap-10 my-15 lg:my-30">
                {/* Left Side Content */}
                <div className="lg:w-[65%] bg-[#f8f8f8] lg:p-10 p-4 rounded-3xl">
                    <h2 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Paint & Body Service  </h2>
                    <p className="text-[#585858] md:text-lg mt-4.5">From small scratches to major collision damage, our expert technicians restore your car’s body and paintwork to perfection. We use advanced color-matching technology and high-quality materials to make your vehicle look brand new again.
                    </p>

                    {/* What's Included */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">What We Offer?</h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Full-body repainting and touch-ups</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Scratch, dent, and scuff mark removal</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Collision and frame damage repair</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Paint color matching and blending</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Panel replacement and body alignment</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Sanding, priming, and clear coat finishing</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Buffing and polishing for showroom shine</li>
                        </ul>
                    </div>

                    {/* What We Offer */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold">Performance Enhancements </h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Premium-grade clear coat for long-lasting gloss</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Ceramic paint protection for durability</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Custom detailing and finishing packages</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Paint correction for swirl-free finish</li>
                        </ul>
                    </div>

                    {/* Why This Service */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">Why This Service is Important</h3>
                        <p className="text-[#585858] lg:text-lg mt-4.5">
                            Your car’s exterior isn’t just about looks — it’s your vehicle’s first line of defense against rust, corrosion, and weather damage. Timely paint and body repairs protect your car’s structure, maintain its resale value, and keep it looking sharp for years. A well-maintained body not only turns heads but also ensures your car stays strong inside and out.
                        </p>
                    </div>
                </div>

                {/* Right Side Card */}
                <div className="lg:w-[35%] bg-[#f8f8f8] rounded-2xl lg:p-8 p-4 h-fit">
                    <h3 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">Service Details</h3>

                    <p className="text-[#585858] md:text-xl lg:text-2xl lg:mb-5 mb-3 lg:mt-8 mt-4">
                        <span className="text-black">Duration:</span> 30 minutes
                    </p>
                    <p className="text-gray-700 md:text-xl lg:text-2xl lg:mb-5 mb-3 border-b pb-5 border-[#E2E2E2]">
                        <span className="text-black">Price Range:</span> $129 - $279
                    </p>

                    <div className="space-y-6">
                        <button type="button" className="w-full px-6 py-3 active:scale-95 transition bg-[#E63946] rounded-2xl text-[#FFF] shadow-lg shadow-[#E63946]/30 cursor-pointer">
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

export default PainAndBody;