import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [checked, setChecked] = useState(false);
  const pseudoItemClassName = `filter__pseudo-item ${checked && 'filter__pseudo-item_active'}`

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <label className='filter'>
          <input
            className='filter__checkbox'
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
          <span className={pseudoItemClassName}></span>
          <span className='filter__checkbox-text'>Короткометражки</span>
        </label>
  );
}

export default FilterCheckbox;