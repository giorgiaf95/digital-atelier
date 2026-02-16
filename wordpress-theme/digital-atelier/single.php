<?php
/**
 * Template for displaying single posts
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
        <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="post-featured-image">
                    <?php the_post_thumbnail('full'); ?>
                </div>
            <?php endif; ?>

            <div class="container py-5">
                <div class="single-post-content">
                    <!-- Post Header -->
                    <header class="entry-header">
                        <?php
                        // Categories
                        $categories = get_the_category();
                        if (!empty($categories)) :
                        ?>
                            <div class="entry-categories">
                                <?php foreach ($categories as $category) : ?>
                                    <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" class="category-badge">
                                        <?php echo esc_html($category->name); ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>

                        <h1 class="entry-title"><?php the_title(); ?></h1>

                        <div class="entry-meta">
                            <div class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                    <?php echo esc_html(get_the_date()); ?>
                                </time>
                            </div>
                            <div class="meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <?php the_author_posts_link(); ?>
                            </div>
                            <?php if (function_exists('the_views')) : ?>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <?php the_views(); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </header>

                    <!-- Post Content -->
                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Pagine:', 'digital-atelier'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>

                    <!-- Post Footer -->
                    <footer class="entry-footer">
                        <?php
                        // Tags
                        $tags = get_the_tags();
                        if ($tags) :
                        ?>
                            <div class="entry-tags">
                                <strong><?php esc_html_e('Tags:', 'digital-atelier'); ?></strong>
                                <?php foreach ($tags as $tag) : ?>
                                    <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" class="tag-badge">
                                        #<?php echo esc_html($tag->name); ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>

                        <!-- Share Buttons -->
                        <div class="entry-share">
                            <strong><?php esc_html_e('Condividi:', 'digital-atelier'); ?></strong>
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
                    </footer>

                    <!-- Author Bio -->
                    <?php
                    $author_description = get_the_author_meta('description');
                    if ($author_description) :
                    ?>
                        <div class="author-bio card">
                            <div class="author-avatar">
                                <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
                            </div>
                            <div class="author-info">
                                <h3><?php echo esc_html(get_the_author()); ?></h3>
                                <p><?php echo esc_html($author_description); ?></p>
                                <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" class="btn btn-secondary">
                                    <?php esc_html_e('Vedi tutti i post', 'digital-atelier'); ?>
                                </a>
                            </div>
                        </div>
                    <?php endif; ?>

                    <!-- Post Navigation -->
                    <nav class="post-navigation">
                        <?php
                        $prev_post = get_previous_post();
                        $next_post = get_next_post();
                        ?>
                        
                        <?php if ($prev_post) : ?>
                            <div class="nav-previous">
                                <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" class="nav-link card">
                                    <span class="nav-label"><?php esc_html_e('Articolo precedente', 'digital-atelier'); ?></span>
                                    <h4><?php echo esc_html($prev_post->post_title); ?></h4>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($next_post) : ?>
                            <div class="nav-next">
                                <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" class="nav-link card">
                                    <span class="nav-label"><?php esc_html_e('Articolo successivo', 'digital-atelier'); ?></span>
                                    <h4><?php echo esc_html($next_post->post_title); ?></h4>
                                </a>
                            </div>
                        <?php endif; ?>
                    </nav>

                    <!-- Comments -->
                    <?php
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>

<style>
/* Single Post */
.post-featured-image {
    width: 100%;
    height: 500px;
    overflow: hidden;
}

.post-featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.single-post-content {
    max-width: 800px;
    margin: 0 auto;
}

.entry-header {
    margin-bottom: 2rem;
}

.entry-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.category-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    border-radius: 9999px;
    font-size: 0.875rem;
    text-decoration: none;
    font-weight: 500;
}

.entry-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.entry-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    color: var(--color-muted-foreground);
    font-size: 0.875rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.entry-content {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 2rem;
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
}

.entry-content p {
    margin-bottom: 1.5rem;
}

.entry-footer {
    border-top: 1px solid var(--color-border);
    padding-top: 2rem;
    margin-bottom: 2rem;
}

.entry-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1.5rem;
}

.tag-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--color-secondary);
    color: var(--color-foreground);
    border-radius: 9999px;
    font-size: 0.875rem;
    text-decoration: none;
}

.tag-badge:hover {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
}

.entry-share {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.share-buttons {
    display: flex;
    gap: 0.5rem;
}

.share-button {
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

.share-button:hover {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
}

/* Author Bio */
.author-bio {
    display: flex;
    gap: 1.5rem;
    margin: 3rem 0;
}

.author-avatar {
    flex-shrink: 0;
}

.author-avatar img {
    border-radius: 50%;
}

.author-info h3 {
    margin-bottom: 0.5rem;
}

/* Post Navigation */
.post-navigation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.nav-link {
    display: block;
    text-decoration: none;
    transition: all 0.3s ease;
}

.nav-link:hover {
    transform: translateY(-3px);
}

.nav-label {
    display: block;
    font-size: 0.875rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.5rem;
}

.nav-link h4 {
    color: var(--color-foreground);
    margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .entry-title {
        font-size: 2rem;
    }
    
    .entry-content {
        font-size: 1rem;
    }
    
    .author-bio {
        flex-direction: column;
        text-align: center;
    }
    
    .post-navigation {
        grid-template-columns: 1fr;
    }
}
</style>
