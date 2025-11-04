<script lang="ts">
  import type { Module, Screen } from '../types';
  import { MODULES } from '../constants/modules';

  interface Props {
    onScreenSelect: (module: Module, screen: Screen) => void;
  }

  let { onScreenSelect }: Props = $props();

  let expandedModules = $state<Set<string>>(new Set());
  let selectedScreenId = $state<string | null>(null);

  function toggleModule(moduleId: string) {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    expandedModules = newExpanded;
  }

  function handleScreenClick(module: Module, screen: Screen) {
    selectedScreenId = screen.id;
    onScreenSelect(module, screen);
  }
</script>

<aside class="h-full w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto">
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-800 mb-4">모듈 목록</h2>
    <nav class="space-y-1">
      {#each MODULES as module}
        <div class="mb-2">
          <button
            onclick={() => toggleModule(module.id)}
            class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span>{module.name}</span>
            <svg
              class="w-4 h-4 transition-transform {expandedModules.has(module.id)
                ? 'rotate-180'
                : ''}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {#if expandedModules.has(module.id)}
            <div class="ml-4 mt-1 space-y-1">
              {#each module.screens as screen}
                <button
                  onclick={() => handleScreenClick(module, screen)}
                  class="w-full text-left px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200 transition-colors {selectedScreenId ===
                  screen.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : ''}"
                >
                  {screen.name}
                </button>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </nav>
  </div>
</aside>
