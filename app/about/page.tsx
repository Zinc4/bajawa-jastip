import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bajawa Jastip, our mission, vision, team, and core values. Your trusted delivery service partner in Indonesia.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Adi Wijaya",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in logistics and supply chain management, Adi founded Bajawa Jastip to revolutionize delivery services in Indonesia.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Siti Rahayu",
      role: "Operations Director",
      bio: "Siti ensures that all deliveries are handled with care and arrive on time. Her attention to detail has helped establish our reputation for reliability.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Budi Santoso",
      role: "Customer Relations Manager",
      bio: "Budi leads our customer service team, ensuring that every client receives personalized attention and prompt resolution of any concerns.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maya Putri",
      role: "Technology Officer",
      bio: "Maya oversees our digital infrastructure, developing innovative solutions to streamline operations and enhance the customer experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const timeline = [
    { year: "2015", event: "Bajawa Jastip founded in Jakarta" },
    { year: "2017", event: "Expanded services to Surabaya and Bandung" },
    { year: "2019", event: "Launched electronic device shipping service" },
    { year: "2020", event: "Introduced document handling service" },
    { year: "2021", event: "Opened regional offices in Bali and Makassar" },
    {
      year: "2023",
      event: "Reached milestone of 1 million successful deliveries",
    },
  ];

  const coreValues = [
    {
      title: "Reliability",
      description:
        "We deliver on our promises, ensuring that every package reaches its destination safely and on time.",
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty and transparency in all our dealings with customers, partners, and employees.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, continuously improving our processes and standards.",
    },
    {
      title: "Customer-Centric",
      description:
        "Our customers are at the heart of everything we do. We listen to their needs and tailor our services accordingly.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Tentang Bajawa Jastip
      </h1>

      <Tabs defaultValue="story" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="values">Core Values</TabsTrigger>
        </TabsList>

        <TabsContent value="story" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Apa itu Bajawa Jastip
              </h2>
              <p className="text-gray-700 mb-6">
                Bajawa Jastip adalah jasa yang ditawarkan oleh kami dalam
                penitipan barang barang online shop, dokumen, dan barang
                lainnya, yang dikirim dari Pulau Jawa dengan tujuan ke Daratan
                Timor dan Flores.
              </p>
              {/* <p className="text-gray-700 mb-6">
                Our name "Bajawa" comes from a beautiful region in Flores known
                for its community spirit and natural beauty - values that we
                embody in our service approach.
              </p>
              <p className="text-gray-700">
                Today, we serve thousands of customers across Indonesia, from
                individuals sending gifts to loved ones to businesses requiring
                regular delivery services. Our commitment to quality and
                reliability remains unchanged.
              </p> */}
            </div>
            {/* <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Company Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary text-white font-bold py-1 px-3 rounded-full mr-4">
                      {item.year}
                    </div>
                    <div className="pt-1">{item.event}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </TabsContent>

        <TabsContent value="mission" className="mt-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                  Misi
                </h2>
                {/* <p className="text-gray-700">
                  To connect people and businesses across Indonesia through
                  reliable, efficient, and personalized delivery services that
                  exceed customer expectations.
                </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                  Visi
                </h2>
                {/* <p className="text-gray-700">
                  To be Indonesia's most trusted delivery service, known for our
                  reliability, innovation, and commitment to customer
                  satisfaction.
                </p> */}
              </CardContent>
            </Card>
          </div>

          {/* <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Licenses & Certifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold">ISO 9001:2015</div>
                <div className="text-sm text-gray-600">Quality Management</div>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold">SIUP</div>
                <div className="text-sm text-gray-600">Business License</div>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold">NPWP</div>
                <div className="text-sm text-gray-600">Tax Registration</div>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold">ASDP</div>
                <div className="text-sm text-gray-600">
                  Logistics Certification
                </div>
              </div>
            </div>
          </div> */}
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Meet Our Team
          </h2>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto rounded-full overflow-hidden w-48 h-48">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div> */}
        </TabsContent>

        <TabsContent value="values" className="mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Core Values
          </h2>
          {/* <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
