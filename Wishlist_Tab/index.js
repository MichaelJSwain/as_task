const wishlist_tab = {
    addCss: () => {
        const css = document.createElement('style');
        css.innerHTML = `
            /* hide original title */
            .b-header_cart-title {
                display: none;
            }

            .wl_tabs_container {
                display: flex;
                gap: 24px;
            }

            .wl_tab_view {
                display: none;
                border-top: 1px solid #dfdfe0;
                padding: 24px 0px;
            }
            
            .tab_wishlist,
            .tab_shopping_bag {
                display: flex;
                align-items: center;
                gap: 6px;
                height: 44px;
                font-weight: 500;
                font-size: 13px;
                text-transform: uppercase;
                cursor: pointer;
                color: #6e6f6f;
            }
            
            .button_container {
                margin: 20px 0;
            }

            .active {
                border-bottom: 1px solid #000;
                color: #000
            }

            .wl_empty_text {
                margin-bottom: 48px;
            }
            
            .wishlist-messages {
                margin-bottom: 64px;
            }

            .wishlist_guest_top_actions {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .wishlist_guest_top_message {
                margin-bottom: 24px;
            }

            .wishlist-header {
                margin-bottom: 20px;
            }

            .wishlist-grid {
                display: grid;
                grid-gap: 4px;
                grid-template-columns: repeat(2, calc(50% - 2px));
            }

            /* hide origin item number */
            .l-cart_product-head .l-cart_product-image {
                display: none;
            }
        
        `;
        document.head.appendChild(css);
    },
    copy: {
        en: {
            shopping_bag_tab: 'Shopping Bag',
            wl_tab: 'Wishlist',
            empty_state_message: 'Your wish list is empty.',
            non_empty_state_message: 'Your wish list is only available on this device and will expire after 7 days. For permanent access, sign in or create an account.',
            login_button: 'Sign In',
            register_button: 'Create Account',
            item_count_label: 'Items'
        },
        fr: {
            shopping_bag_tab: 'Mon panier',
            wl_tab: 'Wishlist',
            empty_state_message: 'Votre wishlist est vide.',
            non_empty_state_message: 'Votre wishlist est uniquement disponible sur cet appareil et expirera après un délai de 7 jours. Pour pouvoir y accéder de manière permanente, veuillez vous connecter ou créer un compte.',
            login_button: 'Me connecter',
            register_button: 'Créer un compte',
            item_count_label: 'articles'
        },
        de: {
            shopping_bag_tab: 'Warenkorb',
            wl_tab: 'Wishlist',
            empty_state_message: 'Ihre Wishlist ist leer.',
            non_empty_state_message: 'Ihre Wishlist ist nur auf diesem Gerät verfügbar und läuft nach 7 Tagen ab. Für dauerhaften Zugriff melden Sie sich an oder erstellen Sie ein Konto.',
            login_button: 'Einloggen',
            register_button: 'Konto erstellen',
            item_count_label: 'Artikel'
        }
    }[window.CQuotient.locale.split('_')[0]],
    components: {
        emptyWishlistContainer: () => {  
            const { empty_state_message } =  wishlist_tab.copy;

            return `<div class="wl_empty_view">
                <p class="wl_empty_text">${empty_state_message}</p>

                ${wishlist_tab.components.promoTiles()}
            </div>`;
        },
        nonEmptyWishlistContainer: (productList) => {
            const { non_empty_state_message, login_button, register_button, item_count_label } =  wishlist_tab.copy;

            const result = `
                <div class="wishlist-messages">
                    <p class="wishlist_guest_top_message">${non_empty_state_message}</p>
                    <div class="wishlist_guest_top_actions">
                        <a href="https://www.allsaints.com/login/#login" class="b-button m-alt b-wilshlist_guest_top-button_sign_in">${login_button}</a>
                        <a href="https://www.allsaints.com/login/#register" class="b-button m-secondary b-wilshlist_guest_top-button_create_account">${register_button}</a>
                    </div>
                </div>
                <div class="wishlist_item_container">
             
                    <div class="wishlist-header">${productList.length} ${item_count_label}</div>
                    <div class="wishlist-grid">
                        ${productList.map(product => wishlist_tab.components.productTile(product)).join('')}
                    </div>
                </div>
            `;

            return result;
        },
        productTile: (name, image, price) => {
            return `
                <div style='height: 256px; background: gray'>
                </div>
            `;
        },
        promoTiles: () => {
            return `          <div role="none" class="b-promo_tiles_grid-content m-wishlist">
        <div role="none" class="b-promo_tiles_grid-item">
            <a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Femme" role="menuitem" href="https://www.allsaints.com/fr/women/new">
                </a><figure class="b-promo_tile"><a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Femme" role="menuitem" href="https://www.allsaints.com/fr/women/new">
                    



<picture class="b-promo_tile-picture">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=282&amp;sh=376&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=564&amp;sh=752&amp;q=80 2x" media="(min-width: 1024px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=164&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=328&amp;q=80 2x" media="(min-width: 768px) and (max-width: 1023px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=375&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=750&amp;q=80 2x" media="(max-width: 767px)">
<script type="text/javascript" style="display:none">
//<![CDATA[
window.__mirage2 = {petok:"noIJooeY62DJsmWeDIfLIpNpp2y9nZ6rKVQpL6vKYV4-1800-0.0.1.1"};
//]]>
</script>
<script type="text/javascript" src="https://ajax.cloudflare.com/cdn-cgi/scripts/04b3eb47/cloudflare-static/mirage2.min.js"></script>
<img class="" alt="Shopper les Nouveautés pour Femme" loading="lazy" width="282" height="376" data-cfsrc="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=282&amp;sh=376&amp;q=80" src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw05d5152f/images/global/megamenu/01-08-24/010824-WW-NEW%20IN.jpg?sw=282&amp;sh=376&amp;q=80">
</picture>


                    <br>
                    </a><p class="b-promo_tile-title_link"><a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Femme" role="menuitem" href="https://www.allsaints.com/fr/women/new"></a><a class="b-promo_tiles_grid-item_link" href="https://www.allsaints.com/fr/women/new" role="menuitem">NOUVEAUTÉS FEMME</a></p>
                </figure>
            
        </div>
        <div role="none" class="b-promo_tiles_grid-item">
            <a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Homme" role="menuitem" href="https://www.allsaints.com/fr/men/new">
                </a><figure class="b-promo_tile"><a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Homme" role="menuitem" href="https://www.allsaints.com/fr/men/new">
                    



<picture class="b-promo_tile-picture">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=282&amp;sh=376&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=564&amp;sh=752&amp;q=80 2x" media="(min-width: 1024px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=164&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=328&amp;q=80 2x" media="(min-width: 768px) and (max-width: 1023px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=375&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=750&amp;q=80 2x" media="(max-width: 767px)">
<img class="" alt="Shopper les Nouveautés pour Homme" loading="lazy" width="282" height="376" data-cfsrc="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=282&amp;sh=376&amp;q=80" src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0025e6e3/images/global/megamenu/01-08-24/010824-Nav-NewIn-MW-new.jpg?sw=282&amp;sh=376&amp;q=80">
</picture>


                    <br>
                    </a><p class="b-promo_tile-title_link"><a class="b-promo_tiles_grid-item_link" aria-label="Nouveautés Homme" role="menuitem" href="https://www.allsaints.com/fr/men/new"></a><a class="b-promo_tiles_grid-item_link" href="https://www.allsaints.com/fr/men/new" role="menuitem">NOUVEAUTÉS HOMME</a></p>
                </figure>
            
        </div>
        <div role="none" class="b-promo_tiles_grid-item">
            <a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Femme" role="menuitem" href="https://www.allsaints.com/fr/women/leather/leather-jackets">
                </a><figure class="b-promo_tile"><a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Femme" role="menuitem" href="https://www.allsaints.com/fr/women/leather/leather-jackets">
                    



<picture class="b-promo_tile-picture">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=282&amp;sh=376&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=564&amp;sh=752&amp;q=80 2x" media="(min-width: 1024px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=164&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=328&amp;q=80 2x" media="(min-width: 768px) and (max-width: 1023px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=375&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=750&amp;q=80 2x" media="(max-width: 767px)">
<img class="" alt="Shopper les Cuirs pour Femme" loading="lazy" width="282" height="376" data-cfsrc="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=282&amp;sh=376&amp;q=80" src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw5a44d8a0/images/global/megamenu/01-08-24/010824-Nav-Leather-WW-new.jpg?sw=282&amp;sh=376&amp;q=80">
</picture>


                    <br>
                    </a><p class="b-promo_tile-title_link"><a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Femme" role="menuitem" href="https://www.allsaints.com/fr/women/leather/leather-jackets"></a><a class="b-promo_tiles_grid-item_link" href="https://www.allsaints.com/fr/women/leather/leather-jackets" role="menuitem">CUIRS FEMME</a></p>
                </figure>
            
        </div>
        <div role="none" class="b-promo_tiles_grid-item">
            <a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Homme" role="menuitem" href="https://www.allsaints.com/fr/men/leathers/leather-jackets">
                </a><div class="b-promo_tile"><a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Homme" role="menuitem" href="https://www.allsaints.com/fr/men/leathers/leather-jackets">
                    



<picture class="b-promo_tile-picture">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=282&amp;sh=376&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=564&amp;sh=752&amp;q=80 2x" media="(min-width: 1024px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=164&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=328&amp;q=80 2x" media="(min-width: 768px) and (max-width: 1023px)">
<source srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=375&amp;q=80, https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=750&amp;q=80 2x" media="(max-width: 767px)">
<img class="" alt="Shopper les Cuirs pour Homme" loading="lazy" width="282" height="376" data-cfsrc="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=282&amp;sh=376&amp;q=80" src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw0a3df4cf/images/global/megamenu/01-08-24/010824-Nav-Leather-MW-new.jpg?sw=282&amp;sh=376&amp;q=80">
</picture>


                    <br>
                    </a><p class="b-promo_tile-title_link"><a class="b-promo_tiles_grid-item_link" aria-label="Cuirs Homme" role="menuitem" href="https://www.allsaints.com/fr/men/leathers/leather-jackets"></a><a class="b-promo_tiles_grid-item_link" href="https://www.allsaints.com/fr/men/leathers/leather-jackets" role="menuitem">CUIRS HOMME</a></p>
                </div>
            
        </div>
    </div>`
        }
    },
    buildTabs: () => {
        const { wl_tab, shopping_bag_tab } =  wishlist_tab.copy;
        const numItems = document.querySelector('.l-cart_product-head .l-cart_product-image').textContent;

        const tabs = document.createElement('ul');
        tabs.setAttribute('class', 'wl_tabs_container');
        tabs.innerHTML = `
            <li>
                <button class="tab_shopping_bag active">
                    <span>${shopping_bag_tab}</span>
                    <span class="item_count">(${numItems})</span>
                </button>
            </li>
            <li>
                <button class="tab_wishlist">
                    <span>${wl_tab}</span>
                    <span>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" focusable="false" role="presentation">
                            <use href="#wishlist-empty"></use>
                        </svg>
                    </span>
                </button>
            </li>
        `;

        tabs.querySelector('.tab_wishlist').addEventListener('click', () => {
            wishlist_tab.handleToggleTabView("wishlist");
        });
        tabs.querySelector('.tab_shopping_bag').addEventListener('click', () => {
            wishlist_tab.handleToggleTabView("shopping bag");
        });

        return tabs;
    },
    handleToggleTabView: (tab) => {
        if (tab === "wishlist") {
            document.querySelector('.tab_shopping_bag').classList.remove('active');
            document.querySelector('.tab_wishlist').classList.add('active');
            document.querySelector('.wl_tab_view').style.display = 'block';
            document.querySelector('.l-cart_product-body').style.display = 'none';
        } else {
            document.querySelector('.tab_wishlist').classList.remove('active');
            document.querySelector('.tab_shopping_bag').classList.add('active');
            document.querySelector('.wl_tab_view').style.display = 'none';
            document.querySelector('.l-cart_product-body').style.display = 'table-row-group';
        }
    },
    fetchWishlistItems: () => {
        // mock request
        return localStorage.wishlistItems ? JSON.parse(localStorage.wishlistItems) : [];
    },
    buildWLTabView: () => {
        const wl_tab_view = document.createElement('div');
        wl_tab_view.setAttribute('class', 'wl_tab_view');

        const wishListItems = wishlist_tab.fetchWishlistItems();

        wl_tab_view.innerHTML = `
            ${
                wishListItems.length ? 
                wishlist_tab.components.nonEmptyWishlistContainer(wishListItems) :
                wishlist_tab.components.emptyWishlistContainer()
            }
        `;
        return wl_tab_view;
    },
    mountElements: (tabs, wlTabView) => {
        document.querySelector('.l-cart_product-head').appendChild(tabs);
        document.querySelector('.l-cart_product').appendChild(wlTabView);
    },
    init: () => {
        wishlist_tab.addCss();
        const tabs = wishlist_tab.buildTabs(wishlist_tab.copy);
        const wlTabView = wishlist_tab.buildWLTabView();

        // UI Changes are reapplied if a DOM mutation is triggered e.g. if the user updates the contents of their cart by adding / removing an item
        optimizely.get('utils').observeSelector('.l-cart_product-head .l-cart_product-image', itemCountElem => {
            const itemCount = parseInt(itemCountElem.textContent);
            tabs.querySelector('.item_count').textContent = `(${itemCount})`;
            wishlist_tab.mountElements(tabs, wlTabView);
        });
    }
};
wishlist_tab.init();