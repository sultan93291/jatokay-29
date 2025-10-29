import BannerImg from "@/assets/images/banner background image.png"
import CommonButton from "@/common/CommonButton";

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="w-full h-[95vh] rounded-[40px] p-8 flex items-end">
            <div className="max-w-[55%]">
                <h1 className="text-[#FFF] text-5xl font-bold capitalize">Get things done quicker, drive like a pro, and always be one step ahead!</h1>
                <p className="text-[#E9E9E9] text-[28px] mt-6 mb-8">Your trusted auto service partner integrating smart booking, expert care, and real-time updates through ShopMonkey.</p>
                <CommonButton name="Book Appointment"/>
            </div>
        </div>
    );
};

export default Banner;