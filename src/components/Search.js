import React from 'react';
import Sidebar from './Sidebar';
import SearchMiddleware from './middleware/SearchMiddleware';

export default function Search(){
    return (
        <>
            <Sidebar />
            <SearchMiddleware />
        </>
    )
}