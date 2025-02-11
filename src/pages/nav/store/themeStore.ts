import { writable } from "svelte/store";

// 로컬 스토리지와 연결
const storedTheme = localStorage.getItem("theme") || "light";
// 테마 상태 저장
export const theme = writable(storedTheme);
theme.subscribe((value) => {
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
});
