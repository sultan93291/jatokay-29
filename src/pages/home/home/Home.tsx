import Banner from "../banner/Banner";
import Category from "../category/Category";
import OurOffers from "../ourOffers/OurOffers";
import OurServices from "../ourServices/OurServices";
import Testimonial from "../testimonial/Testimonial";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <div className="m-2 md:m-3 lg:m-5">
                <Banner />
            </div>
            <div>
                <Category />
            </div>
            <div className="section-padding-x">
                <WhyChooseUs />
                <OurServices />
                <OurOffers />
            </div>
            <Testimonial />
        </div>
    );
};

export default Home;