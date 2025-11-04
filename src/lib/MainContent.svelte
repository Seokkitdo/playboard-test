<script lang="ts">
  import { onMount } from 'svelte'
  import type { Module, Screen, ComponentItem } from './types'
  import SampleCard from './components/SampleCard.svelte'
  import SampleButton from './components/SampleButton.svelte'
  import SampleForm from './components/SampleForm.svelte'
  import SampleTable from './components/SampleTable.svelte'
  import TitleSearchFilter from './components/TitleSearchFilter.svelte'
  import AssessmentSessionCard from './components/AssessmentSessionCard.svelte'

  interface Props {
    selectedModule: Module | null
    selectedScreen: Screen | null
    scrollToComponent: string | null
    onComponentSelect: (component: ComponentItem) => void
  }

  let {
    selectedModule,
    selectedScreen,
    scrollToComponent,
    onComponentSelect
  }: Props = $props()

  let isSidebarOpen = $state(true)
  let selectedComponent = $state<ComponentItem | null>(null)
  let componentElements = new Map<string, HTMLElement>()
  let scrollContainer = $state<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  // Reset selected component when screen changes
  $effect(() => {
    if (selectedScreen) {
      selectedComponent = null
    }
  })

  function handleComponentClick(component: ComponentItem) {
    selectedComponent = component
    onComponentSelect(component)
  }

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen
  }

  // Register component element
  function registerElement(node: HTMLElement, componentId: string) {
    componentElements.set(componentId, node)

    // Observe element if observer exists
    if (observer) {
      observer.observe(node)
    }

    return {
      destroy() {
        componentElements.delete(componentId)
        if (observer) {
          observer.unobserve(node)
        }
      }
    }
  }

  // Intersection Observer for automatic active state based on scroll
  onMount(() => {
    if (!scrollContainer) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const componentId = entry.target.getAttribute('data-component-id')
            if (componentId && selectedScreen) {
              const component = selectedScreen.components.find(
                (c) => c.id === componentId
              )
              if (component) {
                selectedComponent = component
                onComponentSelect(component)
              }
            }
          }
        })
      },
      {
        root: scrollContainer,
        threshold: [0, 0.5, 1],
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  })

  // Handle scroll to component when requested from RightSidebar
  $effect(() => {
    if (scrollToComponent) {
      const element = componentElements.get(scrollToComponent)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  })

  // 컴포넌트 타입별 Props 정의
  function getComponentProps(type: string) {
    switch (type) {
      case 'card':
        return [
          { name: 'title', type: 'string', description: '카드 제목' },
          { name: 'description', type: 'string', description: '카드 설명' },
          {
            name: 'variant',
            type: "'default' | 'outlined'",
            description: '카드 스타일 변형'
          }
        ]
      case 'button':
        return [
          { name: 'label', type: 'string', description: '버튼 텍스트' },
          {
            name: 'variant',
            type: "'primary' | 'secondary' | 'outlined'",
            description: '버튼 스타일'
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            description: '버튼 크기'
          },
          { name: 'disabled', type: 'boolean', description: '비활성화 여부' }
        ]
      case 'form':
        return [
          { name: 'title', type: 'string', description: '폼 제목' },
          { name: 'onSubmit', type: '() => void', description: '제출 핸들러' },
          { name: 'fields', type: 'Field[]', description: '폼 필드 목록' }
        ]
      case 'table':
        return [
          { name: 'title', type: 'string', description: '테이블 제목' },
          { name: 'columns', type: 'Column[]', description: '컬럼 정의' },
          { name: 'data', type: 'any[]', description: '테이블 데이터' },
          {
            name: 'pagination',
            type: 'boolean',
            description: '페이지네이션 사용 여부'
          }
        ]
      case 'titleSearchFilter':
        return [
          {
            name: 'placeholder',
            type: 'string',
            description: '검색 입력 필드 플레이스홀더'
          },
          { name: 'filters', type: 'Filter[]', description: '필터 칩 목록' },
          {
            name: 'sortOptions',
            type: 'SortOption[]',
            description: '정렬 옵션 목록'
          },
          {
            name: 'onSearch',
            type: '(query: string) => void',
            description: '검색 핸들러'
          },
          {
            name: 'onFilterChange',
            type: '(filters: Filter[]) => void',
            description: '필터 변경 핸들러'
          }
        ]
      case 'assessmentSessionCard':
        return [
          {
            name: 'status',
            type: "'검사 진행중' | '채점 필요' | '채점 완료' | '종합 보고서 반려' | '종합 보고서 완료'",
            description: '검사 세션 상태'
          },
          { name: 'clientName', type: 'string', description: '내담자 이름' },
          { name: 'clientId', type: 'string', description: '내담자 ID' },
          { name: 'birthDate', type: 'string', description: '생년월일' },
          { name: 'age', type: 'number', description: '만 나이' },
          { name: 'battery', type: 'Battery', description: '배터리 정보' },
          {
            name: 'additionalTests',
            type: 'Test[]',
            description: '추가 검사 목록'
          },
          { name: 'receptionDate', type: 'string', description: '접수일' }
        ]
      default:
        return []
    }
  }
</script>

<main class="flex-1 h-full overflow-hidden bg-slate-950 flex flex-col">
  {#if selectedModule && selectedScreen}
    <!-- Header -->
    <div class="px-6 py-4 border-b border-slate-800">
      <h1 class="text-2xl font-bold text-slate-100 mb-1">
        {selectedModule.name} - {selectedScreen.name}
      </h1>
      <p class="text-sm text-slate-400">
        이 화면에서 사용되는 컴포넌트들을 확인하고 수정할 수 있습니다.
      </p>
    </div>

    <div class="flex-1 flex overflow-hidden relative">
      <!-- Component List (Full Width with Rendered Components) -->
      <div
        class="flex-1 overflow-y-auto p-6 space-y-4"
        bind:this={scrollContainer}
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-slate-200">컴포넌트 목록</h2>
          <button
            onclick={toggleSidebar}
            class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex items-center gap-2"
          >
            <span class="text-sm"
              >{isSidebarOpen ? '사이드바 닫기' : '사이드바 열기'}</span
            >
            <svg
              class="w-4 h-4 transition-transform {isSidebarOpen
                ? ''
                : 'rotate-180'}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {#each selectedScreen.components as component}
          <div
            role="button"
            tabindex="0"
            data-component-id={component.id}
            use:registerElement={component.id}
            onclick={() => handleComponentClick(component)}
            onkeydown={(e) =>
              e.key === 'Enter' && handleComponentClick(component)}
            class="cursor-pointer border rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all overflow-hidden {selectedComponent?.id ===
            component.id
              ? 'border-sky-500 ring-2 ring-sky-500/50'
              : 'border-slate-700 hover:border-slate-600'}"
          >
            <div class="p-4 border-b border-slate-700">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-base font-semibold text-slate-100 mb-1">
                    {component.name}
                  </h3>
                  <p class="text-sm text-slate-400">
                    {component.description || ''}
                  </p>
                </div>
                <span
                  class="inline-block px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-full"
                >
                  {component.type}
                </span>
              </div>
            </div>
            <div class="p-6 bg-slate-900/30">
              {#if component.type === 'card'}
                <SampleCard
                  title={component.name}
                  description={component.description || ''}
                />
              {:else if component.type === 'button'}
                <div class="flex items-center justify-center py-4">
                  <SampleButton label={component.name} />
                </div>
              {:else if component.type === 'form'}
                <SampleForm title={component.name} />
              {:else if component.type === 'table'}
                <SampleTable title={component.name} />
              {:else if component.type === 'titleSearchFilter'}
                <TitleSearchFilter />
              {:else if component.type === 'assessmentSessionCard'}
                <div class="flex flex-wrap gap-4">
                  <AssessmentSessionCard />
                </div>
              {:else}
                <div
                  class="p-4 border border-slate-600 rounded-lg bg-slate-700 text-center"
                >
                  <h3 class="font-semibold text-slate-100">{component.name}</h3>
                  <p class="text-xs text-slate-400 mt-2">
                    타입: {component.type}
                  </p>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>

      <!-- Right: Props & Prompt (Collapsible Sidebar) -->
      <div
        class="border-l border-slate-800 overflow-y-auto transition-all duration-300 {isSidebarOpen
          ? 'w-96'
          : 'w-0'}"
      >
        {#if isSidebarOpen}
          <div class="p-6 space-y-6 w-96">
            <!-- Props Section -->
            <div>
              <h2 class="text-lg font-semibold text-slate-200 mb-3">
                Props 정보
              </h2>
              {#if selectedComponent}
                <div
                  class="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                >
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-slate-400">컴포넌트:</span>
                      <span class="text-slate-200"
                        >{selectedComponent.name}</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-400">타입:</span>
                      <span class="text-slate-200"
                        >{selectedComponent.type}</span
                      >
                    </div>
                    {#if selectedComponent.description}
                      <div class="border-t border-slate-700 my-3"></div>
                      <div>
                        <div class="text-slate-400 font-medium mb-1">설명:</div>
                        <p class="text-slate-300 text-xs">
                          {selectedComponent.description}
                        </p>
                      </div>
                    {/if}
                    <div class="border-t border-slate-700 my-3"></div>
                    <div class="text-slate-400 font-medium mb-2">Props:</div>
                    <div class="space-y-2">
                      {#each getComponentProps(selectedComponent.type) as prop}
                        <div class="pl-3 bg-slate-900/50 rounded p-2">
                          <div class="font-mono text-xs">
                            <span class="text-sky-400">{prop.name}</span>:
                            <span class="text-slate-300">{prop.type}</span>
                          </div>
                          <div class="text-xs text-slate-500 mt-1">
                            {prop.description}
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              {:else}
                <div
                  class="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center text-slate-400 text-sm"
                >
                  컴포넌트를 선택하면 Props 정보가 표시됩니다
                </div>
              {/if}
            </div>

            {#if selectedComponent}
              <!-- Prompt Section -->
              <div>
                <h2 class="text-lg font-semibold text-slate-200 mb-3">
                  Prompt
                </h2>
                <div class="space-y-3">
                  <textarea
                    class="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
                    placeholder="컴포넌트 수정 요청을 입력하세요...&#10;예: 카드에 그림자 효과를 추가해주세요"
                  ></textarea>
                  <button
                    class="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    수정 요청
                  </button>
                  <div class="text-xs text-slate-500 space-y-1">
                    <p>• 자동으로 코드를 수정합니다</p>
                    <p>• 변경사항을 커밋합니다</p>
                    <p>• 원격 저장소에 푸시합니다</p>
                  </div>
                </div>
              </div>

              <!-- History Section -->
              <div>
                <h2 class="text-lg font-semibold text-slate-200 mb-3">
                  수정 이력
                </h2>
                <div class="space-y-2">
                  <div
                    class="bg-slate-800/50 border border-slate-700 rounded p-3"
                  >
                    <div class="flex items-start gap-2">
                      <div
                        class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-1.5"
                      ></div>
                      <div class="flex-1 text-xs">
                        <p class="text-slate-300">카드 스타일 업데이트</p>
                        <p class="text-slate-500 mt-1">2분 전</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-slate-800/50 border border-slate-700 rounded p-3"
                  >
                    <div class="flex items-start gap-2">
                      <div
                        class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-1.5"
                      ></div>
                      <div class="flex-1 text-xs">
                        <p class="text-slate-300">버튼 크기 조정</p>
                        <p class="text-slate-500 mt-1">10분 전</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
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
