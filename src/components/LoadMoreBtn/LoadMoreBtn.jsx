function LoadMoreBtn({ onClick, isLoading, loader }) {
  return (
    <div>
      {isLoading ? loader : <button onClick={onClick}>Load More</button>}
    </div>
  );
}

export default LoadMoreBtn;
