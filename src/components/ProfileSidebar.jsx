import { ChevronDown } from "lucide-react";
import coverPhoto from "@/assets/cover-photo.png";
import avatarImg from "@/assets/profile.png";

const stats = [
  { label: "Profile Visitors", value: "1.2k" },
  { label: "Resume Viewers", value: "890" },
  { label: "My Jobs", value: "45" },
];

const ProfileSidebar = () => {
  return (
    <aside className="w-[280px] shrink-0 space-y-4">
      {/* Profile Card */}
      <div className="bg-card rounded-xl overflow-hidden">
        {/* Cover */}
        <div className="h-24 relative">
          <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
          {/* Avatar */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <img
              src={avatarImg}
              alt="Albert Flores"
              className="h-20 w-20 rounded-full border-4 border-card object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="pt-12 pb-5 px-4 text-center">
          <h2 className="text-base font-bold text-foreground">Albert Flores</h2>
          <p className="text-xs text-foreground mt-1 leading-relaxed">
            Senior Product Designer | UI/UX
            <br />
            Designer | Graphic Designer | Web...
          </p>
          <p className="text-xs text-muted-foreground mt-1">Clinton, Maryland</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-card rounded-xl py-3 px-4 space-y-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between pb-1 border-b border-gray-200 last:border-0 last:pb-0">
            <span className="text-sm text-foreground">{stat.label}</span>
            <span className="text-sm font-regular text-primary">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="bg-card rounded-xl py-2 px-4">
        <div className="flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-sm font-bold text-foreground">My calendar</h3>
            <p className="text-xs text-muted-foreground">Upcoming Interviews</p>
          </div>
          <ChevronDown className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;



