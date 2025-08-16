
import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import VideoSection from './components/VideoSection'

function App() {
 

  return (
    <>
   <div className="font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
       <VideoSection />

       <AboutSection/>
       <Footer/>
    </div>
    </>
  )
}

export default App
