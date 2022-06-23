import { DefaultUi, Player, Youtube } from "@vime/react"
import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client/core"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"
import { Footer } from "../Footer"

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson (where: { slug: $slug }) {
      id
      title
      videoId
      description    
      teacher {
        name
        bio
        avatarURL
      }
    }    
  }  
`

type GetLessonBySlugResponse = {
  lesson: {
    id: string;
    title: string
    videoId: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    }
  }
}

type Props = {
  lesson: string;
}

export const Video = ({ lesson }: Props) => {  

  const { data, error, loading } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, { 
    variables: { slug: lesson },
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
    returnPartialData: true,

  })

  /** TODO
   *  [ ] Loading and error handling content
   *  [ ] No lesson selected
   */

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error...</p>  

  return (
    <section className="flex-1 overflow-y-auto scrollbar">      
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId!}/>
            <DefaultUi />
          </Player>
        </div>
      </div>      
      <div className="p-8 max-w-[1100px] mx-auto">        
        
        <div className="flex flex-col lg:flex-row gap-14 mb-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-brand-base100">
              {data?.lesson.title}
            </h1>
            <p className="leading-relaxed text-brand-base200">
              {data?.lesson.description}
            </p>
            <div className="flex gap-4 items-center">
              <img 
                src={data?.lesson.teacher.avatarURL} 
                alt={`${data?.lesson.teacher.name} picture`}
                className="rounded-full h-16 border-2 border-brand-blue200" 
              />
              <div>
                <strong className="text-2xl text-brand-base100">
                  {data?.lesson.teacher.name}
                </strong>
                <span className="text-sm block">
                  {data?.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://" target="_blank" rel="noopener noreferrer" className="min-w-[237px] rounded px-6 py-4 bg-brand-blue400 text-white flex items-center justify-center gap-2 hover:bg-brand-blue500 transition-all">
              <DiscordLogo size={24} />
              Join the community
            </a>
            <a href="https://" target="_blank" rel="noopener noreferrer" className="min-w-[237px] rounded px-6 py-4 border border-brand-blue200 text-brand-blue-200 flex items-center justify-center gap-2 hover:bg-brand-blue200 hover:text-brand-base900 transition-all">
              <Lightning size={24} />
              Access the challenge
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
          <a href="#" className="rounded flex flex-items-stretch gap-6 overflow-hidden bg-brand-base800 hover:bg-brand-base700 transition-all">
            <div className="h-full p-6 flex items-center justify-center flex-shrink-0 bg-brand-blue400">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed flex-1">              
              <h3 className="text-2xl text-brand-base100 font-bold">Complementary material</h3>
              <p className="text-sm mt-2">Access the comeplementary material to improve your learning</p>               
            </div>   
            <div className="h-full pr-6 flex items-center justify-center">
              <CaretRight size={24} className="text-brand-blue200" />            
            </div>         
          </a>       
          <a href="#" className="rounded flex flex-items-stretch gap-6 overflow-hidden bg-brand-base800 hover:bg-brand-base700 transition-all">
            <div className="h-full p-6 flex items-center justify-center flex-shrink-0 bg-brand-blue400">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed flex-1">              
              <h3 className="text-2xl text-brand-base100 font-bold">Exclusive content</h3>
              <p className="text-sm mt-2">Snatch exclusive wallpapers and personalize your computer or mobile phone</p>
            </div>
            <div className="h-full pr-6 flex items-center justify-center">
              <CaretRight size={24} className="text-brand-blue200" />
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </section>    
  )
}