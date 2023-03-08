import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';



export const Slider = () => {

	const [carbrand, setcarbrand] = useState([]);
	useEffect(() => {
	
	const  options  = {
		url: 'http://127.0.0.1:8000/api/brands/list',
		method: 'POST',
		data: {
		  username: 'admin',
		  password: 'admin',
		}
	  };
	  axios(options)
	  .then(response => {
	    // console.log(response);
	  setcarbrand(response.data);
	  console.log(carbrand);
	  

		
	  });	
	 
 
},[]);	

  return (
    <>
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
     <section
			class="elementor-section elementor-top-section elementor-element elementor-element-c6274a7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
			data-id="c6274a7" data-element_type="section"
			data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-background-overlay"></div>
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-06e2a84"
					data-id="06e2a84" data-element_type="column">
					<div class="elementor-widget-wrap elementor-element-populated">
						<section
							class="elementor-section elementor-inner-section elementor-element elementor-element-6aab815 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="6aab815" data-element_type="section">
							<div class="elementor-container elementor-column-gap-default">
								<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-adde7b8"
									data-id="" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-d8d4b94  elementor-widget-heading"
										 data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="500">
											<div class="elementor-widget-container">
												
												<h2 class="elementor-heading-title elementor-size-default">Hire the best
													car at the best price</h2>
											</div>
										</div>
										<div class="elementor-element elementor-element-d43e79b  elementor-widget elementor-widget-text-editor"
										data-aos="fade-up"
                     data-aos-easing="linear"
                     data-aos-duration="500">
											<div class="elementor-widget-container" >
											
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
													tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
											</div>
										</div>
										<div class="elementor-element elementor-element-e2eb4dd elementor-widget-divider--view-line  elementor-widget elementor-widget-divider"
										data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="500">
											<div class="elementor-widget-container">
											
												<div class="elementor-divider">
													<span class="elementor-divider-separator">
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="elementor-element elementor-element-0d80be7 elementor-button-align-stretch elementor-widget elementor-widget-form"
							data-id="0d80be7" data-element_type="widget"
							data-settings="{&quot;button_width&quot;:&quot;25&quot;,&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
							data-widget_type="form.default">
							<div class="elementor-widget-container">
							
								<form class="elementor-form" method="post" name="New Form">
									<input type="hidden" name="post_id" value="105" />
									<input type="hidden" name="form_id" value="0d80be7" />
									<input type="hidden" name="referer_title" value="Homepage" />

									<input type="hidden" name="queried_id" value="105" />

									<div class="elementor-form-fields-wrapper elementor-labels-above">
										<div
											class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-name elementor-col-25">
											<label for="form-field-name" class="elementor-field-label">
												Pick-Up Date </label>

											<input type="date" name="form_fields[name]" id="form-field-name"
												class="elementor-field elementor-size-md  elementor-field-textual elementor-date-field"
												placeholder="Select Date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
										</div>
										<div
											class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_fbeb9e9 elementor-col-25">
											<label for="form-field-field_fbeb9e9" class="elementor-field-label">
												Drop-Off Date </label>

											<input type="date" name="form_fields[field_fbeb9e9]"
												id="form-field-field_fbeb9e9"
												class="elementor-field elementor-size-md  elementor-field-textual elementor-date-field"
												placeholder="Select Date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
										</div>
										<div
											class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_30aab7c elementor-col-25">
											<label for="form-field-field_30aab7c" class="elementor-field-label">
												Makers of Vehicle </label>
											<div class="elementor-field elementor-select-wrapper remove-before ">
												<div class="select-caret-down-wrapper">
													<i aria-hidden="true" class="eicon-caret-down"></i> </div>
												<select name="form_fields[field_30aab7c]" id="form-field-field_30aab7c"
													class="elementor-field-textual elementor-size-md">
													<option value="All Makers">All Makers</option>
													{carbrand.map(function (value) {
														return(
															<option value={value.brand_name}>{value.brand_name}</option>
														)
													  })}
												</select>
											</div>
										</div>
										<div
											class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons">
											<button type="submit" class="elementor-button elementor-size-md">
												<span>
													<span class=" elementor-button-icon">
													</span>
													<span class="elementor-button-text">Find Now</span>
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
    </>
  );
};
