import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Loader from 'components/Loader/Loader';

export default class ImageGallery extends Component {
  render() {
    const { status, error, images, onLoadMore } = this.props;

    if (status === 'pending') {
      return Loader();
    }
    if (status === 'rejected') {
      Report.info(error.message, '', 'Okay');
    }
    if (status === 'resolved' && images.length !== 0) {
      return (
        <Gallery>
          {images.map(({ id, tags, webformatURL, largeImageURL, status }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={this.handleImageClick}
              status={status}
            />
          ))}
        </Gallery>
      );
    }
  }
}
