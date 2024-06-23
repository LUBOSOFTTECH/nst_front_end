function App() {
  return (
    <div>
      <div className='overlay' data-overlay></div>
      <div className='modal' data-modal>
        <div className='modal-close-overlay' data-modal-overlay></div>
        <div className='modal-content'>
          <button className='modal-close-btn' data-modal-close>
            <ion-icon name='close-outline'></ion-icon>
          </button>
        </div>
      </div>
      <div className='notification-toast' data-toast>
        <button className='toast-close-btn' data-toast-close>
          <ion-icon name='close-outline'></ion-icon>
        </button>
        <div className='toast-banner'>
          <img
            src='./assets/images/products/jewellery-1.jpg'
            alt='Rose Gold Earrings'
            width='80'
            height='70'
          />
        </div>
        <div className='toast-detail'>
          <p className='toast-message'>Someone in new just bought</p>
          <p className='toast-title'>Rose Gold Earrings</p>
          <p className='toast-meta'>
            <time dateTime='PT2M'>2 Minutes</time> ago
          </p>
        </div>
      </div>
      <header>
        <div className='header-top'>
          <div className='container'>
            <ul className='header-social-container'>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-twitter'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
              </li>
            </ul>
            <div className='header-alert-news'>
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>
            <div className='header-top-actions'>
              <select name='currency'>
                <option value='usd'>USD &dollar;</option>
                <option value='eur'>EUR &euro;</option>
              </select>
              <select name='language'>
                <option value='en-US'>India</option>
                <option value='es-ES'>Dubai</option>
                <option value='fr'>USA</option>
              </select>
            </div>
          </div>
        </div>
        <div className='header-main'>
          <div className='container'>
            <a href='#' className='header-logo'>
              <img
                src='./assets/images/logo/nst.png'
                alt="Anon's logo"
                width='120'
                height='50'
              />
            </a>
            <div className='header-search-container'>
              <input
                type='search'
                name='search'
                className='search-field'
                placeholder='Enter your product name...'
              />
              <button className='search-btn'>
                <ion-icon name='search-outline'></ion-icon>
              </button>
            </div>
            <div className='header-user-actions'>
              <button className='action-btn'>
                <ion-icon name='person-outline'></ion-icon>
              </button>
              <button className='action-btn'>
                <ion-icon name='heart-outline'></ion-icon>
                <span className='count'>0</span>
              </button>
              <button className='action-btn'>
                <ion-icon name='bag-handle-outline'></ion-icon>
                <span className='count'>0</span>
              </button>
            </div>
          </div>
        </div>
        <nav className='desktop-navigation-menu'>
          <div className='container'>
            <ul className='desktop-menu-category-list'>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  Home
                </a>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  ANTIQUE IDOL
                </a>
                <ul className='dropdown-list'>
                  <li className='dropdown-item'>
                    <a href='#'>Ganesh Idol</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Saraswathi idol </a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>SUB CATAGORI 3</a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  BOWLS
                </a>
                <ul className='dropdown-list'>
                  <li className='dropdown-item'>
                    <a href='#'>3 graver Dish bowl</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Mattu dish bowl</a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  PLATES
                </a>
                <ul className='dropdown-list'>
                  <li className='dropdown-item'>
                    <a href='#'>Beed plate 5.5 inches </a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Beed plate 8 inches</a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  POOJA SET
                </a>
                <ul className='dropdown-list'>
                  <li className='dropdown-item'>
                    <a href='#'>Diya</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Aarthi stand </a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  WATCHES
                </a>
                <ul className='dropdown-list'>
                  <li className='dropdown-item'>
                    <a href='#'>Clothes Perfume</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Deodorant</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Flower Fragrance</a>
                  </li>
                  <li className='dropdown-item'>
                    <a href='#'>Air Freshener</a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <a href='#' className='menu-title'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='mobile-bottom-navigation'>
          <button className='action-btn' data-mobile-menu-open-btn>
            <ion-icon name='menu-outline'></ion-icon>
          </button>
          <button className='action-btn'>
            <ion-icon name='bag-handle-outline'></ion-icon>
            <span className='count'>0</span>
          </button>
          <button className='action-btn'>
            <ion-icon name='home-outline'></ion-icon>
          </button>
          <button className='action-btn'>
            <ion-icon name='heart-outline'></ion-icon>
            <span className='count'>0</span>
          </button>
          <button className='action-btn' data-mobile-menu-open-btn>
            <ion-icon name='grid-outline'></ion-icon>
          </button>
        </div>
        <nav className='mobile-navigation-menu has-scrollbar' data-mobile-menu>
          <div className='menu-top'>
            <h2 className='menu-title'>Menu</h2>
            <button className='menu-close-btn' data-mobile-menu-close-btn>
              <ion-icon name='close-outline'></ion-icon>
            </button>
          </div>
          <ul className='mobile-menu-category-list'>
            <li className='menu-category'>
              <a href='#' className='menu-title'>
                Home
              </a>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>ANTIQUE IDOL</p>
                <div>
                  <ion-icon name='add-outline' className='add-icon'></ion-icon>
                  <ion-icon
                    name='remove-outline'
                    className='remove-icon'
                  ></ion-icon>
                </div>
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Ganesh Idol
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Saraswathi idol{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>BOWLS</p>
                <div>
                  <ion-icon name='add-outline' className='add-icon'></ion-icon>
                  <ion-icon
                    name='remove-outline'
                    className='remove-icon'
                  ></ion-icon>
                </div>
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    3 graver Dish bowl
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Mattu dish bowl
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>PLATES</p>
                <div>
                  <ion-icon name='add-outline' className='add-icon'></ion-icon>
                  <ion-icon
                    name='remove-outline'
                    className='remove-icon'
                  ></ion-icon>
                </div>
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Beed plate 5.5 inches{" "}
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Beed plate 8 inches
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>POOJA SET</p>
                <div>
                  <ion-icon name='add-outline' className='add-icon'></ion-icon>
                  <ion-icon
                    name='remove-outline'
                    className='remove-icon'
                  ></ion-icon>
                </div>
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Diya
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Aarthi stand{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <button className='accordion-menu' data-accordion-btn>
                <p className='menu-title'>WATCHES</p>
                <div>
                  <ion-icon name='add-outline' className='add-icon'></ion-icon>
                  <ion-icon
                    name='remove-outline'
                    className='remove-icon'
                  ></ion-icon>
                </div>
              </button>
              <ul className='submenu-category-list' data-accordion>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Model1
                  </a>
                </li>
                <li className='submenu-category'>
                  <a href='#' className='submenu-title'>
                    Model2
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-category'>
              <a href='#' className='menu-title'>
                About
              </a>
            </li>
          </ul>
          <div className='menu-bottom'>
            <ul className='menu-category-list'>
              <li className='menu-category'>
                <button className='accordion-menu' data-accordion-btn>
                  <p className='menu-title'>Country</p>
                  <ion-icon
                    name='caret-back-outline'
                    className='caret-back'
                  ></ion-icon>
                </button>
                <ul className='submenu-category-list' data-accordion>
                  <li className='submenu-category'>
                    <a href='#' className='submenu-title'>
                      India
                    </a>
                  </li>
                  <li className='submenu-category'>
                    <a href='#' className='submenu-title'>
                      USA
                    </a>
                  </li>
                  <li className='submenu-category'>
                    <a href='#' className='submenu-title'>
                      Dubai
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-category'>
                <button className='accordion-menu' data-accordion-btn>
                  <p className='menu-title'>Currency</p>
                  <ion-icon
                    name='caret-back-outline'
                    className='caret-back'
                  ></ion-icon>
                </button>
                <ul className='submenu-category-list' data-accordion>
                  <li className='submenu-category'>
                    <a href='#' className='submenu-title'>
                      USD &dollar;
                    </a>
                  </li>
                  <li className='submenu-category'>
                    <a href='#' className='submenu-title'>
                      EUR &euro;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a href='#' className='header-logo'>
              <img
                src='./assets/images/logo/nst.png'
                alt="Anon's logo"
                width='120'
                height='50'
              />
            </a>
            <ul className='menu-social-container'>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-twitter'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>
              <li>
                <a href='#' className='social-link'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className='banner'>
          <div className='container'>
            <div className='slider-container has-scrollbar'>
              <div className='slider-item'>
                <img
                  src='./assets/images/B3.jpg'
                  alt="women's latest fashion sale"
                  className='banner-img'
                />
                <div className='banner-content'>
                  <p className='banner-subtitle'>TREANDING ITEMS</p>
                  <h2 className='banner-title'>Top Quality Bowls</h2>
                  <a href='#' className='banner-btn'>
                    Shop now
                  </a>
                </div>
              </div>
              <div className='slider-item'>
                <img
                  src='./assets/images/B2.jpg'
                  alt='modern sunglasses'
                  className='banner-img'
                />
                <div className='banner-content'>
                  <p className='banner-subtitle'>TRENDING WATCHES</p>
                  <h2 className='banner-title'>Morden Watches Available</h2>
                  <a href='#' className='banner-btn'>
                    Shop now
                  </a>
                </div>
              </div>
              <div className='slider-item'>
                <img
                  src='./assets/images/B1.png'
                  alt='new fashion summer sale'
                  className='banner-img'
                />
                <div className='banner-content'>
                  <p className='banner-subtitle'>TRENDING PLATES</p>
                  <h2 className='banner-title'>All Size of plates available</h2>
                  <a href='#' className='banner-btn'>
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='category'>
          <div className='container'>
            <div className='category-item-container has-scrollbar'>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='dress & frock'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>DANTIQUE IDOL</h3>
                    <p className='category-item-amount'>(53)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='winter wear'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>BOWLS</h3>
                    <p className='category-item-amount'>(58)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='glasses & lens'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>PLATES</h3>
                    <p className='category-item-amount'>(68)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='shorts & jeans'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>POOJA SET</h3>
                    <p className='category-item-amount'>(84)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='t-shirts'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>WATCHES</h3>
                    <p className='category-item-amount'>(35)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='jacket'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>WATCHES</h3>
                    <p className='category-item-amount'>(16)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='watch'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>WATCHES</h3>
                    <p className='category-item-amount'>(27)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
              <div className='category-item'>
                <div className='category-img-box'>
                  <img
                    src='./assets/images/icons/watch.svg'
                    alt='hat & caps'
                    width='30'
                  />
                </div>
                <div className='category-content-box'>
                  <div className='category-content-flex'>
                    <h3 className='category-item-title'>WATCHES</h3>
                    <p className='category-item-amount'>(39)</p>
                  </div>
                  <a href='#' className='category-btn'>
                    Show all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='product-container'>
          <div className='container'>
            <div className='product-box'>
              <div className='product-featured'>
                <h2 className='title'>POPULAR PRODUCTS</h2>
                <div className='showcase-wrapper has-scrollbar'>
                  <div className='showcase-container'>
                    <div className='showcase'>
                      <div className='showcase-banner'>
                        <img
                          src='./assets/images/products/p2.jpeg'
                          alt='shampoo, conditioner & facewash packs'
                          className='showcase-img'
                        />
                      </div>
                      <div className='showcase-content'>
                        <a href='#'>
                          <h3 className='showcase-title'>3 graver Dish bowl</h3>
                        </a>
                        <p className='showcase-desc'>
                          Plain 5.5 Inch Silver Paper Plate. Plain 5.5 Inch
                          Silver Paper Plate. Price : 20.00 / Pack. Get Best
                          Price. Specifications. MOQ : 100 Pack. Business Type
                          ...
                        </p>
                        <div className='showcase-rating'>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star-outline'></ion-icon>
                          <ion-icon name='star-outline'></ion-icon>
                        </div>
                        <div className='price-box'>
                          <p className='price'>$150.00</p>
                          <del>$200.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='showcase-container'>
                    <div className='showcase'>
                      <div className='showcase-banner'>
                        <img
                          src='./assets/images/products/p4.jpeg'
                          alt='Rose Gold diamonds Earring'
                          className='showcase-img'
                        />
                      </div>
                      <div className='showcase-content'>
                        <h3 className='showcase-title'>
                          <a href='#' className='showcase-title'>
                            Beed plate 5.5 inches{" "}
                          </a>
                        </h3>
                        <p className='showcase-desc'>
                          Plain 5.5 Inch Silver Paper Plate. Plain 5.5 Inch
                          Silver Paper Plate. Price : 20.00 / Pack. Get Best
                          Price. Specifications. MOQ : 100 Pack. Business Type
                          ...
                        </p>
                        <div className='showcase-rating'>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star'></ion-icon>
                          <ion-icon name='star-outline'></ion-icon>
                          <ion-icon name='star-outline'></ion-icon>
                        </div>
                        <div className='price-box'>
                          <p className='price'>$1990.00</p>
                          <del>$2000.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='product-main'>
                <h2 className='title'>NEW ARRIVAL</h2>
                <div className='product-grid'>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p1.jpeg'
                        alt='Mens Winter Leathers Jackets'
                        width='300'
                        className='product-img default'
                      />
                      <img
                        src='./assets/images/products/p11.jpeg'
                        alt='Mens Winter Leathers Jackets'
                        width='300'
                        className='product-img hover'
                      />
                      <p className='showcase-badge'>15%</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <a href='#'>
                        <h3 className='showcase-title'>Ganesh Idol</h3>
                      </a>
                      <a href='#' className='showcase-category'>
                        ANTIQUE IDOL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$48.00</p>
                        <del>$75.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p2.jpeg'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p22.jpeg'
                        alt='Pure Garment Dyed Cotton Shirt'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle black'>sale</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          3 graver Dish bowl
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        BOWL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$45.00</p>
                        <del>$56.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p3.jpeg'
                        alt='MEN Yarn Fleece Full-Zip Jacket'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p33.jpeg'
                        alt='MEN Yarn Fleece Full-Zip Jacket'
                        className='product-img hover'
                        width='300'
                      />
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Beed plate 5.5 inches{" "}
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        PLATES
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$58.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p4.jpeg'
                        alt='Black Floral Wrap Midi Skirt'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p44.jpeg'
                        alt='Black Floral Wrap Midi Skirt'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle pink'>new</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Diya
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        POOJA SET
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$25.00</p>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p5.jpeg'
                        alt="Casual Men's Brown shoes"
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p55.jpeg'
                        alt="Casual Men's Brown shoes"
                        className='product-img hover'
                        width='300'
                      />
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          model 1 watche
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        WATCHES
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$99.00</p>
                        <del>$105.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p1.jpeg'
                        alt='Pocket Watch Leather Pouch'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p11.jpeg'
                        alt='Pocket Watch Leather Pouch'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle black'>sale</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Ganesh Idol
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        ANTIQUE IDOL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$150.00</p>
                        <del>$170.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p2.jpeg'
                        alt='Smart watche Vital Plus'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p22.jpeg'
                        alt='Smart watche Vital Plus'
                        className='product-img hover'
                        width='300'
                      />
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          3 graver Dish bowl
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        BOWL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$100.00</p>
                        <del>$120.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p3.jpeg'
                        alt='Womens Party Wear Shoes'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p33.jpeg'
                        alt='Womens Party Wear Shoes'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle black'>sale</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Beed plate 5.5 inches{" "}
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        PLATES
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$25.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p4.jpeg'
                        alt='Mens Winter Leathers Jackets'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p44.jpeg'
                        alt='Mens Winter Leathers Jackets'
                        className='product-img hover'
                        width='300'
                      />
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Diya
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        POOJA SET
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$32.00</p>
                        <del>$45.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p5.jpeg'
                        alt='Trekking & Running Shoes - black'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p55.jpeg'
                        alt='Trekking & Running Shoes - black'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle black'>sale</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          model 1 watche
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        WATCHES
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$58.00</p>
                        <del>$64.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p1.jpeg'
                        alt="Men's Leather Formal Wear shoes"
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p11.jpeg'
                        alt="Men's Leather Formal Wear shoes"
                        className='product-img hover'
                        width='300'
                      />
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          Ganesh Idol
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        ANTIQUE IDOL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$50.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>
                  <div className='showcase'>
                    <div className='showcase-banner'>
                      <img
                        src='./assets/images/products/p2.jpeg'
                        alt='Better Basics French Terry Sweatshorts'
                        className='product-img default'
                        width='300'
                      />
                      <img
                        src='./assets/images/products/p22.jpeg'
                        alt='Better Basics French Terry Sweatshorts'
                        className='product-img hover'
                        width='300'
                      />
                      <p className='showcase-badge angle black'>sale</p>
                      <div className='showcase-actions'>
                        <button className='btn-action'>
                          <ion-icon name='heart-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='eye-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='repeat-outline'></ion-icon>
                        </button>
                        <button className='btn-action'>
                          <ion-icon name='bag-add-outline'></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className='showcase-content'>
                      <h3>
                        <a href='#' className='showcase-title'>
                          3 graver Dish bowl
                        </a>
                      </h3>
                      <a href='#' className='showcase-category'>
                        BOWL
                      </a>
                      <div className='showcase-rating'>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                        <ion-icon name='star-outline'></ion-icon>
                      </div>
                      <div className='price-box'>
                        <p className='price'>$78.00</p>
                        <del>$85.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container'>
            <div className='testimonials-box'>
              <div className='testimonial'>
                <h2 className='title'>ABOUT</h2>
                <div className='testimonial-card'>
                  <img
                    src='./assets/images/testimonial-1.jpg'
                    alt='alan doe'
                    className='testimonial-banner'
                    width='80'
                    height='80'
                  />
                  <p className='testimonial-name'>NON STOT TRADERS</p>
                  <p className='testimonial-title'>
                    World nomber one trustable website
                  </p>
                  <img
                    src='./assets/images/icons/quotes.svg'
                    alt='quotation'
                    className='quotation-img'
                    width='26'
                  />
                  <p className='testimonial-desc'>
                    Our Service Is Available In Whole Country
                  </p>
                </div>
              </div>
              <div className='cta-container'>
                <img
                  src='./assets/images/board.jpg'
                  alt='summer collection'
                  className='cta-banner'
                />
                <a href='#' className='cta-content'>
                  <p className='discount'>Thank you for visiting our website</p>
                </a>
              </div>
              <div className='service'>
                <h2 className='title'>OUR SERVICE</h2>
                <div className='service-container'>
                  <a href='#' className='service-item'>
                    <div className='service-icon'>
                      <ion-icon name='boat-outline'></ion-icon>
                    </div>
                    <div className='service-content'>
                      <h3 className='service-title'>Worldwide Delivery</h3>
                      <p className='service-desc'>For Order Over $100</p>
                    </div>
                  </a>
                  <a href='#' className='service-item'>
                    <div className='service-icon'>
                      <ion-icon name='rocket-outline'></ion-icon>
                    </div>
                    <div className='service-content'>
                      <h3 className='service-title'>Next Day delivery</h3>
                      <p className='service-desc'>UK Orders Only</p>
                    </div>
                  </a>
                  <a href='#' className='service-item'>
                    <div className='service-icon'>
                      <ion-icon name='call-outline'></ion-icon>
                    </div>
                    <div className='service-content'>
                      <h3 className='service-title'>Best Online Support</h3>
                      <p className='service-desc'>Hours: 8AM - 11PM</p>
                    </div>
                  </a>
                  <a href='#' className='service-item'>
                    <div className='service-icon'>
                      <ion-icon name='arrow-undo-outline'></ion-icon>
                    </div>
                    <div className='service-content'>
                      <h3 className='service-title'>Return Policy</h3>
                      <p className='service-desc'>Easy & Free Return</p>
                    </div>
                  </a>
                  <a href='#' className='service-item'>
                    <div className='service-icon'>
                      <ion-icon name='ticket-outline'></ion-icon>
                    </div>
                    <div className='service-content'>
                      <h3 className='service-title'>30% money back</h3>
                      <p className='service-desc'>For Order Over $100</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          src='https://static.elfsight.com/platform/platform.js'
          data-use-service-core
          defer
        ></script>
        <div
          className='elfsight-app-6af3da69-7a5d-4189-aa26-664facef1f2a'
          data-elfsight-app-lazy
        ></div>
      </main>
      <footer>
        <div className='footer-category'>
          <div className='container'>
            <h2 className='footer-category-title'>Brand directory</h2>
            <div className='footer-category-box'>
              <h3 className='category-box-title'>ANTIQUE IDOL :</h3>
              <a href='#' className='footer-category-link'>
                Ganesh Idol
              </a>
              <a href='#' className='footer-category-link'>
                Saraswathi idol{" "}
              </a>
            </div>
            <div className='footer-category-box'>
              <h3 className='category-box-title'>BOWLS :</h3>
              <a href='#' className='footer-category-link'>
                3 graver Dish bowl
              </a>
              <a href='#' className='footer-category-link'>
                Mattu dish bowl
              </a>
            </div>
            <div className='footer-category-box'>
              <h3 className='category-box-title'>PLATES :</h3>
              <a href='#' className='footer-category-link'>
                Beed plate 5.5 inches{" "}
              </a>
              <a href='#' className='footer-category-link'>
                Beed plate 8 inches
              </a>
            </div>
            <div className='footer-category-box'>
              <h3 className='category-box-title'>POOJA SETS :</h3>
              <a href='#' className='footer-category-link'>
                Diya
              </a>
              <a href='#' className='footer-category-link'>
                Aarthi stand{" "}
              </a>
            </div>
            <div className='footer-category-box'>
              <h3 className='category-box-title'>WATCHES :</h3>
              <a href='#' className='footer-category-link'>
                Model1
              </a>
              <a href='#' className='footer-category-link'>
                Model2
              </a>
            </div>
          </div>
        </div>
        <div className='footer-nav'>
          <div className='container'>
            <ul className='footer-nav-list'>
              <li className='footer-nav-item'>
                <h2 className='nav-title'>Our Company</h2>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Delivery
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Legal Notice
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Terms and conditions
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  About us
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Secure payment
                </a>
              </li>
            </ul>
            <ul className='footer-nav-list'>
              <li className='footer-nav-item'>
                <h2 className='nav-title'>Services</h2>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Prices drop
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  New products
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Best sales
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Contact us
                </a>
              </li>
              <li className='footer-nav-item'>
                <a href='#' className='footer-nav-link'>
                  Sitemap
                </a>
              </li>
            </ul>
            <ul className='footer-nav-list'>
              <li className='footer-nav-item'>
                <h2 className='nav-title'>Contact</h2>
              </li>
              <li className='flex footer-nav-item'>
                <div className='icon-box'>
                  <ion-icon name='location-outline'></ion-icon>
                </div>
                <address className='content'>
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </address>
              </li>
              <li className='flex footer-nav-item'>
                <div className='icon-box'>
                  <ion-icon name='call-outline'></ion-icon>
                </div>
                <a href='tel:+607936-8058' className='footer-nav-link'>
                  (607) 936-8058
                </a>
              </li>
              <li className='flex footer-nav-item'>
                <div className='icon-box'>
                  <ion-icon name='mail-outline'></ion-icon>
                </div>
                <a href='mailto:example@gmail.com' className='footer-nav-link'>
                  example@gmail.com
                </a>
              </li>
            </ul>
            <ul className='footer-nav-list'>
              <li className='footer-nav-item'>
                <h2 className='nav-title'>Follow Us</h2>
              </li>
              <li>
                <ul className='social-link'>
                  <li className='footer-nav-item'>
                    <a href='#' className='footer-nav-link'>
                      <ion-icon name='logo-facebook'></ion-icon>
                    </a>
                  </li>
                  <li className='footer-nav-item'>
                    <a href='#' className='footer-nav-link'>
                      <ion-icon name='logo-twitter'></ion-icon>
                    </a>
                  </li>
                  <li className='footer-nav-item'>
                    <a href='#' className='footer-nav-link'>
                      <ion-icon name='logo-linkedin'></ion-icon>
                    </a>
                  </li>
                  <li className='footer-nav-item'>
                    <a href='#' className='footer-nav-link'>
                      <ion-icon name='logo-instagram'></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <img
              src='./assets/images/payment.png'
              alt='payment method'
              className='payment-img'
            />
            <p className='copyright'>
              Copyright &copy; NST all rights reserved.
              <br />
              Devloped by <a href='www.lubosoft.com'>LUBOSOFTS</a>
            </p>
          </div>
        </div>
      </footer>

      {/* <script src='./assets/js/script.js'></script> */}
      <script
        type='module'
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      ></script>
      <script
        noModule
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      ></script>
    </div>
  );
}
export default App;
