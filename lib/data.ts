export const APP_NAME = "BlogsShop";
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
    image: "https://www.mile-hi.ai/images/art-of-forgetting-infographic.png",
    featured: true,
    tags: ["ai", "technology", "memory"],
  },
  {
    slug: "the-new-geography-of-culture",
    title: "The New Geography of Culture",
    excerpt:
      "When everywhere looks like everywhere else, what does it mean to have a sense of place? Sofia Reyes on the homogenisation of the global city.",
    category: "Culture",
    categoryColor: "bg-amber-100 text-amber-700",
    author: "Sofia Reyes",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    date: "June 5, 2025",
    readingTime: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    featured: false,
    tags: ["culture", "cities", "globalisation"],
  },
  {
    slug: "the-biology-of-awe",
    title: "The Biology of Awe",
    excerpt:
      "Scientists are beginning to understand what happens in the brain when we encounter something truly sublime. The findings are stranger than you'd expect.",
    category: "Science",
    categoryColor: "bg-emerald-100 text-emerald-700",
    author: "Elena Marsh",
    authorAvatar: "https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2Fblog1280px-raphael_school_of_athens_0.jpg%3Fitok%3DHPj8InIx&w=3840&q=90",
    date: "May 30, 2025",
    readingTime: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Milky_Way_Arch.jpg/800px-Milky_Way_Arch.jpg",
    featured: false,
    tags: ["science", "neuroscience", "psychology"],
  },
  {
    slug: "slow-capital",
    title: "Slow Capital",
    excerpt:
      "A growing cohort of founders is rejecting the growth-at-all-costs playbook. What happens when you build a business to last instead of to exit?",
    category: "Business",
    categoryColor: "bg-rose-100 text-rose-700",
    author: "James Okafor",
    authorAvatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    date: "May 25, 2025",
    readingTime: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat_03.jpg/800px-Cat_03.jpg",
    featured: false,
    tags: ["business", "startups", "sustainability"],
  },
  {
    slug: "the-ethics-of-attention",
    title: "The Ethics of Attention",
    excerpt:
      "In an economy built on capturing your focus, choosing where to direct your attention has become a profound moral act.",
    category: "Philosophy",
    categoryColor: "bg-stone-200 text-stone-700",
    author: "Sofia Reyes",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    date: "May 20, 2025",
    readingTime: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    featured: false,
    tags: ["philosophy", "ethics", "attention"],
  },
];
