import * as React from "react";
import { fromEvent } from "rxjs";
import { getAuthUser } from "../../services/authService";

const key = "__token";
const win = (window as any);

export const getAuthToken = () => {
    const token: string | null = win[key] ? win[key] : null;
    return token;
}

const authTokenObservable = fromEvent<CustomEvent<string | null>>(document, "authTokenChange");

const onAuthTokenChange = (cb: (authToken: string | null) => void) => {
    authTokenObservable.subscribe({
        next: val => {
            cb(val.detail);
        }
    });
};

interface WithAuthProps {
    cb: (props: AuthProps) => JSX.Element
}

interface WithAuthState {
    authToken: string | null;
}

class WithAuth extends React.Component<WithAuthProps, WithAuthState> {
    public constructor(props: WithAuthProps) {
        super(props);
        this.state = {
            authToken: getAuthToken()
        };
        onAuthTokenChange(value => this.setState({ authToken: value }));
    }
    public render() {
        return (
            <React.Fragment>
                {this.props.cb({ authToken: this.state.authToken })}
            </React.Fragment>
        );
    }
}

export interface AuthProps {
    authToken: string | null;
}

export function withAuth(cb: (props: AuthProps) => JSX.Element) {
    return () => <WithAuth cb={cb} />;
}

export const setAuthToken = async (token: string | null) => {
    win[key] = token;
    const res = await getAuthUser(token!);
    const authUser = await res.json();
    win.redditAuthUser = authUser;
    const authTokenChangeEvent = new CustomEvent("authTokenChange", { detail: token });
    document.dispatchEvent(authTokenChangeEvent);
};
