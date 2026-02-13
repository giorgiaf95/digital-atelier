<?php
/**
 * Template for displaying all pages
 *
 * @package Digital_Atelier
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()) :
        the_post();
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-page'); ?>>
            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="page-featured-image">
                    <?php the_post_thumbnail('full'); ?>
                </div>
            <?php endif; ?>

            <div class="container py-5">
                <div class="page-content">
                    <header class="entry-header text-center mb-4">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                    </header>

                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Pagine:', 'digital-atelier'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>
                </div>
            </div>

            <?php
            // If comments are open or there are comments, load the comment template
            if (comments_open() || get_comments_number()) :
            ?>
                <div class="container">
                    <div class="page-content">
                        <?php comments_template(); ?>
                    </div>
                </div>
            <?php endif; ?>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>

<style>
/* Page Styles */
.page-featured-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.page-featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.page-content {
    max-width: 900px;
    margin: 0 auto;
}

.entry-title {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.entry-content {
    font-size: 1.125rem;
    line-height: 1.8;
}

.entry-content h2,
.entry-content h3,
.entry-content h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.entry-content img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius);
    margin: 2rem 0;
}

.entry-content p {
    margin-bottom: 1.5rem;
}

.entry-content ul,
.entry-content ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
}

.entry-content li {
    margin-bottom: 0.5rem;
}

.entry-content blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: var(--color-muted-foreground);
}

.page-links {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
}

/* Responsive */
@media (max-width: 768px) {
    .entry-title {
        font-size: 2rem;
    }
    
    .entry-content {
        font-size: 1rem;
    }
}
</style>
