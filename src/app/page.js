import FeaturedPets from "@/components/featuredPets";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPets />
    </div>
  );
}
