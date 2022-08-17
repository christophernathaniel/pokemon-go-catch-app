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
      {currentPage >= 1 && <div className="pagi-counter">{currentPage}</div>}
      {currentPage + 1 < totalResults / 20 && (
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
