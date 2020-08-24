import React, { Component } from 'react';
import styled from 'styled-components';

class PopUp extends Component {
    componentDidMount() {
        const popup = document.getElementById('popup');
        popup.style.transform = 'translateY(-200px)';
        
     }
    render() {
        return (
            <PopUpWrapper id='popup'>
                <div>
                    <span>Successfully updated profile!</span> <i className="fa fa-check" aria-hidden="true"></i>
                   </div>
            </PopUpWrapper>
        )
    }
 }

const PopUpWrapper = styled.div`
        position: fixed;
        z-index: 9999;
        border: solid rgba(0,0,0,0.2) 3px;
        width: 50vw;
        height: 100px;
        background-color: white;
        left: 25vw;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 4s slide ease-in;

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 60%;
            span{
                font-size: 1.6rem;
                padding-left: 1rem;
            }
            i{
                font-size: 1.6rem;
                color: green;
            }

        }
        @keyframes slide{
            0%{
                top: 0;
            }
            50%{
                top: 12rem;
            }
            100%{
                top: 0;
            }
        }

`;

export default PopUp
