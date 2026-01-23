import Link from "next/link";

const logo = ()=>{
  return (
    <Link href="/" className="flex iterm-center gap-2">
      </Link> 
  );
}

export default function Header() {
  return (
    <header className="py-6 border-b">
      <div className="wrapper flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vertex</h1>
      </div>
    </header>
  );
}
