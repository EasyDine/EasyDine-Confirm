import "./reservation-info.css";

import infoIcon from "../../assets/icons/info-icon.svg";

import tableIcon from "../../assets/icons/table-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";
import personIcon from "../../assets/icons/person-icon.svg";

import alertIcon from "../../assets/icons/alert-icon.svg";

export default function ReservationInfo() {
  return (
    <div className="reservationContainer">
      <div className="infoContainer">
        <div className="infoHeader">
          <p className="personName">Bill Gates</p>
          <img className="infoIcon" src={infoIcon} alt="info icon" />
        </div>
        <time dateTime="04/04/2024"> 04/04/2024</time>
        <div className="reservationInfo">
          <div>
            <img src={tableIcon} alt="table icon" />
            <p>Table 4</p>
          </div>
          <div>
            <img src={clockIcon} alt="clock icon" />
            <p>04:00PM</p>
          </div>
          <div>
            <img src={personIcon} alt="person icon" />
            <p>Person 4</p>
          </div>
        </div>
        <div className="reservationStatus">
          <img className="alertIcon" src={alertIcon} alt="" />
          <p>
            Status <br></br>
            <span className="status">Pending</span>
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="reject">Reject</button>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}
