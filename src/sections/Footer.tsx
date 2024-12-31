import {
  X as SocialX,
  Insta as SocialInsta,
  Linkedin as SocialLinkedIn,
  Pin as SocialPin,
  Youtube as SocialYoutube,
} from "@/assets";
import Logo from "@/assets/logosaas.png";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#F87BFF] via-[#FB92CF] via-[#FFDD9B] via-[#C2F0B1] to-[#2FD8FE] blur-xl"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img
              src={Logo}
              alt="SaaS Logo"
              height={40}
              width={40}
              className="relative z-10"
            />
          </div>

          <nav className="flex flex-col md:flex-row gap-6 text-sm items-center justify-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
          </nav>

          <div className="flex gap-4">
            <SocialX className="w-6 h-6" />
            <SocialInsta className="w-6 h-6" />
            <SocialLinkedIn className="w-6 h-6" />
            <SocialPin className="w-6 h-6" />
            <SocialYoutube className="w-6 h-6" />
          </div>
        </div>

        <p className="text-sm text-center mt-8">© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};
