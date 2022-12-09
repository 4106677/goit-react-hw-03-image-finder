import { GlobalStyle } from './GlobalStyles';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Div } from './App.styled';

export const App = () => {
  return (
    <Div>
      <Searchbar />
      <ImageGallery />
      <GlobalStyle />
    </Div>
  );
};
