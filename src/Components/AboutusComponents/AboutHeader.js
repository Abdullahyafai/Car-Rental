import React from "react";

export const AboutHeader = (props) => {
  return (
    <>
     <div data-elementor-type="wp-post" data-elementor-id="611" class="elementor elementor-611">
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-12d6899 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="12d6899"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div class="elementor-background-overlay"></div>
        <div class="elementor-container elementor-column-gap-no">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c03d106"
            data-id="c03d106"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-d106d40 elementor-widget elementor-widget-heading animated fadeInUp"
                data-id="d106d40"
            
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    {props.head}
                  </h2>
                </div>
              </div>
              <section
                class="elementor-section elementor-inner-section elementor-element elementor-element-e9bbc9f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="e9bbc9f"
                data-element_type="section"
              >
                <div class="elementor-container elementor-column-gap-no">
                  <div
                    class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e877bda"
                    data-id="e877bda"
                    data-element_type="column"
                  >
                    <div class="elementor-widget-wrap elementor-element-populated">
                      <div
                        class="elementor-element elementor-element-8a60991 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="8a60991"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div class="elementor-widget-container">
                          <ul class="elementor-icon-list-items elementor-inline-items">
                            <li class="elementor-icon-list-item elementor-inline-item">
                              <a href="abc.html">
                                <span class="elementor-icon-list-text">
                                  Home
                                </span>
                              </a>
                            </li>
                            <li class="elementor-icon-list-item elementor-inline-item">
                              <span class="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  class="fas fa-chevron-right"
                                ></i>
                              </span>
                              <span class="elementor-icon-list-text">
                              {props.heading}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};
