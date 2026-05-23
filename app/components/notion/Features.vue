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
const iconMap: Record<string, string> = {
    palette: '🎨',
    wand: '🪄',
    'wand-2': '🪄',
    'git-branch': '🌿',
    zap: '⚡',
    sparkles: '✨',
    target: '🎯',
    book: '📚',
    'book-open': '📚',
    coffee: '☕',
    pen: '📝',
    pencil: '📝',
    edit: '📝',
    leaf: '🌱',
    sprout: '🌱',
    rocket: '🚀',
    check: '✅',
    'check-circle': '✅',
    heart: '❤️',
    star: '⭐',
    layers: '🗂️',
    users: '👥',
    user: '👤',
    globe: '🌍',
    lock: '🔒',
    shield: '🛡️',
    bell: '🔔',
    search: '🔎',
    bookmark: '🔖',
    file: '📄',
    folder: '📁',
    clock: '🕰️',
    message: '💬',
    'message-circle': '💬',
    chart: '📊',
    'bar-chart': '📊'
}
const toEmoji = ( name: string ) => iconMap[name.toLowerCase()] ?? '📄'
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
                    <div class="card-head">
                        <span class="emoji" aria-hidden="true">{{ toEmoji( item.icon ) }}</span>
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
    padding: var(--space-9) var(--space-5);
    background: var(--bg-0);
    font-family: var(--font-sans), sans-serif;
}

.container {
    max-width: 1024px;
    margin: 0 auto;
}

.head {
    max-width: 720px;
    margin: 0 auto var(--space-7);
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
    margin-bottom: var(--space-3);
}

.title {
    font-family: var(--font-serif), serif;
    font-weight: 600;
    font-size: var(--text-2xl);
    line-height: var(--leading-snug);
    color: var(--text-primary);
    margin: 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
}

.card {
    background: var(--bg-1);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out);
}

.card:hover {
    box-shadow: var(--shadow-md);
    transform: scale(1.005);
}

.card-head {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-2);
}

.emoji {
    font-size: 1.6em;
    line-height: 1;
    flex-shrink: 0;
}

.card-title {
    font-family: var(--font-sans), sans-serif;
    font-weight: 600;
    font-size: var(--text-lg);
    line-height: var(--leading-snug);
    color: var(--text-primary);
    margin: 0;
}

.card-desc {
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    color: var(--text-secondary);
    margin: 0;
}

@media (max-width: 900px) {
    .features {
        padding: var(--space-7) var(--space-5);
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
