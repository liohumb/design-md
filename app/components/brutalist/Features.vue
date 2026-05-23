<script setup lang="ts">
defineProps<{
    eyebrow: string
    title: string
    items: Array<{
        icon: string
        title: string
        description: string
    }>
}>()
</script>

<template>
    <section class="features">
        <div class="container">
            <header class="head">
                <span class="eyebrow">{{ eyebrow }}</span>
                <h2 class="title">{{ title }}</h2>
            </header>

            <div class="grid">
                <article v-for="(item, i) in items" :key="i" class="card">
                    <div class="num">{{ String( i + 1 ).padStart( 2, '0' ) }}</div>
                    <div class="iconlabel">[{{ item.icon.toUpperCase() }}]</div>
                    <h3 class="card-title">{{ item.title }}</h3>
                    <p class="card-desc">{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.features {
    padding: var(--space-10) var(--space-5);
    background: #FFFFFF;
    border-bottom: 2px solid #000000;
    font-family: var(--font-mono), monospace;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.head {
    margin-bottom: var(--space-7);
}

.eyebrow {
    display: inline-block;
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: #000000;
    background: #FFD400;
    padding: 4px 8px;
    border: 2px solid #000000;
    margin-bottom: var(--space-4);
}

.title {
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: var(--leading-tight);
    color: #000000;
    margin: 0;
    max-width: 800px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
}

.card {
    position: relative;
    background: #FFFFFF;
    border: 2px solid #000000;
    padding: var(--space-5);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
}

.card:hover {
    box-shadow: var(--shadow-lg);
}

.num {
    font-size: var(--text-4xl);
    font-weight: 700;
    line-height: 1;
    color: #000000;
    margin: 0 0 var(--space-4);
}

.iconlabel {
    align-self: flex-start;
    font-size: var(--text-xs);
    font-weight: 700;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: #000000;
    background: #FFD400;
    padding: 2px 6px;
    border: 2px solid #000000;
    margin-bottom: var(--space-4);
}

.card-title {
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: var(--leading-snug);
    color: #000000;
    margin: 0 0 var(--space-2);
}

.card-desc {
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    color: #000000;
    margin: 0;
}

@media (max-width: 900px) {
    .features {
        padding: var(--space-8) var(--space-5);
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
