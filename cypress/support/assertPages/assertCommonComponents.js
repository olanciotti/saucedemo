import commonComponents from "../pages/commonComponents";

export class assertCommonComponents {
    checkSwagLabsLogoIsVisible(){
        ('***Check SwagLabs Logo is Visible****')
        commonComponents.getSwagLabsLogo().should('be.visible').and('contain', 'Swag Labs');
    }

    checkUrlContent(url){
        cy.log('***Check Url Content****')
        cy.url().should('eq', url);
    }
}


export default new assertCommonComponents();