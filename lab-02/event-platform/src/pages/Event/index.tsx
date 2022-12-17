import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Video } from "../../components/Video"
import { Welcome } from "../../components/Welcome"

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  
  return (
    <>
      <Header />     
      <main className="pt-16 flex overflow-hidden">        
        {slug ? <Video lesson={slug} /> : <Welcome />}
        <Sidebar />        
      </main> 
    </>
  )
}