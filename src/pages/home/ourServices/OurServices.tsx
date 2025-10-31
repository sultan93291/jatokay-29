import type { TService } from "@/type";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OurServices = () => {
    const [services, setServices] = useState<TService[]>([]);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    console.log(isServicesOpen);
    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error loading services:", error));
    }, []);
    return (
        <div className="my-15 md:my-30">
            <div>
                <p className="text-[#1A1A2E] text-lg md:text-xl lg:text-[22px] xl:text-2xl font-bold flex items-center gap-4"> <p className="w-2 h-2 rounded-full bg-[#1A1A2E]"></p>our services</p>
                <div className="inline-block">
                    <h2
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-[#1A1A2E] text-2xl cursor-pointer md:text-3xl lg:text-4xl xl:text-5xl md:mt-5 mt-2 flex items-center gap-2">All services  <svg
                            className={`ml-1 lg:h-10 h-8 w-8 lg:w-10 cursor-pointer transform transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg></h2>
                </div>
                <p className="text-[#4A5565] text-sm md:text-base lg:text-lg md:mt-3 mt-1 lg:max-w-2/4 xl:max-w-2/5">From routine maintenance to complex repairs, we've got you covered with expert service and transparent pricing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
               {
                isServicesOpen ? <>
                 {
                    services?.slice(0,6).map((service, index) => (
                        <div key={index} className="lg:p-6 p-4 bg-white rounded-3xl border border-[#73737333]">
                            <img className="w-full h-[200px] lg:h-[250px] xl:h-[325px] object-cover rounded-2xl" src={service?.image} alt="officeImage"></img>
                            <div className="my-5 bg-[#e9e9e9] rounded-lg p-2 inline-block">
                                <img className="w-9 h-9 object-cover rounded-2xl" src={service?.svg} alt="svg image"></img>

                            </div>
                            <p className="text-[#0D0D0D] text-xl font-bold border-t border-[#292929]/30 pt-5">{service?.name}</p>
                            <div className="flex items-center justify-between lg:gap-12 md:gap-8 gap-4 mt-2">
                                <p className="text-[#595959] md:block hidden">{service?.description.slice(0, 40)}...</p>
                                <p className="text-[#595959] md:hidden">{service?.description.slice(0, 25)}...</p>
                                <Link to={`/services/${service?.name.toLowerCase().split(" ").join("-")}`} className="flex items-center gap-2 text-[#1A1A2E] text-sm font-bold cursor-pointer hover:text-[#E63946]">Learn More <ArrowRightIcon /></Link>
                            </div>
                        </div>
                    )
                    )
                }
                
                </> :

                <>
                 {
                    services?.slice(0,3).map((service, index) => (
                        <div key={index} className="lg:p-6 p-4 bg-white rounded-3xl border border-[#73737333]">
                            <img className="w-full h-[200px] lg:h-[250px] xl:h-[325px] object-cover rounded-2xl" src={service?.image} alt="officeImage"></img>
                            <div className="my-5 bg-[#e9e9e9] rounded-lg p-2 inline-block">
                                <img className="w-9 h-9 object-cover rounded-2xl" src={service?.svg} alt="svg image"></img>

                            </div>
                            <p className="text-[#0D0D0D] text-xl font-bold border-t border-[#292929]/30 pt-5">{service?.name}</p>
                            <div className="flex items-center justify-between lg:gap-12 md:gap-8 gap-4 mt-2">
                                <p className="text-[#595959] md:block hidden">{service?.description.slice(0, 40)}...</p>
                                <p className="text-[#595959] md:hidden">{service?.description.slice(0, 25)}...</p>
                                <Link to={`/services/${service?.name.toLowerCase().split(" ").join("-")}`} className="flex items-center gap-2 text-[#1A1A2E] text-sm font-bold cursor-pointer hover:text-[#E63946]">Learn More <ArrowRightIcon /></Link>
                            </div>
                        </div>
                    )
                    )
                }
                </>
               }
            </div>
        </div>
    );
};

export default OurServices;