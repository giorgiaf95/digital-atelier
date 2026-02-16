<?php
/**
 * The main template file
 * 
 * This is the most generic template file and is used to display a page when nothing
 * more specific matches a query.
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-5">
        <?php if (have_posts()) : ?>

            <?php if (is_home() && !is_front_page()) : ?>
                <header class="page-header text-center mb-4">
                    <h1 class="page-title"><?php single_post_title(); ?></h1>
                </header>
            <?php endif; ?>

            <div class="posts-grid">
                <?php
                /* Start the Loop */
                while (have_posts()) :
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large'); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="post-content">
                            <header class="entry-header">
                                <?php
                                if (is_singular()) :
                                    the_title('<h1 class="entry-title">', '</h1>');
                                else :
                                    the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
                                endif;
                                ?>

                                <div class="entry-meta text-muted">
                                    <span class="posted-on">
                                        <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                            <?php echo esc_html(get_the_date()); ?>
                                        </time>
                                    </span>
                                    <span class="byline">
                                        <?php esc_html_e('di', 'digital-atelier'); ?>
                                        <span class="author"><?php the_author(); ?></span>
                                    </span>
                                    <?php if (has_category()) : ?>
                                        <span class="categories">
                                            <?php the_category(', '); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </header>

                            <div class="entry-summary">
                                <?php the_excerpt(); ?>
                            </div>

                            <footer class="entry-footer">
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    <?php esc_html_e('Leggi di più', 'digital-atelier'); ?>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </footer>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php
            // Pagination
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('&laquo; Precedente', 'digital-atelier'),
                'next_text' => __('Successivo &raquo;', 'digital-atelier'),
            ));
            ?>

        <?php else : ?>
            
            <div class="no-results text-center">
                <h1><?php esc_html_e('Nessun contenuto trovato', 'digital-atelier'); ?></h1>
                <p><?php esc_html_e('Spiacenti, nessun contenuto corrisponde alla tua ricerca.', 'digital-atelier'); ?></p>
                <?php get_search_form(); ?>
            </div>

        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
?>

<style>
/* Posts Grid */
.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.post-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.post-thumbnail {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.post-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.post-card:hover .post-thumbnail img {
    transform: scale(1.05);
}

.post-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.entry-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.entry-title a {
    color: var(--color-foreground);
    text-decoration: none;
}

.entry-title a:hover {
    color: var(--color-primary);
}

.entry-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.entry-summary {
    flex: 1;
    margin-bottom: 1rem;
}

.entry-footer {
    margin-top: auto;
}

.btn svg {
    display: inline-block;
    vertical-align: middle;
}

/* Pagination */
.pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
}

.page-numbers {
    padding: 0.5rem 1rem;
    background-color: var(--color-secondary);
    color: var(--color-foreground);
    border-radius: var(--radius);
    text-decoration: none;
    transition: all 0.3s ease;
}

.page-numbers:hover,
.page-numbers.current {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
}

/* No Results */
.no-results {
    padding: 4rem 2rem;
}

/* Responsive */
@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
    }
}
</style>
