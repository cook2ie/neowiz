# 🎮 Neowiz Web Publishing (Personal Project)

반응형 웹 퍼블리싱을 중심으로 제작한 프로젝트입니다.  
디자인 시안을 기반으로 구조적인 마크업과 UI 구현에 집중했습니다.

---

## 🔗 Live Site

👉 [네오위즈 클론코딩 바로가기](https://cook2ie.github.io/neowiz/)

---

## 🧩 Overview

- 반응형 웹 구현 (PC / Tablet / Mobile)
- 시멘틱 마크업 기반 구조 설계
- UI 컴포넌트 단위 퍼블리싱

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- jQuery

---

## 👨‍💻 Key Points

- 디바이스별 대응을 고려한 반응형 레이아웃 구현
- 클래스 네이밍 구조를 정리하고 재사용성을 고려한 퍼블리싱
- 디자인 시안을 기반으로 UI를 비교적 정확도 있게 구현

---

## 🔧 Refactoring

- 기존 `position` 중심 레이아웃을 `flex / grid` 기반 구조로 개선
- 고정 width(1920px)를 제거하고 유동적인 레이아웃으로 수정
- 해상도 변화에 따라 발생하던 UI 깨짐 현상 개선

---

## 📸 Preview

<img src="https://github.com/user-attachments/assets/02e9fc4e-caf7-4f5e-807a-6d1601933742" />

---

## 💡 What I Learned

- `position`과 고정 좌표(px, %)에 의존한 레이아웃은 고해상도 환경, 특히 4K 해상도에서 쉽게 깨질 수 있다는 점을 경험했습니다.
- 단순히 위치를 보정하는 방식이 아니라, 레이아웃 구조 자체를 `flex / grid` 기반으로 재설계하는 것이 더 중요하다는 점을 배웠습니다.
- `max-width`와 `margin: 0 auto`를 활용하면 다양한 해상도에서도 보다 안정적인 중앙 정렬 구성이 가능하다는 점을 이해했습니다.
- UI를 개별 요소의 “위치”가 아니라 전체적인 “흐름”으로 설계하는 방식의 중요성을 체감했습니다.
