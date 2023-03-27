import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons';
import $ from "jquery";
// import {useWindowDimensions} from 'react-native';



export const SideBar = (props) => {

    // var screenWidth = $( window ).width();
    // var handleDropdown = function () {
    //     $('#main-wrapper').toggleClass("menu-toggle");

    //     $(".mm-collapse").toggleClass("is-active");
      
    // }

    // var handleMetisMenu = function() {
	// 	if($('#menu').length > 0 ){
	// 		$("#menu").metisMenu();
	// 	}
	// 	$('.metismenu > .mm-active ').each(function(){
	// 		if(!$(this).children('ul').length > 0)
	// 		{
	// 			$(this).addClass('active-no-child');
	// 		}
	// 	});
	// }

    var handleMenuPosition = function(){
        
            $("#submenu li").toggle();
        
    }; 


    // var handleMenuPosition = function(){
		
	// 	if(screenWidth > 1024){
	// 		$(".metismenu  li").unbind().each(function (e) {
	// 			if ($('ul', this).length > 0) {
	// 				var elm = $('ul:first', this).css('display','block');
	// 				var off = elm.offset();
	// 				var l = off.left;
	// 				var w = elm.width();
	// 				elm = $('ul:first', this).removeAttr('style');
	// 				//var docH = $("body").height();
	// 				var docW = $("body").width();
					
	// 				if($('html').hasClass('rtl')){
	// 					var isEntirelyVisible = (l + w <= docW);	
	// 				}else{
	// 					isEntirelyVisible = (l > 0)?true:false;	
	// 				}
						
	// 				if (!isEntirelyVisible) {
	// 					$(this).find('ul:first').addClass('left');
	// 				} else {
	// 					$(this).find('ul:first').removeClass('left');
	// 				}
	// 			}
	// 		});
	// 	}
	// }

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
                                                            <a className="has-arrow " id="item" onClick={handleMenuPosition}  href="javascript:void(0);" aria-expanded="false" >
                                                                <div className="menu-icon">
                                                                    {item.icon}
                                                                </div>
                                                                <span className="nav-text">{item.name}</span>
                                                            </a>
                                                            <ul aria-expanded="false" id="submenu"  className="left " Style="">
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