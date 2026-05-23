<script setup lang="ts">
defineProps<{
    quote: string
    author: { name: string; role: string; avatar: string }
}>()
</script>

<template>
    <section class="testimonial">
        <div class="container">
            <div class="mark" aria-hidden="true">"</div>

            <blockquote class="quote">{{ quote }}</blockquote>

            <footer class="author">
                <img :src="author.avatar" :alt="author.name" class="avatar" />

                <div class="text">
                    <div class="name">{{ author.name }}</div>
                    <div class="role">{{ author.role }}</div>
                </div>
            </footer>
        </div>
    </section>
</template>

<style scoped>
.testimonial {
    padding: var(--space-10) var(--space-5);
    background: #FFD400;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    font-family: var(--font-mono), monospace;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.mark {
    font-size: 9rem;
    font-weight: 700;
    line-height: 0.7;
    color: #000000;
    margin-bottom: var(--space-3);
}

.quote {
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: var(--leading-snug);
    color: #000000;
    margin: 0 0 var(--space-6);
    max-width: 960px;
}

.author {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    border-top: 2px solid #000000;
    padding-top: var(--space-4);
}

/* §9 : images halftone autorisées. Bord 2px noir, hard shadow jaune impossible
   (on est déjà sur fond jaune), donc ombre noire. Rayon 0 par §5. */
.avatar {
    width: 56px;
    height: 56px;
    object-fit: cover;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: var(--shadow-sm);
    flex-shrink: 0;
}

.text {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.name {
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: #000000;
}

.role {
    display: inline-block;
    align-self: flex-start;
    font-size: var(--text-sm);
    font-weight: 400;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: #FFFFFF;
    background: #000000;
    padding: 2px 6px;
}

@media (max-width: 768px) {
    .testimonial {
        padding: var(--space-8) var(--space-5);
    }

    .quote {
        font-size: var(--text-2xl);
    }

    .mark {
        font-size: 6rem;
    }
}
</style>
