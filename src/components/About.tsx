const About = () => {
  const values = [
    {
      title: "Faith",
      subtitle: "إيمان",
      items: ["Tawheed", "Tazkiyyah", "Taaleem"],
      description: "Strengthening our relationship with Allah through worship, purification, and learning."
    },
    {
      title: "Service",
      subtitle: "خدمة",
      items: ["To Yourself", "To Your Family", "To the Ummah"],
      description: "Serving our communities with dedication and building lasting positive impact."
    },
    {
      title: "Brotherhood",
      subtitle: "أخوة",
      items: ["With Brothers in ALM", "With Brothers in Islam", "With Brothers in Humanity"],
      description: "Creating genuine bonds that transcend differences and last a lifetime."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-space-8 text-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3">
            About ALM UCSD
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-space-4">
              Alpha Lambda Mu (ALM) at UC San Diego is proud to be part of the nation's first Muslim-interest fraternity. 
              Rooted in the principles of faith, service, and brotherhood, we hope to build Muslim men through the Prophetic example.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Our activities seek to reinforce the values Islam has set forth throughout history: a genuine brotherhood — 
              or <em className="font-medium text-primary">akhuwwa</em> in Arabic — and a support group of lifelong companions 
              who will stay with you through everything.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-space-6 mb-space-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-space-6 h-full shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <div className="mb-space-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-display text-lg text-primary mb-space-3" dir="rtl">
                    {value.subtitle}
                  </p>
                </div>
                
                <div className="mb-space-4">
                  {value.items.map((item) => (
                    <div 
                      key={item}
                      className="font-body text-sm text-muted-foreground py-1 border-b border-border/30 last:border-b-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-muted rounded-xl p-space-6 md:p-space-8 text-center">
          <blockquote className="font-body text-lg md:text-xl text-foreground leading-relaxed italic max-w-4xl mx-auto">
            "We hope to inspire the next generation of leaders and community members to hold onto their identity 
            as Muslims as a means to better their communities and bring meaningful change to the world. 
            May Allah (swt) grant us strength in our mission and make us a means of service to the ummah."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;