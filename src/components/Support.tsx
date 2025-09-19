const Support = () => {
  return (
    <section id="support" className="mws-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium mb-8">Support Our Mission</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <blockquote className="italic border-l-2 border-black pl-6 text-muted-foreground">
                "The example of those who spend their wealth in the way of Allah is like a seed which grows seven ears; 
                in every ear is a hundred grains. And Allah multiplies His reward for whom He wills."
                <footer className="mt-2 text-sm">— Quran 2:261</footer>
              </blockquote>
              
              <p>
                This year, we set an ambitious yet attainable goal of raising $2,500 to support our 
                chapter's growth and sustain our programs.
              </p>
              
              <p>
                With every dollar contributed, we are able to strengthen our events, expand our community 
                service efforts, and invest in the development of our brothers.
              </p>
            </div>
          </div>
          
          <div className="mws-frame">
            <h3 className="text-xl font-medium mb-6">How to Contribute</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Fundraising Goal</h4>
                <p className="text-2xl font-medium">$2,500</p>
                <p className="text-sm text-muted-foreground">To achieve debt-free operations with $1,000 surplus</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Payment Methods</h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Zelle</p>
                    <p className="text-muted-foreground">(669) 946-0059</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Venmo</p>
                    <p className="text-muted-foreground">@aakhan6</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Check</p>
                    <p className="text-muted-foreground">
                      Written to Aayan Khan with "Alpha Lambda Mu" in subject line<br/>
                      Mail to: 5230 Fiore Terrace #K307, San Diego, CA 92122
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  For specific program donations, email aayank0660@gmail.com after donating. 
                  Your donation is an amanah and will be preserved for community betterment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;