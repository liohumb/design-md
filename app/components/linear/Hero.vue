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
    padding: 128px 24px 96px;
    background: var(--bg-0);
    overflow: hidden;
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
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
}

.eyebrow {
    display: inline-block;
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--text-tertiary);
    padding: 4px 10px;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-full);
    margin-bottom: var(--space-5);
}

.title {
    font-size: var(--text-4xl);
    font-weight: 600;
    letter-spacing: var(--tracking-tight);
    line-height: var(--leading-tight);
    color: var(--text-primary);
    max-width: 880px;
    margin: 0 auto var(--space-4);
}

.subtitle {
    font-size: var(--text-lg);
    line-height: var(--leading-normal);
    color: var(--text-secondary);
    max-width: 640px;
    margin: 0 auto var(--space-6);
}

.actions {
    display: flex;
    gap: var(--space-3);
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 10px 16px;
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    font-weight: 500;
    text-decoration: none;
    transition: background var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.btn--primary {
    background: var(--accent);
    color: #fff;
}

.btn--primary:hover {
    background: var(--accent-hover);
}

@media (max-width: 640px) {
    .hero {
        padding: 96px 16px 64px;
    }

    .title {
        font-size: 2.25rem;
    }
}
</style>
