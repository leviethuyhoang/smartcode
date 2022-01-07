import Token from "./Token";

class User {

    constructor(){
        this.infor = Token.getInfor();
    }

    isLoggedIn() {
        return Token.hasToken();
    }

    isAdmin(){
        return this.infor.isAdmin;
    }

    

}


export default User = new User() ;