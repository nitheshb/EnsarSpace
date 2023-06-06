import MyJourneyNavBar2 from "./MyLearningsHeadxer"

const Hero = () => {

  return (
    <div

      className="h-[300px]"
      style={{ background: "url('/learning_images/hero_img.png')" }}
    >
      <MyJourneyNavBar2 selModule={'Learning'} setSelModule={'Module'} />
      <div className="container h-100 flex">
        <div className="hero-content bg-white max-w-[400px] w-full ml-10 p-[20px] mt-10">
          <h1 className="text-[30px] font-bold">Learning is Fun.</h1>
          <p>Speed up your career with learnings</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
