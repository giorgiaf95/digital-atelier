<?php
/**
 * Digital Atelier Theme Functions
 *
 * @package Digital_Atelier
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function digital_atelier_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principale', 'digital-atelier'),
        'footer'  => __('Menu Footer', 'digital-atelier'),
    ));
    
    // Set content width
    if (!isset($content_width)) {
        $content_width = 1200;
    }
}
add_action('after_setup_theme', 'digital_atelier_setup');

/**
 * Enqueue scripts and styles
 */
function digital_atelier_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('digital-atelier-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('digital-atelier-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
    
    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'digital_atelier_scripts');

/**
 * Register widget areas
 */
function digital_atelier_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'digital-atelier'),
        'id'            => 'sidebar-1',
        'description'   => __('Area widget nella sidebar', 'digital-atelier'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer', 'digital-atelier'),
        'id'            => 'footer-1',
        'description'   => __('Area widget nel footer', 'digital-atelier'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'digital_atelier_widgets_init');

/**
 * Register Custom Post Types
 */
function digital_atelier_custom_post_types() {
    // Portfolio Items
    register_post_type('portfolio', array(
        'labels' => array(
            'name'               => __('Portfolio', 'digital-atelier'),
            'singular_name'      => __('Progetto Portfolio', 'digital-atelier'),
            'add_new'            => __('Aggiungi Nuovo', 'digital-atelier'),
            'add_new_item'       => __('Aggiungi Nuovo Progetto', 'digital-atelier'),
            'edit_item'          => __('Modifica Progetto', 'digital-atelier'),
            'new_item'           => __('Nuovo Progetto', 'digital-atelier'),
            'view_item'          => __('Vedi Progetto', 'digital-atelier'),
            'search_items'       => __('Cerca Progetti', 'digital-atelier'),
            'not_found'          => __('Nessun progetto trovato', 'digital-atelier'),
            'not_found_in_trash' => __('Nessun progetto nel cestino', 'digital-atelier'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'      => array('slug' => 'portfolio'),
        'show_in_rest' => true,
    ));
    
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name'               => __('Testimonianze', 'digital-atelier'),
            'singular_name'      => __('Testimonianza', 'digital-atelier'),
            'add_new'            => __('Aggiungi Nuova', 'digital-atelier'),
            'add_new_item'       => __('Aggiungi Nuova Testimonianza', 'digital-atelier'),
            'edit_item'          => __('Modifica Testimonianza', 'digital-atelier'),
        ),
        'public'       => true,
        'has_archive'  => false,
        'menu_icon'    => 'dashicons-format-quote',
        'supports'     => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'digital_atelier_custom_post_types');

/**
 * Register Custom Taxonomies
 */
function digital_atelier_custom_taxonomies() {
    // Portfolio Categories
    register_taxonomy('portfolio_category', 'portfolio', array(
        'labels' => array(
            'name'              => __('Categorie Portfolio', 'digital-atelier'),
            'singular_name'     => __('Categoria Portfolio', 'digital-atelier'),
            'search_items'      => __('Cerca Categorie', 'digital-atelier'),
            'all_items'         => __('Tutte le Categorie', 'digital-atelier'),
            'edit_item'         => __('Modifica Categoria', 'digital-atelier'),
            'update_item'       => __('Aggiorna Categoria', 'digital-atelier'),
            'add_new_item'      => __('Aggiungi Nuova Categoria', 'digital-atelier'),
            'new_item_name'     => __('Nuovo Nome Categoria', 'digital-atelier'),
        ),
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'portfolio-categoria'),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'digital_atelier_custom_taxonomies');

/**
 * Custom excerpt length
 */
function digital_atelier_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'digital_atelier_excerpt_length', 999);

/**
 * Custom excerpt more
 */
function digital_atelier_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'digital_atelier_excerpt_more');

/**
 * Add custom body classes
 */
function digital_atelier_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    
    if (is_singular('portfolio')) {
        $classes[] = 'portfolio-single';
    }
    
    return $classes;
}
add_filter('body_class', 'digital_atelier_body_classes');

/**
 * Add SVG support
 */
function digital_atelier_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'digital_atelier_mime_types');
