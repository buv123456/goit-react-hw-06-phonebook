import { FilterStyled } from './Filter.styled';

export function Filter({ onChangeFilter, filter }) {
  return (
    <FilterStyled
      type="text"
      name="filter"
      onChange={e => onChangeFilter(e.target.value)}
      value={filter}
      placeholder="add filter..."
    />
  );
}
