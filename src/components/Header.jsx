
import{Sun,Moon}from'lucide-react';import{Link}from'react-router-dom';
export default function Header({dark,setDark}){
 return(<header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
   <div className="font-bold tracking-wide">UXSKJ</div>
   <nav className="flex gap-6 text-sm">
    <Link to="/">Home</Link>
    <Link to="/#work">Work</Link>
    <Link to="/#contact">Contact</Link>
   </nav>
   <button onClick={()=>setDark(!dark)} className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
    {dark?<Sun/>:<Moon/>}
   </button>
  </div>
 </header>)
}
