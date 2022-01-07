import jwtDecode from "jwt-decode";

class Token {

    constructor(){
        this.tokenInfor = this.decodeJWTToken();
    }

    hasToken(){
        return !!localStorage.getItem('accessToken');
    }

    getToken(){
        return localStorage.getItem('accessToken');
    }

    setToken(token){
        localStorage.setItem('accessToken',token);
    }

    decodeJWTToken = () => {
        const token = this.getToken();

        if(token){
            return jwtDecode(token);
        }
        return null;
    }

    getInfor(){
        return this.tokenInfor;
    }

    

}

export default Token = new Token();