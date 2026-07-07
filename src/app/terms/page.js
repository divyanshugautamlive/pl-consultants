import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-off-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-8 sm:p-12 card-shadow border border-gray-150 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy border-b border-gray-150 pb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-400">Last updated: July 2026</p>

          <p className="text-steel text-base leading-relaxed">
            By accessing or using the PL Consulting website (&ldquo;Site&rdquo;), you agree to comply with and be bound by the following Terms of Service. If you do not agree, please do not use this Site.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">1. Intellectual Property</h2>
          <p className="text-steel text-base leading-relaxed">
            All content on this website, including but not limited to text, articles, case studies, graphics, logos, OEE checklists, Excel templates, and calculations, is the intellectual property of PL Consulting and is protected by copyright laws. You may download materials specifically designated for free download for your internal company use, but you may not republish, distribute, or sell this content without our prior written consent.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">2. ROI Calculator Disclaimer</h2>
          <p className="text-steel text-base leading-relaxed">
            The interactive ROI Calculator provided on this Site is intended for preliminary planning and illustrative purposes only. All calculations are mathematical estimates based on average sector parameters. PL Consulting does not guarantee specific capacity increases or financial returns based solely on the calculator results. Actual savings and performance improvements require a full physical diagnostic review and custom floor implementation.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">3. Professional Consulting Engagements</h2>
          <p className="text-steel text-base leading-relaxed">
            No consulting contract or fiduciary relationship is established solely by submitting a form on this Site or downloading checklists. Agreements for physical shopfloor walkthroughs and plant transformations are governed by separate, signed master service agreements (MSAs) detailing specific work scopes, fees, and confidentiality guarantees.
          </p>

          <h2 className="text-xl font-serif font-bold text-navy mt-8">4. Contact Information</h2>
          <p className="text-steel text-base leading-relaxed">
            If you have any questions regarding these terms, please contact us at:
          </p>
          <p className="text-steel text-sm font-semibold">
            Email: tarunsharma301996@gmail.com | Phone: +91 84396 92259
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
