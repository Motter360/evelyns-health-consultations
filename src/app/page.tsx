import Hero from "@/sections/hero/hero"
import Body from "@/sections/body/body";

function App(){
  return(
  <div>
    <Hero />
    <Body />
  </div>)
}


console.log(typeof <App />)

export default function Home() {
  return (
   <App/>
  );
}
