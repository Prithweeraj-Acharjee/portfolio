import HomeHero from "@/components/home/HomeHero";
import HomeManifesto from "@/components/home/HomeManifesto";
import HomeRecentWork from "@/components/home/HomeRecentWork";
import HomeStrip from "@/components/home/HomeStrip";
import HomeCreative from "@/components/home/HomeCreative";
import HomeRecognition from "@/components/home/HomeRecognition";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeManifesto />
      <HomeRecentWork />
      <HomeStrip />
      <HomeCreative />
      <HomeRecognition />
    </>
  );
}
