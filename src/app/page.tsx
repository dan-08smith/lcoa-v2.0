import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainSection from "./components/MainSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <section id="hero" className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h6 className="text-lg">Hello, we're the</h6>
          <h1 className="text-4xl font-bold">Largiemore</h1>
          <h4 className="text-xl mt-2">Chalet Owners Association</h4>
        </div>
        {/* Slideshow Placeholder */}
        <div className="flex space-x-3 mt-6">
          <img src="/img/img-1.jpg" alt="Slide 1" className="h-32 w-auto rounded" />
          <img src="/img/img-2.jpg" alt="Slide 2" className="h-32 w-auto rounded" />
          <img src="/img/img-3.jpg" alt="Slide " className="h-32 w-auto rounded" />
        </div>
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

      <MainSection id="files" title="Files" subtitle="Explore Our">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <img src="/icons/file-pdf.svg" alt="PDF File Icon" className="h-6 w-6" />
            <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline">Membership Form</a>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/icons/file-pdf.svg" alt="PDF File Icon" className="h-6 w-6" />
            <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline">New Member Form</a>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/icons/file-pdf.svg" alt="PDF File Icon" className="h-6 w-6" />
            <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline">Association Constitution</a>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/icons/file-pdf.svg" alt="PDF File Icon" className="h-6 w-6" />
            <a href="/files/blank.pdf" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </MainSection>

      <MainSection id="contact" title="Contact Us" subtitle="Feel Free To">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>
            <img src="/icons/at.svg" alt="Email Icon" className="inline-block h-6 w-6 mr-2" />
            <a href="mailto:largiemorecoa@gmail.com" className="text-blue-600 hover:underline">
              largiemorecoa@gmail.com
            </a>
          </p>
          <p>
            <img src="/icons/link.svg" alt="URL Icon" className="inline-block h-6 w-6 mr-2" />
            <a href="https://largiemore.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline">
              Largiemore Holiday Estate
            </a>
          </p>
        </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.4581048484542!2d-5.302927183429815!3d56.02591675811799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48899cac0e6ca065%3A0x73de29688ff08ad7!2sLargiemore%20Estate!5e1!3m2!1sen!2suk!4v1732137798330!5m2!1sen!2suk"
            className="w-full h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </MainSection>

      <Footer />
    </>
  );
}