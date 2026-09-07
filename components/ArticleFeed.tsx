"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";

const ArticleFeed: React.FC = () => {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const categories = ["Todos", ...Array.from(new Set(ARTICLES.map((article) => article.category)))];
  const filtered = useMemo(() => ARTICLES.filter((article) => {
    const matchesCategory = category === "Todos" || article.category === category;
    const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase().trim());
  }), [category, query]);

  const featured = ARTICLES[0];

  return (
    <div>
      {featured && category === "Todos" && !query && (
        <Link href={`/artigos/${featured.slug}`} className="group block mb-12 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white/[0.02] to-transparent p-8 md:p-10 transition-all hover:border-orange-500/40">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <span className="text-orange-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Destaque editorial</span>
              <h4 className="text-white text-3xl md:text-4xl font-black tracking-tight leading-tight mt-4 mb-4 group-hover:text-orange-400 transition-colors">{featured.title}</h4>
              <p className="text-slate-400 max-w-3xl leading-relaxed">{featured.excerpt}</p>
            </div>
            <span className="text-orange-400 font-black text-xs uppercase tracking-[0.25em] whitespace-nowrap">Ler destaque →</span>
          </div>
        </Link>
      )}

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar artigos por categoria">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`px-4 py-2.5 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${category === item ? "border-orange-500/50 bg-orange-500/10 text-orange-400" : "border-white/5 text-slate-500 hover:border-white/15 hover:text-slate-300"}`}>{item}</button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Buscar artigos</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por tema..." className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white outline-none placeholder:text-slate-600 focus:border-orange-500/40" />
        </label>
      </div>

      <div className="flex justify-between items-center mb-6"><span className="text-slate-600 text-xs font-mono">{filtered.length} resultado{filtered.length === 1 ? "" : "s"}</span><span className="text-slate-700 text-[10px] font-mono uppercase tracking-wider">Pesquisa local • conteúdo técnico</span></div>

      {filtered.length === 0 ? <div className="rounded-2xl border border-white/5 p-10 text-center text-slate-500 text-sm">Nenhum artigo encontrado para os filtros atuais.</div> : <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((article, index) => (
          <Link href={`/artigos/${article.slug}`} key={article.slug} className="group glass-card rounded-2xl p-8 border border-white/5 hover:border-orange-500/25 transition-all">
            <div className="flex justify-between gap-4 mb-6"><div className="flex flex-wrap gap-3 text-[10px] font-mono uppercase tracking-wider text-slate-600"><span className="text-orange-400">{article.category}</span><span>•</span><span>{article.date}</span><span>•</span><span>{article.readTime}</span></div><span className="text-slate-700 text-[10px] font-mono">#{String(index + 1).padStart(2, "0")}</span></div>
            <h4 className="text-white text-2xl font-black leading-tight mb-4 group-hover:text-orange-400 transition-colors">{article.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-7">{article.excerpt}</p>
            <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.3em]">Ler artigo →</span>
          </Link>
        ))}
      </div>}
    </div>
  );
};

export default ArticleFeed;
