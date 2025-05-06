import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our gallery showcasing operations, partner collaborations, and community events at Bajawa Jastip.",
}

export default function GalleryPage() {
  const galleryItems = [
    {
      category: "operations",
      images: [
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Warehouse operations",
          title: "Our main warehouse in Jakarta",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Delivery vehicle fleet",
          title: "Our delivery fleet ready for dispatch",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Package sorting",
          title: "Efficient package sorting system",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Staff handling packages",
          title: "Our trained staff handling packages with care",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Tracking system",
          title: "Advanced tracking system for real-time updates",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Quality control",
          title: "Quality control inspection before dispatch",
        },
      ],
    },
    {
      category: "partners",
      images: [
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Partnership signing",
          title: "Signing ceremony with major retail partner",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Business meeting",
          title: "Strategic planning with logistics partners",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Partner showcase",
          title: "Annual partner showcase event",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Collaboration project",
          title: "Joint delivery initiative with tech company",
        },
      ],
    },
    {
      category: "community",
      images: [
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Community outreach",
          title: "Donation drive for local schools",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Charity event",
          title: "Annual charity run sponsored by Bajawa Jastip",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Environmental initiative",
          title: "Tree planting initiative with local community",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Education program",
          title: "Logistics workshop for university students",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Community celebration",
          title: "Celebrating our 5th anniversary with the community",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="partners">Partner Collaborations</TabsTrigger>
          <TabsTrigger value="community">Community Events</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.flatMap((category) =>
              category.images.map((image, index) => (
                <GalleryItem key={`${category.category}-${index}`} image={image} />
              )),
            )}
          </div>
        </TabsContent>

        {galleryItems.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, index) => (
                <GalleryItem key={index} image={image} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function GalleryItem({ image }: { image: { src: string; alt: string; title: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square relative">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
        <h3 className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.title}
        </h3>
      </div>
    </div>
  )
}

