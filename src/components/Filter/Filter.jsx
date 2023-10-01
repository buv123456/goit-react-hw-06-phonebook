import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <FilterStyled
      type="text"
      name="filter"
      onChange={e => dispatch(changeFilter(e.target.value))}
      value={filter}
      placeholder="add filter..."
    />
  );
}
