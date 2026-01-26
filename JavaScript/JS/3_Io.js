
confirmBtn.onclick = function(){
    //confirm : 확인/취소 버튼을 통해 논리적인 처리를 지원하는 팝업창
    var bool = confirm("정말 삭제하시겠습니까?");
    console.log(bool);

    if(bool){
        //파일삭제 로직..
        // alert : 메세지 내용을 출력하는 팝업
        alert("파일을 삭제했습니다.");
    }
};

promptBtn.onclick = function(){
    //prompt : 사용자로부터 문자열 입력을 받을 수 있는 모달
    var name = prompt("당신의 이름은 무엇입니까?");

    console.log(name);

    //자바 스크립에서는 "값이 존재하는 경우" true, 값이 존재하지 않는 경우 false로 처리
    if(!name){
        alert("올바른 이름을 입력하세요.");
    } else{
        alert("안녕하세요!!" + name + "님 !!");
    }
}

innerHeight.onclick = function(){
    /* innerHTML : 각 HTML태그의 content영역을 의미
        getter방식 : html이 포함된 content를 반환
        setter방식 : 주어진 문자열을 html로 변환하여 출력
    */
   var str = "<h1>치킨먹고싶다</h2>";
   wrapper.innerHTML = str; //setter
   console.log(wrapper, innerHtml); //getter

}

  innerT.onclick = function(){
    /*
     *innerText / textContent : content영역 안의 "문자"요소만을 가져오는 속성 
     */
    var str = "<h1>배고파요</h1>";
    wrapper.innereText = str;
     wrapper.textContent = str;
    console.log(wrapper.innereText)
   }

   outerHeight.onclick = function(){
    // outerHTML : 선택된 요소의 내부 Content값과 + 선택된 요소
    // 반환(getter)하거나 저장(ster)하는 속성
    console.log(wrapper. outerHeight);
    wrapper.innereText="<mark>apple</mark>"

   }