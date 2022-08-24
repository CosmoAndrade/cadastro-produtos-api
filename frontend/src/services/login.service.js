export class LoginService {
    static logged = false;
    static setLogged = (value) => {
        this.logged = value
    }

    static isLogged = () => this.logged
}