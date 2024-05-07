export class Sidebar {
    getBurgerMenuButton(){
        return cy.get('#react-burger-menu-btn');
    }

    clickBurgerMenuButton(){
        this.getBurgerMenuButton().click();
    }

    getLogoutButton(){
        return cy.get('#logout_sidebar_link');
    }

    clickLogoutButton(){
        this.getLogoutButton().click();
    }
}

export default new Sidebar();