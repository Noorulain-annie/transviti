import { Search } from "lucide-react";
import logo from "@/assets/logo.png";
import avatarImg from "@/assets/profile.png";

const navLinks = [
  { label: "Find Jobs", active: true },
  { label: "Top Companies", active: false },
  { label: "Job Tracker", active: false },
  { label: "My Calendar", active: false },
  { label: "Documents", active: false },
  { label: "Messages", active: false },
  { label: "Notifications", active: false },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="flex justify-center w-full">
        <div className="flex items-center gap-40 h-16 w-full px-12" style={{ maxWidth: '1400px' }}>
          {/* Left + Nav */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className={`text-sm font-regular whitespace-nowrap transition-colors ${link.active
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right + Resume Builder + Avatar */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="h-9 w-44 rounded-lg bg-card pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-regular hover:opacity-90 transition-opacity whitespace-nowrap">
              Resume Builder
            </button>
            <img
              src={avatarImg}
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover border-2 border-border"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



