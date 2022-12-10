import PropTypes from 'prop-types';

import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  handleImageClick = () => {
    this.props.onClick(this.props.largeImageURL, this.props.tags);
  };

  render() {
    const { id, webformatURL, tags } = this.props;

    return (
      <Item key={id}>
        <Image src={webformatURL} alt={tags} onClick={this.handleImageClick} />
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
