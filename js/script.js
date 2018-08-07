$(document).ready(function() {
  $("button#buttonA").click(function() {
    $("#a").removeClass();
    $("#a").addClass("block1");
  });

  $("button#buttonB").click(function() {
    $("#b").removeClass();
    $("#b").addClass("block2");
  });

  $("button#buttonC").click(function() {
    $("#c").removeClass();
    $("#c").addClass("block3");
  });

  $("button#buttonD").click(function() {
    $("#d").removeClass();
    $("#d").addClass("block4");
  });
});
