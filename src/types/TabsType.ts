import { ReactElement } from "react";

export interface tabsType {
  id: string | number;
  title: string;
  component: ReactElement;
  subheader?: string | number;
}
