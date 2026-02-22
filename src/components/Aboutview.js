import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className="lead">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur 
             voluptate adipisci harum vel, expedita eveniet? Dolor, soluta error tempore 
             dolorum iusto dicta esse quasi enim consequuntur id ex voluptatibus?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutView;