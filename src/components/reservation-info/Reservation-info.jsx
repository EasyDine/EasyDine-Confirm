import { useState, useEffect, useCallback } from "react";
import "./reservation-info.css";
import { useParams } from "react-router-dom";

import infoIcon from "../../assets/icons/info-icon.svg";
import tableIcon from "../../assets/icons/table-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";
import personIcon from "../../assets/icons/person-icon.svg";
import alertIcon from "../../assets/icons/alert-icon.svg";
import { useSnackbar } from "../../snackbar/snackbar-context";
import {
  getReservation,
  confirmReservation,
  rejectReservation,
} from "../../api/reservation/request";

function getFormattedDate(isoString) {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const day = date.getDate();

  const weekdayNames = ["ორშ", "სამ", "ოთხ", "ხუთ", "პორ", "შაბ", "კვ"];

  const monthNames = [
    "იან",
    "თებ",
    "მარ",
    "აპრ",
    "მაი",
    "ივნ",
    "ივლ",
    "აგვ",
    "სექ",
    "ოქტ",
    "ნოვ",
    "დეკ",
  ];

  const month = monthNames[date.getMonth()];

  const weekday = weekdayNames[date.getDay()];
  return `${day} ${weekday}, ${month} ${year}`;
}

function getFormattedTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const reservationStatusTranslations = {
  None: "არცერთი",
  Created: "შექმნილია",
  OrderingStarted: "შეკვეთის დაწყება",
  PaymentPending: "გადახდის მოლოდინშია",
  Pending: "მოლოდინშია",
  Confirmed: "დადასტურებულია",
  CheckedIn: "შემოწმებულია",
  Completed: "დასრულებულია",
  Cancelled: "გაუქმებულია",
  Denied: "უარყოფილია",
};

export default function ReservationInfo() {
  const { token } = useParams();
  const [reservation, setReservation] = useState(null);
  const { showSnackbar } = useSnackbar();

  const loadReservation = useCallback(() => {
    getReservation(token).then((response) => setReservation(response));
  }, [token]);

  useEffect(() => {
    loadReservation();
  }, [loadReservation]);

  if (!reservation) {
    return <div>Loading...</div>;
  }

  const formattedDate = getFormattedDate(reservation.from);
  const formattedFromTime = getFormattedTime(reservation.from);
  const formattedToTime = getFormattedTime(reservation.to);

  const statusInGeorgian =
    reservationStatusTranslations[reservation.statusString];

  const handleConfirmReservation = (id) => {
    confirmReservation(id)
      .then(() => {
        showSnackbar("რეზერვაცია დადასტურებულია", "success");
      })
      .catch((error) => {
        showSnackbar(error.response.data.Message, "success");
      })
      .finally(() => {
        loadReservation();
      });
  };

  const handleRejectReservation = (id) => {
    rejectReservation(id)
      .then(() => {
        showSnackbar("რეზერვაცია გაუქმებულია", "success");
      })
      .catch((error) => {
        showSnackbar(error.response.data.Message, "success");
      })
      .finally(() => {
        loadReservation();
      });
  };

  return (
    <div className="reservationContainer">
      <div className="infoContainer">
        <div className="infoHeader">
          <p className="personName">
            {reservation.customer.firstName} {reservation.customer.lastName}
          </p>
          <img className="infoIcon" src={infoIcon} alt="info icon" />
        </div>
        <time dateTime={reservation.from}>{formattedDate}</time>
        <div className="reservationInfo">
          <div>
            <img src={clockIcon} alt="clock icon" />
            <p>{reservation.customer.phoneNumber}</p>
          </div>
          <div>
            <img src={clockIcon} alt="clock icon" />
            <p>
              {formattedFromTime} - {formattedToTime}
            </p>
          </div>
          <div>
            <img src={personIcon} alt="person icon" />
            <p>{reservation.personCount} სტუმარი</p>
          </div>
          {reservation.tableNumber && (
            <div>
              <img src={tableIcon} alt="table icon" />
              <p>
                {reservation.areaName} {reservation.tableNumber}
              </p>
            </div>
          )}

          {reservation.note && (
            <div>
              <p>Note: {reservation.note}</p>
            </div>
          )}
        </div>
        <div className="reservationStatus">
          <img className="alertIcon" src={alertIcon} alt="alert icon" />
          <p>
            სტატუსი <br />
            <span className="status">{statusInGeorgian}</span>
          </p>
        </div>
      </div>
      <div className="buttons">
        <button
          className="reject"
          onClick={() => handleRejectReservation(reservation.reservationId)}
        >
          გაუქმება
        </button>
        <button
          className="confirm"
          onClick={() => handleConfirmReservation(reservation.reservationId)}
        >
          დადასტურება
        </button>
      </div>
    </div>
  );
}
