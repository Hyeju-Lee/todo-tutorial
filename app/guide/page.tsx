import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "사용법 · todo",
}

const SECTIONS: { title: string; steps: React.ReactNode[] }[] = [
  {
    title: "할 일 추가",
    steps: [
      <>
        맨 위 입력창에 할 일을 적고 <Kbd>Enter</Kbd>를 누르세요.
      </>,
      "새 항목은 목록 맨 위에 추가됩니다.",
      "빈 칸이나 공백만 입력하면 추가되지 않습니다.",
    ],
  },
  {
    title: "완료 표시",
    steps: [
      "항목 왼쪽의 체크박스를 누르면 완료로 표시되고 취소선이 그어집니다.",
      "다시 누르면 진행중 상태로 돌아갑니다.",
    ],
  },
  {
    title: "수정",
    steps: [
      "할 일 텍스트를 더블클릭하면 편집 모드로 바뀝니다.",
      <>
        <Kbd>Enter</Kbd>를 누르거나 다른 곳을 클릭하면 저장됩니다.
      </>,
      <>
        <Kbd>Esc</Kbd>를 누르면 변경 내용을 취소합니다.
      </>,
      "내용을 모두 지우면 원래 텍스트가 그대로 유지됩니다.",
    ],
  },
  {
    title: "삭제",
    steps: ["항목 오른쪽의 휴지통 아이콘을 누르면 바로 삭제됩니다."],
  },
  {
    title: "필터",
    steps: [
      "전체 · 진행중 · 완료 버튼으로 보고 싶은 항목만 골라 볼 수 있습니다.",
      "새 할 일을 추가하면 필터가 자동으로 '전체'로 바뀝니다.",
    ],
  },
]

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
      {children}
    </kbd>
  )
}

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 self-start text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" />할 일 목록으로 돌아가기
      </Link>
      <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
      <p className="text-sm text-muted-foreground">
        할 일은 이 브라우저에 자동으로 저장되어, 새로고침해도 그대로 남아
        있습니다.
      </p>
      <div className="flex flex-col gap-6">
        {SECTIONS.map(({ title, steps }) => (
          <section key={title} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <ul className="flex list-disc flex-col gap-1 pl-5 text-sm">
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
