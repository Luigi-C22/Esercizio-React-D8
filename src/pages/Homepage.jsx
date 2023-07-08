import React, { useState } from "react";
import MyNav from '../components/main/MyNav';
import LatestRelease from '../components/main/LatestRelease';
import Welcome from '../components/main/Welcome';
import MyFooter from '../components/main/MyFooter';

const Homepage = () => {
    const [query, setQuery] = useState('');
    return (
        <>
        <MyNav query={query} setQuery={setQuery} />
        <Welcome />
        <LatestRelease query={query} />
        <MyFooter />
        </>
    );
};

export default Homepage; 