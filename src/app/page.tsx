import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Two-column layout */}
      <div className="lg:flex">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="lg:ml-[35%] xl:ml-[30%] w-full lg:w-[65%] xl:w-[70%]">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-12">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
