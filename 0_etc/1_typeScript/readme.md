자바스크립트 + 타입(문법) 
"JavaScript Superset"

에디터 부가기능 역활로 봐도 무관

### 특징

1. 타입 엄격히 검사해줌
2. 오타 검증

설치 방법 

1. nodejs 설치
2. VScode 에디터 준비
3. 터미널 오픈

```tsx
// 터미널
npm install -g typescript

설치후 index.ts와 tsconfig.json파일을 생성

그리고 tsconfig.json파일에 아래와 같이 입력 (컴바일 옵션설정)

// tsconfig.json
{   
  "compilerOptions" : {     
    "target": "es5",     
    "module": "commonjs",  
  } 
}

index.ts에 작성 후 터미널을 통해 타입스크립트로 변환 

// 터미널
tsc -w
```

→ 만약 아래와 같이 에러가 발생되었다면 아래와 같이 설정

```
Visual Studio Code IDE 툴에서 TERMINAL 을 사용하여 webpack을 실행시 또는 다른 명령어 사용시 에러 해결

error message

webpack : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\shimk\AppData\Roaming\npm\webpack.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조
하십시오.
위치 줄:1 문자:1
+ webpack
+ ~~~~~~~
    + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

1. windows PowerShell 프로그램을 관리자 권한으로 실행합니다.

2. Get-ExecutionPolicy 명령어를 작성하면 본인의 권한? 상태가 보여집니다.

3. 권한이 RemoteSigned 가 아니라면 Set-ExecutionPolicy RemoteSigned 를 입력

4. Get-ExecutionPolicy 명령어로 다시 한번 확인 하면 RemoteSigned로 변경 확인.
```

[[PowerShell] 이 시스템에서 스크립트를 실행할 수 없으므로 파일을 로드할 수 없습니다. 자세한 내용은about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오](https://dog-developers.tistory.com/183)

 짠 ! 해결 !

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/750295a4-636b-42b4-a6d9-d6f77bda6281/Untitled.png)

```tsx
타입을 지정할 수 있음

let 이름 :string = 'kim'; // String

let 이름 :string[] = 'kim'; // String

```

- 참고영상

[타입스크립트 쓰는 이유 & 필수 문법 10분 정리](https://www.youtube.com/watch?v=xkpcNolC270)