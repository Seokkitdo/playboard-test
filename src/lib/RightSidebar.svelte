<script lang="ts">
  import type { ComponentItem, Screen } from '../types';

  interface Props {
    selectedScreen: Screen | null;
    selectedComponent: ComponentItem | null;
  }

  let { selectedScreen, selectedComponent }: Props = $props();

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
</script>

<aside class="h-full w-64 border-l border-gray-200 bg-gray-50 overflow-y-auto">
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-800 mb-4">컴포넌트 목록</h2>

    {#if selectedScreen && selectedScreen.components.length > 0}
      <div class="space-y-2">
        {#each selectedScreen.components as component}
          <div
            class="p-3 rounded-lg border transition-all {selectedComponent?.id ===
            component.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:border-gray-300'}"
          >
            <div class="flex items-start gap-2">
              <span class="text-2xl">{getComponentIcon(component.type)}</span>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-gray-800 truncate">
                  {component.name}
                </h3>
                <p class="text-xs text-gray-500 mt-1">
                  {component.type}
                </p>
                {#if component.description}
                  <p class="text-xs text-gray-600 mt-2 line-clamp-2">
                    {component.description}
                  </p>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 class="text-sm font-semibold text-blue-800 mb-2">통계</h3>
        <div class="space-y-1 text-sm text-blue-700">
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
      <div class="text-center text-gray-400 mt-8">
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
