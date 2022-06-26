import { Link, useNavigate } from "react-router-dom"
import { EventLogo } from "../../components/EventLogo"

import Hero from '../../assets/hero.png'
import { FormEvent, useRef } from "react"
import { Footer } from "../../components/Footer"
import { CircleNotch } from "phosphor-react"
import { useCreateSubscribeMutation } from "../../graphql/schemas"

export const Home = () => {
  const navigate = useNavigate()

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const [createSubscriber, { data, loading }] = useCreateSubscribeMutation()
  
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    
    await createSubscriber({
      variables: {
        name: nameInputRef.current?.value.trim()!,
        email: emailInputRef.current?.value.trim()!        
      }
    })

    navigate('/event')
  }

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-bl from-[rgba(0,0,0,.5)] via-brand-blue500 to-[rgba(0,0,0,.5)] overflow-y-auto scrollbar">

      <div className="sm:px-8 mb-auto">
        <div className="flex flex-col items-center justify-between gap-8 mt-16 md:flex-row">
          <div className="w-full max-w-[624px] flex flex-col items-center text-center md:text-start md:items-start p-8 sm:p-0">
            <EventLogo width="329" height="32" />
            <h1 className="text-4xl font-normal text-brand-base100 leading-[125%] mt-8 mb-6">
              A pratical approach to <span className="text-brand-blue200 font-bold">Modes & Scales</span> with <span className="text-brand-blue200 font-bold">Rick Beato</span>
            </h1>
            <h2 className="leading-relaxed text-brand-base200 font-normal">
              Through the course of one week I will share with you my toughts and insights on how I have been approaching scales and mode in my music career.
            </h2>
          </div>
          <form className="w-full p-8 flex flex-col border-y border-y-brand-base500 bg-brand-base800 sm:border sm:rounded sm:border-brand-base500 md:max-w-[391px]" 
            onSubmit={handleSignUp}
          >
            <strong className="text-xl text-brand-base100 mb-6">Sign-up for free</strong>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="p-4 mb-2 rounded bg-brand-base900 text-brand-base100 placeholder:to-brand-base300"
              ref={nameInputRef}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="p-4 mb-6 rounded bg-brand-base900 text-brand-base100 placeholder:to-brand-base300"
              ref={emailInputRef}
            />
            <button
              type="submit"
              disabled={loading}
              className="min-w-[237px] rounded px-6 py-4 bg-brand-blue400 text-white flex items-center justify-center gap-2 hover:bg-brand-blue500 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              {!loading ? 'Subscribe now!' : <CircleNotch size={20} className="animate-spin"/>}
              
            </button>
            <Link to="/event" className="text-brand-base300 font-regular  mt-8 self-center hover:text-brand-base100 transition-colors">I'm already an user!</Link>
          </form>
        </div>        
        <img src={Hero} className="w-[1216px]" />        
      </div>
            
      <Footer />
      
    </div>

  )
}