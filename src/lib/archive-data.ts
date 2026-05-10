export type ArchiveCategory = "painting" | "photograph" | "article" | "other";

export type ArchiveItem = {
  id: string;
  category: ArchiveCategory;
  title: string;
  artist?: string;
  description?: string;
  sourceUrl: string;
};

export const archiveItems: ArchiveItem[] = [
  {
    id: "painting-1",
    category: "painting",
    title: "Art 1",
    artist: "Unknown",
    description: "Submitted artwork entry.",
    sourceUrl: "/images/painting/painting-1.jpg",
  },
  {
    id: "painting-2",
    category: "painting",
    title: "Art 2",
    artist: "Rafia Akter Konka",
    description: "Submitted artwork entry.",
    sourceUrl: "/images/painting/painting-2.jpg",
  },
  {
    id: "painting-3",
    category: "painting",
    title: "Art 3",
    artist: "Trust Icon",
    description: "Submitted artwork entry.",
    sourceUrl: "/images/painting/painting-3.jpg",
  },
  {
    id: "painting-4",
    category: "painting",
    title: "Art 4",
    artist: "Banksy",
    description: "Submitted artwork entry.",
    sourceUrl: "/images/painting/painting-4.jpg",
  },
  {
    id: "photo-1",
    category: "photograph",
    title: "Photo 1",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-1.JPG",
  },
  {
    id: "photo-2",
    category: "photograph",
    title: "Photo 2",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-2.JPG",
  },
  {
    id: "photo-3",
    category: "photograph",
    title: "Photo 3",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-3.JPG",
  },
  {
    id: "photo-4",
    category: "photograph",
    title: "Photo 4",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-4.JPG",
  },
  {
    id: "photo-5",
    category: "photograph",
    title: "Photo 5",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-5.JPG",
  },
  {
    id: "photo-6",
    category: "photograph",
    title: "Photo 6",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-6.JPG",
  },
  {
    id: "photo-7",
    category: "photograph",
    title: "Photo 7",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-7.JPG",
  },
  {
    id: "photo-8",
    category: "photograph",
    title: "Photo 8",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-8.PNG",
  },
  {
    id: "photo-9",
    category: "photograph",
    title: "Photo 9",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-9.JPG",
  },
  {
    id: "photo-10",
    category: "photograph",
    title: "Photo 10",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-10.JPG",
  },
  {
    id: "photo-11",
    category: "photograph",
    title: "Photo 11",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-11.JPG",
  },
  {
    id: "photo-12",
    category: "photograph",
    title: "Photo 12",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-12.JPG",
  },
  {
    id: "photo-13",
    category: "photograph",
    title: "Photo 13",
    artist: "Md Rafeur Rahman",
    sourceUrl: "/images/photography/photo-13.jpeg",
  },
  {
    id: "photo-14",
    category: "photograph",
    title: "Photo 14",
    artist: "Md Rafeur Rahman",
    sourceUrl: "/images/photography/photo-14.jpeg",
  },
  {
    id: "photo-15",
    category: "photograph",
    title: "Photo 15",
    artist: "Mushfiq Hossain Broto",
    sourceUrl: "/images/photography/photo-15.jpg",
  },
  {
    id: "photo-16",
    category: "photograph",
    title: "Photo 16",
    artist: "A. M. Ahad",
    sourceUrl: "/images/photography/photo-16.webp",
  },
  {
    id: "photo-17",
    category: "photograph",
    title: "Photo 17",
    artist: "Sshariar Mahmud Shawn",
    sourceUrl: "/images/photography/photo-17.jpeg",
  },
  {
    id: "photo-18",
    category: "photograph",
    title: "Photo 18",
    artist: "Sshariar Mahmud Shawn",
    sourceUrl: "/images/photography/photo-18.jpeg",
  },
];

export const categoryLabel: Record<ArchiveCategory, string> = {
  painting: "Art",
  photograph: "Photograph",
  article: "Article",
  other: "Other",
};

export const archiveCategories: ArchiveCategory[] = [
  "painting",
  "photograph",
  "article",
  "other",
];
