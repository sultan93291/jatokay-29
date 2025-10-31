import ServiceImg from "@/assets/images/Rectangle 46.png"
import { BookMarkIcon, LikeIcon, RedBadgeIcon, StarIcon } from "@/components/svg/SvgIcon";
import BookAppointmentDialog from "@/shared/BookAppointmentDialog";
const OurMission = () => {
    return (
        <div>

            <div className="flex flex-col xl:flex-row justify-between items-center xl:gap-16 lg:gap-6 gap-4 section-padding-x">
                <div className="xl:w-3/5 w-full">
                    <img className="w-full xl:h-[625px] md:h-[350px] h-full object-cover rounded-2xl" src={ServiceImg} alt="service img" />
                </div>
                <div className="xl:w-2/5">
                    <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 lg:leading-16">Your Trusted Partner in Vehicle Care & Maintenance</h2>
                    <div className="border-l-4 border-[#172748] rounded lg:pl-6 pl-3 lg:mt-8 mt-4 lg:mb-6 mb-3">
                        <h2>Our Mission</h2>
                        <p className="text-[#4A5565] md:text-lg mt-3">Since day one, we’ve set out to deliver auto service that’s honest, transparent, and centered around you — the driver. Our certified technicians and customer-first approach ensure your vehicle is in safe hands, every time</p>
                    </div>
                    <p className="text-[#9C9C9C] text-sm md:text-xl border-l-4 border-[#F2F2F2] pl-6 mb-6">Locally owned & operated</p>
                    <p className="text-[#9C9C9C] text-sm md:text-xl border-l-4 border-[#F2F2F2] pl-6 mb-6">10,000+ vehicles serviced</p>
                    <p className="text-[#9C9C9C] text-sm md:text-xl border-l-4 border-[#F2F2F2] pl-6 mb-14">ASE-certified professionals</p>
                    <BookAppointmentDialog buttonLabel="Explore Services"/>
                </div>
            </div>


            <div className="bg-[#F9F9F9] py-10 my-15 lg:my-30">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 section-padding-x">
                    <div className="flex flex-col justify-center items-center lg:text-start text-center lg:items-start pr-4 border-r border-dashed border-[#B7BCC6]">
                        <RedBadgeIcon />
                        <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">25+</h2>
                        <p className="text-[#292929]">Certified Technicians</p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:text-start text-center lg:items-start pr-4 lg:border-r border-dashed border-[#B7BCC6]">
                        <LikeIcon />
                        <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">98%
                        </h2>
                         <p className="text-[#292929]">Satisfaction Rate</p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:text-start text-center lg:items-start pr-4 border-r border-dashed border-[#B7BCC6]">
                        <StarIcon />
                        <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">4.7</h2>
                         <p className="text-[#292929]">Overall Customer Rating by google </p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:text-start text-center lg:items-start">
                        <BookMarkIcon />
                        <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6">10+</h2>
                         <p className="text-[#292929]">Years of Experiences</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OurMission;