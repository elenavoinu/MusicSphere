import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred. </p>
                <p>
                    <i>{`${error.status || ''} ${error.statusText || null} ${error.message || ''}`}</i>
                </p>
                <p>
                    <i>{`${error.data || ''}`}</i>
                </p>
            </div></>
    );
}