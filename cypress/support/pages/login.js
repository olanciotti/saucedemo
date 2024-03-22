export class Login {
    getSwagLabsLogo(){
        return cy.get('.login_logo');
    }

    getUsernameInput(){
        return cy.get('#user-name');
    }

    completeUsername(username){
        this.getUsernameInput().type(username);
    }

    getPasswordInput(){
        return cy.get('#password');
    }

    completePassword(password){
        this.getPasswordInput().type(password);
    }

    getLoginButton(){
        return cy.get('#login-button');
    }

    clickLogin(){
        this.getLoginButton().click();
    }

    getErrorMessage(){
        return cy.get('[data-test="error"]');
    }
}

export default new Login();