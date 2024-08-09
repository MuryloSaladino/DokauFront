import { Dayjs } from "dayjs";

export type TUser = {
    username: string;
    fullname: string;
    email: string;
    birthdate: string | Dayjs;
}