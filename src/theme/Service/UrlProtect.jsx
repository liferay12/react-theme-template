import React from 'react'
import { useEffect } from "react";
export const UrlProtect = (props) => {
    const { Component } = props;
    useEffect(() => {
        let isLogin = localStorage.getItem("isLogin");

    });

    return (
        <div>

            <Component />
        </div>
    )
}
