import { Link } from "react-router-dom"
import { RocketseatLogo } from "../RocketseatLogo"

export const Footer = () => {
  return (
    <footer className="w-full px-4 pb-2 bg-brand-base900">
      <div className="w-full pt-4 pb-2 flex flex-col items-center bg-brand-base900 border-t border-brand-base500 gap-4 lg:gap-8 lg:items-end lg:flex-row">
        <a href="https://www.rocketseat.com.br/" target="_blank" rel="noopener noreferrer">
          <RocketseatLogo width="162" height="30"/>
        </a>
        <span className="text-brand-base300 text-center">Rocketseat - All rights reserved | {new Date().getFullYear()}</span>
        <Link to="/privacy-policy" className="text-brand-base300 mt-2 lg:ml-auto ">Privacy policy</Link>
      </div>
    </footer>
  )
}