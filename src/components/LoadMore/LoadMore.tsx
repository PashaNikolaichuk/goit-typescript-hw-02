import s from "./LoadMore.module.css";

interface LoadMoreProps {
  handleChangePage: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ handleChangePage }) => {
  return (
    <div>
      <button onClick={handleChangePage} className={s.loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
