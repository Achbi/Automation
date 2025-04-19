import Navba from "./components/global/navbar";

export default function Home(){
  return(

     <main className="flex items-center justify-center flex-col">
      <Navba />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased"></section>
    </main>
  )
}