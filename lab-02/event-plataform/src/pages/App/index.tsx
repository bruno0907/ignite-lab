import { gql, useQuery } from "@apollo/client"
import { Header } from "../../components/Header";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

type Lesson = {
  id: string;
  title: string
}

export default function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  
  return (
    <>
      <Header />
      <ul>
        {data?.lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
      </ul>
    </>
  )
}
