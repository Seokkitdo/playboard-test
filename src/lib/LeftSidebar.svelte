<script lang="ts">
  import type { Module, Screen } from './types';
  import { MODULES } from './constants/modules';

  interface Props {
    onScreenSelect: (module: Module, screen: Screen) => void;
  }

  let { onScreenSelect }: Props = $props();

  let selectedScreenId = $state<string | null>(null);

  function handleScreenClick(module: Module, screen: Screen) {
    selectedScreenId = screen.id;
    onScreenSelect(module, screen);
  }
</script>

<aside class="h-full w-64 border-r border-slate-800 bg-slate-900 overflow-y-auto">
  <div class="px-4 py-6">
    <nav class="space-y-8">
      {#each MODULES as module}
        <div>
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 px-3">
            {module.name}
          </h3>
          <ul class="space-y-1 border-l border-slate-700 ml-3">
            {#each module.screens as screen}
              <li>
                <button
                  onclick={() => handleScreenClick(module, screen)}
                  class="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white rounded-r-md transition-colors {selectedScreenId ===
                  screen.id
                    ? 'bg-slate-800 text-sky-400 font-medium border-l-2 border-sky-500 -ml-px'
                    : 'hover:bg-slate-800/50'}"
                >
                  {screen.name}
                </button>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </nav>
  </div>
</aside>
