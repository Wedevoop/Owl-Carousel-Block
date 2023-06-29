<?php

$args = array(
    'post_type' => 'testimonial',
    'post_status' => 'publish'
);
$testimonial = new WP_Query($args);
if ($testimonial->have_posts()): ?>
    <div <?php echo get_block_wrapper_attributes([
        'class' => 'owl-carousel'
    ]); ?>>
        <?php while ($testimonial->have_posts()):
            $testimonial->the_post();
            ?>
            <div class="testimonial">
                <?php if (has_post_thumbnail()): ?>
                    <div class="testimonial_img">
                        <div class="img_client">
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="Client 1" img="img-fluid">
                        </div>
                    </div>
                <?php endif; ?>
                <div class="testimonial_text">
                    <?php the_content(); ?>
                </div>
                <?php $client_name = get_post_meta(get_the_ID(), 'testimonial_client_name', true); ?>
                <?php if ($client_name !== ''): ?>
                    <div class="testimonial_brand_name">
                        <?php echo $client_name; ?>
                    </div>
                <?php endif; ?>
                <?php $client_designation = get_post_meta(get_the_ID(), 'testimonial_client_designation', true); ?>
                <?php if ($client_designation !== ''): ?>
                    <div class="testimonial_sub_name">
                        <?php echo $client_designation; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endwhile;
        wp_reset_postdata(); ?>
    </div>
    <?php
        $class = explode(' ', $atts['className']);
        $class = implode('.', $class);
    ?>
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery(".owl-carousel.<?php echo $class; ?>").owlCarousel({
                margin: 20,
                loop: true,
                autoplay: <?php echo json_encode($atts['autoplay']); ?>,
                dots: <?php echo json_encode($atts['dots']); ?>,
                autoplayTimeout: <?php echo $atts['autoplaySpeed']; ?>,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: <?php echo $atts['sliderToShowOnMobile']; ?>,
                        nav: false,
                    },
                    600: {
                        items: <?php echo $atts['sliderToShowOnTablet']; ?>,
                        nav: false,
                    },
                    1000: {
                        items: <?php echo $atts['slidesToShow']; ?>,
                        nav: false,
                    },
                },
            });
        })
    </script>
<?php else:
    esc_html_e('No Post Found');
endif;
?>