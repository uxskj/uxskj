
import{motion}from'framer-motion';import Model from'../components/Model';
export default function Home(){
 return(<main className="pt-24 px-6 md:px-20">
  <section className="min-h-screen flex flex-col items-center justify-center text-center gap-8">
   <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}
    className="text-7xl md:text-9xl font-extrabold tracking-tight">im daddy</motion.h1>
   <p className="max-w-3xl text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
    Impeccable UI designer & YouTube creator crafting elite digital experiences,
    motion-first interfaces, and visually sharp products.
   </p>
  </section>

  <section id="work" className="py-32">
   <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
   <Model/>
  </section>

  <section className="py-32">
   <h2 className="text-4xl font-bold text-center mb-12">Happy Clients</h2>
   <div className="grid md:grid-cols-3 gap-8">
    {['Elite attention to detail','Transformed our brand','World-class UI execution'].map((t,i)=>(
     <div key={i} className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-8 text-neutral-700 dark:text-neutral-300">
      “{t}”<div className="mt-4 text-sm opacity-70">— Client</div>
     </div>
    ))}
   </div>
  </section>

  <section id="contact" className="py-32 max-w-xl mx-auto">
   <h2 className="text-4xl font-bold text-center mb-12">Let’s Work Together</h2>
   <form onSubmit={e=>{e.preventDefault();alert('Message sent')}} className="grid gap-5">
    <div className="grid grid-cols-2 gap-4">
     <input placeholder="First name" className="rounded-xl p-4 bg-neutral-100 dark:bg-neutral-900"/>
     <input placeholder="Last name" className="rounded-xl p-4 bg-neutral-100 dark:bg-neutral-900"/>
    </div>
    <input placeholder="Email" className="rounded-xl p-4 bg-neutral-100 dark:bg-neutral-900"/>
    <input placeholder="Phone" className="rounded-xl p-4 bg-neutral-100 dark:bg-neutral-900"/>
    <textarea rows="4" placeholder="Message" className="rounded-xl p-4 bg-neutral-100 dark:bg-neutral-900"/>
    <button className="rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black py-4 font-semibold hover:scale-[1.03] transition">
     Send Message
    </button>
   </form>
  </section>
 </main>)
}
