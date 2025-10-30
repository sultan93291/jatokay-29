 
const SectionHeader = ({title, main_title, description} : {title : string, main_title : string, description : string}) => {
    return (
        <div>
            <p className="text-[#1A1A2E] text-lg md:text-xl lg:text-[22px] xl:text-2xl font-bold flex items-center gap-4"> <p className="w-2 h-2 rounded-full bg-[#1A1A2E]"></p>{title}</p>
            <h2 className="text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:mt-5 mt-2">{main_title}</h2>
            <p className="text-[#4A5565] text-sm md:text-base lg:text-lg md:mt-3 mt-1 lg:max-w-2/4 xl:max-w-2/5">{description}</p>
        </div>
    );
};

export default SectionHeader;