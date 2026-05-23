<script setup lang="ts">
defineProps<{
    quote: string
    author: { name: string; role: string; avatar: string }
}>()
</script>

<template>
    <section class="testimonial">
        <div class="container">
            <div class="mark" aria-hidden="true">&ldquo;</div>

            <blockquote class="quote">{{ quote }}</blockquote>

            <footer class="author">
                <img :src="author.avatar" :alt="author.name" class="avatar" />

                <div class="meta">
                    <div class="name">{{ author.name }}</div>
                    <div class="role">{{ author.role }}</div>
                </div>
            </footer>
        </div>
    </section>
</template>

<style scoped>
.testimonial {
    padding: var(--space-9) var(--space-5);
    background: var(--bg-0);
    font-family: var(--font-sans), sans-serif;
}

.container {
    position: relative;
    max-width: 720px;
    margin: 0 auto;
}

.mark {
    font-family: var(--font-serif), serif;
    font-size: 5rem;
    line-height: 1;
    color: var(--accent);
    margin-bottom: var(--space-2);
}

.quote {
    font-family: var(--font-serif), serif;
    font-style: italic;
    font-weight: 500;
    font-size: var(--text-2xl);
    line-height: var(--leading-snug);
    color: var(--text-primary);
    margin: 0 0 var(--space-6);
}

.author {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.avatar {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    object-fit: cover;
    background: var(--bg-3);
    box-shadow: var(--shadow-sm);
    flex-shrink: 0;
}

.meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.name {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-primary);
}

.role {
    font-size: var(--text-sm);
    font-weight: 400;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .testimonial {
        padding: var(--space-7) var(--space-5);
    }

    .quote {
        font-size: var(--text-xl);
    }

    .mark {
        font-size: 3.5rem;
    }
}
</style>
