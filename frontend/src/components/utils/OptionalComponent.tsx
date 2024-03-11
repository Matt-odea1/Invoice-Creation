import { memo } from "react";

type OptionalComponentProps = {
  children: React.ReactNode;
  show: boolean;
};

export const OptionalComponent = memo(function OptionalComponent({
  children,
  show,
}: OptionalComponentProps) {
  return show ? children : null;
});
