<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="container">
            <span>© {{ year }}</span>
            <span>Construit avec DESIGN.md</span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: var(--space-5);
    background: var(--bg-1);
    border-top: 1px solid var(--border-subtle);
}

.container {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--text-xs);
    color: var(--text-tertiary);
}

@media (max-width: 480px) {
    .container {
        flex-direction: column;
        gap: var(--space-2);
    }
}
</style>
