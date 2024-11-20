import { Banner } from "@/components/Banner";
import { GetTheMax } from "@/components/GetTheMax";
import { HowToUse } from "@/components/HowToUse";
import { MarqueeDemo } from "@/components/MarqueeIA";
import { UsePrompt } from "@/components/UsePrompt";
import { WhatsAI } from "@/components/WhatsAI";


export default function Home() {
  return <>
    <Banner />
    <WhatsAI />
    <HowToUse />
    <GetTheMax/>
    <UsePrompt/>
    <MarqueeDemo/>
  </>
}
