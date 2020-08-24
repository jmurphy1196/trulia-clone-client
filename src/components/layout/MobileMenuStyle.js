import styled from 'styled-components';

export const MobileNavbarWrapper = styled.nav`
        display: flex;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 1;
        right: 0;

        width: 300px;
        height: 99.5vh;
        background-color: #303030;
        overflow-y: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;
        .fa-angle-down{
            font-size: 0.9rem !important;
            transition: 0.5s ease-in-out;
        }
        span{
            color: white;
        }

        .close-mobile{
            position: absolute;
            top: 0;
            left: 1;
            right: 0;
            padding: 15px;
        
            &:hover{
                cursor: pointer;
            }

        }
        .fa{
            color: white;
            font-size: 1.2rem;
            
        }

        .mobile-links{
            display: flex;
            flex-direction: column;
            position: relative;
            top: 10vh;
        }

        .mobile-links > div > div >span{
            color: white;
        }
        .mobile-links > div{
            display: flex;
            position: relative;
            width: 290px;
            flex-direction: row;
            justify-content: space-between;
            cursor: pointer;
        }

        .mobile-links > div > div{
            padding: 25px;
        }
       .user-submenu{
           display: none;
           flex-direction: column;
           span{
               font-size: 0.9rem;
           }
    
       }
       .user-submenu > div{
           position: relative;
           margin-top: 1rem;
           margin-left: 20px;
       }
       .buy-submenu{
           display: none;
           flex-direction: column;
        span{
               font-size: 0.9rem;
           }
           div{
            position: relative;
           margin-top: 1rem;
           margin-left: 20px;
           }
       }

`;