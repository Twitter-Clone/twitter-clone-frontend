import React from 'react';

const SearchBar = ({twitterhandle, setTwitterhandle}) => {
    return (
        <>
            <input value={twitterhandle}
                   key="random"
                   placeholder={ "Enter Twitter handle" } 
                   onChange={(e) => setTwitterhandle(e.target.value)} />
            
        </>
    )
}

export default SearchBar;