import { SvgIconsContext } from "@/assets";
import Logo from "@/assets/logosaas.png";
import { useContext } from "react";

export const Header = () => {

  const ArrowRight = useContext(SvgIconsContext).icons.arrowRight;
  const MenuIcon = useContext(SvgIconsContext).icons.menu;
  const isLoading = useContext(SvgIconsContext).isLoading;

  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-4">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          { isLoading ? null :
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          }
        </div>
      </div>
      <div className="py-5">
        <div className="container px-5 mx-auto">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="SaaS Logo" height={40} width={40} />
            
            {
              isLoading ? null :
              <MenuIcon className="h-6 w-6 md:hidden" />
            }
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
