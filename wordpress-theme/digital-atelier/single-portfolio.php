<?php
/**
 * Template for displaying single portfolio items
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()) :
        the_post();
        
        // Get portfolio details
        $client = get_post_meta(get_the_ID(), 'client', true);
        $project_date = get_post_meta(get_the_ID(), 'project_date', true);
        $project_url = get_post_meta(get_the_ID(), 'project_url', true);
        $technologies = get_post_meta(get_the_ID(), 'technologies', true);
        $gallery = get_post_meta(get_the_ID(), 'gallery', true);
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-portfolio'); ?>>
            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="portfolio-hero">
                    <?php the_post_thumbnail('full'); ?>
                </div>
            <?php endif; ?>

            <div class="container py-5">
                <div class="portfolio-content-wrapper">
                    <!-- Main Content -->
                    <div class="portfolio-main-content">
                        <header class="entry-header">
                            <?php
                            $terms = get_the_terms(get_the_ID(), 'portfolio_category');
                            if ($terms && !is_wp_error($terms)) :
                            ?>
                                <div class="portfolio-categories">
                                    <?php foreach ($terms as $term) : ?>
                                        <a href="<?php echo esc_url(get_term_link($term)); ?>" class="category-badge">
                                            <?php echo esc_html($term->name); ?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>

                            <h1 class="entry-title"><?php the_title(); ?></h1>
                        </header>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>

                        <!-- Gallery -->
                        <?php if ($gallery && is_array($gallery)) : ?>
                            <div class="portfolio-gallery">
                                <h2><?php esc_html_e('Galleria', 'digital-atelier'); ?></h2>
                                <div class="gallery-grid">
                                    <?php foreach ($gallery as $image_id) : ?>
                                        <div class="gallery-item">
                                            <?php echo wp_get_attachment_image($image_id, 'large'); ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <!-- Sidebar with Project Details -->
                    <aside class="portfolio-sidebar">
                        <div class="project-details card">
                            <h3><?php esc_html_e('Dettagli Progetto', 'digital-atelier'); ?></h3>
                            
                            <?php if ($client) : ?>
                                <div class="detail-item">
                                    <strong><?php esc_html_e('Cliente:', 'digital-atelier'); ?></strong>
                                    <span><?php echo esc_html($client); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($project_date) : ?>
                                <div class="detail-item">
                                    <strong><?php esc_html_e('Data:', 'digital-atelier'); ?></strong>
                                    <span><?php echo esc_html($project_date); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($terms && !is_wp_error($terms)) : ?>
                                <div class="detail-item">
                                    <strong><?php esc_html_e('Categoria:', 'digital-atelier'); ?></strong>
                                    <span>
                                        <?php
                                        $category_names = array();
                                        foreach ($terms as $term) {
                                            $category_names[] = $term->name;
                                        }
                                        echo esc_html(implode(', ', $category_names));
                                        ?>
                                    </span>
                                </div>
                            <?php endif; ?>

                            <?php if ($technologies) : ?>
                                <div class="detail-item">
                                    <strong><?php esc_html_e('Tecnologie:', 'digital-atelier'); ?></strong>
                                    <span><?php echo esc_html($technologies); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($project_url) : ?>
                                <a href="<?php echo esc_url($project_url); ?>" target="_blank" rel="noopener" class="btn btn-primary">
                                    <?php esc_html_e('Visita il Progetto', 'digital-atelier'); ?>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            <?php endif; ?>
                        </div>

                        <!-- Share Buttons -->
                        <div class="share-section card">
                            <h3><?php esc_html_e('Condividi', 'digital-atelier'); ?></h3>
                            <div class="share-buttons">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" 
                                   target="_blank" rel="noopener" class="share-button" aria-label="Share on Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" 
                                   target="_blank" rel="noopener" class="share-button" aria-label="Share on Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_permalink()); ?>&title=<?php echo urlencode(get_the_title()); ?>" 
                                   target="_blank" rel="noopener" class="share-button" aria-label="Share on LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                <!-- Related Projects -->
                <?php
                $related_args = array(
                    'post_type' => 'portfolio',
                    'posts_per_page' => 3,
                    'post__not_in' => array(get_the_ID()),
                    'orderby' => 'rand',
                );

                if ($terms && !is_wp_error($terms)) {
                    $term_ids = array();
                    foreach ($terms as $term) {
                        $term_ids[] = $term->term_id;
                    }
                    $related_args['tax_query'] = array(
                        array(
                            'taxonomy' => 'portfolio_category',
                            'field' => 'term_id',
                            'terms' => $term_ids,
                        ),
                    );
                }

                $related_query = new WP_Query($related_args);

                if ($related_query->have_posts()) :
                ?>
                    <section class="related-projects">
                        <h2><?php esc_html_e('Progetti Correlati', 'digital-atelier'); ?></h2>
                        <div class="related-projects-grid">
                            <?php while ($related_query->have_posts()) : $related_query->the_post(); ?>
                                <article class="related-project-item card">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <div class="related-project-thumbnail">
                                                <?php the_post_thumbnail('medium_large'); ?>
                                            </div>
                                        <?php endif; ?>
                                        <div class="related-project-content">
                                            <h3><?php the_title(); ?></h3>
                                            <?php
                                            $project_terms = get_the_terms(get_the_ID(), 'portfolio_category');
                                            if ($project_terms && !is_wp_error($project_terms)) :
                                            ?>
                                                <p class="text-muted"><?php echo esc_html($project_terms[0]->name); ?></p>
                                            <?php endif; ?>
                                        </div>
                                    </a>
                                </article>
                            <?php endwhile; ?>
                        </div>
                    </section>
                <?php
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>

<style>
/* Portfolio Single */
.portfolio-hero {
    width: 100%;
    height: 600px;
    overflow: hidden;
}

.portfolio-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 3rem;
    margin-bottom: 4rem;
}

.portfolio-main-content {
    min-width: 0;
}

.portfolio-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.entry-title {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.entry-content {
    font-size: 1.125rem;
    line-height: 1.8;
}

/* Portfolio Gallery */
.portfolio-gallery {
    margin-top: 3rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
}

/* Project Details Sidebar */
.portfolio-sidebar {
    position: sticky;
    top: 100px;
    align-self: start;
}

.project-details,
.share-section {
    margin-bottom: 1.5rem;
}

.project-details h3,
.share-section h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.detail-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-border);
}

.detail-item:last-of-type {
    border-bottom: none;
}

.detail-item strong {
    color: var(--color-muted-foreground);
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.share-buttons {
    display: flex;
    gap: 0.75rem;
}

/* Related Projects */
.related-projects {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid var(--color-border);
}

.related-projects h2 {
    margin-bottom: 2rem;
}

.related-projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.related-project-item a {
    display: block;
    text-decoration: none;
    color: var(--color-foreground);
}

.related-project-thumbnail {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: var(--radius);
    margin-bottom: 1rem;
}

.related-project-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.related-project-item:hover .related-project-thumbnail img {
    transform: scale(1.05);
}

.related-project-content h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

/* Responsive */
@media (max-width: 992px) {
    .portfolio-content-wrapper {
        grid-template-columns: 1fr;
    }
    
    .portfolio-sidebar {
        position: static;
    }
    
    .entry-title {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .portfolio-hero {
        height: 400px;
    }
    
    .related-projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
