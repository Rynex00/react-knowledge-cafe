import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-white p-4 mb-4 rounded-lg">
      <h1 className="text-xl">{title} </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
