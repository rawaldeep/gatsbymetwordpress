(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t);a(162),a(35);var i=a(9),r=(a(0),a(34)),s=a.n(r),o=a(164),n=a.n(o),l=function(e){return e.test?Object(i.a)("span",null,e.text):Object(i.a)(s.a,{to:e.url},e.text)};t.default=function(e){e.data;var t=e.pathContext,a=t.group,r=t.index,o=t.first,d=t.last,u=t.pageCount,c=r-1==1?"":(r-1).toString(),f=(r+1).toString();return Object(i.a)("div",null,Object(i.a)("h4",null,u," Pages"),a.map(function(e){var t=e.node;return Object(i.a)("div",{key:t.slug,className:"post",style:{marginBottom:50}},t.featured_media&&t.featured_media.localFile.childImageSharp.resolutions&&Object(i.a)("div",null,Object(i.a)(n.a,{resolutions:t.featured_media.localFile.childImageSharp.resolutions})),Object(i.a)(s.a,{to:"/post/"+t.slug},Object(i.a)("h3",null,t.title)),Object(i.a)("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),t.date)}),Object(i.a)("div",{className:"previousLink"},Object(i.a)(l,{test:o,url:"/"+c,text:"Go to Previous Page"})),Object(i.a)("div",{className:"nextLink"},Object(i.a)(l,{test:d,url:"/"+f,text:"Go to Next Page"})))}},162:function(e,t,a){"use strict";a(163);var i=a(5),r=a(76),s=a(19),o=/./.toString,n=function(e){a(15)(RegExp.prototype,"toString",e,!0)};a(20)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?n(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&n(function(){return o.call(this)})},163:function(e,t,a){a(19)&&"g"!=/./g.flags&&a(26).f(RegExp.prototype,"flags",{configurable:!0,get:a(76)})},164:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),o=i(a(36)),n=i(a(78)),l=i(a(43)),d=i(a(0)),u=i(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+n+l+a+r+t+o+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,o=e.onLoad,u=e.onError,c=e.nativeLazyLoadSupported,f=e.loading,p=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),g={};return c&&(g.loading=f),d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},p,{onLoad:o,onError:u,ref:t},g,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,n=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var u=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:u,seenBefore:l,nativeLazyLoadSupported:n},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,o=e.imgStyle,n=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,L=e.itemProp,w=(e.critical,c(this.props).loading);var E=this.state.nativeLazyLoadSupported,O=this.state.imgLoaded||!1===this.state.fadeIn,I=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:O?1:0,transition:I?"opacity "+S+"ms":"none"},n),R="boolean"==typeof y?"lightgray":y,j={transitionDelay:S+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&j,n,f),N={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(g){var C=g;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&j)}),C.base64&&d.default.createElement(b,(0,l.default)({src:C.base64},N)),C.tracedSVG&&d.default.createElement(b,(0,l.default)({src:C.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,nativeLazyLoadSupported:E,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:w},C))}}))}if(h){var k=h,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete T.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},I&&j)}),k.base64&&d.default.createElement(b,(0,l.default)({src:k.base64},N)),k.tracedSVG&&d.default.createElement(b,(0,l.default)({src:k.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(b,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,nativeLazyLoadSupported:E,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:w},k))}}))}return null},t}(d.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var L=y;t.default=L}}]);
//# sourceMappingURL=component---src-templates-posts-js-fed9bca3b200a5d2bda9.js.map