import { useState } from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {

  const [checked, setChecked] = useState(false);

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
          <span className={checked ? 'filter__pseudo-item_active' : 'filter__pseudo-item'}></span>
          <span className='filter__checkbox-text'>Короткометражки</span>
        </label>
  );
}

export default FilterCheckbox;