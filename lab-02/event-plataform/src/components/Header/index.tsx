import { EventLogo } from "../EventLogo"

export const Header = () => {
  return (
    <header className="w-full p-5 sticky flex items-center justify-center bg-brand-base700 border-b border-b-brand-base600">
      <EventLogo className="h-5" />
    </header>
  )
}