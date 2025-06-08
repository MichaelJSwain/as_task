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
                letter-spacing: 1px;
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
        en: {
            a2bLabel: 'Add to bag',
            selectSizeLabel: 'Select size'
        },
        fr: {
            a2bLabel: 'AJOUTER AU PANIER',
            selectSizeLabel: 'SÉLECTIONNER TAILLE'
        },
        de: {
            a2bLabel: 'Zum warenkorb hinzufügen',
            selectSizeLabel: 'Grösse auswählen'
        }
    }[window.CQuotient.locale.split('_')[0]],
    getProductImageAndPrice: () => {
        // get first image from carousel
        const productImage = document.querySelector('.b-product_image img').getAttribute('src');
        const productPrice = document.querySelector('.b-product_details .b-price-item').textContent;
        const productPriceDiscounted = document.querySelector('.b-product_details .b-price-item.m-new') ? document.querySelector('.b-product_details .b-price-item.m-new').textContent : null;
        const productName = document.querySelector('.b-product_details-name').textContent;
        return {
            productImage,
            productPrice,
            productPriceDiscounted,
            productName
        }
    },
    createDesktopStickyA2Bbutton: (productDetails) => {
        const { productImage, productPrice, productPriceDiscounted, productName } = productDetails;
        const { a2bLabel, selectSizeLabel } = pdp_sticky_button.copy;
        const stickyButtonContainer = document.createElement('div');
        stickyButtonContainer.setAttribute('class', 'sticky-btn-container');
        stickyButtonContainer.innerHTML = `
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
                <button>${a2bLabel}</button>
            </div> 
        `;

        const btn = stickyButtonContainer.querySelector('button');

        btn.addEventListener('click', () => {
            if (document.querySelector('.b-product_actions-buttons [data-id="addToCart"]')) {
                document.querySelector('.b-product_actions-buttons [data-id="addToCart"]').click();
            }
        });
        
        btn.addEventListener('mouseover', () => {
            if (!document.querySelector('.m-size .b-variation_swatch[aria-checked=true]:not([data-tau-size-id="One Size"])') && !document.querySelector('.b-variation_swatch[data-tau-size-id="One Size"]')) {
                btn.textContent = selectSizeLabel;
            }
        });

        btn.addEventListener('mouseout', () => {
            if (!document.querySelector('.m-size .b-variation_swatch[aria-checked=true]:not([data-tau-size-id="One Size"])') || !document.querySelector('.b-variation_swatch[data-tau-size-id="One Size"]')) {
                btn.textContent = a2bLabel;
            }
        });
       return stickyButtonContainer;
    },
    handleStickyA2BbuttonTransition: () => {
        window.addEventListener("scroll", () => { 
            let staticButtonPos = document.querySelector('.b-product_actions-buttons').getBoundingClientRect().top;

            if (staticButtonPos < 0) {
                document.querySelector('.sticky-btn-container').classList.add('visible');
            } else {
                document.querySelector('.sticky-btn-container').classList.remove('visible');
            }
        }, false);
    },
    updateStickyA2Bbutton: (productDetails) => {
        const { productImage, productName, productPrice, productPriceDiscounted } = productDetails;

        document.querySelector('.sticky-btn-img').setAttribute('src', productImage);
        document.querySelector('.sticky-btn-product-name').textContent = productName;
        document.querySelector('.sticky-btn-price').innerHTML =  productPriceDiscounted ? 
                                `<span class="b-price-item m-old">${productPrice}</span>
                                <span  class="b-price-item m-new">${productPriceDiscounted}</span>
                                `:
                                `<span>${productPrice}</span>`;
    },
    applyUIChanges: () =>{
        const productDetails = pdp_sticky_button.getProductImageAndPrice();

        if (!document.querySelector('.sticky-btn-container')) {
            const desktopStickyA2Bbutton = pdp_sticky_button.createDesktopStickyA2Bbutton(productDetails);
            document.querySelector('body').insertBefore(desktopStickyA2Bbutton, document.querySelector('body').firstElementChild);
            pdp_sticky_button.handleStickyA2BbuttonTransition();
        } else {
            pdp_sticky_button.updateStickyA2Bbutton(productDetails);
        }
    },
    observeMutations: () => {
        const targetNode = document.querySelector('.b-product_slider-track')
        const config = { attributes: true, childList: true, subtree: true };

        const callback = (mutationList) => {
            let hasAppliedChange = false

            for (const mutation of mutationList) {
                if (!hasAppliedChange) {
                    pdp_sticky_button.applyUIChanges();
                    hasAppliedChange = true;
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    },
    init: () => {
        pdp_sticky_button.addCss();

        pdp_sticky_button.applyUIChanges();

        // Start watching for DOM mutations e.g. when user selects a variation of a product
        pdp_sticky_button.observeMutations();
    }
}
pdp_sticky_button.init();