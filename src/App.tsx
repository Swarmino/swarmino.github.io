import './App.css'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

function App() {

  let githubLink = 'https://github.com/Swarmino'
  let linkedinLink = 'https://www.linkedin.com/in/victorfn/'
  let itchLink = 'https://swarmino.itch.io/'
  let showreelLink = 'https://youtu.be/-XIfHc0to2s'
  let email = 'contact@victorfn.com'

  return (
    <>
      <div className='space-y-20'>
        <div>
          <div style={{ width: '100vw', position: 'fixed', top: 0, right: 0 }} className='translate-x-40 aspect-square bg-green-600/30 rounded-full blur-3xl -z-40'></div>
          <h1 className=' font-mono text-left'>Victor Falck-Næss</h1>
          <h2 className=' text-left'>Developer & Designer</h2>
        </div>

        <div className='flex flex-col items-center justify-center p-2 space-y-2 '>
          <button
            onClick={() => window.open(linkedinLink, '_blank')}
            className='flex justify-center items-center space-x-2 rounded-full outline-none bg-blue-700 w-full hover:shadow-xl hover:shadow-blue-700/80 transition duration-700 hover:scale-105 '
          >
            <FaLinkedin /> <p>LinkedIn</p>
          </button>
          <button
            onClick={() => window.open(githubLink, '_blank')}
            className='flex  justify-center items-center rounded-full space-x-2 bg-purple-600 w-full hover:shadow-xl hover:shadow-purple-600/80 transition duration-700 hover:scale-105'
          >
            <FaGithub /> <p>Github</p>
          </button>
          <button
            onClick={() => window.open(itchLink, '_blank')}
            className='bg-gray-700  w-full hover:shadow-xl rounded-full hover:shadow-gray-700/80 transition duration-700 hover:scale-105'
          >
            Game projects (Itch.io)
          </button>

          <button
            onClick={() => window.open(showreelLink, '_blank')}
            className='flex  justify-center items-center rounded-full space-x-2 bg-red-600 w-full hover:shadow-xl hover:shadow-red-600/80 transition duration-700 hover:scale-105'
          >
            <FaYoutube /> <p>Showreel</p>
          </button>

          <button onClick={() => window.open(`mailto:${email}`, '_blank')}
            className='flex  justify-center items-center rounded-full space-x-2 text-black bg-white w-full hover:shadow-xl hover:shadow-white/60 transition duration-700 hover:scale-105'>
            <p>Get in touch</p>
          </button>

        </div>

        <div style={{ width: '100vw', position: 'fixed', bottom: 0, left: 0 }}className='fixed w-64 -translate-x-40 aspect-square bg-purple-600/30 rounded-full blur-3xl -z-40'></div>
      </div>
    </>
  );
}

export default App;