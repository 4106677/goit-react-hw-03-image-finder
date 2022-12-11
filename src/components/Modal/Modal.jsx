import PropTypes from 'prop-types';
import { Overlay, ModalCard } from './Modal.styled';

import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalCard>
          <img src={src} alt={alt} />
        </ModalCard>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
