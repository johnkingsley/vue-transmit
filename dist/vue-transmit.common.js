"use strict";function arrayMap(e,t){for(var i=-1,r=null==e?0:e.length,n=Array(r);++i<r;)n[i]=t(e[i],i,e);return n}function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),i=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var r=!0}catch(e){}var n=nativeObjectToString.call(e);return r&&(t?e[symToStringTag$1]=i:delete e[symToStringTag$1]),n}function objectToString(e){return nativeObjectToString$1.call(e)}function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike(e){return null!=e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}function baseToString(e){if("string"==typeof e)return e;if(isArray(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toString(e){return null==e?"":baseToString(e)}function uniqueId(e){var t=++idCounter;return toString(e)+t}function baseHas(e,t){return null!=e&&hasOwnProperty$1.call(e,t)}function isKey(e,t){if(isArray(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function isFunction(e){if(!isObject(e))return!1;var t=baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}function toSource(e){if(null!=e){try{return funcToString$1.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)?reIsNative:reIsHostCtor).test(toSource(e))}function getValue(e,t){return null==e?void 0:e[t]}function getNative(e,t){var i=getValue(e,t);return baseIsNative(i)?i:void 0}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function hashGet(e){var t=this.__data__;if(nativeCreate){var i=t[e];return i===HASH_UNDEFINED?void 0:i}return hasOwnProperty$3.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty$4.call(t,e)}function hashSet(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}function Hash(e){var t=this,i=-1,r=null==e?0:e.length;for(this.clear();++i<r;){var n=e[i];t.set(n[0],n[1])}}function listCacheClear(){this.__data__=[],this.size=0}function eq(e,t){return e===t||e!==e&&t!==t}function assocIndexOf(e,t){for(var i=e.length;i--;)if(eq(e[i][0],t))return i;return-1}function listCacheDelete(e){var t=this.__data__,i=assocIndexOf(t,e);return!(i<0)&&(i==t.length-1?t.pop():splice.call(t,i,1),--this.size,!0)}function listCacheGet(e){var t=this.__data__,i=assocIndexOf(t,e);return i<0?void 0:t[i][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,t){var i=this.__data__,r=assocIndexOf(i,e);return r<0?(++this.size,i.push([e,t])):i[r][1]=t,this}function ListCache(e){var t=this,i=-1,r=null==e?0:e.length;for(this.clear();++i<r;){var n=e[i];t.set(n[0],n[1])}}function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function getMapData(e,t){var i=e.__data__;return isKeyable(t)?i["string"==typeof t?"string":"hash"]:i.map}function mapCacheDelete(e){var t=getMapData(this,e).delete(e);return this.size-=t?1:0,t}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){var i=getMapData(this,e),r=i.size;return i.set(e,t),this.size+=i.size==r?0:1,this}function MapCache(e){var t=this,i=-1,r=null==e?0:e.length;for(this.clear();++i<r;){var n=e[i];t.set(n[0],n[1])}}function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var i=function(){var r=arguments,n=t?t.apply(this,r):r[0],a=i.cache;if(a.has(n))return a.get(n);var o=e.apply(this,r);return i.cache=a.set(n,o)||a,o};return i.cache=new(memoize.Cache||MapCache),i}function memoizeCapped(e){var t=memoize(e,function(e){return i.size===MAX_MEMOIZE_SIZE&&i.clear(),e}),i=t.cache;return t}function castPath(e,t){return isArray(e)?e:isKey(e,t)?[e]:stringToPath(toString(e))}function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}function isIndex(e,t){return!!(t=null==t?MAX_SAFE_INTEGER:t)&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER$1}function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}function hasPath(e,t,i){for(var r=-1,n=(t=castPath(t,e)).length,a=!1;++r<n;){var o=toKey(t[r]);if(!(a=null!=e&&i(e,o)))break;e=e[o]}return a||++r!=n?a:!!(n=null==e?0:e.length)&&isLength(n)&&isIndex(o,n)&&(isArray(e)||isArguments(e))}function has(e,t){return null!=e&&hasPath(e,t,baseHas)}function noop(){}function identity(e){return e}var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),Symbol=root.Symbol,isArray=Array.isArray,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=Symbol?Symbol.toStringTag:void 0,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0,symbolTag="[object Symbol]",INFINITY=1/0,symbolProto=Symbol?Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0,idCounter=0,objectProto$2=Object.prototype,hasOwnProperty$1=objectProto$2.hasOwnProperty,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]",coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$3=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$2=objectProto$3.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$2).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nativeCreate=getNative(Object,"create"),HASH_UNDEFINED="__lodash_hash_undefined__",objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty,objectProto$5=Object.prototype,hasOwnProperty$4=objectProto$5.hasOwnProperty,HASH_UNDEFINED$1="__lodash_hash_undefined__";Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet;var arrayProto=Array.prototype,splice=arrayProto.splice;ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet;var Map=getNative(root,"Map");MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var FUNC_ERROR_TEXT="Expected a function";memoize.Cache=MapCache;var MAX_MEMOIZE_SIZE=500,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){var t=[];return reLeadingDot.test(e)&&t.push(""),e.replace(rePropName,function(e,i,r,n){t.push(r?n.replace(reEscapeChar,"$1"):i||e)}),t}),argsTag="[object Arguments]",objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty,propertyIsEnumerable=objectProto$6.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$5.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/,MAX_SAFE_INTEGER$1=9007199254740991,INFINITY$1=1/0,DropzoneFile=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];Object.assign.apply(Object,[this,this.constructor.defaults()].concat(e))};DropzoneFile.prototype.set=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Object.assign.apply(Object,[this].concat(e)),this},DropzoneFile.prototype.copyNativeFile=function(e){return e instanceof window.File&&(this._nativeFile=e,this.copyOwnAndInheritedProps(e)),this},DropzoneFile.prototype.copyOwnAndInheritedProps=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i=e.map(function(e){var t={};for(var i in e)"function"!=typeof e[i]&&(t[i]=e[i]);return t});return(r=this).set.apply(r,i);var r},DropzoneFile.defaults=function(){return{_nativeFile:void 0,id:this.idFactory(),accepted:void 0,height:void 0,lastModified:void 0,lastModifiedDate:void 0,name:void 0,previewElement:void 0,previewTemplate:void 0,processing:void 0,size:void 0,status:void 0,type:void 0,upload:void 0,webkitRelativePath:void 0,width:void 0,xhr:void 0,dataUrl:void 0,errorMessage:void 0}},DropzoneFile.fromNativeFile=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];return(new(Function.prototype.bind.apply(this,[null].concat(t)))).copyNativeFile(e)},DropzoneFile.idFactory=function(){return uniqueId("vdz-file-")};var props={url:{type:String,required:!0},method:{type:String,default:"post"},withCredentials:{type:Boolean,default:!1},timeout:{type:Number,default:3e4},parallelUploads:{type:Number,default:2},uploadMultiple:{type:Boolean,default:!1},maxFileSize:{type:Number,default:256},paramName:{type:String,default:"file"},createImageThumbnails:{type:Boolean,default:!0},maxThumbnailFileSize:{type:Number,default:10},thumbnailWidth:{type:Number,default:120},thumbnailHeight:{type:Number,default:120},fileSizeBase:{type:Number,default:1e3},maxFiles:{type:Number,default:null},params:{type:Object,default:function(){return new Object}},headers:{type:Object,default:function(){return new Object}},clickable:{type:Boolean,default:!0},ignoreHiddenFiles:{type:Boolean,default:!0},acceptedFileTypes:{type:Array,default:function(){return[]}},autoProcessQueue:{type:Boolean,default:!0},autoQueue:{type:Boolean,default:!0},addRemoveLinks:{type:Boolean,default:!1},capture:{type:String},renameFile:{type:Function,default:identity},dictDefaultMessage:{type:String,default:"Drop files here to upload"},dictFallbackMessage:{type:String,default:"Your browser does not support drag & drop file uploads."},dictFallbackText:{type:String,default:"Please use the fallback form below to upload your files like in the olden days."},dictFileTooBig:{type:String,default:"File is too big ({{ fileSize }}MiB). Max file size: {{ maxFileSize }}MiB."},dictInvalidFileType:{type:String,default:"You can't upload files of this type."},dictResponseError:{type:String,default:"Server responded with {{ statusCode }} code."},dictCancelUpload:{type:String,default:"Cancel upload"},dictCancelUploadConfirmation:{type:String,default:"Are you sure you want to cancel this upload?"},dictRemoveFile:{type:String,default:"Remove file"},dictRemoveFileConfirmation:{type:String},dictMaxFilesExceeded:{type:String,default:"You can not upload any more files."},accept:{type:Function,default:function(e,t){return t()}},resize:{type:Function,default:function(e){var t=e.width,i=e.height,r={srcX:0,srcY:0,srcWidth:t,srcHeight:i},n=t/i;r.optWidth=this.options.thumbnailWidth,r.optHeight=this.options.thumbnailHeight,null==r.optWidth&&null==r.optHeight?(r.optWidth=r.srcWidth,r.optHeight=r.srcHeight):null==r.optWidth?r.optWidth=n*r.optHeight:null==r.optHeight&&(r.optHeight=1/n*r.optWidth);var a=r.optWidth/r.optHeight;return i<r.optHeight||t<r.optWidth?(r.trgHeight=r.srcHeight,r.trgWidth=r.srcWidth):n>a?(r.srcHeight=i,r.srcWidth=r.srcHeight*a):(r.srcWidth=t,r.srcHeight=r.srcWidth/a),r.srcX=(t-r.srcWidth)/2,r.srcY=(i-r.srcHeight)/2,r}}},hbsRegex=/{{\s*?([a-zA-Z]+)\s*?}}/g,hbsReplacer=function(e){return void 0===e&&(e={}),function(t,i){return e[i]?e[i]:t}},Dropzone={ADDED:"added",QUEUED:"queued",ACCEPTED:"queued",UPLOADING:"uploading",PROCESSING:"uploading",CANCELED:"canceled",ERROR:"error",SUCCESS:"success"},VueTransmit={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._t("default"),i("input",{ref:"hiddenFileInput",staticClass:"vdz-hidden-input",class:[e.maxFilesReachedClass],attrs:{type:"file",multiple:e.uploadMultiple,accept:e.filesToAccept},on:{change:e.onFileInputChange}})],2)},staticRenderFns:[],_scopeId:"data-v-2b19a026",components:{},props:props,data:function(){return{processingThumbnail:!1,thumbnailQueue:[],clickableElements:[],listeners:[],files:[]}},computed:{inputEl:function(){return this.$refs.hiddenFileInput},filesToAccept:function(){return this.acceptedFileTypes.join(",")},multiple:function(){return null===this.maxFiles||this.maxFiles>1},acceptedFiles:function(){return this.files.filter(function(e){return e.accepted})},rejectedFiles:function(){return this.files.filter(function(e){return!e.accepted})},addedFiles:function(){return this.getFilesWithStatus(Dropzone.ADDED)},queuedFiles:function(){return this.getFilesWithStatus(Dropzone.QUEUED)},uploadingFiles:function(){return this.getFilesWithStatus(Dropzone.UPLOADING)},activeFiles:function(){return this.getFilesWithStatus(Dropzone.UPLOADING,Dropzone.QUEUED)},maxFilesReached:function(){return null!=this.maxFiles&&this.acceptedFiles.length>=this.maxFiles},maxFilesReachedClass:function(){return this.maxFilesReached?"dz-max-files-reached":null}},watch:{acceptedFiles:function(e){null!=this.maxFiles&&e.length>=this.maxFiles&&this.$emit("max-files-reached",this.files)}},methods:{getFilesWithStatus:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return this.files.filter(function(t){return e.includes(t.status)})},onFileInputChange:function(e){var t=this,i=Array.from(this.$refs.hiddenFileInput.files).map(function(e){return t.addFile(e)});this.$emit("added-files",i)},addFile:function(e){var t=this,i=DropzoneFile.fromNativeFile(e,{upload:{progress:0,total:e.size,bytesSent:0}});return this.files.push(i),i.status=Dropzone.ADDED,this.$emit("added-file",e),this.enqueueThumbnail(e),this.vdzAccept(i,function(e){return e?(i.accepted=!1,t.errorProcessing([i],e)):(i.accepted=!0,t.autoQueue&&t.enqueueFile(i)),i})},removeFile:function(e){if(e.status===Dropzone.UPLOADING&&this.cancelUpload(e),this.files=this.files.filter(function(t){return t.id===e.id}),this.$emit("removed-file",e),0===this.files.length)return this.$emit("reset")},removeAllFiles:function(e){var t=this;void 0===e&&(e=!1),this.files.forEach(function(i){(i.status!==Dropzone.UPLOADING||e)&&t.removeFile(i)})},handleClickUploaderAction:function(e){this.clickable&&this.inputEl.click()},enqueueFile:function(e){if(e.status!==Dropzone.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");e.status=Dropzone.QUEUED,this.autoProcessQueue&&setTimeout(this.processQueue,0)},enqueueThumbnail:function(e){this.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.maxThumbnailFilesize*1024&&(this.thumbnailQueue.push(e),setTimeout(this.processThumbnailQueue,0))},processThumbnailQueue:function(){var e=this;if(!this.processingThumbnail&&0!==this.thumbnailQueue.length)return this.processingThumbnail=!0,this.createThumbnail(this.thumbnailQueue.shift(),function(){return e.processingThumbnail=!1,e.processThumbnailQueue()})},createThumbnail:function(e,t){var i=this;void 0===t&&(t=noop);var r=new FileReader;return r.onload=function(){return"image/svg+xml"===e.type?(i.$emit("thumbnail",e,r.result),t()):i.createThumbnailFromUrl(e,r.result,t)},r.readAsDataURL(e)},createThumbnailFromUrl:function(e,t,i,r){var n=this,a=document.createElement("img");return r&&(a.crossOrigin=r),a.onload=function(){var t=n.resize(e);e.width=a.width,e.height=a.height,t.trgWidth||(t.trgWidth=t.optWidth),t.trgHeight||(t.trgHeight=t.optHeight),canvas=document.createElement("canvas"),ctx=canvas.getContext("2d"),canvas.width=t.trgWidth,canvas.height=t.trgHeight,ctx.drawImage(img,t.srcX||0,t.srcY||0,t.srcWidth,t.srcHeight,t.trgX||0,t.trgY||0,t.trgWidth,t.trgHeight);var r=canvas.toDataURL("image/png");if(n.$emit("thumbnail",e,r),i)return i()},i&&(a.onerror=i),a.src=t},processQueue:function(){var e=this,t=this.uploadingFiles.length;if(!(t>=this.parallelUploads||0===this.queuedFiles.length)){var i=[].concat(this.queuedFiles);if(this.uploadMultiple)return this.processFiles(i.slice(0,this.parallelUploads-t));for(var r=t;r<this.parallelUploads;r++)i.length&&e.processFile(i.shift())}},processFile:function(e){return this.processFiles([e])},processFiles:function(e){var t=this;return e.forEach(function(e){e.processing=!0,e.status=Dropzone.UPLOADING,t.$emit("processing",e)}),this.uploadMultiple&&this.$emit("processing-multiple",e),this.uploadFiles(e)},getFilesWithXhr:function(e){return this.files.filter(function(t){return t.xhr===e})},cancelUpload:function(e){var t=this;if(e.status===Dropzone.UPLOADING){var i=this.getFilesWithXhr(e.xhr);e.xhr.abort(),i.forEach(function(e){e.status=Dropzone.CANCELED,t.$emit("canceled",e)}),this.uploadMultiple&&this.$emit("canceled-multiple",i)}else e.status!==Dropzone.ADDED&&e.status!==Dropzone.QUEUED||(e.status=Dropzone.CANCELED,this.$emit("canceled",e),this.uploadMultiple&&this.$emit("canceled-multiple",[e]));if(this.autoProcessQueue)return this.processQueue()},uploadFile:function(e){return this.uploadFiles([e])},uploadFiles:function(e){var t=this,i=new XMLHttpRequest;i.timeout=this.timeout,e.forEach(function(e){return e.xhr=i}),i.open(this.method,this.url,!0),i.withCredentials=this.withCredentials;var r=function(){return e.map(t.errorProcessing(e,t.dictResponseError.replace(hbsRegex,hbsReplacer({statusCode:i.status})),i))},n=function(i){var r=0;if(i)r=100*i.loaded/i.total,e.forEach(function(e){return Object.assign(e,{upload:{progress:r,total:i.total,bytesSent:i.loaded}})});else{var n=!0;if(r=100,e.forEach(function(e){100===e.upload.progress&&e.upload.bytesSent===e.upload.total||(n=!1),e.upload.progress=r,e.upload.bytesSent=e.upload.total}),n)return}e.forEach(function(e){return t.$emit("upload-progress",e,r,e.upload.bytesSent)})};i.onload=function(a){if(e[0].status!==Dropzone.CANCELED&&4===i.readyState){var o=i.responseText;if(i.getResponseHeader("content-type")&&~i.getResponseHeader("content-type").indexOf("application/json"))try{o=JSON.parse(o)}catch(e){o="Invalid JSON response from server."}return n(),i.status<200||i.status>=300?r():t.finished(e,o,a)}},i.onerror=function(){if(e[0].status!==Dropzone.CANCELED)return r()},(i.upload?i.upload:i).onprogress=n;var a=Object.assign({Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.headers);for(var o in a)a[o]&&i.setRequestHeader(o,a[o]);var s=new FormData;for(key in t.params)s.append(key,t.params[key]);return e.forEach(function(e){return t.$emit("sending",e,i,s)}),this.uploadMultiple&&this.$emit("sending-multiple",e,i,s),e.forEach(function(e,i){return s.append(t.getParamName(i),e._nativeFile,t.renameFile(e.name))}),i.send(s)},updateTotalUploadProgress:function(){var e=this.activeFiles.reduce(function(e,t){return e.totalBytesSent+=t.upload.bytesSent,e.totalBytes+=t.upload.total,e},{totalBytesSent:0,totalBytes:0,totalUploadProgress:100});this.activeFiles.length&&(e.totalUploadProgress=100*e.totalBytesSent/e.totalBytes),this.$emit("total-upload-progress",e.totalUploadProgress,e.totalBytes,e.totalBytesSent)},getParamName:function(e){return this.paramName+(this.uploadMultiple?"["+e+"]":"")},finished:function(e,t,i){var r=this;if(e.forEach(function(e){e.status=Dropzone.SUCCESS,r.$emit("success",e,t,i),r.$emit("complete",e)}),this.uploadMultiple&&(this.$emit("success-multiple",e,t,i),this.$emit("complete-multiple",e)),this.autoProcessQueue)return this.processQueue()},errorProcessing:function(e,t,i){var r=this;if(e.forEach(function(e){e.status=Dropzone.ERROR,r.$emit("error",e,t,i),r.$emit("complete",e)}),this.uploadMultiple&&(this.$emit("error-multiple",e,t,i),this.$emit("complete-multiple",e)),this.autoProcessQueue)return this.processQueue()},vdzAccept:function(e,t){return e.size>1024*this.maxFileSize*1024?t(this.dictFileTooBig.replace(hbsRegex,hbsReplacer({fileSize:Math.round(e.size/1024/10.24)/100,maxFileSize:this.maxFilesize}))):this.isValidFile(e,this.acceptedFileTypes)?null!=this.maxFiles&&this.acceptedFiles.length>=this.maxFiles?(t(this.dictMaxFilesExceeded.replace(hbsRegex,hbsReplacer({maxFiles:this.maxFiles}))),this.$emit("max-files-exceeded",e)):this.accept(e,t):t(this.dictInvalidFileType)},isValidFile:function(e,t){if(!t.length)return!0;for(var i=e.type,r=i.replace(/\/.*$/,""),n=0;n<t.length;n++){var a=t[n];if("."===a.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(a.toLowerCase(),e.name.length-a.length))return!0}else if(/\/\*$/.test(a)){if(r===a.replace(/\/.*$/,""))return!0}else if(i===a)return!0}return!1},drop:function(e){if(e.dataTransfer){this.$emit("drop",e);var t=Array.from(e.dataTransfer.files);if(this.$emit("added-files",t),t.length){var i=Array.from(e.dataTransfer.items);i&&i.length&&i[0].webkitGetAsEntry?this.addFilesFromItems(i):this.handleFiles(t)}}},paste:function(e){if(has(e,["clipboardData","items"])){this.$emit("paste",e);var t=Array.from(e.clipboardData.items);t.length&&this.addFilesFromItems(t)}},handleFiles:function(e){var t=this;return e.map(function(e){return t.addFile(e)})},addFilesFromItems:function(e){var t=this;e.forEach(function(e){if(e.webkitGetAsEntry){var i=e.webkitGetAsEntry();i.isFile?t.addFile(i.getAsFile()):i.isDirectory&&t.addFilesFromDirectory(i,i.name)}else e.getAsFile&&"file"===e.kind&&t.addFile(e.getAsFile())})},addFilesFromDirectory:function(e,t){var i=this;e.createReader().readEntries(function(e){e.forEach(function(e){e.isFile?e.file(function(e){i.ignoreHiddenFiles&&/^\./.test(e.name)||(e.fullPath=t+"/"+e.name,i.addFile(e))},console.error):e.isDirectory&&i.addFilesFromDirectory(e,t+"/"+e.name)})},console.error)},handleDragOver:function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",this.$emit("drag-over",e)}},mounted:function(){var e=this;this.$on("upload-progress",this.updateTotalUploadProgress),this.$on("removed-file",this.updateTotalUploadProgress),this.$on("canceled",function(t){return e.$emit("complete",t)}),this.$on("complete",function(t){0===e.addedFiles.length&&0===e.uploadingFiles.length&&0===e.queuedFiles.length&&setTimeout(function(){return e.$emit("queue-complete",t)},0)}),this.$emit("initialize",this)}};window.VueTransmit={install:function(e,t){e.component("VueTransmit",VueTransmit)}};
//# sourceMappingURL=vue-transmit.common.js.map
