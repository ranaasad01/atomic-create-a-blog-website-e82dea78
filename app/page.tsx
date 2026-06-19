"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Mail, Check, ChevronRight, Sparkles, BookOpen, Users, TrendingUp } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  categories,
  authors,
  posts,
} from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline section data ────────────────────────────────────────────────────

const stats = [
  { label: "Articles Published", value: "1,200+", icon: BookOpen },
  { label: "Monthly Readers", value: "84,000+", icon: Users },
  { label: "Topics Covered", value: "6 Verticals", icon: TrendingUp },
  { label: "Editor's Picks", value: "Weekly", icon: Star },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Inkwell is the first thing I read every morning. The writing is sharp, the ideas are genuinely surprising, and the design makes every article a pleasure.",
    name: "Priya Nair",
    role: "Product Designer, Figma",
    avatar: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1309092,resizemode-75,msid-122368466/industry/cons-products/fmcg/priya-nairs-playbook-how-hindustan-unilevers-new-ceo-built-global-brands-with-indian-roots.jpg",
  },
  {
    id: 2,
    quote:
      "I've tried dozens of newsletters and blogs. Nothing comes close to the editorial quality here. Every piece feels considered, not churned out.",
    name: "Marcus Webb",
    role: "CTO, Lumen Labs",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JMarcus_Webb.JPG/960px-JMarcus_Webb.JPG",
  },
  {
    id: 3,
    quote:
      "Inkwell introduced me to ideas I never would have found on my own. It's the rare publication that genuinely expands how you think.",
    name: "Aiko Tanaka",
    role: "Researcher, Oxford Internet Institute",
    avatar: "https://static.wikia.nocookie.net/punpun/images/3/3c/Aiko_c1p5.PNG/revision/latest/thumbnail/width/360/height/450?cb=20251015181018",
  },
];

const whyReasons = [
  {
    id: 1,
    title: "Deeply Reported",
    description:
      "Every article is researched, fact-checked, and edited to the highest standard. We'd rather publish one great piece than ten mediocre ones.",
    color: "bg-violet-50 border-violet-200",
    accent: "text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    id: 2,
    title: "No Algorithmic Feed",
    description:
      "Our editors curate what you read — not an engagement-maximising algorithm. Discover ideas on their merit, not their virality.",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: 3,
    title: "Cross-Disciplinary",
    description:
      "Design meets philosophy. Technology meets culture. We believe the most interesting ideas live at the edges between fields.",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    id: 4,
    title: "Written by Experts",
    description:
      "Our contributors are practitioners, researchers, and thinkers with real skin in the game — not generalist content writers.",
    color: "bg-emerald-50 border-emerald-200",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
];

// ─── Sub-components (inline) ─────────────────────────────────────────────────

function CategoryBadge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${color}`}
    >
      {label}
    </span>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://www.trschools.com/templates/imgs/default_placeholder.png";
          }}
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge label={post.category} color={post.categoryColor} />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-7 h-7 rounded-full object-cover border border-stone-200"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
              }}
            />
            <span className="text-xs text-stone-500 font-medium">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-1 text-stone-400 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPosts = (posts ?? []).filter((p) => p.featured).slice(0, 2);
  const recentPosts = (posts ?? []).slice(0, 6);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <main className="bg-stone-50 min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-50 via-stone-50 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {APP_TAGLINE}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-[1.08] tracking-tight mb-6"
            >
              Where great{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-600">ideas</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-100 -z-0 rounded" />
              </span>{" "}
              find their words.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-stone-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              {APP_DESCRIPTION}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#featured"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#featured")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-stone-50 font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 shadow-md"
              >
                Start Reading
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#newsletter"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#newsletter")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-700 font-semibold rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Subscribe Free
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="bg-white rounded-2xl border border-stone-200 p-5 text-center shadow-sm"
                >
                  <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-stone-600" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-stone-900 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-stone-500 text-xs font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED POSTS ───────────────────────────────────────────────── */}
      <section id="featured" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Editor's Picks
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 leading-tight">
                Featured this week
              </h2>
            </motion.div>

            {featuredPosts.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Hero featured post */}
                <motion.article
                  variants={slideInLeft}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 lg:row-span-1"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={featuredPosts[0]?.image ?? ""}
                      alt={featuredPosts[0]?.title ?? ""}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://www.trschools.com/templates/imgs/default_placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <CategoryBadge
                        label={featuredPosts[0]?.category ?? ""}
                        color={featuredPosts[0]?.categoryColor ?? ""}
                      />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors duration-200">
                      {featuredPosts[0]?.title ?? ""}
                    </h3>
                    <p className="text-stone-500 leading-relaxed mb-5">
                      {featuredPosts[0]?.excerpt ?? ""}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={featuredPosts[0]?.authorAvatar ?? ""}
                          alt={featuredPosts[0]?.author ?? ""}
                          className="w-8 h-8 rounded-full object-cover border border-stone-200"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
                          }}
                        />
                        <div>
                          <div className="text-sm font-semibold text-stone-800">
                            {featuredPosts[0]?.author ?? ""}
                          </div>
                          <div className="text-xs text-stone-400">
                            {featuredPosts[0]?.date ?? ""}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-stone-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPosts[0]?.readingTime ?? 0} min</span>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Second featured post */}
                {featuredPosts[1] && (
                  <motion.article
                    variants={slideInRight}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={featuredPosts[1].image}
                        alt={featuredPosts[1].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://www.trschools.com/templates/imgs/default_placeholder.png";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <CategoryBadge
                          label={featuredPosts[1].category}
                          color={featuredPosts[1].categoryColor}
                        />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors duration-200">
                        {featuredPosts[1].title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed mb-5">
                        {featuredPosts[1].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={featuredPosts[1].authorAvatar}
                            alt={featuredPosts[1].author}
                            className="w-8 h-8 rounded-full object-cover border border-stone-200"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src =
                                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
                            }}
                          />
                          <div>
                            <div className="text-sm font-semibold text-stone-800">
                              {featuredPosts[1].author}
                            </div>
                            <div className="text-xs text-stone-400">
                              {featuredPosts[1].date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-stone-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPosts[1].readingTime} min</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )}
              </div>
            )}

            {/* Recent posts grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section
        id="categories"
        className="py-20 md:py-28 bg-white border-y border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Browse by Topic
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2">
                Explore categories
              </h2>
              <p className="text-stone-500 mt-4 max-w-xl mx-auto">
                From the philosophy of mind to the future of interfaces — find
                the vertical that speaks to your curiosity.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
            >
              {(categories ?? []).map((cat, i) => {
                const gradients = [
                  "from-violet-50 to-violet-100 border-violet-200 hover:border-violet-400",
                  "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400",
                  "from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400",
                  "from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-400",
                  "from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400",
                  "from-stone-100 to-stone-200 border-stone-300 hover:border-stone-500",
                ];
                const textColors = [
                  "text-violet-700",
                  "text-blue-700",
                  "text-amber-700",
                  "text-emerald-700",
                  "text-rose-700",
                  "text-stone-700",
                ];
                const gradient = gradients[i % gradients.length] ?? gradients[0];
                const textColor = textColors[i % textColors.length] ?? textColors[0];

                return (
                  <motion.div
                    key={cat.slug}
                    variants={scaleIn}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.97 }}
                    className={`group cursor-pointer bg-gradient-to-br ${gradient} border rounded-2xl p-7 transition-all duration-200`}
                  >
                    <div
                      className={`font-serif text-2xl font-bold ${textColor} mb-2`}
                    >
                      {cat.label}
                    </div>
                    <div className="text-stone-500 text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Explore articles
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY INKWELL ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 max-w-xl leading-tight">
                Why {APP_NAME} is different
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {whyReasons.map((reason) => (
                <motion.div
                  key={reason.id}
                  variants={fadeInUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`${reason.color} border rounded-2xl p-8`}
                >
                  <div
                    className={`w-10 h-10 ${reason.iconBg} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <Check className={`w-5 h-5 ${reason.accent}`} />
                  </div>
                  <h3
                    className={`font-serif text-xl font-bold ${reason.accent} mb-3`}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AUTHORS ──────────────────────────────────────────────────────── */}
      <section
        id="authors"
        className="py-20 md:py-28 bg-stone-900 text-stone-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
                The Team
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-50 mt-2">
                Voices behind the words
              </h2>
              <p className="text-stone-400 mt-4 max-w-xl mx-auto">
                Our contributors are practitioners, researchers, and thinkers
                with real expertise — not generalist content writers.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {(authors ?? []).map((author) => (
                <motion.div
                  key={author.name}
                  variants={scaleIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-stone-800 rounded-2xl p-8 border border-stone-700 hover:border-amber-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
                      }}
                    />
                    <div>
                      <div className="font-serif text-lg font-bold text-stone-50">
                        {author.name}
                      </div>
                      <div className="text-amber-400 text-sm font-medium">
                        {author.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    {author.bio}
                  </p>
                  {author.twitter && (
                    <span className="text-stone-500 text-xs font-mono">
                      {author.twitter}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Reader Love
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2">
                What our readers say
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-7"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-amber-100 p-8 shadow-sm"
                >
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-stone-700 leading-relaxed mb-6 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-stone-200"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
                      }}
                    />
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-stone-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section id="newsletter" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative bg-stone-900 rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/20 text-amber-400 rounded-full text-sm font-semibold mb-6">
                  <Mail className="w-3.5 h-3.5" />
                  Free Weekly Newsletter
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl font-bold text-stone-50 mb-4 leading-tight"
              >
                Never miss an idea worth reading.
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-stone-400 text-lg mb-10 max-w-xl mx-auto"
              >
                Join 84,000+ curious readers. Every Friday, our editors pick
                the three best pieces of the week — delivered to your inbox,
                no noise.
              </motion.p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 font-semibold"
                >
                  <Check className="w-5 h-5" />
                  You&apos;re subscribed — welcome to Inkwell!
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeInUp}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-3.5 bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 rounded-xl focus:outline-none focus:border-amber-400 transition-colors duration-200 text-sm"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-3.5 bg-amber-400 text-stone-900 font-bold rounded-xl hover:bg-amber-300 transition-colors duration-200 text-sm whitespace-nowrap"
                  >
                    Subscribe Free
                  </motion.button>
                </motion.form>
              )}

              <motion.p
                variants={fadeInUp}
                className="text-stone-600 text-xs mt-5"
              >
                No spam, ever. Unsubscribe in one click.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}