<script setup lang="ts">
defineProps<{
    quote: string
    author: { name: string; role: string; avatar: string }
}>()
</script>

<template>
    <section class="testimonial">
        <div class="container">
            <figure class="card">
                <blockquote class="quote">"{{ quote }}"</blockquote>

                <figcaption class="author">
                    <img :src="author.avatar" :alt="author.name" class="avatar" />

                    <div>
                        <p class="name">{{ author.name }}</p>
                        <p class="role">{{ author.role }}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<style scoped>
.testimonial {
    padding: var(--space-10) var(--space-5);
    background: var(--bg-0);
}

.container {
    max-width: 720px;
    margin: 0 auto;
}

.card {
    background: var(--bg-2);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    margin: 0;
}

.quote {
    font-size: var(--text-xl);
    font-weight: 500;
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-tight);
    color: var(--text-primary);
    margin: 0 0 var(--space-5);
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
    border: 1px solid var(--border-subtle);
    flex-shrink: 0;
}

.name {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
    margin: 0;
}

.role {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    margin: 2px 0 0;
}

@media (max-width: 640px) {
    .testimonial {
        padding: var(--space-8) var(--space-4);
    }

    .card {
        padding: var(--space-5);
    }
}
</style>
