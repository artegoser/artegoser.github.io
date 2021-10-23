window.addEventListener("load", async ()=>{
    let dict = await fetch("/gossk/dictionary/slingonian-en-ru-dict.json");
    dict = await dict.json();
    console.log(dict);
});