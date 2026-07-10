"use client";

import { useState } from "react";
import Link from "next/link";
import blogPostsData from "@/data/blog-posts.json";
import * as Icons from "@/components/ui/Icons";

export default function BlogHub() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Manufacturing Insights", "Case Studies", "Lean Tips"];

  const filteredPosts = selectedCategory === "All"
    ? blogPostsData
    : blogPostsData.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-off-white min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#F5F2EB] text-steel pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full text-gold font-semibold">
            Thought Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-navy leading-tight">
            Manufacturing Insights Blog
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded"></div>
          <p className="text-steel-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Practical strategies, shopfloor case studies, and execution-first perspectives on OEE, SMED, plant layout optimization, and workforce productivity.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold text-steel mr-2">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all-custom cursor-pointer ${
                selectedCategory === cat
                  ? "bg-teal text-white border-teal shadow"
                  : "bg-white text-steel border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {cat === "All" ? "All Posts" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. POSTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden card-shadow transition-all-custom card-shadow-hover flex flex-col h-full border border-gray-100"
            >
              <div className="bg-navy p-4 text-white flex justify-between items-center shrink-0">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif font-bold text-navy text-lg sm:text-xl mb-3 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">
                    Published: {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </p>
                  <p className="text-steel text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-teal font-semibold hover:text-teal-dark text-sm inline-flex items-center"
                  >
                    Read Article <Icons.ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
