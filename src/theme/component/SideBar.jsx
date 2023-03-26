import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons';
export const SideBar = (props) => {

    console.log("---------" + props.themeData.section[0].title)
    return (
        <div className="deznav ">
            <div className="deznav-scroll mm-active">
                <ul className="metismenu mm-show" id="menu">
                    {
                        props.themeData.section.map((section, i) =>
                            <>
                                <li className="menu-title" >{section.title}</li>


                                {
                                    section.option.map((item, j) =>
                                        <>
                                            {
                                                item.subItem.length != 0 ?
                                                    (<li className="mm-active">
                                                        <a className="has-arrow " href=" " aria-expanded="false">
                                                            <div className="menu-icon">
                                                                {/* <FontAwesomeIcon icon={faCoffee} /> */}

                                                            </div>
                                                            <span className="nav-text">{item.name}</span>
                                                        </a>
                                                        <ul aria-expanded="false" className="mm-collapse mm-show left" >
                                                            {
                                                                item.subItem.map((subItem) =>
                                                                    <>
                                                                        <li className="mm-active"><a href={subItem.path} className="mm-active">{subItem.name}</a></li>
                                                                    </>
                                                                )
                                                            }
                                                            {/* <li><a href={item.path}>Dashboard Dark</a></li> */}
                                                        </ul>
                                                    </li>) :
                                                    (<li><a href={item.path} className="" aria-expanded="false">
                                                        <div className="menu-icon">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="nav-text">{item.name}</span>
                                                    </a>
                                                    </li>)

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