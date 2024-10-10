export const metadata = {
  title: "DevSh - Home",
  description: "Page description",
};

import BusinessCategories from "@/components/business-categories";
import Cta from "@/components/cta";
import FeaturesPlanet from "@/components/features-planet";
import Hero from "@/components/hero-home";
import LargeTestimonial from "@/components/large-testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
