import { Overlay, ModalCard } from './Modal.styled';
import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  return (
    <Overlay>
      <ModalCard>
        <img src="" alt="" />
      </ModalCard>
    </Overlay>
  );
};

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
