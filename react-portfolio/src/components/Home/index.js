import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer"/>
                    amandeep
                    <br />
                    web and software developer
                </h1>
                <h2>Sophomore CS student <br /> Interning with CarteNav.</h2>
                <Link to="/contact" className='flat-butotn'>CONTACT ME</Link> 

            </div>
        </div>
    );
}

export default Home;