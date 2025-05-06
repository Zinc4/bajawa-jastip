import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const runtime = "edge";
export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Delivery service"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Reliable Delivery Services Across Indonesia
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From regular packages to electronics and important documents, we
            deliver with care and efficiency. Trust Bajawa Jastip for all your
            shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Jastip Now!</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
