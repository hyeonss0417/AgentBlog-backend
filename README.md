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

<table>
   <tr>
     <th align="center">
       <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674308-31c12880-2dbe-11ea-9a7e-9ecb15b52e4e.gif"/>
       <br><br>[Login]
     </th>
     <th align="center">
       <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674314-3685dc80-2dbe-11ea-8657-2d59f6e708f3.gif"/>
       <br><br>[Main Menu] 
    </th>
     <th align="center">
      <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674315-3685dc80-2dbe-11ea-8d53-d2e61c601d6d.gif"/>
       <br><br>[Sub Menu]
    </th>
     <th align="center">
      <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674104-bfe8df00-2dbd-11ea-8c45-1e2e68a7ae4c.gif"/>
       <br><br>[Community]
    </th>
  </tr>
</table>



### Login

웹사이트 접근을 위한 사용자 로그인 데이터 저장

- 입력된 사용자 정보를 암호화 하여 서버에 저장
- Firebase Token 을 이용한 자동로그인
- Kau 웹사이트에 접근하여 Cookie 저장 (휘발성 데이터로 매 로그인시 재발급)

### Main Menu

- 실시간 도서관 좌석 조회
- 사용자 정보를 기반으로 LMS site 자동 로그인

### Sub Menu

사용자 개인정보(성적, 장학금 내역, 시간표, 석차 등) 접근

- 사용자 Cookie 데이터를 기반으로 웹사이트 접근
- WKWebview (iOS <= 10,  Webview) 와 Javascript Bridge를 활용하여 Redirect 과정을 자동화
- 기존의 복잡한 과정이 생략되고 원포인트 접근

### Community

사용자들간의 커뮤니티 기능

- Open 게시판
- 배달음식 주문, 메뉴판, 리뷰



## 활용기술

- **[Coordinator Pattern](https://k-elon.tistory.com/34)** : 페이지 이동이 잦은 해당 서비스에 대해서 뷰 컨트롤러 간의 연결을 느슨하게 하기 위해 사용. (DI) 
- **[Firebase](https://github.com/firebase/firebase-ios-sdk)** : Messaging, Auth, Database, Storage, Functions 를 활용하여 서버리스한 환경 구축.
- **[SwiftSoup](https://github.com/scinfu/SwiftSoup)** : HTML doc 파싱을 위한 라이브러리. Kau 웹사이트의 다양한 정보를 가져오기 위해 사용.
- **[Realm](https://github.com/realm/realm-cocoa)** : mobile database 활용을 위해 사용. ORM 방식으로 쉽게 접근할 수 있음.

