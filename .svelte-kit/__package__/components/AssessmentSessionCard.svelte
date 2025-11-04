<script lang="ts">
  interface Props {
    class?: string
  }

  let { class: className = '' }: Props = $props()
</script>

<div class="flex flex-wrap gap-4 {className}">
  <!-- Card 1: 검사 진행중 -->
  <div
    class="bg-white rounded-2xl p-4 shadow-sm"
    style="width: 288px; height: 218px"
  >
    <!-- Header with Checkbox and Status Badge -->
    <div class="flex items-center justify-between mb-2">
      <!-- Checkbox -->
      <div class="w-5 h-5 border-2 border-gray-300 rounded"></div>

      <!-- Status Badge -->
      <div
        class="px-3 py-1.5 bg-blue-50 text-blue-500 font-medium rounded-lg text-xs"
      >
        검사 진행중
      </div>
    </div>

    <!-- Client Info -->
    <div class="flex items-center gap-3 mb-2">
      <!-- Avatar -->
      <div
        class="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center"
      >
        <span class="text-xl">🐋</span>
      </div>

      <!-- User Info -->
      <div class="flex flex-col">
        <h3 class="text-gray-900 font-semibold" style="font-size: 16px">
          김인서 (0123AB)
        </h3>
        <p class="text-gray-500" style="font-size: 12px">2018.01.16 만 12세</p>
      </div>
    </div>

    <!-- Test Batteries Section -->
    <div class="flex items-center gap-1 mb-4">
      <!-- Test Battery -->
      <div
        class="rounded-xl text-center px-2 py-1.5"
        style="
                            background-color: #f4f8ff;
                            width: 114px;
                            height: 56px;
                          "
      >
        <!-- Title -->
        <h3 class="font-semibold text-xs mb-1" style="color: #256ef4">
          3~6세 풀배터리
        </h3>

        <!-- Overlapping Circles -->
        <div class="flex items-center justify-center">
          <span
            class="inline-flex items-center justify-center w-7 h-7 bg-white border border-gray-200 rounded-full text-gray-400 font-medium text-[8px]"
            style="line-height: 90%; letter-spacing: -0.4px"
          >
            BGT
          </span>
          <span
            class="inline-flex items-center justify-center w-7 h-7 bg-white border border-gray-200 rounded-full text-gray-400 font-medium text-[8px] -ml-2"
            style="line-height: 90%; letter-spacing: -0.4px"
          >
            Bayley
          </span>
          <span
            class="inline-flex items-center justify-center w-7 h-7 bg-white border border-gray-200 rounded-full text-gray-400 font-medium text-[8px] -ml-2"
            style="line-height: 90%; letter-spacing: -0.4px"
          >
            KFD
          </span>
          <span
            class="inline-flex items-center justify-center w-7 h-7 bg-white border border-gray-200 rounded-full text-gray-400 font-medium text-[8px] -ml-2"
            style="line-height: 90%; letter-spacing: -0.4px"
          >
            K-WISC -5
          </span>
          <span
            class="inline-flex items-center justify-center text-gray-400 font-semibold text-sm ml-0.5"
          >
            +5
          </span>
        </div>
      </div>

      <!-- Plus Icon -->
      <div
        class="flex items-center justify-center text-gray-400 font-bold text-lg"
      >
        +
      </div>

      <!-- Additional Test -->
      <div
        class="rounded-xl text-center bg-gray-50 px-2 py-1.5"
        style="width: 114px; height: 56px"
      >
        <!-- Title -->
        <h3 class="font-semibold text-xs text-gray-900 mb-1">추가 검사</h3>

        <!-- Single Circle -->
        <div class="flex items-center justify-center">
          <span
            class="inline-flex items-center justify-center w-7 h-7 bg-white border border-gray-200 rounded-full text-gray-400 font-medium text-[8px]"
            style="line-height: 90%; letter-spacing: -0.4px"
          >
            BGT
          </span>
        </div>
      </div>
    </div>

    <!-- Reservation Date -->
    <div class="flex items-center justify-between pt-3 border-t border-gray-200">
      <span class="text-gray-600 font-medium" style="font-size: 12px">
        접수일
      </span>
      <span class="text-gray-900 font-semibold" style="font-size: 14px">
        2025.08.12 (수) 10:00
      </span>
    </div>
  </div>

  <!-- Card 2: 채점 필요 (나머지 카드들도 같은 구조로 계속...) -->
  <!-- 여기서는 하나의 예시만 보여드렸습니다 -->
</div>
