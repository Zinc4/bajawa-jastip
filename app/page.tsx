import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import FeaturedServices from "@/components/home/featured-services";
import TrustIndicators from "@/components/home/trust-indicators";
import LatestBlogPosts from "@/components/home/latest-blog-posts";
import NewsletterSignup from "@/components/home/newsletter-signup";
import SocialProof from "@/components/home/social-proof";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Bajawa Jastip provides reliable delivery services across Indonesia. Regular delivery, electronics shipping, and document handling.",
};

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <FeaturedServices />
      <TrustIndicators />
      <LatestBlogPosts />
      <NewsletterSignup />
      {/* <SocialProof /> */}
    </div>
  );
}
