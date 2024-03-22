import commonComponents from "../pages/commonComponents";

export class assertCommonComponents {
    checkSwagLabsLogoIsVisible(){
        commonComponents.getSwagLabsLogo().should('be.visible').and('contain', 'Swag Labs');
    }
}

export default new assertCommonComponents();