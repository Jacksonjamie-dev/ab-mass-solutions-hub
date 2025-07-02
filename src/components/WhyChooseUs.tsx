import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Shield, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Multi-industry Expertise",
      description: "Proven experience across technology, construction, healthcare, and environmental sectors"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with deep industry knowledge and commitment to excellence"
    },
    {
      icon: Target,
      title: "Quality-Driven Approach",
      description: "Rigorous quality standards ensuring exceptional results in every project"
    },
    {
      icon: Zap,
      title: "Modern & Scalable Solutions",
      description: "Future-ready solutions that grow with your business needs"
    },
    {
      icon: Shield,
      title: "Transparent & Ethical",
      description: "Open communication and ethical service delivery you can trust"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what sets AB MASS COMPANY LIMITED apart as your trusted partner for business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.slice(0, 3).map((reason, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-smooth text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-primary">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <Card key={index + 3} className="hover:shadow-card-hover transition-smooth text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-primary">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-lg mb-6 opacity-90">
              We believe in long-term partnerships that create shared value. Whether you're an Agent, Merchant, or Business Partner, we welcome your collaboration.
            </p>
            <p className="mb-6">
              Get in touch to learn more about our partnership and registration programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;