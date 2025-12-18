
import{Canvas,useFrame}from'@react-three/fiber';
import{useGLTF,OrbitControls}from'@react-three/drei';
import{Suspense,useRef}from'react';
function Mesh(){
 const ref=useRef(); const {scene}=useGLTF('/src/assets/models/brand.glb');
 useFrame(({mouse})=>{
  ref.current.rotation.y+=0.003;
  ref.current.rotation.x=mouse.y*0.4;
  ref.current.position.x=mouse.x*0.6;
 });
 return <primitive ref={ref} object={scene} scale={3}/>;
}
export default()=> (
 <div className="h-[420px]">
  <Canvas camera={{position:[0,0,6]}}>
   <ambientLight intensity={0.7}/>
   <directionalLight position={[5,5,5]}/>
   <Suspense fallback={null}><Mesh/></Suspense>
   <OrbitControls enableZoom={false}/>
  </Canvas>
 </div>
);
