# ✅ 2NE1

<h3 align="center">💊 건강을 위한 영양제 쇼핑몰 웹 사이트, na2ra1 - 2NE1!</h3>

<div  align="center">
  <img width="10%" alt="image" src="https://user-images.githubusercontent.com/65716445/210801893-634f7713-4d0d-443e-8dad-91b8e3bc7065.png">
</div>
</br>


- **팀 명 :** 2NE1
- **프로젝트 명 :** na2ral(약쟁이)
- **프로젝트 기간 :** 2022.10.31 - 2022.11.11
- **배포 링크 :** [🤝 na2ra1.com](http://43.206.118.245/)
- **데모 영상 :** [▶️ 영상 링크](https://youtu.be/vt3N1dLKh4U)
- **API 문서 :** [💡 postman](https://documenter.getpostman.com/view/16132058/2s8YRnmXTf)

## 📝 서비스 소개


- 사용자에게 영양제 정보를 제공하고, 주문할 수 있는 사이트

- 효능에 따른 영양제를 검색하고, 영양제의 섭취 방법 등의 정보를 제공받을 수 있다.


1. 회원가입, 로그인, 회원정보 수정 등 **유저 정보 관련 CRUD**

2. **제품 목록**을 조회 및, **제품 상세 정보**를 조회 가능함.

3. 장바구니에 제품을 추가할 수 있으며, **장바구니에서 CRUD** 작업이 가능함.

4. 장바구니는 서버 DB가 아닌, 프론트 단에서 저장 및 관리됨 (localStorage, indexedDB 등)

5. 장바구니에서 주문을 진행하며, **주문 완료 후 조회 및 삭제**가 가능함.


  
  
## 🛠 기술 스택

  
![image](https://i.ibb.co/N34mXzy/image.png)

  


### 프론트엔드

  

- **Vanilla javascript**, html, css (**Bulma css**)

- Font-awesome

- Daum 도로명 주소 api

- 이외

  

### 백엔드

  

- **Express** 

- Mongodb, Mongoose

- cors


  
## 📉 인프라 구조

  

![image](https://i.ibb.co/9tGxmx0/image.png)
  

### 📂 폴더 구조

  

- 프론트: `src/views` 폴더

- 백: src/views 이외 폴더 전체

- 실행: **프론트, 백 동시에, express로 실행**


  

## 👨‍👩‍👧‍ 제작자

  

| 이름 | 담당업무  |
|--|--|
| 오승하 (팀장) | BE, 배포   |
| 김보민  | FE |
| 이효정  | FE |
| 김혜지  | FE |
| 지창준  | BE |

  
## **🔎 트러블 슈팅**

- 데이터 크롤링을 어떻게 할 것인가 ? 
	-  레퍼런스 사이트에서 더미 데이터를 어떻게 가져올 것인가 논의 
	=> axois, cheerio를 이용하여 웹 크롤링
___
- 주문 시 상품 정보를 어떻게 주문 스키마에 저장할 것인가 
   => 상품 스키마를 그대로 참조하는 경우 현재 상품명과, 구매 내역 히스토리가 달라질 수 있다. (상품명이나 가격이 달라지는 경우가 있으므로)
   그렇기 때문에 참조로 넣는 대신 주문했을 때의 정보가 순수하게 직접 들어가야한다. 
   ____
- 배송지 정보는 어느 스키마에서 관리해야하는가?
=> 회원정보 스키마, 주문정보 스키마, 배송지 정보 스키마에 각각 분리되어 들어가야한다. 
1. 유저는 배송지를 여러개 등록 할 수 있고, 
 2. 이전 배송지를 불러올 수 있고,
 3.  배송지를 바꾸더라도 주문 정보에는 예전에 입력했던 배송지가 그대로 남아있어야 하기 때문이다. 


## **🌱 Git**

### Branch

- `master (main)`: 바로 product로 release(배포)할 수 있는 브랜치
- `dev (develop)`: product로 release할 준비가 된 가장 안정적인 브랜치로 개발이 완료된 상태라면 **master** 브랜치로 merge
- `feature`: 새로운 기능을 추가할 때 사용하는 브랜치로 **dev** 브랜치에서 분기하여 진행되며, 개발이 완료된 기능은 **dev** 브랜치로 merge
  - **브랜치명 컨벤션** : `feat/{pageName}-{featureName}`

### Commit

|  "feat: ~ "  | 새로운 기능 추가   |
| :----------: | :----------------- |
|  "fix: ~ "   | 수정에 대한 커밋   |
| "bug" ~ " :  | 버그에 대한 커밋   |
| "styled: ~ " | 스타일이나 UI 수정 |
|  "docs: ~ "  | 문서 수정          |
