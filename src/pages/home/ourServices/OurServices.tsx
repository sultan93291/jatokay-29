import SectionHeader from "@/common/SectionHeader";
import type { TService } from "@/type";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";


const OurServices = () => {
    const [services, setServices] = useState<TService[]>([]);

    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error loading services:", error));
    }, []);
    return (
        <div className="my-15 md:my-30">
            <SectionHeader title="our services" main_title="All services" description="From routine maintenance to complex repairs, we've got you covered with expert service and transparent pricing." />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
                {
                    services?.map((service, index) => (
                        <div key={index} className="lg:p-6 p-4 bg-white rounded-3xl border border-[#73737333]">
                            <img className="w-full h-[200px] lg:h-[250px] xl:h-[325px] object-cover rounded-2xl" src={service?.image} alt="officeImage"></img>
                            <div className="my-5 bg-[#e9e9e9] rounded-lg p-2 inline-block">
                                <img className="w-9 h-9 object-cover rounded-2xl" src={service?.svg} alt="svg image"></img>

                            </div>
                            <p className="text-[#0D0D0D] text-xl font-bold border-t border-[#292929]/30 pt-5">{service?.name}</p>
                            <div className="flex items-center justify-between lg:gap-12 md:gap-8 gap-4 mt-2">
                                <p className="text-[#595959] md:block hidden">{service?.description.slice(0,40)}...</p>
                                <p className="text-[#595959] md:hidden">{service?.description.slice(0,25)}...</p>
                                <button className="flex items-center gap-2 text-[#1A1A2E] text-sm font-bold cursor-pointer hover:text-[#E63946]">Learn More <ArrowRightIcon/></button>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default OurServices;