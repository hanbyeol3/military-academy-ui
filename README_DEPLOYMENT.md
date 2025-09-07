# Vercel 배포 가이드

이 문서는 militaryAcademy React 프로젝트를 Vercel에 안정적으로 배포하기 위한 완전한 가이드입니다.

## 📋 배포 전 준비사항

- [x] React + Vite 프로젝트
- [x] GitHub 저장소
- [x] Vercel 계정
- [x] Node.js 20+ 환경

## 🚀 1단계: GitHub 저장소 연동

### 1-1. 코드 Push
```bash
# 현재 프로젝트 디렉토리에서
git add .
git commit -m "feat: Add Vercel deployment configuration"
git push origin main
```

### 1-2. Vercel 프로젝트 생성
1. [vercel.com](https://vercel.com) → GitHub 로그인
2. **New Project** → 저장소 선택 → **Import**

## ⚙️ 2단계: 빌드 설정 구성

### Vercel 프로젝트 설정
**Build & Development Settings:**
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 📁 3단계: 배포 설정 파일 생성

### vercel.json 생성
프로젝트 루트에 `vercel.json` 생성:

```json
{
  "version": 2,
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  },
  "rewrites": [
    {
      "source": "/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, immutable, max-age=31536000"
        }
      ]
    },
    {
      "source": "/(.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|otf)$)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, immutable, max-age=31536000"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://vitals.vercel-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://vitals.vercel-analytics.com;"
        }
      ]
    }
  ],
  "trailingSlash": false
}
```

### .nvmrc 생성
Node.js 버전 고정:
```
20
```

### package.json 수정
```json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=9.0.0"
  }
}
```

## 🔧 4단계: Vite 설정 최적화

`vite.config.ts` 수정:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash].[ext]';
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  server: {
    port: 3000,
    host: true
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

## 🌍 5단계: 환경 변수 설정

### Vercel 대시보드 설정
1. Vercel 프로젝트 → **Settings** → **Environment Variables**
2. 환경별 변수 추가:

```
# Production
VITE_API_BASE_URL = https://api.militaryacademy.com
VITE_APP_ENV = production

# Preview  
VITE_API_BASE_URL = https://dev-api.militaryacademy.com
VITE_APP_ENV = preview

# Development
VITE_API_BASE_URL = http://localhost:8000
VITE_APP_ENV = development
```

## 🌐 6단계: 커스텀 도메인 설정

### 6-1. 도메인 연결
1. **Settings** → **Domains** → **Add Domain**
2. 도메인 입력 (예: `militaryacademy.com`)

### 6-2. DNS 설정
도메인 관리 업체에서 설정:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🔒 7단계: Preview 배포 보안 설정

### Vercel Pro 업그레이드 후:
1. **Settings** → **Git** → **Protected Deployments**
2. **Enable Password Protection for Preview Deployments** 활성화
3. 비밀번호 설정

## 📊 8단계: 모니터링 설정

### Web Analytics & Speed Insights
```bash
# 패키지 설치
npm install @vercel/analytics @vercel/speed-insights
```

`src/App.tsx` 수정:
```jsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div>
      {/* 기존 앱 컴포넌트 */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
```

### Vercel 대시보드에서 활성화:
1. **Analytics** → **Enable Web Analytics**
2. **Speed Insights** → **Enable Speed Insights**

## 🚀 9단계: 최종 배포

### 배포 실행
```bash
git add .
git commit -m "feat: Complete Vercel deployment setup"
git push origin main
```

## ✅ 10단계: 배포 확인 방법

### 10-1. Vercel 대시보드 확인
1. **Deployments** 탭 → **Building** → **Ready** 상태 확인
2. **Visit** 버튼으로 사이트 접속 테스트

### 10-2. 기능별 확인 체크리스트

#### 🔍 기본 기능 확인
- [ ] 메인 페이지 로딩
- [ ] 네비게이션 (헤더 메뉴)
- [ ] 라우팅 (`/`, `/teachers`, `/online`, `/offline`)
- [ ] 모바일 반응형
- [ ] 이미지 로딩 (`/assets/` 경로)

#### 🎯 페이지별 확인
- [ ] **홈 페이지**: 강사진 이미지, 타이틀 표시
- [ ] **강사진 소개**: 강사 프로필 카드
- [ ] **인강 안내**: feature-item 그리드 레이아웃
- [ ] **현장강의**: 수업 안내, 특장점 섹션

#### 🛡️ 보안 헤더 확인
브라우저 개발자 도구 → Network 탭에서 확인:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY  
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'...
```

#### ⚡ 성능 확인
1. **Lighthouse 점수**:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

2. **캐싱 확인**:
   - 정적 리소스 Cache-Control: `max-age=31536000`
   - Bundle 크기: 주요 청크 < 500KB

#### 📱 모바일 테스트
- [ ] iPhone/Android 브라우저 테스트
- [ ] 터치 인터랙션
- [ ] 스크롤 성능
- [ ] 텍스트 가독성

### 10-3. 모니터링 데이터 확인

#### Analytics 확인
1. **Vercel Analytics** → 방문자 수, 페이지뷰 데이터
2. **Speed Insights** → 실제 사용자 성능 지표

#### 오류 모니터링
1. **Functions** → **View Function Logs** (에러 로그)
2. **Deployments** → 각 배포별 빌드 로그

## 🔧 문제 해결 가이드

### 일반적인 문제

#### 1. 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build

# 의존성 문제 해결
rm -rf node_modules package-lock.json
npm install
```

#### 2. 라우팅 404 에러
- `vercel.json`의 rewrites 설정 확인
- SPA 라우터 설정 확인

#### 3. 환경 변수 미적용
- Vercel 대시보드에서 변수명 확인
- `VITE_` 접두사 확인
- Redeploy 실행

#### 4. 이미지 로딩 실패
- `public/assets/` 경로 확인
- 파일명 대소문자 확인
- 이미지 파일 존재 여부 확인

### 긴급 롤백 방법
1. **Deployments** → 이전 성공 배포 선택
2. **Promote to Production** 클릭
3. 즉시 이전 버전으로 복구

## 📞 배포 후 체크리스트

### 운영 준비
- [ ] 도메인 SSL 인증서 활성화
- [ ] DNS 전파 완료 (24-48시간)
- [ ] 성능 모니터링 설정
- [ ] 백업 및 복구 계획 수립
- [ ] 팀 멤버 Vercel 프로젝트 액세스 권한 설정

### 정기 점검 항목
- [ ] 주간 성능 리포트 확인
- [ ] 월간 보안 업데이트
- [ ] 의존성 취약점 점검
- [ ] CDN 캐시 최적화 검토

---

## 📚 추가 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Vite 배포 가이드](https://vitejs.dev/guide/build.html)
- [React Router 설정](https://reactrouter.com/en/main)

---

**배포 완료 후 이 체크리스트를 통해 모든 기능이 정상 작동하는지 확인하세요.**