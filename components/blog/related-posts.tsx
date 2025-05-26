import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

// Sample related posts data (in a real app, this would come from an API)
const allPosts = [
  {
    id: "1",
    title: "5 Tips for Safely Shipping Electronics",
    excerpt:
      "Learn how to properly package and ship electronic devices to ensure they arrive safely at their destination.",
    category: "Shipping Tips",
    date: "2023-04-15",
    author: "Budi Santoso",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Expanding Our Services to Eastern Indonesia",
    excerpt:
      "We're excited to announce the expansion of our delivery services to more locations in Eastern Indonesia.",
    category: "Updates",
    date: "2023-03-22",
    author: "Adi Wijaya",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "How We Helped Local Artisans Reach Global Markets",
    excerpt:
      "Read the success story of how our shipping services helped local artisans expand their business internationally.",
    category: "Success Stories",
    date: "2023-02-10",
    author: "Siti Rahayu",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "8 min read",
  },
  {
    id: "4",
    title: "Understanding Customs Regulations for International Shipping",
    excerpt:
      "A comprehensive guide to navigating customs regulations when shipping packages internationally.",
    category: "Shipping Tips",
    date: "2023-01-28",
    author: "Maya Putri",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "10 min read",
  },
  {
    id: "5",
    title: "Sustainable Packaging: Our Commitment to the Environment",
    excerpt:
      "Discover how Bajawa Jastip is implementing eco-friendly packaging solutions to reduce our environmental impact.",
    category: "Updates",
    date: "2022-12-15",
    author: "Adi Wijaya",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "From Jakarta to Papua: A Delivery Journey",
    excerpt:
      "Follow the journey of a package as it travels from Jakarta to remote areas of Papua, overcoming various challenges.",
    category: "Success Stories",
    date: "2022-11-05",
    author: "Budi Santoso",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "12 min read",
  },
];

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // Filter out current post and get related posts (same category first, then others)
  const relatedPosts = allPosts
    .filter((post) => post.id !== currentPostId)
    .sort((a, b) => {
      // Prioritize posts from the same category
      if (a.category === category && b.category !== category) return -1;
      if (a.category !== category && b.category === category) return 1;
      // Then sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3); // Show only 3 related posts

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-2 text-lg">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
