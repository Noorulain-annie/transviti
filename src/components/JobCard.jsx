import { MapPin, Clock, Bookmark } from "lucide-react";
import turntinIcon from "../assets/turntin.png";

const JobCard = ({ promoted = false }) => {
  return (
    <div className="bg-card rounded-xl border border-border py-3.5 pl-3.5 pr-0 flex flex-col gap-1 w-[180px] shrink-0">
      {/* Promoted badge */}
      {promoted && (
        <span className="text-[10px] font-bold text-foreground tracking-wide">
          Promoted
        </span>
      )}

      {/* Job info row */}
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <img src={turntinIcon} alt="Company logo" className="h-6 w-6 object-contain" />
        </div>
        <div className="min-w-0">
          <h4 className="text-[13px] font-refular text-foreground leading-tight truncate">
            UI/UX Designer
          </h4>
          <p className="text-[11px] text-foreground mt-0.5 truncate">Teams</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <MapPin className="h-3 w-3 shrink-0" />
        <span className="truncate">Seattle, USA (Remote)</span>
      </div>

      {/* Time + Applicants */}
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Clock className="h-3 w-3 shrink-0" />
        <span className="whitespace-nowrap">1 day ago</span>
        <span>|</span>
        <span className="text-primary font-regular whitespace-nowrap">22 applicants</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-7 mt-0.5">
        <button className="h-8 w-24 rounded-lg bg-primary text-primary-foreground text-[11px] font-regular hover:opacity-90 transition-opacity">
          Apply Now
        </button>
        <button className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
