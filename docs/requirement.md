나는 플레이보드라는 것을 만들고 있어. 이 플레이보드는 스토리 보드와 비슷한 역할은 한다고 보면돼.
디자인 ui 는 왼쪽 사이드메뉴, 메인, 오른쪽 사이드 메뉴야.
왼쪽 사이드 메뉴는 모듈 리스트를 보여줄거야. 그리고 메인 에서는 클릭한 모듈에서 쓰이는 컴포넌트 등을 렌더링하고 싶어.
그리고 오른쪽 사이드 메뉴는 해당 모듈에서 보여지는 컴포넌트들 목록이야. 여기서 고민은, 하나의 모듈에는 여러 화면이 올 수 있는데, 이걸 어떻게 구분지을지가 고민이야.
왼쪽 사이드 메뉴에 depth 를 하나 더 둬야 할지는 적절한 ui/ux 를 고려해서 반영해줘.

모듈 리스트는 다음과 같아.

1. CENTER_MANAGEMENT
2. ASSESSMENT_MANAGEMENT
3. APPOINTMENT_MANAGEMENT
4. USER_AUTH
5. AUTHORIZATION
6. SETTINGS
7. SUBSCRIPTION_MANAGEMENT
8. LOG_MANAGEMENT

컴포넌트는 아직 못만들었지만 아주 간단한 카드등을 만들어서 오른쪽 사이드 메뉴도 보이도록 해줄래?
