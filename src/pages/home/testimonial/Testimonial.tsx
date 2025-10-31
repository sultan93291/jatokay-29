import SectionHeader from "@/common/SectionHeader";
import CreateCard from "../testimonialCard/TestimonialCard";
export type TTestimonial = {
    image: string;
    name: string;
    handle: string;
}

const testimonialData: TTestimonial[] = [
    {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        name: 'Briar Martin',
        handle: '@neilstellar'
    },
    {
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        name: 'Avery Johnson',
        handle: '@averywrites'
    },
    {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        name: 'Jordan Lee',
        handle: '@jordantalks'
    },
    {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        name: 'Avery Johnson',
        handle: '@averywrites'
    },
    {
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&auto=format&fit=crop&q=60',
        name: 'Harper Collins',
        handle: '@harpercodes'
    },
    {
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&auto=format&fit=crop&q=60',
        name: 'Mason Everett',
        handle: '@masonbuilds'
    },
    {
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60',
        name: 'Quinn Parker',
        handle: '@quinnupdates'
    },
    {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=60',
        name: 'Riley Brooks',
        handle: '@rileyinsights'
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
        name: 'Taylor West',
        handle: '@taylortrends'
    },
    {
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&auto=format&fit=crop&q=60',
        name: 'Dakota Hayes',
        handle: '@dakotawrites'
    }
];


const Testimonial = () => {
    return (
        <div className="my-15 lg:my-30" id="testimonial">

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
                <SectionHeader title="Testimonial" main_title="What Our Customers Say" description="Real reviews from real customers" />
            </div>
            <div className="marquee-row w-full mx-auto overflow-hidden relative mt-12">
                <div className="absolute left-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] mb-5">
                    {[...testimonialData, ...testimonialData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] mb-5">
                    {[...testimonialData, ...testimonialData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full xl:w-130 lg:w-36 md:w-24 w-10 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
            </div>
        </div>
    );
};

export default Testimonial;