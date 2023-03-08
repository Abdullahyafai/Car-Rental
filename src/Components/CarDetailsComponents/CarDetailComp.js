import React,{useEffect, useState} from 'react'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { useLocation } from 'react-router-dom';  
import { Header } from '../layouts/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CarDetailComp = () => {
	const car_detail = useLocation();
	const [carimages, setcarimages] = useState([]);
	useEffect(() => {
		
	setcarimages(JSON.parse(car_detail.state.cardetails.car_images));
	
	// console.log(carimages)

		
	}, []);
  return (
    <>
	<Header/>
	 <AboutHeader  head="All Cars"/>
	<div className='class="envato_tk_templates-template envato_tk_templates-template-elementor_header_footer single single-envato_tk_templates postid-847 elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-847"'>
	<div data-elementor-type="wp-post" data-elementor-id="847" class="elementor elementor-847">
   	<section
			class="elementor-section elementor-top-section elementor-element elementor-element-3a63ee9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
			data-id="3a63ee9" data-element_type="section">
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-86bef51"
					data-id="86bef51" data-element_type="column">
					<div class="elementor-widget-wrap elementor-element-populated">
					<div>
                <Carousel autoPlay interval="500" transitionTime="500">
					{carimages.map((value, index, array) => {
						return(
							<div>
							<img src={`${process.env.REACT_APP_IMAGE_URL}${value}`} alt={`img1`} />
						</div>
						)
					})}
                  
                   
                </Carousel>
            </div>
						<div class="elementor-element elementor-element-d7d34b9 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left elementor-widget elementor-widget-divider"
							data-id="d7d34b9" data-element_type="widget" data-widget_type="divider.default">
							<div class="elementor-widget-container">
							
								<div class="elementor-divider">
									<span class="elementor-divider-separator">
										<span class="elementor-divider__text elementor-divider__element">
											Car Information </span>
									</span>
								</div>
							</div>
						</div>
						<section
							class="elementor-section elementor-inner-section elementor-element elementor-element-4cd0aa0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="4cd0aa0" data-element_type="section">
							<div class="elementor-container elementor-column-gap-no">
								<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-207513d"
									data-id="207513d" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-8b8166d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="8b8166d" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Make</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Year</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">VIN</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Abs</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Doors</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Body</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Max Trunk Capacity </span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-13ae99e"
									data-id="13ae99e" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-f247d76 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="f247d76" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">: {car_detail.state.cardetails.car_make}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">: {car_detail.state.cardetails.model_year}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">: {car_detail.state.cardetails.car_vin}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.abs}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.no_of_doors}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:{car_detail.state.cardetails.body}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.max_trunk_capacity}</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c3f842e"
									data-id="c3f842e" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-0d4e79f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="0d4e79f" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Model</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Series</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Seats</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Fuel Type Primary</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Drive</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Product Type</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">Manufacturer</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0b8bbcd"
									data-id="0b8bbcd" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-ae9f7d7 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="ae9f7d7" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.car_model}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.series}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.no_of_seats}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.fuel_type_primary}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.drive}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.product_type}</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-text">:  {car_detail.state.cardetails.manufacturer}</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="elementor-element elementor-element-8386825 elementor-widget elementor-widget-heading"
							data-id="8386825" data-element_type="widget" data-widget_type="heading.default">
							<div class="elementor-widget-container">
								<h2 class="elementor-heading-title elementor-size-default">Car Description</h2>
							</div>
						</div>
						<div class="elementor-element elementor-element-0010feb elementor-widget elementor-widget-text-editor"
							data-id="0010feb" data-element_type="widget" data-widget_type="text-editor.default">
							<div class="elementor-widget-container">
							<p dangerouslySetInnerHTML={{__html:car_detail.state.cardetails.car_description}} ></p>
							</div>
						</div>
						<div class="elementor-element elementor-element-43814ea elementor-widget elementor-widget-heading"
							data-id="43814ea" data-element_type="widget" data-widget_type="heading.default">
							{/* <div class="elementor-widget-container">
								<h2 class="elementor-heading-title elementor-size-default">Highlights of this car</h2>
							</div> */}
						</div>
						{/* <section
							class="elementor-section elementor-inner-section elementor-element elementor-element-9912aa2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="9912aa2" data-element_type="section">
							<div class="elementor-container elementor-column-gap-no">
								<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ae02254"
									data-id="ae02254" data-element_type="column"
									data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;}">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-9f5e9c1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="9f5e9c1" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Diam auctor dictumst
															ultrices ac</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Maecenas nunc rhoncus
															iaculis potenti</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Fringilla ut conubia
															bibendum</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Rutrum taciti congue
															interdum nisl a</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-39f2183"
									data-id="39f2183" data-element_type="column"
									data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;,&quot;animation_delay&quot;:240}">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-1c6003e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
											data-id="1c6003e" data-element_type="widget"
											data-widget_type="icon-list.default">
											<div class="elementor-widget-container">
												<ul class="elementor-icon-list-items">
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Fringilla ut conubia
															bibendum</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Rutrum taciti congue
															interdum nisl a</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Diam auctor dictumst
															ultrices ac</span>
													</li>
													<li class="elementor-icon-list-item">
														<span class="elementor-icon-list-icon">
															<i aria-hidden="true" class="oi oi-check"></i> </span>
														<span class="elementor-icon-list-text">Maecenas nunc rhoncus
															iaculis potenti</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section> */}
					</div>
				</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0063349"
					data-id="0063349" data-element_type="column">
					<div class="elementor-widget-wrap elementor-element-populated">
						<section
							class="elementor-section elementor-inner-section elementor-element elementor-element-f66437d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="f66437d" data-element_type="section">
							<div class="elementor-container elementor-column-gap-no">
								<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-93129b2"
									data-id="93129b2" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-6366a18 elementor-widget elementor-widget-elementskit-heading"
											data-id="6366a18" data-element_type="widget"
											data-widget_type="elementskit-heading.default">
											<div class="elementor-widget-container">
												<div class="ekit-wid-con">
													<div
														class="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-">
														<a href="abc.html">
															<h2 class="ekit-heading--title elementskit-section-title ">
																<span><span>$ {car_detail.state.cardetails.car_rent_price}</span></span> / {car_detail.state.cardetails.car_rent_type}</h2>
														</a></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section
							class="elementor-section elementor-inner-section elementor-element elementor-element-c028e05 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="c028e05" data-element_type="section"
							data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-container elementor-column-gap-no">
								<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ea10ce8"
									data-id="ea10ce8" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-f8af143 elementor-button-align-stretch elementor-widget elementor-widget-form"
											data-id="f8af143" data-element_type="widget"
											data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
											data-widget_type="form.default">
											<div class="elementor-widget-container">
											
												<form class="elementor-form" method="post" name="New Form">
													<input type="hidden" name="post_id" value="847" />
													<input type="hidden" name="form_id" value="f8af143" />
													<input type="hidden" name="referer_title" value="Car Details" />

													<input type="hidden" name="queried_id" value="847" />

													<div class="elementor-form-fields-wrapper elementor-labels-above">
														<div
															class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_ebb9ee0 elementor-col-100">
															<label for="form-field-field_ebb9ee0"
																class="elementor-field-label">
																Pick-Up Location </label>
															<div
																class="elementor-field elementor-select-wrapper remove-before ">
																<div class="select-caret-down-wrapper">
																	<i aria-hidden="true" class="eicon-caret-down"></i>
																</div>
																<select name="form_fields[field_ebb9ee0]"
																	id="form-field-field_ebb9ee0"
																	class="elementor-field-textual elementor-size-md">
																	<option value="Select Location">Select Location
																	</option>
																	<option value="Location 1">Location 1</option>
																	<option value="Location 2">Location 2</option>
																	<option value="Location 3">Location 3</option>
																	<option value="Location 4">Location 4</option>
																</select>
															</div>
														</div>
														<div
															class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_01121d2 elementor-col-100">
															<label for="form-field-field_01121d2"
																class="elementor-field-label">
																Drop-Off Location </label>
															<div
																class="elementor-field elementor-select-wrapper remove-before ">
																<div class="select-caret-down-wrapper">
																	<i aria-hidden="true" class="eicon-caret-down"></i>
																</div>
																<select name="form_fields[field_01121d2]"
																	id="form-field-field_01121d2"
																	class="elementor-field-textual elementor-size-md">
																	<option value="Select Location">Select Location
																	</option>
																	<option value="Location 1">Location 1</option>
																	<option value="Location 2">Location 2</option>
																	<option value="Location 3">Location 3</option>
																	<option value="Location 4">Location 4</option>
																</select>
															</div>
														</div>
														<div
															class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
															<label for="form-field-name" class="elementor-field-label">
																Pick-Up Date </label>

															<input type="date" name="form_fields[name]"
																id="form-field-name"
																class="elementor-field elementor-size-md  elementor-field-textual elementor-date-field"
																placeholder="Select Date"
																pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
														</div>
														<div
															class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_fbeb9e9 elementor-col-100">
															<label for="form-field-field_fbeb9e9"
																class="elementor-field-label">
																Drop-Off Date </label>

															<input type="date" name="form_fields[field_fbeb9e9]"
																id="form-field-field_fbeb9e9"
																class="elementor-field elementor-size-md  elementor-field-textual elementor-date-field"
																placeholder="Select Date"
																pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
														</div>
														<div
															class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
															<button type="submit"
																class="elementor-button elementor-size-md">
																<span>
																	<span class=" elementor-button-icon">
																	</span>
																	<span class="elementor-button-text">Rent This
																		Car</span>
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
						<div class="elementor-element elementor-element-494bc8b elementor-align-justify elementor-widget elementor-widget-button"
							data-id="494bc8b" data-element_type="widget"
							data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}"
							data-widget_type="button.default">
							<div class="elementor-widget-container">
								<div class="elementor-button-wrapper">
									<a href="abc.html" class="elementor-button-link elementor-button elementor-size-lg"
										role="button">
										<span class="elementor-button-content-wrapper">
											<span class="elementor-button-icon elementor-align-icon-right">
												<i aria-hidden="true" class=" icon_documents"></i> </span>
											<span class="elementor-button-text">Download Brochure</span>
										</span>
									</a>
								</div>
							</div>
						</div>
						<section
							class="elementor-section elementor-inner-section elementor-element elementor-element-3df015a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
							data-id="3df015a" data-element_type="section"
							data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
							<div class="elementor-container elementor-column-gap-no">
								<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2edaafa"
									data-id="2edaafa" data-element_type="column">
									<div class="elementor-widget-wrap elementor-element-populated">
										<div class="elementor-element elementor-element-5ff2b93 elementor-widget elementor-widget-heading"
											data-id="5ff2b93" data-element_type="widget"
											data-widget_type="heading.default">
											<div class="elementor-widget-container">
												<h2 class="elementor-heading-title elementor-size-default">Contact Our
													Sales</h2>
											</div>
										</div>
										<div class="elementor-element elementor-element-b2def91 elementor-widget elementor-widget-text-editor"
											data-id="b2def91" data-element_type="widget"
											data-widget_type="text-editor.default">
											<div class="elementor-widget-container">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										</div>
										<div class="elementor-element elementor-element-5cfe009 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
											data-id="5cfe009" data-element_type="widget"
											data-widget_type="divider.default">
											<div class="elementor-widget-container">
												<div class="elementor-divider">
													<span class="elementor-divider-separator">
													</span>
												</div>
											</div>
										</div>
										<div class="elementor-element elementor-element-9f96d64 elementor-author-box--align-right elementor-author-box--image-valign-middle elementor-widget__width-initial elementor-widget elementor-widget-author-box"
											data-id="9f96d64" data-element_type="widget"
											data-widget_type="author-box.default">
											<div class="elementor-widget-container">
												<link rel="stylesheet"
													href="../../wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css"/>
												<div class="elementor-author-box">
													<div class="elementor-author-box__avatar">
														<img decoding="async"
															src="../../wp-content/uploads/sites/28/2022/12/Team-3-225x300.jpg"
															alt="Anita Murray"/>
													</div>

													<div class="elementor-author-box__text">
														<div>
															<div class="elementor-author-box__name">
																Anita Murray </div>
														</div>

														<div class="elementor-author-box__bio">
															<p>+(62)21 2002-2012</p>
														</div>

													</div>
												</div>
											</div>
										</div>
										<div class="elementor-element elementor-element-7ae3977 elementor-author-box--align-right elementor-author-box--image-valign-middle elementor-widget elementor-widget-author-box"
											data-id="7ae3977" data-element_type="widget"
											data-widget_type="author-box.default">
											<div class="elementor-widget-container">
												<div class="elementor-author-box">
													<div class="elementor-author-box__avatar">
														<img decoding="async"
															src="../../wp-content/uploads/sites/28/2022/12/Team-6-225x300.jpg"
															alt="Andre Reynolds"/>
													</div>

													<div class="elementor-author-box__text">
														<div>
															<div class="elementor-author-box__name">
																Andre Reynolds </div>
														</div>

														<div class="elementor-author-box__bio">
															<p>+(62)21 2002-2021</p>
														</div>

													</div>
												</div>
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
		</div>
    </>
  )
}
