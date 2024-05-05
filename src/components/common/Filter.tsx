import { FormEvent } from 'react';
import { FilterProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface FormElements extends HTMLFormControlsCollection {
  searchTerm: HTMLInputElement;
}

interface searchTerm extends HTMLFormElement {
  readonly elements: FormElements;
}

const Filter = ({ log, filteredPosts, setKeyword }: FilterProps) => {
  log('Hello from', 'Filter component');

  //   const handleChange = (e: any) => {
  //     setKeyword(e.target.value);
  //   };

  const handleSubmit = (e: FormEvent<searchTerm>) => {
    e.preventDefault();
    const term = e.currentTarget.elements.searchTerm.value;
    setKeyword(term);
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input
          id='searchTerm'
          // onChange={handleChange}
          type='text'
          placeholder='Filter list by user name'
        />
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
        </button>
      </form>
      <span>Showing {filteredPosts?.length} posts</span>
    </div>
  );
};

export default Filter;
