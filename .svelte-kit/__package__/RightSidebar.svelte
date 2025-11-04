<script lang="ts">
  import type { ComponentItem, Screen } from '../types';

  interface Props {
    selectedScreen: Screen | null;
    selectedComponent: ComponentItem | null;
    onScrollToComponent: (componentId: string) => void;
  }

  let { selectedScreen, selectedComponent, onScrollToComponent }: Props = $props();

  function getComponentIcon(type: string) {
    switch (type) {
      case 'card':
        return '🃏';
      case 'button':
        return '🔘';
      case 'form':
        return '📝';
      case 'table':
        return '📊';
      case 'modal':
        return '🪟';
      default:
        return '📦';
    }
  }

  function handleComponentClick(componentId: string) {
    onScrollToComponent(componentId);
  }
</script>

<aside class="h-full w-64 border-l border-slate-800 bg-slate-900 overflow-y-auto">
  <div class="p-4">
    <h2 class="text-lg font-bold text-slate-100 mb-4">컴포넌트 목록</h2>

    {#if selectedScreen && selectedScreen.components.length > 0}
      <div class="space-y-2">
        {#each selectedScreen.components as component}
          <button
            onclick={() => handleComponentClick(component.id)}
            class="w-full p-3 rounded-lg border transition-all text-left {selectedComponent?.id ===
            component.id
              ? 'border-sky-500 bg-slate-800 ring-2 ring-sky-500/50'
              : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'}"
          >
            <div class="flex items-start gap-2">
              <span class="text-2xl">{getComponentIcon(component.type)}</span>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-slate-100 truncate">
                  {component.name}
                </h3>
                <p class="text-xs text-slate-400 mt-1">
                  {component.type}
                </p>
                {#if component.description}
                  <p class="text-xs text-slate-300 mt-2 line-clamp-2">
                    {component.description}
                  </p>
                {/if}
              </div>
            </div>
          </button>
        {/each}
      </div>

      <div class="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <h3 class="text-sm font-semibold text-slate-100 mb-2">통계</h3>
        <div class="space-y-1 text-sm text-slate-300">
          <p>총 컴포넌트: {selectedScreen.components.length}개</p>
          <p>
            카드: {selectedScreen.components.filter((c) => c.type === 'card').length}개
          </p>
          <p>
            버튼: {selectedScreen.components.filter((c) => c.type === 'button').length}개
          </p>
          <p>
            폼: {selectedScreen.components.filter((c) => c.type === 'form').length}개
          </p>
          <p>
            테이블: {selectedScreen.components.filter((c) => c.type === 'table').length}개
          </p>
        </div>
      </div>
    {:else}
      <div class="text-center text-slate-500 mt-8">
        <svg
          class="w-16 h-16 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
        <p class="text-sm">화면을 선택하면<br />컴포넌트 목록이 표시됩니다</p>
      </div>
    {/if}
  </div>
</aside>
