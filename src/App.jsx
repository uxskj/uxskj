
import{BrowserRouter}from'react-router-dom';import{useEffect,useState}from'react';
import Lenis from'@studio-freight/lenis';
import Header from'./components/Header';import Footer from'./components/Footer';
import Home from'./pages/Home';
export default function App(){
 const[dark,setDark]=useState(false);
 useEffect(()=>{document.documentElement.classList.toggle('dark',dark)},[dark]);
 useEffect(()=>{const l=new Lenis({smooth:true});const raf=t=>{l.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)},[]);
 return(<BrowserRouter>
  <Header dark={dark} setDark={setDark}/>
  <Home/>
  <Footer/>
 </BrowserRouter>)
}
