<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();

  const sampleData = [
    { id: 1, name: '항목 1', status: '활성', date: '2025-11-01' },
    { id: 2, name: '항목 2', status: '비활성', date: '2025-11-02' },
    { id: 3, name: '항목 3', status: '활성', date: '2025-11-03' },
  ];
</script>

<div
  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
>
  <h3 class="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead class="bg-gray-50 border-b border-gray-200">
        <tr>
          <th class="px-4 py-3 text-left font-medium text-gray-700">ID</th>
          <th class="px-4 py-3 text-left font-medium text-gray-700">이름</th>
          <th class="px-4 py-3 text-left font-medium text-gray-700">상태</th>
          <th class="px-4 py-3 text-left font-medium text-gray-700">날짜</th>
        </tr>
      </thead>
      <tbody>
        {#each sampleData as row}
          <tr class="border-b border-gray-100 hover:bg-gray-50">
            <td class="px-4 py-3 text-gray-600">{row.id}</td>
            <td class="px-4 py-3 text-gray-800 font-medium">{row.name}</td>
            <td class="px-4 py-3">
              <span
                class="inline-block px-2 py-1 text-xs font-medium rounded-full {row.status ===
                '활성'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'}"
              >
                {row.status}
              </span>
            </td>
            <td class="px-4 py-3 text-gray-600">{row.date}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="mt-4 pt-4 border-t border-gray-100">
    <span class="inline-block px-3 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full">
      테이블 컴포넌트
    </span>
  </div>
</div>
