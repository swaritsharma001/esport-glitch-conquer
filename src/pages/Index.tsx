import { User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import TournamentCard from "@/components/TournamentCard";
import logo from "@/assets/logo.jpg";
import banner from "@/assets/banner.jpg";

const Index = () => {
  const whatsappNumber = "916263563464";
  const handleRegister = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center animate-pulse">
            <img 
              src={logo} 
              alt="EsportMRA Logo" 
              className="w-48 md:w-64 h-auto drop-shadow-[0_0_30px_rgba(0,217,255,0.6)]"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-wider drop-shadow-[0_0_20px_rgba(0,217,255,0.5)]">
            Free Fire Tournament
          </h1>

          {/* Motto */}
          <p className="text-xl md:text-3xl text-foreground font-semibold tracking-wide">
            Glitch. Loot. Conquer. Repeat.
          </p>

          {/* Countdown */}
          <div className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Tournament Starts In
            </h2>
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleRegister}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-lg shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:shadow-[0_0_50px_rgba(0,217,255,0.6)] transition-all duration-300 border-2 border-primary uppercase tracking-wider"
          >
            Register Now
          </Button>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-primary" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-primary" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-primary" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-primary" />
      </section>

      {/* Tournament Details */}
      <section className="py-20 px-4 bg-gaming-darker relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,217,255,0.1) 2px, rgba(0,217,255,0.1) 4px)',
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground uppercase tracking-wider">
            Choose Your Battle
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Registration Starts: <span className="text-foreground font-bold">15 October</span> | Venue: <span className="text-foreground font-bold">Online</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TournamentCard
              mode="SOLO"
              slots={1}
              entryFee={99}
              prizePool="2K"
              totalSlots={60}
              icon={<User className="w-12 h-12 text-primary" />}
            />
            <TournamentCard
              mode="DUO"
              slots={2}
              entryFee={189}
              prizePool="3K"
              totalSlots={30}
              icon={<Users className="w-12 h-12 text-primary" />}
            />
            <TournamentCard
              mode="SQUAD"
              slots={4}
              entryFee={400}
              prizePool="4K"
              totalSlots={30}
              icon={<Users className="w-12 h-12 text-primary" />}
            />
          </div>

          <div className="text-center">
            <Button
              onClick={handleRegister}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl px-12 py-8 rounded-lg shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:shadow-[0_0_50px_rgba(255,102,0,0.6)] transition-all duration-300 border-2 border-secondary uppercase tracking-wider"
            >
              Join Tournament
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground uppercase tracking-wider">
            Watch Highlights
          </h2>
          <div className="relative rounded-lg overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(0,217,255,0.3)]">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/R1LioqIvZ44"
                title="Free Fire Tournament"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gaming-darker border-t-2 border-primary">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <img 
            src={logo} 
            alt="EsportMRA" 
            className="w-32 h-auto mx-auto opacity-80"
          />
          <p className="text-muted-foreground">
            Master the Game. Claim Your Fortune.
          </p>
          <p className="text-sm text-muted-foreground">
            For payment & registration contact:{" "}
            <a 
              href={`tel:${whatsappNumber}`}
              className="text-primary hover:text-primary/80 font-bold"
            >
              +91 62635 63464
            </a>
          </p>
          <p className="text-xs text-muted-foreground italic">
            Prize pool depends on player registration. Max written. Min decided before start date.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
