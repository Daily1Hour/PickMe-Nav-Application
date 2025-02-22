# 네비게이션 마이크로 프론트엔드

> Single-Spa Application 구성

## 🚩 목차

-   [🛠️ 기술 스택](#️-기술-스택)
-   [🎨 스크린샷](#-스크린샷)
-   [💡 주요 기능](#-주요-기능)
-   [🧩 컴포넌트 구성](#-컴포넌트-구성)
-   [🚀 실행 방법](#-실행-방법)
-   [📂 폴더 구조](#-폴더-구조)

## 🛠️ 기술 스택

[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/)
[![SMUI](https://img.shields.io/badge/Svelte_Material_UI-007FFF?style=flat-square&logo=mui&logoColor=white)](https://sveltematerialui.com/)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)  
[![Single-SPA](https://img.shields.io/badge/Single_SPA-gray.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48c2NyaXB0IHhtbG5zPSIiIGlkPSJjdXN0b20tdXNlcmFnZW50LXN0cmluZy1wYWdlLXNjcmlwdCIvPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWU2ODlmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC41NCwyMDAuMzMsNTI4LjQyLDQ3MC40Miw0NDkuMjcsNTgzLjg0LDU5LjM5LDM4Ni4yMmw0OS4xNS0xODUuODlNNzcuNCwxMjAuMTIsMCw0MTIuODZsNDY1LjYxLDIzNkw2MDAsNDU2LjI4LDc3LjQsMTIwLjEyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyODQuODQgNTU2LjM0IDQ2NS42IDY0OC44NSAxNTQuNjkgODExLjIxIDI4NC44NCA1NTYuMzQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDAxLjA2IDMyOC44NSA3Ny40IDEyMC4xMiA1NjkuMDkgMCA0MDEuMDYgMzI4Ljg1Ii8+PC9nPjwvZz48L3N2Zz4=&style=flat-square&logoColor)](https://single-spa.js.org/) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev) [![Steiger](https://img.shields.io/badge/FSD_Steiger-211b1d.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTAyKSIvPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsODcpIi8+CjxwYXRoIGQ9Ik0wIDAgQzI4LjM4IDAgNTYuNzYgMCA4NiAwIEM4NiAzLjYzIDg2IDcuMjYgODYgMTEgQzU3LjYyIDExIDI5LjI0IDExIDAgMTEgQzAgNy4zNyAwIDMuNzQgMCAwIFogIiBmaWxsPSIjRUJFQUVBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Nyw1NykiLz4KPHBhdGggZD0iTTAgMCBDMjguMzggMCA1Ni43NiAwIDg2IDAgQzg2IDMuNjMgODYgNy4yNiA4NiAxMSBDNTcuNjIgMTEgMjkuMjQgMTEgMCAxMSBDMCA3LjM3IDAgMy43NCAwIDAgWiAiIGZpbGw9IiNFQkVBRUEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LDQyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTQ3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTMyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTE3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsNzIpIi8+Cjwvc3ZnPgo=&style=flat-square&logoColor=black)](https://github.com/feature-sliced/steiger)

## 🎨 스크린샷

![nav](https://github.com/user-attachments/assets/73c8da6c-3239-4df3-ac7f-bc15bdf76947)

## 💡 주요 기능

-   각 페이지 네비게이션
-   툴에 사용자 컨트롤 기능
-   다크 모드 설정 기능

## 🧩 컴포넌트 구성

![components](https://github.com/user-attachments/assets/940f3bab-6d95-49a1-b821-7aa22283240a)

## 🚀 실행 방법

### 환경변수

```python
VITE_PARCEL_URL= # 주입할 Parcel 주소
VITE_STATIC_ASSETS_URL= # 정적 파일(.svg, .img) 저장 주소
```

사용자 컨트롤 Parcel: [PickMe-Auth-Parcel](https://github.com/Daily1Hour/PickMe-Auth-Parcel)

### 개발 서버 실행

```sh
$ npm install
$ npm run dev
```

### Single-SPA 주입 애플리케이션 빌드

```sh
$ npm install
$ npm run build:single-spa
```

## 📂 폴더 구조

> <image src="https://feature-sliced.design/kr/img/brand/logo-primary.png" width=40 />

```python
PickMe-Nav-Application
├─ .github
│  └─ workflows # 깃헙 액션 워크플로어 프로세스
│     ├─ deploy-gh-pages.yml # 깃헙 페이지로 배포
│     └─ vite-build.yml # Vite로 빌드
├─ public # 정적 자원
│  ├─ monogram-hq.svg
│  └─ resolution-logo.svg
├─ src
│  ├─ app
│  │  ├─ App.svelte
│  │  ├─ main.ts # 개발 서버 진입점
│  │  └─ application.ts # single-spa 애플리케이션 빌드 진입점
│  ├─ pages # 페이지
│  │  └─ nav
│  │     ├─ index.ts
│  │     ├─ store # 상태저장소
│  │     │  └─ themeStore.ts # 다크모드 테마
│  │     └─ ui
│  │        ├─ Logo.svelte # 로고
│  │        ├─ AuthControl.svelte # 인증 parcel 컨트롤
│  │        ├─ DarkModeToggle.svelte # 다크모드 컨트롤
│  │        ├─ Tools.svelte # 컨트롤 툴즈
│  │        ├─ NavButton.svelte # 네비게이션 버튼
│  │        ├─ NavList.svelte # 네비게이션 리스트
│  │        └─ TopBar.svelte # 네비게이션 바
│  └─ shared
│     └─ single-spa-svelte # third-party
├─ steiger.config.ts # FSD 린트 설정
└─ vite.config.ts # Vite 설정 파일
```
