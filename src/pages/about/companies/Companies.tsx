import SectionHeader from "@/common/SectionHeader";
export type TTestimonial = {
    image: string;
}

const testimonialData: TTestimonial[] = [

    {
        image: 'https://i.ibb.co.com/23FpXGFZ/oreilly-first-call-logo-vector.png',
    },
    {
        image: 'https://i.ibb.co.com/3YYSQNWj/images-1.png',
    },
    {
        image: 'https://i.ibb.co.com/zT8DgNCC/unnamed.png',
    },
    {
        image: 'https://i.ibb.co.com/TByNgGH9/Car-Shield-Company-Logo.png',
    },
    {
        image: 'https://i.ibb.co.com/s91snXFs/images.png',

    },
    {
        image: 'https://i.ibb.co.com/KY9Nqcs/better-business-bureau-logo-png-seeklogo-479976.png',

    }
];

const Companies = () => {
    return (
        <div className="my-15 lg:my-30">
            <style>{`
                    @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-300%); }
                    }

                    @media (min-width: 640px) { /* sm */
                    @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-200%); }
                    }
                    }

                    @media (min-width: 1024px) { /* lg */
                    @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                    }
                    }


            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
                   will-change: transform;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }

            .marquee-row:hover .marquee-inner {
                animation-play-state: paused;
            }

        `}</style>


            <div className="section-padding-x">
                <SectionHeader title="Great companies support us!" main_title="Our Proud Sponsors & Partner" description="We’re honored to collaborate with leading automotive brands and financing providers who share our commitment to quality, innovation, and customer trust." />
            </div>
            <div className="marquee-row w-full mx-auto overflow-hidden relative mt-12">
                <div className="absolute left-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] mb-5 gap-16">
                    {[...testimonialData, ...testimonialData, ...testimonialData].map((card, index) => (
                        <div key={index}><img className="w-full h-[100px] object-contain" src={card?.image} alt="company logo"></img></div>
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
            </div>
        </div>
    );
};

export default Companies;