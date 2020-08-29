import React, { Component } from "react";
import dayjs from "dayjs";

//redux
import { connect } from "react-redux";
import { submitResume } from "../../redux/actions/userActions";

class RentalResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveInDate: "",
      movingFrom: "",
      tenants: "",
      pets: "",
      smoking: "",
      employer: "",
      income: "",
      creditRange: "",
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      () => {
        return {
          [name]: value,
        };
      },
      () => console.log(this.state)
    );
  };
  handleResumeSubmit = (event) => {
    event.preventDefault();
    const resumeData = {
      ...this.state,
    };
    this.props.submitResume(resumeData);
  };
  render() {
    let { userName, createdAt, user, loading, popup, errors } = this.props;
    return (
      <div className="edit-profile">
        <div className="content-header">
          <h1>Rental Resume</h1>
          <span>Joined {dayjs(createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div className="content-body">
          <div className="body-left">
            <span>{userName}</span>
            <span>Renter in {user.credentials.location}</span>
            <span>Edit Profile settings</span>
          </div>
          <div className="body-right">
            <form>
              <div>
                <label for="moveInDate">
                  Move-In Date{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.moveInDate}</span>
                  ) : null}
                </label>
                <input
                  onChange={this.handleChange}
                  name="moveInDate"
                  id="moveInDate"
                  type="text"
                  placeholder="within next week? within next month?"
                />
              </div>
              <div>
                <label for="movingFrom">
                  Moving From{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.movingFrom}</span>
                  ) : null}
                </label>
                <input
                  name="movingFrom"
                  onChange={this.handleChange}
                  id="name"
                  type="text"
                  placeholder="your current zip code"
                />
              </div>
              <div>
                <label for="tenants">
                  Tenants{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.tenants}</span>
                  ) : null}
                </label>
                <input
                  name="tenants"
                  onChange={this.handleChange}
                  id="tenant"
                  type="text"
                  placeholder="1 adult? 2 adults? 1 kid?"
                />
              </div>
              <div>
                <label for="pets">
                  Pets{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.pets}</span>
                  ) : null}
                </label>
                <input
                  name="pets"
                  onChange={this.handleChange}
                  id="pets"
                  type="text"
                  placeholder="How many pets will you own?"
                />
              </div>
              <div>
                <label for="smoking">
                  Smoking{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.smoking}</span>
                  ) : null}
                </label>
                <input
                  name="smoking"
                  onChange={this.handleChange}
                  id="smoking"
                  type="text"
                  placeholder="Do you smoke?"
                />
              </div>
              <div>
                <label for="income">
                  Yearly Income (all tenants){" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.income}</span>
                  ) : null}
                </label>
                <input
                  name="income"
                  onChange={this.handleChange}
                  id="income"
                  type="text"
                  placeholder="combined annual income"
                />
              </div>

              <div>
                <label for="creditRange">
                  Credit Range{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.creditRange}</span>
                  ) : null}
                </label>
                <input
                  name="creditRange"
                  onChange={this.handleChange}
                  id="creditRange"
                  type="text"
                  placeholder="example: 600-650"
                />
              </div>
              <div>
                <label for="employer">
                  Employer{" "}
                  {errors !== null ? (
                    <span className="error-helper">{errors.employer}</span>
                  ) : null}
                </label>
                <input
                  name="employer"
                  onChange={this.handleChange}
                  id="employer"
                  type="text"
                  placeholder="Name of employer"
                />
              </div>
              <div id="resume-submit">
                <button onClick={this.handleResumeSubmit} type="submit">
                  {loading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                  ) : (
                    <span>Save Resume</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.credentials.email,
  createdAt: state.user.credentials.createdAt,
  user: state.user,
  loading: state.UI.loading,
  errors: state.UI.errors,
  popup: state.UI.popup,
});

export default connect(mapStateToProps, { submitResume })(RentalResume);
