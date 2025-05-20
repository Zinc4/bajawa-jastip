import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const runtime = "edge";
export default function LatestBlogPosts() {
  const blogPosts = [
    {
      title: "5 Tips for Safely Shipping Electronics",
      excerpt:
        "Learn how to properly package and ship electronic devices to ensure they arrive safely at their destination.",
      date: "April 15, 2023",
      image: "/placeholder.svg?height=300&width=500",
      slug: "1",
    },
    {
      title: "Expanding Our Services to Eastern Indonesia",
      excerpt:
        "We're excited to announce the expansion of our delivery services to more locations in Eastern Indonesia.",
      date: "March 22, 2023",
      image: "/placeholder.svg?height=300&width=500",
      slug: "2",
    },
    {
      title: "How We Helped Local Artisans Reach Global Markets",
      excerpt:
        "Read the success story of how our shipping services helped local artisans expand their business internationally.",
      date: "February 10, 2023",
      image: "/placeholder.svg?height=300&width=500",
      slug: "3",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Terbaru dari Blog Kami</h2>
        {/* <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and stories from Bajawa
          Jastip.
        </p> */}
      </div>

      {/* <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardDescription>{post.date}</CardDescription>
              <CardTitle className="line-clamp-2">
                <Link
                  href={`/blog/${post.slug}`}
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
                href={`/blog/${post.slug}`}
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div> */}

      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </div>
  );
}
