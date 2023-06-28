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

import ServerSideRender from '@wordpress/server-side-render';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { TextControl } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
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
								label={__("Arrows", "owl-testimonial-carousel")}
								value={attributes.arrows}
								options={[
									{ label: "Enable", value: true },
									{ label: "Disable", value: false },
								]}
								onChange={(value) =>
									setAttributes({
										arrows: value === "true" ? true : false,
									})
								}
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
			<ServerSideRender
				block="wedevoop-slider/owl-testimonial-carousel"
				attributes={attributes}
			/>
		</div>
	);
}
