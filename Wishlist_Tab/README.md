## Wishlist Tab

The wishlist tab feature is inspired by the Zara wishlist tab that is displayed on the cart page. The cart page becomes a tabbed view, with the "Shopping bag" and "Wishlist" tab conditionally rendering the contents of the user's shopping bag or wishlist depending on which tab is selected.

## Instructions to preview the code

1. Copy the code in the index.js file in the Wishlist_Tab folder.
2. Navigate to the cart page.
3. Open the developer console and paste the code in the console
* If the cart is empty, the tabs won't show
* If the cart is not empty, then the tabs will show
4. Clicking on the Shopping bag tab will display the content of the shopping bag
5. Clicking on the Wishlist tab will display the contents of the wishlist.

## Handling different states and edge cases
#### 1. Handling locales and translations
As these changes, whether they are AB tested or not, will likely need to be rolled out across locales, we need to ensure that we have the relevant translations per locale. 

To demonstrate this, I've included the translations for EN, FR and DE. You should be able to run the same code on FR and DE and see the relevant translations for the tabs and wishlist view.

#### 2. The number of items in the shopping bag tab decrements / increments
As the user can edit the contents of their cart on the cart page (add or remove items etc.), we need to ensure that the number displayed in the shopping bag tab increments or decrements based when the user adjusts the items in their cart. I have handled this case, and the number should adjust according to the user actions.

#### 3. Handling the "empty" and "filled" state for the wishlist tab view
As the user may or may not have items in their wishlist, we need to conditionally render the contents of the tab view. To demonstrate this, I have mirrored what is currently displayed on the separate AllSaints wishlist page based on these 2 states.
* Empty state: The user will see the message "Your wish list is empty.", with the promo module displayed underneath. This is what they would see on the wishlist page.
I think this could be improved upon, as it currently doesn't feel like there is a natural continuation in the journey. For example, we could add a clear CTA that would encourage the user to continue their session.
* Non-empty state: The user sees a message reminding them that their wishlist items are not permanently saved unless they login or register. The login / register buttons are then displayed below. The wishlist items are represented by a grey rectangle for demonstration purposes (there is no access to wishlist item details on the client).

## Iterations and improvements
1. Add analytics tracking if / where necessary e.g. to track tab clicks.
2. Align on and improve design of the contents of the wishlist tab view. The current empty state of the wishlist view feels like a dead end in the user journey, as their is now clear CTA.  This could be iterated on, by increasing the prominence / visibility of a CTA, or displaying a recommendations module. By adding PDP entry points on the cart, we could potentially increase A2B rate and CVR, as an increase in PDP views could correlate with an increase in key metrics (based on my past experience).