import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles on shipping tips, company updates, and success stories.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: "1",
      title: "5 Tips for Safely Shipping Electronics",
      excerpt:
        "Learn how to properly package and ship electronic devices to ensure they arrive safely at their destination.",
      category: "Shipping Tips",
      date: "April 15, 2023",
      author: "Budi Santoso",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      title: "Expanding Our Services to Eastern Indonesia",
      excerpt:
        "We're excited to announce the expansion of our delivery services to more locations in Eastern Indonesia.",
      category: "Updates",
      date: "March 22, 2023",
      author: "Adi Wijaya",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      title: "How We Helped Local Artisans Reach Global Markets",
      excerpt:
        "Read the success story of how our shipping services helped local artisans expand their business internationally.",
      category: "Success Stories",
      date: "February 10, 2023",
      author: "Siti Rahayu",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "4",
      title: "Understanding Customs Regulations for International Shipping",
      excerpt: "A comprehensive guide to navigating customs regulations when shipping packages internationally.",
      category: "Shipping Tips",
      date: "January 28, 2023",
      author: "Maya Putri",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "5",
      title: "Sustainable Packaging: Our Commitment to the Environment",
      excerpt:
        "Discover how Bajawa Jastip is implementing eco-friendly packaging solutions to reduce our environmental impact.",
      category: "Updates",
      date: "December 15, 2022",
      author: "Adi Wijaya",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "6",
      title: "From Jakarta to Papua: A Delivery Journey",
      excerpt:
        "Follow the journey of a package as it travels from Jakarta to remote areas of Papua, overcoming various challenges.",
      category: "Success Stories",
      date: "November 5, 2022",
      author: "Budi Santoso",
      image: "/placeholder.svg?height=400&width=600",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
  ]

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Shipping Tips", count: blogPosts.filter((post) => post.category === "Shipping Tips").length },
    { name: "Updates", count: blogPosts.filter((post) => post.category === "Updates").length },
    { name: "Success Stories", count: blogPosts.filter((post) => post.category === "Success Stories").length },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="mb-8 flex items-center">
            <div className="relative flex-grow">
              <Input type="text" placeholder="Search articles..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button className="ml-2">Search</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline text-sm">
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                      className="flex justify-between hover:text-primary"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 px-2 rounded-full text-sm">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <Link href={`/blog/${post.id}`} className="font-medium hover:text-primary line-clamp-2">
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Subscribe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Get the latest articles and updates delivered to your inbox.</p>
              <Input type="email" placeholder="Your email address" className="mb-2" />
              <Button className="w-full">Subscribe</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

