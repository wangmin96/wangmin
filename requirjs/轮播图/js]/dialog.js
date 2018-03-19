/**
 * Created by A on 2018/3/18.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(["jquery"],function () {
    function Dialog() {
        $box=$('<div class="box2"></div>');
        $image=$('<div class="image"></div>')
            <img src="image/1fcd5e256c36cc4540c1925bf28853ec.jpg">
            <img src="image/3e9d96ae7349a448836922e8ad942d93.jpg">
            <img src="image/0aff22b8667c7eea572108425737a27f.jpg">

            <ul class="arr-btn count">
            <li>&lt;</li>
            <li>&gt;</li>
            </ul>
            <ul class="count">
            <li class="active">1</li>
            <li>2</li>
            <li>3</li>
            </ul>


    }
    return Dialog

})

