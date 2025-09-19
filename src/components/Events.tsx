import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users2, GraduationCap, Heart, HandHelping } from "lucide-react";

const Events = () => {
  const initiatives = [
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      description: "Chapter GPA tracking, study groups, and professional networking with our alumni.",
      goals: ["3.5+ Chapter GPA", "Alumni Mentorship Program", "Study Resources"]
    },
    {
      title: "Community Service",
      icon: HandHelping,
      description: "Partnership initiatives with ICNA Relief and local community organizations.",
      goals: ["Monthly Service Projects", "Community Partnerships", "Volunteer Coordination"]
    },
    {
      title: "Brotherhood Development",
      icon: Heart,
      description: "Regular brotherhood events, spiritual growth, and leadership development.",
      goals: ["Weekly Brotherhood Meetings", "Leadership Training", "Spiritual Retreats"]
    }
  ];

  return (
    <section id="events" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-space-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3">
            Our Initiatives
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building active membership through academic excellence, community service, and brotherhood development.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-3 gap-space-6 mb-space-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={initiative.title}
                className="hover-lift bg-card border border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">
                      {initiative.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground leading-relaxed mb-space-3">
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    {initiative.goals.map((goal) => (
                      <div key={goal} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-body text-sm text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-space-6 md:p-space-8">
          <div className="grid md:grid-cols-2 gap-space-6 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-3">
                Join Our Next Event
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-space-4">
                Stay connected with ALM UCSD through our regular events, service projects, and brotherhood activities. 
                Follow us on Instagram for the latest updates and event announcements.
              </p>
              
              <div className="space-y-3 mb-space-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">Weekly Brotherhood Meetings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users2 className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">Monthly Community Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">UC San Diego Campus</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <Button 
                size="lg" 
                className="font-body px-space-4 py-space-2 hover-lift"
                asChild
              >
                <a href="https://www.instagram.com/alm.at.ucsd/" target="_blank" rel="noopener noreferrer">
                  Follow for Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;