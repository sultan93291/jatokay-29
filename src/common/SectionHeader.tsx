 
const SectionHeader = ({title, main_title, description} : {title : string, main_title : string, description : string}) => {
    return (
        <div>
            <p className="text-[#1A1A2E] text-2xl font-bold flex items-center gap-4"> <p className="w-2 h-2 rounded-full bg-[#1A1A2E]"></p>{title}</p>
            <h2 className="text-[#1A1A2E] text-5xl mt-5">{main_title}</h2>
            <p className="text-[#4A5565] text-lg mt-3">{description}</p>
        </div>
    );
};

export default SectionHeader;