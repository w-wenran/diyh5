/**
 * Created by 58 on 2016/7/5.
 */
define([],function(){

    var appui = {
        rows:[
            { $subview:true},
            {
                id:"home_tabbar",
                view: "tabbar",
                type: "iconTop",
                multiview: true,
                tabMinWidth: 80,
                options:[
                    { id:"message", icon:"envelope", value: "联系我们" },
                    { id:"dashboard", icon:"home", value: "发现" },
                    { id:"company", icon:"building", value: "公司" },
                    { id:"my_account", icon:"user", value: "我的" }
                ]
            }
        ]
    };
    
    return {
        $ui:appui,
        $oninit:function (view,scop) {
            
        }
    }

});