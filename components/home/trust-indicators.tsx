import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
export const runtime = "edge";
export default function TrustIndicators() {
  const testimonials = [
    {
      name: "@tasya_nau",
      role: "Small Business Owner",
      content: "Sangat ramah dikantong.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "@hendriqueantonio",
      role: "IT Professional",
      content: "Recommended...!!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "@clarambate_",
      role: "Legal Consultant",
      content: "Murah dan bertanggung jawab.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const partners = [
    { name: "Company A", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company B", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company C", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company D", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company E", logo: "/placeholder.svg?height=60&width=120" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Dipercaya oleh Ribuan Orang
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jangan hanya percaya pada apa yang kami katakan. Lihat apa yang
            pelanggan dan mitra kami katakan tentang layanan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center mb-8">
            Our Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
