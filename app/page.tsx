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
      "BlogsShop is the first thing I read every morning. The writing is sharp, the ideas are genuinely surprising, and the design makes every article a pleasure.",
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
      "BlogsShop introduced me to ideas I never would have found on my own. It's the rare publication that genuinely expands how you think.",
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
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80";
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
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-7 h-7 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";
              }}
            />
            <span className="text-xs text-stone-500 font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-stone-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime} min</span>
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const recentPosts = posts
    .filter((p) => p.slug !== featuredPost.slug)
    .slice(0, 6);

  const filteredPosts = activeCategory
    ? recentPosts.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      )
    : recentPosts;

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-stone-100 to-stone-50 overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                New articles every week
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              {APP_TAGLINE}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-2xl"
            >
              {APP_DESCRIPTION}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="#featured"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200"
              >
                Start Reading
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-700 font-semibold rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Subscribe Free
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-stone-200 text-center"
              >
                <stat.icon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <div className="font-serif text-2xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-xs text-stone-500 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section id="featured" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
            <h2 className="font-serif text-3xl font-bold text-stone-900">Featured Story</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <CategoryBadge
                  label={featuredPost.category}
                  color={featuredPost.categoryColor}
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={featuredPost.authorAvatar}
                  alt={featuredPost.author}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";
                  }}
                />
                <div>
                  <div className="text-sm font-semibold text-stone-800">{featuredPost.author}</div>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readingTime} min read</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/post/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2">Browse by Topic</h2>
            <p className="text-stone-500">Find articles that match your interests</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.button
              variants={scaleIn}
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === null
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              All Topics
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat.slug}
                variants={scaleIn}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.label ? null : cat.label
                  )
                }
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat.label
                    ? "bg-stone-900 text-white border-stone-900"
                    : `${cat.color} border-transparent hover:border-stone-300`
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Recent Posts Grid ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="font-serif text-3xl font-bold text-stone-900">Recent Articles</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/post/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center py-16 text-stone-400"
            >
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-lg">No articles in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Why BlogsShop ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">
              Why {APP_NAME}?
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              We're not another content farm. Here's what makes us different.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyReasons.map((reason) => (
              <motion.div
                key={reason.id}
                variants={fadeInUp}
                className={`rounded-2xl border p-6 ${reason.color}`}
              >
                <div className={`w-10 h-10 rounded-xl ${reason.iconBg} flex items-center justify-center mb-4`}>
                  <Check className={`w-5 h-5 ${reason.accent}`} />
                </div>
                <h3 className={`font-serif text-lg font-bold mb-2 ${reason.accent}`}>
                  {reason.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl font-bold text-stone-50 mb-4">
              Loved by readers
            </h2>
            <p className="text-stone-400 text-lg">
              Join thousands of curious minds who read {APP_NAME} every week.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={scaleIn}
                className="bg-stone-800 rounded-2xl p-7 border border-stone-700"
              >
                <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";
                    }}
                  />
                  <div>
                    <div className="text-stone-100 text-sm font-semibold">{t.name}</div>
                    <div className="text-stone-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Authors ── */}
      <section id="authors" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Meet the Authors</h2>
            <p className="text-stone-500 text-lg">
              Practitioners, researchers, and thinkers with real expertise.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {authors.map((author) => (
              <motion.div
                key={author.name}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 border border-stone-200 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-stone-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80";
                  }}
                />
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">{author.name}</h3>
                <p className="text-amber-600 text-sm font-medium mb-3">{author.role}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{author.bio}</p>
                {author.twitter && (
                  <p className="mt-3 text-xs text-stone-400 font-mono">{author.twitter}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section id="newsletter" className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-semibold rounded-full mb-6">
                <Mail className="w-3.5 h-3.5" />
                Free Newsletter
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-stone-50 mb-4"
            >
              Never miss a great read.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-stone-400 text-lg mb-10"
            >
              Get the best articles from {APP_NAME} delivered to your inbox every week. No spam, ever.
            </motion.p>

            {subscribed ? (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-500/20 text-emerald-300 rounded-2xl border border-emerald-500/30"
              >
                <Check className="w-5 h-5" />
                <span className="font-semibold">You're subscribed! Welcome aboard.</span>
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
                  className="flex-1 px-5 py-3.5 rounded-xl bg-stone-700 text-stone-100 placeholder-stone-400 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-amber-400 text-stone-900 font-bold rounded-xl hover:bg-amber-300 transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </motion.form>
            )}

            <motion.p variants={fadeInUp} className="text-stone-500 text-xs mt-5">
              Join 84,000+ readers. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
