(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));n(211);var a=n(207);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const i={id:"match-groups",title:"Capturing groups"},c=[{value:"Overview",id:"overview",children:[]},{value:"Group details",id:"group-details",children:[{value:"Offsets",id:"offsets",children:[]},{value:"Optional groups",id:"optional-groups",children:[]},{value:"Index, name and identifier",id:"index-name-and-identifier",children:[]}]},{value:"Group is matched",id:"group-is-matched",children:[]},{value:"Group exists",id:"group-exists",children:[]},{value:"Composite groups",id:"composite-groups",children:[{value:"Group names",id:"group-names",children:[]},{value:"Groups count",id:"groups-count",children:[]}]},{value:"Other occurrences",id:"other-occurrences",children:[]},{value:"Groups In-Depth",id:"groups-in-depth",children:[{value:"Invalid group identifiers",id:"invalid-group-identifiers",children:[]}]}],o={rightToc:c},p="wrapper";function l({components:e,...t}){return Object(a.b)(p,r({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When using ",Object(a.b)("inlineCode",{parentName:"p"},"pattern()->match()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"->replace->callback()"),", some methods receive a callback that accepts\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details object. These methods are:\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-first"}),Object(a.b)("inlineCode",{parentName:"a"},"first()")),",\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-for-first"}),Object(a.b)("inlineCode",{parentName:"a"},"forFirst()")),",\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-for-each"}),Object(a.b)("inlineCode",{parentName:"a"},"forEach()")),"/",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-for-each"}),Object(a.b)("inlineCode",{parentName:"a"},"iterate()")),",\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-map"}),Object(a.b)("inlineCode",{parentName:"a"},"map()")),",\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-flat-map"}),Object(a.b)("inlineCode",{parentName:"a"},"flatMap()")),",\n",Object(a.b)("a",r({parentName:"p"},{href:"/docs/replace-callback"}),Object(a.b)("inlineCode",{parentName:"a"},"callback()")),"."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This page only concerns ",Object(a.b)("strong",{parentName:"p"},"capturing groups")," of ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match")),", specifically. See ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details for more throughout documentation.")),Object(a.b)("p",null,"Using ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details, you gain access complete information about capturing groups:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#group-details"}),Object(a.b)("inlineCode",{parentName:"a"},"group(int|string)"))," - capturing group details. If group is matched, below methods are available:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"matched()")," - whether the group was matched by the subject"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"text()")," - value of the group"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parseInt()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"isInt()")," - allow you to handle integers safely"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#offsets"}),"offsets of matched values")," in the subject:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"character offsets (UTF-8 safe) - ",Object(a.b)("inlineCode",{parentName:"li"},"offset()")),Object(a.b)("li",{parentName:"ul"},"byte offsets - ",Object(a.b)("inlineCode",{parentName:"li"},"byteOffset()")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#optional-groups"}),Object(a.b)("inlineCode",{parentName:"a"},"orReturn()")),"/",Object(a.b)("a",r({parentName:"li"},{href:"#optional-groups"}),Object(a.b)("inlineCode",{parentName:"a"},"orElse()")),"/",Object(a.b)("a",r({parentName:"li"},{href:"#optional-groups"}),Object(a.b)("inlineCode",{parentName:"a"},"orThrow()"))," - returns a group, or controls the absence of the group"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#index-name-and-identifier"}),Object(a.b)("inlineCode",{parentName:"a"},"index()"))," - ordinal value of the capturing group in a pattern"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#index-name-and-identifier"}),Object(a.b)("inlineCode",{parentName:"a"},"name()"))," - name of the capturing group, or ",Object(a.b)("inlineCode",{parentName:"li"},"null")," of group is not named"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#index-name-and-identifier"}),Object(a.b)("inlineCode",{parentName:"a"},"usedIdentifier()"))," - either ",Object(a.b)("inlineCode",{parentName:"li"},"index()")," or ",Object(a.b)("inlineCode",{parentName:"li"},"name()"),", depending on the argument of ",Object(a.b)("inlineCode",{parentName:"li"},"group(int|string)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#group-is-matched"}),Object(a.b)("inlineCode",{parentName:"a"},"matched(int|string)"))," - whether the group was matched by the subject"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#group-exists"}),Object(a.b)("inlineCode",{parentName:"a"},"hasGroup(int|string)"))," - whether group was used in a pattern"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#composite-groups"}),Object(a.b)("inlineCode",{parentName:"a"},"groups()")),"/",Object(a.b)("a",r({parentName:"li"},{href:"#composite-groups"}),Object(a.b)("inlineCode",{parentName:"a"},"namedGroups()"))," - interface for composite operations for all groups"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#group-names"}),Object(a.b)("inlineCode",{parentName:"a"},"groupNames()"))," - string list of named groups used in a pattern"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#groups-count"}),Object(a.b)("inlineCode",{parentName:"a"},"groupsCount()"))," - counts number of capturing groups (without duplicates of named and regular groups)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#other-occurrences"}),Object(a.b)("inlineCode",{parentName:"a"},"all()"))," - other matched occurrences of the group")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"With PHP, all groups' syntax: ",Object(a.b)("inlineCode",{parentName:"p"},"(?<name>)"),", ",Object(a.b)("inlineCode",{parentName:"p"},"(?'name')")," and ",Object(a.b)("inlineCode",{parentName:"p"},"(?P<name>)"),' are considered "named". Regular, indexed groups\nare use with syntax ',Object(a.b)("inlineCode",{parentName:"p"},"()"),". Group ",Object(a.b)("inlineCode",{parentName:"p"},"(?:)")," is considered a non-capturing group.")),Object(a.b)("h2",{id:"group-details"},"Group details"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$p = '(?<value>\\d+)(?<unit>cm|mm)';\n$s = '192mm and 168cm or 18mm and 12cm';\n\npattern($p) ->match($s) ->iterate(function (Match $match) {\n    \n    $match->group('value')->text()      // '168' (string)\n    $match->group('value')->isInt()     // true  (boolean)\n    $match->group('value')->parseInt()  // 168   (int)\n    \n    $match->group('unit')->offset()     // 13\n    $match->group('unit')->text()       // 'cm'\n    $match->group('unit')->isInt()      // false\n    $match->group('unit')->parseInt()   // throws IntegerFormatException\n    \n    $match->group('unit')->index()      // 2\n    $match->group(2)->name()            // 'unit'\n});\n")),Object(a.b)("h3",{id:"offsets"},"Offsets"),Object(a.b)("h3",{id:"optional-groups"},"Optional groups"),Object(a.b)("p",null,"Some patterns have required capturing groups, e.g ",Object(a.b)("inlineCode",{parentName:"p"},"^(cm|mm)$"),". Others, have capturing groups that are optional,\ne.g. ",Object(a.b)("inlineCode",{parentName:"p"},"\\d+(cm|mm)?"),". As you can see the ",Object(a.b)("inlineCode",{parentName:"p"},"(cm|mm)")," doesn't have to be matched for the whole subject to be matched -\nboth ",Object(a.b)("inlineCode",{parentName:"p"},"14")," and ",Object(a.b)("inlineCode",{parentName:"p"},"14cm")," are subjects that match the pattern."),Object(a.b)("p",null,"Optional groups allow you to deal with potentially unmatched groups with elegance. If the group ",Object(a.b)("strong",{parentName:"p"},"is matched"),", each of the methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"text()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"orReturn()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"orElse()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"orThrow()"))),Object(a.b)("p",null,"work exactly the same."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<schema>http://)?\\w+\\.\\w+')->match('http://google.com')->first(function (Match $match) {\n    $match->group('schema')->text();                  // 'http://'\n    $match->group('schema')->orThrow();               // 'http://'\n    $match->group('schema')->orReturn('other');       // 'http://'\n    $match->group('schema')->orElse(function() {      // 'http://'\n        return '';\n    });  \n});\n")),Object(a.b)("p",null,"The difference is - how they work when then group is not matched:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<schema>https?://)?\\w+\\.\\w+')->match('google.com')->first(function (Match $match) {\n    $match->group('schema')->text();                  // `GroupNotMatchedException`\n    $match->group('schema')->orThrow();               // `GroupNotMatchedException` by default\n    $match->group('schema')->orReturn('other');       // 'other'\n    $match->group('schema')->orElse(function() {      // whatever is returned, in this case: ''\n        return '';\n    });   \n});\n")),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"group()->orThrow()")," works exactly the same as ",Object(a.b)("inlineCode",{parentName:"p"},"forFirst()->orThrow()"),", which means it accepts user defined exception\nto instantiate:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"class MyException extends Exception {}\n\npattern('(?<schema>https?://)?\\w+\\.\\w+')->match('google.com')->first(function (Match $match) {\n    $match->group('schema')->orThrow(MyException::class);  // `MyException`\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Method ",Object(a.b)("inlineCode",{parentName:"p"},"group()->orThrow()")," throws ",Object(a.b)("inlineCode",{parentName:"p"},"GroupNotMatchedException")," by default, so - when called without user defined exception -\nit's actually identical to ",Object(a.b)("inlineCode",{parentName:"p"},"group()->text()"),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Method ",Object(a.b)("inlineCode",{parentName:"p"},"group()->orElse(callable)")," callback receives ",Object(a.b)("inlineCode",{parentName:"p"},"NotMatched"),", just like ",Object(a.b)("inlineCode",{parentName:"p"},"forFirst()->orElse()"),".")),Object(a.b)("h3",{id:"index-name-and-identifier"},"Index, name and identifier"),Object(a.b)("p",null,"Groups can be referred to either by index or by name, if the group in a pattern is named. What was the group referred\nwith is called an identifier. If group was referred by index, then the index is the identifier."),Object(a.b)("p",null,"T-Regx has 3 separate methods for each of the group reference method:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"index()")," - returns the ordinal number of a group"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name()")," - returns the name of a group, or ",Object(a.b)("inlineCode",{parentName:"li"},"null")," if the group is not named"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"usedIdentifier()")," - returns either ",Object(a.b)("inlineCode",{parentName:"li"},"index()")," or ",Object(a.b)("inlineCode",{parentName:"li"},"name()"),", depending on what was the group referred with")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<schema>https?://)?\\w+\\.\\w+')->match($subject)->first(function (Match $match) {\n    $match->group(1)->index();                  //  1\n    $match->group('schema')->index();           //  1\n\n    $match->group(1)->name();                   // 'schema'\n    $match->group('schema')->name();            // 'schema'\n\n    $match->group(1)->usedIdentifier();         //  1\n    $match->group('schema')->usedIdentifier();  // 'schema'\n});\n")),Object(a.b)("h2",{id:"group-is-matched"},"Group is matched"),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"matched(int|string)")," allows you to verify whether a given group was matched by the subject:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$subject = 'Links: google.com and http://facebook.com';\n\npattern('(https?://)?\\w+\\.\\w+')->match($subject)->forEach(function (Match $match) {\n    // first iteration\n    $match->text();       // 'google.com'\n    $match->matched(1);   // false, `google.com` doesn't have a schema \n    $match->group(1);     // GroupNotMatchedException\n    \n    // second iteration\n    $match->text();       // 'http://facebook.com'    \n    $match->matched(1);   // true, `http://facebook.com` does have a schema \n    $match->group(1);     // 'http://'    \n});\n")),Object(a.b)("p",null,"It'll work just as well with named groups:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<schema>https?://)?\\w+\\.\\w+')->match($subject)->first(function (Match $match) {\n    $match->text();              // 'google.com'  \n    $match->matched('schema');   // false, `google.com` doesn't have a schema \n    $match->group('schema');     // GroupNotMatchedException\n});\n")),Object(a.b)("p",null,"Although method ",Object(a.b)("inlineCode",{parentName:"p"},"$match->matched(int|string)")," is the preferred way - same effect can be achieved with\nusing ",Object(a.b)("inlineCode",{parentName:"p"},"$match->group(int|string)->matched()"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<schema>https?://)?\\w+\\.\\w+')->match($subject)->first(function (Match $match) {\n    $match->group('schema')->matched();   // false, `google.com` doesn't have a schema\n});\n")),Object(a.b)("h4",{id:"invalid-groups-and-arguments"},"Invalid groups and arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"matched()")," will throw ",Object(a.b)("inlineCode",{parentName:"li"},"NonexistentGroupException"),", when used with a non-existent group ",Object(a.b)("em",{parentName:"li"},"(i.e. ",Object(a.b)("inlineCode",{parentName:"em"},"asdf"),")"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"matched()")," will throw ",Object(a.b)("inlineCode",{parentName:"li"},"\\InvalidArgumentException"),", when used with an invalid group ",Object(a.b)("em",{parentName:"li"},"(i.e. ",Object(a.b)("inlineCode",{parentName:"em"},"2group"),", ",Object(a.b)("inlineCode",{parentName:"em"},"-1")," or any type other than ",Object(a.b)("inlineCode",{parentName:"em"},"string")," or ",Object(a.b)("inlineCode",{parentName:"em"},"int"),")"),".")),Object(a.b)("h2",{id:"group-exists"},"Group exists"),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"hasGroup(int|string)")," allows you to verify whether the group was used in a pattern:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<value>\\d+)(?<unit>cm|mm)?')->match('14')->first(function (Match $match) {\n    $match->hasGroup('value');  // true\n    $match->hasGroup('unit');   // true, group exists in pattern\n    $match->hasGroup('other');  // false, group doesn't exist in pattern\n    \n    $match->matched('value');  // true\n    $match->matched('unit');   // false, group exists, but was not matched in pattern\n    $match->matched('other');  // NonexistentGroupException\n});\n")),Object(a.b)("p",null,"It'll work just the same with regular (not named) groups:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<value>\\d+)(?<unit>cm|mm)')->match('')->first(function (Match $match) {\n    $match->hasGroup(0);  // true\n    $match->hasGroup(1);  // true\n    $match->hasGroup(2);  // false\n});\n")),Object(a.b)("h4",{id:"invalid-groups-and-arguments-1"},"Invalid groups and arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hasGroup()")," will throw ",Object(a.b)("inlineCode",{parentName:"li"},"\\InvalidArgumentException"),", when used with an invalid group ",Object(a.b)("em",{parentName:"li"},"(i.e. ",Object(a.b)("inlineCode",{parentName:"em"},"2group"),", ",Object(a.b)("inlineCode",{parentName:"em"},"-1")," or any type other than ",Object(a.b)("inlineCode",{parentName:"em"},"string")," or ",Object(a.b)("inlineCode",{parentName:"em"},"int"),")"),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Usages of ",Object(a.b)("inlineCode",{parentName:"p"},"hasGroup()")," are rather infrequent, because rarely patterns are dynamic - they're constant much more often; hence the developer doesn't have to check whether the group exists. The pattern is constant - the collection of groups is also constant.")),Object(a.b)("h2",{id:"composite-groups"},"Composite groups"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$p = '(?<value>\\d+)(?<unit>cm|mm)';\n$s = '192mm and 168cm or 18mm and 12cm';\n\npattern($p)->match($s)->forEach(function (Match $match) { \n    $match->groups()->texts();       // ['168', 'cm']\n    $match->namedGroups()->texts();  // ['value' => '168', 'unit' => 'cm']\n});\n")),Object(a.b)("h3",{id:"group-names"},"Group names"),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"groupNames()")," returns a simple ",Object(a.b)("inlineCode",{parentName:"p"},"string[]")," with names of the capturing groups in order:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<value>\\d+)(?<unit>cm|mm)')->match('14cm')->first(function (Match $match) {\n    $match->groupNames();    // ['value', 'unit']\n});\n")),Object(a.b)("p",null,"If there are no named groups, it simply returns an empty array:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(\\d+)(cm|mm)')->match('14cm')->first(function (Match $match) {\n    $match->groupNames();    // []\n});\n")),Object(a.b)("h3",{id:"groups-count"},"Groups count"),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"groupsCount()")," returns a number of the capturing groups (without duplicates of named and regular groups)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"pattern('(?<value>\\d+)(?<unit>cm|mm)')->match('14cm')->first(function (Match $match) {\n    $match->groupsCount();    // 2\n});\n")),Object(a.b)("h2",{id:"other-occurrences"},"Other occurrences"),Object(a.b)("p",null,"Method ",Object(a.b)("inlineCode",{parentName:"p"},"group()->all()")," allows you to get the group from all other matches:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = '(?<value>\\d+)(?<unit>cm|mm)';\n$subject = '192mm and 168cm or 18mm and 12cm';\n\npattern($pattern)->match($subject)->first(function (Match $match) {\n    $match->group('value')->all();   // ['192', '168', '18', '12']\n    $match->group('unit')->all();    // ['mm', 'cm', 'mm', 'cm']\n});\n")),Object(a.b)("p",null,"If the group is not matched in other occurrences, its value in ",Object(a.b)("inlineCode",{parentName:"p"},"all()")," result array will be ",Object(a.b)("inlineCode",{parentName:"p"},"null"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$pattern = '(?<value>\\d+)(?<unit>cm|mm)?';\n$subject = '192mm and 168 or 18mm and 12';\n\npattern($pattern)->match($subject)->first(function (Match $match) {\n    $match->group('value')->all();   // ['192', '168', '18', '12']\n    $match->group('unit')->all();    // ['mm', null, 'mm', null]\n});\n")),Object(a.b)("h2",{id:"groups-in-depth"},"Groups In-Depth"),Object(a.b)("h3",{id:"invalid-group-identifiers"},"Invalid group identifiers"),Object(a.b)("p",null,"In plain, old, vanilla PHP there's no difference between:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"an invalid group (name ",Object(a.b)("inlineCode",{parentName:"li"},"2group")," or index ",Object(a.b)("inlineCode",{parentName:"li"},"-1"),")"),Object(a.b)("li",{parentName:"ul"},"valid, but non-existent group"),Object(a.b)("li",{parentName:"ul"},"existent, but not matched group"),Object(a.b)("li",{parentName:"ul"},"matched group, but value is ",Object(a.b)("inlineCode",{parentName:"li"},"''")," (empty string)")),Object(a.b)("p",null,"The two first cases always return ",Object(a.b)("inlineCode",{parentName:"p"},"null"),", the third one returns either ",Object(a.b)("inlineCode",{parentName:"p"},"''")," or ",Object(a.b)("inlineCode",{parentName:"p"},"null")," (depending on the ",Object(a.b)("strong",{parentName:"p"},"order of groups!"),").\nIf you used ",Object(a.b)("inlineCode",{parentName:"p"},"PREG_OFFSET_CAPTURE"),", it'll return ",Object(a.b)("inlineCode",{parentName:"p"},"['', -1]")," instead. And of course the last one returns ",Object(a.b)("inlineCode",{parentName:"p"},"''"),", which might the same\nas the third."),Object(a.b)("p",null,"Since PHP 7.2, there's ",Object(a.b)("inlineCode",{parentName:"p"},"PREG_UNMATCHED_AS_NULL")," - it's a little better, it allows to distinguish unmatched from matched empty string,\nbut to distinguish invalid and non-existent groups from unmatched - you have to use ",Object(a.b)("inlineCode",{parentName:"p"},"array_key_exists()"),"."),Object(a.b)("p",null,"For ",Object(a.b)("inlineCode",{parentName:"p"},"preg_match()"),"/",Object(a.b)("inlineCode",{parentName:"p"},"preg_match_all()")," we can use ",Object(a.b)("inlineCode",{parentName:"p"},"PREG_UNMATCHED_AS_NULL"),", for ",Object(a.b)("inlineCode",{parentName:"p"},"preg_replace_callback()")," we have... nothing. There's no way to verify it."),Object(a.b)("hr",null),Object(a.b)("p",null,"And T-Regx ",Object(a.b)("strong",{parentName:"p"},"hates")," it. We ",Object(a.b)("strong",{parentName:"p"},"hate")," it."),Object(a.b)("hr",null),Object(a.b)("p",null,"That's why in T-Regx, ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details has 3 separate methods to deal with each of these cases separately. "),Object(a.b)("p",null,"Of course, the interface of ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," is the same for matching, replacing and any other operation,\nso validation of groups in T-Regx works completely alike for ",Object(a.b)("inlineCode",{parentName:"p"},"pattern()->match()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," and any other\nmethod. It's bulletproof."),Object(a.b)("p",null,"Here's how they work:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Group"),Object(a.b)("th",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"th"},"hasGroup()")),Object(a.b)("th",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"th"},"matched()")),Object(a.b)("th",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"th"},"text()")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Invalid group"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"InvalidArgument")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"InvalidArgument")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"InvalidArgument"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Non-existent group"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"NonexistentGroup")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"NonexistentGroup"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Not matched group"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"GroupNotMatched"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Matched group"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Value of the group")))),Object(a.b)("p",null,"In short:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can't use an invalid group (",Object(a.b)("inlineCode",{parentName:"li"},"2startingWithDigit")," or negative ",Object(a.b)("inlineCode",{parentName:"li"},"-1"),")"),Object(a.b)("li",{parentName:"ul"},"You can't use a non-existent method (except with ",Object(a.b)("inlineCode",{parentName:"li"},"hasGroup()"),")"),Object(a.b)("li",{parentName:"ul"},"You can't use a non-matched group (except with ",Object(a.b)("inlineCode",{parentName:"li"},"hasGroup()")," and with ",Object(a.b)("inlineCode",{parentName:"li"},"matched()"),")")),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"InvalidArgument")," is ",Object(a.b)("inlineCode",{parentName:"li"},"\\InvalidArgumentException")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"NonexistentGroup")," is ",Object(a.b)("inlineCode",{parentName:"li"},"NonexistentGroupException")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GroupNotMatched")," is ",Object(a.b)("inlineCode",{parentName:"li"},"GroupNotMatchedException")))))}l.isMDXComponent=!0}}]);