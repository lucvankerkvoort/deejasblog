import React from "react";
import DateContainer from "../../../Travelers/TravelerHome/DateContainer/DateContainer";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./style.css";
import API from "../../../../controller";
import Moment from "react-moment";

class Availability extends React.Component {
  state = {
    date: [new Date(), new Date()],
    availability: this.props.user.availability
  };

  handleSubmit = () => {
    console.log(this.props.user._id);
    API.pushDates(this.props.user._id, this.state.date).then(result => {
      console.log(result);
      this.setState({ availability: result.data.availability });
    });
  };

  handleChange = date => {
    this.setState({ date });
  };
  render() {
    console.log(this.state.date[0].getDay());
    return (
      <div className="calendar-body">
        <div className="calendar">
          <DateContainer onChange={this.handleChange} value={this.state.date} />
          <button onClick={this.handleSubmit} className="btn calendar-button">
            Submit
          </button>
        </div>

        <div className="available-title">
          <h3>Availability</h3>
        </div>
        <div className="availability">
          {this.state.availability.map(dates => {
            return (
              <div className="available-dates">
                {dates.date.map(result => {
                  const dateFormat = result;
                  return <Moment format="MM/DD/YYYY">{dateFormat}</Moment>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Availability;
