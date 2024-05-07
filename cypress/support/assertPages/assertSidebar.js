import Sidebar from "../pages/sidebar";

export class assertSidebar {
    checkLogoutButtonIsVisible(){
        Sidebar.getLogoutButton().should('be.visible').and('contain', 'Logout');
    }

}

export default new assertSidebar();