import { BeverageIcon, FinancingIcon, LocalLocationIcon, RoomIcon, TvIcon, WifiIcon } from "@/components/svg/SvgIcon";


const Category = () => {
    return (
        <div className="bg-[#F9F9F9] py-10 my-15 lg:my-30">
            <div className="grid grid-cols-6 gap-4 section-padding-x">
                <div className="flex flex-col justify-center items-center border-r border-dashed border-[#B7BCC6]">
                    <WifiIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Free wi-Fi</h2>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-dashed border-[#B7BCC6]">
                    <FinancingIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Financing
                        Available
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-dashed border-[#B7BCC6]">
                    <LocalLocationIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Free Local
                        Shuttle</h2>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-dashed border-[#B7BCC6]">
                    <BeverageIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Beverage
                        & Snacks</h2>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-dashed border-[#B7BCC6]">
                    <RoomIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Waiting
                        Room</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <TvIcon />
                    <h2 className="text-[#1A1A2E] text-xl font-bold mt-6">Tv Screen</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;