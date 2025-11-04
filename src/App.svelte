<script lang="ts">
  import type { Module, Screen, ComponentItem } from './lib/types'
  import LeftSidebar from './lib/LeftSidebar.svelte'
  import MainContent from './lib/MainContent.svelte'
  import RightSidebar from './lib/RightSidebar.svelte'
  import SampleCard from './lib/components/SampleCard.svelte'

  let selectedModule = $state<Module | null>(null)
  let selectedScreen = $state<Screen | null>(null)
  let selectedComponent = $state<ComponentItem | null>(null)
  let scrollToComponent = $state<string | null>(null)

  function handleScreenSelect(module: Module, screen: Screen) {
    selectedModule = module
    selectedScreen = screen
    selectedComponent = null
  }

  function handleComponentSelect(component: ComponentItem) {
    selectedComponent = component
  }

  function handleScrollToComponent(componentId: string) {
    scrollToComponent = componentId
    // Reset after a brief delay to allow for future scrolls to the same component
    setTimeout(() => {
      scrollToComponent = null
    }, 100)
  }
</script>

<div class="h-screen w-screen flex flex-col overflow-hidden bg-slate-950">
  <header
    class="h-16 bg-slate-900 border-b border-slate-800 text-white flex items-center px-6"
  >
    <h1 class="text-2xl font-bold">Imomtae Playboard</h1>
    <!-- <span class="ml-4 text-sm text-slate-400">스토리보드 관리 시스템</span> -->
  </header>

  <div class="flex-1 flex overflow-hidden">
    <LeftSidebar onScreenSelect={handleScreenSelect} />
    <MainContent
      {selectedModule}
      {selectedScreen}
      {scrollToComponent}
      onComponentSelect={handleComponentSelect}
    />
    <RightSidebar
      {selectedScreen}
      {selectedComponent}
      onScrollToComponent={handleScrollToComponent}
    />
  </div>
</div>
