var header = document.getElementById("myHeader");
var content = document.getElementById("myContent");
var myDropdown = document.getElementById("myDropdown");
var sticky = header.offsetTop;
var i=2;


$(window).scroll(function(){
  myFunction();
});


// Close the dropdown if the user clicks outside of it
$(window).click(function(event){
  var elementClasses = document.getElementById("myDropdown");
  if(document.getElementsByClassName('dropbtn')[0].contains(event.target)){
    i++;
    console.log("inside clicked!", i);
  }else if((i%2)&&(!document.getElementsByClassName('sub-menu')[0].contains(event.target))){
    console.log("yes")
    document.getElementById("myDropdown").classList.toggle("show");
    i=2;
  }
});


// function open and close menu by appending class show
function menuFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// function for sticky menu onscroll
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("spacing");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("spacing");
  }
}

// CURSOR OVERLAY
  function setBounds(){
    $('#bg').width($('.introbody').width()/2).height($('.introbody').height());
  } //prevent scrolling via cursor

  window.setTimeout(setBounds, 500);

  $(window).resize(function() {
    setBounds();
  });

  $(document).on('mousemove', function(e){
    console.log('cursormove');
      $('#point').css({
         left:  e.pageX - 150,
         top:   e.pageY - 150
      });
  });


//code for replaing text into clicked hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4$('.sub-menu>p').click(function() {
//    $('#menutitle').text($(this).text());
//    console.log("test");
// });
