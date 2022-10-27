import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Sidebar from '../Sidebar';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = 
    [
      ' ',  
      'R',
      'a',
      'm',
      'a', 
      'n', 
      'd', 
      'e', 
      'e', 
      'p'
    ];
    const jobArray =
     ['w', 
     'e', 
     'b', 
     ' ', 
     'a', 
     'n', 
     'd', 
     ' ', 
     's', 
     'o', 
     'f', 
     't', 
     'w', 
     'a', 
     'r', 
     'e', 
     ' ', 
     'd', 
     'e', 
     'v', 
     'e', 
     'l', 
     'o', 
     'p', 
     'e', 
     'r'
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <>
        { Sidebar }
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    index={16} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    index={33} />
                </h1>
                <h2>Sophomore CS student <br /> Interning with CarteNav.</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link> 
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;