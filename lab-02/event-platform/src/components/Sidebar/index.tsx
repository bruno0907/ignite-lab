import { gql, useQuery } from '@apollo/client'
import { LessonItem } from '../LessonItem'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      lessonType
      availableAt
    }
  }
`

type GetLessonsQueryResponse = {
  lessons: Lesson[]
}

export type Lesson = {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'class' | 'live';
}

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)  

  function handleSelectLesson (slug: string) {
    console.log(slug)  
  }  
  
  return (
    <aside className="w-[348px] flex flex-col gap-6 p-6 border-l bg-brand-base800 border-b rounded-bl border-brand-base500 overflow-y-auto scrollbar">
      <span className="text-2xl font-bold block">Lessons Schedule</span>      
      <ul className="flex flex-col border-t border-brand-base600 pt-6 gap-8">   
        {data?.lessons.map(lesson => (
          <LessonItem 
            key={lesson.id} 
            lesson={lesson} 
            onSelectLesson={handleSelectLesson}             
          />
        ))}
      </ul>
    </aside>
  )
}
