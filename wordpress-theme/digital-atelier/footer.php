<footer id="colophon" class="site-footer">
    <div class="container">
        <div class="footer-content">
            <!-- Footer Widgets -->
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div class="footer-widgets">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
            <?php endif; ?>

            <!-- Footer Info -->
            <div class="footer-info">
                <div class="footer-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <h3>Digital <span class="gradient-text">Atelier</span></h3>
                    <?php endif; ?>
                    <p class="footer-description">
                        <?php bloginfo('description'); ?>
                    </p>
                </div>

                <!-- Footer Navigation -->
                <?php if (has_nav_menu('footer')) : ?>
                    <nav class="footer-navigation" role="navigation" aria-label="<?php esc_attr_e('Menu Footer', 'digital-atelier'); ?>">
                        <h4><?php esc_html_e('Link Rapidi', 'digital-atelier'); ?></h4>
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'menu_class'     => 'footer-menu',
                            'container'      => false,
                            'depth'          => 1,
                        ));
                        ?>
                    </nav>
                <?php endif; ?>

                <!-- Contact Info -->
                <div class="footer-contact">
                    <h4><?php esc_html_e('Contatti', 'digital-atelier'); ?></h4>
                    <p>
                        <strong><?php esc_html_e('Email:', 'digital-atelier'); ?></strong>
                        <a href="mailto:info@digitalatelier.it">info@digitalatelier.it</a>
                    </p>
                    <?php
                    // You can add more contact information here
                    // or use WordPress options/settings
                    ?>
                </div>

                <!-- Social Media Links -->
                <div class="footer-social">
                    <h4><?php esc_html_e('Seguici', 'digital-atelier'); ?></h4>
                    <div class="social-links">
                        <!-- Add your social media links here -->
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <p class="copyright">
                    &copy; <?php echo date('Y'); ?> 
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                    . <?php esc_html_e('Tutti i diritti riservati.', 'digital-atelier'); ?>
                </p>
                <p class="credits">
                    <?php
                    /* translators: %s: WordPress */
                    printf(esc_html__('Sviluppato con %s', 'digital-atelier'), '<a href="https://wordpress.org">WordPress</a>');
                    ?>
                </p>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<style>
/* Footer Styles */
.site-footer {
    background-color: var(--color-card);
    border-top: 1px solid var(--color-border);
    padding: 3rem 0 1rem;
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    gap: 2rem;
}

.footer-widgets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
    border-top: 1px solid var(--color-border);
}

.footer-branding h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.footer-description {
    color: var(--color-muted-foreground);
    font-size: 0.875rem;
}

.footer-navigation h4,
.footer-contact h4,
.footer-social h4 {
    font-family: var(--font-display);
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--color-foreground);
}

.footer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-menu li {
    margin-bottom: 0.5rem;
}

.footer-menu a {
    color: var(--color-muted-foreground);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
}

.footer-menu a:hover {
    color: var(--color-primary);
}

.footer-contact p {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.footer-contact a {
    color: var(--color-primary);
    text-decoration: none;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-secondary);
    color: var(--color-foreground);
    transition: all 0.3s ease;
}

.social-link:hover {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    transform: translateY(-2px);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
    font-size: 0.875rem;
    color: var(--color-muted-foreground);
    flex-wrap: wrap;
    gap: 1rem;
}

.copyright,
.credits {
    margin: 0;
}

.footer-bottom a {
    color: var(--color-primary);
    text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-info {
        grid-template-columns: 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}
</style>

</body>
</html>
