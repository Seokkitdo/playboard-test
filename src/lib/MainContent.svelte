<script lang="ts">
  import type { Module, Screen, ComponentItem } from '../types';
  import SampleCard from './components/SampleCard.svelte';
  import SampleButton from './components/SampleButton.svelte';
  import SampleForm from './components/SampleForm.svelte';
  import SampleTable from './components/SampleTable.svelte';

  interface Props {
    selectedModule: Module | null;
    selectedScreen: Screen | null;
    onComponentSelect: (component: ComponentItem) => void;
  }

  let { selectedModule, selectedScreen, onComponentSelect }: Props = $props();

  function handleComponentClick(component: ComponentItem) {
    onComponentSelect(component);
  }
</script>

<main class="flex-1 h-full overflow-y-auto bg-slate-950 p-6">
  {#if selectedModule && selectedScreen}
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-slate-100 mb-2">
        {selectedModule.name} - {selectedScreen.name}
      </h1>
      <p class="text-sm text-slate-400">
        이 화면에서 사용되는 컴포넌트들을 확인할 수 있습니다.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each selectedScreen.components as component}
        <div
          role="button"
          tabindex="0"
          onclick={() => handleComponentClick(component)}
          onkeydown={(e) => e.key === 'Enter' && handleComponentClick(component)}
          class="cursor-pointer transform transition-all duration-200 hover:scale-105"
        >
          {#if component.type === 'card'}
            <SampleCard
              title={component.name}
              description={component.description || ''}
            />
          {:else if component.type === 'button'}
            <SampleButton label={component.name} />
          {:else if component.type === 'form'}
            <SampleForm title={component.name} />
          {:else if component.type === 'table'}
            <SampleTable title={component.name} />
          {:else}
            <div
              class="p-4 border border-slate-700 rounded-lg bg-slate-800 hover:bg-slate-700"
            >
              <h3 class="font-semibold text-slate-100">{component.name}</h3>
              <p class="text-sm text-slate-400 mt-2">
                {component.description || ''}
              </p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <div class="flex items-center justify-center h-full text-slate-500">
      <div class="text-center">
        <svg
          class="w-24 h-24 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p class="text-lg">왼쪽 메뉴에서 화면을 선택해주세요</p>
      </div>
    </div>
  {/if}
</main>
