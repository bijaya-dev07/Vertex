export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <div className="items-center flex gap-2 mb-3">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
