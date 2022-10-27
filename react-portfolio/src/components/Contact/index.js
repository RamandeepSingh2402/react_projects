import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import Sidebar from '../Sidebar';

const Contact = () => {

    const[letterClass, setLetterClass] = useState('text-aimmation');
    const refForm = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm (
                'service_o5cj5ak',
                'template_nxfh9d4',
                refForm.current,
                'oqpYR5O6-a8pw_f0r'
            )
            .then (
                () => {
                    alert('Message sucessfully sent!');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
            )
    }

    return(
    <>
    { Sidebar }
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ]}
                    idx={15}    
                />
            </h1>
            <p>
                I'm looking for opportunities for Summer 2022 and I am also
                interested in freelance opportunities - especially ambitious or large projects.
                However, if you have other request or question,
                don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                required />
                        </li>
                        <li className='half'>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                required />
                        </li>
                        <li>
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                required 
                            />
                        </li>
                        <li className='half'>
                            <textarea placeholder="Message" name='message' required>

                            </textarea>
                        </li>
                        <li>
                            <input 
                                type="submit" 
                                className='flat-button' 
                                value="SEND"
                                required 
                            />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            Ramandeep Singh, 
            <br />
            Halifax
            <br />
            NS
            <br />
            <span> ramandeep.s@dal.ca </span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[44.635497458, -63.58833098]} zoom ={13}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker position={[44.635497458, -63.58833098]}>
                    <Popup>Ramandeep lives here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
    <Loader type='pacman' />
    </>
    )
}

export default Contact;