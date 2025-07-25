import { HERO_CONTENT } from "../assets/constants/index";
import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visiable: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visiable" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Bùi Đăng Khoa</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visiable" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full stack developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visiable" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="lg:w-400 lg:h-200 w-200 h-100">
                            <ModelViewer />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;;