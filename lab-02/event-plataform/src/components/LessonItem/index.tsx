import { CheckCircle, Lock } from "phosphor-react"
import { Lesson } from "../Sidebar";

type Props = {
  lesson: Lesson
  onSelectLesson: () => void;  
}

export const LessonItem = ({ lesson, onSelectLesson }: Props) => {
  const isBlocked = new Date(lesson.availableAt) > new Date()
  const lessonAvailability = new Date(lesson.availableAt).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })

  const isSelected = false

  return (
    <li className={`${isBlocked && 'cursor-not-allowed opacity-75'}`}>
      <a href="#" className={`flex flex-col gap-5 group ${isBlocked && 'pointer-events-none'}`}>
        <span className="text-brand-base300">{lessonAvailability}</span>
        <div 
          className={`
            border 
            rounded 
            ${isSelected ? 'border-brand-blue300 bg-brand-blue400 relative' : 'border-brand-base500'} 
            flex 
            flex-col 
            gap-4
            p-4 
            cursor-pointer 
            group-hover:border-brand-blue300 
            transition-all            
          `}        
          onClick={() => onSelectLesson()}
        >
          <header className="flex items-center justify-between">          
            {isBlocked 
              ? <span className="text-sm font-semibold text-brand-warning flex leading-none items-end gap-2">
                  <Lock size={20} /> 
                  Soon                  
                </span>
              : <span 
                  className={`
                    text-sm 
                    font-semibold 
                    ${isSelected ? 'text-white' : 'text-brand-blue200'}
                    flex 
                    leading-tight 
                    items-end gap-2
                  `}>
                  <CheckCircle size={20}/> 
                  Content available
                </span>
            }
            <span 
              className={`
              px-2 
              py-[0.125rem] 
              border 
              ${isSelected ? 'border-white' : 'border-brand-blue300'} 
              rounded 
              text-xs 
              ${isBlocked ? 'text-brand-blue300' : 'text-white'} 
              font-bold
            `}>{lesson.lessonType === 'live' ? 'LIVE' : 'CLASS'}</span>
          </header>

          <strong className="text-brand-base200">{lesson.title}</strong>

          {isSelected && <span className="absolute w-4 h-4 top-[42%] -left-2 rotate-45 rounded-sm  bg-brand-blue400 border border-brand-blue300 border-t-brand-blue400 border-r-brand-blue400"/>}
        </div>
      </a>      
    </li>
  )
}
