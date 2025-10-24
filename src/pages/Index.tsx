import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-athlete.jpg";
import avatarImage from "@/assets/digital-avatar.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Pixology.ai</div>
          <Button variant="hero" size="sm">
            Get Early Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-glow" />
                <span className="text-sm text-muted-foreground">Powered by Generative AI</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Future of{" "}
                <span className="gradient-text">Athlete Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create lifelike digital avatars that move, perform, and express just like real athletes. 
                Scale NIL globally without the barriers of time, travel, or cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-glow" />
              <img 
                src={heroImage} 
                alt="Digital athlete avatar with AI visualization" 
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-card/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Future of <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Imagine athletes creating authentic content without traditional production constraints. 
              Pixology empowers athletes to maintain full control over their digital identity while opening 
              new creative possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Authentic. Scalable. <span className="gradient-text">Protected.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI captures an athlete's true essence—signature moves, expressions, and personality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="gradient-border p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Computer Vision + ML</h3>
              <p className="text-muted-foreground">
                We learn each athlete's signature motion—their stride, throw, or celebration—creating 
                digital twins that move with authentic precision.
              </p>
            </div>

            <div className="gradient-border p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blockchain Verified</h3>
              <p className="text-muted-foreground">
                Every avatar is securely tracked on blockchain. Athletes automatically receive credit 
                and maintain full IP protection.
              </p>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
            <img 
              src={avatarImage} 
              alt="Digital avatar transformation visualization" 
              className="relative rounded-2xl shadow-2xl mx-auto max-w-3xl w-full border border-border"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">For Brands</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Produce authentic athlete campaigns in days, not months
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Reduce production costs by 50% compared to traditional shoots
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Scale content creation without scheduling conflicts
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">For Athletes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Open new digital revenue streams without time commitment
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Maintain full control over your Name, Image, and Likeness
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    Automatic credit and IP protection via blockchain verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform <span className="gradient-text">Sports Marketing?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in disrupting the multi-billion-dollar sports marketing industry.
            </p>
            <Button variant="hero" size="lg" className="group">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold gradient-text">Pixology.ai</div>
            <p className="text-sm text-muted-foreground">
              © 2025 Pixology. Building the future of athlete marketing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
