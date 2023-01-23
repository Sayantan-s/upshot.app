import { useMemo } from "react";
import Cookies from "universal-cookie";

export const cookie = new Cookies();

export const useCookies = () => useMemo(() => cookie, []);