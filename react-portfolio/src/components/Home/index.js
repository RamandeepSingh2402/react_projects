import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Sidebar from '../Sidebar';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'm', 'a', 'n', 'd', 'e', 'e', 'p']
    const jobArray = ['w', 'e', 'b', ' ', 'a', 'n', 'd', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return(
        <div className="container home-page">
            <Sidebar />
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    index={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    index={32} />
                </h1>
                <h2>Sophomore CS student <br /> Interning with CarteNav.</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link> 

            </div>
        </div>
    );
}

export default Home;