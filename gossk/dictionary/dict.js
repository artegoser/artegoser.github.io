window.addEventListener("load", async () => {
  let dict = await fetch(
    "https://artegoser.github.io/gossk/dictionary/en-ru-dict.json"
  );
  dict = await dict.json();

  $("#sub").on("click", update);

  $("#search").keypress((e) => {
    if (e.which == 13) update();
  });

  function update() {
    let trigger;
    $("#words").html("");
    for (let item of dict) {
      if (
        item.en.match(new RegExp($("#search").val(), "gi")) ||
        item.ru.match(new RegExp($("#search").val(), "gi")) ||
        SliToRu(item.ru, true).match(new RegExp($("#search").val(), "gi"))
      ) {
        trigger = true;
        $("#words").append(
          `<div class="row bg-success p-2 m-2 text-light" style="border-radius:20px">SLI: ${SliToRu(
            item.ru,
            true
          )} => RU: ${item.ru} => EN: ${item.en}</div>`
        );
      }
    }
    if (!trigger) {
      let val = $("#search").val();
      $("#words")
        .append(`<div class="row bg-success p-2 m-2 text-light" style="border-radius:20px">RU: ${val} => SLI: ${SliToRu(
        val,
        true
      )}<br/>
          SLI: ${val} => RU: ${SliToRu(val)}</div>`);
    }
  }
});

function SliToRu(str, reverse) {
  let total = "";
  for (let char of str) {
    let upper = isUpper(char);
    char = char.toLowerCase();
    for (let item of alphabet) {
      if (item[reverse ? 0 : 1] === char) {
        if (upper) total += item[reverse ? 1 : 0].toUpperCase();
        else total += item[reverse ? 1 : 0];
        continue;
      } else {
        total += char;
        continue;
      }
    }
  }
  return total;
}

function isUpper(char) {
  return char.toLowerCase() !== char;
}

let alphabet = [
  ["а", "э"],
  ["б", "ш"],
  ["в", "щ"],
  ["г", "ч"],
  ["д", "ц"],
  ["е", "е"],
  ["ё", "ё"],
  ["ж", "й"],
  ["з", "х"],
  ["и", "у"],
  ["й", "л"],
  ["к", "ф"],
  ["л", "т"],
  ["м", "с"],
  ["н", "р"],
  ["о", "ы"],
  ["п", "к"],
  ["р", "п"],
  ["с", "н"],
  ["т", "м"],
  ["у", "о"],
  ["ф", "з"],
  ["х", "ж"],
  ["ц", "д"],
  ["ч", "г"],
  ["ш", "в"],
  ["щ", "б"],
  ["ъ", "ъ"],
  ["ы", "ю"],
  ["ь", "ь"],
  ["э", "я"],
  ["ю", "а"],
  ["я", "и"],
];
