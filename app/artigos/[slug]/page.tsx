import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#070a14] px-6 py-32">
      <article className="max-w-4xl mx-auto">
        <Link href="/#artigos" className="text-orange-400 text-xs font-mono font-bold uppercase tracking-[0.3em]">← Voltar aos artigos</Link>
        <div className="mt-12 mb-14"><div className="flex flex-wrap gap-3 text-[10px] font-mono uppercase tracking-wider text-slate-600 mb-6"><span className="text-orange-400">{article.category}</span><span>•</span><span>{article.date}</span><span>•</span><span>{article.readTime}</span></div><h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white mb-6">{article.title}</h1><p className="text-slate-400 text-xl leading-relaxed">{article.excerpt}</p></div>
        <div className="space-y-12 border-t border-white/5 pt-12">{article.content.map((section, index) => <section key={index}>{section.heading && <h2 className="text-2xl md:text-3xl font-black text-white mb-5">{section.heading}</h2>}{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="text-slate-400 text-base md:text-lg leading-8 mb-5">{paragraph}</p>)}</section>)}</div>
      </article>
    </main>
  );
}
