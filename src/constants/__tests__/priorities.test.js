import { describe, expect, it } from "vitest";
import {
  compareByPriorityAndDueDate,
  getDueDateStatus,
} from "../priorities";

const t = (priority, dueDate) => ({ priority, dueDate });

describe("compareByPriorityAndDueDate", () => {
  it("high before medium before low before none", () => {
    const sorted = [t(null), t("low"), t("high"), t("medium")].sort(
      compareByPriorityAndDueDate
    );
    expect(sorted.map((x) => x.priority)).toEqual([
      "high",
      "medium",
      "low",
      null,
    ]);
  });

  it("earlier due date wins on tie", () => {
    const sorted = [t("high", "2026-08-01"), t("high", "2026-07-10")].sort(
      compareByPriorityAndDueDate
    );
    expect(sorted[0].dueDate).toBe("2026-07-10");
  });

  it("task with due date before task without", () => {
    const sorted = [t("low", null), t("low", "2026-07-10")].sort(
      compareByPriorityAndDueDate
    );
    expect(sorted[0].dueDate).toBe("2026-07-10");
  });
});

describe("getDueDateStatus", () => {
  const pad = (n) => String(n).padStart(2, "0");
  const iso = (d) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  it("null when no date", () => expect(getDueDateStatus(null)).toBeNull());
  it("today", () => expect(getDueDateStatus(iso(new Date()))).toBe("today"));
  it("overdue", () => {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    expect(getDueDateStatus(iso(y))).toBe("overdue");
  });
  it("future is null", () => {
    const f = new Date();
    f.setDate(f.getDate() + 5);
    expect(getDueDateStatus(iso(f))).toBeNull();
  });
});
