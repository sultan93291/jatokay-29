import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 2.png"
import ContactForm from "../contactForm/ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="m-2 md:m-3 lg:m-5">
                <CommonBanner BannerImg={BannerImg} title="Get in Touch With Us" description="Have a question or need a repair? We’re here to help give us a call, drop a message, or visit our shop anytime." />
            </div>
            <div className="section-padding-x my-15 lg:my-30">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;