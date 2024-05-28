import Hero from "@/components/hero";
import homeImage from "../../public/images/home.jpg";
export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImage}
        imgAlt="Welding"
        title="Profession Lorem ipsum dolor sit,"
      />
    </div>
  );
}
