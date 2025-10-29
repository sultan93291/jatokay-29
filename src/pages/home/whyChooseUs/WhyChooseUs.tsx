import SectionHeader from "@/common/SectionHeader";
import { BadgeIcon, ClickIcon, WatchIcon } from "@/components/svg/SvgIcon";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <BadgeIcon />,
            title: "Certified Technicians",
            description:
                "Our mechanics are professionally trained and certified to handle all major and minor car repairs with precision and care.",
        },
        {
            icon: <WatchIcon />,
            title: "Fast & Reliable Service",
            description:
                "We value your time. Most services are completed the same day, so you’re back on the road quickly and safely.",
        },
        {
            icon: <ClickIcon />,
            title: "Click to Book, Come In to Fix",
            description:
                "Easily schedule your appointments online-come to our garage and get professional service, all offline.",
        },
    ];



    return (
        <div>
            <SectionHeader title="Why Choose Us" main_title="Your Go-To Auto Care Buddy" description="From routine maintenance to complex repairs, we've got you covered with expert service and transparent pricing."/>
            <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="group px-6 pt-10 pb-8 border border-[rgba(115,115,115,0.20)] bg-white hover:bg-[#E63946] transition-all duration-300 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-lg"
                    >
                        <div className="bg-[rgba(26,26,26,0.10)] group-hover:bg-white/20 p-3 rounded-lg flex items-center justify-center mb-8 transition-all duration-300">
                            {item?.icon}
                        </div>
                        <h2 className="text-[#1A1A1A] group-hover:text-white text-[22px] font-semibold mb-2 transition-all duration-300">
                            {item?.title}
                        </h2>
                        <p className="text-[#585858] group-hover:text-white/90 transition-all duration-300">
                            {item?.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;