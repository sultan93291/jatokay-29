import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/svg/SvgIcon";
import { useForm, type FieldValues } from "react-hook-form";
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log("Form Data:", data);
        reset();
    };


    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-[#1A1A2E] font-bold">Get in Touch</h2>
                <p className="text-[#585858] lg:text-lg mt-4">Have a question, need a quote, or want to schedule a service? Our team is here to assist you — quickly, courteously, and whenever you need us.</p>
                <h2 className="text-[#FFF] text-[23px] font-bold mb-6">Contact Us</h2>
                <p className="text-[#1A1A2E]  text-lg lg:text-xl mb-4 flex items-center gap-5 "><div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center  text-[#E63946] rounded-2xl"><EmailIcon /></div> Info@expertauto.com</p>
                <p className="text-[#1A1A2E] text-lg lg:text-xl mb-4 flex items-center gap-5 "><div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center  text-[#E63946] rounded-2xl"><PhoneIcon /> </div> 1300 572 221</p>
                <p className="text-[#1A1A2E] text-lg lg:text-xl mb-4 flex items-center gap-5 "><div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center  text-[#E63946] rounded-2xl"><LocationIcon /></div> 123 Fake Street, New York, NY 10001</p>
            </div>
            <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-[#1A1A2E] font-bold mb-4">Contact Form</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name.."
                                {...register("firstName", { required: true })}
                                className="w-full border border-gray-300 rounded-md bg-[#F9F9F9] px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-sm">Required</span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name.."
                                {...register("lastName", { required: true })}
                                className="w-full border border-gray-300 rounded-md bg-[#F9F9F9] px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {errors.lastName && (
                                <span className="text-red-500 text-sm">Required</span>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            className="w-full border border-gray-300 rounded-md bg-[#F9F9F9] px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">Required</span>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="(503) 338-2573"
                            {...register("phone", { required: true })}
                            className="w-full border border-gray-300 rounded-md bg-[#F9F9F9] px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">Required</span>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Enter your message.."
                            {...register("message", { required: true })}
                            className="w-full border border-gray-300 rounded-md bg-[#F9F9F9] px-4 py-2 outline-none focus:ring-2 focus:ring-red-400 resize-none"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-sm">Required</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="px-6 w-full py-3 active:scale-95 transition bg-[#E63946] hover:bg-[#fa0419] rounded-2xl text-[#FFF] shadow-lg shadow-[#E63946]/30 cursor-pointer">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;