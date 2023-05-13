import React from 'react';
import styled from './Search.module.scss';

const Search = ({ setSearch, updatePageNumber }) => {
        let searchBtn = (event) => {
                event.preventDefault();
        };

        return (
                <form
                        className={`${styled.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4`}
                >
                        <input 
                                onChange={(event) => {
                                        updatePageNumber(1);
                                        setSearch(event.target.value);
                                }}
                                placeholder='Search for characters'
                                className={styled.input} 
                                type='text' 
                        />
                        <button 
                                onClick={searchBtn} 
                                className={`${styled.btn} btn btn-primary fs-5`}
                        >
                                Search
                        </button>
                </form>
        );
};

export default Search;