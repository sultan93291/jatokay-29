import CommonButton from "@/common/CommonButton";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm, type FieldValues } from "react-hook-form";
type TAppointmentFormData = {
    fullName: string;
    phone: string;
    email: string;
    year: string;
    make: string;
    model: string;
    serviceType: string;
    preferredDate: string;
    preferredTime: string;
    notes?: string;
};

const BookAppointmentDialog = ({
    buttonLabel = "Book Appointment",
    prefillData = {},
}: {
    buttonLabel?: string;
    prefillData?: Partial<TAppointmentFormData>;
}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: prefillData });

    const onSubmit = (data: FieldValues) => {
        console.log("Form Data:", data);
        reset();
    };


    return (
        <Dialog>
            <form>
                <DialogTrigger>
                    <CommonButton name={buttonLabel} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[750px] h-[90vh] overflow-y-scroll bg-white">
                    <h2 className="text-[32px] text-[#1A1A2E] font-bold text-center">Book an Appointment</h2>
                    <p className="text-[#585858] text-lg mt-2 text-center mb-8">Schedule your service online and get real-time updates via ShopMonkey. We'll confirm your appointment shortly.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Full Name Field */}
                        <div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Cena"
                                    {...register("fullName", { required: true })}
                                    className="w-full rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                />
                                {errors.fullName && (
                                    <span className="text-red-500 text-sm">Required</span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
                            {/* Phone Number */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="flex">
                                    {/* Placeholder for the country code dropdown (as seen in the image) */}
                                    <div className=" rounded-l-md bg-[#F9F9F9] p-2 flex items-center">
                                        <span className="text-sm">🇺🇸 </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="(503) 338-2573"
                                        {...register("phone", { required: true })}
                                        className="w-full  border-l-0 rounded-r-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                    />
                                </div>
                                {errors.phone && (
                                    <span className="text-red-500 text-sm">Required</span>
                                )}
                            </div>
                            {/* Email */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="johncena369@gmail.com"
                                    {...register("email", { required: true })}
                                    className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">Required</span>
                                )}
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        <div>
                            <h2 className="block text-sm font-medium text-gray-700 mb-2">
                                Vehicle Details
                            </h2>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Year
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="2022"
                                        {...register("year", { required: true })}
                                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                    />
                                    {errors.year && (
                                        <span className="text-red-500 text-sm">Required</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Make
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Toyota"
                                        {...register("make", { required: true })}
                                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                    />
                                    {errors.make && (
                                        <span className="text-red-500 text-sm">Required</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Model
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Camry"
                                        {...register("model", { required: true })}
                                        className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                    />
                                    {errors.model && (
                                        <span className="text-red-500 text-sm">Required</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Service Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Service Type
                            </label>
                            <select
                                {...register("serviceType", { required: true })}
                                className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
                            >
                                <option value="">Select a service</option>
                                <option value="mobile">Mobile Mechanic</option>
                                <option value="in-shop">In Shop Repairs</option>
                                <option value="paint">Paint & Body</option>
                            </select>
                            {errors.serviceType && (
                                <span className="text-red-500 text-sm">Required</span>
                            )}
                        </div>

                        {/* Date & Time */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    {...register("preferredDate", { required: true })}
                                    className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Time
                                </label>
                                <input
                                    type="time"
                                    {...register("preferredTime", { required: true })}
                                    className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                                />
                            </div>
                        </div>

                        {/* Additional Notes (renamed from Message) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Notes
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Enter your message..."
                                {...register("notes")}
                                className="w-full  rounded-md bg-[#F9F9F9] px-4 py-3 outline-none focus:ring-2 focus:ring-red-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Privacy/Consent Text */}
                        <p className="text-xs text-gray-500 pt-2">
                            Submitting this form means you agree to receive booking and service notifications.
                        </p>

                        {/* Submit Button */}
                        <button type="submit" className="px-6 w-full py-3 active:scale-95 transition bg-[#E63946] hover:bg-[#fa0419] rounded-md text-[#FFF] shadow-lg shadow-[#E63946]/30 cursor-pointer">
                            Send Message
                        </button>
                    </form>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default BookAppointmentDialog;