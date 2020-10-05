import React from 'react';
import Search from "../components/layout/Search/Search.js";
import Grid from "../components/layout/Grid/Grid.js";
import Header from "../components/layout/Header/Header.js";
function Home() {
    return (
        <div>
            <Header>
                <Search />
            </Header>
            <Grid />
        </div>
    )
}
export default Home
