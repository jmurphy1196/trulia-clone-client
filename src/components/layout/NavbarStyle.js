import styled from 'styled-components';

export const NavWrapper = styled.nav`
position: fixed;

width: 100%;
height: 60px;
background-color: #fff;
z-index: 9995;
border-bottom: solid rgba(0,0,0,0.1) 1px;
#mobile:hover{
    background-color: white;
}

.hamburger-icon{
    position: relative;
    margin-right: 2rem;
    &:hover{
        background-color: white;
    }
}
.fa-bars{
    font-size: 1.2rem;
    color: #008080;
    &:hover{
       
    }
}

.logo{
    float: left;
    height: 35px;  
    padding:  10px 30px;
    font-size: 1.4em;
    line-height: 40px;
    font-weight: bold;
}

ul{
    margin: 0;
    padding: 0;
    float: left;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
li > h4{
  
 padding: 10px;

  
  
}
ul > li{
  margin-left: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 10%;
  flex-direction: column;
}
ul > li:hover{
    background-color: #008080;
    
    cursor: pointer;
    & h4.main-btn{
        color: white;
    }
    & .nav-sub{
        display: flex;
        
        
        
    }
    & .nav-content{
        background-color: white;
        border-radius: 5%;
        border: solid rgba(0,0,0,0.1) 2px;
        
    }
    & .nav-content-rent{
        background-color: white;
        border-radius: 5%;
        border: solid rgba(0,0,0,0.1) 2px;
    }

  
}
@media screen and (max-width: 900px) {
         #left-menu{
             display: none !important;
         }
         .right-menu > li{
            display: none;
         }
         #mobile{
             display: flex !important;
         }
}

.right-menu{
   float: right;
}
.login-btn{
    border: solid rgba(0,0,0,0.1) 2px;
    border-radius: 5%;
    margin-right: 20px;
}
.login-btn:hover{
    background-color: rgba(0,0,0,0.1);
    & h4{
        color: black;
    }
}
.logged-btn:hover > h4{
    color: white;
}
.nav-sub > ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;



}
.nav-sub{
    display: none;
}
.nav-sub > ul > li > h4{
  text-align: left;
  font-weight: normal;

  
}
.nav-sub > ul > li{
    
}
.nav-content{
    position: absolute;
    top: 60px;
    width: 12rem;
    overflow: hidden;
    left: 8.5rem;

}
.nav-content-rent{
    position: absolute;
    top: 60px;
    width: 12rem;
    overflow: hidden;
    left: 13rem;

}
`;