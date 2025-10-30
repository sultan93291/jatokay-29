import SectionHeader from "@/common/SectionHeader";

export type TTestimonial = {
  image: string;
};

const testimonialData: TTestimonial[] = [
  { image: "https://i.ibb.co.com/23FpXGFZ/oreilly-first-call-logo-vector.png" },
  { image: "https://i.ibb.co.com/3YYSQNWj/images-1.png" },
  { image: "https://i.ibb.co.com/zT8DgNCC/unnamed.png" },
  { image: "https://i.ibb.co.com/TByNgGH9/Car-Shield-Company-Logo.png" },
  { image: "https://i.ibb.co.com/s91snXFs/images.png" },
  { image: "https://i.ibb.co.com/KY9Nqcs/better-business-bureau-logo-png-seeklogo-479976.png" },
];

const Companies = () => {
  return (
    <section className="py-16 lg:py-28">
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
        .marquee-row:hover .marquee-inner {
          animation-play-state: paused;
        }
      `}</style>

      <div className="section-padding-x">
        <SectionHeader
          title="Great companies support us!"
          main_title="Our Proud Sponsors & Partners"
          description="We’re honored to collaborate with leading automotive brands and financing providers who share our commitment to quality, innovation, and customer trust."
        />
      </div>

      <div className="marquee-row relative mt-12 w-full overflow-hidden">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-28 lg:w-32 xl:w-40 z-10 bg-linear-to-r from-white to-transparent pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="marquee-inner flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 min-w-[200%] items-center">
          {[...testimonialData, ...testimonialData, ...testimonialData, ...testimonialData].map((card, index) => (
            <div
              key={index}
              className="shrink-0 flex justify-center items-center"
            >
              <img
                className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition"
                src={card.image}
                alt="company logo"
              />
            </div>
          ))}
        </div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-28 lg:w-32 xl:w-40 z-10 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Companies;