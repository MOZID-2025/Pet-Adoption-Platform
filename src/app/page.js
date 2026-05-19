import AdoptionProcess from "@/components/AdoptionProcess";
import FeaturedPets from "@/components/featuredPets";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPets />
      <WhyAdoptPets />
      <SuccessStories />
      <PetCareTips />
      <AdoptionProcess />
      <Newsletter />
    </div>
  );
}
