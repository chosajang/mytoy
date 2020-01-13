---
title: GitHub으로 블로그 만들기 - 주소설정 -
date: {{ date }}
updated: {{ updated }}
tags: ['github']
categories: []
thumbnail: ""
permalink: ""
---

계정이름.github.io의 URL로 블로그 운영을 위한 github 설정

<!-- more  -->
 > 예: https://chosajang.github.io 

### GitHub 저장소 생성

github 계정이 필요하며, 없을경우 계정 생성 후 아래 내용을 진행합니다

1. 로그인 후, 상단의 탭 메뉴들 중 Repositories 메뉴를 선택합니다
2. 우측에 New 버튼을 눌러 저장소(Repository) 생성 메뉴로 들어갑니다

<img src="/image/github.blog.create/01.gif" />

신규 저장소를 생성하는 메뉴에 들어왔습니다
아래와 같이 저장소 정보를 작성합니다

3. 계정이름 + github.io를 붙여서 저장소 이름을 작성합니다
이와 같은 규칙을 지켜야 github.io 주소로 서비스할 수 있다고 합니다
> GitHub 계정이름 : chosajang
> Repository name : chosajang.github.io

4. 다른 설정 변경없이 "Create repository"버튼을 눌러서 저장소를 생성합니다

<img src="/image/github.blog.create/02.gif" />

저장소가 생성된 것을 확인 할 수 있습니다

<img src="/image/github.blog.create/03.gif" />

### README.MD 작성
저장소 생성 후, 해당 주소(chosajang.github.io)로 접속해도 화면이 뜨지 않을 것입니다
README.md 파일을 생성하여 간단한 문구를 작성 후, 결과를 확인합니다

1. 우측 하단의 Add a README 버튼 클릭합니다
<img src="/image/github.blog.create/04.gif" />

2. README.md 파일을 생성합니다.
MD(Markdown) 란?
특수기호와 문자를 이용한 간단한 구조의 문법을 사용하여 글 작성 후 HTML로 변환이 가능한 텍스트 기반의 마크업 언어입니다
``` md
# chosajang.github.io
GitHub으로 블로그 만들기! 시작!
```
<img src="/image/github.blog.create/05.gif" />

3. README.md 파일 내용 작성 후 커밋(저장)하기
README.md 파일의 커밋 메세지를 작성 후 Commit new file 버튼을 클릭하여 작성을 완료합니다
<img src="/image/github.blog.create/06.gif" />

### github.io 접속
내용 작성 후, https://chosajang.github.io 에 접속하여 아래와 같은 화면이 뜨면 성공!
<img src="/image/github.blog.create/07.gif" />

<!-- toc -->