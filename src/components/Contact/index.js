import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const titleArray = 'Contact Me'.split('')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_iii202m',
        'template_f8xjqnh',
        refForm.current,
        'p45MEBq7OyMr0bJ-R'
      )
      .then(
        () => {
          alert('Email sent!')
          window.location.reload(false)
        },
        () => {
          alert('There was an error sending the email, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          1{' '}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities to further my knowledge in Data
            Engineering and Web Development. If you have any requests or
            questions, please feel free to contact me!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nicholas Defex,
          <br />
          United States,
          <br />
          New Jersey
          <br />
          <span>NicholasDefex@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.48622, -74.45182]} zoom={8}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.48622, -74.45182]}>
              <Popup>Somewhere, in New Jersey...</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Contact
