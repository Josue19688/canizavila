import StatisticsSection from "@/components/public/CardStadistic"
import { Destacados } from "@/components/public/Destacados"
import Gallery from "@/components/public/Galeria"
import { Hero } from "@/components/public/Hero"
import { Reconocimientos } from "@/components/public/Reconocimientos"
import { Testinomial } from "@/components/public/Testimonial"




export const Home = () => {
  return (
    <>
    <Hero/>
    
    <Reconocimientos/>
    <StatisticsSection/>
    <Destacados/>
    <Gallery/>
    <Testinomial/>
    </>
  )
}
