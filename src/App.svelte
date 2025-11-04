<script lang="ts">
  import type { Module, Screen, ComponentItem } from './types';
  import LeftSidebar from './lib/LeftSidebar.svelte';
  import MainContent from './lib/MainContent.svelte';
  import RightSidebar from './lib/RightSidebar.svelte';

  let selectedModule = $state<Module | null>(null);
  let selectedScreen = $state<Screen | null>(null);
  let selectedComponent = $state<ComponentItem | null>(null);

  function handleScreenSelect(module: Module, screen: Screen) {
    selectedModule = module;
    selectedScreen = screen;
    selectedComponent = null;
  }

  function handleComponentSelect(component: ComponentItem) {
    selectedComponent = component;
  }
</script>

<div class="h-screen w-screen flex flex-col overflow-hidden">
  <header class="h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center px-6 shadow-lg">
    <h1 class="text-2xl font-bold">Playboard</h1>
    <span class="ml-4 text-sm opacity-90">스토리보드 관리 시스템</span>
  </header>

  <div class="flex-1 flex overflow-hidden">
    <LeftSidebar onScreenSelect={handleScreenSelect} />
    <MainContent
      {selectedModule}
      {selectedScreen}
      onComponentSelect={handleComponentSelect}
    />
    <RightSidebar {selectedScreen} {selectedComponent} />
  </div>
</div>
