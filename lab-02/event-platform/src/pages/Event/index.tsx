import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Video } from "../../components/Video"

export const Event = () => {
  return (
    <>
      <Header />     
      <main className="flex pt-16 overflow-hidden">
        <Video />
        <Sidebar />
      </main> 
    </>
  )
}