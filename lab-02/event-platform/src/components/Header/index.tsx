import { EventLogo } from "../EventLogo"

export const Header = () => {  
  return (
    <header className={`
      w-full 
      p-5 
      h-16
      flex 
      items-center 
      justify-center 
      bg-brand-base800 
      border-b 
      border-b-brand-base600 
      fixed
    `}>
      <EventLogo className="h-5" />
    </header>
  )
}