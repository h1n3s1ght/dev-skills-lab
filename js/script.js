//Use jQuery to grab the class of liSkills to remove the list items at the page load
$(document).ready(function(){
    $(".liSkills").remove();
})

//Create a new HTML li element at the end of the list.
//Create Function to run on click of button
$(document).ready(function () {
  $(".addSkills").click(function () {
    var string = $(".textInput").val();
    $(".mySkills").append(
      `<li class='liSkills'>${string}</li>`
    );
    console.log(string);
  });
});

//Clear the text input box after every button click
$(document).ready(function () {
  $(".addSkills").click(function () {
    $(".textInput").val("");
  });
});


//Test event with console log
//Remove an item from the list
//   $("a").on('click', 'button', function (event) {
//       console.log(event);
//       $(this).closest('ul.mySkills').fadeOut(3000)
//   });
$('ul.mySkills').on('click', 'li.liSkills',  function(){
    $(this).fadeOut(2000);
})