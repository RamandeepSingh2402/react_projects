import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    const [name, setName] = useState('mario');


    useEffect(() =>{
        setTimeout(() => {
                fetch('http://localhost:8000/blogs').then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) =>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, []);

    return ( 
        <div className="Home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
export default Home;
