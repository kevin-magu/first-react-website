import '../styles/Home.css';
import bgImage from '../assets/images/homepage-bg.jpg';
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bgImage})` }}>
      <p>Hello there</p>
    </div>
  )
}

export default Home