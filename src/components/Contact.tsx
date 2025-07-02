import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@abmasscompany.com",
      href: "mailto:info@abmasscompany.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+233 XXX XXX XXX",
      href: "tel:+233XXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tema, Greater Accra Region, Ghana",
      href: "#"
    }
  ];

  const workingHours = [
    { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions or want to discuss a project? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">{info.title}</h3>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="hover:shadow-card-hover transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-primary mb-4">Working Hours</h3>
                    <div className="space-y-2">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how AB MASS COMPANY LIMITED can help transform your business with our innovative solutions.
                </p>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    Request a Quote
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="w-full text-white hover:bg-white/20"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Join our network of satisfied clients and partners who trust AB MASS for exceptional service delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="professional" size="sm">
                  Partnership Program
                </Button>
                <Button variant="outline" size="sm">
                  Client Testimonials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;