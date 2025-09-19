import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Target } from "lucide-react";

const Membership = () => {
  const stats = [
    {
      year: "2023",
      members: 15,
      icon: Users
    },
    {
      year: "2024", 
      members: 28,
      icon: TrendingUp
    },
    {
      year: "2025",
      members: 42,
      icon: Heart
    },
    {
      year: "2026",
      members: 50,
      icon: Target,
      projected: true
    }
  ];

  return (
    <section id="brotherhood" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-space-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3">
            Growing Brotherhood
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over the past year, ALM UCSD has seen steady growth in our membership, and with it, 
            an even greater ability to make an impact on campus and within our broader community.
          </p>
        </div>

        {/* Membership Growth Chart */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4 mb-space-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.year}
                className={`text-center hover-lift ${stat.projected ? 'border-accent border-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-2">
                    <Icon className={`h-8 w-8 ${stat.projected ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {stat.members}
                    {stat.projected && <span className="text-accent">*</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">
                    {stat.year}
                    {stat.projected && (
                      <span className="block text-xs text-accent">(Projected)</span>
                    )}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Growth Message */}
        <div className="grid md:grid-cols-2 gap-space-8 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-4">
              Quality Over Quantity
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-space-4">
              With more brothers contributing their time, energy, and talents, we have been able to host larger events, 
              expand our service initiatives, and strengthen our presence at UCSD.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our priority moving forward is to emphasize quality over quantity in membership. By selecting brothers 
              who embody passion, character, and commitment, we can continue building a fraternity that is strong, 
              united, and capable of leaving a lasting legacy at UCSD and beyond.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-space-6">
            <h4 className="font-display text-xl font-semibold text-foreground mb-space-3">
              Community Partners
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">ICNA Relief</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">Lamps of Light</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">UCSD Muslim Student Association</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">Local Community Centers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;