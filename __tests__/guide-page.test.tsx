import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import GuidePage from "@/app/guide/page"

describe("사용법 페이지", () => {
  it("제목과 주요 기능 안내를 보여준다", () => {
    render(<GuidePage />)

    expect(
      screen.getByRole("heading", { level: 1, name: "사용법" })
    ).toBeInTheDocument()
    for (const name of ["할 일 추가", "완료 표시", "수정", "삭제", "필터"]) {
      expect(
        screen.getByRole("heading", { level: 2, name })
      ).toBeInTheDocument()
    }
  })

  it("할 일 목록으로 돌아가는 링크가 있다", () => {
    render(<GuidePage />)

    expect(
      screen.getByRole("link", { name: "할 일 목록으로 돌아가기" })
    ).toHaveAttribute("href", "/")
  })
})
