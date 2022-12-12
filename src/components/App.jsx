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
    // console.log(fetchImages());

    this.setState({
      value: query,
      pageNumber: 1,
      images: [],
    });
    // console.log(this.state);
  };

  getImages = () => {
    const { value, pageNumber } = this.state;

    fetchImages(value, pageNumber)
      .then(res => {
        this.setState(({ images, pageNumber }) => ({
          images: [...images, ...res.hits],
          status: 'resolved',

          // pageNumber: pageNumber + 1,
          // if (pageNumber < Math.ceil(totalHits / 12)) {}
        }));
        // console.log(Math.ceil(res.totalHits / 12));
        // console.log(pageNumber);
        if (pageNumber < Math.ceil(res.totalHits / 12)) {
          // console.log('ok');
          this.setState(({ showBtn }) => ({
            showBtn: true,
          }));
        }
      })

      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  onLoadMore = async () => {
    await this.setState(({ pageNumber, showBtn }) => ({
      pageNumber: pageNumber + 1,
      showBtn: false,
    }));
    await this.getImages();
  };

  componentDidUpdate(_, prevState) {
    const prevValue = prevState.value;
    const nextValue = this.state.value;

    // if (prevValue !== nextValue) {
    //   this.setState({ status: 'pending' });
    //   this.getImages();
    // }

    console.log(prevValue);

    if (
      prevState.pageNumber !== this.state.pageNumber ||
      prevValue !== this.state.value
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

  // showBtnToggle = () => {this}

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
