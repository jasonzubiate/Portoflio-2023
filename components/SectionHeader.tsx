import "@/styles/SectionHeader.css"

interface SectionHeaderProps {
  number: number;
  title: string;
}

function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="text-m header-item">0{number}/</p>
      <h2 className="text-m header-item uppercase">{title}</h2>
    </div>
  );
}

export default SectionHeader;
