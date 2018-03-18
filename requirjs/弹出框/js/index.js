/**
 * Created by A on 2018/3/17.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'

    }
});
require(["dialog","jquery"],function (Dialog,$) {
// var oBtn=document.getElementById("btn");
// oBtn.onclick=function () {
// dialog.open()
// }
    $("#btn1").click(function () {
        var dialog1=new Dialog();
        dialog1.open()
    })
    $("#btn").click(function () {
        var dialog=new Dialog();
        dialog.open();
    })
    //AMD
    //CMD
})