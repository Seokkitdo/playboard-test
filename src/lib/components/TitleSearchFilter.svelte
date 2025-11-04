<script lang="ts">
  let sortSelectedText = $state<string>('최신순')
  let sortMenu = $state<HTMLElement | null>(null)

  function selectSort(option: string) {
    sortSelectedText = option
    sortMenu?.classList.add('hidden')
  }
</script>

<div class="bg-white p-6 rounded-lg shadow mt-6">
  <!-- Title with Button -->
  <div class="flex justify-between items-center mb-6">
    <h3 class="text-2xl font-bold text-gray-900">검사 현황</h3>
    <button
      class="w-[120px] h-[44px] flex justify-center gap-1 px-4 py-2 rounded-xl bg-[#4C87F6] items-center text-white shadow hover:bg-[#4C87F6] transition duration-200"
    >
      예약하기
    </button>
  </div>

  <!-- Search Input -->
  <div class="mb-4">
    <div class="relative">
      <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="이름, 코드로 검색"
        class="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all placeholder:text-gray-400"
        style="font-size: 16px; border-radius: 12px"
      />
    </div>
  </div>

  <!-- Filter Bar with Sort -->
  <div class="flex items-center justify-between">
    <!-- Icon + Text Filter Chips -->
    <div class="flex items-center gap-3">
      <!-- 전체 -->
      <button
        class="filter-chip flex items-center gap-2 px-3 py-2 rounded-lg transition-all cursor-pointer active"
        data-filter="all"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0375 27.9319L4.6095 21.9114C4.276 21.7189 4.276 21.2379 4.6095 21.0454L14.9615 15.0689C15.5805 14.7114 16.3425 14.7114 16.9615 15.0689L27.3895 21.0894C27.723 21.2819 27.723 21.7629 27.3895 21.9554L17.0375 27.9319C16.4185 28.2894 15.6565 28.2894 15.0375 27.9319Z"
            fill="#D9DCE1"
          />
          <path
            d="M15.0375 22.9319L4.6095 16.9114C4.276 16.7189 4.276 16.2379 4.6095 16.0454L14.9615 10.0689C15.5805 9.71141 16.3425 9.71141 16.9615 10.0689L27.3895 16.0894C27.723 16.2819 27.723 16.7629 27.3895 16.9554L17.0375 22.9319C16.4185 23.2894 15.6565 23.2894 15.0375 22.9319Z"
            fill="#56AAFF"
          />
          <path
            d="M15.0375 17.9319L4.6095 11.9114C4.276 11.7189 4.276 11.2379 4.6095 11.0454L14.9615 5.06891C15.5805 4.71141 16.3425 4.71141 16.9615 5.06891L27.3895 11.0894C27.723 11.2819 27.723 11.7629 27.3895 11.9554L17.0375 17.9319C16.4185 18.2894 15.6565 18.2894 15.0375 17.9319Z"
            fill="#0478ED"
          />
        </svg>
        <span class="text-sm font-medium text-gray-900">전체</span>
      </button>

      <!-- 세로 구분선 -->
      <div class="h-4 border-l-[1.5px] border-gray-200"></div>

      <!-- 검사 진행중 -->
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent transition-all opacity-50 hover:opacity-100"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7383 27.6122V22.5918"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.7383 10.8778V5.85742"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 24.4321L11.5493 21.9219"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 12.6351L24.4339 9.03711"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85938 16.7344H8.6206"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5938 16.7344H27.6142"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 9.03711L10.0431 10.0412"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 20.8359L24.4339 24.4339"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-sm text-gray-500">검사 진행중</span>
      </div>

      <!-- 세로 구분선 -->
      <div class="h-4 border-l-[1.5px] border-gray-200"></div>

      <!-- 체점 필요 -->
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent transition-all opacity-50 hover:opacity-100"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7383 27.6122V22.5918"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.7383 10.8778V5.85742"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 24.4321L11.5493 21.9219"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 12.6351L24.4339 9.03711"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85938 16.7344H8.6206"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5938 16.7344H27.6142"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 9.03711L10.0431 10.0412"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 20.8359L24.4339 24.4339"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-sm text-gray-500">체점 필요</span>
      </div>

      <!-- 세로 구분선 -->
      <div class="h-4 border-l-[1.5px] border-gray-200"></div>

      <!-- 체점 완료 -->
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent transition-all opacity-50 hover:opacity-100"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7383 27.6122V22.5918"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.7383 10.8778V5.85742"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 24.4321L11.5493 21.9219"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 12.6351L24.4339 9.03711"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85938 16.7344H8.6206"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5938 16.7344H27.6142"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 9.03711L10.0431 10.0412"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 20.8359L24.4339 24.4339"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-sm text-gray-500">체점 완료</span>
      </div>

      <!-- 세로 구분선 -->
      <div class="h-4 border-l-[1.5px] border-gray-200"></div>

      <!-- 종합 보고서 완료 -->
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent transition-all opacity-50 hover:opacity-100"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7383 27.6122V22.5918"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.7383 10.8778V5.85742"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 24.4321L11.5493 21.9219"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 12.6351L24.4339 9.03711"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85938 16.7344H8.6206"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5938 16.7344H27.6142"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 9.03711L10.0431 10.0412"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 20.8359L24.4339 24.4339"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-sm text-gray-500">종합 보고서 완료</span>
      </div>

      <!-- 세로 구분선 -->
      <div class="h-4 border-l-[1.5px] border-gray-200"></div>

      <!-- 종합 보고서 발견 -->
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent transition-all opacity-50 hover:opacity-100"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7383 27.6122V22.5918"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.7383 10.8778V5.85742"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 24.4321L11.5493 21.9219"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 12.6351L24.4339 9.03711"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85938 16.7344H8.6206"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5938 16.7344H27.6142"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.03906 9.03711L10.0431 10.0412"
            stroke="#DCDCDC"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.8359 20.8359L24.4339 24.4339"
            stroke="#DCDDDD"
            stroke-width="1.67347"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-sm text-gray-500">종합 보고서 발견</span>
      </div>
    </div>

    <!-- Sort Dropdown -->
    <div class="relative">
      <button
        id="sortDropdownButton"
        class="w-[120px] h-[44px] flex justify-between items-center gap-2 px-4 py-2 bg-gray-100 border-0 text-gray-700 text-sm focus:outline-none cursor-pointer rounded-lg hover:bg-gray-200 transition-colors"
      >
        <span id="sortSelectedText">최신순</span>
        <svg
          class="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        id="sortDropdownMenu"
        class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 hidden z-10"
      >
        <button
          class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg transition-colors"
          onclick={() => selectSort('최신순')}
        >
          최신순
        </button>
        <button
          class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          onclick={() => selectSort('등록순')}
        >
          등록순
        </button>
        <button
          class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-b-lg transition-colors"
          onclick={() => selectSort('오래된 순')}
        >
          오래된 순
        </button>
      </div>
    </div>
  </div>
</div>
