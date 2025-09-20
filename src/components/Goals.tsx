const Goals = () => {
  const yearlyGoals = [
    {
      category: "Academic Excellence",
      items: [
        "Track chapter GPA and provide academic resources",
        "Build professional connections with alumni network",
        "Support members' educational advancement"
      ]
    },
    {
      category: "Community Service", 
      items: [
        "One community service project per quarter minimum",
        "Meal and hygiene kit packing in fall quarter",
        "Health clinic support in winter quarter"
      ]
    },
    {
      category: "Spiritual Development",
      items: [
        "Continue halaqas emphasizing akhuwwa and futuwwah",
        "Provide practical Islamic knowledge for real-world application",
        "Establish connections with more Islamic scholars"
      ]
    }
  ];

  const campaigns = [
    {
      title: "Akhtober Campaign",
      goal: "$10,000",
      purpose: "Domestic violence victim housing support"
    },
    {
      title: "Chapter Sustainability",
      goal: "$1,000 surplus",
      purpose: "Debt-free operations and program expansion"
    }
  ];

  const futureVision = [
    {
      title: "Environmental Justice",
      description: "Campaign emulating the Prophetic example towards environment and animals"
    },
    {
      title: "Men's Mental Health",
      description: "Resources and guidance for addiction, mental health, and wellness"
    },
    {
      title: "Scholarly Sips Podcast",
      description: "Interviews with local scholars on contemporary Islamic issues"
    }
  ];

  return (
    <section id="goals" className="mws-section bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-16">Goals & Vision</h2>
        
        {/* Yearly Goals */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-12">2025-2026 Goals</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {yearlyGoals.map((goal, index) => (
              <div key={index} className="mws-frame">
                <h4 className="text-lg font-medium mb-4">{goal.category}</h4>
                <ul className="space-y-3">
                  {goal.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Campaigns */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-12">Active Campaigns</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="border-l-2 border-black pl-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-lg font-medium">{campaign.title}</h4>
                  <span className="text-lg font-medium">{campaign.goal}</span>
                </div>
                <p className="text-muted-foreground">{campaign.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h3 className="text-2xl font-medium mb-12">Future Vision</h3>
          <div className="space-y-8">
            {futureVision.map((vision, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-b-0">
                <h4 className="text-xl font-medium mb-3">{vision.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;