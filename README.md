# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

처음 저장소를 받은 상태에서 아래 순서대로 따라 하면 개발 서버까지 띄울 수 있습니다.

### 1. 필요한 도구 준비

| 도구    | 버전      | 확인 명령        |
| ------- | --------- | ---------------- |
| Git     | 아무 버전 | `git --version`  |
| Node.js | 20.9 이상 | `node --version` |
| Bun     | 1.3 이상  | `bun --version`  |

- Node.js: Next.js 16이 Node.js 20.9 이상을 요구합니다. [nodejs.org](https://nodejs.org)에서 LTS 버전을 설치하세요.
- Bun: 패키지 설치와 스크립트 실행에 씁니다. 설치되어 있지 않다면 아래 명령으로 설치한 뒤 **터미널을 새로 열어** `bun --version`이 출력되는지 확인하세요.

  ```bash
  # macOS / Linux
  curl -fsSL https://bun.sh/install | bash
  ```

  ```powershell
  # Windows (PowerShell)
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

### 2. 저장소 받기

```bash
git clone https://github.com/Hyeju-Lee/todo-tutorial.git
cd todo-tutorial
```

이후 명령은 모두 `todo-tutorial` 디렉토리 안에서 실행합니다.

### 3. 의존성 설치

```bash
bun install
```

`node_modules` 디렉토리가 만들어지고 `bun.lock`에 적힌 버전 그대로 설치됩니다.

### 4. 개발 서버 실행

```bash
bun run dev
```

터미널에 `Ready`가 출력되면 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. "내 할 일" 화면이 보이면 준비가 끝난 것입니다. 서버는 터미널에서 `Ctrl+C`로 종료합니다.

> 3000번 포트를 이미 다른 프로그램이 쓰고 있으면 Next.js가 다른 포트(예: 3001)로 띄우고 터미널에 주소를 알려 줍니다. 터미널에 출력된 주소로 접속하세요.

### 5. (선택) 제대로 설치됐는지 확인

```bash
bun run test       # Vitest 테스트 실행
bun run lint       # ESLint 검사
bun run typecheck  # 타입 검사 (tsc --noEmit)
```

세 명령이 모두 오류 없이 끝나면 개발 환경이 정상입니다.

### 자주 쓰는 스크립트

```bash
bun run dev         # 개발 서버 (http://localhost:3000)
bun run test        # 테스트 한 번 실행
bun run test:watch  # 파일이 바뀔 때마다 테스트 다시 실행
bun run lint        # ESLint
bun run typecheck   # tsc --noEmit
bun run format      # Prettier 포맷팅
bun run build       # 프로덕션 빌드
bun run start       # 빌드 결과 실행 (먼저 bun run build 필요)
```

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button"
```
