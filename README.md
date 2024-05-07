Cypress UI automated tests using this page: https://www.saucedemo.com/.

**Tests that had been already implemented ✅:**

Login section (CODE REFERENCE: FEATURE-1):

✅ Login successfully as standard user.(CODE REFERENCE: TC-1).

✅ User is not able to log in with empty username and password.(CODE REFERENCE: TC-2).

✅ User is not able to log in with empty username.(CODE REFERENCE: TC-3).

✅ User is not able to log in with empty password.(CODE REFERENCE: TC-4).


Inventory section (CODE REFERENCE: FEATURE-2):

✅ Items are sort by price Low to High. (CODE REFERENCE: TC-1).

✅ Items are sort by price High to Low. (CODE REFERENCE: TC-2).

✅ Specific card content, the first one displayed. (CODE REFERENCE: TC-3).

Side Bar options (CODE REFERENCE: FEATURE - 3).

✅ Check that Log out button works as expected. (CODE REFERENCE: TC-1).

Other sections:

**Tests to be implemented (work in progress):**

Login:
- Login successfully with other types of users.
- Login with non existing username.
- Login with non existing password.
- Login with non existing username and password.

Inventory:
- Check items are sort by A to Z.
- Check items are sort by Z to A.

Sidebar items:
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
