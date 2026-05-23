<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="container">
            <span>© {{ year }}</span>
            <span>CONSTRUIT AVEC DESIGN.MD</span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: var(--space-5);
    background: #FFFFFF;
    border-top: 2px solid #000000;
    font-family: var(--font-mono), monospace;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: #000000;
}

@media (max-width: 480px) {
    .container {
        flex-direction: column;
        gap: var(--space-2);
    }
}
</style>
