import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick, isLoading, loader }) {
  return (
    <div className={css.loadBtnWrapper}>
      {isLoading ? (
        loader
      ) : (
        <button className={css.loadBtn} onClick={onClick}>
          Load More
        </button>
      )}
    </div>
  );
}

export default LoadMoreBtn;
