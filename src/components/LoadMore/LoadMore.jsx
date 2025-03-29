import s from "./LoadMore.module.css";

const LoadMore = ({ handleChangePage }) => {
  return (
    <div>
      <button onClick={handleChangePage} className={s.loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
