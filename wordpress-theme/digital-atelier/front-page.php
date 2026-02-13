<?php
/**
 * Template for displaying the front page
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background"></div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <h1 class="hero-title">
                Digital<br>
                <span class="gradient-text">Atelier</span>
            </h1>
            <p class="hero-description">
                Design, arte e storytelling al servizio della tua visione creativa.
            </p>
            <div class="hero-actions">
                <a href="<?php echo esc_url(home_url('/contatti')); ?>" class="btn btn-primary">
                    Inizia un Progetto
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <button onclick="document.getElementById('servizi').scrollIntoView({behavior: 'smooth'})" class="btn btn-secondary">
                    Esplora i Servizi
                </button>
            </div>
        </div>
    </section>

    <!-- Why Digital Atelier -->
    <section class="presentation-section">
        <div class="container py-5">
            <header class="section-header text-center mb-4">
                <h2>
                    Perché <span class="gradient-text">Digital Atelier</span>
                </h2>
                <p class="text-muted">
                    Un laboratorio creativo dove le idee prendono forma.
                </p>
            </header>

            <div class="highlights-grid">
                <div class="highlight-card card">
                    <div class="highlight-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l2.39 7.26h7.61l-6.17 4.48 2.36 7.26-6.19-4.48-6.19 4.48 2.36-7.26-6.17-4.48h7.61z"/>
                        </svg>
                    </div>
                    <h3>Creatività Digitale</h3>
                    <p class="text-muted">Ogni progetto nasce dall'unione di arte e tecnologia.</p>
                </div>

                <div class="highlight-card card">
                    <div class="highlight-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                        </svg>
                    </div>
                    <h3>Design su Misura</h3>
                    <p class="text-muted">Soluzioni personalizzate per ogni esigenza creativa.</p>
                </div>

                <div class="highlight-card card">
                    <div class="highlight-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    </div>
                    <h3>Innovazione Continua</h3>
                    <p class="text-muted">Strumenti e tecniche all'avanguardia per risultati unici.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servizi" class="services-section">
        <div class="container py-5">
            <header class="section-header text-center mb-4">
                <h2>
                    I Nostri <span class="gradient-text">Servizi</span>
                </h2>
                <p class="text-muted">
                    Dalla progettazione alla realizzazione, offriamo soluzioni creative complete.
                </p>
            </header>

            <div class="services-grid">
                <?php
                // Services array
                $services = array(
                    array(
                        'title' => 'Web Design',
                        'description' => 'Siti web moderni, responsive e ad alte prestazioni.',
                        'link' => home_url('/web-design'),
                    ),
                    array(
                        'title' => 'Modelli 3D',
                        'description' => 'Modellazione 3D per giochi, architettura e visualizzazione.',
                        'link' => home_url('/modelli-3d'),
                    ),
                    array(
                        'title' => 'Grafiche 2D',
                        'description' => 'Illustrazioni, brand identity e concept art.',
                        'link' => home_url('/grafiche-2d'),
                    ),
                    array(
                        'title' => 'Game Design',
                        'description' => 'Meccaniche di gioco, level design e game systems.',
                        'link' => home_url('/game-design'),
                    ),
                    array(
                        'title' => 'Narrative Design',
                        'description' => 'Worldbuilding, dialoghi e storytelling interattivo.',
                        'link' => home_url('/narrative-design'),
                    ),
                );

                foreach ($services as $service) :
                ?>
                    <a href="<?php echo esc_url($service['link']); ?>" class="service-card card">
                        <div class="service-card-content">
                            <h3><?php echo esc_html($service['title']); ?></h3>
                            <p class="text-muted"><?php echo esc_html($service['description']); ?></p>
                            <span class="service-link">
                                <?php esc_html_e('Scopri di più', 'digital-atelier'); ?>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-card card text-center">
                <h2>Hai un progetto in mente?</h2>
                <p class="text-muted">
                    Raccontaci la tua idea e trasformiamola in realtà.
                </p>
                <a href="<?php echo esc_url(home_url('/contatti')); ?>" class="btn btn-primary">
                    Contattaci
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>

<style>
/* Hero Section */
.hero-section {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 4rem 0;
}

.hero-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-background) 0%, var(--color-secondary) 100%);
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--color-background) 0%, rgba(18, 16, 14, 0.8) 50%, rgba(18, 16, 14, 0.2) 100%);
}

.hero-content {
    position: relative;
    z-index: 10;
    max-width: 600px;
}

.hero-title {
    font-family: var(--font-display);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.hero-description {
    font-size: 1.25rem;
    color: var(--color-muted-foreground);
    margin-bottom: 2rem;
    max-width: 500px;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

/* Presentation Section */
.presentation-section {
    padding: 4rem 0;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.highlight-card {
    text-align: center;
}

.highlight-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 126, 34, 0.15);
    border-radius: 50%;
    color: var(--color-primary);
}

/* Services Section */
.services-section {
    padding: 4rem 0;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    text-decoration: none;
    color: var(--color-foreground);
    display: block;
    transition: all 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-card-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-top: 1rem;
}

/* CTA Section */
.cta-section {
    padding: 4rem 0;
}

.cta-card {
    padding: 3rem;
}

.cta-card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.cta-card p {
    max-width: 500px;
    margin: 0 auto 2rem;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>
