<script setup lang="ts">
defineProps<{
    eyebrow: string
    title: string
    items: Array<{ icon: string; title: string; description: string }>
}>()
</script>

<template>
    <section class="features">
        <div class="container">
            <header class="header">
                <span class="eyebrow">{{ eyebrow }}</span>
                <h2 class="title">{{ title }}</h2>
            </header>

            <div class="grid">
                <article v-for="item in items" :key="item.title" class="card">
                    <div class="card-head">
                        <span class="icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <template v-if="item.icon === 'palette'">
                                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                                </template>

                                <template v-else-if="item.icon === 'wand'">
                                    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                                    <path d="m14 7 3 3" />
                                    <path d="M5 6v4" />
                                    <path d="M19 14v4" />
                                    <path d="M10 2v2" />
                                    <path d="M7 8H3" />
                                    <path d="M21 16h-4" />
                                    <path d="M11 3H9" />
                                </template>

                                <template v-else-if="item.icon === 'git-branch'">
                                    <line x1="6" x2="6" y1="3" y2="15" />
                                    <circle cx="18" cy="6" r="3" />
                                    <circle cx="6" cy="18" r="3" />
                                    <path d="M18 9a9 9 0 0 1-9 9" />
                                </template>
                          </svg>
                        </span>

                        <h3 class="card-title">{{ item.title }}</h3>
                    </div>

                    <p class="card-desc">{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.features {
    padding: var(--space-10) var(--space-5);
    background: var(--bg-0);
}

.container {
    max-width: 1120px;
    margin: 0 auto;
}

.header {
    text-align: center;
    margin-bottom: var(--space-7);
}

.eyebrow {
    display: inline-block;
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--text-tertiary);
    margin-bottom: var(--space-3);
}

.title {
    font-size: var(--text-2xl);
    font-weight: 600;
    letter-spacing: var(--tracking-tight);
    line-height: var(--leading-snug);
    color: var(--text-primary);
    margin: 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
}

.card {
    background: var(--bg-2);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    transition: border-color var(--duration-fast) var(--ease-out);
}

.card:hover {
    border-color: var(--border-default);
}

.card-head {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-2);
}

.icon {
    display: inline-flex;
    color: var(--accent);
    flex-shrink: 0;
}

.card-title {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    line-height: var(--leading-snug);
}

.card-desc {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
    color: var(--text-secondary);
    margin: 0;
}

@media (max-width: 840px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .features {
        padding: var(--space-8) var(--space-4);
    }
}
</style>
