import { TabsProps, Tabs, Tab, Box, Button } from "@mui/material";
import { memo, useState, useCallback, useEffect } from "react";
import { OptionalComponent } from "../utils/OptionalComponent";
import { TabIndex, TAB_INFO } from "./invoiceCreationConstants";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
  BACKEND_PORT,
  LOCAL_IP,
  SERVER_IP,
} from "../../../../interface/interface";

/**
 * Top-level component for the invoice creation feature.
 */
export const InvoiceCreator = memo(function InvoiceCreator() {
  const [tab, setTab] = useState<TabIndex>(0);
  const [connected, setConnected] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange: NonNullable<TabsProps["onChange"]> = useCallback(
    (_event, newValue) => {
      setTab(newValue);
    },
    []
  );

  // Ping alive every second
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking connection");
      axios
        .get("http://localhost:4000/alive", {})
        .then(() => {
          if (!connected) {
            setConnected(true);
            enqueueSnackbar("Connected to creation API!", {
              variant: "success",
            });
          }
        })
        .catch(() => {
          if (connected) {
            setConnected(false);
            enqueueSnackbar("Disconnected from creation API!", {
              variant: "error",
            });
          }
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [connected, enqueueSnackbar]);

  const handleSubmit = useCallback(
    (IP: string) => () => {
      const { JSONGetter, endpoint } = TAB_INFO[tab];
      const invoice = JSONGetter();

      axios
        .post("http://" + IP + ":" + BACKEND_PORT + endpoint, {
          invoice,
        })
        .then((response) => {
          // Create a blob from the response data and download it
          const blob = new Blob([response.data], { type: "application/xml" });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Invoice.xml");
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(() => {
          enqueueSnackbar("Failed to create invoice!", {
            variant: "error",
          });
        });
    },
    [tab, enqueueSnackbar]
  );

  return (
    <>
      <Tabs onChange={handleChange} value={tab} variant="fullWidth">
        {Object.values(TAB_INFO)
          .filter(({ featureFlag }) => featureFlag)
          .map(({ label }, index) => (
            <Tab key={index} label={label} />
          ))}
      </Tabs>
      <Box height={500} overflow="auto">
        {Object.values(TAB_INFO)
          .filter(({ featureFlag }) => featureFlag)
          .map(({ Component }, index) => (
            <OptionalComponent key={index} show={index === tab}>
              <Component />
            </OptionalComponent>
          ))}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box width="48%">
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(LOCAL_IP)}
          >
            Submit Local
          </Button>
        </Box>
        <Box width="48%">
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(SERVER_IP)}
          >
            Submit Server
          </Button>
        </Box>
      </Box>
    </>
  );
});
