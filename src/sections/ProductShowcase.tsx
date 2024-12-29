import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
export const ProductShowcase = () => {
  return (
   <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container px-5 mx-auto">
      <div className="section-heading">

      <div className="flex justify-center">
        <div className="tag">Boost Your Productivity</div>
      </div>
      <h2 className="section-title mt-5">A more Effective Way to track progress</h2>
      <p  className="section-description  mt-5">
        Effotlessly turn your ideas into a fully functional, responsive SaaS website in just minutes with this template
      </p>

      </div>
      <div className="relative">
        <img src={productImage} alt="product"  className="mt-10"/>
        <img src={pyramidImage} alt="pyramid" width={262} height={262} className="hidden md:block absolute -right-36 -top-32" />
        <img src={tubeImage} alt="tube" width={238} height={238} className="hidden md:block absolute -left-36 bottom-24" />
      </div>
    </div>
   </section>
  );
};
