// components/StaticCard.jsx
export default function StaticCard() {
  return (
    <div className="p-5 border border-mist-950 max-w-sm w-full bg-zinc-900 shadow-sm opacity-60">
      <div className="bg-mist-950 h-48 w-full mb-4" />
      <div className="space-y-3 mb-4">
        <div className="bg-mist-950 h-6 w-3/4 " />
        <div className="bg-mist-950 h-4 w-1/2 " />
      </div>
      <div className="space-y-2 mb-6">
        <div className="bg-mist-950 h-3 w-full " />
        <div className="bg-mist-950 h-3 w-5/6 " />
      </div>
      <div className="bg-mist-950 h-9 w-28 -lg" />
    </div>
  );
}