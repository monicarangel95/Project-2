import React from "react";
import Header from "../components/layout/Header/Header.js";
import Row from "../components/layout/Row/Row.js";

const NoMatch = () => {
    return (
        <div className="row center">
        <Header />
        <Row>
        <h1>404 Page Not Found</h1>
        </Row>
        </div>
    );
};
export default NoMatch;
