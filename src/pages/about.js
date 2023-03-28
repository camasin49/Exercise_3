import Navbar from "@/components/Navbar";
import Card from "@/components/Card"

export default function About() {
  const name = "Holden"
    
    return (
      <div>
        <Navbar />
        <Card 
          firstname={name}
          lastname={"Montajes"}
          address="United States"
         />
    </div>
    )
}