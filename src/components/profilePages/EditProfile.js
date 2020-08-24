import React, { Component } from 'react';
import dayjs from 'dayjs';
//redux
import { connect } from 'react-redux';
import { editUserDetails, getUserDetails } from '../../redux/actions/userActions';


export class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phone: '',
            location: '',
        }
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
  

    submitEditProfile = async (event) => {
        event.preventDefault();
        const { errors } = this.props;
        const userData = {
            fullName: this.state.fullName,
            phone: this.state.phone,
            location: this.state.location,
            userId: this.props.user.credentials.userId
        };

         await this.props.editUserDetails(userData);
        this.props.getUserDetails();
       
       
     }
    render() {
        let { userName, createdAt, user, loading, popup, errors} = this.props;
        return (
            <div className='edit-profile'>
            <div className='content-header'>
                <h1>
                    Edit Profile
                </h1>
                <span>Joined {dayjs(createdAt).format('MMM DD, YYYY')}</span>
            </div>
            <div className='content-body'>
                <div className='body-left'>
                    <h3>Who can see my profile?</h3>
                    <span>Your profile is private. If you have a Rental Resume, use its share setting to send it with rental inquiries. No one else will see it.</span>
                </div>
                <div className='body-right'>
                    <form onSubmit={this.submitEditProfile}>
                        <div>
                                <label for='email'>Email</label>
                        <p>{user.credentials.email}</p>
                        </div>
                        <div>
                                <label for='name'>Your full name {errors !== null ? (<span className='error-helper'>{errors.fullName}</span>) : null }</label>
                        <input name='fullName' onChange={this.handleChange} id='name' type='text' placeholder={userName} />
                        </div>
                        <div>
                        <label for='phone'>Phone {errors !== null ? (<span className='error-helper'>{errors.phone}</span>) : null }</label>
                        <input name='phone' onChange={this.handleChange} id='phone' type='tel' placeholder='###-###-####' />
                        </div>
                        <div>
                        <label for='location'>Location {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='location' onChange={this.handleChange} id='location' type='text' placeholder='Where do you live?' />
                        </div>
                        <div id='profile-submit'>
                            <button onClick={this.submitEditProfile} type='submit'>{loading ? (<i className="fas fa-circle-notch fa-spin"></i>) :(<span>Save Profile</span>)}</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        )
    }
}


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



export default connect(mapStateToProps, mapActionsToProps)(EditProfile);
