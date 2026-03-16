import JobCard from "./JobCard";

const JobSection = ({ title, linkText, promoted = false, rows = 1 }) => {
  const totalCards = rows * 5;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-medium text-foreground">{title}</h2>
        <button className="text-sm text-primary font-medium underline hover:opacity-80 transition-opacity whitespace-nowrap">
          {linkText}
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: totalCards }).map((_, i) => (
          <JobCard key={i} promoted={promoted} />
        ))}
      </div>
    </section>
  );
};

export default JobSection;



