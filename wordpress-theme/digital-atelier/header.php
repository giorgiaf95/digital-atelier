<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" class="site-header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-inner">
                <!-- Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-title">
                            <h1>
                                Digital <span class="gradient-text">Atelier</span>
                            </h1>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Primary Navigation -->
                <nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e('Menu Principale', 'digital-atelier'); ?>">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class'     => 'nav-menu',
                        'container'      => false,
                        'fallback_cb'    => 'digital_atelier_fallback_menu',
                    ));
                    ?>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" aria-label="<?php esc_attr_e('Toggle Menu', 'digital-atelier'); ?>" aria-expanded="false">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>
    </nav>
</header>

<style>
/* Header Styles */
.site-header {
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(18, 16, 14, 0.9);
}

.navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.site-branding {
    flex-shrink: 0;
}

.site-title {
    text-decoration: none;
    margin: 0;
}

.site-title h1 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin: 0;
}

.custom-logo-link img {
    max-height: 60px;
    width: auto;
}

/* Navigation Menu */
.main-navigation {
    display: flex;
    align-items: center;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-menu li {
    margin: 0;
}

.nav-menu a {
    color: var(--color-foreground);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-menu a:hover,
.nav-menu a:focus,
.nav-menu .current-menu-item a {
    color: var(--color-primary);
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

.nav-menu a:hover::after,
.nav-menu .current-menu-item a::after {
    width: 100%;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.hamburger-line {
    width: 24px;
    height: 2px;
    background-color: var(--color-foreground);
    transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: flex;
    }

    .main-navigation {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background-color: var(--color-card);
        padding: 2rem;
        transition: left 0.3s ease;
        z-index: 999;
    }

    .main-navigation.is-open {
        left: 0;
    }

    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-menu a::after {
        display: none;
    }
}
</style>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function digital_atelier_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">' . __('Home', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/web-design')) . '">' . __('Web Design', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/modelli-3d')) . '">' . __('Modelli 3D', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/grafiche-2d')) . '">' . __('Grafiche 2D', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/game-design')) . '">' . __('Game Design', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/narrative-design')) . '">' . __('Narrative Design', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/news')) . '">' . __('News', 'digital-atelier') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contatti')) . '">' . __('Contatti', 'digital-atelier') . '</a></li>';
    echo '</ul>';
}
?>
