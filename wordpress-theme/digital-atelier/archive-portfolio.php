<?php
/**
 * Template Name: Portfolio Archive
 * Template for displaying portfolio items
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-5">
        <header class="page-header text-center mb-4">
            <h1 class="page-title">
                <?php esc_html_e('Portfolio', 'digital-atelier'); ?>
            </h1>
            <p class="page-description text-muted">
                <?php esc_html_e('I nostri progetti e lavori realizzati', 'digital-atelier'); ?>
            </p>
        </header>

        <?php
        // Get portfolio categories for filtering
        $categories = get_terms(array(
            'taxonomy' => 'portfolio_category',
            'hide_empty' => true,
        ));

        if (!empty($categories) && !is_wp_error($categories)) :
        ?>
            <div class="portfolio-filters">
                <button class="filter-btn active" data-filter="*">
                    <?php esc_html_e('Tutti', 'digital-atelier'); ?>
                </button>
                <?php foreach ($categories as $category) : ?>
                    <button class="filter-btn" data-filter=".<?php echo esc_attr($category->slug); ?>">
                        <?php echo esc_html($category->name); ?>
                    </button>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <?php
        // Query portfolio items
        $args = array(
            'post_type' => 'portfolio',
            'posts_per_page' => 12,
            'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
        );

        $portfolio_query = new WP_Query($args);

        if ($portfolio_query->have_posts()) :
        ?>
            <div class="portfolio-grid">
                <?php while ($portfolio_query->have_posts()) : $portfolio_query->the_post(); ?>
                    <?php
                    // Get portfolio categories
                    $terms = get_the_terms(get_the_ID(), 'portfolio_category');
                    $category_classes = '';
                    if ($terms && !is_wp_error($terms)) {
                        $category_slugs = array();
                        foreach ($terms as $term) {
                            $category_slugs[] = $term->slug;
                        }
                        $category_classes = implode(' ', $category_slugs);
                    }
                    ?>
                    
                    <article class="portfolio-item <?php echo esc_attr($category_classes); ?>">
                        <a href="<?php the_permalink(); ?>" class="portfolio-link">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="portfolio-thumbnail">
                                    <?php the_post_thumbnail('large'); ?>
                                    <div class="portfolio-overlay">
                                        <h3 class="portfolio-title"><?php the_title(); ?></h3>
                                        <?php if ($terms && !is_wp_error($terms)) : ?>
                                            <p class="portfolio-category">
                                                <?php echo esc_html($terms[0]->name); ?>
                                            </p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php else : ?>
                                <div class="portfolio-thumbnail portfolio-no-image">
                                    <div class="portfolio-overlay">
                                        <h3 class="portfolio-title"><?php the_title(); ?></h3>
                                        <?php if ($terms && !is_wp_error($terms)) : ?>
                                            <p class="portfolio-category">
                                                <?php echo esc_html($terms[0]->name); ?>
                                            </p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php
            // Pagination
            echo paginate_links(array(
                'total' => $portfolio_query->max_num_pages,
                'prev_text' => __('&laquo; Precedente', 'digital-atelier'),
                'next_text' => __('Successivo &raquo;', 'digital-atelier'),
            ));
            ?>

        <?php else : ?>
            <div class="no-results text-center">
                <p><?php esc_html_e('Nessun progetto trovato.', 'digital-atelier'); ?></p>
            </div>
        <?php endif; ?>

        <?php wp_reset_postdata(); ?>
    </div>
</main>

<?php get_footer(); ?>

<style>
/* Portfolio Filters */
.portfolio-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
}

.filter-btn {
    padding: 0.5rem 1.5rem;
    background-color: var(--color-secondary);
    color: var(--color-foreground);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    cursor: pointer;
    font-family: var(--font-display);
    font-weight: 500;
    transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    border-color: var(--color-primary);
}

/* Portfolio Grid */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.portfolio-item {
    transition: transform 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
}

.portfolio-link {
    display: block;
    text-decoration: none;
    color: var(--color-foreground);
}

.portfolio-thumbnail {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: var(--radius);
}

.portfolio-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-thumbnail img {
    transform: scale(1.1);
}

.portfolio-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: white;
}

.portfolio-category {
    font-size: 0.875rem;
    color: var(--color-primary);
    margin: 0;
}

.portfolio-no-image {
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-card) 100%);
}

.portfolio-no-image .portfolio-overlay {
    opacity: 1;
    background: none;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
}
</style>
