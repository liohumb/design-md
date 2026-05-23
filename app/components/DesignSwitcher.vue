<script setup lang="ts">
export type PresetKey = 'linear' | 'brutalist' | 'notion'

const presets: { key: PresetKey; label: string }[] = [
    { key: 'linear', label: 'Linear' },
    { key: 'brutalist', label: 'Brutalist' },
    { key: 'notion', label: 'Notion' }
]

const model = defineModel<PresetKey>( { required: true } )
</script>

<template>
    <div class="switcher" role="tablist" aria-label="Preset de design">
        <button v-for="p in presets"
                :key="p.key"
                role="tab"
                :aria-selected="model === p.key"
                class="tab"
                @click="model = p.key"
        >
            {{ p.label }}
        </button>
    </div>
</template>

<style scoped>
.switcher {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    background: rgba(18, 18, 20, 0.78);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    line-height: 20px;
}

.tab {
    appearance: none;
    background: transparent;
    border: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.6);
    height: 32px;
    padding: 0 14px;
    border-radius: 7px;
    cursor: pointer;
    transition: background 140ms ease, color 140ms ease;
}

.tab:hover {
    color: rgba(255, 255, 255, 0.95);
}

.tab[aria-selected="true"] {
    background: #ffffff;
    color: #0a0a0c;
}

.tab:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
}
</style>
