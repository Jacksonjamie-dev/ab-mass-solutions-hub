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
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AB MASS COMPANY LIMITED
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
            Welcome to AB MASS Company - a trusted partner in fostering economic growth and strengthening business ties between businesses and organizations.
          </p>
          
          <div className="flex justify-start">
            <Button variant="professional" size="lg">
              Become a partner
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