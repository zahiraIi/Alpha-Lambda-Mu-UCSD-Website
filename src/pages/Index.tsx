import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Membership from "@/components/Membership";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Membership />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
