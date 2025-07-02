import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-corporate.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-accent">AB MASS COMPANY LIMITED</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold">
            Empowering Progress Through Innovation & Service
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We are committed to delivering cutting-edge solutions and services across key sectors including Information Technology, Construction, Environmental Management, Medical Supply, and Business Consultancy.
          </p>
          <p className="text-base md:text-lg mb-10 opacity-80 max-w-2xl mx-auto">
            Join the many businesses and institutions that trust AB MASS to deliver results that move them forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Explore Our Services
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;