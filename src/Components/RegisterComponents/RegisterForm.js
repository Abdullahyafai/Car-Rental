import React from "react";
import Demo from '../RegisterComponents/Demo';

export const RegisterForm = () => {
  return (
    <>
      <div
        data-elementor-type="wp-post"
        data-elementor-id="227"
        class="elementor elementor-227"
      >
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-7e76ec1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="7e76ec1"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div class="elementor-container elementor-column-gap-default">
            <div
              class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-147e32b "
              data-aos="fade-right"
              data-aos-duration="800"
              style={{
                display: "flex",
                justifycontent: "center",
                alignitems: "center",
                width: "100%",
              }}
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-65305a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="65305a9"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-default">
                    <div
                      class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6ed788c"
                      data-id="6ed788c"
                      data-element_type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-4f7301b elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                          data-id="4f7301b"
                          data-element_type="widget"
                          data-settings='{"_position":"absolute"}'
                          data-widget_type="icon.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-icon-wrapper">
                              <div class="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  class="icon icon-email"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-64e0321 elementor-widget elementor-widget-heading"
                          data-id="64e0321"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div class="elementor-widget-container">
                            <h2 style={{textAlign:'center'}} class="elementor-heading-title elementor-size-default">
                              Registration
                            </h2>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-b244758 elementor-widget elementor-widget-text-editor"
                          data-id="b244758"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div class="elementor-widget-container">
                            <p style={{textAlign:'center'}}>Please Register with us.</p>
                            <h4 class="elementor-heading-title elementor-size-default">
                             
                            </h4>
                          </div>
                        </div>
      <Demo />
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
