import JobCard from "./JobCard";

const JobSection = ({ title, linkText, promoted = false, rows = 2 }) => {
  const totalCards = rows * 5;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-regular text-foreground">{title}</h2>
        <button className="text-sm text-primary pb-0.5 border-b border-primary hover:opacity-80 transition-opacity whitespace-nowrap" style={{ fontWeight: 400 }}>
          {linkText}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 -ml-0">
        {Array.from({ length: totalCards }).map((_, i) => (
          <JobCard key={i} promoted={promoted} />
        ))}
      </div>
    </section>
  );
};

export default JobSection;
