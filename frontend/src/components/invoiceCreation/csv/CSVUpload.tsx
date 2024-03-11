import { memo, useCallback } from "react";
import { useCSVAtom } from "./CSVInputState";

/**
 * This component is a placeholder for the CSV upload tab.
 * FIXME: Implement this component.
 */
export const CSVUpload = memo(function CSVUpload() {
  const [csv, setCSV] = useCSVAtom();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCSV(event.target.value);
    },
    [setCSV]
  );

  return (
    <textarea
      placeholder="CSV Upload"
      rows={30}
      cols={80}
      value={csv}
      onChange={handleChange}
    />
  );
});
