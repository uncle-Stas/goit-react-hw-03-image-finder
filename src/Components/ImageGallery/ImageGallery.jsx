import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'Components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageArr, showModal }) => {
  const imageClick = image => {
    showModal(image);
  };

  return (
    <ul className={css.imageGallery}>
      {imageArr.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          imageClick={imageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// --------------------------- PropTypes ----------------------

ImageGallery.propTypes = {
  imageArr: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  showModal: PropTypes.func.isRequired,
};
