## PDP Sticky Button 

Currently the sticky A2B button is only displayed on mobile and not on desktop. This change will display the sticky A2B on desktop, inspired by the design and behaviour of the sticky A2B button on PDP pages on the Chanel website.

When the user scrolls past the static A2B button, the sticky A2B button should display. When the user scrolls up the page and past the static A2B button, the sticky button should be hidden. The button should transition smoothly in.

## Instructions to preview the code

1. Copy the code in the index.js file in the PDP_Sticky_Button folder.
2. Navigate to a PDP page.
3. Open the developer console and paste the code in the console.
4. The sticky A2B button should display if you scroll the static button out of view.
5. Scrolling the static button back inside the viewport should hide the sticky button.

## Handling different states and edge cases
#### 1. Handling locales and translations
As these changes, whether they are AB tested or not, will likely need to be rolled out across locales, we need to ensure that we have the relevant translations per locale. 

To demonstrate this, I've included the translations for EN, FR and DE. You should be able to run the same code on FR and DE and see the relevant translations for the different button states ("Add to bag", "Select size").

#### 2. Triggering the appropriate behaviour on button click
A product size is not always pre-selected but the user can't A2B until they have selected a size. If a user hasn't selected a size, we should provide appropriate feedback to them to reduce cognitive load and help them recover. To demonstrate this, I've copied the current feedback from the static button. If the user hovers over the sticky button but they haven't selected a size, the button text will change to "Select size", to prompt the user to select a size.

If the user has selected a size, the sticky button test won't change, and the A2B functionality will be triggered.

#### 3. Handling pricing in the sticky A2B
To handle both full price and discounted products, we need to ensure that the pricing information is displayed clearly at all times. If the item is discounted, both the previous and discounted price will display inside of the sticky A2B.

#### 4. Handling SPA functionality and maintaining UI changes when the user selects a variation of a product
A product style could be available in multiple variations e.g. colours. The user can select different colours from the PDP and this updates the page content but doesn't trigger a page reload. As a result, the details displayed in the sticky A2B will display stale data (incorrect price, image etc.). To handle this case, the code will observe certain changes to the DOM, and will update the information in the sticky A2B to ensure that the information reflects the current product information on the page.

## Iterations and improvements
1. Add analytics tracking if / where necessary e.g. button clicks or if the user scrolls to a certain part of the page / the sticky A2B is visible. This would allow us to create a segment of users that saw the change, which is beneficial in monitoring and analysing the changes.
2. Proper feedback and error handling if an error is triggered after clicking the stick A2B. For example, we could provide improved feedback to the user if they try to A2B without selecting a size, by auto scrolling back up to the size selector where the error message is displayed.