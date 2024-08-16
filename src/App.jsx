import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaderContent from './Components/HeaderContent/HeaderContent'

function App() {

  return (
    <>
      <HeaderContent />
      <BodyContent>

        <div className="row">
           <div className="left">
              <img src='2.png' alt='' />
           </div>
           <div className='content'>
              <h1>Welcome to the World of DAOs</h1>
              <p>Explore the future of decentralized organizations where decisions are made by the community, for the community. DAOs (Decentralized Autonomous Organizations) empower individuals to collaborate and govern collectively, all without the need for central authorities.
               Discover how DAOs are reshaping industries, fostering innovation, and building global communities.</p>
           </div>

        </div>




      </BodyContent>


    </>
  )
}

export default App
