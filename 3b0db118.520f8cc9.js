(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{125:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"rightToc",(function(){return p})),t.d(e,"default",(function(){return i}));t(211);var a=t(207);function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}const o={id:"composite-pattern",title:"Composite Pattern"},p=[],c={rightToc:p},s="wrapper";function i({components:n,...e}){return Object(a.b)(s,r({},c,e,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = CompositePattern::of([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedReplace($subject)->with('XXX');\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedRemove($subject);\n")))}i.isMDXComponent=!0}}]);