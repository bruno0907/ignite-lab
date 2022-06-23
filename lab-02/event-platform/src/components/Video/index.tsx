import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"
import { Footer } from "../Footer"

export const Video = () => {
  return (
    <section className="flex-1 overflow-y-auto scrollbar">
      <h1>VIDEO</h1>

      <video src={`https://www.youtube.com/watch?v=NqzdVN2tyvQ`} />

      <div className="p-8">
        
        <div className="flex gap-14 mb-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-brand-base100">Lesson 01 - Lesson title placeholder</h1>
            <p className="leading-7 text-brand-base200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ab, velit, corporis repellat eaque totam numquam perspiciatis exercitationem culpa minus voluptatum hic placeat rerum voluptates sed, at aperiam possimus harum.</p>
            <div className="flex gap-4 items-center">
              <img 
                src="https://yt3.ggpht.com/ytc/AKedOLT6ck5p3kvuEMSLqzf9aviTcwthTLwoSZnjuJAvhw=s900-c-k-c0x00ffffff-no-rj" 
                alt="Teacher's profile picture"
                className="rounded-full h-16 border-2 border-brand-blue200" 
              />
              <div>
                <strong className="text-2xl text-brand-base100">Rick Beato</strong>
                <span className="text-sm block">Music producer and composer</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="min-w-[237px] rounded px-6 py-4 bg-brand-blue400 text-white flex items-center justify-center gap-2 hover:bg-brand-blue500 transition-all"><DiscordLogo size={24} />Join the community</button>
            <button className="min-w-[237px] rounded px-6 py-4 border border-brand-blue200 text-brand-blue-200 flex items-center justify-center gap-2 hover:bg-brand-blue200 hover:text-brand-base900 transition-all"><Lightning size={24} />Access the challenge</button>
          </div>
        </div>        
        
        <div className="flex items-center justify-between gap-8 mb-20">
          <a href="#" className="rounded flex align-center justify-center overflow-hidden h-36 w-1/2 bg-brand-base800 hover:bg-brand-base700 transition-all">
            <span className="flex flex-col flex-shrink-0 w-[86px] items-center justify-center bg-brand-blue400">
              <FileArrowDown size={40} />
            </span>
            <span className="flex items-center justify-between px-8 gap-8">
              <p>
                <strong className="text-2xl text-brand-base100">Complementary material</strong>
                <span className="text-sm block">Access the comeplementary material to improve your learning</span> 
              </p>
              <CaretRight size={40} className="text-brand-blue200" />
            </span>
          </a>       
          <a href="#" className="rounded flex align-center justify-center overflow-hidden h-36 w-1/2 bg-brand-base800 hover:bg-brand-base700 transition-all">
            <span className="flex flex-col flex-shrink-0 w-[86px] items-center justify-center bg-brand-blue400">
              <FileArrowDown size={40} />
            </span>
            <span className="flex items-center justify-between px-8 gap-8">
              <p>
                <strong className="text-2xl text-brand-base100">Exclusive content</strong>
                <span className="text-sm block">Snatch exclusive wallpapers and personalize your computer or mobile phone</span> 
              </p>
              <CaretRight size={40} className="text-brand-blue200" />
            </span>
          </a>
        </div>

        <Footer />
      </div>

    </section>    
  )
}