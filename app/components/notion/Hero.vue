<script setup lang="ts">
defineProps<{
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: { label: string; href: string }
}>()
</script>

<template>
    <section class="hero">
        <div class="container">
            <span class="eyebrow">{{ eyebrow }}</span>
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>

            <div class="actions">
                <a :href="primaryCta.href" class="btn btn--primary" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        <path fill="currentColor"
                              d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716-3.0686 8.4239-7.2578 9.6162v-3.0117c0-.7275-.1595-1.4465-.4678-2.1055 2.1883-.7822 4.2783-2.4447 4.2783-4.4355 0-1.2663-.4671-2.75174-1.5127-3.63186V6l-2.9462.98828c-.6589-.16036-1.3628-.24706-2.0938-.24707-.731 0-1.4349.08673-2.09375.24707L6.95996 6v2.43164c-1.04555.88009-1.51163 2.36566-1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355-.26358.5635-.41862 1.1711-.45801 1.7901-.13854.0283-.25191.0415-.34473.04-.20756-.0033-.36606-.06-.51953-.1562-1.11532-.7-1.54401-1.9835-3.05566-2.1543-.19076-.0214-.3474.1371-.34766.3291 0 .1922.15921.3423.34473.3925 1.44216.39 1.42755 3.2266 3.54785 3.2598.11976.0019.24101-.0069.36426-.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2"
                        />
                    </svg>
                    {{ primaryCta.label }}
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    padding: var(--space-9) var(--space-5) var(--space-8);
    background: var(--gradient-hero);
    font-family: var(--font-sans), sans-serif;
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--gradient-faint);
    pointer-events: none;
}

.container {
    position: relative;
    max-width: 720px;
    margin: 0 auto;
}

.eyebrow {
    display: inline-block;
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: var(--tracking-wide);
    color: var(--accent);
    background: var(--accent-faint);
    padding: 4px 10px;
    border-radius: var(--radius-full);
    margin-bottom: var(--space-5);
}

.title {
    font-family: var(--font-serif), serif;
    font-style: italic;
    font-weight: 500;
    font-size: var(--text-4xl);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--text-primary);
    margin: 0 0 var(--space-4);
}

.subtitle {
    font-size: var(--text-lg);
    line-height: var(--leading-normal);
    color: var(--text-secondary);
    margin: 0 0 var(--space-6);
    max-width: 640px;
}

.actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 10px 18px;
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: var(--text-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.btn--primary {
    background: var(--accent);
    color: #FFFFFF;
    box-shadow: var(--shadow-sm);
}

.btn--primary:hover {
    background: var(--accent-hover);
    box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
    .hero {
        padding: var(--space-8) var(--space-5) var(--space-7);
    }

    .title {
        font-size: var(--text-3xl);
    }
}
</style>
