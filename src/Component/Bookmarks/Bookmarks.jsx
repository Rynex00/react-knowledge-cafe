import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  // console.log(bookmarks);

  // const [] = bookmarks

  return (
    <div className="md:w-1/3 mt-12">
      <div className="bg-[#6047EC]/15 py-4 border border-purple-500 rounded-lg ">
        <h1 className="text-[#6047EC] text-2xl font-bold text-center">
          Spent time on read : {readingTime}
        </h1>
      </div>
      <br />
      <div className="bg-gray-200 rounded-xl w-auto p-6">
        <h1 className="text-2xl font-semibold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <br />
        <div>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};
export default Bookmarks;
