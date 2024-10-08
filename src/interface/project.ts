import { UserProps } from "./user";

export interface ProjectProps {
  id: number;
  banner_image: string;
  code: string;
  deadline: string;
  description: string;
  status: number;
  title: string;
  user: UserProps;
}
