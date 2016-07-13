/**
 * Created by 58 on 2016/7/13.
 */
define([],function(){

    var layout = {
        id:"message",
        rows:[
            {view:"toolbar", type:"MainBar", elements:[
                {view:"label", label: "留言板"}
            ]},
            {view:"form", autoheight: false, scroll: true, elements:[
                { view:"text", id:'name', label: '姓名', labelWidth: 80, value: "",placeholder:"我们联系您时的称呼"},
                { view:"text",label:"联系方式",labelWidth: 80, value:"",placeholder:"QQ/微信/邮箱/电话"},
                { view:"textarea", label:"留言内容",labelWidth: 80, placeholder:"在这里写下您宝贵的建议，如果您的建议最终被我们采纳，你将有机会获得我们提供的精致礼品哦,赶快给我们留言吧！！"},
                { view:"button", type:"form", label: '提交', align:"center"}
            ]
            }
        ]
    }

    return {
        $ui:layout
    };
});