import type { KeyboardEvent } from "react";

export function handleNumericInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
  const allowedKeys = [
    "Backspace",
    "Tab",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Home",
    "End",
  ];
  const isNumber = /[0-9]/.test(e.key);
  const isDot = e.key === ".";

  if (isDot && e.currentTarget.value.includes(".")) {
    e.preventDefault();
  } else if (!isNumber && !isDot && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}

export function validatePositiveNumber(value: unknown): true | string {
  const num = Number(value);
  if (isNaN(num)) return "Must be a number";
  if (num < 0) return "Must be positive";
  return true;
}
