import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import $ from "jquery";
import { useEffect, useState, useRef } from "react";


export const SideBar = (props) => {

    const windowWidth = useRef(window.innerWidth);

    let [width, setWidth] = useState(windowWidth.current);
    var handleMenuPosition = function (value) {
        console.log("value", value)
        $("#" + value).toggle();


    };



    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(window.innerWidth.current)
            console.log("change width from the state object" + width);
            console.log("current width : " + window.innerWidth.current)
            let screenWidth = width;

            if (width <= 991) {

                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                    $('.fixed-content-box').removeClass('active');
                    $('.hamburger').show();
                } else {
                    $('.menu-tabs .nav-link').removeClass('open');
                    $(this).addClass('open');
                    $('.fixed-content-box').addClass('active');
                    $('.hamburger').hide();
                }
                //$('.fixed-content-box').toggleClass('active');


                $('.fixed-content-box').removeClass('active');
                $('.hamburger').removeClass('is-active');
                $('#main-wrapper').removeClass('menu-toggle');
                $('.hamburger').show();

            }


        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
        console.log("change width " + width);
        // clean up function
        console.log("current width : " + window.innerWidth)
        let screenWidth = width;

        if (width <= 991) {

            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.fixed-content-box').removeClass('active');
                $('.hamburger').show();
            } else {
                $('.menu-tabs .nav-link').removeClass('open');
                $(this).addClass('open');
                $('.fixed-content-box').addClass('active');
                $('.hamburger').hide();
            }
            //$('.fixed-content-box').toggleClass('active');


            $('.fixed-content-box').removeClass('active');
            $('.hamburger').removeClass('is-active');
            $('#main-wrapper').removeClass('menu-toggle');
            $('.hamburger').show();

        }
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])




    return (
        <div className="deznav ">

            <div className="deznav-scroll mm-active">
                <ul className="metismenu mm-show" id="menu" >
                    {
                        props.themeData.map((section, i) =>
                            <>
                                <li className="menu-title" >{section.title}</li>


                                {
                                    section.option.map((item, j) =>
                                        <>
                                            {
                                                item.subItem.length != 0 ?
                                                    (

                                                        <li className="">
                                                            <a className="has-arrow " id="item" onClick={() => handleMenuPosition(item.name)} href="#" aria-expanded="false" >
                                                                <div className="menu-icon">
                                                                    {item.icon}
                                                                </div>
                                                                <span className="nav-text">{item.name}</span>
                                                            </a>
                                                            {console.log(j)}
                                                            <ul aria-expanded="false" id={item.name} className="left " Style="display: none;">
                                                                {
                                                                    item.subItem.map((subItem) =>
                                                                        <>

                                                                            <li className=""><a href={subItem.path} className="" >{subItem.name}</a></li>
                                                                        </>
                                                                    )
                                                                }
                                                                {/* <li><a href={item.path}>Dashboard Dark</a></li> */}
                                                            </ul>
                                                        </li>
                                                    ) :
                                                    (
                                                        <li><a href={item.path} className="" aria-expanded="false">
                                                            <div className="menu-icon">
                                                                {item.icon}
                                                            </div>
                                                            <span className="nav-text">{item.name}</span>
                                                        </a>
                                                        </li>
                                                    )

                                            }

                                        </>
                                    )
                                }



                            </>
                        )
                    }

                </ul>
            </div>
        </div>
    );
}