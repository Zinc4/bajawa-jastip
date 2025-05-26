import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "5 Tips for Safely Shipping Electronics",
    excerpt:
      "Learn how to properly package and ship electronic devices to ensure they arrive safely at their destination.",
    category: "Shipping Tips",
    date: "2023-04-15",
    author: "Budi Santoso",
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
    readTime: "12 min read",
  },
];

const categories = {
  "shipping-tips": "Shipping Tips",
  updates: "Updates",
  "success-stories": "Success Stories",
};

function getCategoryPosts(category: string) {
  const categoryName = categories[category as keyof typeof categories];
  if (!categoryName) return null;

  return {
    name: categoryName,
    posts: blogPosts.filter((post) => post.category === categoryName),
  };
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const categoryData = getCategoryPosts(params.category);

  if (!categoryData) {
    return {
      title: "Category Not Found",
      description: "The requested blog category could not be found.",
    };
  }

  return {
    title: `${categoryData.name} - Blog`,
    description: `Read our latest articles about ${categoryData.name.toLowerCase()}.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryData = getCategoryPosts(params.category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
        <p className="text-gray-600">
          {categoryData.posts.length} article
          {categoryData.posts.length !== 1 ? "s" : ""} in this category
        </p>
      </div>

      {categoryData.posts.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {categoryData.posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
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
              <CardHeader>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </CardDescription>
                <CardTitle className="line-clamp-2">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:underline"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}
