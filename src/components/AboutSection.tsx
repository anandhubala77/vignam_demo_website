
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { TbChartRadar } from "react-icons/tb";
import { BiSolidRadiation } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { PiArrowRightLight } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const categories = [
    {
        id: "custom",
        title: "Custom Brackets",
        description:
            "We design and manufacture custom brackets tailored to your unique project requirements. Precision engineered with durable materials for long-lasting performance.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsGmfs6R84OYj5rfwGZUlaj7XA-BK3ro_ag&s",

        icon: <PiBracketsCurlyLight className="inline w-6 h-6 ml-2" />,
    },
    {
        id: "steel",
        title: "Steel Adapters",
        description:
            "Our steel adapters are built for strength and reliability. Designed to fit seamlessly with existing structures, ensuring safety and stability.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpMhQBDwesJgoAIYZWehihdA2mkVHYOjlaw&s",

        icon: <TbChartRadar />,
    },
    {
        id: "aluminium",
        title: "Aluminium Fixtures",
        description:
            "Lightweight yet strong, our aluminium fixtures provide flexibility in design while maintaining durability and resistance to corrosion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAo9iatl4LO0IiTCT4e-uW1j2hNWrYET49g&s",
        icon: <BiSolidRadiation />,
    },
    {
        id: "Enclosures",
        title: "Enclosures",
        description:
            "Lightweight yet strong, our aluminium fixtures provide flexibility in design while maintaining durability and resistance to corrosion.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGzd1FpWeVVOVp4sxlYUXk_INtpjIFSp9FQ&s",
        icon: <BsBox />,
    },
];

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState(categories[0]);

    const textRef = useRef<HTMLElement[]>([]);
    useEffect(() => {
        textRef.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play reverse play reverse",

                    },
                }
            );
        });
    }, []);



    const addToRefs = (el: HTMLHeadingElement | null) => {
        if (el && !textRef.current.includes(el)) {
            textRef.current.push(el);
        }
    };
    return (
        <div className="max-w-7xl mx-auto py-16 px-6 md:flex md:gap-10">


            {/* LEFT SIDE Tab Content */}


            <div className="md:w-3/5 space-y-6">
                <div>
                    <h1
                        className="text-3xl md:text-6xl text-gray-800 leading-snug"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}

                    >
                        <span className="block" ref={addToRefs} >Revolutionizing</span>
                        <span className="block" ref={addToRefs}>Manufacturing with</span>
                        <span className="block" ref={addToRefs}>
                            Speed and <span className="text-gray-400 font-bold" ref={addToRefs} style={{ fontFamily: "'Cabin Sketch', sans-serif", fontWeight: 700 }}>Precision</span>
                        </span>
                    </h1>
                </div>

                {/* Tabs */}



                <div className="flex flex-col gap-3 mb-6">
                    {categories.map((cat, index) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat)}
                            className={`group px-4 py-2 rounded-lg font-medium transition text-left flex items-center justify-between 
        ${activeTab.id === cat.id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {/* Number  Arrow */}
                            <span className="mr-4 w-6 text-right">
                               
                                {activeTab.id !== cat.id && (
                                    <span className="inline-block group-hover:hidden">
                                        {("0" + (index + 1)).slice(-2)}
                                    </span>
                                )}

                             
                                {(activeTab.id === cat.id) && (
                                    <PiArrowRightLight className="inline w-5 h-5" />
                                )}
                                {activeTab.id !== cat.id && (
                                    <span className="hidden group-hover:inline">
                                        <PiArrowRightLight className="inline w-5 h-5" />
                                    </span>
                                )}
                            </span>

                            {/* Title */}
                            <span>{cat.title}</span>

                            {cat.icon && <span>{cat.icon}</span>}
                        </button>
                    ))}
                </div>



                {/* Content Image  Text */}


                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {/* Image */}


                            <motion.img
                                src={activeTab.image}
                                alt={activeTab.title}
                                className="rounded-xl w-full max-w-md"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />


                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>



            {/* RIGHT SIDE */}






            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start max-w-lg mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Ayrton Senna"
                        className="w-12 h-12 rounded mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Ayrton Senna</h3>
                        <p className="text-blue-600 text-sm font-medium">CEO & Senior Partner at Forge</p>
                    </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That’s why we built a fully streamlined platform that turns your CAD files into production-ready parts—delivered in as fast as one day. Whether you’re prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                    We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed. You can also reserve your own dedicated CNC machine through our RM (Reserved Machines) offering—your own production line, without the overhead.
                </p>
                <div className="w-60  mt-auto pt-6  ">
                    <p className="text-xs text-gray-500 mt-auto pt-6  ">
                        EVERY DETAIL MATTERS — WE CRAFT EACH PART WITH CARE, ACCURACY, AND A FINISH THAT FEELS JUST RIGHT
                    </p>
                </div>
            </div>
        </div>

    );
}
