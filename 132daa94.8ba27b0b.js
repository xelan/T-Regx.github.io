(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));a(0);var n=a(207);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const r={title:"Match details update",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},o=[],s={rightToc:o},c="wrapper";function p({components:e,...t}){return Object(n.b)(c,i({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Most changes in T-Regx since the last Blog post were to ",Object(n.b)("a",i({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match")," details"),". We\nadded ",Object(n.b)("a",i({parentName:"p"},{href:"/docs/match-details#user-data"}),"user data")," (",Object(n.b)("a",i({parentName:"p"},{href:"/docs/match-details#user-data"}),Object(n.b)("inlineCode",{parentName:"a"},"getUserData()"),"/",Object(n.b)("inlineCode",{parentName:"a"},"setUserData()")),")\nwhich can be used in chained calls (e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"filter()->map()"),")."),Object(n.b)("p",null,"The second change is ",Object(n.b)("a",i({parentName:"p"},{href:"/docs/match-details#integers"}),Object(n.b)("inlineCode",{parentName:"a"},"isInt()"),"/",Object(n.b)("inlineCode",{parentName:"a"},"parseInt()")),' which allow you to handle "real" integers safetly -\nwithout the fear of "PHP smart" integers (e.g. PHP thinks that ',Object(n.b)("inlineCode",{parentName:"p"},'"1e3"')," is ",Object(n.b)("inlineCode",{parentName:"p"},"1000"),"). T-Regx understands that robust applications\ncan't allow numbers to be ",Object(n.b)("inlineCode",{parentName:"p"},"10e4")," - it should be treated as an invalid integer by default!"),Object(n.b)("p",null,"And last, ",Object(n.b)("inlineCode",{parentName:"p"},"Match.group(int|string)")," is now validated (T-Regx was waiting a bit for this change!). We believe that using an\ninvalid group name is a sign of a bug, so using ",Object(n.b)("inlineCode",{parentName:"p"},"group(-1)")," or ",Object(n.b)("inlineCode",{parentName:"p"},"group('!@#')")," now throws ",Object(n.b)("inlineCode",{parentName:"p"},"\\InvalidArgumentException"),",\nas it's more suitable than assuming that ",Object(n.b)("inlineCode",{parentName:"p"},"-1")," is just an unmatched group."))}p.isMDXComponent=!0}}]);