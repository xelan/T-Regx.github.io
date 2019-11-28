(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{97:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return o}));t(211);var n=t(207);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const c={id:"replace-match-details",title:"Advanced replace details"},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Examples",id:"examples",children:[{value:"<code>modifiedSubject()</code> example",id:"modifiedsubject-example",children:[]},{value:"<code>modifiedOffset()</code> example",id:"modifiedoffset-example",children:[]}]},{value:"Performance",id:"performance",children:[]}],r={rightToc:b},i="wrapper";function o({components:e,...a}){return Object(n.b)(i,l({},r,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"When using ",Object(n.b)("inlineCode",{parentName:"p"},"pattern()->match()")," all ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-for-each"}),"callbacks")," receive one parameter when called -\n",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match")),". You can learn more about it on ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(n.b)("p",null,"The callback's signature can accept either ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match"))," details or ",Object(n.b)("inlineCode",{parentName:"p"},"string"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"function (Match $match) {}")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"function (string $match) {}"))),Object(n.b)("p",null,"However, when using ",Object(n.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," the callback receives ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," details object. It extends ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match"))," object,\nso they have exactly alike interfaces."),Object(n.b)("p",null,"Additionally, ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," has two separate methods:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedOffset(): int")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedSubject(): string"))),Object(n.b)("p",null,"They work similarly to ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-offsets"}),Object(n.b)("inlineCode",{parentName:"a"},"offset()"))," and ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-details#subject"}),Object(n.b)("inlineCode",{parentName:"a"},"subject()"))," methods, but they\ntake into account ",Object(n.b)("strong",{parentName:"p"},"results of previous callbacks"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"modifiedOffset()")," returns occurrence's offset, but according to a newly replaced subject."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"modifiedSubject()")," returns current state of a newly replaced subject.")),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("h3",{id:"modifiedsubject-example"},Object(n.b)("inlineCode",{parentName:"h3"},"modifiedSubject()")," example"),Object(n.b)("p",null,"Given a pattern that matches capitalized words:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-php"}),"$subject = 'Me, Rihanna and my Mom really like Sweden';\n\n$result = pattern(\"[A-Z][a-z]+\")->replace($subject)->all()->callback(function () {\n    return '____';\n});\n")),Object(n.b)("p",null,"having iterated the subject looking for ",Object(n.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+")," - for each ",Object(n.b)("a",l({parentName:"p"},{href:"/docs/match-offsets"}),Object(n.b)("inlineCode",{parentName:"a"},"Match"))," the result of\n",Object(n.b)("inlineCode",{parentName:"p"},"Match.subject()")," method would always be the same. There are 4 occurrences matched by the pattern, so callback is\ninvoked 4 times."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(n.b)("p",null,"Results of ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch.subject()")," would be identical."),Object(n.b)("hr",null),Object(n.b)("p",null,"However, results of ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedSubject()")," would also contain results of ",Object(n.b)("strong",{parentName:"p"},"previous replacements"),"."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n")),Object(n.b)("p",null,"And the ",Object(n.b)("inlineCode",{parentName:"p"},"$result")," would be equal to"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like ____\n")),Object(n.b)("h3",{id:"modifiedoffset-example"},Object(n.b)("inlineCode",{parentName:"h3"},"modifiedOffset()")," example"),Object(n.b)("p",null,"Have you iterated the subject looking for ",Object(n.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+"),", these would be the results of ",Object(n.b)("inlineCode",{parentName:"p"},"Match.offset()")," method."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\noffset() // 0\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n    \u2191\n    offset() // 4\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                   \u2191\n                   offset() // 19\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                                   \u2191\n                                   offset() // 35\n")),Object(n.b)("p",null,"Results of ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," would be identical."),Object(n.b)("hr",null),Object(n.b)("p",null,"But, if instead of ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," you use ",Object(n.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedOffset()"),", these are the results:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\nmodifiedOffset()  // 0\noffset()          // 0\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n      \u2191\n      modifiedOffset() // 6\n    \u2191\n    offset()           // 4\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n                  \u2191\n                  modifiedOffset()  // 18\n                   \u2191\n                   offset()         // 19\n")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n                                   \u2191\n                                   modifiedOffset()  // 35\n                                   offset()          // 35\n")),Object(n.b)("h2",{id:"performance"},"Performance"),Object(n.b)("p",null,"But be sure, each of those examples only uses one call to ",Object(n.b)("inlineCode",{parentName:"p"},"preg_replace_callback()"),". :)"))}o.isMDXComponent=!0}}]);