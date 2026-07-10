import Link from "next/link";
import { notFound } from "next/navigation";
import blogPostsData from "@/data/blog-posts.json";
import * as Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetail({ params }) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current one)
  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // Lightweight parser to render headings, bullet lists, math equations and normal paragraphs
  const renderContent = (content) => {
    return content.split("\n").map((para, idx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      // H3 Headings
      if (trimmed.startsWith("###")) {
        return (
          <h3 key={idx} className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }

      // H4 Headings
      if (trimmed.startsWith("####")) {
        return (
          <h4 key={idx} className="text-xl font-serif font-semibold text-navy mt-8 mb-3">
            {trimmed.replace("####", "").trim()}
          </h4>
        );
      }

      // Ordered Lists
      if (/^\d+\.\s/.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        return (
          <div key={idx} className="flex items-start space-x-3 text-steel text-base leading-relaxed pl-4 mb-4">
            <span className="font-bold text-teal">{trimmed.match(/^\d+/)[0]}.</span>
            <span>{text}</span>
          </div>
        );
      }

      // Unordered Lists
      if (trimmed.startsWith("-")) {
        return (
          <div key={idx} className="flex items-start space-x-3 text-steel text-base leading-relaxed pl-4 mb-3">
            <span className="text-gold mt-1.5 shrink-0">&bull;</span>
            <span>{trimmed.replace("-", "").trim()}</span>
          </div>
        );
      }

      // Math display equations
      if (trimmed.startsWith("$$") && trimmed.endsWith("$$")) {
        const equation = trimmed.replace(/\$\$/g, "");
        return (
          <div key={idx} className="my-8 py-5 bg-navy/5 border-y border-navy/10 rounded text-center overflow-x-auto">
            <span className="text-navy font-serif font-semibold text-lg sm:text-xl block px-4 py-2">
              {equation}
            </span>
          </div>
        );
      }

      // Standard Paragraph
      return (
        <p key={idx} className="text-steel text-base sm:text-lg leading-relaxed mb-6">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gold uppercase tracking-wider mb-4">
            <span>{post.category}</span>
            <span>&bull;</span>
            <span className="text-steel-light">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-300">
            <span>By Tarun Sharma</span>
            <span>&bull;</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
            <span>&bull;</span>
            <span className="flex items-center">
              <Icons.Clock className="w-4 h-4 mr-1 shrink-0" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 card-shadow border border-gray-100">
            <article className="prose max-w-none">
              {renderContent(post.content)}
            </article>
          </div>

          {/* Sidebar CTA & Related Posts */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Action Contact block */}
            <div className="bg-navy text-white rounded-2xl p-6 card-shadow border border-navy-light space-y-4">
              <h3 className="font-serif font-bold text-white text-lg">
                Discuss This Article
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Connect with Tarun Sharma to explore how these OEE or waste principles apply to your factory operations.
              </p>
              <Button href="/contact" variant="gold" className="w-full py-2.5 text-xs font-bold">
                Book Diagnostic Walkthrough
              </Button>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 space-y-5">
              <h3 className="font-serif font-bold text-navy text-base border-b border-gray-100 pb-3">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <div key={related.id} className="group">
                    <span className="text-[10px] uppercase font-bold text-teal tracking-wider block mb-1">
                      {related.category}
                    </span>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="font-serif font-bold text-navy text-sm hover:text-teal block leading-snug transition-colors group-hover:underline"
                    >
                      {related.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
