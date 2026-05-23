<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="container">
            <span>© {{ year }}</span>
            <span>Construit avec DESIGN.md <span class="ornament" aria-hidden="true">❦</span></span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: var(--space-6) var(--space-5);
    background: var(--bg-0);
    font-family: var(--font-sans), sans-serif;
}

.container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--text-xs);
    color: var(--text-tertiary);
}

.ornament {
    font-family: var(--font-serif), serif;
    font-size: var(--text-base);
    margin-left: var(--space-1);
    vertical-align: -2px;
}

@media (max-width: 480px) {
    .container {
        flex-direction: column;
        gap: var(--space-2);
    }
}
</style>
