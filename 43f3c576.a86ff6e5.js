(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return i}));a(211);var n=a(207),r=a(208),c=a(209);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const l={id:"quoting",title:"Quoting"},u=[{value:"Contract",id:"contract",children:[]}],b={rightToc:u},p="wrapper";function i({components:e,...t}){return Object(n.b)(p,o({},b,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are two methods ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::quote()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::unquote()"),"."),Object(n.b)("p",null,"First of which works as ",Object(n.b)("inlineCode",{parentName:"p"},"preg_quote()")," is supposed to\nwork (except for the fact that ",Object(n.b)("inlineCode",{parentName:"p"},"preg_quote()")," is broken before PHP 7.1.3 version, and ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::quote()")," fixes it)..."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),'Pattern::quote("Welcome\\How are you?");\n')))),Object(n.b)("div",{className:"output-block"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-text"}),"Welcome\\\\How are you\\?\n"))),Object(n.b)("p",null,"...second of which is the direct opposite:"),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),'Pattern::unquote("Welcome\\\\How are you\\?");\n')))),Object(n.b)("div",{className:"output-block"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-text"}),"Welcome\\How are you?\n"))),Object(n.b)("p",null,"Please, keep in mind that this ",Object(n.b)("strong",{parentName:"p"},"is not")," a safe way to create patterns with unsafe characters - for that, consider\nusing ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/prepared-patterns"}),"Prepared Patterns"),"."),Object(n.b)("h2",{id:"contract"},"Contract"),Object(n.b)("p",null,"These two methods should be transitive, so:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"$output = Pattern::unquote(Pattern::quote($input));\n")),Object(n.b)("p",null,"The contract is ",Object(n.b)("inlineCode",{parentName:"p"},"$input === $output")," for any ",Object(n.b)("inlineCode",{parentName:"p"},"$input")," value."))}i.isMDXComponent=!0},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(210),o=a.n(c);t.a=function(e){const{block:t,children:a,defaultValue:c,values:l}=e,[u,b]=Object(n.useState)(c);return r.a.createElement("div",null,r.a.createElement("ul",{className:o()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{className:o()("tab-item",{"tab-item--active":u===e}),key:e,onClick:()=>b(e)},t))),r.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);