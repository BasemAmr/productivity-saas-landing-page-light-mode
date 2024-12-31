import { SvgIconsContext } from "@/assets";
import starImage from "@/assets/star.png";
import spring from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";

export const CallToAction = () => {
  const ctaRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["end end", "start start"],
  });

  const isLoading = useContext(SvgIconsContext).isLoading;
  const icons = useContext(SvgIconsContext).icons;
  const ArrowRight = isLoading ? null : icons.arrowRight;

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container px-5 mx-auto">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <motion.img
            src={starImage}
            alt="Star"
            width={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={spring}
            alt="Spring"
            width={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex gap-1 items-center justify-center mt-[30px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 flex">
            <span>Learn more</span>
            {ArrowRight && <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />}
          </button>
        </div>
      </div>
    </section>
  );
};