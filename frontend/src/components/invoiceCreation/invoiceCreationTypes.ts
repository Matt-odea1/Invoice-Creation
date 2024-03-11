/**
 * Information for rendering and processing an input format
 */
export type TabInfo = {
  label: string;
  Component: React.ComponentType;
  JSONGetter: () => object | string;
  featureFlag: boolean;
  endpoint: string;
};
