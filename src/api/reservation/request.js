import api from "../api";

export async function getReservation(token) {
  try {
    const response = await api.get(`/Confirm/Reservation/${token}`);
    return response.data;
  } catch (error) {
    console.error("Error getting reservation:", error);
    throw error;
  }
}

export async function confirmReservation(reservationId) {
  try {
    const response = await api.post(
      `/Confirm/Reservation/Confirm/${reservationId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error confirming reservation:", error);
    throw error;
  }
}

export async function rejectReservation(reservationId) {
  try {
    const response = await api.post(
      `/Confirm/Reservation/Reject/${reservationId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error rejecting reservation:", error);
    throw error;
  }
}
