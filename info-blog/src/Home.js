import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My first blog', body: 'This is my first blog', author: 'mario', id: 1},
        {title: 'My second blog', body: 'This is my second blog', author: 'yoshi', id: 2},
        {title: 'My third blog', body: 'This is my third blog', author: 'mario', id: 3}
    ]);

    return ( 
        <div className="Home">
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p> 


                </div>
            ))}
        </div>
     );
}
 
export default Home;
