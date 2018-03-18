/**
 * Created by A on 2018/3/17.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(["jquery"],function () {
    function Dialog() {
        this.$box=$('<div class="dialog-box"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$container=$('<div class="dialog-container"></div>');
        this.$header=$('<div class="dialog-header"></div>');
        this.$title=$('<div class="dialog-title">注册</div>');
        this.$close=$('<div class="dialog-btn" id="close">[X]</div>');
        this.$content=$('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open=function () {
        this.$box.append(this.$mask).append(this.$container);
        this.$container.append(this.$header).append(this.$content);
        this.$header.append(this.$title).append(this.$close);
        $("body").append(this.$box);
        var This=this;
        this.$close.click(function () {
            This.$box.remove();
        })
    }
    //$("body").html("")
    // var dialog = {
    //     open: function () {
    //         var dialogHtml =
    //            '<div class="dialog-box">'+
    //            '<div class="dialog-mask"></div>'+
    //            '<div class="dialog-container">'+
    //            '<div class="dialog-header">'+
    //            '<div class="dialog-title">注册</div>'+
    //            '<div class="dialog-btn" id="close">[X]</div>'+
    //            '</div>'+
    //            '<div class="dialog-content"></div>'+
    //            '</div>'+
    //            '</div>' ;
    //         //document.body.innerHTML+=dialogHtml;
    //         $("body").append(dialogHtml);
    //         $("#close").click(function () {
    //             $(".dialog-box").remove();
    //         })
    //         // var oClose=document.getElementById("close");
    //         // oClose.onclick=function () {
    //         //     document.getElementsByClassName("dialog-box")[0].remove();
    //         // }
    //     }
    // };
          return Dialog;
})


