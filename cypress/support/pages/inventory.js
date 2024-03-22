
export class Inventory {
    
    getProductTitle(){
        return cy.contains('.title', 'Products');
    }

    getItems(){
        return cy.get('.inventory_item');
    }

    getItemLabel(){
        return cy.get('.inventory_item_label')
    }

    getItemImage(){
        return cy.get('.inventory_item_img');
    }

    getItemDescription(){
        return cy.get('.inventory_item_desc');
    }

    getItemPrice(){
        return cy.get('.inventory_item_price');
    }
    
    getSauceLabsAddToCardButton(){
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }

    getAddToCartButton(){
        return cy.get('.btn_primary');
    }

    orderByPriceLowToHigh(){
        cy.get('select').select('lohi');
    }

    orderByPriceHighToLow(){
        cy.get('select').select('hilo');
    }
}

export default new Inventory();