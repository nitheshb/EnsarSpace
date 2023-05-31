import HeadNavBar2 from "../HeadNavBar/HeadNavBar2"
import LearningHeadBar from "./LearningForms/LearningHeadBar"

const Hero = () => {

  return (
    <div>
      <LearningHeadBar selModule={'Learning'} setSelModule={'Learning'} />
    <div

      className="h-[300px]"
      style={{ background: "url('/learning_images/hero_img.png')" }}
    >

      <div className="container h-100 flex">
        <div className="hero-content bg-white max-w-[400px] w-full ml-10 p-[20px] mt-10">
          <h1 className="text-[30px] font-bold">Learning is Fun.</h1>
          <p>Speed up your career with learnings</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
