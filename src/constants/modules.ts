import type { Module } from '../types';

export const MODULES: Module[] = [
  {
    id: 'CENTER_MANAGEMENT',
    name: '센터 관리',
    screens: [
      {
        id: 'center-list',
        name: '센터 목록',
        components: [
          { id: 'c1', name: '센터 카드', type: 'card', description: '센터 정보를 표시하는 카드' },
          { id: 'c2', name: '센터 검색', type: 'form', description: '센터 검색 폼' },
        ],
      },
      {
        id: 'center-detail',
        name: '센터 상세',
        components: [
          { id: 'c3', name: '센터 정보 카드', type: 'card', description: '센터 상세 정보' },
          { id: 'c4', name: '수정 버튼', type: 'button', description: '센터 수정 버튼' },
        ],
      },
    ],
  },
  {
    id: 'ASSESSMENT_MANAGEMENT',
    name: '평가 관리',
    screens: [
      {
        id: 'assessment-list',
        name: '평가 목록',
        components: [
          { id: 'a1', name: '평가 테이블', type: 'table', description: '평가 목록 테이블' },
          { id: 'a2', name: '새 평가 버튼', type: 'button', description: '평가 생성 버튼' },
        ],
      },
    ],
  },
  {
    id: 'APPOINTMENT_MANAGEMENT',
    name: '예약 관리',
    screens: [
      {
        id: 'appointment-calendar',
        name: '예약 캘린더',
        components: [
          { id: 'ap1', name: '예약 카드', type: 'card', description: '예약 정보 카드' },
        ],
      },
    ],
  },
  {
    id: 'USER_AUTH',
    name: '사용자 인증',
    screens: [
      {
        id: 'login',
        name: '로그인',
        components: [
          { id: 'u1', name: '로그인 폼', type: 'form', description: '로그인 입력 폼' },
          { id: 'u2', name: '로그인 버튼', type: 'button', description: '로그인 제출 버튼' },
        ],
      },
    ],
  },
  {
    id: 'AUTHORIZATION',
    name: '권한 관리',
    screens: [
      {
        id: 'role-management',
        name: '역할 관리',
        components: [
          { id: 'au1', name: '역할 테이블', type: 'table', description: '역할 목록' },
        ],
      },
    ],
  },
  {
    id: 'SETTINGS',
    name: '설정',
    screens: [
      {
        id: 'general-settings',
        name: '일반 설정',
        components: [
          { id: 's1', name: '설정 폼', type: 'form', description: '설정 입력 폼' },
        ],
      },
    ],
  },
  {
    id: 'SUBSCRIPTION_MANAGEMENT',
    name: '구독 관리',
    screens: [
      {
        id: 'subscription-list',
        name: '구독 목록',
        components: [
          { id: 'sub1', name: '구독 카드', type: 'card', description: '구독 정보 카드' },
        ],
      },
    ],
  },
  {
    id: 'LOG_MANAGEMENT',
    name: '로그 관리',
    screens: [
      {
        id: 'log-viewer',
        name: '로그 뷰어',
        components: [
          { id: 'l1', name: '로그 테이블', type: 'table', description: '로그 목록 테이블' },
        ],
      },
    ],
  },
];
