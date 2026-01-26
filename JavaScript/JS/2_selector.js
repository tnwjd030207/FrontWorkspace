/*
    document 객체
    - 작성한 html의 태그를 피싱하여, 변환된 js object를 가지고 있는 객체
    - DOM : Document Object Model
*/

document.querySelector("#id").onclick = function(){
    // id와 일치하는 요소를 선택하는 선택자 함수
    // 1. getElementById('아이디명')
    var li = document.getElementById('#myli2'); //id값과 일치하는 1개 요소 선택
    // 2. querySelector('CSS선택자') CSS선택자와 일치하는 요소 1개 선택
    var li = document.querySelector('#myli2');

    console.log(li);
    console.dir(li); //객체구조 열람 메서드

    //선택한 요소의 스타일 속성 변경
    li.style.color='#ffff';
    li.style.backgroundColor='black';

    // 3. id 속성값으로 접근하기
    //  - 브라우저가(몇몇 브라우저 제외) id값의 요소를 전역변수형태로 등록
    //    하기 때문에 id속성값을 통해 요소를 바로 획득할 수 있다.
    //  - 단, 모든 브라우저에서 지원하지 않고, 또 다른 변수와 이름이
    //    충돌될 수 있기 때문에 주의해야 한다. 
    myli2.style.color='red';

    document.querySelector("#tag-name").onclick=function(){
        //태그명 기준 요소 선택
        // 1. getElementsByTagName : 배열형태의 데이터 반환
        var liArr = document.getElementsByTagName("li");

        // HTMLCollection은 생기던 배열이나, 배열의 유용한 메서드들은 
        // 일부만 존재하는 유사배열이다.
        console.log(liArr);

        // 2. querySelectorAll(태그명선택자)
        ilArr = document.querySelector('li');
        console.log('liArr');

        // NodeList도 유사배열이나, 유용한 메서드들을 지원한다.
        console.log('liArr');

        for (let index = 0; index < liArr.length; index++) {
           console.log(liArr[index]);
         
           liArr[index].style.color='rgb(130, 220, 50)';
           liArr[index].style.backgroundColor='red'; 
        }

        //배열의 유용한 메서드 1번
        liArr.forEach((li) => { 
            li.style.color="white"
        });

    };
    
    
    document.querySelector('#class-name').onclick=function(){
        //클래스명으로 요소를 선택하는 방법들
        var groups = document.getElementsByTagName('group');
        groups = document.querySelector('group');

        //버튼을 누를 때 마다 서낵한 요소의 배경색을 바꾸기
        for (var indii = 0; i < groups.length; i++) {
            var li = groups[i];
            var current = li.style.backgroundColor;
            if(current != 'springgreen'){
            li.style.backgroundColor = 'springgreen';
        } else{
            li.style.backgroundColor = 'white';
        }
            }
            
        }

        document.querySelector('#name.seletor').onclick= function(){
            //체크한 체크박스의 값들을 가져오기
            var hobbies = document.getElementsByTagName('hobby');
            hobbies = document.querySelector('input[name=hobby]');
            console.log(hobbies);

            for(var i=0; i<hobbies.length; i++){
                var hobby = hobbies[1];
                console.dir(hobby);
                //체크박스의 체크여부를 관리하는 속성
                if(hobby.checked){
                    console.log(hobby.value);
                }
            }

        }

    //아이디명 태그명 네임값으로 접근
        document.querySelector().onclick=function(){  

        }
    }