import BannerImg from "@/assets/images/banner background image.png";
import CommonButton from "@/common/CommonButton";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[95vh] rounded-[40px] p-8 flex items-end overflow-hidden"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Bottom black overlay */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-[55%] z-10">
        <h1 className="text-white text-5xl font-bold capitalize">
          Get things done quicker, drive like a pro, and always be one step ahead!
        </h1>
        <p className="text-[#E9E9E9] text-[28px] mt-6 mb-8">
          Your trusted auto service partner integrating smart booking, expert care, and
          real-time updates through ShopMonkey.
        </p>
        <CommonButton name="Book Appointment" />
      </div>
    </div>
  );
};

export default Banner;