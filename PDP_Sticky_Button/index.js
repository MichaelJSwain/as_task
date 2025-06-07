const pdp_sticky_button = {
    addCss: () => {
        const css = document.createElement('style');
        css.innerHTML = `
            .sticky-btn-container {
                display: none;
                top: -80px;
                position: fixed;
                width: 100vw;
                justify-content: center;
                background: white;
                z-index: 5;
                justify-content: space-between;
                border-bottom: 1px solid #ececec;
                border-top: 1px solid #ececec;
                height: fit-content;
                padding: 12px 40px;
                flex-direction: row;
                display: flex;
                align-items: center;
            }
            .sticky-btn-container button {
                height: 44px;
                width: 100%;
                font-family: "untitled-sans",sans-serif;
                font-size: 13px;
                padding: 0 16px;
                background: black;
                color: white;
                letter-spacing: 1.2px;
                cursor: pointer;
                line-height: 1;
                text-align: center;
                text-transform: uppercase;
                font-weight: 500;
            }
            .sticky-btn-img-container {
                height: 60px;
                margin-right: 20px;
            }
            .sticky-btn-container img {
                height: 100%;
            }
            .sticky-btn-left-col {
                display: flex;
            }
            .sticky-btn-container p {
                margin: 0 0 4px 0;
            }
            .sticky-btn-product-name {
                font-family: "times-lt","Times New Roman",times,serif;
                font-size: 16px;
                letter-spacing: .5px;
                line-height: 24px;
            }
            .sticky-btn-price {
                font-size: 13px;
                font-weight: 500;
                letter-spacing: .5px;
                line-height: 18px;
            }
            .sticky-btn-text-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .visible {
                top: 64px;
                transition: 1s top ease;
            }
        `;
        document.head.appendChild(css);
    },
    copy: {
        en: 'Add to bag',
        fr: 'AJOUTER AU PANIER',
        de: 'Zum warenkorb hinzufügen'
    }[window.CQuotient.locale.split('_')[0]],
    getProductImageAndPrice: () => {
        // get first image from carousel
        const productImage = document.querySelector('.b-product_image img').getAttribute('src');
        const productPrice = document.querySelector('.b-product_details .b-price-item').textContent;
        const productPriceDiscounted = document.querySelector('.b-product_details .b-price-item.m-new') ? document.querySelector('.b-product_details .b-price-item.m-new').textContent : null;
        const productName = document.querySelector('.b-product_details-name').textContent;
        const buttonText = pdp_sticky_button.copy;
        return {
            productImage,
            productPrice,
            productPriceDiscounted,
            productName,
            buttonText
        }
    },
    createDesktopStickyA2Bbutton: (productDetails) => {
        const { productImage, productPrice, productPriceDiscounted, productName, buttonText } = productDetails;
        const btn = document.createElement('div');
        btn.setAttribute('class', 'sticky-btn-container');
        btn.innerHTML = `
            <div>
                <div class="sticky-btn-left-col">
                    <div class="sticky-btn-img-container">
                        <img class="sticky-btn-img" src="${productImage}"/>
                    </div>
                    <div class="sticky-btn-text-container">
                        <p class="sticky-btn-product-name">${productName}</p>
                        <div class="sticky-btn-price">
                            ${
                                productPriceDiscounted ? 
                                `<span class="b-price-item m-old">${productPrice}</span>
                                <span  class="b-price-item m-new">${productPriceDiscounted}</span>
                                `:
                                `<span>${productPrice}</span>`
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky-btn-right-col">
                <button>${buttonText}</button>
            </div> 
        `;
        btn.querySelector('button').addEventListener('click', () => {
            document.querySelector('.b-product_actions-buttons [data-id="addToCart"]').click();
            // if size is not selected, scroll to the size selector
            // if (!document.querySelector('.b-variations_item-content [aria-checked="true"]')) {
            //     document.getElementById("b-variations_item-content ").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            // }
        })
       return btn;
    },
    createMobileProductDetailsElem: (productImage, productPrice, productName) => {
        const btn = document.createElement('div');
        btn.setAttribute('class', 'mobile-sticky-btn-container');
        btn.innerHTML = `
            <div class="mobile-sticky-btn-img-container">
                <img class="mobile-sticky-btn-img" src="${productImage}"/>
            </div>
            <div class="mobile-sticky-btn-text-container">
                <p>${productName}</p>
                <div>
                    <span>${productPrice}</span>
                    <span></span>
                </div>
            </div>
        `;

        return btn;
    },
    displayDesktopStickyA2BOnScrollDown: () => {
        window.addEventListener("scroll", () => { 
            let staticButtonPos = document.querySelector('.b-product_actions-buttons').getBoundingClientRect().top;

            if (staticButtonPos < 0) {
                document.querySelector('.sticky-btn-container').classList.add('visible');
            } else {
                document.querySelector('.sticky-btn-container').classList.remove('visible');
            }
        }, false);
    },
    applyUIChanges: () =>{
        const productDetails = pdp_sticky_button.getProductImageAndPrice();
        const desktopStickyA2Bbutton = pdp_sticky_button.createDesktopStickyA2Bbutton(productDetails);
        document.querySelector('body').insertBefore(desktopStickyA2Bbutton, document.querySelector('body').firstElementChild);
        pdp_sticky_button.displayDesktopStickyA2BOnScrollDown();
    },
    watchURLChanges: () => {
        let currentURL = window.location.href;

        // Create a MutationObserver
        const observer = new MutationObserver(mutations => {
            if (currentURL !== window.location.href) {
                // Reapply UI changes
                console.log("URL changed:", window.location.href);
                // pdp_sticky_button.applyUIChanges();
                currentURL = window.location.href;
            }
        });

        // Configure the MutationObserver to watch for changes
        const config = { attributes: true, childList: true, subtree: true, characterData: true };
        observer.observe(document.documentElement, config);
    },
    init: () => {
        pdp_sticky_button.addCss();

        pdp_sticky_button.applyUIChanges();

        // Start watching for URL changes
        pdp_sticky_button.watchURLChanges();
    }
}
pdp_sticky_button.init();