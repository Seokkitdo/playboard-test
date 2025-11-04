<script lang="ts">
  interface Props {
    title: string
    description?: string
    class?: string
  }

  let { title, description = '', class: className = '' }: Props = $props()
</script>

<div
  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow {className}"
>
  <div class="flex items-center gap-3 mb-4">
    <div
      class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
    >
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
  <p class="text-sm text-gray-600 leading-relaxed">{description}</p>
  <div class="mt-4 pt-4 border-t border-gray-100">
    <span
      class="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
    >
      카드 컴포넌트
    </span>
  </div>
</div>
