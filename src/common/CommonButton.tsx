
const CommonButton = ({name} : {name: string}) => {
    return (
        <div>
            <button type="button" className="px-6 py-3 active:scale-95 transition bg-[#E63946] rounded-2xl text-[#FFF] shadow-lg hover:bg-[#fa0419] shadow-[#E63946]/30 cursor-pointer">
                {name}
            </button>
        </div>
    );
};

export default CommonButton;