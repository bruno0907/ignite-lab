import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link to="/event" className="min-w-[237px] rounded px-6 py-4 bg-brand-blue400 text-white flex items-center justify-center gap-2 hover:bg-brand-blue500 transition-all">      
        Go to Event Page      
      </Link>
    </div>
  )
}