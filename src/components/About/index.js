import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = 'About Me'.split('')
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <p>
            My name is Nicholas Defex. I am a Data Engineer with nine months of
            experience contracted at MUFG through York Solutions. I have had an
            interest in computers and techonology all my life and in the fall of
            2021 I decided to persue a career that aligns with those interests.
          </p>
          <p>
            I signed up for the Rutgers Full Stack Web Dev Bootcamp and 24 weeks
            later accepted an offer through York Solutions to further gain
            knowledge in Data Engineering.
          </p>
          <p>In my free time I enjoy writing and performing music</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJs} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About
