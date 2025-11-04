<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<div
  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
>
  <h3 class="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
  <form class="space-y-4">
    <div>
      <label for="name-input" class="block text-sm font-medium text-gray-700 mb-1">
        이름
      </label>
      <input
        id="name-input"
        type="text"
        placeholder="이름을 입력하세요"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label for="email-input" class="block text-sm font-medium text-gray-700 mb-1">
        이메일
      </label>
      <input
        id="email-input"
        type="email"
        placeholder="example@email.com"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label for="description-input" class="block text-sm font-medium text-gray-700 mb-1">
        설명
      </label>
      <textarea
        id="description-input"
        placeholder="설명을 입력하세요"
        rows="3"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  </form>
  <div class="mt-4 pt-4 border-t border-gray-100">
    <span class="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
      폼 컴포넌트
    </span>
  </div>
</div>
