import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Bajawa Jastip services, shipping, and policies.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Pertanyaan Umum",
      faqs: [
        {
          question: "Apa itu Bajawa Jastip",
          answer:
            "Bajawa Jastip adalah jasa yang ditawarkan oleh kami dalam penitipan barang barang online shop, dokumen, dan barang lainnya, yang dikirim dari Pulau Jawa dengan tujuan ke Daratan Timor dan Flores.",
        },
        {
          question: "Dimana Bajawa Jastip beroperasi?",
          answer:
            "Kami beroperasi di Surabaya, dengan kantor pusat beralamat Semampir Selatan Gang 2a, Nomor 8 Kecamatan Sukolilo,Kel. Medokan Semampir. Kami melayani pengiriman dari Surabaya ke Bajawa, Timor dan Flores.",
        },
        // {
        //   question: "How can I track my package?",
        //   answer:
        //     "You can track your package by entering your tracking number on our website or mobile app. You can also receive tracking updates via SMS or email by signing up for notifications during the booking process.",
        // },
        // {
        //   question: "What are your business hours?",
        //   answer:
        //     "Our customer service team is available Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM. Our delivery operations run 24/7 to ensure timely deliveries.",
        // },
      ],
    },
    {
      title: "Pengiriman & Pengantaran",
      faqs: [
        // {
        //   question: "Berapa lama waktu pengirimannya?",
        //   answer:
        //     "Delivery times vary depending on the destination and service type. Standard delivery within major cities typically takes 1-3 business days, while delivery to remote areas may take 3-7 business days. Express delivery options are available for faster service.",
        // },
        // {
        //   question: "Berapa berat dan ukuran maksimum untuk paket?",
        //   answer:
        //     "For regular delivery, we accept packages up to 30kg and with dimensions not exceeding 100cm x 100cm x 100cm. For larger or heavier items, please contact our customer service for special arrangements.",
        // },
        // {
        //   question: "Do you offer international shipping?",
        //   answer:
        //     "Currently, we focus on domestic shipping within Indonesia. For international shipping needs, we recommend partnering with our international shipping partners. Please contact our customer service for more information.",
        // },
        {
          question: "Bagaimana biaya pengiriman dihitung?",
          answer: "Biaya pengiriman dihitung berdasarkan berat barang (kg)",
        },
      ],
    },
    {
      title: "Layanan & Harga",
      faqs: [
        {
          question: "Layanan apa saja yang ditawarkan Bajawa Jastip?",
          answer:
            "Kami menawarkan berbagai layanan pengiriman: Pengiriman paket olshop, Pengiriman barang elektronik, Pengiriman perabotan rumah tangga, Pengiriman dokumen, Pengiriman perlengkapan dekorasi dan Pengiriman motor & mobil ",
        },
        {
          question: "Berapa harga pengiriman barang?",
          answer:
            "Barang dengan berat kurang dari 1 kg, tetap dihitung 1 kg yaitu Rp15.000,00, Apabila berat barang lebih dari 1 kg maka akan dihitung sesuai beratnya",
        },
        // {
        //   question: "Are there any discounts for regular customers?",
        //   answer:
        //     "Yes, we offer loyalty programs and volume discounts for regular customers. Business customers can also benefit from special rates and customized service packages. Contact our sales team for more information.",
        // },
        // {
        //   question: "Can I schedule a pickup?",
        //   answer:
        //     "Yes, you can schedule a pickup through our website, mobile app, or by calling our customer service. Pickups can be scheduled same-day or in advance, depending on your location and service availability.",
        // },
      ],
    },
    // {
    //   title: "Policies & Support",
    //   faqs: [
    //     {
    //       question: "What is your cancellation policy?",
    //       answer:
    //         "Cancellations must be made at least 24 hours before the scheduled pickup time. Cancellation fees may apply for late cancellations. For more details, please refer to our Terms & Conditions.",
    //     },
    //     {
    //       question: "How do I file a claim for a damaged or lost package?",
    //       answer:
    //         "If your package is damaged or lost, please contact our customer service within 7 days of the expected delivery date. You will need to provide your tracking number and details of the issue. Our team will guide you through the claims process.",
    //     },
    //     {
    //       question: "What items are prohibited from shipping?",
    //       answer:
    //         "Prohibited items include but are not limited to: illegal substances, hazardous materials, flammable items, perishable goods without proper packaging, live animals, and valuable items such as cash or jewelry unless declared and properly insured. For a complete list, please refer to our Terms & Conditions.",
    //     },
    //     {
    //       question: "How can I contact customer support?",
    //       answer:
    //         "You can contact our customer support team through multiple channels: phone (+62 812 3456 7890), email (support@bajawajastip.com), live chat on our website, or by visiting one of our offices. Our team is available Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM.",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for answers..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
            Search
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {faqCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>
                Find answers to common questions about{" "}
                {category.title.toLowerCase()}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${index}-${faqIndex}`}
                  >
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pb-4">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer to your question, please don't
          hesitate to contact our customer support team. We're here to help!
        </p>
        <Button asChild>
          <a href="/contact">Hubungi Kami</a>
        </Button>
      </div>
    </div>
  );
}
