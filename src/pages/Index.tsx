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


      {/* Footer */}
      <footer className="py-12 px-4 bg-gaming-darker border-t-2 border-primary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <img 
            src={logo} 
            alt="EsportMRA" 
            className="w-32 h-auto mx-auto opacity-80"
          />
          <p className="text-muted-foreground">
            Master the Game. Claim Your Fortune.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleRegister}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 border-2 border-primary"
            >
              Contact for Registration
            </Button>
            
            <div className="flex gap-6 items-center">
              <a 
                href="https://youtube.com/@esport_mratour?si=OZojNRS-Q_ta3i1S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              
              <a 
                href="https://www.instagram.com/esport_mratour?igsh=cW15OGllczc0ZHRm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground italic">
            Prize pool depends on player registration. Max written. Min decided before start date.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
