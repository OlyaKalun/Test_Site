const value_01 = document.getElementById("value_01");
const value_02 = document.getElementById("value_02");
const value_03 = document.getElementById("value_03_display");
const value_01_display = document.getElementById("value_01_display");
const value_02_display = document.getElementById("value_02_display");

value_01_display.innerHTML = value_01.value;
value_02_display.innerHTML = value_02.value;

/* function for formating numbers with thousands */
function numberWithSpaces(val) {
  const [int, tail] = val.toString().split(".");
  if (tail) {
    return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.${tail}`;
  }
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

value_03.innerHTML = numberWithSpaces(
  Number(value_01.value) * Number(value_02.value)
);

function recalculate() {
  const firstValue = value_01.value;
  const secondValue = value_02.value;
  const resultCalculation = Number(firstValue) * Number(secondValue);

  value_03.innerHTML = numberWithSpaces(resultCalculation);
  value_01_display.innerHTML = value_01.value;
  value_02_display.innerHTML = value_02.value;
}

value_01.addEventListener("change", recalculate);
value_02.addEventListener("change", recalculate);

/* function that applies styles for range progress track */
const rangeCalculation = function (e) {
  const val =
    ($(this).val() - $(this).attr("min")) /
    ($(this).attr("max") - $(this).attr("min"));
  const percent = val * 100;

  $(this).css(
    "background",
    "linear-gradient(to right, #ffd200 0%, #ffd200 " +
      percent +
      "%, #eee " +
      percent +
      "%, #eee 100%)"
  );

  $(this).css(
    "background-image",
    "-moz-linear-gradient(left center, #ffd200 0%, #ffd200 " +
      percent +
      "%, #eee " +
      percent +
      "%, #eee 100%)"
  );
};

$("input[type=range]").mousemove(rangeCalculation);
$("input[type=range]").change(rangeCalculation);

/* function that is responsible for activating navigation menu items */
function makeLiActive() {
  $(this).closest("li").addClass("active").siblings().removeClass("active");
}

$("header .menu .main-nav").click(makeLiActive);

function toggleHomeSubmenu() {
  $(".home-sub-wrapper").toggle();
}

$(".menu .home").click(toggleHomeSubmenu);
