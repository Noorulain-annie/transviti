import { Search, ChevronDown } from "lucide-react";

const tags = ["Frontend", "Backend", "Graphic Designer"];

const SearchBar = () => {
  return (
    <div className="space-y-3">
      {/* Search row */}
      <div className="flex items-center rounded-lg bg-card px-3 py-2 shadow-sm w-[940px]">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full h-10 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="h-6 w-px bg-gray-200 mx-2"></div>
        <button className="h-10 px-3 bg-transparent text-sm text-foreground flex items-center gap-2 hover:bg-muted transition-colors whitespace-nowrap rounded-lg">
          Select Location
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
        <div className="h-6 w-px bg-gray-200 mx-2"></div>
        <button className="h-10 px-3 bg-transparent text-sm text-foreground flex items-center gap-2 hover:bg-muted transition-colors whitespace-nowrap rounded-lg">
          Job Type
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
        <button className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-regular flex items-center justify-center hover:opacity-90 transition-opacity">
          <Search className="h-4 w-4 mr-2" />
          Search
        </button>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Similar:</span>
        {tags.map((tag) => (
          <button
            key={tag}
            className="h-8 px-3 rounded-sm border border-gray-400 bg-card text-xs text-muted-foreground bg-muted transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;



