/**
 * Created by 58 on 2016/7/5.
 */
define(["./dashboard","./company","./message"],function(dashboard,company,message){

    var appui = {
        rows:[
            {view:"scrollview",scroll:"y",body:{css:"bg",type:"clean",
                view: "multiview",cells:[message.$ui,dashboard.$ui,company.$ui]
            }
            },
            {
                id:"home_tabbar",
                view: "tabbar",
                type: "iconTop",
                multiview: true,
                tabMinWidth: 80,
                options:[
                    { id:"message", icon:"envelope", value: "留言" },
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
            /*$$("home_tabbar").attachEvent("onItemClick",function(id,e){
                $$("home_tabbar").$scope.show("/page/"+$$("home_tabbar").getValue());
            });*/
        }
    }

});