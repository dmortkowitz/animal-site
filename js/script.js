$(document).ready(function() {
  $("button#buttonA1").click(function() {
    $("#a").removeClass();
    $("#a").addClass("block1");
  });
  $("button#buttonA2").click(function() {
    $("#a").removeClass();
    $("#a").addClass("a");
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
