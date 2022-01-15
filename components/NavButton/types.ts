import { RenderFunction } from "vue";

interface NavBase {
  name: string;
  to?: string;
  href?: string;
}

export interface NavAction extends NavBase {
  icon: string;
}

export interface NavChild extends NavBase {
  description: string;
  icon: RenderFunction;
}

export interface NavItem extends NavBase {
  children?: NavChild[];
}
