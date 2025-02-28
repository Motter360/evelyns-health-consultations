import Hero from "../components/hero/page"

function App(){
  return(
  <div>
    <Hero></Hero>
  </div>)
}


console.log(typeof <App />)

export default function Home() {
  return (
   <App/>
  );
}
