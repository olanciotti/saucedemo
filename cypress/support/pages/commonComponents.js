
export class assertCommonComponents {
    getSwagLabsLogo(){
        return cy.get('.app_logo');
    }
}

export default new assertCommonComponents();