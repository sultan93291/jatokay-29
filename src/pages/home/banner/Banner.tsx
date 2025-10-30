import BannerImg from "@/assets/images/banner background image.png";
import BookAppointmentDialog from "@/shared/BookAppointmentDialog";

const Banner = () => {
  return (
    <div
      className="relative w-full lg:h-[95vh] h-[70vh] lg:rounded-[40px] rounded-3xl md:p-8 p-4 flex items-end overflow-hidden"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Bottom black overlay */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative md:max-w-[85%] xl:max-w-[55%] z-0">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize">
          Get things done quicker, drive like a pro, and always be one step ahead!
        </h1>
        <p className="text-[#E9E9E9] md:text-lg lg:text-2xl xl:text-[28px] lg:mt-6 mt-3 lg:mb-8 mb-4">
          Your trusted auto service partner integrating smart booking, expert care, and
          real-time updates through ShopMonkey.
        </p>
        <BookAppointmentDialog buttonLabel="Book Appointment" />
      </div>
    </div>
  );
};

export default Banner;