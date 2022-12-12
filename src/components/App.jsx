import { GlobalStyle } from './GlobalStyles';
import ImageGallery from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Div } from './App.styled';
import { Component } from 'react';
import Modal from './Modal/Modal';

import fetchImages from '../api/api';
import { Button } from './Button/Button';

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
    showBtn: false,
  };

  submitSearch = ({ query }) => {
    this.setState({
      value: query,
      pageNumber: 1,
      images: [],
    });
  };

  getImages = () => {
    const { value, pageNumber } = this.state;

    fetchImages(value, pageNumber)
      .then(res => {
        this.setState(({ images, pageNumber, showBtn }) => ({
          images: [...images, ...res.hits],
          status: 'resolved',
          showBtn: pageNumber < Math.ceil(res.totalHits / 12),
        }));
      })

      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  onLoadMore = async () => {
    await this.setState(({ pageNumber, showBtn }) => ({
      pageNumber: pageNumber + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const prevValue = prevState.value;
    const nextValue = this.state.value;

    if (
      prevState.pageNumber !== this.state.pageNumber ||
      prevValue !== nextValue
    ) {
      this.setState({ status: 'pending' });
      this.getImages();
    }
  }

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, imageAlt: alt });

    this.modalToggle();
  };

  modalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      status,
      error,
      images,
      largeImageURL,
      imageAlt,
      showModal,
      showBtn,
    } = this.state;

    return (
      <Div>
        <Searchbar onSubmit={this.submitSearch} />
        <ImageGallery
          images={images}
          error={error}
          status={status}
          onLoadMore={this.onLoadMore}
          onClick={this.onOpenModal}
        />
        {showBtn && <Button onLoadMore={this.onLoadMore} />}

        {showModal && (
          <Modal
            src={largeImageURL}
            alt={imageAlt}
            onCloseModal={this.modalToggle}
          />
        )}
        <GlobalStyle />
      </Div>
    );
  }
}
