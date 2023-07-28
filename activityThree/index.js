function hide() {
  $(".flyout-backdrop")
    .removeClass("show")
    .on("transitionend", (event) => {
      $(event.currentTarget).remove();
    });

  $(this).removeClass("show");
}

function show() {
  let backdrop = $('<div class="flyout-backdrop fade"></div>');
  $(document.body).append(backdrop);

  bootstrap.Util.reflow(backdrop[0]);

  backdrop.addClass("show").on("click", (event) => {
    hide.call(this);
  });

  $(this).addClass("show");
}

function toggle() {
  if ($(this).hasClass("show")) {
    hide.call(this);
  } else {
    show.call(this);
  }
}

$(document)
  .on("click", '[data-toggle="flyout"]', (event) => {
    let target = $(event.currentTarget).data("target");
    $(target).flyout("toggle");
  })
  .on("click", '[data-dismiss="flyout"]', (event) => {
    $(event.currentTarget).closest(".flyout.show").flyout("hide");
  });

$.fn.flyout = function (config) {
  return this.each(() => {
    if (config == "hide") {
      hide.call(this);
    } else if (config == "show") {
      show.call(this);
    } else if (config == "toggle") {
      toggle.call(this);
    }
  });
};

// $(document).ready(function () {
//     $("cardSingle").hover(function () {
//         $(this).css("display", "none");
//     });
// });
