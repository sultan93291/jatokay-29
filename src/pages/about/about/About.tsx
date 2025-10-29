import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import Companies from "../companies/Companies";
import OurMission from "../ourMission/OurMission";
import OurTeam from "../ourTeam/OurTeam";

const About = () => {
    return (
        <div>
            <div className="m-5">
                <CommonBanner BannerImg={BannerImg} title="Driven by Precision. Powered by Trust." description="We’re car enthusiasts dedicated to keeping your vehicle running. With experience, we make car care simple." />

            </div>
            <Companies />
            <OurMission />
            <div className="section-padding-x">
                <OurTeam/>
            </div>


        </div>
    );
};

export default About;