import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

import {Link} from 'react-router-dom';

function MobileNavbar(props) {
    const { authenticated, openMobile, displayName, logoutUser, userId } = props;
    return (
        <React.Fragment>
            <div className='close-mobile' onClick={openMobile}><i className="fa fa-times" aria-hidden="true"></i></div>        
            {authenticated === true ? (
                <div className='mobile-links'>
                    <div className='mobile-user-link m'>
                        <div>
                            <span id='link'><i className="fas fa-user"></i>  {displayName}</span>
                            <div className='user-submenu'>
                                <div>   
                                    <Link to={`/profile/${userId}`}><span>Profile</span></Link>
                                    
                                </div>
                                <div>
                                    <span>Saved Homes</span>
                                </div>
                                <div>
                                    <span>Saved Searches</span>
                                </div>
                                <div>
                                    <span>Rental Resume</span>
                                </div>
                                <div>
                                    <span>Rental Applications</span>
                                </div>
                                <div>
                                    <span>Rental Payments</span>
                                </div>
                                <div>
                                    <span>My Rooms for Rent</span>
                                </div>
                                <div>
                                    <span>Notification preferences</span>
                                </div>
                                <div onClick={logoutUser}>
                                    <span>Log Out</span>
                                </div>
                            </div>
                        </div>
                        <div><i className="fa fa-angle-down user-arrow" aria-hidden="true"></i></div>
                    </div>
                    <div className='mobile-buy-link m'>
                        <div>
                            <span id=''> Buy</span>
                            <div className='buy-submenu'>
                                <div>
                                    <span>Homes for Sale</span>
                                </div>
                                <div>
                                    <span>Open Houses</span>
                                </div>
                                <div>
                                    <span>New Homes</span>
                                </div>
                                <div>
                                    <span>Recently Sold</span>
                                </div>
                            </div>
                        </div>
                        <div><i className="fa fa-angle-down buy-arrow" aria-hidden="true"></i></div>
                    </div>

                </div>) : null}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    userId: state.user.credentials.userId
});

export default connect(mapStateToProps, { logoutUser })(MobileNavbar);
