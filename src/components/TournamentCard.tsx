import { Users } from "lucide-react";

interface TournamentCardProps {
  mode: string;
  slots: number;
  entryFee: number;
  prizePool: string;
  totalSlots: number;
  icon: React.ReactNode;
}

const TournamentCard = ({
  mode,
  slots,
  entryFee,
  prizePool,
  totalSlots,
  icon,
}: TournamentCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-card border-2 border-primary rounded-lg p-6 hover:border-secondary transition-all duration-300 shadow-[0_0_30px_rgba(0,217,255,0.2)] hover:shadow-[0_0_50px_rgba(0,217,255,0.4)]">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-primary/10 rounded-full border-2 border-primary">
            {icon}
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-center mb-6 text-foreground uppercase tracking-wider">
          {mode}
        </h3>
        
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">{slots}</span>
          </div>
          
          <div className="py-3 border-y border-primary/30">
            <p className="text-2xl font-bold text-foreground">{entryFee} RS/SLOT</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg">
              <span className="text-muted-foreground">Prize Pool:</span>{" "}
              <span className="text-secondary font-bold text-xl">{prizePool}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Total Slots: <span className="text-foreground font-semibold">{totalSlots}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
