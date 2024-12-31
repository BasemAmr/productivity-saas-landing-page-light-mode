import { SVGProps, memo } from 'react';

// Icon URLs
const ICON_URLS = {
    linkedin: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-linkedin.svg",
    menu: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/menu.svg",
    insta: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-insta.svg", 
    pin: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-pin.svg",
    youtube: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-youtube.svg",
    check: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/check.svg",
    x: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/social-x.svg",
    arrowRight: "https://ik.imagekit.io/wfqm3megy/saas%20light%20landing%20page%20/arrow-right.svg"
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

const linkedin = (await fetchSvg(ICON_URLS.linkedin)) 
const menu = (await fetchSvg(ICON_URLS.menu))
const insta = (await fetchSvg(ICON_URLS.insta))
const pin = (await fetchSvg(ICON_URLS.pin))
const youtube = (await fetchSvg(ICON_URLS.youtube))
const check = (await fetchSvg(ICON_URLS.check))
const x = (await fetchSvg(ICON_URLS.x))
const arrowRight = (await fetchSvg(ICON_URLS.arrowRight))

const createSvgReactComponent = (svgContent: string) => {
    const SvgComponent = memo((props: SVGProps<SVGSVGElement>) => (
        <svg dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />
    ));
    return SvgComponent;
}

export const Linkedin = createSvgReactComponent(linkedin);
export const Menu = createSvgReactComponent(menu);
export const Insta = createSvgReactComponent(insta);
export const Pin = createSvgReactComponent(pin);
export const Youtube = createSvgReactComponent(youtube);
export const Check = createSvgReactComponent(check);
export const X = createSvgReactComponent(x);
export const ArrowRight = createSvgReactComponent(arrowRight);

