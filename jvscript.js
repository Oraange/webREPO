function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let listInner = document.getElementsByClassName("listInner");

  for (let i=0; i<listInner.length; i++) {
    let word = listInner[i].getElementsByClassName("word")
    if (word[0].innerHTML.toLowerCase().indexOf(search) != -1) {
      listInner[i].style.display="flex"
    } else {
      listInner[i].style.display="none"
    }
  }
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

/*
$(document).ready(function(){
		$('a').click(function(){
			var offset = $('.subtitle').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
	        $('html').animate({scrollTop : offset.top}, 400);
		});
	});
*/
