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
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            About Us
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-6 text-corporate-gray">
            A Vision-Driven Company with a Passion for Excellence
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded with the goal of transforming how services are delivered in Ghana and beyond, 
            AB MASS COMPANY LIMITED stands at the intersection of technology, infrastructure, and business support.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a team of experts and professionals passionate about improving lives and systems through smart solutions. 
            Whether it's deploying tech infrastructure, supporting fleet and operations, or supplying essential medical and 
            environmental tools — we do it all with integrity and precision.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;