function ImageCard({ image }) {
  console.log(image);
  return (
    <div>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.alt_description}</p>
    </div>
  );
}
export default ImageCard;
