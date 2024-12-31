import { SVGProps, createContext, memo, useEffect, useState } from "react";

// Icon URLs
const ICON_URLS = {
  linkedin:
    "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-linkedin.svg",
  menu: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/menu.svg",
  insta:
    "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-insta.svg",
  pin: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-pin.svg",
  youtube:
    "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-youtube.svg",
  check:
    "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/check.svg",
  x: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-x.svg",
  arrowRight:
    "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/arrow-right.svg",
};

type IconComponent = React.FC<SVGProps<SVGSVGElement>>;
type IconsContextType = {
  icons: { [key: string]: IconComponent };
  isLoading: boolean;
};

// Cache for SVG content
const svgCache = new Map<string, string>();

// Fetch SVG with caching
const fetchSvg = async (url: string) => {
  if (svgCache.has(url)) {
    return svgCache.get(url)!;
  }
  const response = await fetch(url);
  const text = await response.text();
  svgCache.set(url, text);
  return text;
};

const createSvgReactComponent = (svgContent: string) => {
  const SvgComponent = memo((props: SVGProps<SVGSVGElement>) => (
    <svg dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />
  ));
  return SvgComponent;
};

export const SvgIconsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<IconsContextType>({
    icons: {},
    isLoading: true,
  });

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons = await Promise.all(
        Object.entries(ICON_URLS).map(async ([key, url]) => {
          const svgContent = await fetchSvg(url);
          return [key, createSvgReactComponent(svgContent)];
        })
      );

      setState({
        icons: Object.fromEntries(loadedIcons),
        isLoading: false,
      });
    };

    loadIcons();
  }, []);

  return (
    <SvgIconsContext.Provider value={state}>
      {children}
    </SvgIconsContext.Provider>
  );
};
 
export const SvgIconsContext = createContext<IconsContextType>({
  icons: {},
  isLoading: true,
});
