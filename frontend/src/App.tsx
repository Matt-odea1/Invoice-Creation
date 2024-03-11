import { memo } from "react";
import { InvoiceCreator } from "./components/invoiceCreation/InvoiceCreator";
import { SnackbarProvider } from "notistack";

/**
 * Top-level component for the application.
 */
export const App = memo(function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <InvoiceCreator />
    </SnackbarProvider>
  );
});
