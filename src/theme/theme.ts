"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#0B1F3A" },
    secondary: { main: "#1456A0" },
    success: { main: "#13B8A6" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#18283D", secondary: "#607188" },
    divider: "#E2E8F0",
  },
  typography: {
    fontFamily: 'Arial, "Noto Sans TC", "Microsoft JhengHei", sans-serif',
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: "11px 22px", boxShadow: "none" },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
  },
});
