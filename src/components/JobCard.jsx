import { MapPin, Clock, Bookmark } from "lucide-react";
import turntinIcon from "../assets/turntin.png";

const JobCard = ({ promoted = false }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-3 pl-7 pr-0 flex flex-col gap-2 w-full max-w-sm">
      {/* Promoted badge */}
      {promoted && (
        <span className="text-[12px] font-bold text-foreground">Promoted</span>
      )}

      {/* Job info row */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
          <img src={turntinIcon} alt="Microsoft Teams" className="h-8 w-8" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-foreground leading-tight">UI/UX Designer</h4>
          <p className="text-xs text-muted-foreground mt-0.5">Microsoft Teams</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span>Seattle,USA(Remote)</span>
      </div>

      {/* Time + Applicants */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5 shrink-0" />
        <span>1day ago</span>
        <span>|</span>
        <span className="text-primary font-regular">22 applicants</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5 mt-auto pt-1">
        <button className="h-8 px-5 rounded-lg bg-primary text-primary-foreground text-xs font-regular hover:opacity-90 transition-opacity">
          Apply Now
        </button>
        <button className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;



