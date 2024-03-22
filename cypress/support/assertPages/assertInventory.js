import Inventory from "../pages/inventory";

export class assertInventory {
    checkProductTitleVisible() {
        Inventory.getProductTitle().should("be.visible");
    }

    checkItemsNumber(numberOfItems){
        Inventory.getItems().should('have.length', numberOfItems);
    }

    checkSauceLabsBackpackItemContent() {
        this.checkSauceLabsBackpackLabel();
        this.checkSauceLabsBackpackImage();
        this.checkSauceLabsBackpackDescription();
        this.checkSauceLabsBackpackPrice();
        this.checkSauceLabsBackpackAddToCardButton();
    }

    checkSauceLabsBackpackLabel(){
        Inventory.getItemLabel().eq(0).should('contain', 'Sauce Labs Backpack');
    }

    checkSauceLabsBackpackImage(){
        Inventory.getItemImage().eq(0).should('be.visible');
    }

    checkSauceLabsBackpackDescription(){
        Inventory.getItemDescription().eq(0).should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').and('be.visible');
    }

    checkSauceLabsBackpackPrice(){
        Inventory.getItemPrice().eq(0).should('contain', '$29.99').and('be.visible');
    }

    checkSauceLabsBackpackAddToCardButton(){
        Inventory.getSauceLabsAddToCardButton().eq(0).should('be.visible');
    }

    checkPriceIsSortLowToHigh(){
        cy.get('.inventory_item_price').then(($price)=>{
            const text = Cypress._.map($price, (el) => el.innerText);
            const justDigits = (str) => str.replace(/[^0-9.]/g, '');
            const values = text.map(justDigits);
            const sorted = Cypress._.sortBy(values, (value) => parseFloat(value));
            expect(sorted).to.deep.equal(values);
        })
    }

    checkPriceIsSortHighToLow(){
        cy.get('.inventory_item_price').then(($price)=>{
            const text = Cypress._.map($price, (el) => el.innerText);
            const justDigits = (str) => str.replace(/[^0-9.]/g, '');
            const values = text.map(justDigits);
            const numbers = values.map(parseFloat);
            const sorted = Cypress._.sortBy(numbers, [function (o) { return o.obj; }]);
            expect(sorted).to.deep.equal(numbers);
        })
    }
}

export default new assertInventory();
