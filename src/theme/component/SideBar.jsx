import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons';
export const SideBar = (props) => {


    return (
        <div className="deznav ">
            <div className="deznav-scroll mm-active">
                <ul className="metismenu mm-show" id="menu">
                    {
                        props.themeData.map((section, i) =>
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
                                                                {item.icon}
                                                            </div>
                                                            <span className="nav-text">{item.name}</span>
                                                        </a>
                                                        <ul aria-expanded="false" className="mm-collapse mm-show left" >
                                                            {
                                                                item.subItem.map((subItem) =>
                                                                    <>
                                                                    
                                                                        <li className="mm-active"><a href={subItem.path} className="">{subItem.name}</a></li>
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