import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My first blog', body: 'This is my first blog', author: 'mario', id: 1},
        {title: 'My second blog', body: 'This is my second blog', author: 'yoshi', id: 2},
        {title: 'My third blog', body: 'This is my third blog', author: 'mario', id: 3}
    ]);

    const [name, setName] = useState('mario');

    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect was run');
    });

    return ( 
        <div className="Home">
           <BlogList blogs={blogs} title="All blogs" handleDelete = {handleDelete}/>
        </div>
     );
}
export default Home;
