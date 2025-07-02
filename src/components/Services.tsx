import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Building, Leaf, Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Information Technology",
      description: "We deliver digital solutions including IT support, systems integration, network infrastructure, and IT consultancy for businesses.",
      features: ["IT Support & Maintenance", "Systems Integration", "Network Infrastructure", "IT Consultancy"]
    },
    {
      icon: Building,
      title: "Civil Construction", 
      description: "From structural projects to building support, we provide reliable and efficient construction services tailored to client needs.",
      features: ["Structural Projects", "Building Support", "Project Management", "Quality Assurance"]
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description: "We help organizations develop eco-friendly and compliant environmental solutions to meet global sustainability goals.",
      features: ["Environmental Compliance", "Sustainability Solutions", "Waste Management", "Green Technologies"]
    },
    {
      icon: Heart,
      title: "Medical Supply",
      description: "We supply high-quality medical equipment and consumables to health facilities and organizations.",
      features: ["Medical Equipment", "Healthcare Supplies", "Quality Assurance", "Timely Delivery"]
    },
    {
      icon: Users,
      title: "General & Business Management",
      description: "We offer management consulting, operations support, and strategic planning services for startups and growing businesses.",
      features: ["Management Consulting", "Operations Support", "Strategic Planning", "Business Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries, delivered by our expert teams with precision and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-professional transition-smooth h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-glow transition-smooth">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-primary">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;