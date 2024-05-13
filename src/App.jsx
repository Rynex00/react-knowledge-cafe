import Header from "./Component/Header/Header"
import Blogs from "./Component/Blogs/Blogs"
import Bookmarks from "./Component/Bookmarks/Bookmarks"
import { useState } from "react";



const App = () => {

  const [bookmarks,setBookmarks] =useState([]);

  const [readingTime,setReadingTime] = useState(0);

  const hendelBookes = (blog) => {
    const newBookmarsk = [...bookmarks,blog]
    setBookmarks(newBookmarsk)
  }

  const handleMarkAsRead = time  => {
    setReadingTime(readingTime + time)
  }


  return (
    <div>
      <Header/>
      <div className="max-w-7xl mx-auto md:flex px-4 gap-8">
      <Blogs hendelBookes={hendelBookes} handleMarkAsRead={handleMarkAsRead} />
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}  />
      </div>
    </div>
  )
}

export default App