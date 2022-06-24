import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Video } from "../../components/Video"

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <Header />     
      <main className="pt-16 flex overflow-hidden">        
        { slug ? <Video lesson={slug} /> : <div className="flex-1"/> }
        <Sidebar />        
      </main> 
    </>
  )
}