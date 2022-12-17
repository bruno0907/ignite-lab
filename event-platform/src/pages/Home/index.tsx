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

  const [createSubscriber, { loading, error, reset }] = useCreateSubscribeMutation()
  
  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createSubscriber({
        variables: {
          name: nameInputRef.current?.value.trim()!,
          email: emailInputRef.current?.value.trim()!        
        }
      })
  
      navigate('/event')
      
    } catch (error) {
      console.log(error)

    }
    
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
            onSubmit={handleSubscribe}
          >
            <strong className="text-xl text-brand-base100 mb-6">Subscribe for free!</strong>
            <input
              type="text"
              name="name"
              required
              disabled={loading}
              placeholder="Your full name"
              className="p-4 mb-2 rounded bg-brand-base900 text-brand-base100 border border-brand-base800 placeholder:to-brand-base300 hover:border-brand-blue400 focus:border-brand-blue400 focus:ring-brand-blue400 focus:ring-1 focus:outline-none transition-colors"
              ref={nameInputRef}
            />
            <input
              type="email"
              name="email"
              required
              disabled={loading}
              placeholder="Enter your email"
              className="p-4 mb-6 rounded bg-brand-base900 text-brand-base100 border border-brand-base800 placeholder:to-brand-base300 hover:border-brand-blue400 focus:border-brand-blue400 focus:ring-brand-blue400 focus:ring-1 focus:outline-none transition-colors"
              ref={emailInputRef}
              onChange={error && reset}
              />
              {error && <p className="px-2 -mt-4 mb-6 text-sm text-brand-error">Email already registered!</p>}
            <button
              type="submit"
              disabled={loading}
              className="min-w-[237px] rounded px-6 py-4 bg-brand-blue400 text-white flex items-center justify-center gap-2 hover:bg-brand-blue500 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              {!loading ? 'Subscribe' : <CircleNotch size={20} className="animate-spin"/>}
              
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