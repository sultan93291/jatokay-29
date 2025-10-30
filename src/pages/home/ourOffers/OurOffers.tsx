import SectionHeader from "@/common/SectionHeader";

 
const OurOffers = () => {
    return (
        <div>
            <SectionHeader title="Our Offers" main_title="Save with Exclusive Offers" description="Enjoy seasonal discounts and loyalty rewards for affordable car care. Check our deals and save smart."/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[18px] mt-12">
                <div className="bg-[#F9F9F9] rounded-2xl 2xl:px-16 px-8 lg:pt-10 pt-6 lg:pb-8 pb-5">
                    <p className="text-[#E63946] text-lg lg:text-2xl">10% Off Labor up to $100</p>
                    <h2 className="text-[#1A1A1A] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-4 lg:mt-8">Military, first responders, seniors, and teachers.</h2>
                </div>
                <div className="bg-[#F9F9F9] rounded-2xl 2xl:px-16 px-8 lg:pt-10 pt-6 lg:pb-8 pb-5">
                    <p className="text-[#E63946] text-lg lg:text-2xl">10% Off Labor up to $100</p>
                    <h2 className="text-[#1A1A1A] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-4 lg:mt-8">Military, first responders, seniors, and teachers.</h2>
                </div>
                <div className="bg-[#F9F9F9] rounded-2xl 2xl:px-16 px-8 lg:pt-10 pt-6 lg:pb-8 pb-5">
                    <p className="text-[#E63946] text-lg lg:text-2xl">10% Off Labor up to $100</p>
                    <h2 className="text-[#1A1A1A] text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mt-4 lg:mt-8">Military, first responders, seniors, and teachers.</h2>
                </div>
            </div>
        </div>
    );
};

export default OurOffers;