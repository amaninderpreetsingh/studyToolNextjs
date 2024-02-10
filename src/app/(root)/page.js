import { UserButton } from "@clerk/nextjs";
import CarouselSlider from "../../../components/slider/app";
export default function Home() {
  return (
    <>
      <div>
        <CarouselSlider></CarouselSlider>
      </div>
      <div className="head-text"></div>
    </>
  );
}
