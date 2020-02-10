---
title: Hexo 블로그 글쓰기
tags: []
subtitle: 일단 글을 쓰고보자! 수정은 나중에 하고
date: 2020-02-07 00:00:00
updated:
---


## 글을 생성하자
Hexo를 설치를 했으니 바로 글을 하나 작성해보겠습니다
```
$ hexo new post 'hexo-blog-post'
INFO  Created: D:\02.workspace\hexo-blog\source\_posts\hexo-blog-post.md
```

hexo-blog-post.md(마크다운) 파일이 생성되었습니다
```
$ cd /hexo-blog/source/_posts/
$ ls /* 윈도우는 dir */
hexo-blog-post.md
```

생성 직후 해당 파일을 열어보면, /scaffolds/post.md 파일을 기초로 아래와 같이 생성됩니다
```
---
title: hexo-blog-post
date: 2020-02-06 23:51:33
tags:
---
여기서부터 게시물 내용 작성
```
이렇게 작성된 영역을 <code>Front-matter</code>라고 하며, 게시물에 대한 환경 설정등의 정보를 이곳에 기입을 합니다

> title : 파일명으로 입력되어있으며, 적절한 제목으로 바꾸어 사용해도 됩니다
> date : 게시글 생성 날짜
> tags : 해당 포스트와 관련된 태그를 입력합니다(예:#hexo 또는 [헥소,깃허브])

더 자세한 내용을 원하시는 분은 [Hexo 메뉴얼](https://hexo.io/ko/docs/front-matter)을 참고 하시면 됩니다

제가 에디터로 추가한 hexo-blog-post.md의 내용입니다
<img src="/image/hexo-blog-post/01.png" />

Hexo 서버를 실행하여 작성한 글을 보도록 하겠습니다
```
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

아래와 같이 내용이 뜬다면 성공!
<img src="/image/hexo-blog-post/02.png" />

발행할 글이 완성이 되었다면, 나의 github에 배포하여 내도메인.github.io 에서 확인을 해봅니다
```
$ hexo clean && hexo generate
$ hexo deploy
INFO  Deploying: git
INFO  Setting up Git deployment...
Initialized empty Git repository in D:/02.workspace/chosajang.github.io/.deploy_git/.git/
[master (root-commit) 8375898] First commit
...
Branch 'master' set up to track remote branch 'master' from 'https://github.com/chosajang/chosajang.github.io.git'.
INFO  Deploy done: git
```
중간에 내용이 블라블라 뜨지만 네...중요한건 마지막에 'done'이죠
