import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags } = this.props;

    return (
      <Item key={id}>
        {/* {console.log(this.props)} */}

        <Image src={webformatURL} alt={tags} />
      </Item>
    );
  }
}
