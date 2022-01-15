import { RenderFunction } from "vue";

export interface ProjectFeature {
  id: number;
  icon: RenderFunction;
  title: string;
  description: string;
}

export interface DisplayedProject {
  header: string;
  description: string;
  image: string;
  link?: string;
  features?: ProjectFeature[];
}
