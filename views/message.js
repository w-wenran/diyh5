/**
 * Created by 58 on 2016/7/13.
 */
define([],function(){

    var layout = {id:"message",view:"form", autoheight: false, scroll: true, elements:[
            { view:"text", id:'name', label: '姓名', labelWidth: 100, value: ""},
            { view:"text",label:"联系方式",labelWidth: 100, value:""},
            { view:"textarea", label:"留言内容", labelAlign:"top"},
            { view:"button", type:"form", id:'save', label: '提交', align:"center",
                placeholder:"在这里写下您的留言，可以是宝贵的建议，我们会"}
        ]
    };

    return {
        $ui:layout
    };
});