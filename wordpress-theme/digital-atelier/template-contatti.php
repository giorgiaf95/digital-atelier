<?php
/**
 * Template Name: Contatti
 * Template for the contact page
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-5">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('contact-page'); ?>>
                <header class="entry-header text-center mb-4">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    <p class="page-description text-muted">
                        <?php esc_html_e('Siamo qui per aiutarti a realizzare il tuo progetto', 'digital-atelier'); ?>
                    </p>
                </header>

                <div class="contact-content-wrapper">
                    <!-- Contact Form -->
                    <div class="contact-form-section">
                        <div class="card">
                            <h2><?php esc_html_e('Invia un Messaggio', 'digital-atelier'); ?></h2>
                            
                            <?php
                            // Display the page content (you can add a shortcode for Contact Form 7 or other form plugins)
                            the_content();
                            
                            // Default contact form (if no plugin is used)
                            if (empty(get_the_content())) :
                            ?>
                                <form id="contact-form" class="contact-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                                    <input type="hidden" name="action" value="digital_atelier_contact_form">
                                    <?php wp_nonce_field('digital_atelier_contact_form', 'contact_form_nonce'); ?>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="contact_name">
                                                <?php esc_html_e('Nome *', 'digital-atelier'); ?>
                                            </label>
                                            <input type="text" id="contact_name" name="contact_name" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="contact_email">
                                                <?php esc_html_e('Email *', 'digital-atelier'); ?>
                                            </label>
                                            <input type="email" id="contact_email" name="contact_email" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="contact_subject">
                                            <?php esc_html_e('Oggetto *', 'digital-atelier'); ?>
                                        </label>
                                        <input type="text" id="contact_subject" name="contact_subject" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="contact_message">
                                            <?php esc_html_e('Messaggio *', 'digital-atelier'); ?>
                                        </label>
                                        <textarea id="contact_message" name="contact_message" rows="6" required></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="contact_privacy" required>
                                            <span>
                                                <?php esc_html_e('Accetto la privacy policy *', 'digital-atelier'); ?>
                                            </span>
                                        </label>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">
                                        <?php esc_html_e('Invia Messaggio', 'digital-atelier'); ?>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </button>
                                </form>
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Contact Information -->
                    <aside class="contact-info-section">
                        <div class="contact-info-card card">
                            <h3><?php esc_html_e('Informazioni di Contatto', 'digital-atelier'); ?></h3>
                            
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <strong><?php esc_html_e('Email', 'digital-atelier'); ?></strong>
                                    <p><a href="mailto:info@digitalatelier.it">info@digitalatelier.it</a></p>
                                </div>
                            </div>
                            
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <strong><?php esc_html_e('Telefono', 'digital-atelier'); ?></strong>
                                    <p><a href="tel:+390123456789">+39 012 345 6789</a></p>
                                </div>
                            </div>
                            
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <strong><?php esc_html_e('Indirizzo', 'digital-atelier'); ?></strong>
                                    <p>Via Example 123<br>00100 Roma, Italia</p>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="social-media-card card">
                            <h3><?php esc_html_e('Seguici sui Social', 'digital-atelier'); ?></h3>
                            <div class="social-links">
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
                                <a href="#" class="social-link" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>

<style>
/* Contact Page */
.contact-content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Contact Form */
.contact-form-section .card {
    padding: 2.5rem;
}

.contact-form-section h2 {
    margin-bottom: 1.5rem;
}

.contact-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--color-foreground);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    color: var(--color-foreground);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin-top: 0.25rem;
}

/* Contact Info */
.contact-info-card,
.social-media-card {
    padding: 2rem;
    margin-bottom: 1.5rem;
}

.contact-info-card h3,
.social-media-card h3 {
    margin-bottom: 1.5rem;
}

.contact-info-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 126, 34, 0.15);
    border-radius: 50%;
    color: var(--color-primary);
}

.contact-info-item strong {
    display: block;
    margin-bottom: 0.25rem;
}

.contact-info-item p {
    margin: 0;
    color: var(--color-muted-foreground);
}

.contact-info-item a {
    color: var(--color-primary);
    text-decoration: none;
}

.social-links {
    display: flex;
    gap: 1rem;
}

/* Responsive */
@media (max-width: 992px) {
    .contact-content-wrapper {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .contact-form .form-row {
        grid-template-columns: 1fr;
    }
    
    .contact-form-section .card {
        padding: 1.5rem;
    }
}
</style>
