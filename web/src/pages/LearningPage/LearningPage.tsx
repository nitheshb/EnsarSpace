import { MetaTags } from '@redwoodjs/web'
import CategoriesList from 'src/components/A_LearningModule/CategoriesList'
import CoursesList from 'src/components/A_LearningModule/CoursesList'
import Hero from 'src/components/A_LearningModule/hero'

const LearningPage = () => {
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />
      <div className="holder">
        <Hero />
       <CoursesList />
      <CategoriesList />
      </div>
    </>
  )
}

export default LearningPage
