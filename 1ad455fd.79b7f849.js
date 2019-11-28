(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return u}));n(0);var a=n(207);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const r={title:"Capturing groups update",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},i=[],p={rightToc:i},c="wrapper";function u({components:t,...e}){return Object(a.b)(c,o({},p,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One update about groups, not to cause confusion. ",Object(a.b)("inlineCode",{parentName:"p"},"$match->groups()")," treats indexes a bit different than ",Object(a.b)("inlineCode",{parentName:"p"},"$match->group(int)"),".\nRead on to learn more :)"),Object(a.b)("p",null,"Anyone who worked with regular expressions knows, that group ",Object(a.b)("inlineCode",{parentName:"p"},"0")," is a whole match. I don't want to break\nthat convention. That is why I assumed that they must be equal:```php\n$match->group(0) === $match->text()"),Object(a.b)("p",null,"Having said that, I still want to distinguish a method which returns groups and the one that returns a whole match.\nSo ",Object(a.b)("inlineCode",{parentName:"p"},"$match->groups()")," ",Object(a.b)("strong",{parentName:"p"},"doesn't")," return the whole match at index ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", while ",Object(a.b)("inlineCode",{parentName:"p"},"$match->group()")," does."),Object(a.b)("p",null,"You can think of ",Object(a.b)("inlineCode",{parentName:"p"},"$this->group(int)")," method as:```php\nreturn ","[$this->text(), ...$this->groups()]",";"),Object(a.b)("p",null,"So...```php\n$match->group(0) == $match->text();\n$match->group(1) == $match->groups()","[0]",";\n$match->group(2) == $match->groups()","[1]",";\n$match->group(3) == $match->groups()","[2]",";\n$match->group(4) == $match->groups()","[3]",";"),Object(a.b)("p",null,"And a quick update about the CleanRegex:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"I added a ",Object(a.b)("inlineCode",{parentName:"li"},"ReadMeTest")," testcase, which asserts that all code used in ReadMe.md has the presented results."),Object(a.b)("li",{parentName:"ul"},"New ",Object(a.b)("inlineCode",{parentName:"li"},"->first()"),", ",Object(a.b)("inlineCode",{parentName:"li"},"->all()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"->only()")," methods to ",Object(a.b)("strong",{parentName:"li"},"explicitly")," match/replace certain amount of occurrences.\nThis will also be used with capturing groups.")))}u.isMDXComponent=!0}}]);