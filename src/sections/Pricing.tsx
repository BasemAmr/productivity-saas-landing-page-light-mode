import { ReactComponent as CheckIcon } from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className='py-24 bg-white'>
      <div className="container px-5 mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description">
            Free forever. Upgrade for unlimited tasks, better security and exclusive features.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center max-w-xs w-full lg:flex-row lg:items-end lg:justify-center lg:max-w-none">
          {
            pricingTiers.map((tier) => (
              <div key={tier.title} className={twMerge(
          'card',
          tier.inverse && 'border-black bg-black text-white'
              )}>
          <div className="flex justify-between items-center mb-8">
            <h3 className={twMerge(
              'text-xl font-bold',
              tier.inverse ? 'text-white/60' : 'text-black/50'
            )}>{tier.title}</h3>
            {
              tier.popular && (
                <div className="inline-flex text-sm px-3 py-1 rounded-xl border border-white/20">
            <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                </div>
              )
            }
          </div>
          <div className="mb-8 flex items-baseline gap-1 mt-[30px]">
            <span className="text-4xl font-bold tracking-tighter leading-none">${tier.monthlyPrice}</span>
            <span className={tier.inverse ? 'text-white/60' : 'text-black/60'}>/month</span>
          </div>
          <button className={twMerge(
            'btn w-full mt-[30px]',
            tier.inverse ? 'bg-white text-black' : 'bg-black text-white'
          )}>
            {tier.buttonText}
          </button>
          <ul className="flex flex-col gap-5 mt-8">
            {tier.features.map((feature) => (
              <li key={feature} className="text-sm flex items-center gap-4">
                <CheckIcon className="w-6 h-6" />
                {feature}
              </li>
            ))}
          </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
