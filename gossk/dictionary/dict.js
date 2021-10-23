window.addEventListener("load", async ()=>{
    let dict = await fetch("/gossk/dictionary/slingonian-en-ru-dict.json");
    dict = await dict.json();
    
    $("#sub").on("click", ()=>{
        $("#words").val("");
        for(let item of dict){
            if(item.en.match(new RegExp($("#search").val(), "gi"))||item.ru.match(new RegExp($("#search").val(), "gi"))||item.sli.match(new RegExp($("#search").val(), "gi"))){
                $("#words").append(`SLI: ${item.sli} => RU: ${item.ru} => EN: ${item.en} <br/>`);
            }
        }
    });
});