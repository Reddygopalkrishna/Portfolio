import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Projects</h2>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-300">Here are some of my recent works</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="project group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1" ref={libraryRef}>
            <div className="image-wrapper bg-[#FFEFDB] rounded-lg overflow-hidden relative border-2 border-transparent hover:border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="https://edusity-university.netlify.app/">
                <img
                  src="/images/Edusity.png"
                  alt="Library Management Platform"
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </a> 
            </div>
            <h2 className="mt-3 text-base md:text-lg lg:text-xl group-hover:text-white transition-colors duration-300">Edusity- University website</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-md">React.js</span>
              <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-md">CSS3</span>
              <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded-md">JavaScript</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-md">HTML5</span>
            </div>
          </div>

          <div className="project group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB] rounded-lg overflow-hidden relative border-2 border-transparent hover:border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="https://nodetalk-chat-app.onrender.com/">
                <img 
                  src="/images/NodeTalk.png" 
                  alt="Chat App"
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </a> 
            </div>
            <h2 className="mt-3 text-base md:text-lg lg:text-xl group-hover:text-white transition-colors duration-300">NodeTalk - A Full stack Realtime Chat App like Messenger & Whatsapp</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-md">React.js</span>
              <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-md">Tailwind CSS</span>
              <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded-md">DaisyUI</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-red-400 rounded-md">JavaScript</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-md">Node.js</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-pink-400 rounded-md">Socket.io</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-grey-400 rounded-md">Zustand</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-orange-400 rounded-md">Cloudinary</span>
            </div>
          </div>

          <div className="project group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB] rounded-lg overflow-hidden relative border-2 border-transparent hover:border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="https://luxe-mart-website.vercel.app/">
                <img 
                  src="/images/LuxeMart.png" 
                  alt="LuxeMart App"
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </a> 
            </div>
            <h2 className="mt-3 text-base md:text-lg lg:text-xl group-hover:text-white transition-colors duration-300">LuxeMart - E-Commerce Application!</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-md">React.js</span>
              <span className="px-2 py-1 text-xs bg-red-500/10 text-red-400 rounded-md">HTML</span>
              <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-md">Tailwind CSS</span>
              <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded-md">M UI</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-md">JavaScript</span>
            </div>
          </div>

          <div className="project group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB] rounded-lg overflow-hidden relative border-2 border-transparent hover:border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="https://loan-calculator-app-murex.vercel.app/">
                <img 
                  src="/images/LoanCalculator.png" 
                  alt="Loan Calculator App"
                  className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </a> 
            </div>
            <h2 className="mt-3 text-base md:text-lg lg:text-xl group-hover:text-white transition-colors duration-300">Loan Calculator Dashboard -Live Exchange rates using API ,Currency Converting and more features</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-md">React</span>
              <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-md">Material-UI</span>
              <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded-md">React Router</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-md">Live Exchange API</span>
              <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-md">CSS3</span>
            </div>
          </div>

          
        
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
