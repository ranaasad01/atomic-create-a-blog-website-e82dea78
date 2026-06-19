export const APP_NAME = "Inkwell";
export const APP_TAGLINE = "Ideas worth reading.";
export const APP_DESCRIPTION =
  "A clean, modern editorial blog covering design, technology, culture, and ideas worth sharing.";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Featured", href: "#featured" },
  { label: "Categories", href: "#categories" },
  { label: "Authors", href: "#authors" },
  { label: "Newsletter", href: "#newsletter" },
];

export const navCTA = {
  label: "Start Reading",
  href: "#featured",
};

export interface Category {
  slug: string;
  label: string;
  color: string;
}

export const categories: Category[] = [
  { slug: "design", label: "Design", color: "bg-violet-100 text-violet-700" },
  { slug: "technology", label: "Technology", color: "bg-blue-100 text-blue-700" },
  { slug: "culture", label: "Culture", color: "bg-amber-100 text-amber-700" },
  { slug: "science", label: "Science", color: "bg-emerald-100 text-emerald-700" },
  { slug: "business", label: "Business", color: "bg-rose-100 text-rose-700" },
  { slug: "philosophy", label: "Philosophy", color: "bg-stone-200 text-stone-700" },
];

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  twitter?: string;
}

export const authors: Author[] = [
  {
    name: "Elena Marsh",
    role: "Editor in Chief",
    avatar: "https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2Fblog1280px-raphael_school_of_athens_0.jpg%3Fitok%3DHPj8InIx&w=3840&q=90",
    bio: "Elena writes about the intersection of design and human experience. Former creative director at Wired.",
    twitter: "@elenamarsh",
  },
  {
    name: "James Okafor",
    role: "Technology Editor",
    avatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    bio: "James covers emerging technology, AI, and the future of work. Previously at MIT Technology Review.",
    twitter: "@jamesokafor",
  },
  {
    name: "Sofia Reyes",
    role: "Culture Correspondent",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    bio: "Sofia explores culture, identity, and the stories that shape our world. Based in Mexico City.",
    twitter: "@sofiareyes",
  },
];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  authorAvatar: string;
  date: string;
  readingTime: number;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "the-quiet-revolution-in-interface-design",
    title: "The Quiet Revolution in Interface Design",
    excerpt:
      "How a generation of designers is stripping away noise to reveal the essential — and why restraint has become the most radical act in tech.",
    category: "Design",
    categoryColor: "bg-violet-100 text-violet-700",
    author: "Elena Marsh",
    authorAvatar: "https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2Fblog1280px-raphael_school_of_athens_0.jpg%3Fitok%3DHPj8InIx&w=3840&q=90",
    date: "June 12, 2025",
    readingTime: 7,
    image: "https://www.mile-hi.ai/images/art-of-forgetting-infographic.png",
    featured: true,
    tags: ["design", "ux", "minimalism"],
  },
  {
    slug: "ai-and-the-art-of-forgetting",
    title: "AI and the Art of Forgetting",
    excerpt:
      "Large language models remember everything — except what matters. A meditation on memory, meaning, and what machines still can't grasp.",
    category: "Technology",
    categoryColor: "bg-blue-100 text-blue-700",
    author: "James Okafor",
    authorAvatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    date: "June 8, 2025",
    readingTime: 9,
    image: "https://blog.hamiltonbeachcommercial.com/hubfs/shutterstock_1917780872-1.jpg",
    featured: true,
    tags: ["ai", "technology", "philosophy"],
  },
  {
    slug: "the-return-of-slow-travel",
    title: "The Return of Slow Travel",
    excerpt:
      "In an era of instant everything, a growing movement is rediscovering the profound pleasure of going nowhere fast.",
    category: "Culture",
    categoryColor: "bg-amber-100 text-amber-700",
    author: "Sofia Reyes",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    date: "June 4, 2025",
    readingTime: 6,
    image: "https://picsum.photos/seed/a47c51b7f950/800/600",
    featured: false,
    tags: ["culture", "travel", "lifestyle"],
  },
  {
    slug: "why-your-attention-is-the-new-currency",
    title: "Why Your Attention Is the New Currency",
    excerpt:
      "The economics of distraction, and how reclaiming focus might be the most subversive thing you can do in 2025.",
    category: "Philosophy",
    categoryColor: "bg-stone-200 text-stone-700",
    author: "Elena Marsh",
    authorAvatar: "https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2Fblog1280px-raphael_school_of_athens_0.jpg%3Fitok%3DHPj8InIx&w=3840&q=90",
    date: "May 29, 2025",
    readingTime: 8,
    image: "https://m.media-amazon.com/images/I/814VLyotExL._AC_UF1000,1000_QL80_.jpg",
    featured: false,
    tags: ["philosophy", "productivity", "mindfulness"],
  },
  {
    slug: "the-science-of-awe",
    title: "The Science of Awe",
    excerpt:
      "Researchers are discovering that moments of wonder don't just feel good — they reshape the brain, expand time, and make us more generous.",
    category: "Science",
    categoryColor: "bg-emerald-100 text-emerald-700",
    author: "James Okafor",
    authorAvatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    date: "May 22, 2025",
    readingTime: 5,
    image: "https://cdn11.bigcommerce.com/s-yneuaokjib/images/stencil/1280x1280/attribute_rule_images/152085_source_1748937139.png",
    featured: false,
    tags: ["science", "psychology", "wellbeing"],
  },
  {
    slug: "building-companies-that-last",
    title: "Building Companies That Last",
    excerpt:
      "The founders who play the long game share a counterintuitive secret: they optimize for trust, not growth.",
    category: "Business",
    categoryColor: "bg-rose-100 text-rose-700",
    author: "Sofia Reyes",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    date: "May 15, 2025",
    readingTime: 10,
    image: "https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms-2/2024/06/p-1-91137978-longevity-and-the-inclusive-workplace.jpg",
    featured: false,
    tags: ["business", "startups", "leadership"],
  },
];