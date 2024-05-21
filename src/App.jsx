import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReservationInfo from "./components/reservation-info/Reservation-info";
import { SnackbarProvider } from "./snackbar/snackbar-provider";

function App() {
  return (
    <Router>
      <SnackbarProvider>
        <Routes>
          <Route path="/:token" element={<ReservationInfo />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
