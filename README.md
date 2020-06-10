<p align="center" >
<a href="https://agent-blog.herokuapp.com/" align="center"> <img src="https://user-images.githubusercontent.com/13609011/84003962-c3ecde80-a9a5-11ea-8722-8a7e9d99681f.png" width="250" height="250" align="center"/></a>
</p>
<h1 align="center">
  Agent Blog Server </br>  <img alt="Swift" src="https://img.shields.io/badge/API-GraphQL-red.svg"> <img alt="Database" src="https://img.shields.io/badge/Database-Prisma_MySQL-blue.svg"> <img alt="deploy" src="https://img.shields.io/badge/deploy-Heroku-purple.svg"> <img alt="Storage" src="https://img.shields.io/badge/storage-AWS S3-orange.svg">
</h1>



## 서비스 소개

### [Velog](https://velog.io/) 블로그 서비스 클론코딩 프로젝트
- 개발자들을 위한 블로그 서비스.
- 마크다운 (Markdown) 문법을 사용하여 개발자들이 쉽고 빠르게 예쁘게 꾸며진 포스트를 작성 할 수 있습니다.
- 메인 페이지에서 개발 트렌드 및 인기 태그 제공을 통해 융용한 정보를 쉽고 빠르게 찾을 수 있습니다.


## UI

### 1) 메인 홈페이지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e659c33b-2ad9-4177-8cea-c689065a23af/velog_feed.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e659c33b-2ad9-4177-8cea-c689065a23af/velog_feed.mov.gif)

- Card 디자인 & Skeleton 로딩 구현
- 트렌딩 / 최신 게시물 노출
- hover 애니메이션
- 인기태그 표시

### 2) Responsive Layout

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3db8bea-0490-44b3-82e3-4a67371e8e6a/Screen_Recording_2020-06-09_at_6.21.27_PM.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3db8bea-0490-44b3-82e3-4a67371e8e6a/Screen_Recording_2020-06-09_at_6.21.27_PM.mov.gif)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17f64637-8b35-4437-853c-a56991bf93dc/velog_responsive2.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17f64637-8b35-4437-853c-a56991bf93dc/velog_responsive2.mov.gif)

- 미디어 쿼리를 이용하여 반응형 웹사이트를 구현

### 3) 로그인

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2017f4f4-319a-4bfa-a7d6-8feb4a69e54b/velog_login2.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2017f4f4-319a-4bfa-a7d6-8feb4a69e54b/velog_login2.mov.gif)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2d92b3b-692e-47c7-8582-b5d17a77bfbf/velog_createAccount.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2d92b3b-692e-47c7-8582-b5d17a77bfbf/velog_createAccount.mov.gif)

- 모달을 통해 로그인과 회원가입을 구현했습니다.
    - Portal 사용

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c802e74-6dd6-4b76-9fe2-e02d6a74d801/velog_login.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c802e74-6dd6-4b76-9fe2-e02d6a74d801/velog_login.mov.gif)

- 이메일 인증으로 로그인 구현
    - nodemailer 사용

### 4) 해시태그 검색

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fecec9d-b812-453e-955b-79f64e74df68/velog_hashtag.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fecec9d-b812-453e-955b-79f64e74df68/velog_hashtag.mov.gif)

- Skeleton loading 구현

### 5) 게시물 검색

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb103815-4aed-4e07-b91d-98e89c791350/velog_search.mov.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb103815-4aed-4e07-b91d-98e89c791350/velog_search.mov.gif)

- Input 값의 변화를 실시간으로 감지하여 입력 즉시 검색 데이터를 받아옴


## 활용기술
- **[GraphQL]()**: 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것을 목적으로 만들어진 쿼리 언어로서 하나의 엔드 포인트를 통해 원하는 데이터를 한번에 가져올 수 있는 장점이 있습니다.
- **[heroku]()**: GraphQL API 서버와 Prisma-MySQL Database 배포하기 위해 사용.
- **[Amazon S3]()**: 온라인 스토리지 웹 서비스. 게시물의 이미지를 저장하기 위해 사용.
- **[multer]()**: Node.js 미들웨어로 파일 업로드 핸들링을 도와주는 모듈. 게시물의 이미지를 업로드 하기 위해 사용.
- **[babel]()**: 자바스크립트 컴파일러로 ES8으로 작성한 코드를 호환성을 위해 하위 버전 코드로 변환해주는 모듈.
- **[nodemailer]()**: Node.js 에서 e-mail 을 쉽게 보낼 수 있게 도와주는 모듈. 회원가입 시 이메일 인증을 위해 사용.
- **[passport]()**: 토큰인증방식을 위해 사용.
- **[morgan]()**: 서버 요청에 대한 기록을 콘솔에 저장하기 위해 사용.
