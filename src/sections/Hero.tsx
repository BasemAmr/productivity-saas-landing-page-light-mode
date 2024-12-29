import { ReactComponent as ArrowRight } from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {

  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: window
  });


  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip">
      <div className="container px-5 mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl  text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to trace
              your progress, motivate your efforts and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 flex">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}

            />
            <img
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block md:absolute md:-top-8 md:-left-32"
            />
            <img
              src={noodleImage}
              width={220}
              alt="Noodle Image"
              className="hidden absolute lg:block top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
