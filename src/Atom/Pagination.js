const Pagination = ({ currentPage, totalResults, setCurrentPage }) => {
  return (
    <div className="pagination">
      {currentPage >= 1 && (
        <button
          className="show-less"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Show Less
        </button>
      )}
      {currentPage < totalResults && (
        <button
          className="show-more"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Pagination;
