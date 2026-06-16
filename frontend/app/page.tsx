import Hero from "@/src/components/Hero";
import Philosophy from "@/src/components/Philosophy";
import SelectedWork from "@/src/components/SelectedWork";
import Experience from "@/src/components/Experience";
import ChatSection from "@/src/components/ChatSection";
import Contact from "@/src/components/Contact";
import Education from "@/src/components/Education";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
     <Hero />
<Philosophy />
<SelectedWork />
<Experience />
<Education />

<Contact />
<ChatSection />
    </main>
  );
}