---
title: Hexo 블로그 글쓰기
date: 2020/02/07
tags: ['hexo']
subtitle: 일단 글을 쓰고보자! 수정은 나중에 하고
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

생성 직후 해당 파일을 열어보면, /scaffolds/post.md 파일을 기초로 아래와 같이 작성됩니다
```
---
title: hexo-blog-post
date: 2020-02-06 23:51:33
tags:
---
```
> title : 파일명으로 입력되어있으며, 적절한 제목으로 바꾸어 사용해도 됩니다
> date : 게시글 생성 날짜
> tags : 해당 포스트와 관련된 태그를 입력합니다(예:#hexo 또는 [헥소,깃허브])

제가 에디터로 내용을 추가한 hexo-blog-post.md 내용입니다
<img src="/image/hexo-blog-post/01.png" />



```
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

아래와 같이 내용이 뜬다면 성공!
<img src="/image/hexo-blog-post/02.png" />