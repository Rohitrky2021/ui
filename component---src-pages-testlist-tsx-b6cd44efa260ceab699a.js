"use strict";(self.webpackChunkkeploy_ui=self.webpackChunkkeploy_ui||[]).push([[55],{74711:function(e,t,n){var r=n(64836),o=n(75263);t.Z=void 0;var a=o(n(67294)),l=(0,r(n(58786)).default)(a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.Z=l},74670:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(63366),o=n(87462),a=n(67294),l=n(85505),i=n(9236),c=n(32729),p=n(97639),s=n(77869),u=n(85604),m=n(31351);function d(e){return(0,m.Z)("MuiAppBar",e)}(0,n(19508).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=n(85893),h=["className","color","enableColorOnDark","position"],f=function(e,t){return"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")")},b=(0,c.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,s.Z)(n.position))],t["color".concat((0,s.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===n.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===n.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===n.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===n.position&&{position:"static"},"relative"===n.position&&{position:"relative"},!t.vars&&(0,o.Z)({},"default"===n.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},n.color&&"default"!==n.color&&"inherit"!==n.color&&"transparent"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},"inherit"===n.color&&{color:"inherit"},"dark"===t.palette.mode&&!n.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===n.color&&(0,o.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,o.Z)({},"default"===n.color&&{"--AppBar-background":n.enableColorOnDark?t.vars.palette.AppBar.defaultBg:f(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":n.enableColorOnDark?t.vars.palette.text.primary:f(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},n.color&&!n.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":n.enableColorOnDark?t.vars.palette[n.color].main:f(t.vars.palette.AppBar.darkBg,t.vars.palette[n.color].main),"--AppBar-color":n.enableColorOnDark?t.vars.palette[n.color].contrastText:f(t.vars.palette.AppBar.darkColor,t.vars.palette[n.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===n.color?"inherit":"var(--AppBar-color)"},"transparent"===n.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),k=a.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiAppBar"}),a=n.className,c=n.color,u=void 0===c?"primary":c,m=n.enableColorOnDark,f=void 0!==m&&m,k=n.position,v=void 0===k?"fixed":k,E=(0,r.Z)(n,h),C=(0,o.Z)({},n,{color:u,position:v,enableColorOnDark:f}),y=function(e){var t=e.color,n=e.position,r=e.classes,o={root:["root","color".concat((0,s.Z)(t)),"position".concat((0,s.Z)(n))]};return(0,i.Z)(o,d,r)}(C);return(0,g.jsx)(b,(0,o.Z)({square:!0,component:"header",ownerState:C,elevation:4,className:(0,l.Z)(y.root,a,"fixed"===v&&"mui-fixed"),ref:t},E))}))},77674:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var r=n(83706),o=n(75038),a=n(63974),l=n(13141),i=n(23834),c=n(90883),p=n(67294),s=n(42982),u=n(7897),m=n(35013),d=n(2751),g=n(13366),h=n(74670),f=n(94449),b=n(93099),k=n(70302),v=n(15861),E=n(64687),C=n.n(E),y=n(64803),x=n(69299),N=n(43973),w=n(24949),S=n(8467),A=n(42274),Z=n(94388),D=n(85893),B=(0,Z.Z)((0,D.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),P=n(99832),R=n(7375),I=n(9484),W=n(88687),T=n(71082);function G(e){var t,n=e.tc,o=e.setTc,a=e.index,i=p.useState(25),c=i[0],s=i[1],m=p.useState(0),d=m[0],g=m[1],h=p.useState(""),f=h[0],k=h[1],E=null===(t=(0,S.a)(u.km,{variables:{app:e.app,offset:0,limit:1e5},pollInterval:r.g_}).data)||void 0===t?void 0:t.testCase.length,Z=(0,S.a)(u._V,{variables:{app:e.app,offset:0,limit:(d+1)*c+1},pollInterval:r.g_}),D=Z.loading,G=Z.error,L=Z.data,M=Z.refetch,O=(0,A.D)(u.si,{variables:{id:f}})[0];if(D)return p.createElement(I.Z,null);if(G)return p.createElement(W.Z,{msg:G.message});if(null==L||null==L.testCase||0==L.testCase.length)return p.createElement(P.Z,{doc:"https://docs.keploy.io/",message:"No Test Cases Recorded Yet! ",image:R.Z});var _=[{field:"time",headerName:"Updated At",minWidth:200,flex:1,headerClassName:"super-app-theme--header",align:"left",headerAlign:"left"},{field:"id",headerName:"Test ID",minWidth:100,flex:1,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center"},{field:"proto",headerName:"Proto",minWidth:100,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center"},{field:"uri",headerName:"URI",minWidth:200,flex:1,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center"},{field:"statusCode",headerName:"Response Code",minWidth:100,flex:1,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center"},{field:"method",headerName:"Method",minWidth:100,flex:1,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center"},{field:"methods",headerName:" _   ",minWidth:20,flex:1,headerClassName:"super-app-theme--header",align:"center",headerAlign:"center",renderCell:function(t){return p.createElement(b.Z,{color:"error","aria-label":"Delete test-case",component:"span",onClick:function(n){function r(){return(r=(0,v.Z)(C().mark((function n(){return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(t.row.id);case 2:O().then((function(){M(),e.refetch(),k("")})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}n.preventDefault(),function(){r.apply(this,arguments)}()}},p.createElement(B,null))}}],V=(0,l.Py)(L.testCase);return p.createElement(x.Z,{sx:{width:"100%",backgroundColor:"white","& .super-app-theme--header":{backgroundColor:"rgba(25,118,210,0.9)",color:"#ffffff"}}},""==n&&p.createElement(y._,{rows:V,columns:_,pageSize:c,onPageSizeChange:function(e){return s(e)},rowsPerPageOptions:[25,50,100],pagination:!0,rowCount:E,autoHeight:!0,onPageChange:function(e){g(e)},page:d,onCellClick:function(e,t){if("methods"!=e.field){t.defaultMuiPrevented=!0;var n=L.testCase.filter((function(t){return t.id==e.id}));o(n[0].id),(0,T.navigate)("?index="+a+"&tcId="+n[0].id)}else k(e.row.id)},components:{Toolbar:N.N}}),""!=n&&p.createElement(w.Z,{tc:n,close:function(){o(""),(0,T.navigate)("/testlist?index="+a)}}))}function L(e){var t=(0,p.useState)(0),n=t[0],r=t[1],o=e.activeTab===e.index,a={height:(o?n:0)+"px"};return(0,p.useEffect)((function(){window.setTimeout((function(){r(500)}),333)}),[]),p.createElement("div",{className:"panel",role:"tabpanel","aria-expanded":o},p.createElement("button",{className:"panel__label",role:"tab",onClick:function(){e.activateTab(e.index)}},e.label),p.createElement("div",{className:"panel__inner",style:a,"aria-hidden":!o},p.createElement("p",{className:"panel__content"},p.createElement("pre",null,e.content))))}function M(e){var t=(0,p.useState)(0),n=t[0],r=t[1],o=function(e){r(n===e?-1:e)};return p.createElement("div",{className:"accordion",role:"tablist"},e.panels.map((function(e,t){return p.createElement(L,Object.assign({key:t,activeTab:n,index:t},e,{activateTab:o}))})))}var O=[["Go","https://cdn.worldvectorlogo.com/logos/go-logo-1.svg"],["Java","https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"]],_={Go:["Chi","Gin","Echo","WebGo","Gorilla/MUX","MongoDB","DynamoDB","SQL Driver","net/http","gRPC"],Java:["Spring Boot"]},V={Go:{Chi:'r := chi.NewRouter()\nkchi.ChiV5(k,r)\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/kchi")\n\nr := chi.NewRouter()\nport := "8080"\nk := keploy.New(keploy.Config{\n           App: keploy.AppConfig{\n               Name: "my_app",\n               Port: port,\n           },\n           Server: keploy.ServerConfig{\n               URL: "http://localhost:8081/api",\n           },\n         })\nkchi.ChiV5(k,r)\nhttp.ListenAndServe(":" + port, r)',Gin:'r:=gin.New()\nkgin.GinV1(k, r)\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/kgin/v1")\n\nr:=gin.New()\nport := "8080"\nk := keploy.New(keploy.Config{\n  App: keploy.AppConfig{\n      Name: "my_app",\n      Port: port,\n  },\n  Server: keploy.ServerConfig{\n      URL: "http://localhost:8081/api",\n  },\n})\nkgin.GinV1(k, r)\nr.Run(":" + port)',Echo:'e := echo.New()\nkecho.EchoV4(k, e)\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/kecho/v4")\n\ne := echo.New()\nport := "8080"\nk := keploy.New(keploy.Config{\n  App: keploy.AppConfig{\n      Name: "my-app",\n      Port: port,\n  },\n  Server: keploy.ServerConfig{\n      URL: "http://localhost:8081/api",\n  },\n})\nkecho.EchoV4(k, e)\ne.Start(":" + port)',WebGo:'WebGoV4\n\nrouter := webgo.NewRouter(cfg, getRoutes())\nkwebgo.WebGoV4(k, router)\n\nWebGoV6\n\nkwebgo.WebGoV6(k, router)\nrouter.Start()\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/kwebgo/v4")\n\nport := "8080"\nk := keploy.New(keploy.Config{\n  App: keploy.AppConfig{\n      Name: "my-app",\n      Port: port,\n  },\n  Server: keploy.ServerConfig{\n      URL: "http://localhost:8081/api",\n  },\n})\n\nkwebgo.WebGoV4(k\n\n, router)\nrouter.Start()',"Gorilla/MUX":'r := mux.NewRouter()\nkmux.Mux(k, r)\n\nExample =>\n\nimport(\n    "github.com/keploy/go-sdk/integrations/kmux"\n    "net/http"\n)\n\nr := mux.NewRouter()\nport := "8080"\nk := keploy.New(keploy.Config{\n  App: keploy.AppConfig{\n      Name: "my-app",\n      Port: port,\n  },\n  Server: keploy.ServerConfig{\n      URL: "http://localhost:8081/api",\n  },\n})\nkmux.Mux(k, r)\nhttp.ListenAndServe(":"+port, r)',MongoDB:'import("github.com/keploy/go-sdk/integrations/kmongo")\n\ndb  := client.Database("testDB")\ncol := kmongo.NewCollection(db.Collection("Demo-Collection"))\n\nFollowing operations are supported:\n\nFindOne - Err and Decode method of mongo.SingleResult\nFind - Next, TryNext, Err, Close, All and Decode methods of mongo.cursor\nInsertOne\nInsertMany\nUpdateOne\nUpdateMany\nDeleteOne\nDeleteMany\nCountDocuments\nDistinct\nAggregate - Next, TryNext, Err, Close, All and Decode methods of mongo.cursor',DynamoDB:'import("github.com/keploy/go-sdk/integrations/kddb")\n\nclient := kddb.NewDynamoDB(dynamodb.New(sess))\n\n\nFollowing operations are supported:\n\nQueryWithContext\nGetItemWithContext\nPutItemWithContext',"SQL Driver":'import(\n    "github.com/keploy/go-sdk/integrations/ksql"\n    "github.com/lib/pq"\n)\n\nfunc init(){\n    driver := ksql.Driver{Driver: pq.Driver{}}\n    sql.Register("keploy", &driver)\n}\n\n',"net/http":'khttpclient.NewHttpClient(&http.Client{})\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/khttpclient")\n\nfunc(w http.ResponseWriter, r *http.Request){\n    client := khttpclient.NewHttpClient(&http.Client{})\n// ensure to add request context to all outgoing http requests\n    client.SetCtxHttpClient(r.Context())\n    resp, err := client.Get("https://example.com")\n}\n\nNote: ensure to add pass request context to all external \nrequests like http requests, db calls, etc.',gRPC:'conn, err := grpc.Dial(address, grpc.WithInsecure(), kgrpc.WithClientUnaryInterceptor(k))\n\nExample =>\n\nimport("github.com/keploy/go-sdk/integrations/kgrpc")\n\nport := "8080"\nk := keploy.New(keploy.Config{\n  App: keploy.AppConfig{\n      Name: "my-app",\n      Port: port,\n  },\n  Server: keploy.ServerConfig{\n      URL: "http://localhost:8081/api",\n  },\n})\n\nconn, err := grpc.Dial(address, grpc.WithInsecure(), kgrpc.WithClientUnaryInterceptor(k))\n\nNote: Currently streaming is not yet supported.'},Java:{"Spring Boot":'package com.example.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication(scanBasePackages = {"com.example.demo", "io.keploy.servlet"})\npublic class SamplesJavaApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(SamplesJavaApplication.class, args);\n    }\n}'}},q={Go:"https://cdn.worldvectorlogo.com/logos/go-logo-1.svg",Java:"https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"},U={Go:"https://github.com/keploy/go-sdk/issues/new?assignees=&labels=&template=feature_request.md&title=",Java:"https://github.com/keploy/java-sdk/issues/new?assignees=&labels=feature&template=--feature-request.yaml&title=%5Bfeature%5D%3A+"};function z(e){return p.createElement("div",{className:"card-onboard"},p.createElement("img",{src:e.img}),p.createElement("div",{className:"card-body-onboard"},p.createElement("h2",null,e.title)))}var F=function(e){return p.createElement(p.Fragment,null,p.createElement("div",{className:"cards-onboard",onClick:function(){e.method(e.title)}},p.createElement(z,e)))};function j(e){var t=(0,p.useState)(!1),n=t[0],r=t[1];return p.createElement("div",null,p.createElement("input",{value:e.label,checked:n,onChange:function(){var t=e.handleCheckboxChange,o=e.label;r(!n),t(o)},type:"checkbox",className:"chb-onboard chb-3-onboard",id:e.label}),p.createElement("label",{htmlFor:e.label},e.label),p.createElement("hr",null))}var J=function(e){var t=new Set,n=e.arr,r=e.setOptions,o=function(e){t.has(e)?t.delete(e):t.add(e)},a=function(e){return p.createElement(j,{label:e,handleCheckboxChange:o,key:e})};return p.createElement("div",{className:"listCheckbox"},p.createElement("form",{onSubmit:function(e){if(e.preventDefault(),0!==t.size){var n=Array.from(t);r(n)}}},n.map(a),p.createElement("br",null),p.createElement("div",{className:"flex-2-onboard"},p.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setLang("None")}},p.createElement("button",{className:"btn-onboard btn-primary-onboard btn-round-1-onboard",type:"submit"},"Previous")),p.createElement("button",{className:"btn-onboard btn-primary-onboard btn-round-1-onboard",type:"submit"},"Next"))))};function H(e){var t=[];return e.frameworks.forEach((function(e){t.push(e)})),p.createElement("div",null,p.createElement(J,{arr:t,setOptions:e.method,setLang:e.setLang}))}function Q(e){var t=[],n=[];return e.languages.forEach((function(r){n.push(p.createElement(F,{img:r[1],title:r[0],method:e.method})),2===n.length&&(t.push(p.createElement("div",{className:"flex-1-onboard"},n)),n=[])})),1===n.length&&(t.push(p.createElement("div",{className:"flex-1-onboard"},n)),n=[]),p.createElement("div",null,t)}function K(){var e=(0,p.useState)("None"),t=e[0],n=e[1],r=(0,p.useState)([]),o=r[0],a=r[1];if("None"===t)return p.createElement("div",null,p.createElement("div",null,p.createElement("h1",null,"QuickStart"),p.createElement("br",null),p.createElement("h3",null,"Follow a QuickStart in language of your choice "),p.createElement("br",null),p.createElement(Q,{method:n,languages:O})),p.createElement("br",null),p.createElement("br",null),p.createElement(P.Z,{doc:"https://docs.keploy.io/",message:"Please add some apps by integrating SDK and running application in Capture mode! ",image:"None"}));if(0===o.length){var l=_[t];return p.createElement("div",{className:"framework"},p.createElement("br",null),p.createElement("div",{className:"flex-onboard-1"},p.createElement("h1",null,"Select frameworks for ",t),p.createElement("img",{className:"heading",src:q[t],alt:t})),p.createElement(H,{method:a,frameworks:l,setLang:n}),p.createElement("div",{className:"link-github"},p.createElement("a",{href:U[t]},"Create Issue for New Dependency on Github !")),p.createElement("br",null),p.createElement("br",null))}var i=[];return o.forEach((function(e){i.push({label:e,content:V[t][e]})})),p.createElement("div",null,p.createElement("br",null),p.createElement(M,{panels:i}),p.createElement("br",null),p.createElement("form",{onSubmit:function(e){e.preventDefault(),a([])}},p.createElement("button",{className:"btn-onboard btn-primary-onboard btn-round-1-onboard",type:"submit"},"Previous")))}var X=function(){return p.createElement("div",{className:"App body-onboard"},p.createElement("header",{className:"App-header"},p.createElement(K,null)))},$=n(9561),Y=n(82397),ee=n(74711),te=n(46453),ne=(0,k.Z)((function(){return{root:{flexGrow:1,display:"flex"},tabs:{minWidth:"100%",borderRight:"1px solid #00000",marginTop:10},url:{margin:2,wordBreak:"break-all"}}})),re=function(e){var t=e.value,n=e.onChange,r=e.classes,o=e.apps,a=e.onSelectTab;return p.createElement(m.Z,{orientation:"vertical",variant:"scrollable",value:t,onChange:n,"aria-label":"Vertical tabs endpoints",className:r.tabs},o.map((function(e,t){return p.createElement($.o$,Object.assign({key:e.id,onClick:function(){a(t)},label:p.createElement(p.Fragment,null,p.createElement(T.Link,{to:""+e.id,style:{textDecoration:"none"}},p.createElement(d.ZP,{container:!0},p.createElement(g.Z,{className:r.url},e.id))))},(0,$.Pf)(t)))})))};function oe(){var e=ne(),t=(0,Y.getQueryParams)(),n=t.index?t.index.toString():"0",o=t.tcId?t.tcId.toString():"",a=p.useState(Number(n)?Number(n):0),i=a[0],m=a[1],k=p.useState(o),v=k[0],E=k[1],C=p.useState(!0),y=C[0],x=C[1],N=(0,S.a)(u.WC,{pollInterval:r.g_}),w=N.loading,A=N.error,Z=N.data,D=N.refetch;if(w)return p.createElement(I.Z,null);if(A)return p.createElement(W.Z,{msg:A.message});if(null==Z||null==(null==Z?void 0:Z.apps)||0==(null==Z?void 0:Z.apps.length))return p.createElement(X,null);return p.createElement(p.Fragment,null,p.createElement(c.Z,{title:"Test Cases List"}),p.createElement(h.Z,{position:"relative",sx:{mb:1},style:l.ZE},p.createElement(f.Z,{sx:{height:"10vh",alignContent:"center"}},p.createElement(g.Z,{variant:"h4",color:"inherit",component:"div"},"Test Cases"))),p.createElement(d.ZP,{container:!0},p.createElement(d.ZP,{item:!0,xs:2},p.createElement(d.ZP,{item:!0,direction:"column",sx:{marginLeft:"20px"}},p.createElement(b.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){x((function(e){return!e}))},sx:{marginRight:"36px"}},y?p.createElement(ee.Z,null):p.createElement(te.Z,{sx:{color:"rgba(25,118,210)",width:25,height:25}})),y&&p.createElement(re,{value:i,onChange:function(e,t){m(t)},apps:(0,s.Z)(Z.apps),classes:e,onSelectTab:function(e){E(""),(0,T.navigate)("?index="+e)}}))),p.createElement(d.ZP,{item:!0,xs:y?10:12},(0,s.Z)(Z.apps).map((function(e,t){return p.createElement($.FP,{key:e.id,value:i>(null==Z?void 0:Z.apps.length)-1?0:i,index:t},p.createElement(G,{app:e.id,refetch:D,tc:v,setTc:E,index:Number(n)}))})))))}function ae(){return p.createElement(o.e,{client:r.ID},p.createElement(a.Z,{theme:l.rS},p.createElement(i.Z,null,p.createElement(c.Z,{title:"App Test Cases"}),p.createElement(oe,null))))}}}]);
//# sourceMappingURL=component---src-pages-testlist-tsx-b6cd44efa260ceab699a.js.map