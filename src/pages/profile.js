import React, { Component } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs'; //used for edit profile
import PopUp from '../components/PopUp';

//profile pages
import EditProfile from '../components/profilePages/EditProfile';
import RentalResume from '../components/profilePages/RentalResume';

//redux actions
import { editUserDetails, getUserDetails } from '../redux/actions/userActions';


//redux
import { connect } from 'react-redux';
class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [name]: value
            }
        }, () => console.log(this.state))
    }
    handleNextPage = (pageNumber) => {
        switch (pageNumber) {
            case 1:
                this.setState(() => {
                    return {
                        currentPage: 1
                    }
                }); break;
            case 2: 
            this.setState(() => {
                return {
                    currentPage: 2
                }
            }); break;
            }
    }
     
 
    componentWillReceiveProps(nextProp) {
    
    }
     render() {
         let { userName, popup} = this.props;
      
         
         if (userName != undefined) {
             userName = userName.split('@')[0];
         }

        return (
            <React.Fragment>
               {popup ? <PopUp /> : null}
                <ProfileWrapper>
                    <div className='sidebar'>
                        <div className='side-header'>
                            <i className="fas fa-user"></i>
                            <p>{userName}</p>
                            <h4>Home Buyer</h4>
                        
                        </div>
                        <div className='side-link' onClick={() => this.handleNextPage(1)}>
                            <div>
                            <i className="fa fa-cog" aria-hidden="true"></i> <span> Edit Profile</span>
                            </div>
                        </div>
                        <div className='side-link' onClick={() => this.handleNextPage(2)}> 
                            <div>
                            <i className="fas fa-sticky-note"></i> <span> Rental Resume</span>
                            </div>
                        </div>
                        <div className='side-link'>
                            <div>
                            <i className="fas fa-search"></i> <span> Saved Searches</span>
                            </div>
                        </div>
                        

                    </div>  
                    <div className='content'>
                        {this.state.currentPage === 1 ? (
                            <EditProfile />
                        ) : null}
                        {this.state.currentPage === 2 ? (
                            <RentalResume />
                        ) : null}
                    </div>

                </ProfileWrapper>
            </React.Fragment>
        )
    }
 }

const ProfileWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 70px;
    width: 97vw;
    
    
    margin-left: 1.5vw;
    span{
        color: silver;
    }
    i{
        color: silver;
    }
    .fa-user{
        font-size: 2.5rem;
    }
    h1{
        font-family: 'Noto sans'
    }

    .sidebar{
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        right: 0;
        width: 12rem;
        height: 88vh;
        margin-top: 80px;
        margin-left: 1rem;
        
        .side-header{
            display: flex;
            align-items: center;
            position: relative;
            padding: 0;
            justify-content: center;
            flex-direction: column;
            height: 10rem;
            width: 100%;
           
            h4{
                padding: 0px;
                position: relative;
                bottom: 2rem;
            }
            i{
                padding: 0px;
            }

        }
    }

    .sidebar > div{
                display: flex;
                align-items: center;
                justify-content: center;
               
                padding: 0.5rem;
            
    }  
    .side-link > div{
        display: flex;
        justify-content:start;
        align-items: center;
        width: 100%;
       
        i{
            margin: 1rem;
        }
       
    } 
  
    .side-link:hover{
        cursor: pointer;
        span{
            color: black;
            transition: 0.3s ease !important;
        }
        i{
            color: black;
            transition: 0.8s ease !important;
        }
    }

    .content{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin-left: 13rem;
        width: 83vw;
        background-color: #f0f0f0;
        height: fit-content;
    }
    .edit-profile > div{
        position: relative;
        margin-left: 2rem;
    }
    .content-header{
        border-bottom: solid rgba(0,0,0,0.1) 3px;
        display: flex;
        justify-content:space-between;
        align-items: flex-end;
        span{
            position: relative;
            margin-right: 4rem;
            color: #999696 !important;
        }
    }
    .content-body{
        display: flex;
    }
    .content-body > div{
        padding: 1rem;
    }
    .body-left{
        display: flex;
        flex-direction: column;
        span{
            color: black !important
        }
        width: 30%;
    }
    .body-right{
        position: relative;
        top: 1rem;
        display: flex;
        flex-direction: column;
       
        width: 90%;
    
    }
    form > div{
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        input{
            width: 100%;
            border: none;
            padding: 0.5rem;
            margin-top: 1rem;
            
        }
    }
    #profile-submit{
        position: relative;
        margin-top: 3rem;
        border-top: solid rgba(0,0,0,0.1) 2px;
        
        button{
            position: relative;
            margin-top: 0.5rem;
           width: 8rem;
           margin-left: auto;
           height: 2rem;
           background-color: #fc5203;
           color: white;
           border: none;
           font-size: 1.1rem;
           font-family: 'Noto Sans';
           border-radius: 5%;
           &:hover{
               cursor: pointer;
               background-color: #fa7334;
           }
           span{
               color: white;
           }
           i{
               color: white;
           }
        }
    }
    .error-helper{
        font-size: 0.8rem;
        color: red;
    }
`;

const mapActionsToProps = {
    editUserDetails,
    getUserDetails
    
};

const mapStateToProps = (state) => ({
    userName: state.user.credentials.email,
    createdAt: state.user.credentials.createdAt,
    user: state.user,
    loading: state.UI.loading,
    errors: state.UI.errors,
    popup: state.UI.popup
});

export default connect(mapStateToProps, mapActionsToProps)(profile);
