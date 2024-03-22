import Login from "../pages/login";

export class assertLogin {
    checkSwagLabsLogoIsVisible(){
        Login.getSwagLabsLogo().should('be.visible').and('contain', 'Swag Labs');
    }

    checkUsernameError(){
        Login.getUsernameInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)').and('class', 'input_error');
    }

    checkPasswordError(){
        Login.getPasswordInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)').and('class', 'input_error');
    }

    checkErrorMessageDisplays(error){
        Login.getErrorMessage().should('contain', error).and('be.visible');
    }
}

export default new assertLogin();