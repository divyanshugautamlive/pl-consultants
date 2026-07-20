import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-off-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-8 sm:p-12 card-shadow border border-gray-150 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy border-b border-gray-150 pb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400">Last updated: July 2026</p>
          
          <p className="text-steel text-base leading-relaxed">
            Pinnacle Logic Consulting (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of our website visitors and clients. This Privacy Policy describes how we collect, use, and safeguard your operational and contact details when you use our website.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">1. Information We Collect</h2>
          <p className="text-steel text-base leading-relaxed">
            When you request a shopfloor assessment, subscribe to our newsletter, or contact us through our website, we collect personal information you voluntarily provide, which may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-steel text-sm leading-relaxed">
            <li>Your name and job title (e.g., Plant Head, COO)</li>
            <li>Contact details, including email address and telephone number</li>
            <li>Company details, including factory name and sub-sector</li>
            <li>General shopfloor data you submit regarding OEE rates, rejections, or capacity bottlenecks.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">2. How We Use Your Information</h2>
          <p className="text-steel text-base leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-steel text-sm leading-relaxed">
            <li>Schedule and prepare for the initial 2-hour diagnostic shopfloor walkthrough.</li>
            <li>Send you relevant manufacturing insights, OEE checklists, and updates (you can opt out at any time).</li>
            <li>Improve the functionality, tools (like the ROI calculator), and services offered on our website.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">3. Confidentiality and Security</h2>
          <p className="text-steel text-base leading-relaxed">
            Manufacturing data is highly sensitive. We treat all factory operational metrics, scrap rates, and product lines with the highest level of confidentiality. We do not sell, rent, or trade your contact information or shopfloor datasets to any third parties. All datasets are secured using industry-standard technical measures.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">4. Contact Us</h2>
          <p className="text-steel text-base leading-relaxed">
            If you have any questions regarding this policy, please contact Tarun Sharma at:
          </p>
          <p className="text-steel text-sm font-semibold">
            Email: tarun@pinnaclelogic.in | Phone: +91 84396 92259
          </p>
          
          <div className="pt-6 border-t border-gray-150">
            <Link href="/" className="text-teal hover:underline text-sm font-semibold inline-flex items-center">
              &larr; Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
