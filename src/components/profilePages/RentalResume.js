import React, { Component } from 'react';
import dayjs from 'dayjs';


//redux
import { connect } from 'react-redux';

class RentalResume extends Component {
     
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [name]: value
            }
        }, () => console.log(this.state))
    }
     render() {
        let { userName, createdAt, user, loading, popup, errors} = this.props;
        return (
            <div className='edit-profile'>
            <div className='content-header'>
                <h1>
                    Rental Resume
                </h1>
                <span>Joined {dayjs(createdAt).format('MMM DD, YYYY')}</span>
            </div>
            <div className='content-body'>
                <div className='body-left'>
                        <span>{userName}</span>
                        <span>Renter in {user.credentials.location}</span>
                        <span>Edit Profile settings</span>
                </div>
                <div className='body-right'>
                    <form>
                        <div>
                                <label for='moveInDate'>Move-In Date</label>
                        <input name='moveInDate' id='moveInDate' type='text' placeholder='within next week? within next month?'  />
                        </div>
                        <div>
                                <label for='moveFrom'>Moving From {errors !== null ? (<span className='error-helper'>{errors.fullName}</span>) : null }</label>
                        <input name='moveFrom' onChange={this.handleChange} id='name' type='text' placeholder='your current zip code' />
                        </div>
                        <div>
                        <label for='tenants'>Tenants {errors !== null ? (<span className='error-helper'>{errors.phone}</span>) : null }</label>
                        <input name='tenants' onChange={this.handleChange} id='tenant' type='text' placeholder='1 adult? 2 adults? 1 kid?' />
                        </div>
                        <div>
                        <label for='pets'>Pets {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='pets' onChange={this.handleChange} id='pets' type='text' placeholder='How many pets will you own?' />
                            </div>
                            <div>
                        <label for='smoke'>Smoking {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='smoke' onChange={this.handleChange} id='smoke' type='text' placeholder='Do you smoke?' />
                            </div>
                            <div>
                        <label for='income'>Yearly Income (all tenants) {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='income' onChange={this.handleChange} id='income' type='text' placeholder='combined annual income' />
                        </div>
                       
                            <div>
                        <label for='credit'>Credit Range {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='credit' onChange={this.handleChange} id='credit' type='text' placeholder='example: 600-650' />
                            </div>
                            <div>
                        <label for='employer'>Employer {errors !== null ? (<span className='error-helper'>{errors.location}</span>) : null }</label>
                            <input name='employer' onChange={this.handleChange} id='employer' type='text' placeholder='Name of employer' />
                            </div>
                            <div id='resume-submit'>
                            <button  type='submit'>{loading ? (<i className="fas fa-circle-notch fa-spin"></i>) :(<span>Save Rental Resume</span>)}</button>
                            </div>
                    </form>
                </div>
            </div>

        </div>
        )
    }
 }



const mapStateToProps = (state) => ({
    userName: state.user.credentials.email,
    createdAt: state.user.credentials.createdAt,
    user: state.user,
    loading: state.UI.loading,
    errors: state.UI.errors,
    popup: state.UI.popup
});



export default connect(mapStateToProps)(RentalResume);
