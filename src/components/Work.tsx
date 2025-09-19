const Work = () => {
  const initiatives = [
    {
      title: "Academic Excellence",
      description: "Maintaining high academic standards and supporting members' educational goals.",
      year: "Ongoing"
    },
    {
      title: "Community Outreach",
      description: "Organizing charity drives, volunteering at local organizations, and community service projects.",
      year: "2023-2024"
    },
    {
      title: "Interfaith Dialogue",
      description: "Building bridges with other communities through meaningful conversations and events.",
      year: "2023"
    },
    {
      title: "Professional Development",
      description: "Workshops, networking events, and mentorship programs for career advancement.",
      year: "2022-2024"
    }
  ];

  return (
    <section id="work" className="mws-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-16">Our Work</h2>
        
        <div className="grid gap-12">
          {initiatives.map((initiative, index) => (
            <div key={index} className="border-b border-border pb-12 last:border-b-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-medium">{initiative.title}</h3>
                  <p className="text-muted-foreground mt-2">{initiative.year}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg leading-relaxed">{initiative.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;