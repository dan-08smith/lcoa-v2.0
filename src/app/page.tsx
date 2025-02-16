import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainSection from "./components/MainSection";
import Carousel from "./components/Carousel";
import LinkCard from "./components/LinkCard";
import PageCard from "./components/PageCard";
import { Send, Link } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 z-40 flex flex-col justify-center items-center 
          text-center text-white bg-black/30" style={{ pointerEvents: "none" }}>
          <h1 className="text-5xl md:text-7xl font-medium">Largiemore</h1>
          <h4 className="text-lg md:text-2xl font-semibold mt-3">Chalet Owners Association</h4>
        </div>
        <Carousel images={[
          {src: "/img/img-1.jpg", alt: "Slide 1"},
          {src: "/img/img-2.jpg", alt: "Slide 2"},
          {src: "/img/img-3.jpg", alt: "Slide 3"},
          ]}
        />
      </section>

      <MainSection id="about" title="About Us" subtitle="Find Out More">
        <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
        </p>
      </MainSection>

      <MainSection id="things-to-do" title="Things To Do Nearby" subtitle="Explore">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          <PageCard
            title="Activity Name"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            image="https://via.placeholder.com/300x200"
            href="/things-to-do/activity-1"
          />
          <PageCard
            title="Activity Name"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            image="https://via.placeholder.com/300x200"
            href="/things-to-do/activity-2"
          />
          <PageCard
            title="Activity Name"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            image="https://via.placeholder.com/300x200"
            href="/things-to-do/activity-3"
          />
        </div>
      </MainSection>

      <MainSection id="contact" title="Contact Us" subtitle="Feel Free To">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center space-y-4">
            <LinkCard
              href="mailto:largiemorecoa@gmail.com"
              icon={Send}
              label="largiemorecoa@gmail.com"
            />
            <LinkCard
              href="https://largiemore.com"
              icon={Link}
              label="Largiemore Holiday Estate"
              target="_blank"
            />
          </div>
          <div className="w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.4581048484542!2d-5.302927183429815!3d56.02591675811799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48899cac0e6ca065%3A0x73de29688ff08ad7!2sLargiemore%20Estate!5e1!3m2!1sen!2suk!4v1732137798330!5m2!1sen!2suk"
              className="w-full h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </MainSection>

      <Footer />
    </>
  );
}