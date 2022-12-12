import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Loader from 'components/Loader/Loader';

// import { Button } from 'components/Button/Button';

export default class ImageGallery extends Component {
  handleImageClick = (imageURL, imageALT) => {
    this.props.onClick(imageURL, imageALT);
  };

  render() {
    const { status, error, images } = this.props;

    if (status === 'pending') {
      return Loader();
    }
    if (status === 'rejected') {
      Report.info(error.message, '', 'Okay');
    }
    if (status === 'resolved' && images.length !== 0) {
      return (
        <>
          <Gallery>
            {images.map(({ id, tags, webformatURL, largeImageURL, status }) => (
              <ImageGalleryItem
                key={webformatURL}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={this.handleImageClick}
                status={status}
              />
            ))}
          </Gallery>
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  status: PropTypes.string.isRequired,

  onClick: PropTypes.func.isRequired,
};
