
const CommonBanner = ({BannerImg, title, description} : {BannerImg : string, title: string, description: string}) => {
    return (
       <div
      className="w-full xl:h-[765px] lg:h-[600px] h-[450px] lg:rounded-[40px] rounded-3xl md:p-8 p-4 flex items-center justify-center overflow-hidden text-center"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      {/* Content */}
      <div className="relative md:max-w-[85%] xl:max-w-[55%] z-0">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize">
          {title}
        </h1>
        <p className="text-[#E9E9E9] md:text-lg lg:text-2xl xl:text-[28px] lg:mt-6 mt-3 lg:mb-8 mb-4">
          {description}
        </p>
      </div>
    </div>
    );
};

export default CommonBanner;