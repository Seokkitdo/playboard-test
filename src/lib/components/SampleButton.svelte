<script lang="ts">
  interface Props {
    label: string
    class?: string
  }

  let { label, class: className = '' }: Props = $props()
</script>

<div
  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow {className}"
>
  <h3 class="text-lg font-semibold text-gray-800 mb-4">{label}</h3>
  <div class="space-y-3">
    <button
      class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      기본 버튼
    </button>
    <button
      class="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
    >
      보조 버튼
    </button>
    <button
      class="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
    >
      아웃라인 버튼
    </button>
  </div>
  <div class="mt-4 pt-4 border-t border-gray-100">
    <span
      class="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"
    >
      버튼 컴포넌트
    </span>
  </div>
</div>
