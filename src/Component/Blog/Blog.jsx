import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,hendelBookes,handleMarkAsRead }) => {
    // console.log(blog)
    const {title, cover,author_img,author,reading_time,posted_date,hashtags} = blog;

  return (
    <div className='content-center mx-auto'>
        <div className='py-4' >
        <img className='w-full' src={cover} alt="" />
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6 mt-6'>
                <img className='w-16' src={author_img} alt="" />
                <div>
                <h1 className='text-xl font-bold'>{author}</h1>
                <h1  className='text-lg text-gray-500'>{posted_date}</h1>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <span className='text-lg text-gray-500'>{reading_time} min read</span>
                <button onClick={() => hendelBookes(blog)} className='text-xl text-gray-500 font-bold'>{<CiBookmark />}</button>
            </div>
        </div>
        <h1 className=' text-2xl md:text-4xl font-bold md:w-[737px] md:leading-[60px]'>{title}</h1>
        <p>
            {
                hashtags.map((hash,inx) => <span className='text-lg text-gray-500' key={inx}><a href=""> {hash}</a></span>)
            }
        </p>
        <button onClick={() => handleMarkAsRead(reading_time)} className='mt-4 btn-link text-lg'>Read mark</button>
        </div>
        <hr />
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hendelBookes:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
    
}

export default Blog;


