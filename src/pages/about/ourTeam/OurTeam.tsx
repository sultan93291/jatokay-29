import TeamMember1 from "@/assets/images/Shape (1).png"
import TeamMember2 from "@/assets/images/Shape (3).png"
import TeamMember3 from "@/assets/images/Shape (5).png"
import TeamMember4 from "@/assets/images/Shape (6).png"
import TeamMember5 from "@/assets/images/Shape (7).png"

const OurTeam = () => {
    return (
        <div className="mb-15 lg:mb-30">
            <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">MEET OUR TEAM</h2>
            <p className="text-[#585858] text-lg md:text-xl lg:text-[22px] xl:text-2xl mt-3 text-center lg:mb-12 mb-6">Real people, real passion dedicated to keeping you safely on the road.</p>
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="xl:w-[35%] flex flex-col md:flex-row xl:flex-col gap-8">
                    <img className="w-full md:w-[48%] xl:w-full h-full lg:h-[522px] object-cover rounded-2xl" src={TeamMember1} alt="team member" />
                    <img className="w-full md:w-[47%] xl:w-full h-full lg:h-[522px] object-cover rounded-2xl" src={TeamMember2} alt="team member" />
                </div>
                <div className="xl:w-[65%] flex flex-col gap-8">
                    <div>
                        <img className="w-full h-full xl:h-[662px] object-cover rounded-2xl" src={TeamMember3} alt="team member" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        <img className="md:w-[48%] h-full md:h-[380px] object-cover rounded-2xl" src={TeamMember4} alt="team member" />
                        <img className="md:w-[47%] lg:w-[48%] xl:w-[49%] h-full md:h-[380px] object-cover rounded-2xl" src={TeamMember5} alt="team member" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;