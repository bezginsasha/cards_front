import parseCookie from "./parseCookie";
import {setName} from "../state/currentUserSlice";

function setCurrentUserFromCookies(dispatch) {
	var allCookie = parseCookie(document.cookie);
	var username = allCookie.username;
	if (username) {
		dispatch(setName(username));
	}
}

export default setCurrentUserFromCookies
