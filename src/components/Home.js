import Hero from './Hero';

//Method const
const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, earum ad quasi blanditiis
              laudantium voluptatum odio dolore est placeat harum? Assumenda, vel. Rerum ratione praesentium
              cumque quaerat quis voluptatibus doloribus.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;