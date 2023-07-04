/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import {
	TextControl,
	PanelBody,
	SelectControl,
	Spinner,
} from "@wordpress/components";

// import { select } from "@wordpress/data";

import { useEntityRecords } from "@wordpress/core-data";

import { RawHTML } from "@wordpress/element";

import DOMPurify from "dompurify";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */

const TestimonialPosts = ({ resolved, items, attributes }) => {
	if (!resolved) {
		return <Spinner />;
	}

	if (items.length === 0) {
		return <p>No post found</p>;
	}

	return (
		<OwlCarousel
			className="owl-theme"
			loop
			margin={20}
			dots={attributes.dots}
			autoplay={attributes.autoplay}
			autoplayTimeout={attributes.autoplaySpeed}
			responsive={{
				0: {
					items: attributes.sliderToShowOnMobile,
					nav: false,
				},
				600: {
					items: attributes.sliderToShowOnTablet,
					nav: false,
				},
				1000: {
					items: attributes.slidesToShow,
					nav: false,
				},
			}}
		>
			{items.map((el, elIndex) => (
				<div class="testimonial" key={elIndex}>
					{el?._embedded['wp:featuredmedia'][0]?.source_url && (
						<div class="testimonial_img">
							 <div class="img_client">
							 	<img src={el?._embedded['wp:featuredmedia'][0]?.source_url} alt={el?._embedded['wp:featuredmedia'][0]?.['alt-text']} img="img-fluid"/>
							 </div>
						</div>
					)}
					<div class="testimonial_text">
						<RawHTML>{DOMPurify.sanitize(el.content.rendered)}</RawHTML>
					</div>
					{el?.meta?.testimonial_client_name && el?.meta?.testimonial_client_name.trim().length > 0 && (
						<div class="testimonial_brand_name">{el?.meta?.testimonial_client_name}</div>
					)}
					{el?.meta?.testimonial_client_designation && el?.meta?.testimonial_client_designation.trim().length > 0 && (
						<div class="testimonial_sub_name">{el?.meta?.testimonial_client_designation}</div>
					)}
				</div>
			))}
		</OwlCarousel>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const posts = useEntityRecords("postType", "testimonial", { per_page: -1, '_embed': true });
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Settings", "owl-testimonial-carousel")}>
					<div id="owl-testimonial-carousel-controls">
						<fieldset>
							<legend className="blocks-base-control__label">
								{__("Slides To Show", "owl-testimonial-carousel")}
							</legend>
							<TextControl
								type="number"
								value={attributes.slidesToShow}
								onChange={(value) => {
									setAttributes({
										slidesToShow: parseInt(value),
									});
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__("Slides To Show On Tablet", "owl-testimonial-carousel")}
							</legend>
							<TextControl
								type="number"
								value={attributes.sliderToShowOnTablet}
								onChange={(value) => {
									setAttributes({
										sliderToShowOnTablet: parseInt(value),
									});
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__("Slides To Show On Mobile", "owl-testimonial-carousel")}
							</legend>
							<TextControl
								type="number"
								value={attributes.sliderToShowOnMobile}
								onChange={(value) => {
									setAttributes({
										sliderToShowOnMobile: parseInt(value),
									});
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__("Speed", "owl-testimonial-carousel")}
							</legend>
							<TextControl
								type="number"
								value={attributes.speed}
								onChange={(value) => {
									setAttributes({
										speed: parseInt(value),
									});
								}}
							/>
						</fieldset>
						<fieldset>
							<SelectControl
								label={__("Dots", "owl-testimonial-carousel")}
								value={attributes.dots}
								options={[
									{ label: "Enable", value: true },
									{ label: "Disable", value: false },
								]}
								onChange={(value) =>
									setAttributes({
										dots: value === "true" ? true : false,
									})
								}
							/>
						</fieldset>
						<fieldset>
							<SelectControl
								label={__("Autoplay", "owl-testimonial-carousel")}
								value={attributes.autoplay}
								options={[
									{ label: "Enable", value: true },
									{ label: "Disable", value: false },
								]}
								onChange={(value) =>
									setAttributes({
										autoplay: value === "true" ? true : false,
									})
								}
							/>
						</fieldset>
						{attributes.autoplay && (
							<fieldset>
								<legend className="blocks-base-control__label">
									{__("Autoplay Speed", "owl-testimonial-carousel")}
								</legend>
								<TextControl
									type="number"
									value={attributes.autoplaySpeed}
									onChange={(value) =>
										setAttributes({
											autoplaySpeed: value,
										})
									}
								/>
							</fieldset>
						)}
					</div>
				</PanelBody>
			</InspectorControls>
			<TestimonialPosts
				resolved={posts.hasResolved}
				items={posts.records}
				attributes={attributes}
			/>
		</div>
	);
}
