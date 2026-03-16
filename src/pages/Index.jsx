import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
import SearchBar from "@/components/SearchBar";
import JobSection from "@/components/JobSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex gap-6 p-12 pt-6">
        <ProfileSidebar />

        {/* Main content */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Find your Dream Job,<span className="text-primary">Albert!</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>
          </div>

          <SearchBar />

          <JobSection title="Featured Jobs" linkText="See Featured Jobs" promoted rows={1} />
          <JobSection title="Recommended Jobs" linkText="See Recommended Jobs" rows={2} />
          <JobSection title="Latest Jobs" linkText="See Latest Jobs" rows={2} />
        </main>
      </div>
    </div>
  );
};

export default Index;



