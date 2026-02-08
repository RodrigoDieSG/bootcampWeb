$(document).ready(function () {
  let isNavy = false;
  let isRounded = false;

  $('#toggleColors').click(function () {
    isNavy = !isNavy;
    $('.box').each(function () {
      $(this).toggleClass('navy', isNavy);
    });
  });

  $('#toggleBorders').click(function () {
    isRounded = !isRounded;
    $('.box').each(function () {
      $(this).toggleClass('rounded', isRounded);
    });
  });

  $('#addBox').click(function () {
    const newBox = $('<div class="box"></div>');
    if (isNavy) newBox.addClass('navy');
    if (isRounded) newBox.addClass('rounded');
    $('#boxContainer').append(newBox);
  });
});