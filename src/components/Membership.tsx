import icnaReliefLogo from "@/assets/icna-relief-logo.png";
import lampsOfLightLogo from "@/assets/lamps-of-light-logo.png";
import ucsdCSILogo from "@/assets/ucsd-csi-logo.png";

const Membership = () => {
  return (
    <section id="membership" className="mws-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-8">Membership Growth</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Over the past year, ALM UCSD has seen steady growth in our membership, and with it, 
                an even greater ability to make an impact on campus and within our broader community.
              </p>
              <p>
                With more brothers contributing their time, energy, and talents, we have been able to host 
                larger events, expand our service initiatives, and strengthen our presence at UCSD.
              </p>
              <p>
                Our focus moving forward is to emphasize quality over quantity in membership. By selecting 
                brothers who embody passion, character, and commitment, we can continue building a fraternity 
                that is strong, united, and capable of leaving a lasting legacy.
              </p>
            </div>
          </div>
          
          <div className="mws-frame">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Growth Trajectory</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>2024</span>
                    <span className="font-medium">13 Members</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>2025</span>
                    <span className="font-medium">31 Members</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2026</span>
                    <span className="font-medium text-muted-foreground">50 Members (Projected)</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  We have expanded our members and thus our reach without sacrificing the quality of members we select and mentorship we provide to our growing brotherhood.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Community Partners</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img src={icnaReliefLogo} alt="ICNA Relief" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={lampsOfLightLogo} alt="Lamps of Light" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={ucsdCSILogo} alt="UCSD Center for Student Involvement" className="h-8 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;