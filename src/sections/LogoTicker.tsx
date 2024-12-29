import acmeLogo from "@/assets/logo-acme.png";
import quantomLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestiaLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-5">
        <div className="flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}>
        <div className="flex gap-14 flex-none">
          <img className="logo-ticker-image" src={quantomLogo} alt="quantom" />
          <img className="logo-ticker-image" src={echoLogo} alt="echo" />
          <img className="logo-ticker-image" src={acmeLogo} alt="acme" />
          <img className="logo-ticker-image" src={celestiaLogo} alt="celestia" />
          <img className="logo-ticker-image" src={pulseLogo} alt="pulse" />
          <img className="logo-ticker-image" src={apexLogo} alt="apex" />
        </div>
        </div>
      </div>
    </div>
  );
};
