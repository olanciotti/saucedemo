Cypress UI automated tests using this page: https://www.saucedemo.com/.

**Tests that had been already implemented:**

Login section:
- Login successfully as standard user.
- User is not able to log in with empty username and password.
- User is not able to log in with empty username.
- User is not able to log in with empty password.

Inventory section:
- Items are sort by price Low to High.
- Items are sort by price High to Low.
- Specific card content, the first one displayed.

Other sections:

**Tests to be implemented:**

Login:
- Login successfully with other types of users.
- Login with non existing username.
- Login with non existing password.
- Login with non existing username and password.

Inventory:
- Check items are sort by A to Z.
- Check items are sort by Z to A.

Nav items:
- Check that Log out button works as expected.
- Check that About us button works as expected.
- Check that Reset app button works as expected.
- Check that All items works as expected.

Other sections:
- Enter to an specific item, and check the details.
- Empty cart status.
- Add one item from main page to the cart, and finish the flow.
- Add more than one item from main page to the cart, and finish the flow.
- Add one item from inventory details to the card, and finish the flow.

**Features to be implemented:**


- Configure tests to run in Github actions.
- Configure tests to run in parallel.
- Percy - Visual testing implementation.
- Implement viewports, most popular devices dimensions.
