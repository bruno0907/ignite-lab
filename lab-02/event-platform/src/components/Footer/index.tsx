import { RocketseatLogo } from "../RocketseatLogo"

export const Footer = () => {
  return (
    <footer className="w-full border-t border-brand-base500 flex pt-4 pb-2 gap-8 items-end">
      <a href="https://www.rocketseat.com.br/" target="_blank" rel="noopener noreferrer">
        <RocketseatLogo width="162" height="30"/>
      </a>
      <span className="text-brand-base300">Rocketseat - Todos os direitos reservados</span>
      <a href="#" className="ml-auto text-brand-base300">Políticas de privacidade</a>
    </footer>
  )
}