import ServiceImg from "@/assets/images/Rectangle 46.png"
import CommonButton from "@/common/CommonButton";
import { BookMarkIcon, LikeIcon, RedBadgeIcon, StarIcon } from "@/components/svg/SvgIcon";
const OurMission = () => {
    return (
        <div>

            <div className="flex justify-between items-center gap-16 section-padding-x">
                <div className="w-3/5">
                    <img className="w-full h-[625px] object-cover rounded-2xl" src={ServiceImg} alt="service img" />
                </div>
                <div className="w-2/5">
                    <h2 className="text-[#1A1A2E] text-5xl mt-5 leading-16">Your Trusted Partner in Vehicle Care & Maintenance</h2>
                    <div className="border-l-4 border-[#172748] rounded pl-6 mt-8 mb-6">
                        <h2>Our Mission</h2>
                        <p className="text-[#4A5565] text-lg mt-3">Since day one, we’ve set out to deliver auto service that’s honest, transparent, and centered around you — the driver. Our certified technicians and customer-first approach ensure your vehicle is in safe hands, every time</p>
                    </div>
                    <p className="text-[#9C9C9C] text-xl border-l-4 border-[#F2F2F2] pl-6 mb-6">Locally owned & operated</p>
                    <p className="text-[#9C9C9C] text-xl border-l-4 border-[#F2F2F2] pl-6 mb-6">10,000+ vehicles serviced</p>
                    <p className="text-[#9C9C9C] text-xl border-l-4 border-[#F2F2F2] pl-6 mb-14">ASE-certified professionals</p>
                    <CommonButton name="Explore Services" />
                </div>
            </div>


            <div className="bg-[#F9F9F9] py-10 my-15 lg:my-30">
                <div className="grid grid-cols-4 gap-10 section-padding-x">
                    <div className="flex flex-col justify-center items-start border-r border-dashed border-[#B7BCC6]">
                        <RedBadgeIcon />
                        <h2 className="text-[#1A1A2E] text-5xl font-bold mt-6">25+</h2>
                        <p className="text-[#292929]">Certified Technicians</p>
                    </div>
                    <div className="flex flex-col justify-center items-start border-r border-dashed border-[#B7BCC6]">
                        <LikeIcon />
                        <h2 className="text-[#1A1A2E] text-5xl font-bold mt-6">98%
                        </h2>
                         <p className="text-[#292929]">Satisfaction Rate</p>
                    </div>
                    <div className="flex flex-col justify-center items-start border-r border-dashed border-[#B7BCC6]">
                        <StarIcon />
                        <h2 className="text-[#1A1A2E] text-5xl font-bold mt-6">4.7</h2>
                         <p className="text-[#292929]">Overall Customer Rating by google </p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <BookMarkIcon />
                        <h2 className="text-[#1A1A2E] text-5xl font-bold mt-6">10+</h2>
                         <p className="text-[#292929]">Years of Experiences</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OurMission;