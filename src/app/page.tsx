import Hero from "../sections/hero/page"
import Body from "@/sections/body/page";

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
