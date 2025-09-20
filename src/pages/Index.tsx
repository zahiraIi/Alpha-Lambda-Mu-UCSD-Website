import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageCollage from "@/components/ImageCollage";
import About from "@/components/About";
import Membership from "@/components/Membership";
import Goals from "@/components/Goals";
import Support from "@/components/Support";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageCollage />
      <About />
      <Membership />
      <Goals />
      <Support />
      <Contact />
    </div>
  );
};

export default Index;
