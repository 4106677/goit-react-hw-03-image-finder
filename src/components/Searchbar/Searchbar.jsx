import {
  SearchBar,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchBar>
      <SearchForm>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};
