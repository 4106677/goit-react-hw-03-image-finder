import { GlobalStyle } from './GlobalStyles';
import ImageGallery from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Div } from './App.styled';
import { Component } from 'react';

import fetchImages from '../api/api';

export class App extends Component {
  state = {
    value: '',
    pageNumber: 1,
    images: [],
    status: 'idle',
    error: null,
    showModal: false,
    largeImageURL: '',
    imageAlt: '',
  };

  submitSearch = ({ query }) => {
    // console.log(fetchImages());

    this.setState({
      value: query,
      pageNumber: 1,
      images: [],
    });
    console.log(this.state);
  };

  getImages = () => {
    const { value, pageNumber } = this.state;

    fetchImages(value, pageNumber)
      .then(res =>
        this.setState(({ images, pageNumber }) => ({
          images: [...images, ...res],
          status: 'resolved',
          pageNumber: pageNumber + 1,
        }))
      )

      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  componentDidUpdate(_, prevState) {
    const prevValue = prevState.value;
    const nextValue = this.state.value;

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending' });
      this.getImages();
    }
  }

  render() {
    const { error, images, value, status } = this.state;

    return (
      <Div>
        <Searchbar onSubmit={this.submitSearch} />
        <ImageGallery
          images={images}
          error={error}
          value={value}
          status={status}
        />

        <GlobalStyle />
      </Div>
    );
  }
}
