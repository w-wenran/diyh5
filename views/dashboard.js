/**
 * Created by 58 on 2016/7/5.
 */
define([],function(){

    var img = function(obj){
        return '<img src="'+obj.src+'" class="content" ondragstart="return false"/><div class="title">'+obj.title+'</div>'
    };

    var header = {
        view:"carousel",
        height:120,
        cols:[
            { css: "image", template:img, data:{src:"imgs/image001.jpg", title: "Image 1"} },
            { css: "image", template:img, data:{src:"imgs/image005.jpg", title: "Image 5"} },
            { css: "image", template:img, data:{src:"imgs/image006.jpg", title: "Image 6"} }
        ],
        navigation:{
            type: "side",
            buttons:false,
            items:true
        }
    };

    //精选活动
    var auslese = {type:"clean",rows:[
        { height:40, borderless:true,
            template: function(obj){
                var html = '<div class="u-tab-bar">';
                html+='<div class="u-tag">&nbsp;</div>';
                html+=obj.name+"</div>";
                return html;
            },
            data: {name: "精选活动"}
        },
        {}
    ]};

    var layout = {
        margin:15,
        rows:[
            header,
            auslese
        ]
    }

    return {
        $ui:layout,
        $oninit:function (view,scop) {
            $$("home_tabbar").setValue("dashboard");
        }
    }
});