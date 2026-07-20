import ContactForm from "@/components/forms/ContactForm";
import * as Icons from "@/components/ui/Icons";

export default function Contact() {
  const contactInfo = [
    {
      title: "Direct Phone Calls",
      value: "+91 84396 92259",
      href: "tel:+918439692259",
      desc: "Call Tarun Sharma directly to discuss urgent capacity or line breakdown concerns.",
      icon: "Phone",
    },
    {
      title: "Email Support",
      value: "tarun@pinnaclelogic.in",
      href: "mailto:tarun@pinnaclelogic.in",
      desc: "Send us your equipment lists, OEE records, or request documentation.",
      icon: "Mail",
    },
    {
      title: "Service Coverage",
      value: "All India Manufacturing Hubs",
      desc: "Hands-on implementation services available nationwide across all major industrial clusters.",
      icon: "MapPin",
    },
  ];

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Discuss Your Shopfloor Challenge
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Schedule a 20-minute phone call to review your current machinery setup and discuss scheduling an initial 2-hour physical diagnostic walk.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-150 pb-4">
              Direct Contact Channels
            </h2>
            
            {contactInfo.map((info, idx) => {
              const IconComponent = Icons[info.icon] || Icons.Phone;
              
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-gray-150 card-shadow flex items-start space-x-4 transition-all-custom hover:border-gold/30"
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

            {/* Direct WhatsApp Callout */}
            <div className="bg-navy text-white rounded-xl p-6 border border-navy-light space-y-4">
              <h3 className="font-serif font-bold text-white text-lg flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                WhatsApp Direct Link
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Skip the form and chat with Tarun instantly on WhatsApp. Send a brief message about your equipment type or scrap targets.
              </p>
              <a
                href="https://wa.me/918439692259?text=Hi%20Tarun,%20I'd%20like%20to%20discuss%20a%20shopfloor%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors cursor-pointer"
              >
                <Icons.Phone className="w-4 h-4 mr-2" /> Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 card-shadow border border-gray-150">
            <h2 className="text-2xl font-serif font-bold text-navy border-b border-gray-150 pb-4 mb-6">
              Request Shopfloor Walkthrough
            </h2>
            <ContactForm lightTheme={true} />
          </div>

        </div>
      </section>
    </div>
  );
}
