(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(249)},119:function(e,t,a){},122:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},144:function(e,t){},146:function(e,t){},180:function(e,t){},181:function(e,t){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(111),l=a.n(s);a(119),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(2),i=a(3),o=a(5),m=a(4),u=a(6),d=a(18),p=a(1),f=a.n(p),h=a(9);function b(e){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/links/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/links",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/links/".concat(t,"/viewPage"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(122);var N=a(11),j=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"link-row",className:"row no-gutters"},r.a.createElement("div",{id:"score",className:"col-1"},this._renderScore()),r.a.createElement("div",{id:"link-body",className:"col-11"},this._renderPostedBy(),r.a.createElement("h5",{id:"item-title"},r.a.createElement(N.b,{style:{color:"white",textDecoration:"none"},to:"/link/".concat(e.id)},e.title)),r.a.createElement("a",{target:"_blank",href:e.url},r.a.createElement("small",null,e.url.length>40?"".concat(e.url.slice(0,40),"..."):e.url)),r.a.createElement("br",null),this._renderCommentsCount())))}},{key:"_renderScore",value:function(){return void 0!==this.props.item.score?r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-lg fa-chevron-up"}),r.a.createElement("br",null),this.props.item.score,r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-lg fa-chevron-down"})):r.a.createElement("div",null)}},{key:"_renderPostedBy",value:function(){return void 0!==this.props.item.username?r.a.createElement("small",null,"Posted by u/",this.props.item.username," ",this.renderTimeSinceDate(this.props.item.date)+" ago"):r.a.createElement("div",null)}},{key:"_renderCommentsCount",value:function(){return void 0!==this.props.item.commentCount?r.a.createElement(N.b,{style:{color:"white",fontSize:13},to:"/link/".concat(this.props.item.id)},r.a.createElement("i",{className:"fas fa-comment-alt"}),r.a.createElement("span",{style:{marginRight:5}}),this.props.item.commentCount," comments"):r.a.createElement("div",null)}},{key:"renderTimeSinceDate",value:function(e){var t=Date.parse(e),a=((new Date).getTime()-t)/1e3,n=Math.ceil(a),r=Math.ceil(n/60),s=Math.ceil(r/60),l=Math.ceil(s/24);return n<60?"".concat(n," seconds"):r<60?"".concat(r," minutes"):s<24?"".concat(s," hours"):"".concat(l," days")}}]),t}(n.Component),O=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.items.map(function(e){return r.a.createElement("div",{className:"p-1",key:e.id},r.a.createElement(j,{item:e,key:e.id}))}))}}]),t}(n.Component),w=(a(131),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"pro",className:" no-gutters m-2"},r.a.createElement("div",{id:"test",className:"progress m-3"},r.a.createElement("div",{className:"bg-secondary progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":99,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}})),r.a.createElement("div",{id:"test",className:"progress m-3"},r.a.createElement("div",{className:"bg-secondary progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":99,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}})),r.a.createElement("div",{id:"test",className:"progress m-3"},r.a.createElement("div",{className:"bg-secondary progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":99,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}}))))}}]),t}(n.Component)),x=(a(132),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"_onSearch",value:function(e){this.props.query(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group p-1"},r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{id:"searchButton",className:"btn btn-outline-primary",type:"submit"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement("input",{onKeyUp:function(t){return e._onSearch(t.currentTarget.value)},id:"search-input",type:"text",className:"form-control pl-5",placeholder:"Explore"})))}}]),t}(n.Component)),_=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("div",{className:"border m-1 p-2"},r.a.createElement("div",{className:"div p-2 pb-4"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-users"})," r/cct"),r.a.createElement("span",{id:"users",className:"float-right mr-2"},"100 users")),r.a.createElement("div",{className:"div p-1"},r.a.createElement(N.b,{to:"/link_editor"},r.a.createElement("button",{className:"btn btn-sm btn-outline-primary p-1 w-100"},"Create Link"))))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={links:null,query:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._getLinksData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.links){var t=this.state.links.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.query.toLowerCase())});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5"},r.a.createElement("div",null,r.a.createElement(x,{query:function(t){return e.setState({query:t})}})),r.a.createElement("div",null,r.a.createElement(O,{items:t}))),r.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3  d-none d-md-block"},r.a.createElement(_,null))))}return r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5"},this._renderLoading())}},{key:"_getLinksData",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n,r=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.links){e.next=9;break}return e.next=3,E();case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.links.map(function(e){return{id:e.id,title:e.title,url:e.url,commentCount:e.comments.length,date:e.createdAt.slice(0,10),username:e.user.username,userId:e.user.id,score:e.votes.length}}),setTimeout(function(){r.setState({links:n})},200);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_renderLoading",value:function(){for(var e=[],t=0;t<6;t++)e.push(r.a.createElement(w,{key:t}));return e}}]),t}(n.Component),S=(a(133),a(134),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"_renderAuthUser",value:function(){return window.redditAuthUser?window.redditAuthUser.username:"Alien"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("small",null,"Comment as ",r.a.createElement(N.b,{to:"/user/".concat(this.props.userId)},this._renderAuthUser())),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"input-group"},r.a.createElement("textarea",{id:"comment-input",className:"form-control-lg","aria-label":"With textarea"})),r.a.createElement("button",{className:"btn btn-sm btn-outline-primary mt-2"},"Comment")))}}]),t}(n.Component)),F=(a(135),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"comment-row",className:"row no-gutters mt-1 mb-1"},r.a.createElement("div",{id:"score",className:"col-1"},this._renderVote()),r.a.createElement("div",{id:"link-body",className:"col-11"},this._renderPostedBy(),r.a.createElement("p",null,e.content))))}},{key:"_renderVote",value:function(){return void 0!==this.props.username?r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-chevron-up"}),r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-chevron-down"})):r.a.createElement("div",null)}},{key:"_renderPostedBy",value:function(){var e=this.props;return void 0!==e.username?r.a.createElement("small",null,e.username," ",e.date):r.a.createElement("div",null)}}]),t}(n.Component)),T=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"link-row2",className:"row no-gutters"},r.a.createElement("div",{id:"score",className:"col-1"},r.a.createElement("i",{className:"fas fa-lg fa-chevron-up"}),r.a.createElement("br",null),e.votes.length,r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-lg fa-chevron-down"})),r.a.createElement("div",{id:"link-body",className:"col-11"},r.a.createElement("small",null,"Posted by /u/",e.user.username," ",e.createdAt.slice(0,10)),r.a.createElement("h5",{id:"item-title"},this.props.item.title),r.a.createElement("a",{href:this.props.item.url},r.a.createElement("small",null,this.props.item.url.length>40?"".concat(this.props.item.url.slice(0,40),"..."):this.props.item.url)),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-comment-alt"}),r.a.createElement("span",{style:{marginRight:5}}),e.comments.length," comments"),r.a.createElement("div",{className:"pt-2"},r.a.createElement(S,{username:e.user.username,userId:e.user.id}),r.a.createElement("div",{className:"pt-3 pb-2"},"Comments:"),e.comments.map(function(e,t){return r.a.createElement(F,{id:e.id,content:e.content,date:e.createdAt.slice(0,10),username:e.user.username,userId:e.user.userId,onUpvote:function(){},onDownvote:function(){},key:t})})))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={item:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._getLinkData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.item?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6"},r.a.createElement(T,{item:this.state.item}))):r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6"},r.a.createElement(w,null))}},{key:"_getLinkData",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.match.params.link_id);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,setTimeout(function(){n.setState({item:a})},200);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),L=Object(d.e)(function(e){return r.a.createElement(U,e)}),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={item:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(this.props.match.params.link_id);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({item:a}),console.log(this.state.item);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item;return e?r.a.createElement(r.a.Fragment,null,e.title):r.a.createElement("div",null,"Loading")}}]),t}(n.Component),I=Object(d.e)(function(e){return r.a.createElement(D,e)}),P=(a(136),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6"},r.a.createElement("h6",null,"Create a link"),r.a.createElement("hr",{style:{background:"rgb(75, 71, 71)"}}),r.a.createElement("div",{id:"types",className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"w-100 btn btn-sm btn-outline-secondary expand"},r.a.createElement("i",{className:"fas fa-link"})," Link")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{disabled:!0,className:"w-100 btn btn-sm btn-outline-secondary expand"},r.a.createElement("i",{className:"fab fa-stack-exchange"})," Post")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{disabled:!0,className:"w-100 btn btn-sm btn-outline-secondary expand"},r.a.createElement("i",{className:"fas fa-image"})," Picture"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"border dark",style:{paddingLeft:10,paddingRight:10,paddingTop:15,paddingBottom:45}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"title","aria-describedby":"title",placeholder:"Title",autoComplete:"off"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control dark",id:"url",placeholder:"Url",autoComplete:"off"})),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-primary float-right"},"Create")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"border",style:{height:"3rem",background:"#2B2B2D"}}))))))}}]),t}(n.Component)),V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))}}]),t}(n.Component),A=(a(137),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-1 bg-dark p-2 border"},r.a.createElement("img",{className:"w-50 rounded image-border",src:this.props.profileImage,alt:""}),r.a.createElement("div",{className:"pt-2"},r.a.createElement("h5",null,"".concat(e.firstName," ").concat(e.lastName)),r.a.createElement("h6",null,"u/",e.username),r.a.createElement("p",null,e.bio)),r.a.createElement(N.b,{to:"/link_editor"},r.a.createElement("button",{className:"btn btn-sm btn-outline-primary w-100"},"Create Link"))))}}]),t}(n.Component));function q(e){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function K(e,t){return M.apply(this,arguments)}function M(){return(M=Object(h.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(e){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/user",{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var J=a(251),R="__token",W=window,z=function(){return W[R]?W[R]:null},$=Object(J.a)(document,"authTokenChange"),Q=function(e){$.subscribe({next:function(t){e(t.detail)}})},X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={authToken:z()},Q(function(e){return a.setState({authToken:e})}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement(n.Fragment,null,this.props.cb({authToken:this.state.authToken}))}}]),t}(n.Component);var Y,Z=function(){var e=Object(h.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return W[R]=t,e.next=3,H(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,W.redditAuthUser=n,r=new CustomEvent("authTokenChange",{detail:t}),document.dispatchEvent(r);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:null,links:null,showLinks:!1,showComments:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.links&&this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5"},r.a.createElement("div",null,r.a.createElement("h6",{className:"btn btn-outline-primary p-1 w-100 ",onClick:function(){return e.setState({showLinks:!e.state.showLinks})}},"Show my links"),this._renderLinks()),r.a.createElement("div",null,r.a.createElement("h6",{className:"btn btn-outline-primary p-1 w-100 mt-2",onClick:function(){return e.setState({showComments:!e.state.showComments})}},"Show my comments"),this._renderComments())),r.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 d-none d-md-block"},r.a.createElement(A,{username:this.state.user.username,firstName:this.state.user.firstName,lastName:this.state.user.lastName,profileImage:this.state.user.profileImage.url,bio:";asldkj asd;lfkja sdlfkj alk;fj al;dfj al;kdjf alk;dfj "})))):r.a.createElement("div",{className:"offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5"},this._renderLoading())}},{key:"_getData",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n,r,s,l=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.links){e.next=15;break}return e.next=3,E();case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a.links.map(function(e){return{id:e.id,title:e.title,url:e.url}}),e.next=10,H(z());case 10:return r=e.sent,e.next=13,r.json();case 13:s=e.sent,setTimeout(function(){l.setState({links:n,user:s})},200);case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_renderLoading",value:function(){for(var e=[],t=0;t<6;t++)e.push(r.a.createElement(w,{key:t}));return e}},{key:"_renderLinks",value:function(){return this.state.showLinks?r.a.createElement(O,{items:this.state.links}):r.a.createElement("div",null)}},{key:"_renderComments",value:function(){return this.state.showComments?r.a.createElement(O,{items:this.state.links}):r.a.createElement("div",null)}}]),t}(n.Component),te=Object(d.e)(function(e){return r.a.createElement(ee,e)}),ae=a(21),ne=(a(246),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:{id:-1,firstName:"",lastName:"",username:"",email:"",password:"",profileImage:{id:-1,url:""}},error:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"_updateUser",value:function(e){var t=this.state.user;t[e.target.id]=e.target.value,this.setState({user:t})}},{key:"_handleSignup",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n,r=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.user,e.next=3,q(t);case 3:if(201!==(a=e.sent).status){e.next=8;break}setTimeout(function(){r.props.history.push("/sign_in")},3e3),e.next=12;break;case 8:return e.next=10,a.json();case 10:(n=e.sent).error.detail&&this.setState({error:n.error.detail});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_handleSignin",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.user.email,a=this.state.user.password,e.next=4,K(t,a);case 4:if(201!==(n=e.sent).status){e.next=11;break}return e.next=8,n.json();case 8:r=e.sent.token,Z(r),this.props.history.push("/");case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.isSignIn?this._signin():this._signup()}},{key:"_signin",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"example@example.com"}),this._renderEmailValidation()),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"password",className:"form-control",id:"password",placeholder:"secret"}),this._renderPasswordValidation()),r.a.createElement("button",{id:"login-btn",onClick:function(){return e._handleSignin()},type:"button",className:"btn btn-sm btn-primary"},"Launch"))}},{key:"_signup",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("div",{className:"small alert alert-sm"},this.state.error):r.a.createElement("div",null),r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"text",className:"form-control",id:"firstName","aria-describedby":"emailHelp",placeholder:"Alien"}),this._renderFirstNameValidation()),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"text",className:"form-control",id:"lastName","aria-describedby":"emailHelp",placeholder:"Ated"}),this._renderLastNameValidation()),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"text",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Area51"}),this._renderUsernameValidation()),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"example@example.com"}),this._renderEmailValidation()),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onKeyUp:function(t){return e._updateUser(t)},type:"password",className:"form-control",id:"password",placeholder:"secret"}),this._renderPasswordValidation()),r.a.createElement("button",{onClick:function(){return e._handleSignup()},type:"button",className:"btn btn-sm btn-primary",disabled:!!this.state.error},"Start Engine"))}},{key:"_renderFirstNameValidation",value:function(){var e=ae.validate({firstName:this.state.user.firstName},{firstName:ae.string().min(3).max(30).required()},{abortEarly:!1});if(e.error&&this.state.user.firstName.length>0)return r.a.createElement("div",null,e.error.details.map(function(e,t){return r.a.createElement("div",{className:"small alert alert-sm",key:t},e.message)}))}},{key:"_renderLastNameValidation",value:function(){var e=ae.validate({lastName:this.state.user.lastName},{lastName:ae.string().min(3).max(50).required()},{abortEarly:!1});if(e.error&&this.state.user.lastName.length>0)return r.a.createElement("div",null,e.error.details.map(function(e,t){return r.a.createElement("div",{className:"small alert alert-sm",key:t},e.message)}))}},{key:"_renderUsernameValidation",value:function(){var e=ae.validate({username:this.state.user.username},{username:ae.string().min(3).max(30).required()},{abortEarly:!1});if(e.error&&this.state.user.username.length>0)return r.a.createElement("div",null,e.error.details.map(function(e,t){return r.a.createElement("div",{className:"small alert alert-sm",key:t},e.message)}))}},{key:"_renderEmailValidation",value:function(){var e=ae.validate({email:this.state.user.email},{email:ae.string().email().required()},{abortEarly:!1});if(e.error&&this.state.user.email.length>0)return r.a.createElement("div",null,e.error.details.map(function(e,t){return r.a.createElement("div",{className:"small alert alert-sm",key:t},e.message)}))}},{key:"_renderPasswordValidation",value:function(){var e=ae.validate({password:this.state.user.password},{password:ae.string().min(6).required()},{abortEarly:!1});if(e.error&&this.state.user.password.length>0)return r.a.createElement("div",null,e.error.details.map(function(e,t){return r.a.createElement("div",{className:"small alert alert-sm",key:t},e.message)}))}}]),t}(n.Component)),re=Object(d.e)(function(e){return r.a.createElement(ne,Object.assign({isSignIn:!!e.match.path.includes("sign_in")},e))}),se=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 offset-sm-2 col-md-6 offset-md-3 offset-lg-4 col-lg-4"},r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-sign-in-alt mr-2 text-primary"}),"Sign In"),r.a.createElement(re,null)))))}}]),t}(n.Component),le=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 offset-sm-2 col-md-6 offset-md-3 offset-lg-4 col-lg-4 "},r.a.createElement("h4",null,r.a.createElement("i",{className:"fas fa-user-plus mr-2 text-primary"}),"Sign Up"),r.a.createElement(re,null)))))}}]),t}(n.Component),ce=(a(247),a(248),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"dropdown-toggle btn-sm btn btn-outline-primary user-drop",id:"navbarDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("img",{id:"profile-image",src:this.props.profileImage.url,alt:""}),this.props.username),r.a.createElement("div",{className:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdown"},r.a.createElement(N.b,{className:"dropdown-item items",to:"user/".concat(this.props.userId)},r.a.createElement("i",{className:"fas fa-lg fa-user-astronaut m-2 text-primary"}),r.a.createElement("span",{className:"m-2"},"Profile")),r.a.createElement("a",{className:"dropdown-item items",href:"/"},r.a.createElement("i",{className:"fas fa-lg fa-sign-out-alt m-2 text-primary"}),r.a.createElement("span",{className:"m-2"},"Logout"))))))}}]),t}(n.Component)),ie=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/sign_in"},r.a.createElement("button",{className:"btn btn-sm btn-outline-primary m-1 px-4","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Sign in"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/sign_up"},r.a.createElement("button",{className:"btn btn-sm btn-outline-primary m-1 px-4","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Sign up")))))}}]),t}(n.Component),oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={user:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.user||!this.props.token){e.next=8;break}return e.next=3,H(this.props.token);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({user:a});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(N.b,{className:"navbar-brand",to:"/"},r.a.createElement("i",{className:"fab fa-lg fa-reddit-alien m-2 alien"}),"reddit"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(N.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fas fa-rocket m-2 text-primary"}),"Home")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(N.b,{className:"nav-link",to:"/link_editor"},r.a.createElement("i",{className:"fas fa-pencil-alt m-2 text-primary"}),"Create Link"))),this.state.user?r.a.createElement(ce,{username:this.state.user.username,profileImage:this.state.user.profileImage,userId:this.state.user.id}):r.a.createElement(ie,null)))))}}]),t}(n.Component),me=(Y=function(e){return r.a.createElement(oe,{token:e.authToken})},function(){return n.createElement(X,{cb:Y})}),ue=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null),r.a.createElement(d.c,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(d.a,{exact:!0,path:"/",component:C}),r.a.createElement(d.a,{exact:!0,path:"/link/:link_id",component:L}),r.a.createElement(d.a,{exact:!0,path:"/link_editor/:link_id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/link_editor",component:V}),r.a.createElement(d.a,{exact:!0,path:"/user/:user_id",component:te}),r.a.createElement(d.a,{exact:!0,path:"/sign_in",component:se}),r.a.createElement(d.a,{exact:!0,path:"/sign_up",component:le}))))}}]),t}(n.Component);l.a.render(r.a.createElement(N.a,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.c6d4f5fe.chunk.js.map