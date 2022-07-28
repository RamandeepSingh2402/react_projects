import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My first blog', body: 'This is my first blog', author: 'mario', id: 1},
        {title: 'My second blog', body: 'This is my second blog', author: 'yoshi', id: 2},
        {title: 'My third blog', body: 'This is my third blog', author: 'mario', id: 3}
    ]);

    return ( 
        <div className="Home">
           <BlogList blogs={blogs} title="All blogs"/>
        </div>
     );
}
 
export default Home;
