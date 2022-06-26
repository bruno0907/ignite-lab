import { Player, Youtube, DefaultUi } from "@vime/react"
import { CircleNotch, DiscordLogo, Lightning } from "phosphor-react"
import { useGetWelcomeQuery } from "../../graphql/schemas"
import { Footer } from "../Footer"

export const Welcome = () => {
  const { data, error, loading } = useGetWelcomeQuery({
    fetchPolicy: 'no-cache'
  })

  if(loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <CircleNotch size={40} className="animate-spin"/>
      </div>
    )
  }

  if(error || !data || !data.welcomes) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>An error ocurried. Try again...</p>
      </div>
    )
  }
  
  return (
    <section className="flex-1 overflow-y-auto scrollbar">

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.welcomes[0].videoId || ''} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 mb-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-brand-base100">
              {data?.welcomes[0].title}
            </h1>
            <p className="leading-relaxed text-brand-base200">
              {data?.welcomes[0].description}
            </p>
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

        <div className="flex items-center gap-4 mb-20 max-w-xl">
          <img
            src={data?.welcomes[0].teachers[0].avatarURL}
            alt={`${data?.welcomes[0].teachers[0].name} picture`}
            className="rounded-full h-16 border-2 border-brand-blue200"
          />
          <div>
            <strong className="text-2xl text-brand-base100 leading-loose">
              {data?.welcomes[0].teachers[0].name}
            </strong>
            <span className="text-sm block text-brand-base300">
              {data?.welcomes[0].teachers[0].bio}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
