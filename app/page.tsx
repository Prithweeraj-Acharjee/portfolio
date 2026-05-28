import HomeHero from "@/components/home/HomeHero";
import HomeRecentWork from "@/components/home/HomeRecentWork";
import HomeWritingTeaser from "@/components/home/HomeWritingTeaser";
import HomeSubscribe from "@/components/home/HomeSubscribe";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeRecentWork />
      <HomeWritingTeaser />
      <HomeSubscribe />
    </>
  );
}
