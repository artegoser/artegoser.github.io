window.onload = () => {
const socket = io("https://artegoser.tplinkdns.com:9191");

socket.emit("ping");
socket.on("pong", ()=>{
    $("#check").html("Server online!");
});
}