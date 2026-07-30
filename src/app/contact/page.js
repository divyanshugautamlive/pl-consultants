import ContactForm from "@/components/forms/ContactForm";
import * as Icons from "@/components/ui/Icons";

export const metadata = {
  title: "Contact Us | Pinnacle Logic Consulting",
  description: "Get in touch with Pinnacle Logic Consulting. Request a manufacturing assessment to discuss your shopfloor productivity, line balancing, and operational challenges.",
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Speak With Our Consultants",
      value: "+91 84396 92259",
      href: "tel:+918439692259",
      desc: "Connect directly with our operational team to discuss your manufacturing challenges.",
      icon: "Phone",
    },
    {
      title: "Email Our Team",
      value: "tarun@pinnaclelogic.in",
      href: "mailto:tarun@pinnaclelogic.in",
      desc: "Send your plant profile, equipment lists, or operational inquiries.",
      icon: "Mail",
    },
    {
      title: "Serving Manufacturers Across India",
      value: "All India Manufacturing Hubs",
      desc: "Hands-on implementation services available nationwide across major industrial clusters.",
      icon: "MapPin",
    },
  ];

  const trustIndicators = [
    "Confidential Consultation",
    "No Obligation Discussion",
    "Manufacturing Specialists",
    "Tailored Recommendations",
  ];

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3.5 py-1.5 rounded-full text-gold font-semibold">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Contact Pinnacle Logic Consulting
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Discuss your shopfloor operational goals, line balancing, OEE improvements, and capacity enhancement targets with our consulting team.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-200 pb-4">
              Direct Contact Channels
            </h2>

            {contactInfo.map((info, idx) => {
              const IconComponent = Icons[info.icon] || Icons.Phone;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-gray-200 card-shadow flex items-start space-x-4 transition-all duration-300 hover:border-gold/40"
                >
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-navy text-base leading-tight">
                      {info.title}
                    </h3>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-teal hover:text-teal-dark hover:underline font-semibold text-base block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-steel font-semibold text-base block">
                        {info.value}
                      </span>
                    )}

                    <p className="text-gray-500 text-xs leading-normal">
                      {info.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Trust Indicators Block */}
            <div className="bg-navy text-white rounded-2xl p-6 border border-navy-light space-y-4">
              <h3 className="font-serif font-bold text-white text-lg flex items-center">
                <Icons.ShieldCheck className="w-5 h-5 text-gold mr-2.5" />
                Our Advisory Commitment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                {trustIndicators.map((indicator, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200 font-medium">
                    <Icons.Check className="w-4 h-4 text-gold shrink-0" />
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 card-shadow border border-gray-200">
            <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-200 pb-4 mb-6">
              Request a Manufacturing Assessment
            </h2>

            <ContactForm lightTheme={true} />

            {/* Trust Indicators below form */}
            <div className="mt-8 pt-6 border-t border-gray-150 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="text-xs font-semibold text-steel flex items-center justify-center space-x-1.5">
                  <span className="text-teal font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
