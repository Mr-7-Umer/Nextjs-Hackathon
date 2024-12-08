import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Slides from "@/components/Slides";
import SubHero from "@/components/Subhero";

export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
    {/* <Footer/> */}
    </>
  )
}