(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{10:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(19),a=i.n(r),l=(i(25),i(26),i(11)),o=(i(27),i(0));var s=function(e){var t=e.type,i=e.inputStyle,c=e.title,r=e.name,a=Object(n.useState)(r),s=Object(l.a)(a,2),d=s[0];return s[1],"textarea"===t?Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"title",children:c}),Object(o.jsx)("textarea",{style:i,placeholder:d})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"title",children:c}),Object(o.jsx)("input",{style:i,placeholder:d})]})};var d=function(e){return Object(o.jsxs)("form",{children:[Object(o.jsx)(s,{title:"Name",name:"Your Full Name..."}),Object(o.jsx)(s,{title:"Email",name:"Your Email Address..."}),Object(o.jsx)(s,{title:"Phone Number",name:"Your Phone Number..."}),Object(o.jsx)(s,{type:"textarea",title:"Message",name:"Your Message..."}),Object(o.jsx)("button",{type:"submit",children:" submit "})]})};var j={display:"flex",flexDirection:"column",jusifyContent:"initial",marginLeft:"5%",marginRight:"5%"},x={fontSize:"80px",fontFamily:"Noticia Text",color:"#4d4d4d",marginTop:"50px",marginBottom:"10px",textAlign:"initial"},p={width:"100%",marginTop:"20px",marginBottom:"20px"},m=function(e){return Object(o.jsxs)("div",{style:j,children:[Object(o.jsx)("p",{style:x,children:" Contact "}),Object(o.jsx)("hr",{style:p}),Object(o.jsx)(d,{})]})},b=(i(10),i(7));var h=function(e){var t=e.avatarStyle,i=e.imgStyle,n=e.avatarSrc;return Object(o.jsx)("div",{style:t,children:Object(o.jsx)(b.b,{to:"/homepage",children:Object(o.jsx)("img",{alt:"avatar",src:n,style:i})})})},g=i.p+"static/media/harry-avatar.b1ddbe4d.jpeg";i(17);var u=function(e){var t=e.type;if("image"===t){var i=e.iconSrc,n=e.iconStyle,c=e.imgStyle,r=e.children;return Object(o.jsxs)("div",{style:n,children:[Object(o.jsx)("img",{style:c,src:i,alt:"footer-img"}),r]})}if("button"===t){var a=e.buttonStyle,l=e.iconStyle,s=e.title,d=e.redirect;return Object(o.jsx)("div",{style:l,children:Object(o.jsx)(b.b,{to:d,children:Object(o.jsx)("button",{className:"button",style:a,children:s})})})}if("text"===t){var j=e.textStyle,x=e.iconStyle,p=e.title;return Object(o.jsx)("div",{style:x,children:Object(o.jsx)("button",{style:j,disabled:!0,children:p})})}return Object(o.jsx)("div",{children:"Error"})};var y=function(e){var t={height:"130px",width:"130px",borderRadius:"50%",border:"none",marginRight:"20px",color:"white",fontSize:"15px"},i=[{key:0,title:"Coder",redirect:"/resume",bgColor:"#ec3454"},{key:1,title:"Gamer",redirect:"/resume",bgColor:"#64ccd4"},{key:2,title:"Travller",redirect:"/projects",bgColor:"#d2c925"}].map((function(e){return Object(o.jsx)(u,{type:"button",title:e.title,redirect:e.redirect,iconStyle:null,buttonStyle:Object.assign({},t,{backgroundColor:e.bgColor})},e.key)}));return Object(o.jsx)("div",{style:{display:"flex",flexDireciton:"row",justifyContent:"flex-start",marginBottom:"20px"},children:i})};var f=function(e){return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"5%",marginRight:"5%"},children:[Object(o.jsx)(h,{avatarStyle:{margin:"40px 80px 80px 0px"},imgStyle:{borderRadius:"50%",height:"380px",marginTop:"16px"},avatarSrc:g}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"50px"},children:[Object(o.jsx)("p",{style:{fontFamily:"Noticia Text",color:"#4d4d4d",margin:"10px",fontSize:"80px",alignSelf:"flex-start",fontWeight:"bold"},children:" Hello, "}),Object(o.jsx)("p",{style:{fontFamily:"Noticia Text",color:"#4d4d4d",marginTop:"-10px",marginBottom:"20px",fontSize:"46px",alignSelf:"flex-start"},children:" a bit about me: "}),Object(o.jsx)(y,{}),Object(o.jsxs)("p",{style:{maxWidth:"450px",fontSize:"13px"},children:[" ","My name is Yuchen Zhu, you can call me Jack if you'd like. I am a Full Stack Developer recently graduated from the University of Waterloo in Canada,and I will be working in KuaiShou Technology in Beijing starting July."," "]})]})]})};var O=function(e){var t=e.title,i=e.content;return Object(o.jsx)("div",{style:{width:"326px"},children:Object(o.jsxs)("section",{children:[Object(o.jsx)("h3",{style:{textAlign:"initial"},children:t}),Object(o.jsxs)("p",{style:{fontSize:"13px",fontFamily:"Open Sans",textAlign:"initial"},children:[" ",i," "]})]})})};var v={display:"flex",flexDireciton:"row"},S={width:"510px",height:"287px",marginRight:"40px"},w={height:"100px",width:"100px",borderRadius:"50%",border:"none",marginRight:"20px",color:"white",fontSize:"15px",fontFamily:"Noticia Text",fontWeight:"bold",backgroundColor:"#64ccd4"},k={textAlign:"initial"},C={marginTop:"20px",marginBottom:"20px"},T=function(e){var t=e.id,i=e.title,n=e.content,c=e.imgSrc,r="Project | "+t;return Object(o.jsxs)("div",{style:v,children:[Object(o.jsx)("img",{style:S,src:c,alt:"banner-img"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{type:"text",title:r,textStyle:w,iconStyle:k}),Object(o.jsx)("hr",{style:C}),Object(o.jsx)(O,{title:i,content:n}),Object(o.jsx)("div",{children:e.children})]})]})},N=[{id:1,title:"The Chamber Crawler 3000K",imgsrc:i.p+"static/media/cc3k.07f8e08d.png",content:"This is a Text-Based 2D RPG game written in C++. We programmed it in a group of 3 within 2 weeks. Object Oriented Programming concepts were applied."},{id:2,title:"MineSweeper 1.0",imgsrc:i.p+"static/media/minesweep.9c1ef7a7.png",content:"This is a simple mine sweeper written in Swift. Various design patterns were applied."},{id:3,title:"OpenGL Maze",imgsrc:i.p+"static/media/maze.21f49515.png",content:"A Maze game created using the basics of programming real-time 3D graphics using OpenGL."}];var B=function(e){var t={width:"100%",marginTop:"50px",marginBottom:"50px"},i=N.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{id:e.id,title:e.title,content:e.content,imgSrc:e.imgsrc}),Object(o.jsx)("hr",{style:t})]},e.id)}));return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"5%",marginRight:"5%"},children:[Object(o.jsx)("p",{style:{fontSize:"80px",fontFamily:"Noticia Text",color:"#4d4d4d",textAlign:"initial",marginTop:"50px",marginBottom:"10px"},children:" LATEST PROJECTS"}),Object(o.jsx)("hr",{style:t}),i]})},z=i.p+"static/media/skill.9ef33aa6.svg",A=i.p+"static/media/language.60a8db44.svg";var R={margin:"20px"};function F(e){var t=-1,i=e.content.map((function(e){return t+=1,Object(o.jsx)("p",{children:e},t)}));return Object(o.jsxs)("div",{style:M,children:[Object(o.jsx)(u,{type:"image",iconSrc:e.iconSrc,iconStyle:P,imgStyle:J}),Object(o.jsxs)("section",{style:E,children:[Object(o.jsx)("p",{style:W,children:e.title}),Object(o.jsx)("hr",{style:D}),i]})]})}var D={width:"100%",marginTop:"10px",marginBottom:"10px"},E={textAlign:"initial",fontSize:"13px"},W={fontFamily:"Noticia Text",fontSize:"17px",marginTop:"5px",marginBottom:"5px"},M={display:"flex",flexDirection:"column",marginBottom:"30px"},P={textAlign:"initial"},J={width:"45px",height:"45px"},L=function(e){return Object(o.jsxs)("div",{style:R,children:[Object(o.jsx)(F,{title:"Skills",content:["Javascript ES6","HTML/CSS","Node","Python","React"],iconSrc:z}),Object(o.jsx)(F,{title:"Languages",content:["Manderian","English","Japanese"],iconSrc:A})]})};var I={maxWidth:"400px",fontSize:"13px",lineHeight:"1.5em",overflowWrap:"break word",textAlign:"initial",whiteSpace:"pre-line",marginBottom:"10px"},H={fontFamily:"Noticia Text",fontSize:"17px"},G=function(e){var t=e.title,i=e.timePeriod,n=e.content;return Object(o.jsxs)("section",{style:I,children:[Object(o.jsxs)("div",{style:H,children:[Object(o.jsxs)("p",{style:{fontWeight:"bold"},children:[" ",t," "]}),Object(o.jsxs)("p",{children:[" ",i," "]})]}),Object(o.jsxs)("p",{children:[" ",n," "]})]})},U=[{id:0,title:"\u5168\u6808\u5de5\u7a0b\u5e08 - Wish Corporation",time:"2020.1 - 2020.5",content:"\u4e3b\u8981\u9879\u76ee\uff1a\u5546\u6237\u6ce8\u518c\u7ba1\u7406\u7cfb\u7edf \n\n 1. \u524d\u7aef: \n- \u8d1f\u8d23\u6ce8\u518c\u6d41\u7a0b\u7684\u5f00\u53d1\uff0c\u4e0e\u9879\u76ee\u7ecf\u7406\u548cUI\u8bbe\u8ba1\u5e08\u5408\u4f5c\uff0c\u4f7f\u7528ES6\u548cReactJS\u6846\u67b6\u7f16\u5199\u524d\u7aef\u9875\u9762\uff0c\u5b9e\u73b0\u52a8\u6001\u6548\u679c \n- \u8d1f\u8d23\u5546\u6237\u5ba1\u6838\u7cfb\u7edf\u7684\u5f00\u53d1\uff0c\u4f7f\u7528HTML/CSS/Javascript\u548cBackbone\u6846\u67b6\u7f16\u5199\u5ba1\u6838\u5de5\u5177\u9875\u9762 \n- \u6839\u636e\u8bbe\u8ba1\u9700\u6c42\u66f4\u65b0\u548c\u4f18\u5316React\u7ec4\u4ef6\u5e93 \n\n2. \u540e\u7aef: \n- \u7f16\u5199Python\u811a\u672c\uff0c\u4f7f\u7528\u5d4c\u5165\u5f0fMySQL\u67e5\u627e\u5e76\u751f\u6210\u5546\u6237\u6570\u636e\u62a5\u544a \n- \u8d1f\u8d23\u7528\u6237\u6293\u53d6\u76f8\u5173API\u7684\u7f16\u5199\u548c\u4f18\u5316\uff0c\u5b9e\u73b0\u66f4\u5feb\u901f\u7684\u90ae\u4ef6\u7fa4\u53d1 \n- \u4f7f\u7528MongoDB\u548cPython\u811a\u672c\u5bf9\u5546\u6237\u884c\u4e3a\u8fdb\u884c\u76d1\u7ba1 \n"},{id:1,title:"Desire 2 Learn - \u8f6f\u4ef6\u5f00\u53d1\u5b9e\u4e60\u751f",time:"2019.4 - 2019.8",content:"\u4e3b\u8981\u9879\u76ee\uff1aBrightspace\u5e73\u53f0\u6d4b\u8bd5/\u5f00\u53d1\n\n- Brightspace\u662f\u4e00\u6b3e\u57fa\u4e8eAWS\u4e91\u7684\u5b66\u4e60\u7ba1\u7406\u7cfb\u7edf\uff0c\u91c7\u7528\u4e8b\u4ef6\u5904\u7406\u67b6\u6784\n- \u8d1f\u8d23\u4f7f\u7528NodeJS\u6846\u67b6\u8fdb\u884c\u7f51\u7ad9\u5f00\u53d1\u5e76\u53c2\u52a0\u524d\u7aef\u8bbe\u8ba1\n- \u901a\u8fc7Cloud Watch\u7b49\u5de5\u5177\u5bf9\u7f51\u7ad9\u7684Lambda\u8ba1\u7b97\u670d\u52a1\u8fdb\u884c\u76d1\u7ba1\u548c\u6d4b\u8bd5\n"},{id:2,title:"Altairix Software - Java\u5f00\u53d1\u5b9e\u4e60\u751f",time:"2018.9 - 2018.12",content:"\u4e3b\u8981\u9879\u76ee\uff1aArrowSmith\u5e73\u53f0\u6d4b\u8bd5/\u5f00\u53d1\n\n- ArrowSmith\u662f\u4e00\u6b3e\u9762\u5411\u5b66\u751f\uff0c\u57fa\u4e8e\u5b89\u5353\u7684\u8fdc\u7a0b\u6559\u5b66App\n- \u53c2\u4e0e\u95ee\u5377\u8c03\u67e5\u7cfb\u7edf\u7684\u8bbe\u8ba1\u5f00\u53d1, \u4f7f\u7528Java\u548cSql\u6279\u91cf\u5bfc\u5165/\u5904\u7406\u6570\u636e\n"}],Y=[{id:0,title:"University of Waterloo - Bachelor of Computer Science",time:"2016.9 - 2021.1",content:"For 4 and half year I have been studied in the University of Waterloo."}];function K(e){var t=e.title,i=e.data.map((function(e){return Object(o.jsx)(G,{title:e.title,timePeriod:e.time,content:e.content},e.id)}));return Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)(u,{type:"text",textStyle:V,iconStyle:X,title:t}),Object(o.jsx)("div",{style:Q,children:i})]})}var Z={marginRight:"40px"},q={width:"100%",marginTop:"30px",marginBottom:"30px"},Q={display:"flex",flexDirection:"column"},V={height:"120px",width:"120px",borderRadius:"50%",border:"none",marginRight:"30px",color:"white",fontSize:"17px",fontFamily:"Noticia Text",fontWeight:"bold",backgroundColor:"#ec3454"},X={marginBottom:"10px"},$=function(e){return Object(o.jsxs)("div",{style:Z,children:[Object(o.jsx)("hr",{style:q}),Object(o.jsx)(K,{title:"Work Experience",data:U}),Object(o.jsx)("hr",{style:q}),Object(o.jsx)(K,{title:"Education",data:Y})]})};var _={display:"flex",flexDirection:"column"},ee={display:"flex"},te={fontSize:"80px",fontFamily:"Noticia Text",color:"#4d4d4d",textAlign:"initial",marginTop:"50px",marginBottom:"10px"},ie=function(e){return Object(o.jsxs)("div",{style:_,children:[Object(o.jsx)("p",{style:te,children:" Resume"}),Object(o.jsxs)("div",{style:ee,children:[Object(o.jsx)($,{}),Object(o.jsx)(L,{})]})]})},ne=function(e){var t=Object(o.jsx)("p",{children:" Fatal Error "});return"homepage"===e.displayContent?t=Object(o.jsx)(f,{}):"resume"===e.displayContent?t=Object(o.jsx)(ie,{}):"project"===e.displayContent?t=Object(o.jsx)(B,{}):"contact"===e.displayContent&&(t=Object(o.jsx)(m,{})),Object(o.jsxs)("div",{className:"component-mainbody",children:[" ",t," "]})};var ce=function(e){return Object(o.jsxs)("div",{className:"component-navbar-nametag",children:[Object(o.jsxs)("div",{className:"name",children:[e.givenName," ",e.familyName]}),Object(o.jsx)("div",{className:"title",children:e.jobTitle})]})};var re=function(e){var t=e.pages,i=e.onSelectionChange,n=t.map((function(t){var n={textDecoration:"none",margin:"10px"};return e.selected===t.name?n.color="#66ccff":n.color="#4d4d4d",Object(o.jsx)(b.b,{className:"link",to:t.link,style:n,onClick:i,children:t.name},t.key)}));return Object(o.jsx)("div",{className:"component-navbar-navigates",children:n})};var ae=function(e){var t=e.navItems,i=Object(n.useState)(""),c=Object(l.a)(i,2),r=c[0],a=c[1];return Object(o.jsxs)("div",{className:"component-navbar",children:[Object(o.jsx)(ce,{familyName:"Zhu",givenName:"Jack",jobTitle:"Full Stack Developer"}),Object(o.jsx)(re,{pages:t,selected:r,onSelectionChange:function(e){a(e.target.innerText)}})]})},le=i.p+"static/media/phone.fc761822.svg",oe=i.p+"static/media/email.ed58def5.svg",se=i.p+"static/media/github.99e8d8bd.svg",de=i.p+"static/media/social.1242a639.svg";i(18);var je=function(e){var t=e.title,i=e.content,n=e.titleStyle,c=e.contentStyle;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{style:n,children:t}),Object(o.jsx)("p",{style:c,children:i})]})};var xe=function(){var e={fontSize:"13px",lineHeight:"1.2em",color:"white",fontWeight:"bold",marginBottom:"-5px",textAlign:"initial"},t={fontSize:"13px",lineHeight:"1.2em",color:"white",textAlign:"initial"},i={display:"flex",flexDirection:"row",margin:"10px"},n={width:"45px",height:"45px",margin:"10px"},c=[{key:0,children:Object(o.jsx)(je,{titleStyle:e,contentStyle:t,title:"Call",content:"CN: 18915974830"}),iconSrc:le},{key:1,children:Object(o.jsx)(je,{titleStyle:e,contentStyle:t,title:"Email",content:"Gmail: jackzyc1997@gmail.com"}),iconSrc:oe},{key:2,children:Object(o.jsx)(je,{titleStyle:e,contentStyle:t,title:"Github",content:"Username: github.com/j97zhu"}),iconSrc:se},{key:3,children:Object(o.jsx)(je,{titleStyle:e,contentStyle:t,title:"Social Media",content:"Wechat: zyc1220594953"}),iconSrc:de}].map((function(e){return Object(o.jsx)(u,{type:"image",iconSrc:e.iconSrc,children:e.children,iconStyle:i,imgStyle:n},e.key)}));return Object(o.jsx)("div",{className:"component-footer",children:c})},pe=i(2);var me=function(){var e=[{key:0,name:"HOME",link:"/homepage"},{key:1,name:"RESUME",link:"/resume"},{key:2,name:"PROJECTS",link:"/projects"},{key:3,name:"CONTACT",link:"/contact"}];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(b.a,{basename:"/portfolio",children:[Object(o.jsx)(pe.b,{render:function(){return Object(o.jsx)(ae,{navItems:e})}}),Object(o.jsxs)(pe.d,{children:[Object(o.jsx)(pe.b,{exact:!0,path:"/personal-page",render:function(){return Object(o.jsx)(pe.a,{to:"/homepage"})}}),Object(o.jsx)(pe.b,{path:"/resume",render:function(){return Object(o.jsx)(ne,{displayContent:"resume"})}}),Object(o.jsx)(pe.b,{path:"/projects",render:function(){return Object(o.jsx)(ne,{displayContent:"project"})}}),Object(o.jsx)(pe.b,{path:"/contact",render:function(){return Object(o.jsx)(ne,{displayContent:"contact"})}}),Object(o.jsx)(pe.b,{render:function(){return Object(o.jsx)(ne,{displayContent:"homepage"})}})]}),Object(o.jsx)(pe.b,{render:function(){return Object(o.jsx)(xe,{})}})]})})},be=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(me,{})}),document.getElementById("root")),be()}},[[34,1,2]]]);
//# sourceMappingURL=main.baa72ef0.chunk.js.map