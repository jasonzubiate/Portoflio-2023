import { Hero, Projects, Self, Skills, About, Connect, Footer } from "@/components";

export default async function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <Self section={1}/>
      <Skills section={2}/>
      <Projects section={3}/>
      <About section={4}/>
      <Connect section={5}/>
      <Footer/>
    </div>
  );
}
