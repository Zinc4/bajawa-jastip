import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ServiceMap from "@/components/services/service-map";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description:
    "Explore our range of delivery services including regular delivery, electronics shipping, and document handling across Indonesia.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "regular-delivery",
      title: "Paket Olshop",
      description:
        "Reliable delivery service for packages of all sizes across Indonesia.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Door-to-door delivery",
        "Package tracking",
        "Insurance options",
        "Flexible scheduling",
        "Nationwide coverage",
      ],
    },
    {
      id: "electronics-shipping",
      title: "Perabotan Rumah Tangga",
      description:
        "Specialized service for safe transport of electronic devices and equipment.",
      image: "/rumah-tangga.jpg?height=400&width=600",
      features: [
        "Custom packaging",
        "Extra protection",
        "Handling by specialists",
        "Full insurance coverage",
        "Express delivery options",
      ],
    },
    {
      id: "document-handling",
      title: "Barang Elektronik",
      description:
        "Secure and confidential delivery of important documents and paperwork.",
      image: "/elektronik.jpg?height=400&width=600",
      features: [
        "Confidential handling",
        "Signature confirmation",
        "Express delivery",
        "Tracking and notifications",
        "Secure packaging",
      ],
    },
    {
      id: "documents-handling",
      title: "Dokumen",
      description:
        "Secure and confidential delivery of important documents and paperwork.",
      image: "/dokumen.jpg?height=400&width=600",
      features: [
        "Confidential handling",
        "Signature confirmation",
        "Express delivery",
        "Tracking and notifications",
        "Secure packaging",
      ],
    },
    {
      id: "dekorasi-handling",
      title: "Perlengkapan Dekorasi",
      description:
        "Secure and confidential delivery of important documents and paperwork.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Confidential handling",
        "Signature confirmation",
        "Express delivery",
        "Tracking and notifications",
        "Secure packaging",
      ],
    },
    {
      id: "kendaraan-handling",
      title: "Mobil & Motor",
      description:
        "Secure and confidential delivery of important documents and paperwork.",
      image: "/motor-mobil.png?height=400&width=600",
      features: [
        "Confidential handling",
        "Signature confirmation",
        "Express delivery",
        "Tracking and notifications",
        "Secure packaging",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "50,000",
      description: "For occasional shipping needs",
      features: [
        "Standard delivery (3-5 days)",
        "Up to 5kg packages",
        "Basic tracking",
        "Standard insurance",
      ],
    },
    {
      name: "Premium",
      price: "150,000",
      description: "For regular shipping needs",
      features: [
        "Express delivery (1-2 days)",
        "Up to 10kg packages",
        "Advanced tracking",
        "Full insurance coverage",
        "Priority customer support",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "500,000",
      description: "For business shipping needs",
      features: [
        "Same-day delivery options",
        "Unlimited weight",
        "Dedicated account manager",
        "Premium insurance",
        "24/7 customer support",
        "Bulk discounts",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Layanan Kami</h1>

      <div className="space-y-16">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-20">
            <div
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                {/* <p className="text-gray-700 mb-6">{service.description}</p> */}
                {/* <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul> */}
                <Button className="mt-6">
                  <Link href="/contact">Request Service</Link>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.highlighted ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  Rp {plan.price}
                  <span className="text-sm font-normal text-gray-500">
                    /month
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-primary" : ""}`}
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Service Coverage Area
        </h2>
        <ServiceMap />
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Terms & Conditions
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <h3>1. Service Agreement</h3>
              <p>
                By using Bajawa Jastip services, you agree to these terms and
                conditions. Our services are subject to availability and may
                vary by location.
              </p>

              <h3>2. Delivery Times</h3>
              <p>
                Delivery times are estimates and not guaranteed. Factors such as
                weather, traffic, and other circumstances beyond our control may
                affect delivery times.
              </p>

              <h3>3. Package Restrictions</h3>
              <p>
                Certain items are prohibited from shipping, including but not
                limited to: illegal substances, hazardous materials, and
                perishable goods without proper packaging.
              </p>

              <h3>4. Insurance and Liability</h3>
              <p>
                Basic insurance is included with all shipments. Additional
                insurance can be purchased. Our liability is limited to the
                declared value of the shipment.
              </p>

              <h3>5. Cancellation Policy</h3>
              <p>
                Cancellations must be made at least 24 hours before scheduled
                pickup. Cancellation fees may apply.
              </p>
            </div>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
}
