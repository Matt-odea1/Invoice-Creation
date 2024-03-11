import { memo } from "react";
// @ts-expect-error -- TS cannot find declaration file for jsoneditor-react
import { JsonEditor } from "jsoneditor-react";
import ace from "brace";
import { useJSONAtom } from "./JSONInputState";

export const JSONInvoiceInput = memo(function JSONInvoiceInput() {
  const [json, setJson] = useJSONAtom();

  return (
    <JsonEditor
      mode="tree"
      history
      value={json}
      onChange={setJson}
      ace={ace}
      theme="ace/theme/github"
    />
  );
});
