import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar4,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar5,
    name: "Josh Smith",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Alex Thompson",
    username: "@alexthompson",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Maya Wilson",
    username: "@mayawilson",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Chris Anderson",
    username: "@chrisanderson",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar4,
    name: "Sarah Martinez",
    username: "@smartinez",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type TestimonialType = (typeof testimonials)[0];

interface TestimonialsColumnProps {
  items: TestimonialType[];
  styleConfig?: string;
  duration?: number;
}
const TestimonialsColumn = ({
  items,
  styleConfig,
  duration,
}: TestimonialsColumnProps) => (
  <div className={twMerge("relative h-[400px] overflow-hidden", styleConfig)}>
    <motion.div
      className="flex flex-col gap-6 pb-6"
      animate={{
        y: [`0%`, `-${(100 / 3) * 1}%`],
      }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {[...new Array(3)].map((_, repeatIndex) => (
        <React.Fragment key={repeatIndex}>
          {items.map((testimonial, index) => (
            <div
              key={index + repeatIndex * items.length}
              className="card max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <p className="text-lg text-gray-600 leading-none">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold tracking-tighter">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 tracking-tighter">
                      {testimonial.username}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);
export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col items-center justify-center section-heading">
          <div className="tag">Testimonials</div>
          <h2 className="section-title">What our users say</h2>
          <p className="section-description">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <TestimonialsColumn items={firstColumn} duration={18} />
          <TestimonialsColumn
            items={secondColumn}
            styleConfig="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            items={thirdColumn}
            styleConfig="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
