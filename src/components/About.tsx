import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Cutting-edge solutions that drive progress and efficiency"
    },
    {
      title: "Reliability", 
      description: "Consistent delivery and dependable service excellence"
    },
    {
      title: "Professionalism",
      description: "Expert teams committed to the highest standards"
    },
    {
      title: "Customer-Centricity",
      description: "Tailored solutions focused on your unique needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - About Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">About AB MASS</h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">CORE VALUES</h4>
              <div className="space-y-2">
                {values.map((value, index) => (
                  <div key={index} className="text-muted-foreground">
                    {value.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              We Build the Future Through Innovation and Strategic Services
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Established in 2020 as a partnership between local expertise and international standards, 
                AB MASS COMPANY LIMITED has committed capital of US $500 million, managing over 
                US $200 million in assets. Among the first service providers in Ghana, 
                adhering to top governance standards.
              </p>
              <div className="pt-4">
                <a href="#about" className="text-primary font-medium hover:underline">
                  Discover more about us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;