import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header className="w-screen p-4 sticky flex items-center justify-center bg-brand-base700">
      <Logo />
    </header>
  )
}