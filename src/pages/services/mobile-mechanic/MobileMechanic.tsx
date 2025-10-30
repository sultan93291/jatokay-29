import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import { RightCurveIcon } from "@/components/svg/SvgIcon";

const MobileMechanic = () => {
    return (
        <div>
            <div className="m-2 md:m-3 lg:m-5">
                <CommonBanner BannerImg={BannerImg} title="Why Our Mobile Service Stands Out" description="Stuck at home, work, or on the roadside? Our certified mobile mechanics bring the garage to your driveway. From diagnostics to full repairs, we handle it all on-site—fast, reliable, and stress-free." />
            </div>
            <div className="section-padding-x flex flex-col lg:flex-row gap-4 xl:gap-10 my-15 lg:my-30">
                {/* Left Side Content */}
                <div className="lg:w-[65%] bg-[#f8f8f8] lg:p-10 p-4 rounded-3xl">
                    <h2 className="text-[#1A1A2E] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Mobile Mechanic Service</h2>
                    <p className="text-[#585858] md:text-lg mt-4.5">
                        We know your time is valuable. That’s why we’ve made car repair easy and convenient.
                        Our mobile mechanics are experienced, insured, and deliver trustworthy, clean,
                        and top-notch service right at your location.
                    </p>

                    {/* What's Included */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">What’s Included In Our Service</h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> On-site vehicle inspection and issue diagnosis</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Engine, brake, or electrical system assessments using portable diagnostic tools</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Minor repairs and part replacements performed at your site</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Battery jump-start or replacement if required</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Tire inflation, puncture fix, or roadside assistance</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Professional safety check before completion</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Transparent cost estimate and digital invoice provided on-site</li>
                        </ul>
                    </div>

                    {/* What We Offer */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold">What We Offer?</h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> On-site vehicle diagnostics and quick repairs</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Routine maintenance — oil change, filter, and fluid checks</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Battery jump-start, replacement, and electrical testing</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Brake inspection and minor repair services</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Tire change, flat repair, and pressure adjustment</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Engine and cooling system troubleshooting</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> AC and heating system inspection</li>
                        </ul>
                    </div>

                    {/* Performance Enhancements */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Performance Enhancements</h3>
                        <ul className="space-y-4 mt-4.5 mb-8">
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Engine performance tuning and optimization</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Air intake and exhaust system upgrades</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> ECU (Engine Control Unit) remapping for improved power and torque</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Suspension and handling adjustments for smoother control</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Brake system upgrades for better stopping performance</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> High-performance oil and filter replacements</li>
                            <li className="flex gap-2 text-[#585858] text-sm md:text-base lg:text-xl"><RightCurveIcon /> Tire and wheel balancing for enhanced stability</li>
                        </ul>
                    </div>

                    {/* Why This Service */}
                    <div>
                        <h3 className="text-[#1A1A2E] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-8">Why This Service Is Important</h3>
                        <p className="text-[#585858] lg:text-lg mt-4.5">
                            Avoid towing delays and workshop queues. Our mobile mechanics bring expert care
                            straight to your location, saving you time and stress.
                        </p>
                    </div>
                </div>

                {/* Right Side Card */}
                <div className="lg:w-[35%] bg-[#f8f8f8] rounded-2xl lg:p-8 p-4 h-fit ">
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

export default MobileMechanic;