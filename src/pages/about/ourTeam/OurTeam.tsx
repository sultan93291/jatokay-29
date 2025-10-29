import TeamMember1 from "@/assets/images/Shape (1).png"
import TeamMember2 from "@/assets/images/Shape (3).png"
import TeamMember3 from "@/assets/images/Shape (5).png"
import TeamMember4 from "@/assets/images/Shape (6).png"
import TeamMember5 from "@/assets/images/Shape (7).png"

const OurTeam = () => {
    return (
        <div className="mb-15 lg:mb-30">
            <h2 className="text-[#1A1A2E] text-5xl font-bold text-center">MEET OUR TEAM</h2>
            <p className="text-[#585858] text-2xl mt-3 text-center mb-12">Real people, real passion dedicated to keeping you safely on the road.</p>
            <div className="flex gap-8">
                <div className="w-[35%] flex flex-col gap-8">
                    <img className="w-full h-[522px] object-cover rounded-2xl" src={TeamMember1} alt="team member" />
                    <img className="w-full h-[522px] object-cover rounded-2xl" src={TeamMember2} alt="team member" />
                </div>
                <div className="w-[65%] flex flex-col gap-8">
                    <div>
                        <img className="w-full h-[662px] object-cover rounded-2xl" src={TeamMember3} alt="team member" />
                    </div>
                    <div className="flex gap-8 w-full">
                        <img className="w-[44%] h-[380px] object-cover rounded-2xl" src={TeamMember4} alt="team member" />
                        <img className="w-[44$] h-[380px] object-cover rounded-2xl" src={TeamMember5} alt="team member" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;