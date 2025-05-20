import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const runtime = "edge";

export default function FeaturedServices() {
  const services = [
    {
      title: "Paket Olshop",
      description:
        "Reliable delivery service for packages of all sizes across Indonesia.",
      image: "/placeholder.svg?height=300&width=500",
      link: "/services#regular-delivery",
    },
    {
      title: "Barang Elektronik",
      description:
        "Specialized service for safe transport of electronic devices and equipment.",
      image: "/elektronik.jpg?height=300&width=500",
      link: "/services#electronics-shipping",
    },
    {
      title: "Dokumen",
      description:
        "Secure and confidential delivery of important documents and paperwork.",
      image: "/dokumen.jpg?height=300&width=500",
      link: "/services#document-handling",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami menawarkan berbagai layanan pengiriman yang disesuaikan untuk
          memenuhi kebutuhan spesifik Anda, memastikan barang Anda mencapai
          tujuan dengan aman dan tepat waktu.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              {/* <CardDescription>{service.description}</CardDescription> */}
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href={service.link}
                  className="flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
