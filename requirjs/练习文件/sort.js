/**
 * Created by A on 2018/3/17.
 */
// define(function () {
//     function sortArr(arr) {
//        return arr.sort(function (a,b) {
//             return b-a;
//         })
//     }
//     return sortArr;
//})

define(function (require) {
    var arr=[5,8,6,1,3];
    var sortArr=require("sort");
    console.log(sortArr(arr));
})
