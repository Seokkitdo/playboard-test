# Playboard 사용 가이드

사내 컴포넌트 라이브러리 및 스토리보드로 사용하는 가이드입니다.

## 설치 방법

### 1. `.npmrc` 파일 설정

프로젝트 루트에 `.npmrc` 파일을 생성하고 다음 내용을 추가하세요:

```
@seokkitdo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. GitHub Personal Access Token 생성

1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)로 이동
2. "Generate new token (classic)" 클릭
3. 권한 선택:
   - `read:packages` 체크
4. 토큰 생성 후 복사

### 3. 환경 변수 설정

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
export GITHUB_TOKEN=your_personal_access_token
```

또는 프로젝트 루트에 `.env` 파일 생성:

```
GITHUB_TOKEN=your_personal_access_token
```

### 4. 패키지 설치

```bash
npm install @seokkitdo/playboard@latest
```

## 사용 방법

### 기본 사용

```svelte
<script>
  import { SampleButton, SampleCard } from '@seokkitdo/playboard'
</script>

<SampleButton label="클릭" />
<SampleCard title="카드 제목" description="카드 설명" />
```

### 스타일 커스터마이징

모든 컴포넌트는 `class` prop을 통해 Tailwind CSS 클래스로 스타일을 커스터마이징할 수 있습니다:

```svelte
<script>
  import { SampleButton, SampleCard } from '@seokkitdo/playboard'
</script>

<!-- 기본 스타일 -->
<SampleButton label="기본 버튼" />

<!-- 커스텀 스타일 -->
<SampleButton
  label="커스텀 버튼"
  class="!bg-red-500 !hover:bg-red-600"
/>

<SampleCard
  title="커스텀 카드"
  class="!border-2 !border-blue-500"
/>
```

**주의사항:**
- 프로젝트에 Tailwind CSS가 설치되어 있어야 합니다
- `!` 접두사로 기본 스타일을 오버라이드할 수 있습니다

## 사용 가능한 컴포넌트

### Layout Components
- `LeftSidebar` - 왼쪽 사이드바
- `RightSidebar` - 오른쪽 사이드바
- `MainContent` - 메인 컨텐츠 영역

### UI Components
- `SampleButton` - 버튼 컴포넌트
- `SampleCard` - 카드 컴포넌트
- `SampleForm` - 폼 컴포넌트
- `SampleTable` - 테이블 컴포넌트
- `TitleSearchFilter` - 검색 필터 컴포넌트
- `AssessmentSessionCard` - 평가 세션 카드
- `Counter` - 카운터 컴포넌트

## 업데이트

라이브러리가 업데이트되면 자동으로 GitHub Packages에 배포됩니다.

최신 버전으로 업데이트하려면:

```bash
npm update @seokkitdo/playboard
```

## 개발 환경에서 테스트

라이브러리를 로컬에서 테스트하려면:

```bash
# playboard-test 저장소에서
npm run build
npm link

# 사용할 프로젝트에서
npm link @seokkitdo/playboard
```

## 문제 해결

### 설치 시 403 에러

GitHub Token 권한을 확인하세요. `read:packages` 권한이 필요합니다.

### 컴포넌트를 찾을 수 없음

1. `.npmrc` 파일이 올바르게 설정되었는지 확인
2. `node_modules/@seokkitdo/playboard` 폴더가 존재하는지 확인
3. 패키지를 재설치: `npm install @seokkitdo/playboard --force`

### 타입 정의가 작동하지 않음

TypeScript 프로젝트의 경우, `tsconfig.json`에 다음을 추가:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["svelte"]
  }
}
```
