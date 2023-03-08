import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const pathname = window.location.pathname;
  const [toggle, settoggle] = React.useState(false);

  //   function togglefun(){

  //   }
  const d_flex_header = {
    display: "flex",
    justifycontent: "space-between",
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

const logout = () =>{
  localStorage.clear();
  navigate("/");
}

  return (
    <>
      <div className='class="envato_tk_templates-template envato_tk_templates-template-elementor_header_footer single single-envato_tk_templates postid-105 elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-105"'>
        <div
          data-elementor-type="header"
          data-elementor-id="71"
          class="elementor elementor-71 elementor-location-header"
        >
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-076f75f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="076f75f"
            data-element_type="section"
            data-settings='{"background_background":"gradient"}'
          >
            <div class="elementor-container elementor-column-gap-default">
              <div
                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3c49916"
                data-id="3c49916"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-df91850 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                    data-id="df91850"
                    data-element_type="widget"
                    data-widget_type="social-icons.default"
                  >
                    <div class="elementor-widget-container">
                      <div
                        className={
                          "elementor-social-icons-wrapper elementor-grid"
                        }
                        style={d_flex_header}
                      >
                        <span class="elementor-grid-item">
                          <a
                            class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-58f3489"
                            href="abc.html"
                            target="_blank"
                          >
                            <span class="elementor-screen-only">
                              Facebook-f
                            </span>
                            <i
                              style={{ fontSize: "1rem" }}
                              class="fab fa-facebook-f"
                            ></i>
                          </a>
                        </span>
                        <span class="elementor-grid-item">
                          <a
                            class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-0072d30"
                            href="abc.html"
                            target="_blank"
                          >
                            <span class="elementor-screen-only">Twitter</span>
                            <i
                              style={{ fontSize: "1rem" }}
                              class="fab fa-twitter"
                            ></i>
                          </a>
                        </span>
                        <span class="elementor-grid-item">
                          <a
                            class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-8fae67a"
                            href="abc.html"
                            target="_blank"
                          >
                            <span class="elementor-screen-only">Youtube</span>
                            <i
                              style={{ fontSize: "1rem" }}
                              class="fab fa-youtube"
                            ></i>
                          </a>
                        </span>
                        <span class="elementor-grid-item">
                          <a
                            class="elementor-icon elementor-social-icon elementor-social-icon-icomoon-instagram elementor-repeater-item-5d59e3a"
                            href="abc.html"
                            target="_blank"
                          >
                            <span class="elementor-screen-only">instagram</span>
                            <i
                              style={{ fontSize: "1rem" }}
                              class="fab fa-instagram me-sm-4"
                            ></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-98447d9"
                data-id="98447d9"
                data-element_type="column"
                data-settings='{"background_background":"gradient"}'
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-b2d9cf3 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="b2d9cf3"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items elementor-inline-items">
                        <li class="elementor-icon-list-item elementor-inline-item">
                          <span class="elementor-icon-list-text">
                            Need Help?
                          </span>
                        </li>
                        <li class="elementor-icon-list-item elementor-inline-item">
                          <span class="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              class="mdi mdi-phone-in-talk-outline"
                            ></i>{" "}
                          </span>
                          <span class="elementor-icon-list-text">
                            Call Us : +971524270169
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-f614aa8 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-hidden-mobile elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="f614aa8"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items elementor-inline-items">
                        <li class="elementor-icon-list-item elementor-inline-item">
                          <span class="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              class="mdi mdi-email-outline"
                            ></i>{" "}
                          </span>
                          <span class="elementor-icon-list-text">
                            support@naveedpoonawala.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-d7ab00c elementor-icon-list--layout-inline elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="d7ab00c"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items elementor-inline-items">
                        <li class="elementor-icon-list-item elementor-inline-item">
                          <span class="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              class="mdi mdi-map-marker-radius-outline"
                            ></i>{" "}
                          </span>
                          <span class="elementor-icon-list-text">Dubai</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{ height: "100px" }}
            class="elementor-section elementor-top-section elementor-element elementor-element-a20ccca elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="a20ccca"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-default">
              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-da71ca2"
                data-id="da71ca2"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-c7dc808 elementor-widget__width-auto elementor-widget elementor-widget-image"
                    data-id="c7dc808"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div class="elementor-widget-container">
                      <Link to="/">
                        <img
                          style={{
                            height: "100%",
                            position: "relative",
                            bottom: "31px",
                          }}
                          src="../../wp-content/uploads/sites/28/2022/12/logo2.png"
                          class="attachment-full size-full wp-image-72"
                          alt=""
                          loading="lazy"
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-298fa76"
                data-id="298fa76"
                data-element_type="column"
              >
                <div
                  class="elementor-widget-wrap elementor-element-populated"
                  style={{ position: "relative", bottom: "25px" }}
                >
                  <div
                    class="elementor-element elementor-element-0292908 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                    data-id="0292908"
                    data-element_type="widget"
                    data-settings='{"submenu_icon":{"value":"&lt;i class=\"fas fa-angle-down\"&gt;&lt;\/i&gt;","library":"fa-solid"},"full_width":"stretch","layout":"horizontal","toggle":"burger"}'
                    data-widget_type="nav-menu.default"
                  >
                    <div class="elementor-widget-container">
                      <nav
                        migration_allowed="1"
                        migrated="0"
                        role="navigation"
                        class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                      >
                        <ul id="menu-1-0292908" class="elementor-nav-menu">
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-15">
                            <Link
                              to="/"
                              aria-current="page"
                              className={`elementor-item ${
                                pathname == "/" ? "elementor-item-active" : ""
                              }`}
                            >
                              Home
                            </Link>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <Link
                              to="/About"
                              className={`elementor-item ${
                                pathname == "/About"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                           <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <Link
                              to="/gallery"
                              className={`elementor-item ${
                                pathname == "/gallery"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                            >
                              Gallery
                            </Link>
                          </li>
                        
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-18">
                            <Link
                              to="/Cars"
                              className={`elementor-item ${
                                pathname == "/Cars"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                            >
                              Car Listing
                            </Link>

                            {/* <ul class="sub-menu elementor-nav-menu--dropdown">
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19">
													<a href="../car-details/index.html" class="elementor-sub-item">Car
														Details</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
													<a href="../pricing-plan/index.html"
														class="elementor-sub-item">Pricing Plan</a></li>
											</ul> */}
                          </li>

                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <Link
                              to="/Services"
                              className={`elementor-item ${
                                pathname === "/Services"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                            >
                              Services
                            </Link>
                          </li>

                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                            <Link
                              to="/Contact"
                              className={`elementor-item ${
                                pathname === "/Contact"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                            >
                              Contact
                            </Link>
                          </li>
                          {token ? (
                            <>
                              <div class="elementor-button-wrapper" onClick={logout}>
                                <a
                                  href="#"
                                  class="elementor-button-link elementor-button elementor-size-sm"
                                  role="button"
                                >
                                  <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-text">
                                      Logout
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </>
                          ) : (
                            <>
                              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                                <Link
                                  to="/Login"
                                  className={`elementor-item ${
                                    pathname === "/Login"
                                      ? "elementor-item-active"
                                      : ""
                                  }`}
                                >
                                  Login
                                </Link>
                              </li>

                              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                                <Link
                                  to="/Register"
                                  className={`elementor-item ${
                                    pathname === "/Register"
                                      ? "elementor-item-active"
                                      : ""
                                  }`}
                                >
                                  Register
                                </Link>
                              </li>
                            </>
                          )}

                          {/* <li
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21">
											<a href="abc.html" class="elementor-item elementor-item-anchor">Pages</a>
											<ul class="sub-menu elementor-nav-menu--dropdown">
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
													<a href="../services/index.html"
														class="elementor-sub-item">Services</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26">
													<a href="../team/index.html" class="elementor-sub-item">Team</a>
												</li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22">
													<a href="../faq/index.html" class="elementor-sub-item">FAQ</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23">
													<a href="https://kitnew.moxcreative.com/mobirentz/?elementor_library=mobirentz-v1-blog"
														class="elementor-sub-item">Blog</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24">
													<a href="https://kitnew.moxcreative.com/mobirentz/2022/12/13/five-things-you-must-know-before-renting-a-car/"
														class="elementor-sub-item">Single Blog</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25">
													<a href="https://kitnew.moxcreative.com/mobirentz/?elementor_library=mobirentz-v1-404-page"
														class="elementor-sub-item">404 Page</a></li>
											</ul>
										</li> */}
                        </ul>
                      </nav>
                      <div
                        className={`elementor-menu-toggle ${
                          toggle ? "elementor-active" : ""
                        }`}
                        role="button"
                        onClick={() => settoggle(!toggle)}
                        tabindex="0"
                        aria-label="Menu Toggle"
                        aria-expanded="false"
                      >
                        <i
                          aria-hidden="true"
                          role="presentation"
                          class="elementor-menu-toggle__icon--open  ti-menu fa-solid fa-bars"
                        ></i>
                        <i
                          aria-hidden="true"
                          role="presentation"
                          class="elementor-menu-toggle__icon--close mdi mdi-window-close"
                        ></i>{" "}
                        <span class="elementor-screen-only">Menu</span>
                      </div>
                      <nav
                        class="elementor-nav-menu--dropdown elementor-nav-menu__container"
                        role="navigation"
                        aria-hidden="true"
                      >
                        <ul id="menu-2-0292908" class="elementor-nav-menu">
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-15">
                            <Link
                              exact
                              to="/"
                              aria-current="page"
                              className={`elementor-item ${
                                pathname === "/" ? "elementor-item-active" : ""
                              }`}
                              tabindex="-1"
                            >
                              Home
                            </Link>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <Link
                              to="/About"
                              className={`elementor-item ${
                                pathname === "/About"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                              tabindex="-1"
                            >
                              About Us
                            </Link>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <NavLink
                              to="/Cars"
                              className={`elementor-item ${
                                pathname === "/Cars"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                              tabindex="-1"
                            >
                              Cars Listing
                            </NavLink>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                            <NavLink
                              to="/Services"
                              className={`elementor-item ${
                                pathname === "/Services"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                              tabindex="-1"
                            >
                              Services
                            </NavLink>
                          </li>
                          {/* <li
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-18">
											<a href="../car-listing/index.html" class="elementor-item" tabindex="-1">Car
												Listing</a>
											<ul class="sub-menu elementor-nav-menu--dropdown">
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19">
													<a href="../car-details/index.html" class="elementor-sub-item"
														tabindex="-1">Car Details</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
													<a href="../pricing-plan/index.html" class="elementor-sub-item"
														tabindex="-1">Pricing Plan</a></li>
											</ul>
										</li> */}
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                            <NavLink
                              exact
                              to="/Contact"
                              className={`elementor-item ${
                                pathname === "/Contact"
                                  ? "elementor-item-active"
                                  : ""
                              }`}
                              tabindex="-1"
                            >
                              Contact
                            </NavLink>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                            <NavLink
                              to="/"
                              className={`elementor-item ${
                                pathname === "" ? "elementor-item-active" : ""
                              }`}
                              tabindex="-1"
                            >
                              Login
                            </NavLink>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                            <NavLink
                              to="/"
                              className={`elementor-item ${
                                pathname === "" ? "elementor-item-active" : ""
                              }`}
                              tabindex="-1"
                            >
                              Register
                            </NavLink>
                          </li>
                          {/* <li
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21">
											<a href="abc.html" class="elementor-item elementor-item-anchor"
												tabindex="-1">Pages</a>
											<ul class="sub-menu elementor-nav-menu--dropdown">
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
													<a href="../services/index.html" class="elementor-sub-item"
														tabindex="-1">Services</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26">
													<a href="../team/index.html" class="elementor-sub-item"
														tabindex="-1">Team</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22">
													<a href="../faq/index.html" class="elementor-sub-item"
														tabindex="-1">FAQ</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23">
													<a href="https://kitnew.moxcreative.com/mobirentz/?elementor_library=mobirentz-v1-blog"
														class="elementor-sub-item" tabindex="-1">Blog</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24">
													<a href="https://kitnew.moxcreative.com/mobirentz/2022/12/13/five-things-you-must-know-before-renting-a-car/"
														class="elementor-sub-item" tabindex="-1">Single Blog</a></li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25">
													<a href="https://kitnew.moxcreative.com/mobirentz/?elementor_library=mobirentz-v1-404-page"
														class="elementor-sub-item" tabindex="-1">404 Page</a></li>
											</ul>
										</li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e6b3af8 elementor-hidden-mobile"
                data-id="e6b3af8"
                data-element_type="column"
              >
                <div
                  class="elementor-widget-wrap elementor-element-populated"
                  style={{ position: "relative", bottom: "25px" }}
                >
                  <div
                    class="elementor-element elementor-element-13a0a04 elementor-widget__width-auto elementor-widget elementor-widget-elementskit-header-search"
                    data-id="13a0a04"
                    data-element_type="widget"
                    data-widget_type="elementskit-header-search.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="ekit-wid-con">
                        {/* <a href="abc.htmlekit_modal-popup-13a0a04"
										class="ekit_navsearch-button ekit-modal-popup">
										<i aria-hidden="true" class="icofont icofont-search-1"></i>
                               </a> */}

                        <div
                          class="zoom-anim-dialog mfp-hide ekit_modal-searchPanel"
                          id="ekit_modal-popup-13a0a04"
                        >
                          <div class="ekit-search-panel">
                            <form
                              role="search"
                              method="get"
                              class="ekit-search-group"
                              action="https://kitnew.moxcreative.com/mobirentz/"
                            >
                              <input
                                type="search"
                                class="ekit_search-field"
                                placeholder="Search..."
                                value=""
                                name="s"
                              />
                              <button type="submit" class="ekit_search-button">
                                {/* <i aria-hidden="true" class="icofont icofont-search-1"></i> */}
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e70b5d6"
                data-id="e70b5d6"
                data-element_type="column"
              >
                <div
                  class="elementor-widget-wrap elementor-element-populated"
                  style={{ position: "relative", bottom: "25px" }}
                >
                  <div
                    class="elementor-element elementor-element-7ccb538 elementor-align-center elementor-mobile-align-right elementor-tablet-align-right elementor-widget elementor-widget-button"
                    data-id="7ccb538"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-button-wrapper">
                        <a
                          href="abc.html"
                          class="elementor-button-link elementor-button elementor-size-sm"
                          role="button"
                        >
                          <span class="elementor-button-content-wrapper">
                            <span class="elementor-button-text">
                              Find a Car
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
