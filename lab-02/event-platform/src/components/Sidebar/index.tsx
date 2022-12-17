import { useGetLessonsQuery } from '../../graphql/schemas';
import { LessonItem } from '../LessonItem'

export const Sidebar = () => {
  const { data } = useGetLessonsQuery()
  
  return !data ? null : (
    <aside className="w-[348px] flex flex-col gap-6 p-6 border-l bg-brand-base800 border-b rounded-bl border-brand-base500 overflow-y-auto scrollbar transition-all">
      <span className="text-2xl font-bold block">Lessons Schedule</span>      
      <ul className="flex flex-col border-t border-brand-base600 pt-6 gap-8">
        {data?.lessons.map(lesson => (
          <LessonItem 
            key={lesson.id} 
            title={lesson.title}
            lessonType={lesson.lessonType}
            availableAt={lesson.availableAt}
            slug={lesson.slug}
          />
        ))}
      </ul>
    </aside>
  )  
}
