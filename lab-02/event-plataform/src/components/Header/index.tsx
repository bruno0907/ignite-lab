import { EventLogo } from "../EventLogo"

export const Header = () => {
  return (
    <header className="w-screen p-4 sticky flex items-center justify-center bg-brand-base700 border-b border-b-brand-base500">
      <EventLogo className="h-5" />
    </header>
  )
}