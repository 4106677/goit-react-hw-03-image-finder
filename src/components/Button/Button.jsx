import { Btn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <Btn type="button" onClick={onLoadMore}>
      Load More
    </Btn>
  );
};
