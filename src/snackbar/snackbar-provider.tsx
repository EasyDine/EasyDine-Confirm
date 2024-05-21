import React, { useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";
import { SnackbarContext } from "./snackbar-context";

type SnackbarSeverity = "success" | "info" | "warning" | "error";

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<SnackbarSeverity>("success");

  const showSnackbar = (
    newMessage: string,
    newSeverity: SnackbarSeverity = "success"
  ) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const hideSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={hideSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        style={{ zIndex: 9999 }}
      >
        <Alert
          severity={severity}
          sx={{
            width: "100%",
            fontSize: "1.5rem",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
