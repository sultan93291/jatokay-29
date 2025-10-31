import CommonBanner from "@/common/CommonBanner";
import BannerImg from "@/assets/images/banner image 3.png";
import { useEffect, useState } from "react";
import type { TBlogPost } from "@/type";
import { ArrowRightUpIcon, CommentIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LinkIcon, UserIcon } from "@/components/svg/SvgIcon";

const Blog = () => {
    const [blogs, setBlogs] = useState<TBlogPost[]>([]);
    const [blog, setBlog] = useState<TBlogPost | null>(null);

    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                const storedBlog = localStorage.getItem("selectedBlog");
                if (storedBlog) {
                    setBlog(JSON.parse(storedBlog));
                } else {
                    setBlog(data[0]);
                }
            })
            .catch((error) => console.error("Error fetching blog data:", error));
    }, []);

    useEffect(() => {
        if (blog) {
            localStorage.setItem("selectedBlog", JSON.stringify(blog));
        }
    }, [blog]);

    return (
        <div>
            <div className="m-2 md:m-3 lg:m-5">
                <CommonBanner
                    BannerImg={BannerImg}
                    title="Expert Insights & Car Care Tips"
                    description="Learn from our certified mechanics and industry specialists. From everyday maintenance advice to in-depth repair guides — we share the knowledge that keeps your car performing at its best."
                />
            </div>
            <div className="section-padding-x my-15 lg:my-30">
                <div>
                    <p className="text-[#0F1215] md:text-base text-sm lg:text-lg"> <span className="text-[#718096]">Blog /</span> Why Regular Oil Changes Are the Heartbeat of Your Engine</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#1A1A2E] font-bold mt-[27px]">{blog?.title}</h2>
                    <p className="text-[#585858] lg:text-lg mt-3">{blog?.content.lead_paragraph}</p>
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mt-[27px]">
                        <div className="flex gap-4 ">
                            <p className="text-[#808080] font-semibold text-base flex items-center gap-1"> <UserIcon /> By <span className="text-[#4D4D4D] ">{blog?.metadata?.author}</span></p>
                            <p className="text-[#808080] font-semibold text-base flex items-center gap-1"> <CommentIcon /> <span className="text-[#4D4D4D] ">{blog?.metadata?.comments_count} </span> Comments</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center cursor-pointer hover:bg-[#E63946]  text-[#E63946] hover:text-white rounded-2xl"><FacebookIcon /></div>
                            <div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center cursor-pointer hover:bg-[#E63946]  text-[#E63946] hover:text-white rounded-2xl"><LinkedInIcon /></div>
                            <div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center cursor-pointer hover:bg-[#E63946]  text-[#E63946] hover:text-white rounded-2xl"><InstagramIcon /></div>
                            <div className="bg-[#fdeced] md:w-12 w-10 md:h-12 h-10 flex justify-center items-center cursor-pointer hover:bg-[#E63946]  text-[#E63946] hover:text-white rounded-2xl"><LinkIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-12 mt-12">
                    {/* Left Side - Selected Blog */}
                    <div className="xl:w-2/3">
                        {blog && (
                            <div>
                                <img
                                    className="w-full h-[200px] md:h-[400px] xl:h-[700px] object-cover rounded-3xl"
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                />
                                <div className="lg:mt-12 mt-6 mb-6">
                                    {
                                        blog?.content?.sections?.slice(0, 1).map(section => (
                                            <p>{section.text}</p>
                                        ))
                                    }
                                </div>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <img
                                        className="w-full h-[200px] lg:h-[250px] xl:h-[300px] object-cover rounded-3xl"
                                        src={blog.image1}
                                        alt={blog.title}
                                    />
                                    <img
                                        className="w-full h-[200px] lg:h-[250px] xl:h-[300px] object-cover rounded-3xl"
                                        src={blog.image2}
                                        alt={blog.title}
                                    />
                                </div>
                                <div className="mt-6">
                                    {
                                        blog?.content?.sections?.slice(1, 2).map(section => (
                                            <p>{section.text}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Side - Blog List */}
                    <div className="xl:w-1/3 space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-[#1A1A2E] lg:mb-12 mb-6">Popular Blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                            {blogs?.filter((item) => item.id !== blog?.id).map((item) => (
                                <div
                                    key={item.id}
                                    className="lg:p-6 p-4 bg-white rounded-3xl border transition-all duration-300 border-[#73737333]"
                                >
                                    <img
                                        className="w-full h-[200px] lg:h-[250px] object-cover rounded-2xl"
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                    <p className="text-[#0D0D0D] text-xl font-bold pt-5">
                                        {item.title}
                                    </p>
                                    <p className="text-[#827979] text-lg mt-2 mb-6">
                                        {item.content.lead_paragraph.slice(0, 80)}...
                                    </p>
                                    <div className="flex justify-between  items-center">
                                        <p className="text-[#7E7E7E] text-lg">{item?.date}</p>
                                        <button onClick={() => setBlog(item)} className=" text-[#1A1A2E] hover:text-white hover:border-none cursor-pointer hover:bg-[#E63946] lg:w-15 w-10 lg:h-15 h-10 rounded-full border flex justify-center items-center"><ArrowRightUpIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;