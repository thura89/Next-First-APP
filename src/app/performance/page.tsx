import Hero from "@/components/hero";
import performanceImage from "../../../public/images/performance.jpg";
export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImage}
        imgAlt="Performance"
        title="Performance Lorem ipsum dolor sit,"
      />
    </div>
  );
}
