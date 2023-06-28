<?php
/**
 * Plugin Name:       Owl Testimonial Slider
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       owl-testimonial-carousel
 *
 * @package           wedevoop-slider
 */

function wedevoop_slider_owl_testimonial_carousel_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build/block',
		array(
			'render_callback' => 'wedevoop_slider_owl_testimonial_carousel_render_callback',
			'skip_inner_block'	=> true,
		)
	);

	// regsiter testimonial post
	register_custom_testimonial_post_type();
}
add_action( 'init', 'wedevoop_slider_owl_testimonial_carousel_block_init' );


function wedevoop_slider_owl_testimonial_carousel_render_callback( $atts, $content) {
	ob_start();
	require plugin_dir_path( __FILE__ ) . 'build/block/template.php';
	return ob_get_clean();
}

function register_custom_testimonial_post_type() {
	$labels = array(
		'name'                  => _x( 'Testimonials', 'Post type general name', 'owl-testimonial-carousel' ),
		'singular_name'         => _x( 'Testimonial', 'Post type singular name', 'owl-testimonial-carousel' ),
		'menu_name'             => _x( 'Testimonials', 'Admin Menu text', 'owl-testimonial-carousel' ),
		'name_admin_bar'        => _x( 'Testimonial', 'Add New on Toolbar', 'owl-testimonial-carousel' ),
		'add_new'               => __( 'Add New', 'owl-testimonial-carousel' ),
		'add_new_item'          => __( 'Add New Testimonial', 'owl-testimonial-carousel' ),
		'new_item'              => __( 'New Testimonial', 'owl-testimonial-carousel' ),
		'edit_item'             => __( 'Edit Testimonial', 'owl-testimonial-carousel' ),
		'view_item'             => __( 'View Testimonial', 'owl-testimonial-carousel' ),
		'all_items'             => __( 'All Testimonials', 'owl-testimonial-carousel' ),
		'search_items'          => __( 'Search Testimonials', 'owl-testimonial-carousel' ),
		'parent_item_colon'     => __( 'Parent Testimonials:', 'owl-testimonial-carousel' ),
		'not_found'             => __( 'No testimonials found.', 'owl-testimonial-carousel' ),
		'not_found_in_trash'    => __( 'No testimonials found in Trash.', 'owl-testimonial-carousel' ),
		'featured_image'        => _x( 'Client Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'owl-testimonial-carousel' ),
		'set_featured_image'    => _x( 'Set client image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'owl-testimonial-carousel' ),
		'remove_featured_image' => _x( 'Remove client image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'owl-testimonial-carousel' ),
		'use_featured_image'    => _x( 'Use as client image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'owl-testimonial-carousel' ),
		'archives'              => _x( 'Testimonial archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'owl-testimonial-carousel' ),
		'insert_into_item'      => _x( 'Insert into testimonial', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'owl-testimonial-carousel' ),
		'uploaded_to_this_item' => _x( 'Uploaded to this testimonial', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'owl-testimonial-carousel' ),
		'filter_items_list'     => _x( 'Filter testimonials list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'owl-testimonial-carousel' ),
		'items_list_navigation' => _x( 'Testimonials list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'owl-testimonial-carousel' ),
		'items_list'            => _x( 'Testimonials list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'owl-testimonial-carousel' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'testimonial' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields'),
		'show_in_rest'		 => true
	);

	register_post_type( 'testimonial', $args );

	// regsiter post meta

	register_post_meta(
		'testimonial',
		'testimonial_client_name',
		array(
			'show_in_rest'	=> true,
			'single'		=> true,
			'type'			=> 'string'
		)
	);

	register_post_meta(
		'testimonial',
		'testimonial_client_designation',
		array(
			'show_in_rest'	=> true,
			'single'		=> true,
			'type'			=> 'string'
		)
	);

	register_post_meta(
		'testimonial',
		'testimonial_enable_in_slider',
		array(
			'show_in_rest'	=> true,
			'single'		=> true,
			'type'			=> 'boolean',
			'default'		=> true
		)
	);
}

function wedevoop_slider_owl_testimonial_carousel_block_assets() {
	$blockPath = plugin_dir_path(__FILE__).'build/plugin/testimonial-meta-panel.asset.php';

	// Enqueue the block index.js file
	if (file_exists($blockPath) && 'testimonial' === get_post_type()) {
		$assets = require $blockPath;
		wp_enqueue_script(
			'testimonial-meta-panel', // unique handle
			plugin_dir_url(__FILE__).'/build/plugin/testimonial-meta-panel.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}

add_action( 'enqueue_block_editor_assets', 'wedevoop_slider_owl_testimonial_carousel_block_assets' );


function enqueue_owl_carousle_script()
{
	wp_enqueue_script(
		'owl-carousel',
		plugin_dir_url(__FILE__).'/dist/owl-carousel/dist/owl.carousel.min.js',
		array('jquery')
	);

	wp_enqueue_style(
		'owl-carousel',
		plugin_dir_url(__FILE__).'/dist/owl-carousel/dist/assets/owl.carousel.css',
	);
}

add_action( 'enqueue_block_editor_assets', 'enqueue_owl_carousle_script' );

function enqueue_owl_carousle_front_assets()
{	
	if (!is_admin()) {
		wp_enqueue_script(
			'owl-carousel',
			plugins_url('/dist/owl-carousel/dist/owl.carousel.min.js', __FILE__),
			array('jquery')
		);
	}

	if (!is_admin()) {

		wp_enqueue_style(
			'owl-carousel',
			plugins_url('/dist/owl-carousel/dist/assets/owl.carousel.css', __FILE__)
		);
	}
}

add_action('enqueue_block_assets', 'enqueue_owl_carousle_front_assets');