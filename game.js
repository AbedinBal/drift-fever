(()=>{var Tu="170";var qm=0,Df=1,Ym=2;var Zd=1,wu=2,ki=3,hs=0,We=1,pe=2,Si=0,ls=1,Xe=2,Uf=3,Nf=4,Zm=5,Bs=100,Jm=101,Km=102,jm=103,Qm=104,t0=200,e0=201,n0=202,i0=203,Qc=204,th=205,s0=206,r0=207,o0=208,a0=209,l0=210,c0=211,h0=212,u0=213,f0=214,eh=0,nh=1,ih=2,Ar=3,sh=4,rh=5,oh=6,ah=7,Au=0,d0=1,p0=2,cs=0,Ru=1,Cu=2,Pu=3,Do=4,m0=5,Iu=6,Lu=7;var Jd=300,Rr=301,Cr=302,lh=303,ch=304,xl=306,Xi=1e3,zs=1001,hh=1002,Fn=1003,g0=1004;var ra=1005;var bi=1006,gc=1007;var ks=1008;var $i=1009,Kd=1010,jd=1011,_o=1012,Du=1013,Hs=1014,Ei=1015,pi=1016,Uu=1017,Nu=1018,Pr=1020,Qd=35902,tp=1021,ep=1022,li=1023,np=1024,ip=1025,Sr=1026,Ir=1027,Fu=1028,Bu=1029,sp=1030,Ou=1031;var zu=1033,Oa=33776,za=33777,ka=33778,Ha=33779,uh=35840,fh=35841,dh=35842,ph=35843,mh=36196,gh=37492,xh=37496,yh=37808,vh=37809,_h=37810,Mh=37811,bh=37812,Eh=37813,Sh=37814,Th=37815,wh=37816,Ah=37817,Rh=37818,Ch=37819,Ph=37820,Ih=37821,Ga=36492,Lh=36494,Dh=36495,rp=36283,Uh=36284,Nh=36285,Fh=36286;var Va=2300,Bh=2301,xc=2302,Ff=2400,Bf=2401,Of=2402;var x0=3200,y0=3201;var ku=0,v0=1,os="",Se="srgb",kr="srgb-linear",yl="linear",_e="srgb";var ir=7680;var zf=519,_0=512,M0=513,b0=514,op=515,E0=516,S0=517,T0=518,w0=519,Oh=35044;var kf="300 es",Gi=2e3,Wa=2001,us=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yc=Math.PI/180,Xa=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function A0(i,t){return(i%t+t)%t}function vc(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],P=s[2],b=s[5],w=s[8];return r[0]=o*x+a*_+l*P,r[3]=o*m+a*y+l*b,r[6]=o*p+a*v+l*w,r[1]=c*x+h*_+u*P,r[4]=c*m+h*y+u*b,r[7]=c*p+h*v+u*w,r[2]=f*x+d*_+g*P,r[5]=f*m+d*y+g*b,r[8]=f*p+d*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_c.makeScale(t,e)),this}rotate(t){return this.premultiply(_c.makeRotation(-t)),this}translate(t,e){return this.premultiply(_c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_c=new se;function ap(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function R0(){let i=$a("canvas");return i.style.display="block",i}var Hf={};function po(i){i in Hf||(Hf[i]=!0,console.warn(i))}function C0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function P0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function I0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?yl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gf=[.64,.33,.3,.6,.15,.06],Vf=[.2126,.7152,.0722],Wf=[.3127,.329],Xf=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[kr]:{primaries:Gf,whitePoint:Wf,transfer:yl,toXYZ:Xf,fromXYZ:$f,luminanceCoefficients:Vf,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:Gf,whitePoint:Wf,transfer:_e,toXYZ:Xf,fromXYZ:$f,luminanceCoefficients:Vf,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});var sr,zh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{sr===void 0&&(sr=$a("canvas")),sr.width=t.width,sr.height=t.height;let n=sr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=sr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=$a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},L0=0,qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var D0=0,wn=class i extends us{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zs,s=zs,r=bi,o=ks,a=li,l=$i,c=i.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Vi(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Jd;wn.DEFAULT_ANISOTROPY=1;var Ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,P=(p+1)/2,b=(h+f)/4,w=(u+x)/4,I=(g+m)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=w/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=I/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kh=class extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new wn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hh=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),b=Math.atan2(P,p*_);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}let v=a*_;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new N,qf=new Ti,qi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),aa.subVectors(this.max,no),rr.subVectors(t.a,no),or.subVectors(t.b,no),ar.subVectors(t.c,no),ts.subVectors(or,rr),es.subVectors(ar,or),Ps.subVectors(rr,ar);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,es.z,0,-es.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ps.y,Ps.x,0];return!Ec(e,rr,or,ar,aa)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,rr,or,ar,aa))?!1:(la.crossVectors(ts,es),e=[la.x,la.y,la.z],Ec(e,rr,or,ar,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ni=[new N,new N,new N,new N,new N,new N,new N,new N],ri=new N,oa=new qi,rr=new N,or=new N,ar=new N,ts=new N,es=new N,Ps=new N,no=new N,aa=new N,la=new N,Is=new N;function Ec(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Is.fromArray(i,r);let a=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),l=t.dot(Is),c=e.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var U0=new qi,io=new N,Sc=new N,ci=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):U0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);let e=io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Sc)),this.expandByPoint(io.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new N,Tc=new N,ca=new N,ns=new N,wc=new N,ha=new N,Ac=new N,Lr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tc.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=ns.dot(this.direction),l=-ns.dot(ca),c=ns.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(ca,f),d}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){wc.subVectors(e,t),ha.subVectors(n,t),Ac.crossVectors(wc,ha);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);let l=a*this.direction.dot(ha.crossVectors(ns,ha));if(l<0)return null;let c=a*this.direction.dot(wc.cross(ns));if(c<0||l+c>o)return null;let h=-a*ns.dot(Ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,F0)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),is.crossVectors(n,Un),is.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),is.crossVectors(n,Un)),is.normalize(),ua.crossVectors(Un,is),s[0]=is.x,s[4]=ua.x,s[8]=Un.x,s[1]=is.y,s[5]=ua.y,s[9]=Un.y,s[2]=is.z,s[6]=ua.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],P=n[15],b=s[0],w=s[4],I=s[8],S=s[12],M=s[1],C=s[5],z=s[9],T=s[13],k=s[2],G=s[6],W=s[10],st=s[14],j=s[3],Q=s[7],ut=s[11],X=s[15];return r[0]=o*b+a*M+l*k+c*j,r[4]=o*w+a*C+l*G+c*Q,r[8]=o*I+a*z+l*W+c*ut,r[12]=o*S+a*T+l*st+c*X,r[1]=h*b+u*M+f*k+d*j,r[5]=h*w+u*C+f*G+d*Q,r[9]=h*I+u*z+f*W+d*ut,r[13]=h*S+u*T+f*st+d*X,r[2]=g*b+x*M+m*k+p*j,r[6]=g*w+x*C+m*G+p*Q,r[10]=g*I+x*z+m*W+p*ut,r[14]=g*S+x*T+m*st+p*X,r[3]=_*b+y*M+v*k+P*j,r[7]=_*w+y*C+v*G+P*Q,r[11]=_*I+y*z+v*W+P*ut,r[15]=_*S+y*T+v*st+P*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,b=e*_+n*y+s*v+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=_*w,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*w,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,t[4]=y*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*w,t[8]=v*w,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*w,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=P*w,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=l*c,y=l*h,v=l*u,P=n.x,b=n.y,w=n.z;return s[0]=(1-(x+p))*P,s[1]=(d+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+y)*w,s[9]=(m-_)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);let c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gi){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,x;if(a===Gi)g=(o+r)*u,x=-2*u;else if(a===Wa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},lr=new N,oi=new me,N0=new N(0,0,0),F0=new N(1,1,1),is=new N,ua=new N,Un=new N,Yf=new me,Zf=new Ti,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B0=0,Jf=new N,cr=new Ti,Bi=new me,fa=new N,so=new N,O0=new N,z0=new Ti,Kf=new N(1,0,0),jf=new N(0,1,0),Qf=new N(0,0,1),td={type:"added"},k0={type:"removed"},hr={type:"childadded",child:null},Rc={type:"childremoved",child:null},Ae=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new hi,n=new Ti,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new se}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Kf,t)}rotateY(t){return this.rotateOnAxis(jf,t)}rotateZ(t){return this.rotateOnAxis(Qf,t)}translateOnAxis(t,e){return Jf.copy(t).applyQuaternion(this.quaternion),this.position.add(Jf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kf,t)}translateY(t){return this.translateOnAxis(jf,t)}translateZ(t){return this.translateOnAxis(Qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(so,fa,this.up):Bi.lookAt(fa,so,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Bi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(td),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(td),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new N,Oi=new N,Cc=new N,zi=new N,ur=new N,fr=new N,ed=new N,Pc=new N,Ic=new N,Lc=new N,Dc=new Ee,Uc=new Ee,Nc=new Ee,as=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Oi.subVectors(n,e),Cc.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Oi),l=ai.dot(Cc),c=Oi.dot(Oi),h=Oi.dot(Cc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dc.setScalar(0),Uc.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,n),Nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Uc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Oi.subVectors(t,e),ai.cross(Oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,n),fr.subVectors(r,n),Pc.subVectors(t,n);let l=ur.dot(Pc),c=fr.dot(Pc);if(l<=0&&c<=0)return e.copy(n);Ic.subVectors(t,s);let h=ur.dot(Ic),u=fr.dot(Ic);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ur,o);Lc.subVectors(t,r);let d=ur.dot(Lc),g=fr.dot(Lc);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ed.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(ed,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ur,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},da={h:0,s:0,l:0};function Fc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=A0(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fc(o,r,t+1/3),this.g=Fc(o,r,t),this.b=Fc(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return he.fromWorkingColorSpace(fn.copy(this),t),Math.round(en(fn.r*255,0,255))*65536+Math.round(en(fn.g*255,0,255))*256+Math.round(en(fn.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Se){he.fromWorkingColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(da);let n=vc(ss.h,da.h,e),s=vc(ss.s,da.s,e),r=vc(ss.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new xt;xt.NAMES=lp;var H0=0,ui=class extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Vi(),this.name="",this.blending=ls,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=th,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==th&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zt=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new N,pa=new gt,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}};var Za=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ja=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},G0=0,$n=new me,Bc=new Ae,dr=new N,Nn=new qi,ro=new qi,tn=new N,Kt=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?Ja:Za)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Nn.min,ro.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,ro.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(ro.min),Nn.expandByPoint(ro.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(t,c),tn.add(dr)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;let c=new N,h=new N,u=new N,f=new gt,d=new gt,g=new gt,x=new N,m=new N;function p(I,S,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(x),a[S].add(x),a[M].add(x),l[I].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,S=_.length;I<S;++I){let M=_[I],C=M.start,z=M.count;for(let T=C,k=C+z;T<k;T+=3)p(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let y=new N,v=new N,P=new N,b=new N;function w(I){P.fromBufferAttribute(s,I),b.copy(P);let S=a[I];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(b,S);let C=v.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,S=_.length;I<S;++I){let M=_[I],C=M.start,z=M.count;for(let T=C,k=C+z;T<k;T+=3)w(t.getX(T+0)),w(t.getX(T+1)),w(t.getX(T+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new me,Ls=new Lr,ma=new ci,id=new N,ga=new N,xa=new N,ya=new N,Oc=new N,va=new N,sd=new N,_a=new N,pt=class extends Ae{constructor(t=new Kt,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Oc.fromBufferAttribute(u,t),o?va.addScaledVector(Oc,h):va.addScaledVector(Oc.sub(e),h))}e.add(va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(ma.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(ma,id)===null||Ls.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,P=y;v<P;v+=3){let b=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);s=Ma(this,p,t,n,c,h,u,b,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Ma(this,o,t,n,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,P=y;v<P;v+=3){let b=v,w=v+1,I=v+2;s=Ma(this,p,t,n,c,h,u,b,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;s=Ma(this,o,t,n,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function V0(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===hs,a),l===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:i}}function Ma(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ga),i.getVertexPosition(l,xa),i.getVertexPosition(c,ya);let h=V0(i,t,e,n,ga,xa,ya,sd);if(h){let u=new N;as.getBarycoord(sd,ga,xa,ya,u),s&&(h.uv=as.getInterpolatedAttribute(s,a,l,c,u,new gt)),r&&(h.uv1=as.getInterpolatedAttribute(r,a,l,c,u,new gt)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};as.getNormal(ga,xa,ya,f.normal),h.face=f,h.barycoord=u}return h}var Jt=class i extends Kt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(x,m,p,_,y,v,P,b,w,I,S){let M=v/w,C=P/I,z=v/2,T=P/2,k=b/2,G=w+1,W=I+1,st=0,j=0,Q=new N;for(let ut=0;ut<W;ut++){let X=ut*C-T;for(let ht=0;ht<G;ht++){let Rt=ht*M-z;Q[x]=Rt*_,Q[m]=X*y,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=b>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ht/w),u.push(1-ut/I),st+=1}}for(let ut=0;ut<I;ut++)for(let X=0;X<w;X++){let ht=f+X+G*ut,Rt=f+X+G*(ut+1),et=f+(X+1)+G*(ut+1),ft=f+(X+1)+G*ut;l.push(ht,Rt,ft),l.push(Rt,et,ft),j+=6}a.addGroup(d,j,S),d+=j,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function yn(i){let t={};for(let e=0;e<i.length;e++){let n=Dr(i[e]);for(let s in n)t[s]=n[s]}return t}function W0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cp(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var gs={clone:Dr,merge:yn},X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ka=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new N,rd=new gt,od=new gt,Ye=class extends Ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,rd,od),e.subVectors(od,rd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},pr=-90,mr=1,Gh=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(pr,mr,t,e);s.layers=this.layers,this.add(s);let r=new Ye(pr,mr,t,e);r.layers=this.layers,this.add(r);let o=new Ye(pr,mr,t,e);o.layers=this.layers,this.add(o);let a=new Ye(pr,mr,t,e);a.layers=this.layers,this.add(a);let l=new Ye(pr,mr,t,e);l.layers=this.layers,this.add(l);let c=new Ye(pr,mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ja=class extends wn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vh=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jt(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Si});r.uniforms.tEquirect.value=e;let o=new pt(s,r),a=e.minFilter;return e.minFilter===ks&&(e.minFilter=bi),new Gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},zc=new N,q0=new N,Y0=new se,Hi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zc.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Y0.getNormalMatrix(t),s=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new ci,ba=new N,bo=class{constructor(t=new Hi,e=new Hi,n=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+_).normalize(),n[3].setComponents(l-o,f-h,m-g,v-_).normalize(),n[4].setComponents(l-a,f-u,m-x,v-y).normalize(),e===Gi)n[5].setComponents(l+a,f+u,m+x,v+y).normalize();else if(e===Wa)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Z0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Pe=class i extends Kt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let y=0;y<c;y++){let v=y*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),P=_+1+c*(p+1),b=_+1+c*p;d.push(y,v,b),d.push(v,P,b)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ny=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ay=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:J0,alphahash_pars_fragment:K0,alphamap_fragment:j0,alphamap_pars_fragment:Q0,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:xg,color_vertex:yg,common:vg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:Mg,displacementmap_pars_vertex:bg,displacementmap_vertex:Eg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Tg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Dg,fog_pars_vertex:Ug,fog_fragment:Ng,fog_pars_fragment:Fg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:Og,lights_lambert_fragment:zg,lights_lambert_pars_fragment:kg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:$g,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Kg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:hx,morphtarget_pars_vertex:ux,morphtarget_vertex:fx,normal_fragment_begin:dx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:xx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:bx,opaque_fragment:Ex,packing:Sx,premultiplied_alpha_fragment:Tx,project_vertex:wx,dithering_fragment:Ax,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Fx,skinning_vertex:Bx,skinnormal_vertex:Ox,specularmap_fragment:zx,specularmap_pars_fragment:kx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Gx,transmission_fragment:Vx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:$x,uv_vertex:qx,worldpos_vertex:Yx,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Kx,backgroundCube_frag:jx,cube_vert:Qx,cube_frag:ty,depth_vert:ey,depth_frag:ny,distanceRGBA_vert:iy,distanceRGBA_frag:sy,equirect_vert:ry,equirect_frag:oy,linedashed_vert:ay,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:hy,meshlambert_vert:uy,meshlambert_frag:fy,meshmatcap_vert:dy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:xy,meshphong_frag:yy,meshphysical_vert:vy,meshphysical_frag:_y,meshtoon_vert:My,meshtoon_frag:by,points_vert:Ey,points_frag:Sy,shadow_vert:Ty,shadow_frag:wy,sprite_vert:Ay,sprite_frag:Ry},It={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},_i={basic:{uniforms:yn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:yn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:yn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:yn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:yn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new xt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:yn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:yn([It.points,It.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:yn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:yn([It.common,It.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:yn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:yn([It.sprite,It.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:yn([It.common,It.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:yn([It.lights,It.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Ea={r:0,b:0,g:0},Us=new hi,Cy=new me;function Py(i,t,e,n,s,r,o){let a=new xt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,v=g(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===xl)?(h===void 0&&(h=new pt(new Jt(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Dr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Us.copy(y.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(Us)),h.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new Pe(2,2),new Ge({name:"BackgroundMaterial",uniforms:Dr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Ea,cp(i)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Iy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,C,z,T,k){let G=!1,W=u(T,z,C);r!==W&&(r=W,c(r.object)),G=d(M,T,z,k),G&&g(M,T,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,C,z,T),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,z){let T=z.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let W=G[T];return W===void 0&&(W=f(l()),G[T]=W),W}function f(M){let C=[],z=[],T=[];for(let k=0;k<e;k++)C[k]=0,z[k]=0,T[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:T,object:M,attributes:{},index:null}}function d(M,C,z,T){let k=r.attributes,G=C.attributes,W=0,st=z.getAttributes();for(let j in st)if(st[j].location>=0){let ut=k[j],X=G[j];if(X===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),ut===void 0||ut.attribute!==X||X&&ut.data!==X.data)return!0;W++}return r.attributesNum!==W||r.index!==T}function g(M,C,z,T){let k={},G=C.attributes,W=0,st=z.getAttributes();for(let j in st)if(st[j].location>=0){let ut=G[j];ut===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let X={};X.attribute=ut,ut&&ut.data&&(X.data=ut.data),k[j]=X,W++}r.attributes=k,r.attributesNum=W,r.index=T}function x(){let M=r.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let z=r.newAttributes,T=r.enabledAttributes,k=r.attributeDivisors;z[M]=1,T[M]===0&&(i.enableVertexAttribArray(M),T[M]=1),k[M]!==C&&(i.vertexAttribDivisor(M,C),k[M]=C)}function _(){let M=r.newAttributes,C=r.enabledAttributes;for(let z=0,T=C.length;z<T;z++)C[z]!==M[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function y(M,C,z,T,k,G,W){W===!0?i.vertexAttribIPointer(M,C,z,k,G):i.vertexAttribPointer(M,C,z,T,k,G)}function v(M,C,z,T){x();let k=T.attributes,G=z.getAttributes(),W=C.defaultAttributeValues;for(let st in G){let j=G[st];if(j.location>=0){let Q=k[st];if(Q===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){let ut=Q.normalized,X=Q.itemSize,ht=t.get(Q);if(ht===void 0)continue;let Rt=ht.buffer,et=ht.type,ft=ht.bytesPerElement,Pt=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===Du;if(Q.isInterleavedBufferAttribute){let bt=Q.data,Ut=bt.stride,Nt=Q.offset;if(bt.isInstancedInterleavedBuffer){for(let zt=0;zt<j.locationSize;zt++)p(j.location+zt,bt.meshPerAttribute);M.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let zt=0;zt<j.locationSize;zt++)m(j.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let zt=0;zt<j.locationSize;zt++)y(j.location+zt,X/j.locationSize,et,ut,Ut*ft,(Nt+X/j.locationSize*zt)*ft,Pt)}else{if(Q.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)p(j.location+bt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<j.locationSize;bt++)m(j.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let bt=0;bt<j.locationSize;bt++)y(j.location+bt,X/j.locationSize,et,ut,X*ft,X/j.locationSize*bt*ft,Pt)}}else if(W!==void 0){let ut=W[st];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(j.location,ut);break;case 3:i.vertexAttrib3fv(j.location,ut);break;case 4:i.vertexAttrib4fv(j.location,ut);break;default:i.vertexAttrib1fv(j.location,ut)}}}}_()}function P(){I();for(let M in n){let C=n[M];for(let z in C){let T=C[z];for(let k in T)h(T[k].object),delete T[k];delete C[z]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let z in C){let T=C[z];for(let k in T)h(T[k].object),delete T[k];delete C[z]}delete n[M.id]}function w(M){for(let C in n){let z=n[C];if(z[M.id]===void 0)continue;let T=z[M.id];for(let k in T)h(T[k].object),delete T[k];delete z[M.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Ly(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==li&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$i&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ei&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:b}}function Uy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Hi,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=h(g,f,y,d);for(let P=0;P!==y;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ny(i){let t=new WeakMap;function e(o,a){return a===lh?o.mapping=Rr:a===ch&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===lh||a===ch)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ur=class extends Ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},br=4,ad=[.125,.215,.35,.446,.526,.582],Os=20,kc=new Ur,ld=new xt,Hc=null,Gc=0,Vc=0,Wc=!1,Fs=(1+Math.sqrt(5))/2,gr=1/Fs,cd=[new N(-Fs,gr,0),new N(Fs,gr,0),new N(-gr,0,Fs),new N(gr,0,Fs),new N(0,Fs,-gr),new N(0,Fs,gr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hc,Gc,Vc),this._renderer.xr.enabled=Wc,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:pi,format:li,colorSpace:kr,depthBuffer:!1},s=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(r)),this._blurMaterial=By(r,t,e)}return s}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,kc)}_sceneToCubeUV(t,e,n,s){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ld),h.toneMapping=cs,h.autoClear=!1;let d=new Zt({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new pt(new Jt,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(ld),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Sa(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rr||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,kc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cd[(s-r-1)%cd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Os-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);let p=[],_=0;for(let w=0;w<Os;++w){let I=w/x,S=Math.exp(-I*I/2);p.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let v=this._sizeLods[s],P=3*v*(s>y-br?s-y+br:0),b=4*(this._cubeSize-v);Sa(e,P,b,3*v,2*v),l.setRenderTarget(e),l.render(u,kc)}};function Fy(i){let t=[],e=[],n=[],s=i,r=i-br+1+ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-br?l=ad[o-i+br-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){let w=b%3*2/3-1,I=b>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];_.set(S,x*g*b),y.set(f,m*g*b);let M=[b,b,b,b,b,b];v.set(M,p*g*b)}let P=new Kt;P.setAttribute("position",new le(_,x)),P.setAttribute("uv",new le(y,m)),P.setAttribute("faceIndex",new le(v,p)),t.push(P),s>br&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hd(i,t,e){let n=new on(i,t,e);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function By(i,t,e){let n=new Float32Array(Os),s=new N(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ud(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function fd(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===lh||l===ch,h=l===Rr||l===Cr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new fs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new fs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ky(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let P=_[y+0],b=_[y+1],w=_[y+2];f.push(P,b,b,w,w,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let P=y+0,b=y+1,w=y+2;f.push(P,b,b,w,w,P)}}else return;let m=new(ap(f)?Ja:Za)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hy(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vy(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*P*4*u),w=new Ya(b,v,P,u);w.type=Ei,w.needsUpdate=!0;let I=y*4;for(let M=0;M<u;M++){let C=m[M],z=p[M],T=_[M],k=v*P*4*M;for(let G=0;G<C.count;G++){let W=G*I;d===!0&&(s.fromBufferAttribute(C,G),b[k+W+0]=s.x,b[k+W+1]=s.y,b[k+W+2]=s.z,b[k+W+3]=0),g===!0&&(s.fromBufferAttribute(z,G),b[k+W+4]=s.x,b[k+W+5]=s.y,b[k+W+6]=s.z,b[k+W+7]=0),x===!0&&(s.fromBufferAttribute(T,G),b[k+W+8]=s.x,b[k+W+9]=s.y,b[k+W+10]=s.z,b[k+W+11]=T.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new gt(v,P)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Wy(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Qa=class extends wn{constructor(t,e,n,s,r,o,a,l,c,h=Sr){if(h!==Sr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sr&&(n=Hs),n===void 0&&h===Ir&&(n=Pr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},up=new wn,dd=new Qa(1,1),fp=new Ya,dp=new Hh,pp=new ja,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vl(i,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function Zy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Je(e,n)}}function Jy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Je(e,n)}}function Ky(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Je(e,n)}}function jy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dd.compareFunction=op,r=dd):r=up,e.setTexture2D(t||r,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dp,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pp,s)}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fp,s)}function hv(i){switch(i){case 5126:return Xy;case 35664:return $y;case 35665:return qy;case 35666:return Yy;case 35674:return Zy;case 35675:return Jy;case 35676:return Ky;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(i,t){i.uniform1fv(this.addr,t)}function fv(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function dv(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function pv(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function mv(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gv(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xv(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yv(i,t){i.uniform1iv(this.addr,t)}function vv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function Mv(i,t){i.uniform4iv(this.addr,t)}function bv(i,t){i.uniform1uiv(this.addr,t)}function Ev(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function Tv(i,t){i.uniform4uiv(this.addr,t)}function wv(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||up,r[o])}function Av(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dp,r[o])}function Rv(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pp,r[o])}function Cv(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fp,r[o])}function Pv(i){switch(i){case 5126:return uv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return Ev;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var Wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hv(e.type)}},Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pv(e.type)}},$h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function vd(i,t){i.seq.push(t),i.map[t.id]=t}function Iv(i,t,e){let n=i.name,s=n.length;for(Xc.lastIndex=0;;){let r=Xc.exec(n),o=Xc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vd(e,c===void 0?new Wh(a,i,t):new Xh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $h(a),vd(e,u)),e=u}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Iv(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function _d(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lv=37297,Dv=0;function Uv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Md=new se;function Nv(i){he._getMatrix(Md,he.workingColorSpace,i);let t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case yl:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Uv(i.getShaderSource(t),o)}else return s}function Fv(i,t){let e=Nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bv(i,t){let e;switch(t){case Ru:e="Linear";break;case Cu:e="Reinhard";break;case Pu:e="Cineon";break;case Do:e="ACESFilmic";break;case Iu:e="AgX";break;case Lu:e="Neutral";break;case m0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ta=new N;function Ov(){he.getLuminanceCoefficients(Ta);let i=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function kv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mo(i){return i!==""}function Ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(Gv,Wv)}var Vv=new Map;function Wv(i,t){let e=re[t];if(e===void 0){let n=Vv.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qh(e)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(Xv,$v)}function $v(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case xl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Jv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case d0:t="ENVMAP_BLENDING_MIX";break;case p0:t="ENVMAP_BLENDING_ADD";break}return t}function Kv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qv(e),c=Yv(e),h=Zv(e),u=Jv(e),f=Kv(e),d=zv(e),g=kv(r),x=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),p=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cs?"#define TONE_MAPPING":"",e.toneMapping!==cs?re.tonemapping_pars_fragment:"",e.toneMapping!==cs?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Fv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),o=qh(o),o=Ed(o,e),o=Sd(o,e),a=qh(a),a=Ed(a,e),a=Sd(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,v=_+p+a,P=_d(s,s.VERTEX_SHADER,y),b=_d(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),T=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(b).trim(),G=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,b);else{let st=bd(s,P,"vertex"),j=bd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+st+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(T===""||k==="")&&(W=!1);W&&(C.diagnostics={runnable:G,programLog:z,vertexShader:{log:T,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(b),I=new wr(s,x),S=Hv(s,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Lv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var Qv=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zh(t),e.set(t,n)),n}},Zh=class{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}};function t_(i,t,e,n,s,r,o){let a=new Mo,l=new Yh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,z,T){let k=z.fog,G=T.geometry,W=S.isMeshStandardMaterial?z.environment:null,st=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),j=st&&st.mapping===xl?st.image.height:null,Q=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,X=ut!==void 0?ut.length:0,ht=0;G.morphAttributes.position!==void 0&&(ht=1),G.morphAttributes.normal!==void 0&&(ht=2),G.morphAttributes.color!==void 0&&(ht=3);let Rt,et,ft,Pt;if(Q){let ne=_i[Q];Rt=ne.vertexShader,et=ne.fragmentShader}else Rt=S.vertexShader,et=S.fragmentShader,l.update(S),ft=l.getVertexShaderID(S),Pt=l.getFragmentShaderID(S);let bt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Nt=T.isInstancedMesh===!0,zt=T.isBatchedMesh===!0,oe=!!S.map,mt=!!S.matcap,St=!!st,U=!!S.aoMap,Bt=!!S.lightMap,_t=!!S.bumpMap,Dt=!!S.normalMap,wt=!!S.displacementMap,$t=!!S.emissiveMap,Lt=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,K=S.clearcoat>0,ct=S.dispersion>0,dt=S.iridescence>0,lt=S.sheen>0,Ot=S.transmission>0,B=E&&!!S.anisotropyMap,$=K&&!!S.clearcoatMap,at=K&&!!S.clearcoatNormalMap,R=K&&!!S.clearcoatRoughnessMap,D=dt&&!!S.iridescenceMap,Z=dt&&!!S.iridescenceThicknessMap,ot=lt&&!!S.sheenColorMap,rt=lt&&!!S.sheenRoughnessMap,Et=!!S.specularMap,Ct=!!S.specularColorMap,Ht=!!S.specularIntensityMap,O=Ot&&!!S.transmissionMap,Mt=Ot&&!!S.thicknessMap,J=!!S.gradientMap,tt=!!S.alphaMap,yt=S.alphaTest>0,vt=!!S.alphaHash,kt=!!S.extensions,ue=cs;S.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Te={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Rt,fragmentShader:et,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:Pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:zt,batchingColor:zt&&T._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&T.instanceColor!==null,instancingMorph:Nt&&T.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:kr,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:mt,envMap:St,envMapMode:St&&st.mapping,envMapCubeUVHeight:j,aoMap:U,lightMap:Bt,bumpMap:_t,normalMap:Dt,displacementMap:f&&wt,emissiveMap:$t,normalMapObjectSpace:Dt&&S.normalMapType===v0,normalMapTangentSpace:Dt&&S.normalMapType===ku,metalnessMap:Lt,roughnessMap:L,anisotropy:E,anisotropyMap:B,clearcoat:K,clearcoatMap:$,clearcoatNormalMap:at,clearcoatRoughnessMap:R,dispersion:ct,iridescence:dt,iridescenceMap:D,iridescenceThicknessMap:Z,sheen:lt,sheenColorMap:ot,sheenRoughnessMap:rt,specularMap:Et,specularColorMap:Ct,specularIntensityMap:Ht,transmission:Ot,transmissionMap:O,thicknessMap:Mt,gradientMap:J,opaque:S.transparent===!1&&S.blending===ls&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:vt,combine:S.combine,mapUv:oe&&x(S.map.channel),aoMapUv:U&&x(S.aoMap.channel),lightMapUv:Bt&&x(S.lightMap.channel),bumpMapUv:_t&&x(S.bumpMap.channel),normalMapUv:Dt&&x(S.normalMap.channel),displacementMapUv:wt&&x(S.displacementMap.channel),emissiveMapUv:$t&&x(S.emissiveMap.channel),metalnessMapUv:Lt&&x(S.metalnessMap.channel),roughnessMapUv:L&&x(S.roughnessMap.channel),anisotropyMapUv:B&&x(S.anisotropyMap.channel),clearcoatMapUv:$&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&x(S.sheenRoughnessMap.channel),specularMapUv:Et&&x(S.specularMap.channel),specularColorMapUv:Ct&&x(S.specularColorMap.channel),specularIntensityMapUv:Ht&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:Mt&&x(S.thicknessMap.channel),alphaMapUv:tt&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Dt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!G.attributes.uv&&(oe||tt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:T.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pe,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=g[S.type],C;if(M){let z=_i[M];C=gs.clone(z.uniforms)}else C=S.uniforms;return C}function P(S,M){let C;for(let z=0,T=h.length;z<T;z++){let k=h[z];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new jv(i,M,S,r),h.push(C)),C}function b(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:I}}function e_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||n_),n.length>1&&n.sort(f||Ad),s.length>1&&s.sort(f||Ad)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function i_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Rd,i.set(n,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function s_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new xt};break;case"SpotLight":e={position:new N,direction:new N,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function r_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var o_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l_(i){let t=new s_,e=r_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new me,o=new me;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,P=0,b=0,w=0;c.sort(a_);for(let S=0,M=c.length;S<M;S++){let C=c[S],z=C.color,T=C.intensity,k=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*T,u+=z.g*T,f+=z.b*T;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],T);w++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let st=C.shadow,j=e.get(C);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=W,d++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(z).multiplyScalar(T),W.distance=k,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;let st=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,st.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[x]=st.matrix,C.castShadow){let j=e.get(C);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=G,v++}x++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(z).multiplyScalar(T),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let st=C.shadow,j=e.get(C);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(T),W.groundColor.copy(C.groundColor).multiplyScalar(T),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=w,n.version=o_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Cd(i){let t=new l_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function c_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Cd(i),t.set(s,[a])):r>=o.length?(a=new Cd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jh=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kh=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f_(i,t,e){let n=new bo,s=new gt,r=new gt,o=new Ee,a=new Jh({depthPacking:y0}),l=new Kh,c={},h=e.maxTextureSize,u={[hs]:We,[We]:hs,[pe]:pe},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let p=this.type;this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let T=p!==ki&&this.type===ki,k=p===ki&&this.type!==ki;for(let G=0,W=b.length;G<W;G++){let st=b[G],j=st.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let Q=j.getFrameExtents();if(s.multiply(Q),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,j.mapSize.y=r.y)),j.map===null||T===!0||k===!0){let X=this.type!==ki?{minFilter:Fn,magFilter:Fn}:{};j.map!==null&&j.map.dispose(),j.map=new on(s.x,s.y,X),j.map.texture.name=st.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let ut=j.getViewportCount();for(let X=0;X<ut;X++){let ht=j.getViewport(X);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),z.viewport(o),j.updateMatrices(st,X),n=j.getFrustum(),v(w,I,j.camera,st,this.type)}j.isPointLightShadow!==!0&&this.type===ki&&_(j,I),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,C)};function _(b,w){let I=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,I,d,x,null)}function y(b,w,I,S){let M=null,C=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=M.uuid,T=w.uuid,k=c[z];k===void 0&&(k={},c[z]=k);let G=k[T];G===void 0&&(G=M.clone(),k[T]=G,w.addEventListener("dispose",P)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,S===ki?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=I}return M}function v(b,w,I,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ki)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let T=t.update(b),k=b.material;if(Array.isArray(k)){let G=T.groups;for(let W=0,st=G.length;W<st;W++){let j=G[W],Q=k[j.materialIndex];if(Q&&Q.visible){let ut=y(b,Q,S,M);b.onBeforeShadow(i,b,w,I,T,ut,j),i.renderBufferDirect(I,null,T,ut,b,j),b.onAfterShadow(i,b,w,I,T,ut,j)}}}else if(k.visible){let G=y(b,k,S,M);b.onBeforeShadow(i,b,w,I,T,G,null),i.renderBufferDirect(I,null,T,G,b,null),b.onAfterShadow(i,b,w,I,T,G,null)}}let z=b.children;for(let T=0,k=z.length;T<k;T++)v(z[T],w,I,S,M)}function P(b){b.target.removeEventListener("dispose",P);for(let I in c){let S=c[I],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var d_={[eh]:nh,[ih]:oh,[sh]:ah,[Ar]:rh,[nh]:eh,[oh]:ih,[ah]:sh,[rh]:Ar};function p_(i,t){function e(){let O=!1,Mt=new Ee,J=null,tt=new Ee(0,0,0,0);return{setMask:function(yt){J!==yt&&!O&&(i.colorMask(yt,yt,yt,yt),J=yt)},setLocked:function(yt){O=yt},setClear:function(yt,vt,kt,ue,Te){Te===!0&&(yt*=ue,vt*=ue,kt*=ue),Mt.set(yt,vt,kt,ue),tt.equals(Mt)===!1&&(i.clearColor(yt,vt,kt,ue),tt.copy(Mt))},reset:function(){O=!1,J=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,J=null,tt=null,yt=null;return{setReversed:function(vt){if(Mt!==vt){let kt=t.get("EXT_clip_control");Mt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let ue=yt;yt=null,this.setClear(ue)}Mt=vt},getReversed:function(){return Mt},setTest:function(vt){vt?bt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(vt){J!==vt&&!O&&(i.depthMask(vt),J=vt)},setFunc:function(vt){if(Mt&&(vt=d_[vt]),tt!==vt){switch(vt){case eh:i.depthFunc(i.NEVER);break;case nh:i.depthFunc(i.ALWAYS);break;case ih:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case sh:i.depthFunc(i.EQUAL);break;case rh:i.depthFunc(i.GEQUAL);break;case oh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=vt}},setLocked:function(vt){O=vt},setClear:function(vt){yt!==vt&&(Mt&&(vt=1-vt),i.clearDepth(vt),yt=vt)},reset:function(){O=!1,J=null,tt=null,yt=null,Mt=!1}}}function s(){let O=!1,Mt=null,J=null,tt=null,yt=null,vt=null,kt=null,ue=null,Te=null;return{setTest:function(ne){O||(ne?bt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!O&&(i.stencilMask(ne),Mt=ne)},setFunc:function(ne,ce,Ne){(J!==ne||tt!==ce||yt!==Ne)&&(i.stencilFunc(ne,ce,Ne),J=ne,tt=ce,yt=Ne)},setOp:function(ne,ce,Ne){(vt!==ne||kt!==ce||ue!==Ne)&&(i.stencilOp(ne,ce,Ne),vt=ne,kt=ce,ue=Ne)},setLocked:function(ne){O=ne},setClear:function(ne){Te!==ne&&(i.clearStencil(ne),Te=ne)},reset:function(){O=!1,Mt=null,J=null,tt=null,yt=null,vt=null,kt=null,ue=null,Te=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,P=null,b=null,w=new xt(0,0,0),I=0,S=!1,M=null,C=null,z=null,T=null,k=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=st>=1):j.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=st>=2);let Q=null,ut={},X=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Rt=new Ee().fromArray(X),et=new Ee().fromArray(ht);function ft(O,Mt,J,tt){let yt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(O,vt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<J;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(Mt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return vt}let Pt={};Pt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),bt(i.DEPTH_TEST),o.setFunc(Ar),_t(!1),Dt(Df),bt(i.CULL_FACE),U(Si);function bt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,Mt){return u[O]!==Mt?(i.bindFramebuffer(O,Mt),u[O]=Mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function zt(O,Mt){let J=d,tt=!1;if(O){J=f.get(Mt),J===void 0&&(J=[],f.set(Mt,J));let yt=O.textures;if(J.length!==yt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,kt=yt.length;vt<kt;vt++)J[vt]=i.COLOR_ATTACHMENT0+vt;J.length=yt.length,tt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,tt=!0);tt&&i.drawBuffers(J)}function oe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let mt={[Bs]:i.FUNC_ADD,[Jm]:i.FUNC_SUBTRACT,[Km]:i.FUNC_REVERSE_SUBTRACT};mt[jm]=i.MIN,mt[Qm]=i.MAX;let St={[t0]:i.ZERO,[e0]:i.ONE,[n0]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[l0]:i.SRC_ALPHA_SATURATE,[o0]:i.DST_COLOR,[s0]:i.DST_ALPHA,[i0]:i.ONE_MINUS_SRC_COLOR,[th]:i.ONE_MINUS_SRC_ALPHA,[a0]:i.ONE_MINUS_DST_COLOR,[r0]:i.ONE_MINUS_DST_ALPHA,[c0]:i.CONSTANT_COLOR,[h0]:i.ONE_MINUS_CONSTANT_COLOR,[u0]:i.CONSTANT_ALPHA,[f0]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,Mt,J,tt,yt,vt,kt,ue,Te,ne){if(O===Si){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(bt(i.BLEND),x=!0),O!==Zm){if(O!==m||ne!==S){if((p!==Bs||v!==Bs)&&(i.blendEquation(i.FUNC_ADD),p=Bs,v=Bs),ne)switch(O){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xe:i.blendFunc(i.ONE,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,y=null,P=null,b=null,w.set(0,0,0),I=0,m=O,S=ne}return}yt=yt||Mt,vt=vt||J,kt=kt||tt,(Mt!==p||yt!==v)&&(i.blendEquationSeparate(mt[Mt],mt[yt]),p=Mt,v=yt),(J!==_||tt!==y||vt!==P||kt!==b)&&(i.blendFuncSeparate(St[J],St[tt],St[vt],St[kt]),_=J,y=tt,P=vt,b=kt),(ue.equals(w)===!1||Te!==I)&&(i.blendColor(ue.r,ue.g,ue.b,Te),w.copy(ue),I=Te),m=O,S=!1}function Bt(O,Mt){O.side===pe?Ut(i.CULL_FACE):bt(i.CULL_FACE);let J=O.side===We;Mt&&(J=!J),_t(J),O.blending===ls&&O.transparent===!1?U(Si):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Dt(O){O!==qm?(bt(i.CULL_FACE),O!==C&&(O===Df?i.cullFace(i.BACK):O===Ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),C=O}function wt(O){O!==z&&(W&&i.lineWidth(O),z=O)}function $t(O,Mt,J){O?(bt(i.POLYGON_OFFSET_FILL),(T!==Mt||k!==J)&&(i.polygonOffset(Mt,J),T=Mt,k=J)):Ut(i.POLYGON_OFFSET_FILL)}function Lt(O){O?bt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+G-1),Q!==O&&(i.activeTexture(O),Q=O)}function E(O,Mt,J){J===void 0&&(Q===null?J=i.TEXTURE0+G-1:J=Q);let tt=ut[J];tt===void 0&&(tt={type:void 0,texture:void 0},ut[J]=tt),(tt.type!==O||tt.texture!==Mt)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(O,Mt||Pt[O]),tt.type=O,tt.texture=Mt)}function K(){let O=ut[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(O){Rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Rt.copy(O))}function rt(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Et(O,Mt){let J=c.get(Mt);J===void 0&&(J=new WeakMap,c.set(Mt,J));let tt=J.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(Mt,O.name),J.set(O,tt))}function Ct(O,Mt){let tt=c.get(Mt).get(O);l.get(Mt)!==tt&&(i.uniformBlockBinding(Mt,tt,O.__bindingPointIndex),l.set(Mt,tt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,ut={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,P=null,b=null,w=new xt(0,0,0),I=0,S=!1,M=null,C=null,z=null,T=null,k=null,Rt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:bt,disable:Ut,bindFramebuffer:Nt,drawBuffers:zt,useProgram:oe,setBlending:U,setMaterial:Bt,setFlipSided:_t,setCullFace:Dt,setLineWidth:wt,setPolygonOffset:$t,setScissorTest:Lt,activeTexture:L,bindTexture:E,unbindTexture:K,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:D,texImage3D:Z,updateUBOMapping:Et,uniformBlockBinding:Ct,texStorage2D:at,texStorage3D:R,texSubImage2D:lt,texSubImage3D:Ot,compressedTexSubImage2D:B,compressedTexSubImage3D:$,scissor:ot,viewport:rt,reset:Ht}}function Pd(i,t,e,n){let s=m_(n);switch(e){case tp:return i*t;case np:return i*t;case ip:return i*t*2;case Fu:return i*t/s.components*s.byteLength;case Bu:return i*t/s.components*s.byteLength;case sp:return i*t*2/s.components*s.byteLength;case Ou:return i*t*2/s.components*s.byteLength;case ep:return i*t*3/s.components*s.byteLength;case li:return i*t*4/s.components*s.byteLength;case zu:return i*t*4/s.components*s.byteLength;case Oa:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fh:case ph:return Math.max(i,16)*Math.max(t,8)/4;case uh:case dh:return Math.max(i,8)*Math.max(t,8)/2;case mh:case gh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Lh:case Dh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rp:case Uh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nh:case Fh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(i){switch(i){case $i:case Kd:return{byteLength:1,components:1};case _o:case jd:case pi:return{byteLength:2,components:1};case Uu:case Nu:return{byteLength:2,components:4};case Hs:case Du:case Ei:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return d?new OffscreenCanvas(L,E):$a("canvas")}function x(L,E,K){let ct=1,dt=Lt(L);if((dt.width>K||dt.height>K)&&(ct=K/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let lt=Math.floor(ct*dt.width),Ot=Math.floor(ct*dt.height);u===void 0&&(u=g(lt,Ot));let B=E?g(lt,Ot):u;return B.width=lt,B.height=Ot,B.getContext("2d").drawImage(L,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),B}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,E,K,ct,dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),E===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),E===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),E===i.RGBA){let Ot=dt?yl:he.getTransfer(ct);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=Ot===_e?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function v(L,E){let K;return L?E===null||E===Hs||E===Pr?K=i.DEPTH24_STENCIL8:E===Ei?K=i.DEPTH32F_STENCIL8:E===_o&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hs||E===Pr?K=i.DEPTH_COMPONENT24:E===Ei?K=i.DEPTH_COMPONENT32F:E===_o&&(K=i.DEPTH_COMPONENT16),K}function P(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function b(L){let E=L.target;E.removeEventListener("dispose",b),I(E),E.isVideoTexture&&h.delete(E)}function w(L){let E=L.target;E.removeEventListener("dispose",w),M(E)}function I(L){let E=n.get(L);if(E.__webglInit===void 0)return;let K=L.source,ct=f.get(K);if(ct){let dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&S(L),Object.keys(ct).length===0&&f.delete(K)}n.remove(L)}function S(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let K=L.source,ct=f.get(K);delete ct[E.__cacheKey],o.memory.textures--}function M(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)i.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else i.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[ct]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let K=L.textures;for(let ct=0,dt=K.length;ct<dt;ct++){let lt=n.get(K[ct]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(K[ct])}n.remove(L)}let C=0;function z(){C=0}function T(){let L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function k(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function G(L,E){let K=n.get(L);if(L.isVideoTexture&&wt(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){let ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(K,L,E);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function W(L,E){let K=n.get(L);if(L.version>0&&K.__version!==L.version){et(K,L,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function st(L,E){let K=n.get(L);if(L.version>0&&K.__version!==L.version){et(K,L,E);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function j(L,E){let K=n.get(L);if(L.version>0&&K.__version!==L.version){ft(K,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}let Q={[Xi]:i.REPEAT,[zs]:i.CLAMP_TO_EDGE,[hh]:i.MIRRORED_REPEAT},ut={[Fn]:i.NEAREST,[g0]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[bi]:i.LINEAR,[gc]:i.LINEAR_MIPMAP_NEAREST,[ks]:i.LINEAR_MIPMAP_LINEAR},X={[_0]:i.NEVER,[w0]:i.ALWAYS,[M0]:i.LESS,[op]:i.LEQUAL,[b0]:i.EQUAL,[T0]:i.GEQUAL,[E0]:i.GREATER,[S0]:i.NOTEQUAL};function ht(L,E){if(E.type===Ei&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===gc||E.magFilter===ra||E.magFilter===ks||E.minFilter===bi||E.minFilter===gc||E.minFilter===ra||E.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Q[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ut[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==ra&&E.minFilter!==ks||E.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",b));let ct=E.source,dt=f.get(ct);dt===void 0&&(dt={},f.set(ct,dt));let lt=k(E);if(lt!==L.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),dt[lt].usedTimes++;let Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&S(E)),L.__cacheKey=lt,L.__webglTexture=dt[lt].texture}return K}function et(L,E,K){let ct=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=i.TEXTURE_3D);let dt=Rt(L,E),lt=E.source;e.bindTexture(ct,L.__webglTexture,i.TEXTURE0+K);let Ot=n.get(lt);if(lt.version!==Ot.__version||dt===!0){e.activeTexture(i.TEXTURE0+K);let B=he.getPrimaries(he.workingColorSpace),$=E.colorSpace===os?null:he.getPrimaries(E.colorSpace),at=E.colorSpace===os||B===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let R=x(E.image,!1,s.maxTextureSize);R=$t(E,R);let D=r.convert(E.format,E.colorSpace),Z=r.convert(E.type),ot=y(E.internalFormat,D,Z,E.colorSpace,E.isVideoTexture);ht(ct,E);let rt,Et=E.mipmaps,Ct=E.isVideoTexture!==!0,Ht=Ot.__version===void 0||dt===!0,O=lt.dataReady,Mt=P(E,R);if(E.isDepthTexture)ot=v(E.format===Ir,E.type),Ht&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ot,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,ot,R.width,R.height,0,D,Z,null));else if(E.isDataTexture)if(Et.length>0){Ct&&Ht&&e.texStorage2D(i.TEXTURE_2D,Mt,ot,Et[0].width,Et[0].height);for(let J=0,tt=Et.length;J<tt;J++)rt=Et[J],Ct?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,rt.width,rt.height,D,Z,rt.data):e.texImage2D(i.TEXTURE_2D,J,ot,rt.width,rt.height,0,D,Z,rt.data);E.generateMipmaps=!1}else Ct?(Ht&&e.texStorage2D(i.TEXTURE_2D,Mt,ot,R.width,R.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,D,Z,R.data)):e.texImage2D(i.TEXTURE_2D,0,ot,R.width,R.height,0,D,Z,R.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ct&&Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,ot,Et[0].width,Et[0].height,R.depth);for(let J=0,tt=Et.length;J<tt;J++)if(rt=Et[J],E.format!==li)if(D!==null)if(Ct){if(O)if(E.layerUpdates.size>0){let yt=Pd(rt.width,rt.height,E.format,E.type);for(let vt of E.layerUpdates){let kt=rt.data.subarray(vt*yt/rt.data.BYTES_PER_ELEMENT,(vt+1)*yt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,vt,rt.width,rt.height,1,D,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,R.depth,D,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ot,rt.width,rt.height,R.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,R.depth,D,Z,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ot,rt.width,rt.height,R.depth,0,D,Z,rt.data)}else{Ct&&Ht&&e.texStorage2D(i.TEXTURE_2D,Mt,ot,Et[0].width,Et[0].height);for(let J=0,tt=Et.length;J<tt;J++)rt=Et[J],E.format!==li?D!==null?Ct?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,rt.width,rt.height,D,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,rt.width,rt.height,D,Z,rt.data):e.texImage2D(i.TEXTURE_2D,J,ot,rt.width,rt.height,0,D,Z,rt.data)}else if(E.isDataArrayTexture)if(Ct){if(Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,ot,R.width,R.height,R.depth),O)if(E.layerUpdates.size>0){let J=Pd(R.width,R.height,E.format,E.type);for(let tt of E.layerUpdates){let yt=R.data.subarray(tt*J/R.data.BYTES_PER_ELEMENT,(tt+1)*J/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,R.width,R.height,1,D,Z,yt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,D,Z,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,R.width,R.height,R.depth,0,D,Z,R.data);else if(E.isData3DTexture)Ct?(Ht&&e.texStorage3D(i.TEXTURE_3D,Mt,ot,R.width,R.height,R.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,D,Z,R.data)):e.texImage3D(i.TEXTURE_3D,0,ot,R.width,R.height,R.depth,0,D,Z,R.data);else if(E.isFramebufferTexture){if(Ht)if(Ct)e.texStorage2D(i.TEXTURE_2D,Mt,ot,R.width,R.height);else{let J=R.width,tt=R.height;for(let yt=0;yt<Mt;yt++)e.texImage2D(i.TEXTURE_2D,yt,ot,J,tt,0,D,Z,null),J>>=1,tt>>=1}}else if(Et.length>0){if(Ct&&Ht){let J=Lt(Et[0]);e.texStorage2D(i.TEXTURE_2D,Mt,ot,J.width,J.height)}for(let J=0,tt=Et.length;J<tt;J++)rt=Et[J],Ct?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,D,Z,rt):e.texImage2D(i.TEXTURE_2D,J,ot,D,Z,rt);E.generateMipmaps=!1}else if(Ct){if(Ht){let J=Lt(R);e.texStorage2D(i.TEXTURE_2D,Mt,ot,J.width,J.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,Z,R)}else e.texImage2D(i.TEXTURE_2D,0,ot,D,Z,R);m(E)&&p(ct),Ot.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ft(L,E,K){if(E.image.length!==6)return;let ct=Rt(L,E),dt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);let lt=n.get(dt);if(dt.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);let Ot=he.getPrimaries(he.workingColorSpace),B=E.colorSpace===os?null:he.getPrimaries(E.colorSpace),$=E.colorSpace===os||Ot===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let at=E.isCompressedTexture||E.image[0].isCompressedTexture,R=E.image[0]&&E.image[0].isDataTexture,D=[];for(let tt=0;tt<6;tt++)!at&&!R?D[tt]=x(E.image[tt],!0,s.maxCubemapSize):D[tt]=R?E.image[tt].image:E.image[tt],D[tt]=$t(E,D[tt]);let Z=D[0],ot=r.convert(E.format,E.colorSpace),rt=r.convert(E.type),Et=y(E.internalFormat,ot,rt,E.colorSpace),Ct=E.isVideoTexture!==!0,Ht=lt.__version===void 0||ct===!0,O=dt.dataReady,Mt=P(E,Z);ht(i.TEXTURE_CUBE_MAP,E);let J;if(at){Ct&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Et,Z.width,Z.height);for(let tt=0;tt<6;tt++){J=D[tt].mipmaps;for(let yt=0;yt<J.length;yt++){let vt=J[yt];E.format!==li?ot!==null?Ct?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,vt.width,vt.height,ot,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,Et,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,vt.width,vt.height,ot,rt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,Et,vt.width,vt.height,0,ot,rt,vt.data)}}}else{if(J=E.mipmaps,Ct&&Ht){J.length>0&&Mt++;let tt=Lt(D[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Et,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(R){Ct?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,D[tt].width,D[tt].height,ot,rt,D[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Et,D[tt].width,D[tt].height,0,ot,rt,D[tt].data);for(let yt=0;yt<J.length;yt++){let kt=J[yt].image[tt].image;Ct?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,kt.width,kt.height,ot,rt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,Et,kt.width,kt.height,0,ot,rt,kt.data)}}else{Ct?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ot,rt,D[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Et,ot,rt,D[tt]);for(let yt=0;yt<J.length;yt++){let vt=J[yt];Ct?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,ot,rt,vt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,Et,ot,rt,vt.image[tt])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Pt(L,E,K,ct,dt,lt){let Ot=r.convert(K.format,K.colorSpace),B=r.convert(K.type),$=y(K.internalFormat,Ot,B,K.colorSpace),at=n.get(E),R=n.get(K);if(R.__renderTarget=E,!at.__hasExternalTextures){let D=Math.max(1,E.width>>lt),Z=Math.max(1,E.height>>lt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,lt,$,D,Z,E.depth,0,Ot,B,null):e.texImage2D(dt,lt,$,D,Z,0,Ot,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Dt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,dt,R.__webglTexture,0,_t(E)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,dt,R.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(L,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,lt=v(E.stencilBuffer,dt),Ot=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=_t(E);Dt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,lt,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,lt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,L)}else{let ct=E.textures;for(let dt=0;dt<ct.length;dt++){let lt=ct[dt],Ot=r.convert(lt.format,lt.colorSpace),B=r.convert(lt.type),$=y(lt.internalFormat,Ot,B,lt.colorSpace),at=_t(E);K&&Dt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,E.width,E.height):Dt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,$,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let dt=ct.__webglTexture,lt=_t(E);if(E.depthTexture.format===Sr)Dt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Ir)Dt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Nt(L){let E=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ct=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){let dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ut(E.__webglFramebuffer,L)}else if(K){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=i.createRenderbuffer(),bt(E.__webglDepthbuffer[ct],L,!1);else{let dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),bt(E.__webglDepthbuffer,L,!1);else{let ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(L,E,K){let ct=n.get(L);E!==void 0&&Pt(ct.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Nt(L)}function oe(L){let E=L.texture,K=n.get(L),ct=n.get(E);L.addEventListener("dispose",w);let dt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=E.version,o.memory.textures++),lt){K.__webglFramebuffer=[];for(let B=0;B<6;B++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[B]=[];for(let $=0;$<E.mipmaps.length;$++)K.__webglFramebuffer[B][$]=i.createFramebuffer()}else K.__webglFramebuffer[B]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let B=0;B<E.mipmaps.length;B++)K.__webglFramebuffer[B]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let B=0,$=dt.length;B<$;B++){let at=n.get(dt[B]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Dt(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let B=0;B<dt.length;B++){let $=dt[B];K.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[B]);let at=r.convert($.format,$.colorSpace),R=r.convert($.type),D=y($.internalFormat,at,R,$.colorSpace,L.isXRRenderTarget===!0),Z=_t(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,D,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,K.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),ht(i.TEXTURE_CUBE_MAP,E);for(let B=0;B<6;B++)if(E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)Pt(K.__webglFramebuffer[B][$],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,$);else Pt(K.__webglFramebuffer[B],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let B=0,$=dt.length;B<$;B++){let at=dt[B],R=n.get(at);e.bindTexture(i.TEXTURE_2D,R.__webglTexture),ht(i.TEXTURE_2D,at),Pt(K.__webglFramebuffer,L,at,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,0),m(at)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(B=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,ct.__webglTexture),ht(B,E),E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)Pt(K.__webglFramebuffer[$],L,E,i.COLOR_ATTACHMENT0,B,$);else Pt(K.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,B,0);m(E)&&p(B),e.unbindTexture()}L.depthBuffer&&Nt(L)}function mt(L){let E=L.textures;for(let K=0,ct=E.length;K<ct;K++){let dt=E[K];if(m(dt)){let lt=_(L),Ot=n.get(dt).__webglTexture;e.bindTexture(lt,Ot),p(lt),e.unbindTexture()}}}let St=[],U=[];function Bt(L){if(L.samples>0){if(Dt(L)===!1){let E=L.textures,K=L.width,ct=L.height,dt=i.COLOR_BUFFER_BIT,lt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(L),B=E.length>1;if(B)for(let $=0;$<E.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let $=0;$<E.length;$++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[$]);let at=n.get(E[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,dt,i.NEAREST),l===!0&&(St.length=0,U.length=0,St.push(i.COLOR_ATTACHMENT0+$),L.depthBuffer&&L.resolveDepthBuffer===!1&&(St.push(lt),U.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let $=0;$<E.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[$]);let at=n.get(E[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function _t(L){return Math.min(s.maxSamples,L.samples)}function Dt(L){let E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(L){let E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function $t(L,E){let K=L.colorSpace,ct=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==kr&&K!==os&&(he.getTransfer(K)===_e?(ct!==li||dt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Lt(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=zt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Dt}function x_(i,t){function e(n,s=os){let r,o=he.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kd)return i.BYTE;if(n===jd)return i.SHORT;if(n===_o)return i.UNSIGNED_SHORT;if(n===Du)return i.INT;if(n===Hs)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===tp)return i.ALPHA;if(n===ep)return i.RGB;if(n===li)return i.RGBA;if(n===np)return i.LUMINANCE;if(n===ip)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===Fu)return i.RED;if(n===Bu)return i.RED_INTEGER;if(n===sp)return i.RG;if(n===Ou)return i.RG_INTEGER;if(n===zu)return i.RGBA_INTEGER;if(n===Oa||n===za||n===ka||n===Ha)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uh||n===fh||n===dh||n===ph)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mh||n===gh||n===xh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mh||n===gh)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yh||n===vh||n===_h||n===Mh||n===bh||n===Eh||n===Sh||n===Th||n===wh||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_h)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ch)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ih)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Lh||n===Dh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rp||n===Uh||n===Nh||n===Fh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jh=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Me=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},y_={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new wn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:v_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends us{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Qh,m=e.getContextAttributes(),p=null,_=null,y=[],v=[],P=new gt,b=null,w=new Ye;w.viewport=new Ee;let I=new Ye;I.viewport=new Ee;let S=[w,I],M=new jh,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ft=y[et];return ft===void 0&&(ft=new go,y[et]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(et){let ft=y[et];return ft===void 0&&(ft=new go,y[et]=ft),ft.getGripSpace()},this.getHand=function(et){let ft=y[et];return ft===void 0&&(ft=new go,y[et]=ft),ft.getHandSpace()};function T(et){let ft=v.indexOf(et.inputSource);if(ft===-1)return;let Pt=y[ft];Pt!==void 0&&(Pt.update(et.inputSource,et.frame,c||o),Pt.dispatchEvent({type:et.type,data:et.inputSource}))}function k(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let et=0;et<y.length;et++){let ft=v[et];ft!==null&&(v[et]=null,y[et].disconnect(ft))}C=null,z=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,_=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new on(d.framebufferWidth,d.framebufferHeight,{format:li,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,Pt=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?Ir:Sr,Pt=m.stencil?Pr:Hs);let Ut={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new on(f.textureWidth,f.textureHeight,{format:li,type:$i,depthTexture:new Qa(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(et){for(let ft=0;ft<et.removed.length;ft++){let Pt=et.removed[ft],bt=v.indexOf(Pt);bt>=0&&(v[bt]=null,y[bt].disconnect(Pt))}for(let ft=0;ft<et.added.length;ft++){let Pt=et.added[ft],bt=v.indexOf(Pt);if(bt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=v.length){v.push(Pt),bt=Nt;break}else if(v[Nt]===null){v[Nt]=Pt,bt=Nt;break}if(bt===-1)break}let Ut=y[bt];Ut&&Ut.connect(Pt)}}let W=new N,st=new N;function j(et,ft,Pt){W.setFromMatrixPosition(ft.matrixWorld),st.setFromMatrixPosition(Pt.matrixWorld);let bt=W.distanceTo(st),Ut=ft.projectionMatrix.elements,Nt=Pt.projectionMatrix.elements,zt=Ut[14]/(Ut[10]-1),oe=Ut[14]/(Ut[10]+1),mt=(Ut[9]+1)/Ut[5],St=(Ut[9]-1)/Ut[5],U=(Ut[8]-1)/Ut[0],Bt=(Nt[8]+1)/Nt[0],_t=zt*U,Dt=zt*Bt,wt=bt/(-U+Bt),$t=wt*-U;if(ft.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX($t),et.translateZ(wt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ut[10]===-1)et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Lt=zt+wt,L=oe+wt,E=_t-$t,K=Dt+(bt-$t),ct=mt*oe/L*Lt,dt=St*oe/L*Lt;et.projectionMatrix.makePerspective(E,K,ct,dt,Lt,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Q(et,ft){ft===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ft.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ft=et.near,Pt=et.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),M.near=I.near=w.near=ft,M.far=I.far=w.far=Pt,(C!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,z=M.far),w.layers.mask=et.layers.mask|2,I.layers.mask=et.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;let bt=et.parent,Ut=M.cameras;Q(M,bt);for(let Nt=0;Nt<Ut.length;Nt++)Q(Ut[Nt],bt);Ut.length===2?j(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),ut(et,M,bt)};function ut(et,ft,Pt){Pt===null?et.matrix.copy(ft.matrixWorld):(et.matrix.copy(Pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ft.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xa*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let X=null;function ht(et,ft){if(h=ft.getViewerPose(c||o),g=ft,h!==null){let Pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let bt=!1;Pt.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let Nt=0;Nt<Pt.length;Nt++){let zt=Pt[Nt],oe=null;if(d!==null)oe=d.getViewport(zt);else{let St=u.getViewSubImage(f,zt);oe=St.viewport,Nt===0&&(t.setRenderTargetTextures(_,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(_))}let mt=S[Nt];mt===void 0&&(mt=new Ye,mt.layers.enable(Nt),mt.viewport=new Ee,S[Nt]=mt),mt.matrix.fromArray(zt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(zt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(oe.x,oe.y,oe.width,oe.height),Nt===0&&(M.matrix.copy(mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(mt)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Nt=u.getDepthInformation(Pt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let Pt=0;Pt<y.length;Pt++){let bt=v[Pt],Ut=y[Pt];bt!==null&&Ut!==void 0&&Ut.update(bt,ft,c||o)}X&&X(et,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}let Rt=new hp;Rt.setAnimationLoop(ht),this.setAnimationLoop=function(et){X=et},this.dispose=function(){}}},Ns=new hi,M_=new me;function b_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Ns.copy(v),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(_,P);let b=t.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let y=u();_.__bindingPointIndex=y;let v=i.createBuffer(),P=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],v=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,w=v.length;b<w;b++){let I=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,M=I.length;S<M;S++){let C=I[S];if(d(C,b,S,P)===!0){let z=C.__offset,T=Array.isArray(C.value)?C.value:[C.value],k=0;for(let G=0;G<T.length;G++){let W=T[G],st=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+k,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,k),k+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,v,P){let b=_.value,w=y+"_"+v;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{let I=P[w];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return P[w]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(_){let y=_.uniforms,v=0,P=16;for(let w=0,I=y.length;w<I;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,C=S.length;M<C;M++){let z=S[M],T=Array.isArray(z.value)?z.value:[z.value];for(let k=0,G=T.length;k<G;k++){let W=T[k],st=x(W),j=v%P,Q=j%st.boundary,ut=j+Q;v+=Q,ut!==0&&P-ut<st.storage&&(v+=P-ut),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=st.storage}}}let b=v%P;return b>0&&(v+=P-b),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var tl=class{constructor(t={}){let{canvas:e=R0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=cs,this.toneMappingExposure=1;let v=this,P=!1,b=0,w=0,I=null,S=-1,M=null,C=new Ee,z=new Ee,T=null,k=new xt(0),G=0,W=e.width,st=e.height,j=1,Q=null,ut=null,X=new Ee(0,0,W,st),ht=new Ee(0,0,W,st),Rt=!1,et=new bo,ft=!1,Pt=!1,bt=new me,Ut=new me,Nt=new N,zt=new Ee,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function St(){return I===null?j:1}let U=n;function Bt(A,q){return e.getContext(A,q)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tu}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){let q="webgl2";if(U=Bt(q,A),U===null)throw Bt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,Dt,wt,$t,Lt,L,E,K,ct,dt,lt,Ot,B,$,at,R,D,Z,ot,rt,Et,Ct,Ht,O;function Mt(){_t=new zy(U),_t.init(),Ct=new x_(U,_t),Dt=new Dy(U,_t,t,Ct),wt=new p_(U,_t),Dt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),$t=new Gy(U),Lt=new e_,L=new g_(U,_t,wt,Lt,Dt,Ct,$t),E=new Ny(v),K=new Oy(v),ct=new Z0(U),Ht=new Iy(U,ct),dt=new ky(U,ct,$t,Ht),lt=new Wy(U,dt,ct,$t),ot=new Vy(U,Dt,L),R=new Uy(Lt),Ot=new t_(v,E,K,_t,Dt,Ht,R),B=new b_(v,Lt),$=new i_,at=new c_(_t),Z=new Py(v,E,K,wt,lt,d,l),D=new f_(v,lt,Dt),O=new E_(U,$t,Dt,wt),rt=new Ly(U,_t,$t),Et=new Hy(U,_t,$t),$t.programs=Ot.programs,v.capabilities=Dt,v.extensions=_t,v.properties=Lt,v.renderLists=$,v.shadowMap=D,v.state=wt,v.info=$t}Mt();let J=new tu(v,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(W,st,!1))},this.getSize=function(A){return A.set(W,st)},this.setSize=function(A,q,nt=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,st=q,e.width=Math.floor(A*j),e.height=Math.floor(q*j),nt===!0&&(e.style.width=A+"px",e.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(W*j,st*j).floor()},this.setDrawingBufferSize=function(A,q,nt){W=A,st=q,j=nt,e.width=Math.floor(A*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,q,nt,it){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,q,nt,it),wt.viewport(C.copy(X).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,q,nt,it){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,q,nt,it),wt.scissor(z.copy(ht).multiplyScalar(j).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(A){wt.setScissorTest(Rt=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(A=!0,q=!0,nt=!0){let it=0;if(A){let Y=!1;if(I!==null){let At=I.texture.format;Y=At===zu||At===Ou||At===Bu}if(Y){let At=I.texture.type,Ft=At===$i||At===Hs||At===_o||At===Pr||At===Uu||At===Nu,Vt=Z.getClearColor(),Wt=Z.getClearAlpha(),Qt=Vt.r,ie=Vt.g,Xt=Vt.b;Ft?(g[0]=Qt,g[1]=ie,g[2]=Xt,g[3]=Wt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Qt,x[1]=ie,x[2]=Xt,x[3]=Wt,U.clearBufferiv(U.COLOR,0,x))}else it|=U.COLOR_BUFFER_BIT}q&&(it|=U.DEPTH_BUFFER_BIT),nt&&(it|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),$.dispose(),at.dispose(),Lt.dispose(),E.dispose(),K.dispose(),lt.dispose(),Ht.dispose(),O.dispose(),Ot.dispose(),J.dispose(),J.removeEventListener("sessionstart",hn),J.removeEventListener("sessionend",xe),ae.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=$t.autoReset,q=D.enabled,nt=D.autoUpdate,it=D.needsUpdate,Y=D.type;Mt(),$t.autoReset=A,D.enabled=q,D.autoUpdate=nt,D.needsUpdate=it,D.type=Y}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kt(A){let q=A.target;q.removeEventListener("dispose",kt),ue(q)}function ue(A){Te(A),Lt.remove(A)}function Te(A){let q=Lt.get(A).programs;q!==void 0&&(q.forEach(function(nt){Ot.releaseProgram(nt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,nt,it,Y,At){q===null&&(q=oe);let Ft=Y.isMesh&&Y.matrixWorld.determinant()<0,Vt=Wm(A,q,nt,it,Y);wt.setMaterial(it,Ft);let Wt=nt.index,Qt=1;if(it.wireframe===!0){if(Wt=dt.getWireframeAttribute(nt),Wt===void 0)return;Qt=2}let ie=nt.drawRange,Xt=nt.attributes.position,de=ie.start*Qt,we=(ie.start+ie.count)*Qt;At!==null&&(de=Math.max(de,At.start*Qt),we=Math.min(we,(At.start+At.count)*Qt)),Wt!==null?(de=Math.max(de,0),we=Math.min(we,Wt.count)):Xt!=null&&(de=Math.max(de,0),we=Math.min(we,Xt.count));let Re=we-de;if(Re<0||Re===1/0)return;Ht.setup(Y,it,Vt,nt,Wt);let Tn,ye=rt;if(Wt!==null&&(Tn=ct.get(Wt),ye=Et,ye.setIndex(Tn)),Y.isMesh)it.wireframe===!0?(wt.setLineWidth(it.wireframeLinewidth*St()),ye.setMode(U.LINES)):ye.setMode(U.TRIANGLES);else if(Y.isLine){let qt=it.linewidth;qt===void 0&&(qt=1),wt.setLineWidth(qt*St()),Y.isLineSegments?ye.setMode(U.LINES):Y.isLineLoop?ye.setMode(U.LINE_LOOP):ye.setMode(U.LINE_STRIP)}else Y.isPoints?ye.setMode(U.POINTS):Y.isSprite&&ye.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ye.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))ye.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let qt=Y._multiDrawStarts,Ui=Y._multiDrawCounts,ve=Y._multiDrawCount,si=Wt?ct.get(Wt).bytesPerElement:1,nr=Lt.get(it).currentProgram.getUniforms();for(let Dn=0;Dn<ve;Dn++)nr.setValue(U,"_gl_DrawID",Dn),ye.render(qt[Dn]/si,Ui[Dn])}else if(Y.isInstancedMesh)ye.renderInstances(de,Re,Y.count);else if(nt.isInstancedBufferGeometry){let qt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ui=Math.min(nt.instanceCount,qt);ye.renderInstances(de,Re,Ui)}else ye.render(de,Re)};function ne(A,q,nt){A.transparent===!0&&A.side===pe&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,Ln(A,q,nt),A.side=hs,A.needsUpdate=!0,Ln(A,q,nt),A.side=pe):Ln(A,q,nt)}this.compile=function(A,q,nt=null){nt===null&&(nt=A),p=at.get(nt),p.init(q),y.push(p),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),A!==nt&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let it=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){let Vt=At[Ft];ne(Vt,nt,Y),it.add(Vt)}else ne(At,nt,Y),it.add(At)}),y.pop(),p=null,it},this.compileAsync=function(A,q,nt=null){let it=this.compile(A,q,nt);return new Promise(Y=>{function At(){if(it.forEach(function(Ft){Lt.get(Ft).currentProgram.isReady()&&it.delete(Ft)}),it.size===0){Y(A);return}setTimeout(At,10)}_t.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ce=null;function Ne(A){ce&&ce(A)}function hn(){ae.stop()}function xe(){ae.start()}let ae=new hp;ae.setAnimationLoop(Ne),typeof self!="undefined"&&ae.setContext(self),this.setAnimationLoop=function(A){ce=A,J.setAnimationLoop(A),A===null?ae.stop():ae.start()},J.addEventListener("sessionstart",hn),J.addEventListener("sessionend",xe),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(q),q=J.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,q,I),p=at.get(A,y.length),p.init(q),y.push(p),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),et.setFromProjectionMatrix(Ut),Pt=this.localClippingEnabled,ft=R.init(this.clippingPlanes,Pt),m=$.get(A,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){let At=v.xr.getDepthSensingMesh();At!==null&&je(At,q,-1/0,v.sortObjects)}je(A,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,ut),mt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,mt&&Z.addToRenderList(m,A),this.info.render.frame++,ft===!0&&R.beginShadows();let nt=p.state.shadowsArray;D.render(nt,A,q),ft===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){let At=q.cameras;if(Y.length>0)for(let Ft=0,Vt=At.length;Ft<Vt;Ft++){let Wt=At[Ft];En(it,Y,A,Wt)}mt&&Z.render(A);for(let Ft=0,Vt=At.length;Ft<Vt;Ft++){let Wt=At[Ft];Qe(m,A,Wt,Wt.viewport)}}else Y.length>0&&En(it,Y,A,q),mt&&Z.render(A),Qe(m,A,q);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,q),Ht.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ft===!0&&R.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function je(A,q,nt,it){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){it&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);let Ft=lt.update(A),Vt=A.material;Vt.visible&&m.push(A,Ft,Vt,nt,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){let Ft=lt.update(A),Vt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),zt.copy(Ft.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Vt)){let Wt=Ft.groups;for(let Qt=0,ie=Wt.length;Qt<ie;Qt++){let Xt=Wt[Qt],de=Vt[Xt.materialIndex];de&&de.visible&&m.push(A,Ft,de,nt,zt.z,Xt)}}else Vt.visible&&m.push(A,Ft,Vt,nt,zt.z,null)}}let At=A.children;for(let Ft=0,Vt=At.length;Ft<Vt;Ft++)je(At[Ft],q,nt,it)}function Qe(A,q,nt,it){let Y=A.opaque,At=A.transmissive,Ft=A.transparent;p.setupLightsView(nt),ft===!0&&R.setGlobalState(v.clippingPlanes,nt),it&&wt.viewport(C.copy(it)),Y.length>0&&Sn(Y,q,nt),At.length>0&&Sn(At,q,nt),Ft.length>0&&Sn(Ft,q,nt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function En(A,q,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new on(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?pi:$i,minFilter:ks,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let At=p.state.transmissionRenderTarget[it.id],Ft=it.viewport||C;At.setSize(Ft.z,Ft.w);let Vt=v.getRenderTarget();v.setRenderTarget(At),v.getClearColor(k),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),mt&&Z.render(nt);let Wt=v.toneMapping;v.toneMapping=cs;let Qt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ft===!0&&R.setGlobalState(v.clippingPlanes,it),Sn(A,nt,it),L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Xt=0,de=q.length;Xt<de;Xt++){let we=q[Xt],Re=we.object,Tn=we.geometry,ye=we.material,qt=we.group;if(ye.side===pe&&Re.layers.test(it.layers)){let Ui=ye.side;ye.side=We,ye.needsUpdate=!0,Ki(Re,nt,it,Tn,ye,qt),ye.side=Ui,ye.needsUpdate=!0,ie=!0}}ie===!0&&(L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At))}v.setRenderTarget(Vt),v.setClearColor(k,G),Qt!==void 0&&(it.viewport=Qt),v.toneMapping=Wt}function Sn(A,q,nt){let it=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,At=A.length;Y<At;Y++){let Ft=A[Y],Vt=Ft.object,Wt=Ft.geometry,Qt=it===null?Ft.material:it,ie=Ft.group;Vt.layers.test(nt.layers)&&Ki(Vt,q,nt,Wt,Qt,ie)}}function Ki(A,q,nt,it,Y,At){A.onBeforeRender(v,q,nt,it,Y,At),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(v,q,nt,it,A,At),Y.transparent===!0&&Y.side===pe&&Y.forceSinglePass===!1?(Y.side=We,Y.needsUpdate=!0,v.renderBufferDirect(nt,q,it,Y,A,At),Y.side=hs,Y.needsUpdate=!0,v.renderBufferDirect(nt,q,it,Y,A,At),Y.side=pe):v.renderBufferDirect(nt,q,it,Y,A,At),A.onAfterRender(v,q,nt,it,Y,At)}function Ln(A,q,nt){q.isScene!==!0&&(q=oe);let it=Lt.get(A),Y=p.state.lights,At=p.state.shadowsArray,Ft=Y.state.version,Vt=Ot.getParameters(A,Y.state,At,q,nt),Wt=Ot.getProgramCacheKey(Vt),Qt=it.programs;it.environment=A.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(A.isMeshStandardMaterial?K:E).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",kt),Qt=new Map,it.programs=Qt);let ie=Qt.get(Wt);if(ie!==void 0){if(it.currentProgram===ie&&it.lightsStateVersion===Ft)return Qr(A,Vt),ie}else Vt.uniforms=Ot.getUniforms(A),A.onBeforeCompile(Vt,v),ie=Ot.acquireProgram(Vt,Wt),Qt.set(Wt,ie),it.uniforms=Vt.uniforms;let Xt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=R.uniform),Qr(A,Vt),it.needsLights=$m(A),it.lightsStateVersion=Ft,it.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=ie,it.uniformsList=null,ie}function Cs(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=wr.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Qr(A,q){let nt=Lt.get(A);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.batchingColor=q.batchingColor,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.instancingMorph=q.instancingMorph,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function Wm(A,q,nt,it,Y){q.isScene!==!0&&(q=oe),L.resetTextureUnits();let At=q.fog,Ft=it.isMeshStandardMaterial?q.environment:null,Vt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:kr,Wt=(it.isMeshStandardMaterial?K:E).get(it.envMap||Ft),Qt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ie=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Xt=!!nt.morphAttributes.position,de=!!nt.morphAttributes.normal,we=!!nt.morphAttributes.color,Re=cs;it.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Re=v.toneMapping);let Tn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ye=Tn!==void 0?Tn.length:0,qt=Lt.get(it),Ui=p.state.lights;if(ft===!0&&(Pt===!0||A!==M)){let Xn=A===M&&it.id===S;R.setState(it,A,Xn)}let ve=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ui.state.version||qt.outputColorSpace!==Vt||Y.isBatchedMesh&&qt.batching===!1||!Y.isBatchedMesh&&qt.batching===!0||Y.isBatchedMesh&&qt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qt.instancing===!1||!Y.isInstancedMesh&&qt.instancing===!0||Y.isSkinnedMesh&&qt.skinning===!1||!Y.isSkinnedMesh&&qt.skinning===!0||Y.isInstancedMesh&&qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qt.instancingMorph===!1&&Y.morphTexture!==null||qt.envMap!==Wt||it.fog===!0&&qt.fog!==At||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==R.numPlanes||qt.numIntersection!==R.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==ie||qt.morphTargets!==Xt||qt.morphNormals!==de||qt.morphColors!==we||qt.toneMapping!==Re||qt.morphTargetsCount!==ye)&&(ve=!0):(ve=!0,qt.__version=it.version);let si=qt.currentProgram;ve===!0&&(si=Ln(it,q,Y));let nr=!1,Dn=!1,to=!1,Ce=si.getUniforms(),vi=qt.uniforms;if(wt.useProgram(si.program)&&(nr=!0,Dn=!0,to=!0),it.id!==S&&(S=it.id,Dn=!0),nr||M!==A){wt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),P0(bt),I0(bt),Ce.setValue(U,"projectionMatrix",bt)):Ce.setValue(U,"projectionMatrix",A.projectionMatrix),Ce.setValue(U,"viewMatrix",A.matrixWorldInverse);let ji=Ce.map.cameraPosition;ji!==void 0&&ji.setValue(U,Nt.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Dn=!0,to=!0)}if(Y.isSkinnedMesh){Ce.setOptional(U,Y,"bindMatrix"),Ce.setOptional(U,Y,"bindMatrixInverse");let Xn=Y.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Ce.setValue(U,"boneTexture",Xn.boneTexture,L))}Y.isBatchedMesh&&(Ce.setOptional(U,Y,"batchingTexture"),Ce.setValue(U,"batchingTexture",Y._matricesTexture,L),Ce.setOptional(U,Y,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",Y._indirectTexture,L),Ce.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",Y._colorsTexture,L));let eo=nt.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&ot.update(Y,nt,si),(Dn||qt.receiveShadow!==Y.receiveShadow)&&(qt.receiveShadow=Y.receiveShadow,Ce.setValue(U,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(vi.envMap.value=Wt,vi.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(vi.envMapIntensity.value=q.environmentIntensity),Dn&&(Ce.setValue(U,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Xm(vi,to),At&&it.fog===!0&&B.refreshFogUniforms(vi,At),B.refreshMaterialUniforms(vi,it,j,st,p.state.transmissionRenderTarget[A.id]),wr.upload(U,Cs(qt),vi,L)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(wr.upload(U,Cs(qt),vi,L),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ce.setValue(U,"center",Y.center),Ce.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(U,"normalMatrix",Y.normalMatrix),Ce.setValue(U,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Xn=it.uniformsGroups;for(let ji=0,Qi=Xn.length;ji<Qi;ji++){let Lf=Xn[ji];O.update(Lf,si),O.bind(Lf,si)}}return si}function Xm(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function $m(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,q,nt){Lt.get(A.texture).__webglTexture=q,Lt.get(A.depthTexture).__webglTexture=nt;let it=Lt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){let nt=Lt.get(A);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,nt=0){I=A,b=q,w=nt;let it=!0,Y=null,At=!1,Ft=!1;if(A){let Wt=Lt.get(A);if(Wt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),it=!1;else if(Wt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Wt.__hasExternalTextures)L.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Xt=A.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&Lt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}let Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);let ie=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ie[q])?Y=ie[q][nt]:Y=ie[q],At=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(ie)?Y=ie[nt]:Y=ie,C.copy(A.viewport),z.copy(A.scissor),T=A.scissorTest}else C.copy(X).multiplyScalar(j).floor(),z.copy(ht).multiplyScalar(j).floor(),T=Rt;if(wt.bindFramebuffer(U.FRAMEBUFFER,Y)&&it&&wt.drawBuffers(A,Y),wt.viewport(C),wt.scissor(z),wt.setScissorTest(T),At){let Wt=Lt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Wt.__webglTexture,nt)}else if(Ft){let Wt=Lt.get(A.texture),Qt=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,nt||0,Qt)}S=-1},this.readRenderTargetPixels=function(A,q,nt,it,Y,At,Ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){wt.bindFramebuffer(U.FRAMEBUFFER,Vt);try{let Wt=A.texture,Qt=Wt.format,ie=Wt.type;if(!Dt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-it&&nt>=0&&nt<=A.height-Y&&U.readPixels(q,nt,it,Y,Ct.convert(Qt),Ct.convert(ie),At)}finally{let Wt=I!==null?Lt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,q,nt,it,Y,At,Ft){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){let Wt=A.texture,Qt=Wt.format,ie=Wt.type;if(!Dt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-it&&nt>=0&&nt<=A.height-Y){wt.bindFramebuffer(U.FRAMEBUFFER,Vt);let Xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.bufferData(U.PIXEL_PACK_BUFFER,At.byteLength,U.STREAM_READ),U.readPixels(q,nt,it,Y,Ct.convert(Qt),Ct.convert(ie),0);let de=I!==null?Lt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,de);let we=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await C0(U,we,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,At),U.deleteBuffer(Xt),U.deleteSync(we),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,nt=0){A.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);let it=Math.pow(2,-nt),Y=Math.floor(A.image.width*it),At=Math.floor(A.image.height*it),Ft=q!==null?q.x:0,Vt=q!==null?q.y:0;L.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,nt,0,0,Ft,Vt,Y,At),wt.unbindTexture()},this.copyTextureToTexture=function(A,q,nt=null,it=null,Y=0){A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],q=arguments[2],Y=arguments[3]||0,nt=null);let At,Ft,Vt,Wt,Qt,ie,Xt,de,we,Re=A.isCompressedTexture?A.mipmaps[Y]:A.image;nt!==null?(At=nt.max.x-nt.min.x,Ft=nt.max.y-nt.min.y,Vt=nt.isBox3?nt.max.z-nt.min.z:1,Wt=nt.min.x,Qt=nt.min.y,ie=nt.isBox3?nt.min.z:0):(At=Re.width,Ft=Re.height,Vt=Re.depth||1,Wt=0,Qt=0,ie=0),it!==null?(Xt=it.x,de=it.y,we=it.z):(Xt=0,de=0,we=0);let Tn=Ct.convert(q.format),ye=Ct.convert(q.type),qt;q.isData3DTexture?(L.setTexture3D(q,0),qt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),qt=U.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),qt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let Ui=U.getParameter(U.UNPACK_ROW_LENGTH),ve=U.getParameter(U.UNPACK_IMAGE_HEIGHT),si=U.getParameter(U.UNPACK_SKIP_PIXELS),nr=U.getParameter(U.UNPACK_SKIP_ROWS),Dn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ie);let to=A.isDataArrayTexture||A.isData3DTexture,Ce=q.isDataArrayTexture||q.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let vi=Lt.get(A),eo=Lt.get(q),Xn=Lt.get(vi.__renderTarget),ji=Lt.get(eo.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Xn.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Qi=0;Qi<Vt;Qi++)to&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(A).__webglTexture,Y,ie+Qi),A.isDepthTexture?(Ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(q).__webglTexture,Y,we+Qi),U.blitFramebuffer(Wt,Qt,At,Ft,Xt,de,At,Ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ce?U.copyTexSubImage3D(qt,Y,Xt,de,we+Qi,Wt,Qt,At,Ft):U.copyTexSubImage2D(qt,Y,Xt,de,we+Qi,Wt,Qt,At,Ft);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(qt,Y,Xt,de,we,At,Ft,Vt,Tn,ye,Re.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(qt,Y,Xt,de,we,At,Ft,Vt,Tn,Re.data):U.texSubImage3D(qt,Y,Xt,de,we,At,Ft,Vt,Tn,ye,Re):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,Xt,de,At,Ft,Tn,ye,Re.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,Xt,de,Re.width,Re.height,Tn,Re.data):U.texSubImage2D(U.TEXTURE_2D,Y,Xt,de,At,Ft,Tn,ye,Re);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),U.pixelStorei(U.UNPACK_SKIP_PIXELS,si),U.pixelStorei(U.UNPACK_SKIP_ROWS,nr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),Y===0&&q.generateMipmaps&&U.generateMipmap(qt),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,nt=null,it=null,Y=0){return A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,A=arguments[2],q=arguments[3],Y=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,nt,it,Y)},this.initRenderTarget=function(A){Lt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){b=0,w=0,I=null,wt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Nr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},An=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},el=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new N,Eo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bn=class extends ui{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xr,oo=new N,yr=new N,vr=new N,_r=new gt,ao=new gt,mp=new me,wa=new N,lo=new N,Aa=new N,Id=new gt,$c=new gt,Ld=new gt,qn=class extends Ae{constructor(t=new Bn){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Kt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new el(e,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Eo(n,3,0,!1)),xr.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=xr,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-vr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ra(wa.set(-.5,-.5,0),vr,o,yr,s,r),Ra(lo.set(.5,-.5,0),vr,o,yr,s,r),Ra(Aa.set(.5,.5,0),vr,o,yr,s,r),Id.set(0,0),$c.set(1,0),Ld.set(1,1);let a=t.ray.intersectTriangle(wa,lo,Aa,!1,oo);if(a===null&&(Ra(lo.set(-.5,.5,0),vr,o,yr,s,r),$c.set(0,1),a=t.ray.intersectTriangle(wa,Aa,lo,!1,oo),a===null))return;let l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:as.getInterpolation(oo,wa,lo,Aa,Id,$c,Ld,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ra(i,t,e,n,s,r){_r.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*_r.x-s*_r.y,ao.y=s*_r.x+r*_r.y):ao.copy(_r),i.copy(t),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(mp)}var eu=class extends wn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Fn,h=Fn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var So=class extends le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new me,Dd=new me,Ca=[],Ud=new qi,S_=new me,co=new pt,ho=new ci,ds=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,S_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),Ud.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),ho.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Dd.multiplyMatrices(n,Mr),co.matrixWorld=Dd,co.raycast(t,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,e.push(l)}Ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eu(new Float32Array(s*this.count),s,this.count,Fu,Ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var To=class extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nl=new N,il=new N,Nd=new me,uo=new Lr,Pa=new ci,qc=new N,Fd=new N,sl=class extends Ae{constructor(t=new Kt,e=new To){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)nl.fromBufferAttribute(e,s-1),il.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=nl.distanceTo(il);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;Nd.copy(s).invert(),uo.copy(t.ray).applyMatrix4(Nd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),y=Ia(this,t,uo,l,p,_);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Ia(this,t,uo,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Ia(this,t,uo,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Ia(this,t,uo,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ia(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(nl.fromBufferAttribute(o,s),il.fromBufferAttribute(o,r),e.distanceSqToSegment(nl,il,qc,Fd)>n)return;qc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qc);if(!(l<t.near||l>t.far))return{distance:l,point:Fd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var an=class extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bd=new me,nu=new Lr,La=new ci,Da=new N,dn=class extends Ae{constructor(t=new Kt,e=new an){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;Bd.copy(s).invert(),nu.copy(t.ray).applyMatrix4(Bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Da.fromBufferAttribute(u,m),Od(Da,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Da.fromBufferAttribute(u,g),Od(Da,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Od(i,t,e,n,s,r,o){let a=nu.distanceSqToPoint(i);if(a<e){let l=new N;nu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var nn=class extends wn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,l=new me;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(en(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(en(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wo=class extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},iu=class extends wo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ua=new N,Yc=new Gu,Zc=new Gu,Jc=new Gu,Ao=class extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),c=Ua);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Zc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Jc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Zc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Jc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Yc.calc(l),Zc.calc(l),Jc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function T_(i,t){let e=1-i;return e*e*t}function w_(i,t){return 2*(1-i)*i*t}function A_(i,t){return i*i*t}function xo(i,t,e,n){return T_(i,t)+w_(i,e)+A_(i,n)}function R_(i,t){let e=1-i;return e*e*e*t}function C_(i,t){let e=1-i;return 3*e*e*i*t}function P_(i,t){return 3*(1-i)*i*i*t}function I_(i,t){return i*i*i*t}function yo(i,t,e,n,s){return R_(i,t)+C_(i,e)+P_(i,n)+I_(i,s)}var rl=class extends Yn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,s.x,r.x,o.x,a.x),yo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},su=class extends Yn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,s.x,r.x,o.x,a.x),yo(t,s.y,r.y,o.y,a.y),yo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Yn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ru=class extends Yn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Yn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(t,s.x,r.x,o.x),xo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ou=class extends Yn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(t,s.x,r.x,o.x),xo(t,s.y,r.y,o.y),xo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(zd(a,l.x,c.x,h.x,u.x),zd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},au=Object.freeze({__proto__:null,ArcCurve:iu,CatmullRomCurve3:Ao,CubicBezierCurve:rl,CubicBezierCurve3:su,EllipseCurve:wo,LineCurve:ol,LineCurve3:ru,QuadraticBezierCurve:al,QuadraticBezierCurve3:ou,SplineCurve:ll}),lu=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new au[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new au[s.type]().fromJSON(s))}return this}},cl=class extends lu{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ol(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new al(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new rl(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ll(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new wo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fr=class i extends Kt{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new N,f=new gt,d=new N,g=new N,x=new N,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,v=Math.sin(y),P=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*P,o.push(u.x,u.y,u.z),f.x=_/e,f.y=b/(t.length-1),a.push(f.x,f.y);let w=l[3*b+0]*v,I=l[3*b+1],S=l[3*b+0]*P;c.push(w,I,S)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,P=v,b=v+t.length,w=v+t.length+1,I=v+1;r.push(P,b,I),r.push(w,I,b)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var On=class i extends Kt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ee=class i extends Kt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function _(){let v=new N,P=new N,b=0,w=(e-t)/n;for(let I=0;I<=r;I++){let S=[],M=I/r,C=M*(e-t)+t;for(let z=0;z<=s;z++){let T=z/s,k=T*l+a,G=Math.sin(k),W=Math.cos(k);P.x=C*G,P.y=-M*n+m,P.z=C*W,u.push(P.x,P.y,P.z),v.set(G,w,W).normalize(),f.push(v.x,v.y,v.z),d.push(T,1-M),S.push(g++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let M=x[S][I],C=x[S+1][I],z=x[S+1][I+1],T=x[S][I+1];(t>0||S!==0)&&(h.push(M,C,T),b+=3),(e>0||S!==r-1)&&(h.push(C,z,T),b+=3)}c.addGroup(p,b,0),p+=b}function y(v){let P=g,b=new gt,w=new N,I=0,S=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let C=g;for(let z=0;z<=s;z++){let k=z/s*l+a,G=Math.cos(k),W=Math.sin(k);w.x=S*W,w.y=m*M,w.z=S*G,u.push(w.x,w.y,w.z),f.push(0,M,0),b.x=G*.5+.5,b.y=W*.5*M+.5,d.push(b.x,b.y),g++}for(let z=0;z<s;z++){let T=P+z,k=C+z;v===!0?h.push(k,k+1,T):h.push(k+1,k,T),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vn=class i extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ro=class i extends Kt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new N,v=new N,P=new N;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],v),d(e[b+2],P),l(y,v,P,_)}function l(_,y,v,P){let b=P+1,w=[];for(let I=0;I<=b;I++){w[I]=[];let S=_.clone().lerp(v,I/b),M=y.clone().lerp(v,I/b),C=b-I;for(let z=0;z<=C;z++)z===0&&I===b?w[I][z]=S:w[I][z]=S.clone().lerp(M,z/C)}for(let I=0;I<b;I++)for(let S=0;S<2*(b-I)-1;S++){let M=Math.floor(S/2);S%2===0?(f(w[I][M+1]),f(w[I+1][M]),f(w[I][M])):(f(w[I][M+1]),f(w[I+1][M+1]),f(w[I+1][M]))}}function c(_){let y=new N;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new N;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],P=o[_+4],b=Math.max(y,v,P),w=Math.min(y,v,P);b>.9&&w<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let _=new N,y=new N,v=new N,P=new N,b=new gt,w=new gt,I=new gt;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),b.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),P.copy(_).add(y).add(v).divideScalar(3);let C=m(P);x(b,M+0,_,C),x(w,M+2,y,C),x(I,M+4,v,C)}}function x(_,y,v,P){P<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Br=class i extends Ro{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Yi=class extends cl{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cl().fromJSON(s))}return this}},L_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=B_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Co(r,o,e,a,l,d,0),o}};function gp(i,t,e,n,s){let r,o;if(s===Y_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=kd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=kd(r,i[r],i[r+1],o);return o&&_l(o,o.next)&&(Io(o),o=o.next),o}function Gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_l(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,s,r,o){if(!i)return;!o&&r&&G_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?U_(i,n,s,r):D_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=N_(Gs(i),t,e),Co(i,t,e,n,s,r,2)):o===2&&F_(i,t,e,n,s,r):Co(Gs(i),t,e,n,s,r,1);break}}}function D_(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Er(s,a,r,l,o,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=cu(d,g,t,e,n),_=cu(x,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Er(a,h,l,u,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Er(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Er(a,h,l,u,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Er(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function N_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_l(s,r)&&xp(s,n,n.next,r)&&Po(s,r)&&Po(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Io(n),Io(n.next),n=i=r),n=n.next}while(n!==i);return Gs(n)}function F_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&X_(o,a)){let l=yp(o,a);o=Gs(o,o.next),l=Gs(l,l.next),Co(o,t,e,n,s,r,0),Co(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function B_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=gp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(W_(c));for(s.sort(O_),r=0;r<s.length;r++)e=z_(s[r],e);return e}function O_(i,t){return i.x-t.x}function z_(i,t){let e=k_(i,t);if(!e)return t;let n=yp(e,i);return Gs(n,n.next),Gs(e,e.next)}function k_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Er(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Po(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&H_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function H_(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function G_(i,t,e,n){let s=i;do s.z===0&&(s.z=cu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V_(s)}function V_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function cu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function W_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Er(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function X_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$_(i,t)&&(Po(i,t)&&Po(t,i)&&q_(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||_l(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _l(i,t){return i.x===t.x&&i.y===t.y}function xp(i,t,e,n){let s=Fa(Fe(i,t,e)),r=Fa(Fe(i,t,n)),o=Fa(Fe(e,n,i)),a=Fa(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Na(i,e,t)||r===0&&Na(i,n,t)||o===0&&Na(e,i,n)||a===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function $_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Po(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function q_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yp(i,t){let e=new hu(i.i,i.x,i.y),n=new hu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kd(i,t,e,n){let s=new hu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hu(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hd(t),Gd(n,t);let o=t.length;e.forEach(Hd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gd(n,e[l]);let a=L_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ps=class i extends Kt{constructor(t=new Yi([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Z_,y,v=!1,P,b,w,I;p&&(y=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),b=new N,w=new N,I=new N),f||(m=0,d=0,g=0,x=0);let S=a.extractPoints(c),M=S.shape,C=S.holes;if(!vo.isClockWise(M)){M=M.reverse();for(let mt=0,St=C.length;mt<St;mt++){let U=C[mt];vo.isClockWise(U)&&(C[mt]=U.reverse())}}let T=vo.triangulateShape(M,C),k=M;for(let mt=0,St=C.length;mt<St;mt++){let U=C[mt];M=M.concat(U)}function G(mt,St,U){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),mt.clone().addScaledVector(St,U)}let W=M.length,st=T.length;function j(mt,St,U){let Bt,_t,Dt,wt=mt.x-St.x,$t=mt.y-St.y,Lt=U.x-mt.x,L=U.y-mt.y,E=wt*wt+$t*$t,K=wt*L-$t*Lt;if(Math.abs(K)>Number.EPSILON){let ct=Math.sqrt(E),dt=Math.sqrt(Lt*Lt+L*L),lt=St.x-$t/ct,Ot=St.y+wt/ct,B=U.x-L/dt,$=U.y+Lt/dt,at=((B-lt)*L-($-Ot)*Lt)/(wt*L-$t*Lt);Bt=lt+wt*at-mt.x,_t=Ot+$t*at-mt.y;let R=Bt*Bt+_t*_t;if(R<=2)return new gt(Bt,_t);Dt=Math.sqrt(R/2)}else{let ct=!1;wt>Number.EPSILON?Lt>Number.EPSILON&&(ct=!0):wt<-Number.EPSILON?Lt<-Number.EPSILON&&(ct=!0):Math.sign($t)===Math.sign(L)&&(ct=!0),ct?(Bt=-$t,_t=wt,Dt=Math.sqrt(E)):(Bt=wt,_t=$t,Dt=Math.sqrt(E/2))}return new gt(Bt/Dt,_t/Dt)}let Q=[];for(let mt=0,St=k.length,U=St-1,Bt=mt+1;mt<St;mt++,U++,Bt++)U===St&&(U=0),Bt===St&&(Bt=0),Q[mt]=j(k[mt],k[U],k[Bt]);let ut=[],X,ht=Q.concat();for(let mt=0,St=C.length;mt<St;mt++){let U=C[mt];X=[];for(let Bt=0,_t=U.length,Dt=_t-1,wt=Bt+1;Bt<_t;Bt++,Dt++,wt++)Dt===_t&&(Dt=0),wt===_t&&(wt=0),X[Bt]=j(U[Bt],U[Dt],U[wt]);ut.push(X),ht=ht.concat(X)}for(let mt=0;mt<m;mt++){let St=mt/m,U=d*Math.cos(St*Math.PI/2),Bt=g*Math.sin(St*Math.PI/2)+x;for(let _t=0,Dt=k.length;_t<Dt;_t++){let wt=G(k[_t],Q[_t],Bt);bt(wt.x,wt.y,-U)}for(let _t=0,Dt=C.length;_t<Dt;_t++){let wt=C[_t];X=ut[_t];for(let $t=0,Lt=wt.length;$t<Lt;$t++){let L=G(wt[$t],X[$t],Bt);bt(L.x,L.y,-U)}}}let Rt=g+x;for(let mt=0;mt<W;mt++){let St=f?G(M[mt],ht[mt],Rt):M[mt];v?(w.copy(P.normals[0]).multiplyScalar(St.x),b.copy(P.binormals[0]).multiplyScalar(St.y),I.copy(y[0]).add(w).add(b),bt(I.x,I.y,I.z)):bt(St.x,St.y,0)}for(let mt=1;mt<=h;mt++)for(let St=0;St<W;St++){let U=f?G(M[St],ht[St],Rt):M[St];v?(w.copy(P.normals[mt]).multiplyScalar(U.x),b.copy(P.binormals[mt]).multiplyScalar(U.y),I.copy(y[mt]).add(w).add(b),bt(I.x,I.y,I.z)):bt(U.x,U.y,u/h*mt)}for(let mt=m-1;mt>=0;mt--){let St=mt/m,U=d*Math.cos(St*Math.PI/2),Bt=g*Math.sin(St*Math.PI/2)+x;for(let _t=0,Dt=k.length;_t<Dt;_t++){let wt=G(k[_t],Q[_t],Bt);bt(wt.x,wt.y,u+U)}for(let _t=0,Dt=C.length;_t<Dt;_t++){let wt=C[_t];X=ut[_t];for(let $t=0,Lt=wt.length;$t<Lt;$t++){let L=G(wt[$t],X[$t],Bt);v?bt(L.x,L.y+y[h-1].y,y[h-1].x+U):bt(L.x,L.y,u+U)}}}et(),ft();function et(){let mt=s.length/3;if(f){let St=0,U=W*St;for(let Bt=0;Bt<st;Bt++){let _t=T[Bt];Ut(_t[2]+U,_t[1]+U,_t[0]+U)}St=h+m*2,U=W*St;for(let Bt=0;Bt<st;Bt++){let _t=T[Bt];Ut(_t[0]+U,_t[1]+U,_t[2]+U)}}else{for(let St=0;St<st;St++){let U=T[St];Ut(U[2],U[1],U[0])}for(let St=0;St<st;St++){let U=T[St];Ut(U[0]+W*h,U[1]+W*h,U[2]+W*h)}}n.addGroup(mt,s.length/3-mt,0)}function ft(){let mt=s.length/3,St=0;Pt(k,St),St+=k.length;for(let U=0,Bt=C.length;U<Bt;U++){let _t=C[U];Pt(_t,St),St+=_t.length}n.addGroup(mt,s.length/3-mt,1)}function Pt(mt,St){let U=mt.length;for(;--U>=0;){let Bt=U,_t=U-1;_t<0&&(_t=mt.length-1);for(let Dt=0,wt=h+m*2;Dt<wt;Dt++){let $t=W*Dt,Lt=W*(Dt+1),L=St+Bt+$t,E=St+_t+$t,K=St+_t+Lt,ct=St+Bt+Lt;Nt(L,E,K,ct)}}}function bt(mt,St,U){l.push(mt),l.push(St),l.push(U)}function Ut(mt,St,U){zt(mt),zt(St),zt(U);let Bt=s.length/3,_t=_.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);oe(_t[0]),oe(_t[1]),oe(_t[2])}function Nt(mt,St,U,Bt){zt(mt),zt(St),zt(Bt),zt(St),zt(U),zt(Bt);let _t=s.length/3,Dt=_.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);oe(Dt[0]),oe(Dt[1]),oe(Dt[3]),oe(Dt[1]),oe(Dt[2]),oe(Dt[3])}function zt(mt){s.push(l[mt*3+0]),s.push(l[mt*3+1]),s.push(l[mt*3+2])}function oe(mt){r.push(mt.x),r.push(mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return J_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new au[s.type]().fromJSON(s)),new i(n,t.options)}},Z_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-u),new gt(f,1-g),new gt(x,1-p)]:[new gt(a,1-l),new gt(h,1-u),new gt(d,1-g),new gt(m,1-p)]}};function J_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hl=class i extends Ro{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ul=class i extends Ro{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fi=class i extends Kt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let b=P/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+v,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let y=h[p][_+1],v=h[p][_],P=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&d.push(y,v,b),(p!==n-1||l<Math.PI)&&d.push(v,P,b)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class i extends Kt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fl=class extends Ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ge=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zn=class extends ge{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ze=class extends ui{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function K_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Or=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends Or{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ff,endingEnd:Ff}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bf:r=t,a=2*e-n;break;case Of:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bf:o=t,l=2*n-e;break;case Of:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+_*o[c+P]+y*o[l+P]+v*o[u+P];return r}},fu=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},du=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case Bh:e=this.InterpolantFactoryMethodLinear;break;case xc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Bh;case this.InterpolantFactoryMethodSmooth:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&K_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Bh;var Vs=class extends di{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Va;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var pu=class extends di{};pu.prototype.ValueTypeName="color";var mu=class extends di{};mu.prototype.ValueTypeName="number";var gu=class extends Or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},dl=class extends di{InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends di{constructor(t,e,n){super(t,e,n)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Va;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends di{};xu.prototype.ValueTypeName="vector";var yu=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},j_=new yu,vu=class{constructor(t){this.manager=t!==void 0?t:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ms=class extends zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Kc=new me,Vd=new N,Wd=new N,Lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wd),e.updateMatrixWorld(),Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_u=class extends Lo{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Xa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},wi=class extends zr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _u}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xd=new me,fo=new N,jc=new N,Mu=class extends Lo{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),n.position.copy(fo),jc.copy(n.position),jc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jc),n.updateMatrixWorld(),s.makeTranslation(-fo.x,-fo.y,-fo.z),Xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd)}},Xs=class extends zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bu=class extends Lo{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pl=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new bu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ml=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=$d();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $d(){return performance.now()}var Vu="\\[\\]\\.:\\/",Q_=new RegExp("["+Vu+"]","g"),Wu="[^"+Vu+"]",tM="[^"+Vu.replace("\\.","")+"]",eM=/((?:WC+[\/:])*)/.source.replace("WC",Wu),nM=/(WCOD+)?/.source.replace("WCOD",tM),iM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),sM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),rM=new RegExp("^"+eM+nM+iM+sM+"$"),oM=["material","materials","bones","map"],Eu=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Q_,"")}static parseTrackName(t){let e=rM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);oM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Eu;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y1=new Float32Array(1);var qd=new me,gl=class{constructor(t,e,n=0,s=1/0){this.ray=new Lr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qd),this}intersectObject(t,e=!0,n=[]){return Su(t,this,n,e),n.sort(Yd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Su(t[s],this,n,e);return n.sort(Yd),n}};function Yd(i,t){return i.distance-t.distance}function Su(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Su(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);var Ml=class extends An{constructor(){super();let t=new Jt;t.deleteAttribute("uv");let e=new ge({side:We}),n=new ge,s=new Xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new pt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new pt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new pt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new pt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new pt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new pt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new pt(t,Gr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new pt(t,Gr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new pt(t,Gr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new pt(t,Gr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new pt(t,Gr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new pt(t,Gr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gr(i){let t=new Zt;return t.color.setScalar(i),t}var bl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},aM=new Ur(-1,1,1,-1,0,1),Xu=class extends Kt{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},lM=new Xu,ys=class{constructor(t){this._mesh=new pt(lM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,aM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var El=class extends kn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gs.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ys(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Uo=class extends kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Sl=class extends kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Tl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new El(bl),this.copyPass.material.blending=Si,this.clock=new ml}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(o instanceof Uo?n=!0:o instanceof Sl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wl=class extends kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var vp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vr=class i extends kn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new on(r,o,{type:pi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new on(r,o,{type:pi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=vp;this.highPassUniforms=gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new gt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=bl;this.copyUniforms=gs.clone(h.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new ys(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new gt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vr.BlurDirectionX=new gt(1,0);Vr.BlurDirectionY=new gt(0,1);var _p={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Al=class extends kn{constructor(){super();let t=_p;this.uniforms=gs.clone(t.uniforms),this.material=new fl({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ru?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ke=[{id:"rookie",name:"Rookie",type:"hatch",price:0,paint:"#e63946",desc:"Light and forgiving. The perfect car to learn drifting.",stats:{max:38,accel:15,steer:2.5,grip:8,drift:1.9,nitro:3.2}},{id:"kaze",name:"Kaze GT",type:"coupe",price:1200,level:2,paint:"#f4f4f4",desc:"Balanced street coupe. Loves long, smooth slides.",stats:{max:45,accel:18,steer:2.6,grip:9,drift:1.75,nitro:3.4}},{id:"dune",name:"Dune Rally",type:"rally",price:2600,level:4,paint:"#2a9df4",desc:"Rally wagon with quick steering. Snaps into drifts.",stats:{max:46,accel:19.5,steer:2.85,grip:10,drift:2.05,nitro:3.4}},{id:"bull",name:"Bulldog V8",type:"muscle",price:4500,level:6,paint:"#ffb703",desc:"Huge power, little grip. Big angles, big points.",stats:{max:54,accel:24,steer:2.35,grip:7.5,drift:1.55,nitro:3.8}},{id:"vento",name:"Vento S",type:"super",price:8e3,level:9,paint:"#06d6a0",desc:"Mid-engine supercar. Fast and precise.",stats:{max:58,accel:25,steer:2.7,grip:11,drift:1.8,nitro:4}},{id:"zenith",name:"Zenith X",type:"hyper",price:14e3,level:12,paint:"#7b2ff7",desc:"The king. Brutal speed and the longest nitro.",stats:{max:65,accel:29,steer:2.8,grip:12,drift:1.9,nitro:4.6}}],Rn=[{id:"harbor",laps:3,drift:3e4,name:"Sunset Harbor",theme:"harbor",need:0,seed:11,pts:12,R:175,irr:.38,halfW:12,minR:38,len:1500,grip:1,hills:2.5,jumps:1,tunnel:!1,boosts:3,zones:2,stars:[8e3,22e3,45e3],blurb:"Seaside sweepers, a jump and boost pads."},{id:"canyon",laps:3,drift:4e4,name:"Red Canyon",theme:"canyon",need:2,seed:23,pts:13,R:200,irr:.45,halfW:12,minR:40,len:1750,grip:1,hills:9,jumps:2,tunnel:!1,boosts:3,zones:3,stars:[9e3,26e3,52e3],blurb:"Desert hills, two big jumps, hairpins."},{id:"alpine",laps:2,drift:35e3,name:"Alpine Pass",theme:"alpine",need:4,seed:37,pts:14,R:225,irr:.46,halfW:12,minR:44,len:2e3,grip:.88,hills:14,jumps:1,tunnel:!0,boosts:2,zones:3,stars:[9e3,26e3,52e3],blurb:"Snowy mountain road with a tunnel. Low grip."},{id:"autumn",laps:2,drift:4e4,name:"Autumn Hills",theme:"autumn",need:7,seed:61,pts:12,R:240,irr:.4,halfW:12.5,minR:46,len:2150,grip:1,hills:12,jumps:2,tunnel:!1,boosts:3,zones:3,stars:[1e4,28e3,56e3],blurb:"Rolling countryside, crests and fast flicks."},{id:"neon",laps:2,drift:45e3,name:"Neon City",theme:"neon",need:10,seed:51,pts:12,R:255,irr:.4,halfW:13,minR:50,len:2300,grip:1,hills:0,jumps:1,tunnel:!0,boosts:4,zones:3,stars:[1e4,28e3,56e3],blurb:"Night city, neon tunnel, lots of boost."},{id:"volcano",laps:2,drift:45e3,name:"Volcano Ridge",theme:"volcano",need:13,seed:77,pts:12,R:260,irr:.42,halfW:13,minR:52,len:2400,grip:.95,hills:10,jumps:2,tunnel:!0,boosts:3,zones:3,stars:[11e3,3e4,6e4],blurb:"Lava fields, lava tunnel, huge air."}],Mp={harbor:{skyTop:"#3d6fb0",skyBottom:"#ffb37a",fog:"#f4b88c",ground:"#8d9196",outer:"#2f78a8",light:"#ffd8b0",lightInt:2.6,hemiSky:"#ffd2b0",hemiGround:"#5b6470",hemiInt:1.1,accent:"#ff7a3d",kerb:["#e63946","#f4f4f4"],night:!1,clouds:"#ffd9c2",bloom:[.35,.85]},canyon:{skyTop:"#3f8ee0",skyBottom:"#f6dcb0",fog:"#f0cfa0",ground:"#d4935a",outer:"#c47c45",light:"#fff1d6",lightInt:3,hemiSky:"#cfe6ff",hemiGround:"#a8653a",hemiInt:1.2,accent:"#ffb703",kerb:["#d62828","#fff3e0"],night:!1,clouds:"#ffffff",bloom:[.3,.9]},alpine:{skyTop:"#6aa9ef",skyBottom:"#eef5ff",fog:"#e8f1fb",ground:"#f3f7fc",outer:"#e6eef8",light:"#ffffff",lightInt:2.5,hemiSky:"#dbeaff",hemiGround:"#9fb1c6",hemiInt:1.3,accent:"#2a9df4",kerb:["#1d4ed8","#f4f4f4"],night:!1,clouds:"#ffffff",bloom:[.25,.95]},autumn:{skyTop:"#5d9ad6",skyBottom:"#f9e3c0",fog:"#eedab9",ground:"#7d8f3f",outer:"#6f8238",light:"#ffe6bf",lightInt:2.8,hemiSky:"#ffe8c8",hemiGround:"#55602a",hemiInt:1.15,accent:"#ff8a1f",kerb:["#c0392b","#f4f4f4"],night:!1,clouds:"#fff3e3",bloom:[.3,.9]},neon:{skyTop:"#040611",skyBottom:"#251046",fog:"#1a0d33",ground:"#10131b",outer:"#0b0d14",light:"#8aa0ff",lightInt:.5,hemiSky:"#5a4aa0",hemiGround:"#120a20",hemiInt:.55,accent:"#ff2bd6",kerb:["#ff2bd6","#1de9ff"],night:!0,bloom:[.6,.62]},volcano:{skyTop:"#140606",skyBottom:"#7a2412",fog:"#3a1308",ground:"#2b2422",outer:"#221c1a",light:"#ffb27a",lightInt:.9,hemiSky:"#ff8a5a",hemiGround:"#1a0c08",hemiInt:.6,accent:"#ff5a1f",kerb:["#ff5a1f","#2b2422"],night:!0,bloom:[.45,.74]}},Rl=["#e63946","#ff7a1a","#ffb703","#f7e733","#06d6a0","#2bb673","#2a9df4","#1d4ed8","#7b2ff7","#ff4fa3","#f4f4f4","#9aa3ad","#3a3f47","#111317","#8b5a2b","#00b4b4"],Cl=["#d0d4d8","#202226","#ffcc33","#e63946","#2a9df4","#ffffff","#ff4fa3","#06d6a0"],bp=["#1de9ff","#ff2bd6","#7cff4f","#ff7a1a","#9d5cff","#ff3355"],Ep=["#ffffff","#ff8fd0","#7fe9ff","#ffe066","#8cff7a","#b48cff","#ff9a5c","#3a3a3a"],vs={finish_metal:{name:"Metallic paint",price:250},finish_matte:{name:"Matte paint",price:300},rim_1:{name:"Sport rims",price:200},rim_2:{name:"Turbo rims",price:400},spoiler_1:{name:"Ducktail spoiler",price:300},spoiler_2:{name:"GT wing",price:700},stripes:{name:"Racing stripes",price:250},neon:{name:"Underglow neon",price:600},smoke:{name:"Colored tire smoke",price:400}},Sp=[300,700,1400,2500],Tp=[[15e3,"LEGENDARY"],[8e3,"INSANE"],[4e3,"AWESOME"],[1500,"GREAT"],[400,"NICE"]],wp=[400,250,150,80],Ap=[300,200,120,60],_s=i=>400+i*250,Rp=i=>200+i*50,Wr={chain:{text:"Score {n} in a single drift",type:"best",stat:"bestChain",t:[1500,3e3,5e3,8e3,12e3,18e3],fmt:"n"},score:{text:"Score {n} in one race",type:"best",stat:"score",t:[8e3,15e3,25e3,4e4,6e4,85e3],fmt:"n"},coins:{text:"Collect {n} track coins",type:"sum",stat:"coins",t:[30,60,100,150,220],fmt:"n"},air:{text:"Fly {n}s in one jump",type:"best",stat:"bestAir",t:[.8,1.1,1.3,1.5,1.7],fmt:"s"},pads:{text:"Hit {n} boost pads",type:"sum",stat:"pads",t:[5,10,18,30],fmt:"n"},ultra:{text:"Fire {n} Ultra Turbos",type:"sum",stat:"ultra",t:[1,3,6,10],fmt:"n"},turbos:{text:"Fire {n} drift turbos",type:"sum",stat:"turbos",t:[5,15,30,50],fmt:"n"},laps:{text:"Drive {n} laps",type:"sum",stat:"laps",t:[3,6,10,16],fmt:"n"},zone:{text:"Score {n} in drift zones",type:"sum",stat:"zonePts",t:[3e3,8e3,15e3,3e4],fmt:"n"},speed:{text:"Reach {n} km/h",type:"best",stat:"topSpeed",t:[190,220,245,270],fmt:"n"},races:{text:"Finish {n} races",type:"sum",stat:"races",t:[2,4,7,10],fmt:"n"},wins:{text:"Win {n} races",type:"sum",stat:"wins",t:[1,3,6,10],fmt:"n"},podiums:{text:"Finish top 3 in {n} races",type:"sum",stat:"podiums",t:[2,5,9,14],fmt:"n"}},$u=i=>150+i*100;function Zu(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}var cM=2,Yu=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function hM(i,t){let e=Zu(i.seed*7919+t*104729+1),n=[];for(let u=0;u<i.pts;u++){let f=u/i.pts*Math.PI*2+(e()-.5)*(Math.PI*2/i.pts)*.75,d=i.R*(1-i.irr+i.irr*2*e()*.9);n.push(new N(Math.cos(f)*d*1.3,0,Math.sin(f)*d))}let s=new Ao(n,!0,"centripetal",.5),r=s.getLength(),o=Math.round(r/cM),a=s.getSpacedPoints(o);a.pop();let l=a.length,c=new Float32Array(l),h=new Float32Array(l);for(let u=0;u<l;u++)c[u]=a[u].x,h[u]=a[u].z;return{x:c,z:h,n:l,L:r}}function uM(i){let{x:t,z:e,n}=i,s=new Float32Array(n),r=new Float32Array(n),o=new Float32Array(n);for(let a=0;a<n;a++){let l=(a+n-1)%n,c=(a+1)%n,h=t[c]-t[l],u=e[c]-e[l],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}for(let a=0;a<n;a++){let l=(a+n-3)%n,c=(a+3)%n,h=Math.atan2(s[c],r[c])-Math.atan2(s[l],r[l]);h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI),o[a]=h/(6*i.L/n)}return{tx:s,tz:r,curv:o}}function fM(i,t,e){let{x:n,z:s,n:r}=i,o=i.L/r,a=e.halfW,l=e.minR||40,c=e.len||1450;for(let d=0;d<r;d++)if(Math.abs(t.curv[d])>1/l)return!1;let h=2*(a+2)+12,u=Math.round(70/o),f=h*h;for(let d=0;d<r;d+=2)for(let g=d+u;g<r;g+=2){if(r-(g-d)<u)continue;let x=n[d]-n[g],m=s[d]-s[g];if(x*x+m*m<f)return!1}return i.L>c*.72&&i.L<c*1.35}function $s(i,t){let e=[],n=-1,s=-1;for(let r=0;r<i;r++)t(r)?n<0&&(n=r):n>=0&&(e.push([n,r-1]),n=-1);return n>=0&&(e.length&&e[0][0]===0?e[0][0]=n-i:e.push([n,i-1])),e.map(([r,o])=>({a:r,b:o,len:o-r+1}))}function dM(i,t,e){let n=i.n,s=i.L/n,r=h=>Math.abs(t.curv[(h%n+n)%n]),o=e.minR||40,a=$s(n,h=>r(h)>1/(o*2)),l=a.filter(h=>h.len*s>60),c=$s(n,h=>r(h)<1/220).filter(h=>h.len*s>90);return a.length*2+Math.min(l.length,4)*2+Math.min(c.length,3)*3-Math.abs(i.L-(e.len||1450))/250}function pM(i){let t=Zu(i.seed*13+7),e=i.hills||0,n=[[.0058,.0047,1],[.0117,.0091,.42],[.023,.019,.16]].map(([s,r,o])=>({fx:s*(.8+t()*.4),fz:r*(.8+t()*.4),px:t()*6.28,pz:t()*6.28,a:e*o}));return(s,r)=>{let o=0;for(let a of n)o+=a.a*Math.sin(s*a.fx+a.px)*Math.cos(r*a.fz+a.pz);return o}}function qu(i,t,e){let n=i.length,s=Float32Array.from(i);for(let r=0;r<e;r++){let o=new Float32Array(n),a=0;for(let l=-t;l<=t;l++)a+=s[(l%n+n)%n];for(let l=0;l<n;l++)o[l]=a/(2*t+1),a+=s[(l+t+1)%n]-s[((l-t)%n+n)%n];s=o}return s}function Cp(i){let t=null,e=-1e9,n=0;for(let X=0;X<1500&&n<24;X++){let ht=hM(i,X),Rt=uM(ht);if(!fM(ht,Rt,i))continue;n++;let et=dM(ht,Rt,i);et>e&&(e=et,t={c:ht,f:Rt})}if(!t)throw new Error("No valid track for "+i.id);let s=qu(t.f.curv,2,1),r=t.c.n,o=t.c.L,a=o/r,l=$s(r,X=>Math.abs(s[(X%r+r)%r])<1/200).sort((X,ht)=>ht.len-X.len)[0]||{a:0,len:1},c=((l.a+Math.min(15,l.len>>2))%r+r)%r,h=X=>Float32Array.from({length:r},(ht,Rt)=>X[(Rt+c)%r]),u=h(t.c.x),f=h(t.c.z),d=h(t.f.tx),g=h(t.f.tz),x=h(s),m=new Float32Array(r),p=new Float32Array(r),_=new Float32Array(r);for(let X=0;X<r;X++)m[X]=g[X],p[X]=-d[X],_[X]=X*a;let y=X=>Math.abs(x[(X%r+r)%r]),v=$s(r,X=>y(X)<1/200).sort((X,ht)=>ht.len-X.len),P=pM(i),b=new Float32Array(r);for(let X=0;X<r;X++)b[X]=P(u[X],f[X]);b=qu(b,22,3);let w={def:i,x:u,z:f,tx:d,tz:g,nx:m,nz:p,s:_,curv:x,n:r,L:o,halfW:i.halfW,H:P,h:b,bank:null,jumps:[],tunnel:null,pads:[],zones:[],coins:[]},I=[],S=(X,ht)=>I.every(([Rt,et])=>ht<Rt-15||X>et+15),M=X=>(X%r+r)%r,C=0;w.start=0,I.push([-25,25],[r-25,r+25]);let z=$s(r,X=>y(X)<1/110).filter(X=>X.len*a>80).sort((X,ht)=>ht.len-X.len);for(let X of z){if(w.jumps.length>=i.jumps)break;let ht=X.a+Math.round(40/a),Rt=ht-Math.round(26/a),et=ht+Math.round(32/a);if(!(et>X.b+10||!S(Rt,et))){for(let ft=Rt;ft<=et;ft++){let Pt=(ft-ht)*a,bt=Pt<=0?3.2*Yu(-26,0,Pt)**1.4:3.2*(1-Yu(0,30,Pt));b[M(ft)]+=bt}w.jumps.push({i:M(ht),a:M(Rt),b:M(et)}),I.push([Rt,et])}}if(w.bank=qu(Float32Array.from(x,X=>Math.max(-.13,Math.min(.13,-X*120))),6,2),i.tunnel){let X=Math.round(120/a);for(let ht=Math.round(r*.35);ht<r*.9;ht+=7)if(S(ht,ht+X)){w.tunnel={a:ht,b:ht+X},I.push([ht,ht+X]);break}}let T=$s(r,X=>y(X)>1/((i.minR||40)*1.6)).map(X=>{let ht=0;for(let Rt=X.a;Rt<=X.b;Rt++)ht=Math.max(ht,y(Rt));return{...X,m:ht}}).sort((X,ht)=>ht.m-X.m);for(let X of T){if(w.zones.length>=i.zones)break;let ht=X.a-Math.round(12/a),Rt=X.b+Math.round(12/a);!S(ht,Rt)||(Rt-ht)*a>220||(w.zones.push({a:ht,b:Rt,sa:ht*a,sb:Rt*a}),I.push([ht,Rt]))}let k=[-.45,.45,0],G=$s(r,X=>y(X)<1/140).filter(X=>X.len*a>40).sort((X,ht)=>ht.len-X.len);for(let X of G){if(w.pads.length>=i.boosts)break;let ht=X.a+Math.round(X.len*.55);S(ht-5,ht+5)&&(w.pads.push({i:M(ht),s:M(ht)*a,lat:k[w.pads.length%3]*i.halfW}),I.push([ht-5,ht+5]))}let W=Zu(i.seed*3+1);for(let X=C+40;X<C+r-30;X+=Math.round(95/a)){let ht=W()*6.28,Rt=i.halfW*(.25+W()*.35);for(let et=0;et<6;et++){let ft=M(X+et*3);w.jumps.some(Pt=>Math.abs(M(ft-Pt.i+r/2)-r/2)<20)||w.coins.push({i:ft,lat:Math.sin(ht+et*.6)*Rt})}}w.h=b,w.slope=new Float32Array(r);for(let X=0;X<r;X++)w.slope[X]=(b[(X+1)%r]-b[(X+r-1)%r])/(2*a);let st=1e9,j=-1e9,Q=1e9,ut=-1e9;for(let X=0;X<r;X++)st=Math.min(st,u[X]),j=Math.max(j,u[X]),Q=Math.min(Q,f[X]),ut=Math.max(ut,f[X]);return w.bounds={minX:st,maxX:j,minZ:Q,maxZ:ut},w.grid=mM(w),w}function Pp(i,t,e,n,s){let{x:r,z:o,n:a}=i,l=1e18,c=n;if(s){for(let h=0;h<a;h++){let u=t-r[h],f=e-o[h],d=u*u+f*f;d<l&&(l=d,c=h)}return c}for(let h=-40;h<=40;h++){let u=((n+h)%a+a)%a,f=t-r[u],d=e-o[u],g=f*f+d*d;g<l&&(l=g,c=u)}return c}function Ju(i,t,e,n){let s=t-i.x[n],r=e-i.z[n];return{lat:s*i.nx[n]+r*i.nz[n],along:i.s[n]+s*i.tx[n]+r*i.tz[n]}}function Pl(i,t,e,n){let s=i.n,r=i.L/s,o=n-i.s[e];o<-i.L/2&&(o+=i.L),o>i.L/2&&(o-=i.L);let a=o>=0?(e+1)%s:(e+s-1)%s,l=Math.min(1,Math.abs(o)/r);return t[e]+(t[a]-t[e])*l}function Ip(i,t,e){let n=i.n,s=i.L/n,r=e-i.s[t];r<-i.L/2&&(r+=i.L),r>i.L/2&&(r-=i.L);let o=r>=0?(t+1)%n:(t+n-1)%n,a=Math.min(1,Math.abs(r)/s);return i.h[t]+(i.h[o]-i.h[t])*a}function mM(i){let e=new Map;for(let n=0;n<i.n;n++){let s=Math.floor(i.x[n]/30)+","+Math.floor(i.z[n]/30);(e.get(s)||e.set(s,[]).get(s)).push(n)}return{C:30,cells:e}}function Il(i,t,e,n=90){let{C:s,cells:r}=i.grid,o=Math.floor(t/s),a=Math.floor(e/s),l=Math.ceil(n/s),c=n*n,h=-1;for(let u=-l;u<=l;u++)for(let f=-l;f<=l;f++){let d=r.get(o+u+","+(a+f));if(d)for(let g of d){let x=t-i.x[g],m=e-i.z[g],p=x*x+m*m;p<c&&(c=p,h=g)}}return{i:h,d:Math.sqrt(c)}}function Ku(i,t,e){let n=i.H(t,e),s=Il(i,t,e,90);if(s.i<0)return{y:n,d:999};let r=s.i,o=(t-i.x[r])*i.nx[r]+(e-i.z[r])*i.nz[r],a=Math.max(-(i.halfW+3),Math.min(i.halfW+3,o)),l=i.h[r]+a*Math.sin(i.bank[r])-.35,c=Yu(i.halfW+3,i.halfW+30,s.d);return{y:l*(1-c)+n*c,d:s.d}}function Cn(i,t,e){return Ku(i,t,e).y}function Xr(i,t,e){return Il(i,t,e,140).d}var gM=1.05,Lp=22,Fo=[0,.9,2.1,3.5];var Hn={engine:{max:.022,accel:.035},grip:{steer:.01,grip:.03,drift:.03,latG:.03},nitro:{nitro:.08}};function Bo(i,t){let e=i.stats,n=t.engine||0,s=t.grip||0,r=t.nitro||0;return{max:e.max*(1+Hn.engine.max*n),accel:e.accel*(1+Hn.engine.accel*n),steer:e.steer*(1+Hn.grip.steer*s),grip:e.grip*(1+Hn.grip.grip*s),drift:e.drift*(1+Hn.grip.drift*s),nitroDur:e.nitro*(1+Hn.nitro.nitro*r),latG:(28+e.grip*1.6)*(1+Hn.grip.latG*s)}}var No={max:70.8,accel:33.1,hand:39.2,nitro:6.1,drift:2.2},xM=[[0,"D","#9aa3c0"],[650,"C","#3fe0a0"],[750,"B","#3fa9ff"],[850,"A","#c05bff"],[950,"S","#ff8a1f"],[1050,"S+","#ff2e6e"]];function Zn(i,t={}){let e=Bo(i,t),n=e.steer*e.grip,s=Math.round(e.max*9+e.accel*6+n*4.5+e.nitroDur*22),r=[...xM].reverse().find(o=>s>=o[0]);return{pr:s,cls:r[1],color:r[2],bars:{speed:e.max/No.max,accel:e.accel/No.accel,hand:n/No.hand,nitro:e.nitroDur/No.nitro,drift:e.drift/No.drift}}}var Ll=class{constructor(t,e,n={}){var a;this.tr=t,this.st={...e},this.baseMax=e.max,this.gripMul=t.def.grip,this.ai=!!n.ai,this.laps=n.laps||3,this.wallOff=t.halfW+1.4-gM,this.lineOff=n.lineOff||0;let s=t.n,r=(a=n.startIdx)!=null?a:s-7,o=n.lat||0;this.car={x:t.x[r]+t.nx[r]*o,z:t.z[r]+t.nz[r]*o,y:t.h[r],vy:0,air:!1,airT:0,pitch:0,bank:0,yOff:0,h:Math.atan2(t.tx[r],t.tz[r]),vx:0,vz:0,steer:0,drifting:!1,dDir:1,slipA:0,flipT:0,lastSteer:1,nitro:.35,nitroOn:!1,boostT:0,charge:0,tier:0,speed:0,slip:0,vF:0,yawRate:0,under:0,kerb:!1,draft:0,draftOn:!1},this.idx=r,this.along=Ju(t,this.car.x,this.car.z,r).along,this.total=this.along-t.L,this.maxTotal=this.total,this.cpLen=t.L/4,this.nextCp=1,this.lap=0,this.cps=0,this.time=0,this.lapStart=0,this.lapTimes=[],this.finished=!1,this.score=0,this.coins=0,this.coinTaken=new Uint8Array(t.coins.length),this.padLock=new Float32Array(t.pads.length),this.chain={pts:0,t:0,idle:0,mult:1,close:!1,zone:!1},this.stats={pads:0,turbos:0,ultra:0,zonePts:0,topSpeed:0},this.running=!1,this.over=!1,this.wrongWay=!1,this.lat=0,this.bestChain=0,this.inZone=!1,this.bestAir=0}update(t,e){let n=[],s=this.car,r=this.st,o=this.gripMul,a=this.tr;this.running||(e={steer:0,drift:!1,brake:this.over,nitro:!1});let l=s.air?e.steer*.3:e.steer;s.steer+=(l-s.steer)*Math.min(1,t*(Math.abs(l)>Math.abs(s.steer)?7:11)),Math.abs(e.steer)>.1&&(s.lastSteer=Math.sign(e.steer));let c=Math.sin(s.h),h=Math.cos(s.h),u=-Math.cos(s.h),f=Math.sin(s.h),d=s.vx*c+s.vz*h,g=s.vx*u+s.vz*f,x=Math.hypot(s.vx,s.vz);s.nitroOn=!!e.nitro&&s.nitro>0&&d>5&&this.running,s.nitroOn&&(s.nitro=Math.max(0,s.nitro-t/r.nitroDur)),s.boostT=Math.max(0,s.boostT-t);let m=s.nitroOn||s.boostT>0,p=r.max*(s.nitroOn?1.28:1)*(s.boostT>0?1.18:1)*(s.draftOn?1.08:1)*(this.cool?.55:1),_=r.accel*(m?1.9:s.draftOn?1.3:1),y=s.nitroOn||e.gas===void 0?1:Math.max(0,Math.min(1,e.gas)),v=Q=>Math.sign(Q)*Math.min(Math.abs(Q),(2.2+Math.abs(Q)*.022)*t);s.air||(e.brake?(d-=(d>0?30:9)*t,d<-9&&(d=-9)):this.running&&y>.02?d+=_*Math.max(-1.5,y-d/p)*t:this.running?d-=v(d):d*=Math.exp(-.25*t));let P=Math.min(1,x/10)*(1-.3*Math.min(1,x/60));if(e.drift&&x>8&&!s.drifting&&d>0&&!s.air&&(s.drifting=!0,s.held=!0,s.dDir=Math.abs(s.steer)>.12?Math.sign(s.steer):s.lastSteer,s.slipA=Math.max(0,s.slipA||0),s.angV=0,s.charge=0,s.tier=0,s.flipT=0,n.push({type:"flick"})),s.drifting){s.under=0;let Q=e.drift&&s.held;if(!e.drift&&s.held){if(s.held=!1,s.tier>0&&this.running){let ft=Math.sin(s.h-s.dDir*0),Pt=Math.cos(s.h),bt=Math.min([0,7,10,14][s.tier],r.max*1.35-x),Ut=Math.atan2(s.vx,s.vz);bt>0&&(s.vx+=Math.sin(Ut)*bt,s.vz+=Math.cos(Ut)*bt),s.boostT=Math.max(s.boostT,[0,.7,1.1,1.6][s.tier]),n.push({type:"turbo",tier:s.tier}),this.stats.turbos++,s.tier===3&&this.stats.ultra++}s.charge=0,s.tier=0}let ut=s.steer*s.dDir;Q&&ut<-.65?s.flipT+=t:s.flipT=Math.max(0,s.flipT-t*2);let X=Q?.55+.35*ut:0;s.flipT>.25&&(X=-.45),s.air||(s.angV+=(36*(X-s.slipA)-11*s.angV)*t,s.slipA+=s.angV*t),s.slipA<0&&(Q&&s.flipT>.25?(s.dDir=-s.dDir,s.slipA=-s.slipA,s.angV=-s.angV,s.flipT=0,n.push({type:"switch"})):(s.slipA=0,s.angV=0)),s.slipA=Math.min(1.05,s.slipA);let ht=Math.atan2(s.vx,s.vz),Rt=x;if(!s.air){let ft=r.steer*P*.95*(.85+.15*o),Pt=Q?.35+.55*Math.max(-.6,ut):.6*Math.max(0,ut)*(s.slipA/.5);ht-=s.dDir*Math.max(0,Pt)*ft*t,this.running&&(e.brake?Rt=Math.max(0,Rt-16*t):y>.02?Rt+=_*Math.max(-1.5,y-Rt/p)*.94*t:Rt-=v(Rt)*1.6),Rt*=1-.05*Math.sin(s.slipA)*t}s.h=ht-s.dDir*s.slipA,s.vx=Math.sin(ht)*Rt,s.vz=Math.cos(ht)*Rt;let et=s.slipA;if(s.sweet=Q&&et>.42&&et<.92,Q&&et>.25&&!s.air){s.charge+=t*(s.sweet?1.2:.7);let ft=s.charge>Fo[3]?3:s.charge>Fo[2]?2:s.charge>Fo[1]?1:0;ft>s.tier&&(s.tier=ft,n.push({type:"charge",tier:ft}))}(!Q&&s.slipA<.03||Rt<5)&&(s.drifting=!1,s.slipA=0,s.angV=0,s.sweet=!1,s.held=!1,s.charge=0,s.tier=0,s.yawRate=0)}else{s.air||(g*=Math.exp(-r.grip*1.7*o*t)),s.vx=c*d+u*g,s.vz=h*d+f*g;let Q=s.steer*r.steer*P*(s.air?.25:1);d<0&&(Q=-Q);let ut=r.latG*o/Math.max(6,x);s.under=Math.max(0,Math.abs(Q)-ut)/Math.max(.01,Math.abs(Q)),s.air||(Q=Math.max(-ut,Math.min(ut,Q))),s.yawRate+=(Q-s.yawRate)*Math.min(1,t*14),s.h-=s.yawRate*t}if(!this.ai&&!s.air&&x>6){let Q=this.idx,ut=a.nx[Q],X=a.nz[Q],ht=Math.atan2(a.tx[Q],a.tz[Q]),Rt=s.vx*ut+s.vz*X,et=this.lat,ft=a.halfW-.6,Pt=et+Rt*.55,bt=Math.abs(Pt)-ft,Ut=0;if(bt>0&&Math.sign(Rt)===Math.sign(Pt)){let Nt=Math.atan2(s.vx,s.vz),zt=ht-Nt;zt=Math.atan2(Math.sin(zt),Math.cos(zt)),Ut=Math.sign(zt)*Math.min(Math.abs(zt)+.05,(s.drifting?1.25:.95)*Math.min(1,bt/2.2))*t}else if(!s.drifting&&Math.abs(e.steer)<.1){let Nt=ht-s.h;Nt=Math.atan2(Math.sin(Nt),Math.cos(Nt)),Math.abs(Nt)<.12&&(Ut=Nt*1.6*t)}if(Ut){let Nt=Math.cos(Ut),zt=Math.sin(Ut),oe=s.vx*Nt+s.vz*zt,mt=-s.vx*zt+s.vz*Nt;s.vx=oe,s.vz=mt,s.h+=Ut}}s.x+=s.vx*t,s.z+=s.vz*t,this.idx=Pp(a,s.x,s.z,this.idx,!1);let b=Ju(a,s.x,s.z,this.idx);if(this.lat=b.lat,Math.abs(b.lat)>this.wallOff){let Q=Math.sign(b.lat),ut=a.nx[this.idx]*Q,X=a.nz[this.idx]*Q,ht=Math.abs(b.lat)-this.wallOff;s.scrape=.1,s.scrapeX=s.x+ut*1.05,s.scrapeZ=s.z+X*1.05,s.x-=ut*ht,s.z-=X*ht;let Rt=s.vx*ut+s.vz*X;if(Rt>0){let et=Math.max(1,Math.hypot(s.vx,s.vz)),ft=Math.min(1,Rt/et);s.vx-=ut*Rt*1.06,s.vz-=X*Rt*1.06;let Pt=1-Math.min(.32,.03+ft*.42);if(s.vx*=Pt,s.vz*=Pt,!s.drifting&&!this.ai){let Nt=Math.atan2(s.vx,s.vz)-s.h;Nt=Math.atan2(Math.sin(Nt),Math.cos(Nt)),s.h+=Nt*Math.min(1,.35+ft*1.5),s.yawRate*=.5}Rt>3&&n.push({type:"hit",impact:Rt,x:s.x+ut*1.1,z:s.z+X*1.1});let bt=Math.sign(ut*-Math.cos(s.h)+X*Math.sin(s.h))||1;s.hitKick=bt*Math.min(.9,Rt*.07),Rt>11&&ft>.3&&this.running&&(this.chain.pts>0&&n.push({type:"crash",lost:Math.round(this.chain.pts)}),this.resetChain(),s.charge=0,s.tier=0)}}let w=Ip(a,this.idx,b.along);if(s.yOff=b.lat*Math.sin(Pl(a,a.bank,this.idx,b.along)),s.gy=w+s.yOff,s.air){if(s.vy-=Lp*t,s.y+=s.vy*t,s.airT+=t,s.y<=w){if(s.y=w,s.air=!1,s.airT>.15&&n.push({type:"land",airT:s.airT,impact:-s.vy}),s.airT>.35&&this.running){let Q=Math.round(s.airT*1400);this.score+=Q,this.bestAir=Math.max(this.bestAir,s.airT),n.push({type:"air",pts:Q,t:s.airT})}s.airT>.5&&Math.abs(s.slip)<.25&&this.running&&(s.boostT=Math.max(s.boostT,.8),n.push({type:"perfectLand"})),s.vy=0}}else{let Q=(w-s.y)/Math.max(t,1e-4);Q<s.vy-Lp*t*2&&x>14&&s.vy>.8?(s.air=!0,s.airT=0,s.y+=s.vy*t):(s.vy=Q,s.y=w)}s.pitch=s.air?Math.atan2(s.vy,Math.max(5,x))*.6:Math.atan(Pl(a,a.slope,this.idx,b.along)*Math.cos(s.h-Math.atan2(a.tx[this.idx],a.tz[this.idx]))),s.bank=s.air?s.bank*.95:Pl(a,a.bank,this.idx,b.along);let I=b.along-this.along;I<-a.L/2&&(I+=a.L),I>a.L/2&&(I-=a.L),this.along=b.along,this.total+=I,this.maxTotal=Math.max(this.maxTotal,this.total),this.wrongWay=this.running&&this.total<this.maxTotal-30,s.kerb=!s.air&&Math.abs(b.lat)>a.halfW-.2;let S=Math.hypot(s.vx,s.vz);s.speed=S,s.vF=d,this.running&&(this.stats.topSpeed=Math.max(this.stats.topSpeed,S*3.6));let M=Math.sin(s.h),C=Math.cos(s.h),z=-Math.cos(s.h),T=Math.sin(s.h);if(s.slip=S>3?Math.atan2(s.vx*z+s.vz*T,s.vx*M+s.vz*C):0,!this.running)return n;this.time+=t;let k=(b.along%a.L+a.L)%a.L;for(;this.total>=this.nextCp*this.cpLen;)this.cps++,this.nextCp%4===0?(this.lap++,this.lapTimes.push(this.time-this.lapStart),this.lapStart=this.time,this.lap>=this.laps&&!this.finished?(this.finished=!0,this.finishTime=this.time,this.ai?this.cool=!0:(this.chain.pts>0&&this.bank(n),this.running=!1,this.over=!0,s.drifting=!1),n.push({type:"finish",time:this.time})):n.push({type:"lap",lap:this.lap,final:this.lap===this.laps-1})):(s.nitro=Math.min(1,s.nitro+.1),n.push({type:"cp"})),this.nextCp++;if(a.pads.forEach((Q,ut)=>{if(this.padLock[ut]>0){this.padLock[ut]-=t;return}let X=k-Q.s;if(X>a.L/2&&(X-=a.L),X<-a.L/2&&(X+=a.L),Math.abs(X)<3.2&&Math.abs(b.lat-Q.lat)<3.6&&!s.air){let ht=Math.min(12,r.max*1.4-S);ht>0&&(s.vx+=M*ht,s.vz+=C*ht),s.boostT=Math.max(s.boostT,1.3),s.nitro=Math.min(1,s.nitro+.08),this.padLock[ut]=2,this.stats.pads++,n.push({type:"pad"})}}),this.ai)return n;for(let Q=0;Q<a.coins.length;Q++){if(this.coinTaken[Q])continue;let ut=a.coins[Q],X=ut.i-this.idx;X>a.n/2&&(X-=a.n),X<-a.n/2&&(X+=a.n),Math.abs(X)<=2&&Math.abs(b.lat-ut.lat)<1.9&&s.y<a.h[ut.i]+3&&(this.coinTaken[Q]=1,this.coins++,s.nitro=Math.min(1,s.nitro+.02),n.push({type:"coin",k:Q}))}n.some(Q=>Q.type==="lap")&&this.coinTaken.fill(0);let G=a.zones.find(Q=>k>=Q.sa&&k<=Q.sb||k-a.L>=Q.sa&&k-a.L<=Q.sb);!!G!==this.inZone&&(this.inZone=!!G,n.push({type:this.inZone?"zoneIn":"zoneOut"}));let W=Math.abs(s.slipA)*57.3,st=this.chain,j=s.drifting&&!s.air&&S>10&&W>10;if(st.close=j&&Math.abs(b.lat)>this.wallOff-2.2,st.zone=j&&this.inZone,j){let Q=W*S*.35*t*(s.nitroOn||s.boostT>0?1.5:1)*(st.close?1.6:1)*(st.zone?2:1);st.pts+=Q,st.zone&&(this.stats.zonePts+=Q*st.mult),st.t+=t,st.idle=0,st.mult=Math.min(5,1+Math.floor(st.t/2.5)),s.nitro=Math.min(1,s.nitro+t*.07)}else st.pts>0&&(st.idle+=t,st.idle>1.3&&this.bank(n));return this.time>480&&!this.finished&&(this.finished=!0,this.finishTime=this.time,st.pts>0&&this.bank(n),this.running=!1,this.over=!0,n.push({type:"finish",time:this.time})),n}bank(t){let e=this.chain,n=Math.round(e.pts*e.mult);if(n>0){this.score+=n,this.bestChain=Math.max(this.bestChain,n);let s=Tp.find(r=>n>=r[0]);t.push({type:"bank",pts:n,label:s?s[1]:""}),this.car.nitro=Math.min(1,this.car.nitro+n/25e3)}this.resetChain()}resetChain(){Object.assign(this.chain,{pts:0,t:0,idle:0,mult:1,close:!1,zone:!1})}},Dp=i=>({back:7+Math.floor(i/2)*6,lat:i%2?3.4:-3.4}),Dl=class{constructor(t,e,n,s=3){let r=t.n;this.tr=t,this.rivals=n.map((a,l)=>{let c=Dp(l);return new Ll(t,a,{ai:!0,laps:s,startIdx:r-c.back,lat:c.lat,lineOff:(l-1)*.28})});let o=Dp(n.length);this.player=new Ll(t,e,{laps:s,startIdx:r-o.back,lat:o.lat}),this.all=[...this.rivals,this.player],this.order=[]}start(t){for(let e of this.all)e.running=!0;if(t){let e=this.player.car;e.boostT=1.4,e.vx+=Math.sin(e.h)*14,e.vz+=Math.cos(e.h)*14}}get running(){return this.player.running}update(t,e,n){let s=this.player;for(let u of this.rivals){let f=u.total-s.total,d=f>120?.93:f<-100?1.1:1;u.st.max+=(u.baseMax*d-u.st.max)*Math.min(1,t),u.update(t,u.running?n(u):{steer:0,drift:!1,brake:!1,nitro:!1}),u.finished&&!this.order.includes(u)&&this.order.push(u)}let r=s.car,o=Math.sin(r.h),a=Math.cos(r.h),l=!1;for(let u of this.rivals){let f=u.car.x-r.x,d=u.car.z-r.z,g=f*o+d*a,x=Math.abs(f*a-d*o);g>3&&g<16&&x<2.4&&r.speed>20&&(l=!0)}r.draft=l?Math.min(1.5,r.draft+t):Math.max(0,r.draft-t*2);let c=r.draftOn;r.draftOn=r.draft>.45;let h=s.update(t,e);return r.draftOn&&!c&&h.push({type:"draft"}),s.finished&&!this.order.includes(s)&&this.order.push(s),this.collide(h),h}collide(t){let e=this.all;for(let n=0;n<e.length;n++)for(let s=n+1;s<e.length;s++){let r=e[n].car,o=e[s].car,a=o.x-r.x,l=o.z-r.z;if(a*a+l*l>25||Math.abs(r.y-o.y)>2)continue;let c=Math.sin(r.h),h=Math.cos(r.h),u=a*c+l*h,f=a*h-l*c,d=4.3-Math.abs(u),g=2-Math.abs(f);if(d<=0||g<=0)continue;let x,m,p;if(g<d){let y=Math.sign(f)||1;x=h*y,m=-c*y,p=g}else{let y=Math.sign(u)||1;x=c*y,m=h*y,p=d}r.x-=x*p/2,r.z-=m*p/2,o.x+=x*p/2,o.z+=m*p/2;let _=(o.vx-r.vx)*x+(o.vz-r.vz)*m;if(_<0){let y=-_*.8;r.vx-=x*y/2,r.vz-=m*y/2,o.vx+=x*y/2,o.vz+=m*y/2,(e[n]===this.player||e[s]===this.player)&&y>1.5&&t.push({type:"bump",impact:y,x:(r.x+o.x)/2,z:(r.z+o.z)/2})}}}position(){let t=this.player;return t.finished?this.order.indexOf(t)+1:1+this.order.filter(e=>e!==t).length+this.rivals.filter(e=>!e.finished&&e.total>t.total).length}},yM=[.96,.97,.99,1,1.06,1.09];function Up(i,t,e,n){let s=Bo(t,{}),r=Bo(e[Math.min(e.length-1,i)],{}),o=n||yM[Math.min(5,i)];return[.96,1,1.04].map(a=>{let l={};for(let c in s)l[c]=(s[c]+r[c])/2;return l.max*=o*a,l.accel*=o*a,l.latG*=1.06+(o-1)*.5,l})}var ju=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function Qu(i,t="grip"){let e=i.tr,n=i.car,s=e.n,r=e.L/s,o=Math.round((9+n.speed*.45)/r),a=(i.idx+o)%s,l=e.curv[(i.idx+Math.round(o*1.6))%s],c=Math.max(-1,Math.min(1,-l*160))*e.halfW*.35+(i.lineOff||0)*e.halfW,h=e.x[a]+e.nx[a]*c,u=e.z[a]+e.nz[a]*c,f=Math.atan2(h-n.x,u-n.z),d=i.st.latG||25,g=0,x=Math.round((10+n.speed*1.1)/r);for(let _=3;_<x;_+=2)g=Math.max(g,Math.abs(e.curv[(i.idx+_)%s]));let m=Math.sqrt(d*.92/Math.max(g,1e-4));if(t==="drift"||t==="drifty"){let _=n.speed*n.speed*g*(t==="drifty"?2.6:1);if(n.drifting){let v=Math.atan2(n.vx,n.vz),P=ju(f-v),b=i.st.steer*Math.min(1,n.speed/10)*(1-.28*Math.min(1,n.speed/60))*.95,w=-P*3.2;return{steer:Math.max(-1,Math.min(1,(w/(n.dDir*b)-.35)/.55))*n.dDir,drift:_>d*.5,brake:!1,nitro:!1,gas:1}}return{steer:Math.max(-1,Math.min(1,-ju(f-n.h)*2.4)),drift:_>d*.8&&n.speed>14,brake:!1,nitro:g<.008&&n.nitro>.4,gas:1}}return{steer:Math.max(-1,Math.min(1,-ju(f-n.h)*2.6)),drift:!1,brake:n.speed>m*1.03,nitro:g<.006&&n.nitro>.5,gas:1}}function Ai(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Kt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Np(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Np(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Np(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new le(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function pn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function _n(i,t=!0){let e=new nn(i);return e.colorSpace=Se,t&&(e.wrapS=e.wrapT=Xi),e.anisotropy=4,e}function qs(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function tf(i){let[t,e]=pn(256,512),n=qs(7),s={harbor:"#3b3f45",canyon:"#4a4543",alpine:"#4c535c",neon:"#16181f"}[i];e.fillStyle=s,e.fillRect(0,0,256,512);for(let a=0;a<7e3;a++){let l=n();e.fillStyle=l>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",e.fillRect(n()*256,n()*512,2,2)}let r=e.createLinearGradient(0,0,256,0);if(r.addColorStop(.25,"rgba(0,0,0,0)"),r.addColorStop(.5,"rgba(0,0,0,0.12)"),r.addColorStop(.75,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,0,256,512),i==="alpine")for(let a=0;a<900;a++){e.fillStyle=`rgba(255,255,255,${.15+n()*.3})`;let l=n()<.5?n()*40:256-n()*40;e.fillRect(l,n()*512,3,3)}let o=i==="neon"?"#29f0ff":"#f2f2f2";e.fillStyle=o,e.fillRect(10,0,6,512),e.fillRect(240,0,6,512),e.fillStyle=i==="neon"?"#ff2bd6":i==="canyon"?"#ffd166":"#f2f2f2";for(let a=0;a<512;a+=128)e.fillRect(125,a+10,6,60);return _n(t)}function Fp(){let[i,t]=pn(256,512);t.fillStyle="#000",t.fillRect(0,0,256,512),t.fillStyle="#29f0ff",t.fillRect(10,0,6,512),t.fillRect(240,0,6,512),t.fillStyle="#ff2bd6";for(let e=0;e<512;e+=128)t.fillRect(125,e+10,6,60);return _n(i)}function Ul(i,t,e=2,n=!1){let[s,r]=pn(128,128);if(r.fillStyle=i,r.fillRect(0,0,128,128),r.fillStyle=t,n){r.save(),r.translate(64,64),r.rotate(Math.PI/4);for(let o=-4;o<4;o+=2)r.fillRect(o*32,-128,32,256);r.restore()}else for(let o=0;o<e;o++)r.fillRect(0,(o*2+1)*128/(e*2),128,128/(e*2));return _n(s)}function Bp(i){let[t,e]=pn(256,256),n=qs(3),s={harbor:["#8d9196","#7f8388","#9a9ea3"],canyon:["#d4935a","#c98650","#dda06a"],alpine:["#f3f7fc","#e4ecf6","#ffffff"],neon:["#10131b","#0c0f16","#151924"],autumn:["#6f8238","#62752f","#7d9142"],volcano:["#221c1a","#1a1513","#2a2320"]}[i];e.fillStyle=s[0],e.fillRect(0,0,256,256);for(let r=0;r<2600;r++){e.fillStyle=s[1+(n()*2|0)];let o=2+n()*6;e.fillRect(n()*256,n()*256,o,o)}if(i==="harbor"){e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=2;for(let r=0;r<=256;r+=64)e.beginPath(),e.moveTo(r,0),e.lineTo(r,256),e.moveTo(0,r),e.lineTo(256,r),e.stroke()}if(i==="neon"){e.strokeStyle="rgba(120,90,255,0.10)",e.lineWidth=1;for(let r=0;r<=256;r+=32)e.beginPath(),e.moveTo(r,0),e.lineTo(r,256),e.moveTo(0,r),e.lineTo(256,r),e.stroke()}return _n(t)}function Op(){let[i,t]=pn(128,32);for(let e=0;e<16;e++)for(let n=0;n<4;n++)t.fillStyle=(e+n)%2?"#111":"#f4f4f4",t.fillRect(e*8,n*8,8,8);return _n(i)}function Nl(i,t){let[e,n]=pn(64,128),s=qs(i);n.fillStyle=t?"#0b0d16":"#55606e",n.fillRect(0,0,64,128);let r=t?["#ffd27a","#7fe7ff","#ff8fd0","#fff2c4"]:["#9fc4e6","#b8d6f0"];for(let o=4;o<128;o+=10)for(let a=4;a<64;a+=10)n.fillStyle=s()<(t?.45:.9)?r[s()*r.length|0]:t?"#141826":"#3c4652",n.fillRect(a,o,6,6);return _n(e)}function Oo(){let[i,t]=pn(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),_n(i,!1)}function Fl(){let[i,t]=pn(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),_n(i,!1)}function zo(i,t,e){let[n,s]=pn(512,96);s.fillStyle=t,s.fillRect(0,0,512,96);for(let r=0;r<512;r+=16)s.fillStyle=r/16%2?"#111":"#f4f4f4",s.fillRect(r,0,16,8),s.fillRect(r+8*0,88,16,8);return s.fillStyle=e,s.font='italic 52px "Russo One", Impact, sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,50),_n(n,!1)}function zp(i){let[t,e]=pn(256,128),n=qs(i);for(let s=0;s<14;s++){let r=50+n()*156,o=60+(n()-.5)*30,a=22+n()*30,l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,.95)"),l.addColorStop(.6,"rgba(255,255,255,.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,256,128)}return _n(t,!1)}function kp(i){let[t,e]=pn(128,128);e.clearRect(0,0,128,128),e.fillStyle=i,e.globalAlpha=1;for(let s=0;s<2;s++){let r=s*64;e.beginPath(),e.moveTo(14,r+52),e.lineTo(64,r+14),e.lineTo(114,r+52),e.lineTo(114,r+64),e.lineTo(64,r+30),e.lineTo(14,r+64),e.closePath(),e.fill()}return _n(t)}function Hp(i){let[t,e]=pn(64,64);e.clearRect(0,0,64,64),e.fillStyle=i,e.globalAlpha=.9,e.fillRect(0,0,5,64),e.fillRect(59,0,5,64),e.globalAlpha=.16,e.fillRect(5,0,54,64),e.globalAlpha=.35;for(let n=0;n<64;n+=32)e.beginPath(),e.moveTo(5,n),e.lineTo(20,n),e.lineTo(5,n+15),e.fill(),e.beginPath(),e.moveTo(59,n),e.lineTo(44,n),e.lineTo(59,n+15),e.fill();return _n(t)}function Gp(){let[i,t]=pn(64,64);t.fillStyle="#ffcc00",t.fillRect(0,0,64,64),t.fillStyle="#16181d";for(let e=-64;e<128;e+=24)t.beginPath(),t.moveTo(e,0),t.lineTo(e+12,0),t.lineTo(e+76,64),t.lineTo(e+64,64),t.fill();return _n(i)}function Vp(){let[i,t]=pn(256,256),e=qs(9);t.fillStyle="#d8d8d8",t.fillRect(0,0,256,256);for(let n=0;n<5e3;n++){let s=160+e()*95|0;t.fillStyle=`rgb(${s},${s},${s})`;let r=1+e()*4;t.fillRect(e()*256,e()*256,r,r)}return _n(i)}function Wp(){let[i,t]=pn(256,256),e=t.createImageData(256,256),n=qs(5),s=Array.from({length:8},()=>({fx:(1+(n()*6|0))*2*Math.PI/256,fy:(1+(n()*6|0))*2*Math.PI/256,p:n()*6.28,a:.5+n()}));for(let o=0;o<256;o++)for(let a=0;a<256;a++){let l=0,c=0;for(let u of s){let f=Math.cos(a*u.fx+o*u.fy+u.p)*u.a;l+=f*u.fx*40,c+=f*u.fy*40}let h=(o*256+a)*4;e.data[h]=128+l*20,e.data[h+1]=128+c*20,e.data[h+2]=255,e.data[h+3]=255}t.putImageData(e,0,0);let r=new nn(i);return r.wrapS=r.wrapT=Xi,r}function Xp(){let[i,t]=pn(256,256),e=qs(13);t.fillStyle="#ff5a12",t.fillRect(0,0,256,256);for(let n=0;n<60;n++){let s=e()*256,r=e()*256,o=10+e()*40,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(255,230,120,.9)"),a.addColorStop(1,"rgba(255,230,120,0)"),t.fillStyle=a,t.fillRect(0,0,256,256)}for(let n=0;n<40;n++)t.fillStyle="rgba(60,10,0,.55)",t.beginPath(),t.ellipse(e()*256,e()*256,6+e()*26,4+e()*12,e()*3,0,7),t.fill();return _n(i)}var Jn=i=>new ze({color:i,flatShading:!0});function ef(i,t,e){let n=i.attributes.position;for(let s=0;s<n.count;s++){let r=n.getX(s),o=n.getY(s),a=n.getZ(s),l=Math.sin(r*1.3+e)*Math.cos(a*1.7+o*.9+e)*t;n.setXYZ(s,r+l,o+l*.5,a+l)}return i.computeVertexNormals(),i}function Ri(i,t,e){let n=new ds(i,t,Math.max(1,e.length)),s=new Ae,r=new xt;return e.forEach((o,a)=>{s.position.set(o.x,o.y,o.z),s.rotation.set(o.rx||0,o.ry||0,o.rz||0),s.scale.set(o.sx||1,o.sy||1,o.sz||1),s.updateMatrix(),n.setMatrixAt(a,s.matrix),o.color&&n.setColorAt(a,r.set(o.color))}),n.count=e.length,n.castShadow=!0,n.receiveShadow=!0,n}var Ci=(i,t,e,n)=>Xr(i,t,e)>i.halfW+n,mi=(i,t,e=0)=>({x:i.x[t]+i.nx[t]*e,z:i.z[t]+i.nz[t]*e,y:i.h[t]+e*Math.sin(i.bank[t]),h:Math.atan2(i.tx[t],i.tz[t])});function Bl(i,t,e,n=()=>!0){let s=[],r=i.n,o=a=>i.tunnel&&(a-i.tunnel.a+r)%r<i.tunnel.b-i.tunnel.a+20||i.jumps.some(l=>Math.abs((a-l.i+r+r/2)%r-r/2)<40)||a<30||a>r-30;for(let a=0;a<400&&s.length<t;a++){let l=Math.floor(a*.6180339%1*r);o(l)||!n(l)||s.some(c=>Math.min(Math.abs(l-c),r-Math.abs(l-c))<e)||s.push(l)}return s}function qp(i,t,e,{r:n,E:s,anim:r,night:o}){let a=t.halfW,l=new Me;i.add(l);{let c=new Kt().setAttribute("position",new Yt([-.35,0,0,.35,0,0,0,-.7,0],3));c.computeVertexNormals();let h=[],u=["#ff2e6e","#2ee6ff","#ffcf3a","#ffffff"];for(let f of[-1,1])for(let d=-40;d<=60;d+=1.2){let g=(Math.round(d/(t.L/t.n))%t.n+t.n)%t.n,x=mi(t,g,f*(a+3.2)),m=Math.abs(Math.sin(d/12*Math.PI))*.9;h.push({x:x.x,y:x.y+5.2-m,z:x.z,ry:x.h+Math.PI/2,color:u[h.length%4]})}l.add(Ri(c,new ze({side:pe}),h))}if(e==="canyon"){let c=["#b5653a","#c97b4a","#9c5530","#d99a66"];for(let f of Bl(t,3,160,d=>Math.abs(t.curv[d])<1/150)){let d=a+8,g=mi(t,f);if(![-1,1].every(v=>Ci(t,g.x+t.nx[f]*d*v*1,g.z+t.nz[f]*d*v,2)||!0))continue;let m=ef(new $e(d,4.4,7,26,Math.PI),1.2,f),p=m.attributes.position,_=[];for(let v=0;v<p.count;v++){let P=new xt(c[Math.floor((p.getY(v)+30)/3.2)%4]);_.push(P.r,P.g,P.b)}m.setAttribute("color",new Yt(_,3));let y=new pt(m,new ze({vertexColors:!0,flatShading:!0}));y.position.set(g.x,g.y-1,g.z),y.rotation.y=g.h,y.castShadow=!0,l.add(y);for(let v of[-1,1]){let P=new pt(ef(new ee(4.6,6.5,14,8,3),1,f+v),Jn(c[2]));P.position.set(g.x+t.nx[f]*d*v,g.y-7,g.z+t.nz[f]*d*v),l.add(P)}}let[h]=Bl(t,1,0,f=>Math.abs(t.curv[f])<1/120),u=[];if(h!==void 0)for(let f=-55;f<=55;f+=4){let d=(h+f+t.n)%t.n;for(let g of[-1,1]){let x=5+n()*5,m=g*(a+5+x+n()*4),p=mi(t,d,m);Ci(t,p.x,p.z,x+3.5)&&u.push({x:p.x,y:Cn(t,p.x,p.z)-4,z:p.z,sx:x,sz:x*(.8+n()*.5),sy:26+n()*28,ry:n()*6,color:c[n()*4|0]})}}l.add(Ri(ef(new ee(1,1.25,1,7,4).translate(0,.5,0),.08,3),new ze({flatShading:!0}),u))}if(e==="alpine"){let[c]=Bl(t,1,0,u=>Math.abs(t.curv[u])<.01);if(c!==void 0){let u=mi(t,c),f=t.nx[c],d=t.nz[c],g=320,x=[];for(let P=-g/2;P<=g/2;P+=32){let b=u.x+f*P,w=u.z+d*P;Ci(t,b,w,5)&&x.push({x:b,y:Cn(t,b,w),z:w,ry:Math.atan2(f,d)})}let m=new Jt(.8,22,.8).translate(0,11,0),p=new Jt(5,.5,.5).rotateY(Math.PI/2).translate(0,21.5,0);l.add(Ri(m,Jn("#5d6670"),x),Ri(p,Jn("#5d6670"),x));let _=Math.max(...x.map(P=>P.y),u.y)+21.5;for(let P of[-2,2]){let b=new sl(new Kt().setFromPoints([new N(u.x-f*g/2-d*P,_,u.z-d*g/2+f*P),new N(u.x+f*g/2-d*P,_,u.z+d*g/2+f*P)]),new To({color:"#2a2f36"}));l.add(b)}let y=new Me,v=[];for(let P=0;P<8;P++){let b=new Me;b.add(new pt(new Jt(2,2.2,2),Jn(["#e63946","#ffcf3a"][P%2])));let w=new pt(new Jt(2.05,.8,1.6),Jn("#bfe2ff"));w.position.y=.3,b.add(w);let I=new pt(new Jt(.12,2.2,.12),Jn("#2a2f36"));I.position.y=2.2,b.add(I),y.add(b),v.push({m:b,u:P/8,side:P%2?2:-2})}l.add(y),r.push(P=>{for(let b of v){b.u=(b.u+P*.018*(b.side>0?1:-1)+1)%1;let w=(b.u-.5)*g;b.m.position.set(u.x+f*w-d*b.side,_-3.3,u.z+d*w+f*b.side)}})}for(let u=0;u<60;u++){let f=n()*6.28,d=n()*t.n|0,g=a+60+n()*60,x=t.x[d]+Math.cos(f)*g,m=t.z[d]+Math.sin(f)*g,p=26+n()*18;if(!Ci(t,x,m,p+10))continue;let _=Cn(t,x,m)+.25,y=new pt(new On(p,40).rotateX(-Math.PI/2),new ge({color:"#bfe4ff",roughness:.06,metalness:.2}));y.position.set(x,_,m),y.receiveShadow=!0,l.add(y);let v=new pt(new $e(p,1.6,6,40).rotateX(Math.PI/2),Jn("#f4f8ff"));v.position.set(x,_,m),l.add(v);break}let h=[];for(let u=0;u<200&&h.length<9;u++){let f=n()*t.n|0,d=n()<.5?-1:1,g=mi(t,f,d*(a+16+n()*30));Ci(t,g.x,g.z,12)&&h.push({x:g.x,y:Cn(t,g.x,g.z),z:g.z,ry:g.h+(n()-.5)*.6})}l.add(Ri(new Jt(7,4.5,6).translate(0,2.25,0),Jn("#7a4a2a"),h),Ri(new vn(5.6,3.4,4).rotateY(Math.PI/4).scale(1.05,1,.95).translate(0,6.2,0),Jn("#f4f8ff"),h))}if(e==="autumn"){let c=[];for(let x=0;x<120&&c.length<6;x++){let m=n()*t.n|0,p=n()<.5?-1:1,_=mi(t,m,p*(a+45+n()*90));Ci(t,_.x,_.z,35)&&c.every(y=>Math.hypot(y.x-_.x,y.z-_.z)>60)&&c.push({x:_.x,z:_.z,y:Cn(t,_.x,_.z)})}for(let x of c){let m=new Me;m.position.set(x.x,x.y,x.z),m.rotation.y=n()*6.28,m.add(new pt(new ee(.7,1.3,42,10).translate(0,21,0),new ze({color:"#f2f2ee"})));let p=new pt(new Jt(2.2,2.2,5),new ze({color:"#f2f2ee"}));p.position.set(0,42.5,.8),m.add(p);let _=new Me;_.position.set(0,42.5,3.4),m.add(_);for(let v=0;v<3;v++){let P=new pt(new Jt(1.2,20,.35).translate(0,10,0),new ze({color:"#ffffff"}));P.rotation.z=v*2.094,_.add(P)}let y=.6+n()*.5;r.push(v=>{_.rotation.z+=v*y}),l.add(m)}let h=[["#ff2e6e","#ffcf3a"],["#2ee6ff","#ffffff"],["#8b5cff","#ff8a1f"],["#06d6a0","#ffcf3a"],["#ff8a1f","#e63946"]],u=t.bounds,f=(u.minX+u.maxX)/2,d=(u.minZ+u.maxZ)/2;h.forEach(([x,m],p)=>{let _=[];for(let C=0;C<=12;C++){let z=C/12,T=-7+z*16;_.push(new gt(Math.max(.6,Math.sin(Math.min(1,z*1.15)*Math.PI*.92)*7*(z<.3?.55+z*1.5:1)),T))}let y=new Fr(_,16),v=[],P=y.attributes.position;for(let C=0;C<P.count;C++){let z=Math.atan2(P.getZ(C),P.getX(C)),T=new xt(Math.floor((z+Math.PI)/(Math.PI/4))%2?x:m);v.push(T.r,T.g,T.b)}y.setAttribute("color",new Yt(v,3));let b=new Me;b.add(new pt(y,new ze({vertexColors:!0})));let w=new pt(new Jt(2,1.6,2),Jn("#7a4a2a"));w.position.y=-10.5,b.add(w);let I=p/5*6.28,S=120+p*45,M=55+p*12;l.add(b),r.push(C=>{let z=performance.now()/1e3*.012+I;b.position.set(f+Math.cos(z)*S,M+Math.sin(z*7)*3,d+Math.sin(z)*S)})});let g=[];for(let x=0;x<400&&g.length<40;x++){let m=n()*t.n|0,p=n()<.5?-1:1,_=mi(t,m,p*(a+7+n()*25));Ci(t,_.x,_.z,4)&&g.push({x:_.x,y:Cn(t,_.x,_.z)+1,z:_.z,rz:Math.PI/2,ry:n()*6})}l.add(Ri(new ee(1.1,1.1,1.6,12),Jn("#d9b44a"),g))}if(e==="neon"){let c=[],h=[],u=["#ff2e9a","#2ee6ff","#ffcf3a","#8b5cff"];for(let C=60;C<t.L-40;C+=105){let z=Math.round(C/t.L*t.n)%t.n;if(t.tunnel&&(z-t.tunnel.a+t.n)%t.n<t.tunnel.b-t.tunnel.a+10)continue;let T=mi(t,z);c.push({x:T.x,y:T.y,z:T.z,ry:T.h}),h.push({x:T.x,y:T.y,z:T.z,ry:T.h,color:u[h.length%4]})}let f=a+2,d=[new Jt(.8,12,.8).translate(-f,6,0),new Jt(.8,12,.8).translate(f,6,0),new Jt(f*2+.8,.9,.9).translate(0,12,0)],g=[new Jt(.25,11,.25).translate(-f+.55,5.6,0),new Jt(.25,11,.25).translate(f-.55,5.6,0),new Jt(f*2-.8,.25,.25).translate(0,11.45,0)],x=C=>{let z=[];for(let k of C){let G=k.toNonIndexed();z.push(...G.attributes.position.array)}let T=new Kt;return T.setAttribute("position",new Yt(z,3)),T.computeVertexNormals(),T};l.add(Ri(x(d),new ge({color:"#141626",metalness:.7,roughness:.4}),c)),l.add(Ri(x(g),new Zt({color:new xt(1.25,1.25,1.25),toneMapped:!1}),h));let m=[["DRIFT FEVER","#ff2e9a","#ffffff"],["NITRO ENERGY","#2ee6ff","#0b0d1f"],["TURBO","#ffcf3a","#0b0d1f"],["NEON NIGHTS","#8b5cff","#ffffff"]],p=0;for(let C=0;C<300&&p<8;C++){let z=n()*t.n|0,T=n()<.5?-1:1,k=mi(t,z,T*(a+16+n()*14));if(!Ci(t,k.x,k.z,11))continue;let[G,W,st]=m[p%4],j=zo(G,W,st),Q=new Me,ut=Cn(t,k.x,k.z);Q.add(new pt(new Jt(.8,14,.8).translate(0,7,0),Jn("#1b1d2c")));let X=new pt(new Pe(20,4.4),new Zt({map:j,color:new xt(1.05,1.05,1.05),toneMapped:!1,side:pe}));X.position.y=15.5,Q.add(X),Q.position.set(k.x,ut,k.z),Q.rotation.y=k.h+Math.PI/2*T+Math.PI/2,l.add(Q),p++}let _=36,y=new ds(new Jt(2,.8,4.2),new Zt({toneMapped:!1}),_),v=new Ae,P=new xt,b=t.bounds,w=(b.minX+b.maxX)/2,I=(b.minZ+b.maxZ)/2,S=Math.max(b.maxX-b.minX,b.maxZ-b.minZ)/2,M=Array.from({length:_},(C,z)=>({rad:S*(.4+n()*.8),h:45+z%4*9,sp:(.05+n()*.04)*(z%2?1:-1),a:n()*6.28}));M.forEach((C,z)=>y.setColorAt(z,P.set(["#ff2e9a","#2ee6ff","#ffffff","#ffcf3a"][z%4]).multiplyScalar(1.2))),l.add(y),r.push(C=>{M.forEach((z,T)=>{z.a+=z.sp*C,v.position.set(w+Math.cos(z.a)*z.rad,z.h,I+Math.sin(z.a)*z.rad),v.rotation.y=-z.a+(z.sp>0?0:Math.PI),v.updateMatrix(),y.setMatrixAt(T,v.matrix)}),y.instanceMatrix.needsUpdate=!0})}if(e==="volcano"){let c=[];for(let x=0;x<500&&c.length<60;x++){let m=n()*t.n|0,p=n()<.5?-1:1,_=mi(t,m,p*(a+6+n()*30)),y=2+n()*5;Ci(t,_.x,_.z,3+y*.4)&&c.push({x:_.x,y:Cn(t,_.x,_.z)+y*.3,z:_.z,sx:.9+n()*.8,sy:y,sz:.9+n()*.8,rx:(n()-.5)*.5,rz:(n()-.5)*.5,ry:n()*6})}l.add(Ri(new ul(1,0),new ge({color:"#241a33",metalness:.6,roughness:.2,flatShading:!0}),c));let h=Bl(t,3,120).map(x=>{let m=n()<.5?-1:1,p=mi(t,x,m*(a+12));return{x:p.x,z:p.z,y:Cn(t,p.x,p.z),t:n()*4}}).filter(x=>Ci(t,x.x,x.z,8)),u=70,f=new Float32Array(h.length*u*3),d=new Float32Array(h.length*u*3),g=new dn(new Kt().setAttribute("position",new le(f,3)),new an({color:new xt("#ff7a2a").multiplyScalar(1.15),size:.9,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1}));g.frustumCulled=!1,l.add(g),f.fill(-999);for(let x of h){let m=new pt(new On(3.2,16).rotateX(-Math.PI/2),new Zt({color:new xt("#ff5a1f").multiplyScalar(.9)}));m.position.set(x.x,x.y+.2,x.z),l.add(m)}r.push(x=>{h.forEach((m,p)=>{if(m.t-=x,m.t<=0){m.t=3+n()*3;for(let _=0;_<u;_++){let y=(p*u+_)*3;f.set([m.x,m.y+.5,m.z],y),d.set([(n()-.5)*5,9+n()*12,(n()-.5)*5],y)}}});for(let m=0;m<f.length;m+=3)f[m+1]<-500||(d[m+1]-=20*x,f[m]+=d[m]*x,f[m+1]+=d[m+1]*x,f[m+2]+=d[m+2]*x,d[m+1]<-25&&(f[m+1]=-999));g.geometry.attributes.position.needsUpdate=!0})}return l}function Yp(i,t,e){let n=Math.random,s=140,r=new Float32Array(s*3),o=new Float32Array(s*3);r.fill(-9999);let a=new dn(new Kt().setAttribute("position",new le(r,3)),new an({color:new xt("#ff6a1f").multiplyScalar(1.2),size:7,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1,fog:!1}));a.frustumCulled=!1,i.add(a);let l=Fl(),c=[];for(let f=0;f<14;f++){let d=new qn(new Bn({map:l,color:"#2a2220",transparent:!0,opacity:.55,depthWrite:!1,fog:!1}));i.add(d),c.push({s:d,t:f/14})}let h=1,u=0;e.push(f=>{if(h-=f,h<=0){h=2.5+n()*3;for(let d=0;d<30;d++){let g=u++%s*3,x=n()*6.28,m=25+n()*35;r.set([t.x,t.y,t.z],g),o.set([Math.cos(x)*m,55+n()*45,Math.sin(x)*m],g)}}for(let d=0;d<r.length;d+=3)r[d+1]<-9e3||(o[d+1]-=30*f,r[d]+=o[d]*f,r[d+1]+=o[d+1]*f,r[d+2]+=o[d+2]*f,r[d+1]<t.y-260&&(r[d+1]=-9999));a.geometry.attributes.position.needsUpdate=!0;for(let d of c){d.t=(d.t+f*.035)%1;let g=50+d.t*220;d.s.scale.set(g,g,1),d.s.position.set(t.x+d.t*90,t.y+20+d.t*320,t.z+d.t*40),d.s.material.opacity=.6*(1-d.t)}})}var Gn=i=>new ze(i),Be=i=>new ze({color:i,flatShading:!0});function Zp(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}var Jp=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Ys(i,t,e,n,s,r,o=0,a=i.n,l=!1){let c=a-o+1,h=new Float32Array(c*6),u=new Float32Array(c*4),f=[];for(let g=0;g<c;g++){let x=((o+g)%i.n+i.n)%i.n,m=i.x[x],p=i.z[x],_=i.nx[x],y=i.nz[x],v=i.h[x],P=Math.sin(i.bank[x]),b=v+t*P+n,w=l?v+t*P+s:v+e*P+s;h.set([m+_*t,b,p+y*t,m+_*e,w,p+y*e],g*6);let I=(o+g)*(i.L/i.n)/r;if(u.set([0,I,1,I],g*4),g<c-1){let S=g*2;f.push(S,S+2,S+1,S+1,S+2,S+3)}}let d=new Kt;return d.setAttribute("position",new le(h,3)),d.setAttribute("uv",new le(u,2)),d.setIndex(f),d.computeVertexNormals(),d}function Ol(i,t,e,n,s,r,o=.05){let a=i.L/i.n,l=Math.max(2,Math.ceil((n-e)/.5)),c=6,h=[],u=[],f=[],d=x=>{let m=Math.floor(x),p=x-m,_=(m%i.n+i.n)%i.n,y=(_+1)%i.n,v=(P,b)=>P+(b-P)*p;return{x:v(i.x[_],i.x[y]),z:v(i.z[_],i.z[y]),h:v(i.h[_],i.h[y]),nx:v(i.nx[_],i.nx[y]),nz:v(i.nz[_],i.nz[y]),sb:Math.sin(v(i.bank[_],i.bank[y]))}};for(let x=0;x<=l;x++){let m=e+(n-e)*x/l,p=d(t+m/a);for(let _=0;_<=c;_++){let y=s+(r-s)*_/c;h.push(p.x+p.nx*y,p.h+y*p.sb+o,p.z+p.nz*y),u.push(_/c,x/l)}}for(let x=0;x<l;x++)for(let m=0;m<c;m++){let p=x*(c+1)+m;f.push(p,p+c+1,p+1,p+1,p+c+1,p+c+2)}let g=new Kt;return g.setAttribute("position",new Yt(h,3)),g.setAttribute("uv",new Yt(u,2)),g.setIndex(f),g.computeVertexNormals(),g}function Ie(i,t,e,n){let s=new ds(i,t,Math.max(1,e.length)),r=new Ae,o=new xt;return s.count=e.length,e.forEach((a,l)=>{r.position.set(a.x,a.y||0,a.z),r.rotation.set(a.rx||0,a.ry||0,0),r.scale.set(a.sx||a.s||1,a.sy||a.s||1,a.sz||a.s||1),r.updateMatrix(),s.setMatrixAt(l,r.matrix),n&&s.setColorAt(l,o.set(a.color))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=!1,s}function Kn(i,t,e,n,s){let r=i.bounds,o=[],a=0;for(;o.length<e&&a++<e*30;){let l=r.minX-s+t()*(r.maxX-r.minX+s*2),c=r.minZ-s+t()*(r.maxZ-r.minZ+s*2),h=Xr(i,l,c);h>i.halfW+n&&h<i.halfW+s&&o.push({x:l,z:c,y:Cn(i,l,c),d:h,minD:i.halfW+1.6,ry:t()*6.28})}return o}var Ms=(i,t)=>e=>Xr(i,e.x,e.z)>i.halfW+6+t;function Pi(i,t,e,n,s){let r=i.bounds,o=(r.minX+r.maxX)/2,a=(r.minZ+r.maxZ)/2,l=Math.max(r.maxX-r.minX,r.maxZ-r.minZ)/2;return Array.from({length:e},(c,h)=>{let u=h/e*6.283+t()*.2,f=l+n+t()*(s-n);return{x:o+Math.cos(u)*f,z:a+Math.sin(u)*f,ry:t()*6.28}})}function Kp(i,t,e,n){let s=[];for(let r=10,o=0;r<i.L-10;r+=t,o++){let a=Math.round(r/i.L*i.n)%i.n;if(n&&n(a))continue;let l=o%2?1:-1,c=l*e;s.push({x:i.x[a]+i.nx[a]*c,z:i.z[a]+i.nz[a]*c,y:i.h[a]+c*Math.sin(i.bank[a]),ry:Math.atan2(i.tx[a],i.tz[a]),side:l,i:a})}return s}function jp(i){return new Ge({side:We,depthWrite:!1,fog:!1,uniforms:{top:{value:new xt(i.skyTop)},bot:{value:new xt(i.skyBottom)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ float h = normalize(vP).y; gl_FragColor = vec4(mix(bot, top, smoothstep(-0.02, 0.5, h)), 1.0); 
#include <colorspace_fragment>
 }`})}var vM={harbor:(i,t)=>[.55+t*.05,.56+t*.05,.58+t*.05],canyon:(i,t)=>{let e=Math.sin(i*1.3)*.04;return[.82+e+t*.05,.55+e+t*.04,.33+t*.03]},alpine:(i,t)=>t>.55?[.62,.66,.72]:[.95+t*.03,.97+t*.02,1],autumn:(i,t)=>t>.6?[.72,.6,.25]:[.42+t*.1,.52+t*.08,.22],neon:(i,t)=>[.07,.08,.11],volcano:(i,t)=>[.17+t*.06,.14+t*.04,.13+t*.03]};function nf(i,t,e,n){let s=Mp[t],r=new An,o=Zp(i.def.seed*31+5),a=i.halfW,l=i.bounds;r.fog=new Nr(s.fog,90,s.night?430:650),r.background=new xt(s.fog);let c=(l.minX+l.maxX)/2,h=(l.minZ+l.maxZ)/2,u=[],f=new pt(new fi(900,24,12),jp(s));f.renderOrder=-1,r.add(f);let d=new N(-.55,.5,.45).normalize(),g=null;if(n){let B=new An;B.add(new pt(new fi(50,16,8),jp(s)));let $=new pt(new Pe(200,200).rotateX(-Math.PI/2),new Zt({color:s.ground}));if($.position.y=-2,B.add($),s.night)for(let at=0;at<8;at++){let R=new pt(new Jt(4,10,1),new Zt({color:new xt(s.kerb[at%2]).multiplyScalar(2)}));R.position.set(Math.cos(at)*40,4,Math.sin(at)*40),R.lookAt(0,4,0),B.add(R)}else{let at=new pt(new fi(4,8,8),new Zt({color:new xt(s.light).multiplyScalar(6)}));at.position.copy(d).multiplyScalar(40),B.add(at)}g=n.fromScene(B,.03).texture,r.environment=g}r.add(new ms(s.hemiSky,s.hemiGround,s.hemiInt));let x=new pl(s.light,s.lightInt);if(x.castShadow=e.shadows,e.shadows){x.shadow.mapSize.set(1024,1024);let B=x.shadow.camera;B.left=B.bottom=-28,B.right=B.top=28,B.near=1,B.far=180,x.shadow.bias=-4e-4,x.shadow.normalBias=.03}if(r.add(x,x.target),!s.night){let B=new qn(new Bn({map:Oo(),color:new xt(s.light).multiplyScalar(2.5),fog:!1,depthWrite:!1,transparent:!0,blending:Xe,toneMapped:!1}));B.scale.set(240,240,1),f.add(B),B.position.copy(d).multiplyScalar(800);let $=[0,1,2].map(at=>new Bn({map:zp(3+at),color:s.clouds,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));for(let at of Pi(i,o,22,150,650)){let R=new qn($[o()*3|0]),D=120+o()*160;R.scale.set(D,D*.45,1),R.position.set(at.x,110+o()*90,at.z),r.add(R)}}let m=t==="harbor"?70:230,p=t==="harbor"?4:5,_=l.maxX-l.minX+m*2,y=l.maxZ-l.minZ+m*2,v=Math.ceil(_/p),P=Math.ceil(y/p),b=new Pe(_,y,v,P).rotateX(-Math.PI/2);b.translate(c,0,h);let w=b.attributes.position,I=new Float32Array(w.count*3),S=vM[t],M=Zp(17),C=t==="volcano"?7:0,z=new Float32Array(w.count),T=1e9;for(let B=0;B<w.count;B++){let $=Ku(i,w.getX(B),w.getZ(B)),at=$.y;C&&(at-=C*Jp(a+14,a+60,$.d)),z[B]=at,T=Math.min(T,at)}T-=1;for(let B=0;B<w.count;B++){let $=w.getX(B),at=w.getZ(B),R=Math.min($-(c-_/2),c+_/2-$,at-(h-y/2),h+y/2-at),D=T+(z[B]-T)*Jp(0,t==="harbor"?30:70,R);w.setY(B,D);let Z=S(D,(Math.sin($*.05)*Math.cos(at*.045)+1)/2*.6+M()*.4);I.set(Z,B*3)}b.setAttribute("color",new le(I,3)),b.computeVertexNormals();let k=Vp();k.repeat.set(_/14,y/14);let G=new pt(b,new ze({vertexColors:!0,map:k}));if(G.receiveShadow=!0,r.add(G),t==="harbor"){let B=Wp();B.repeat.set(60,60);let $=new pt(new Pe(4e3,4e3).rotateX(-Math.PI/2),new ge({color:"#1d6e9e",roughness:.12,metalness:.1,normalMap:B,normalScale:new gt(.6,.6)}));$.position.y=T-1.2,r.add($),u.push(R=>{B.offset.x+=R*.006,B.offset.y+=R*.004});let at=new pt(new Jt(_,3,y),Gn({color:"#6f747a"}));at.position.set(c,T-1.55,h),r.add(at)}else{let B=Bp(t);B.repeat.set(220,220);let $=new pt(new Pe(4e3,4e3).rotateX(-Math.PI/2),Gn({map:B,color:s.outer}));$.position.y=T-.08,r.add($)}if(t==="volcano"){let B=Xp();B.repeat.set(30,30);let $=1e9;for(let R of i.h)$=Math.min($,R);let at=new pt(new Pe(_-20,y-20).rotateX(-Math.PI/2),new Zt({map:B,color:"#c8643c",toneMapped:!1}));at.position.set(c,$-2.2,h),r.add(at),u.push(R=>{B.offset.x+=R*.01,B.offset.y+=R*.006})}let W=s.night?new ge({map:tf(t==="volcano"?"canyon":t),roughness:.3,metalness:.15,emissive:"#ffffff",emissiveMap:Fp(),emissiveIntensity:t==="neon"?.9:0}):Gn({map:tf(t==="autumn"?"harbor":t)}),st=new pt(Ys(i,-a,a,.02,.02,16),W);st.receiveShadow=!0,r.add(st);let j=Ul(s.kerb[0],s.kerb[1],1),Q=s.night?Gn({map:j,emissive:"#ffffff",emissiveMap:j,emissiveIntensity:.5}):Gn({map:j});for(let B of[-1,1]){let $=new pt(Ys(i,B<0?-a-1.4:a,B<0?-a:a+1.4,.05,.05,3),Q);$.receiveShadow=!0,r.add($)}let ut=s.night?Ul("#151826",s.accent,1):Ul(s.kerb[0],s.kerb[1],2,!0),X=s.night?Gn({map:ut,emissive:"#ffffff",emissiveMap:ut,emissiveIntensity:.8,side:pe}):Gn({map:ut,side:pe});for(let B of[-1,1])r.add(new pt(Ys(i,B*(a+1.45),B*(a+1.45),0,1.05,5,0,i.n,!0),X));let ht=B=>Math.atan2(i.tx[B],i.tz[B]),Rt=new pt(Ol(i,0,-1.2,1.2,-a,a,.045),Gn({map:Op(),polygonOffset:!0,polygonOffsetFactor:-2}));Rt.receiveShadow=!0,r.add(Rt);let et=[];function ft(B,$,at,R){let D=new Me;D.position.set(i.x[B],i.h[B],i.z[B]),D.rotation.y=ht(B);let Z=new Jt(.8,R+2,.8).translate(0,-1,0);for(let rt of[-1,1]){let Et=new pt(Z,$);Et.position.set(rt*(a+2.3),R/2+rt*(a+2.3)*Math.sin(i.bank[B])*.5,0),D.add(Et)}let ot=new pt(new Jt(a*2+5.4,1.7,.5),at?[$,$,$,$,at,at]:$);return ot.position.y=R,D.add(ot),r.add(D),D}ft(0,Gn({color:"#2a2d33"}),new Zt({map:zo("START \xB7 FINISH","#16181f","#ffffff")}),7.2);let Pt=(()=>{let B=document.createElement("canvas");B.width=64,B.height=128;let $=B.getContext("2d");$.strokeStyle="#fff",$.lineWidth=6,$.beginPath(),$.moveTo(4,30),$.lineTo(4,124),$.lineTo(60,124),$.lineTo(60,30),$.stroke();let at=new nn(B);return at.colorSpace=Se,at})(),bt=new Zt({map:Pt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,opacity:.85});for(let B=0;B<4;B++){let $=i.n-7-Math.floor(B/2)*6,at=B%2?3.4:-3.4;r.add(new pt(Ol(i,$,-2.6,2.6,at-1.3,at+1.3,.05),bt))}for(let B=1;B<4;B++){let $=Math.round(B/4*i.n)%i.n,at=new ze({color:s.accent,emissive:s.accent,emissiveIntensity:s.night?.9:.25}),R=ft($,at,null,5.6);R.userData.mat=at,R.userData.base=at.emissiveIntensity,et.push(R)}let Ut=t==="neon"?"#ffd23f":"#ff2bd6",Nt=Hp(Ut),zt=new Zt({map:Nt,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),oe=new Zt({map:zo("DRIFT ZONE x2","#16181f",Ut)}),mt=new Zt({color:Ut,toneMapped:!1});for(let B of i.zones){let $=new pt(Ys(i,-a,a,.06,.06,8,B.a,B.b),zt);r.add($),ft((B.a%i.n+i.n)%i.n,mt,oe,5)}{let B=ot=>{let rt=document.createElement("canvas");rt.width=256,rt.height=64;let Et=rt.getContext("2d");Et.fillStyle=s.night?"#16181f":"#f4f4f4",Et.fillRect(0,0,256,64),Et.fillStyle=s.night?s.accent:"#e63946";for(let Ht=0;Ht<4;Ht++){let O=20+Ht*60;Et.beginPath(),ot<0?(Et.moveTo(O+34,6),Et.lineTo(O+6,32),Et.lineTo(O+34,58),Et.lineTo(O+50,58),Et.lineTo(O+22,32),Et.lineTo(O+50,6)):(Et.moveTo(O+6,6),Et.lineTo(O+34,32),Et.lineTo(O+6,58),Et.lineTo(O+22,58),Et.lineTo(O+50,32),Et.lineTo(O+22,6)),Et.fill()}let Ct=new nn(rt);return Ct.colorSpace=Se,new Zt({map:Ct,color:s.night?new xt(1.6,1.6,1.6):"#ffffff",toneMapped:!s.night,side:pe})},$={"-1":B(-1),1:B(1)},at=new ee(.07,.07,2,6),R=Gn({color:"#3a3e45"}),D=new Pe(3.4,.85),Z=-999;for(let ot=0;ot<i.n;ot++){let rt=i.curv[ot];if(Math.abs(rt)<1/34||ot-Z<40||i.tunnel&&(ot-i.tunnel.a+i.n)%i.n<i.tunnel.b-i.tunnel.a+8)continue;Z=ot;let Et=rt>0,Ct=Et?-1:1;for(let Ht of[6,-2]){let O=((ot-Ht)%i.n+i.n)%i.n,Mt=Ct*(a+2.7),J=new Me;J.position.set(i.x[O]+i.nx[O]*Mt,i.h[O]+Mt*Math.sin(i.bank[O]),i.z[O]+i.nz[O]*Mt),J.rotation.y=ht(O)+Math.PI;let tt=new pt(D,$[Et?"-1":"1"]);tt.position.y=1.5,J.add(tt);for(let yt of[-1.2,1.2]){let vt=new pt(at,R);vt.position.set(yt,.9,.05),J.add(vt)}r.add(J)}}}let St=new ze({map:Gp(),polygonOffset:!0,polygonOffsetFactor:-1});for(let B of i.jumps){let $=B.a<=B.i?B.a:B.a-i.n;r.add(new pt(Ys(i,-a,-a+2.2,.06,.06,2.2,$,B.i),St),new pt(Ys(i,a-2.2,a,.06,.06,2.2,$,B.i),St));let at=new pt(Ys(i,-a,a,.065,.065,1.5,B.i-1,B.i),St);r.add(at)}let U=kp("#29f0ff");U.repeat.set(1,2);let Bt=new Zt({map:U,transparent:!0,depthWrite:!1,toneMapped:!1,color:new xt("#7ff9ff").multiplyScalar(1.6),polygonOffset:!0,polygonOffsetFactor:-2}),_t=new Zt({color:"#0a4a5a",transparent:!0,opacity:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(let B of i.pads)r.add(new pt(Ol(i,B.i,-3.75,3.75,B.lat-3,B.lat+3,.055),_t),new pt(Ol(i,B.i,-3.5,3.5,B.lat-2.7,B.lat+2.7,.07),Bt));if(u.push(B=>{U.offset.y-=B*1.6}),i.tunnel){let{a:B,b:$}=i.tunnel,at=12,R=a+2.2,D=$-B+1,Z=[],ot=[],rt=[[R,-.5],[R,1.4]];for(let tt=1;tt<at;tt++){let yt=tt/at*Math.PI;rt.push([Math.cos(yt)*R,1.4+Math.sin(yt)*6.4])}rt.push([-R,1.4],[-R,-.5]);for(let tt=0;tt<D;tt++){let yt=(B+tt)%i.n;for(let[vt,kt]of rt)Z.push(i.x[yt]+i.nx[yt]*vt,i.h[yt]+kt,i.z[yt]+i.nz[yt]*vt)}let Et=rt.length;for(let tt=0;tt<D-1;tt++)for(let yt=0;yt<Et-1;yt++){let vt=tt*Et+yt;ot.push(vt,vt+1,vt+Et,vt+1,vt+Et+1,vt+Et)}let Ct=new Kt;Ct.setAttribute("position",new Yt(Z,3)),Ct.setIndex(ot),Ct.computeVertexNormals();let Ht=t==="neon"?Gn({color:"#0b0d18",side:pe}):Be(t==="volcano"?"#2a1f1c":"#7b8592");Ht.side=pe;let O=new pt(Ct,Ht);O.receiveShadow=!0,O.castShadow=e.shadows,r.add(O);let Mt=t==="neon"?["#29f0ff","#ff2bd6"]:t==="volcano"?["#ff6a1f","#ff6a1f"]:["#fff1c9","#fff1c9"],J=new $e(R-.3,.14,6,24,Math.PI).translate(0,0,0);for(let tt=4,yt=0;tt<D-2;tt+=t==="neon"?4:7,yt++){let vt=(B+tt)%i.n,kt=new pt(J,new Zt({color:new xt(Mt[yt%2]).multiplyScalar(t==="neon"?2:1.5),toneMapped:!1}));kt.position.set(i.x[vt],i.h[vt]+1.4,i.z[vt]),kt.rotation.y=ht(vt),kt.scale.set(1,6.4/(R-.3),1),r.add(kt)}if(t!=="neon"){let tt=new xt(t==="volcano"?"#3a2d28":t==="canyon"?"#a8603a":"#8d97a3"),yt=new xt("#f4f8ff"),vt=[],kt=[],ue=[],Te=(xe,ae)=>Math.sin(xe*1.7+ae*2.3)*.6+Math.sin(xe*.43-ae*1.1)*.9,ne=rt.map(([xe,ae])=>[xe*2.5,ae<=1.4?-1.5:1.4+(ae-1.4)*1.45+3.2]);for(let xe=0;xe<D;xe++){let ae=(B+xe)%i.n,je=Math.min(xe,D-1-xe);ne.forEach(([Qe,En],Sn)=>{let Ki=En+(En>0?Te(xe,Sn)*Math.min(1,je/3):0);vt.push(i.x[ae]+i.nx[ae]*Qe,i.h[ae]+Ki,i.z[ae]+i.nz[ae]*Qe);let Ln=t==="alpine"&&Ki>8?yt:tt.clone().multiplyScalar(.85+(xe*7+Sn*13)%10/40);kt.push(Ln.r,Ln.g,Ln.b)})}let ce=ne.length;for(let xe=0;xe<D-1;xe++)for(let ae=0;ae<ce-1;ae++){let je=xe*ce+ae;ue.push(je,je+ce,je+1,je+1,je+ce,je+ce+1)}for(let xe of[0,D-1]){let ae=(B+xe)%i.n,je=vt.length/3;rt.forEach(([Qe,En])=>{vt.push(i.x[ae]+i.nx[ae]*Qe,i.h[ae]+En,i.z[ae]+i.nz[ae]*Qe),kt.push(tt.r*.8,tt.g*.8,tt.b*.8)});for(let Qe=0;Qe<ce-1;Qe++){let En=xe*ce+Qe,Sn=je+Qe;ue.push(En,Sn,En+1,En+1,Sn,Sn+1)}}let Ne=new Kt;Ne.setAttribute("position",new Yt(vt,3)),Ne.setAttribute("color",new Yt(kt,3)),Ne.setIndex(ue),Ne.computeVertexNormals();let hn=new pt(Ne,new ze({vertexColors:!0,flatShading:!0,side:pe}));hn.receiveShadow=!0,hn.userData.mound=!0,r.add(hn)}for(let tt of[B%i.n,$%i.n]){let yt=new Me;yt.position.set(i.x[tt],i.h[tt],i.z[tt]),yt.rotation.y=ht(tt);let vt=new Zt({color:new xt(s.accent).multiplyScalar(1.4),toneMapped:!1}),kt=new pt(new $e(R+.2,.35,6,24,Math.PI),vt);kt.position.y=1.4,kt.scale.set(1,6.6/(R+.2),1),yt.add(kt),r.add(yt)}}let Dt=new ee(.6,.6,.14,20).rotateX(Math.PI/2),wt=new ge({color:"#ffcc33",metalness:.9,roughness:.25,emissive:"#7a4a00",emissiveIntensity:s.night?1.4:.6}),$t=new ds(Dt,wt,i.coins.length);$t.frustumCulled=!1,$t.userData.coin=!0,r.add($t);let Lt=i.coins.map(B=>({x:i.x[B.i]+i.nx[B.i]*B.lat,y:i.h[B.i]+B.lat*Math.sin(i.bank[B.i])+1.1,z:i.z[B.i]+i.nz[B.i]*B.lat,on:!0,pop:0})),L=new Ae,E=new Me;r.add(E);let K=B=>i.tunnel&&(B-i.tunnel.a+i.n)%i.n<i.tunnel.b-i.tunnel.a+6,ct=Kp(i,t==="neon"?26:44,a+4.6,K);if(["harbor","neon","autumn"].includes(t)&&(E.add(Ie(new ee(.12,.16,7.5,6).translate(0,2.75,0),Gn({color:"#3a3e45"}),ct)),E.add(Ie(new Jt(1.6,.22,.5).translate(0,6.5,0),new Zt({color:new xt(s.night?"#bff7ff":"#fff1c9").multiplyScalar(s.night?2:1),toneMapped:!1}),ct))),t==="harbor"){let B=Ai([new ee(.22,.38,7,6).translate(0,3.5,0),new vn(3.4,1.6,7).translate(0,7.4,0)],!0);E.add(Ie(B,[Be("#8a6a45"),Be("#3e9a4a")],Kn(i,o,80,4,45).map(D=>({...D,s:.8+o()*.5})).filter(D=>D.d>D.minD+3.4*D.s)));let $=[],at=["#d9452b","#2a6fd1","#f2a93b","#2e8b57","#8a3fb8","#e8e8e8","#1aa3a3"];for(let D of Kn(i,o,14,14,60))for(let Z=0;Z<2+(o()*3|0);Z++)for(let ot=0;ot<1+(o()*3|0);ot++)$.push({x:D.x+Math.cos(D.ry)*Z*2.7,y:D.y+ot*2.6,z:D.z-Math.sin(D.ry)*Z*2.7,ry:D.ry,color:at[o()*at.length|0]});E.add(Ie(new Jt(2.5,2.6,6.1).translate(0,1.3,0),Be("#ffffff"),$.filter(D=>Xr(i,D.x,D.z)>a+6),!0));let R=Ai([new Jt(2.2,34,2.2).translate(0,17,0),new Jt(2,1.6,30).translate(0,33,7),new Jt(3,3,3).translate(0,33,-6)]);E.add(Ie(R,Be("#f2b134"),Pi(i,o,8,40,55).filter(Ms(i,24)).slice(0,5))),E.add(Ie(new Jt(1,1,1).translate(0,.5,0),new ze({map:Nl(4,!1)}),Pi(i,o,34,280,380).map(D=>({...D,sx:18+o()*22,sy:25+o()*70,sz:18+o()*22})).filter(D=>Ms(i,Math.max(D.sx,D.sz)*.75)(D)))),E.add(Ie(new Jt(3,2,9).translate(0,.4,0),Be("#f4f4f4"),Pi(i,o,10,110,200).map(D=>({...D,y:T-1})).filter(Ms(i,8))))}if(t==="canyon"){let B=["#b5653a","#9c5530","#c97b4a","#a85d36"];E.add(Ie(new Br(1,0),Be("#ffffff"),Kn(i,o,140,3,100).map(R=>{let D=1.5+o()*5;return{...R,y:R.y+D*.25,sx:D*(.8+o()*.6),sy:D*(.5+o()*.5),sz:D,color:B[o()*4|0]}}).filter(R=>R.d>R.minD+Math.max(R.sx,R.sz)*1.3),!0));let $=Ai([new ee(.35,.42,4.6,7).translate(0,2.3,0),new ee(.25,.25,1.8,6).translate(.75,2.6,0),new ee(.25,.25,1.2,6).rotateZ(Math.PI/2).translate(.45,1.8,0),new ee(.22,.22,1.4,6).translate(-.7,3.1,0),new ee(.22,.22,.9,6).rotateZ(Math.PI/2).translate(-.4,2.4,0)]);E.add(Ie($,Be("#4f8a3a"),Kn(i,o,80,4,80).map(R=>({...R,s:.8+o()*.6})))),E.add(Ie(new ee(1,1.18,1,7).translate(0,.5,0),Be("#ffffff"),Pi(i,o,40,60,260).map(R=>{let D=30+o()*60;return{...R,y:T-4,sx:D,sz:D*(.6+o()*.6),sy:40+o()*70,color:["#b8643a","#a4552f","#c7744a"][o()*3|0]}}).filter(R=>Ms(i,Math.max(R.sx,R.sz)*1.25)(R)),!0));let at=Kp(i,55,a+2.4,K);E.add(Ie(new $e(.45,.22,6,10).rotateX(Math.PI/2).translate(0,.22,0),Gn({color:"#1b1b1d"}),at.flatMap(R=>[0,1,2].map(D=>({...R,y:R.y+D*.42})))))}if(t==="alpine"){let B=Ai([new ee(.22,.3,1.8,6).translate(0,.9,0),new vn(2.4,4,7).translate(0,3.4,0),new vn(1.8,3.2,7).translate(0,5.4,0),new vn(1,1.8,7).translate(0,7,0)],!0);E.add(Ie(B,[Be("#6b4a2f"),Be("#2f5d3a"),Be("#3b7047"),Be("#f4f8ff")],Kn(i,o,300,3,120).map($=>({...$,s:.8+o()*.9})).filter($=>$.d>$.minD+2.4*$.s))),E.add(Ie(new Br(1,0),Be("#8d97a3"),Kn(i,o,50,4,90).map($=>{let at=1+o()*3;return{...$,y:$.y+at*.3,s:at}}).filter($=>$.d>$.minD+$.s*1.3)))}if(t==="autumn"){let B=Kn(i,o,260,3,120).map(R=>({...R,s:.8+o()*.7})).filter(R=>R.d>R.minD+2.4*R.s),$=["#d9622b","#e8a33d","#b83a2b","#c9b23a","#e07a2a","#6f8f2e"];E.add(Ie(new ee(.25,.35,3.2,6).translate(0,1.6,0),Be("#5b4030"),B)),E.add(Ie(new hl(2.4,0).translate(0,4.6,0),Be("#ffffff"),B.map(R=>({...R,color:$[o()*$.length|0]})),!0)),E.add(Ie(new ee(.9,.9,1.4,10).rotateZ(Math.PI/2).translate(0,.9,0),Be("#d8b25a"),Kn(i,o,40,6,60)));let at=Kn(i,o,6,20,80).filter(R=>R.d>R.minD+10);E.add(Ie(new Jt(10,6,14).translate(0,3,0),Be("#a8322a"),at)),E.add(Ie(new ee(0,7.6,4,4,1).rotateY(Math.PI/4).scale(1,1,1.35).translate(0,8,0),Be("#3a2c26"),at))}if(t==="neon"){let B=new Jt(1,1,1).translate(0,.5,0),$=Kn(i,o,140,12,90).map(R=>({...R,w:8+o()*12,dd:8+o()*12})).filter(R=>R.d>R.minD+2+Math.hypot(R.w,R.dd)/2);for(let R=0;R<3;R++){let D=Nl(11+R,!0);D.repeat.set(1,R+1),E.add(Ie(B,new ze({map:D,emissive:"#ffffff",emissiveMap:D,emissiveIntensity:.85}),$.filter((ot,rt)=>rt%3===R).map(ot=>({...ot,sx:ot.w,sz:ot.dd,sy:[12,28,48][R]+o()*20}))));let Z=Nl(21+R,!0);Z.repeat.set(2,4),E.add(Ie(B,new ze({map:Z,emissive:"#ffffff",emissiveMap:Z,emissiveIntensity:.7}),Pi(i,o,22,60+R*60,140+R*80).map(ot=>({...ot,sx:20+o()*25,sz:20+o()*25,sy:50+o()*90})).filter(ot=>Ms(i,Math.hypot(ot.sx,ot.sz)/2)(ot))))}let at=["#ff2bd6","#1de9ff","#7cff4f","#ffb703","#9d5cff"];E.add(Ie(new Jt(.4,1,1),new Zt({color:new xt(1.8,1.8,1.8),toneMapped:!1}),$.slice(0,50).map(R=>({x:R.x,y:6+o()*14,z:R.z,ry:R.ry,sx:1,sy:2+o()*3,sz:5+o()*6,color:at[o()*5|0]})),!0))}if(t==="volcano"){E.add(Ie(new Br(1,0),Be("#2e2522"),Kn(i,o,150,3,70).map(D=>{let Z=1.2+o()*4;return{...D,y:D.y+Z*.2,sx:Z,sy:Z*(.5+o()*.7),sz:Z*(.7+o()*.6)}}).filter(D=>D.d>D.minD+D.sx*1.3)));let B=Ai([new ee(.15,.3,5,5).translate(0,2.5,0),new ee(.08,.12,2.4,4).rotateZ(.8).translate(.8,3.6,0),new ee(.08,.12,2,4).rotateZ(-.9).translate(-.7,3.1,0)]);E.add(Ie(B,Be("#1d1614"),Kn(i,o,60,4,50).map(D=>({...D,s:.8+o()*.6}))));let $=Pi(i,o,12,430,430).find(Ms(i,270))||Pi(i,o,1,600,600)[0],at=new pt(new ee(60,260,240,12,1,!0),Be("#2a1d18"));at.position.set($.x,T+110,$.z),r.add(at);let R=new qn(new Bn({map:Oo(),color:new xt("#ff5a1f").multiplyScalar(1.2),transparent:!0,depthWrite:!1,blending:Xe,fog:!1,toneMapped:!1}));R.scale.set(260,200,1),R.position.set($.x,T+245,$.z),r.add(R),Yp(r,{x:$.x,y:T+232,z:$.z},u),E.add(Ie(new vn(1,1,7).translate(0,.5,0),Be("#3a2a24"),Pi(i,o,32,160,340).map(D=>{let Z=60+o()*80;return{...D,y:T-6,sx:Z,sz:Z,sy:50+o()*70}}).filter(D=>Ms(i,D.sx*1.05)(D))))}if(t==="alpine"){let B=new vn(1,1,8,3),$=B.attributes.position,at=[];for(let R=0;R<$.count;R++){let D=new xt($.getY(R)>.12?"#f4f8ff":"#7d8ea3");at.push(D.r,D.g,D.b)}B.setAttribute("color",new Yt(at,3)),B.translate(0,.5,0),E.add(Ie(B,new ze({vertexColors:!0,flatShading:!0}),Pi(i,o,34,170,340).map(R=>{let D=80+o()*90;return{...R,y:T-10,sx:D,sz:D,sy:100+o()*110}}).filter(R=>Ms(i,R.sx*1.05)(R))))}if(s.night){let B=new Float32Array(900);for(let at=0;at<300;at++){let R=o()*6.28,D=.15+o()*.8;B.set([Math.cos(R)*Math.cos(D)*850,Math.sin(D)*850,Math.sin(R)*Math.cos(D)*850],at*3)}let $=new Kt;$.setAttribute("position",new le(B,3)),f.add(new dn($,new an({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1})))}qp(r,i,t,{r:o,E:T,anim:u,night:s.night});let dt=null;if(t==="alpine"||t==="volcano"||t==="autumn"){let B=new Float32Array(1500);for(let at=0;at<500;at++)B.set([(o()-.5)*80,o()*30,(o()-.5)*80],at*3);let $=new Kt;if($.setAttribute("position",new le(B,3)),t==="autumn"){let at=[];for(let R=0;R<500;R++){let D=new xt(["#ff8a1f","#e0431a","#ffcf3a","#b5502a"][R%4]);at.push(D.r,D.g,D.b)}$.setAttribute("color",new Yt(at,3))}dt=new dn($,new an({color:t==="alpine"||t==="autumn"?"#ffffff":"#8c8380",vertexColors:t==="autumn",size:t==="alpine"?.22:t==="autumn"?.13:.14,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!0,blending:ls})),dt.frustumCulled=!1,r.add(dt),dt.userData.up=t==="volcano"}let lt=0;function Ot(B,$,at){lt+=B,f.position.copy(at.position),x.position.set($.x+d.x*70,$.y+d.y*70,$.z+d.z*70),x.target.position.copy($);for(let R of et){let D=R.userData.mat;D.emissiveIntensity+=(R.userData.base-D.emissiveIntensity)*Math.min(1,B*3)}for(let R of u)R(B);if(Lt.forEach((R,D)=>{R.pop>0&&(R.pop=Math.max(0,R.pop-B*4));let Z=R.on?1:R.pop;L.position.set(R.x,R.y+Math.sin(lt*3+D)*.15+(R.on?0:(1-R.pop)*2),R.z),L.rotation.set(0,lt*3+D*.4,0),L.scale.setScalar(Z*(R.on?1:1.6)),L.updateMatrix(),$t.setMatrixAt(D,L.matrix)}),$t.instanceMatrix.needsUpdate=!0,dt){let R=dt.geometry.attributes.position.array,D=dt.userData.up;for(let Z=0;Z<R.length;Z+=3)R[Z+1]+=(D?1.5:-(3+Z%7*.3))*B,R[Z]+=Math.sin(lt+Z)*B*.6,(R[Z+1]<0||R[Z+1]>30)&&(R[Z+1]=D?0:28,R[Z]=(Math.random()-.5)*80,R[Z+2]=(Math.random()-.5)*80);dt.geometry.attributes.position.needsUpdate=!0,dt.position.set(at.position.x,$.y-2,at.position.z)}}return{scene:r,env:g,update:Ot,skid:t==="alpine"?"#55606c":"#0c0c0e",night:s.night,bloom:s.bloom,accent:s.accent,flashGate(B){let $=et[B];$&&($.userData.mat.emissiveIntensity=3)},takeCoin(B){let $=Lt[B];$&&($.on=!1,$.pop=1)},resetCoins(){for(let B of Lt)B.on=!0,B.pop=0}}}var ln={racer:{name:"Racer",tier:1},carbon:{name:"Carbon",tier:1},checker:{name:"Checkered",tier:1},flames:{name:"Hot Flames",tier:2},tiger:{name:"Tiger",tier:2},camo:{name:"Digital Camo",tier:2},sakura:{name:"Sakura",tier:2},galaxy:{name:"Galaxy",tier:3},circuit:{name:"Neon Circuit",tier:3,glow:!0},lava:{name:"Lava Rock",tier:3,glow:!0},goldrush:{name:"Gold Rush",tier:3}},jt=1024,Le=512,sf={},Qp=(i,t=1)=>"#"+new xt(i).multiplyScalar(t).getHexString(),rf=i=>{let t=new xt(i);return .3*t.r+.59*t.g+.11*t.b};function Zs(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function Js(i,t){for(let e of[1,-1])i.save(),i.translate(0,Le/2),i.scale(1,e),t(i),i.restore()}var _M={racer(i,t){i.fillStyle=t,i.fillRect(0,0,jt,Le);let e=rf(t)>.55?"#15161b":"#ffffff",n="#ff8a1f";Js(i,s=>{s.fillStyle=e,s.beginPath(),s.moveTo(jt,70),s.lineTo(jt,120),s.lineTo(380,175),s.lineTo(40,175),s.lineTo(40,150),s.lineTo(360,140),s.closePath(),s.fill(),s.fillStyle=n,s.beginPath(),s.moveTo(jt,124),s.lineTo(jt,136),s.lineTo(390,186),s.lineTo(40,186),s.lineTo(40,179),s.lineTo(380,179),s.closePath(),s.fill(),s.fillStyle=e,s.fillRect(700,10,jt-700,9),s.fillRect(700,26,jt-700,5),s.beginPath(),s.arc(520,205,30,0,7),s.fillStyle="#fff",s.fill(),s.lineWidth=5,s.strokeStyle=n,s.stroke(),s.fillStyle="#15161b",MM(s,520,205,18,8)})},carbon(i,t){i.fillStyle="#16181c",i.fillRect(0,0,jt,Le);for(let e=0;e<Le;e+=8)for(let n=0;n<jt;n+=8){let s=((n>>3)+(e>>3))%2,r=i.createLinearGradient(n,e,n+8,e+8);r.addColorStop(0,s?"#2c3036":"#1d2024"),r.addColorStop(1,s?"#1a1c20":"#2a2d33"),i.fillStyle=r,i.fillRect(n,e,8,8)}Js(i,e=>{e.fillStyle=t,e.fillRect(0,150,jt,7),e.fillRect(0,90,jt,3)})},checker(i,t){i.fillStyle=t,i.fillRect(0,0,jt,Le);let e=Zs(5),n=28;for(let s=0;s<Le;s+=n)for(let r=0;r<jt*.62;r+=n){let o=1-r/(jt*.62);e()>o*1.25||(i.fillStyle=(r/n+s/n|0)%2?"#111":"#f4f4f4",i.fillRect(r,s,n,n))}},flames(i,t){let e=Qp(t,rf(t)>.4?.22:.55);i.fillStyle=e,i.fillRect(0,0,jt,Le);let n=Zs(9);Js(i,s=>{for(let[r,o]of[[10,420],[150,560],[195,480]])for(let a=0;a<7;a++){let l=r+(a-3)*9+(n()-.5)*8,c=o*(.55+n()*.45),h=s.createLinearGradient(jt,0,jt-c,0);h.addColorStop(0,"#fff6a8"),h.addColorStop(.25,"#ffd23f"),h.addColorStop(.6,"#ff7a1a"),h.addColorStop(1,"rgba(220,30,20,0)"),s.fillStyle=h,s.beginPath(),s.moveTo(jt,l-16),s.bezierCurveTo(jt-c*.4,l-30-n()*20,jt-c*.7,l+10,jt-c,l+(n()-.5)*30),s.bezierCurveTo(jt-c*.7,l+22,jt-c*.35,l+30,jt,l+16),s.closePath(),s.fill()}})},tiger(i){let t=i.createLinearGradient(0,0,0,Le);t.addColorStop(0,"#ffb347"),t.addColorStop(.5,"#ff8a1f"),t.addColorStop(1,"#ffb347"),i.fillStyle=t,i.fillRect(0,0,jt,Le);let e=Zs(3);i.fillStyle="#16100c",Js(i,n=>{for(let s=20;s<jt;s+=38+e()*34){let r=e()*40,o=120+e()*120,a=7+e()*12,l=(e()-.5)*60;n.beginPath(),n.moveTo(s-a,r),n.quadraticCurveTo(s+l,(r+o)/2,s,o),n.quadraticCurveTo(s+l+a*1.4,(r+o)/2,s+a,r),n.closePath(),n.fill()}})},camo(i,t){let e=["#1e2a1c","#3d4f2e","#6f7b48","#b0a675"].map(s=>"#"+new xt(s).lerp(new xt(t),.28).getHexString()),n=16;for(let s=0;s<Le;s+=n)for(let r=0;r<jt;r+=n){let o=Math.sin(r*.011+Math.sin(s*.02)*2)+Math.sin(s*.017-r*.006)+Math.sin((r+s)*.007)*.8;i.fillStyle=e[Math.max(0,Math.min(3,Math.floor((o+2.4)/4.8*4)))],i.fillRect(r,s,n,n)}},sakura(i){let t=i.createLinearGradient(0,0,jt,0);t.addColorStop(0,"#ffc4dc"),t.addColorStop(.6,"#fbe8f0"),t.addColorStop(1,"#fff6fa"),i.fillStyle=t,i.fillRect(0,0,jt,Le);let e=Zs(21);Js(i,n=>{n.strokeStyle="#4a2a2a",n.lineCap="round";for(let[s,r]of[[0,190],[260,230]])n.lineWidth=9,n.beginPath(),n.moveTo(s,r),n.bezierCurveTo(s+150,r-60,s+260,r-10,s+420,r-70),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(s+200,r-30),n.quadraticCurveTo(s+250,r-100,s+330,r-120),n.stroke();for(let s=0;s<70;s++){let r=e()*jt*.8,o=60+e()*190,a=7+e()*10;bM(n,r,o,a,e()<.5?"#ff7fb0":"#ffb3d1")}})},galaxy(i){i.fillStyle="#0a0622",i.fillRect(0,0,jt,Le);let t=Zs(11);i.globalCompositeOperation="lighter";for(let e=0;e<16;e++){let n=t()*jt,s=t()*Le,r=80+t()*200,o=["rgba(139,43,255,","rgba(43,107,255,","rgba(255,46,154,","rgba(46,230,255,"][e%4],a=i.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,o+".55)"),a.addColorStop(1,o+"0)"),i.fillStyle=a,i.fillRect(n-r,s-r,r*2,r*2)}for(let e=0;e<700;e++){let n=t()*jt,s=t()*Le,r=t()<.04?2.4:t()*1.2+.3;i.fillStyle=`rgba(255,255,255,${.5+t()*.5})`,i.beginPath(),i.arc(n,s,r,0,7),i.fill()}i.globalCompositeOperation="source-over"},circuit(i){i.fillStyle="#06080e",i.fillRect(0,0,jt,Le);let t=Zs(17);Js(i,e=>{e.lineWidth=3,e.lineCap="round",e.lineJoin="round";for(let n=0;n<60;n++){let s=t()*jt,r=t()*240;e.strokeStyle=t()<.8?"#2ee6ff":"#ff2e9a",e.beginPath(),e.moveTo(s,r);for(let o=0;o<4;o++)o%2?r+=(t()-.5)*90:s+=(t()-.5)*220,e.lineTo(s,r);e.stroke(),e.fillStyle=e.strokeStyle,e.beginPath(),e.arc(s,r,5,0,7),e.fill()}})},lava(i){i.fillStyle="#140b08",i.fillRect(0,0,jt,Le);let t=Zs(29);for(let e=0;e<160;e++){let n=t()*jt,s=t()*Le,r=20+t()*40;i.fillStyle=["#1e120d","#24150f","#1a0f0b"][e%3],i.beginPath();for(let o=0;o<6;o++){let a=o/6*6.28;i.lineTo(n+Math.cos(a)*r*(.7+t()*.4),s+Math.sin(a)*r*(.7+t()*.4))}i.fill()}i.lineCap="round";for(let e=0;e<46;e++){let n=t()*jt,s=t()*Le;i.strokeStyle=t()<.5?"#ff6a1a":"#ffb020",i.lineWidth=2+t()*4,i.beginPath(),i.moveTo(n,s);for(let r=0;r<6;r++)n+=(t()-.5)*70,s+=(t()-.5)*50,i.lineTo(n,s);i.stroke()}},goldrush(i){let t=i.createLinearGradient(0,0,0,Le);t.addColorStop(0,"#c9900f"),t.addColorStop(.3,"#ffe27a"),t.addColorStop(.5,"#f2c440"),t.addColorStop(.7,"#ffe27a"),t.addColorStop(1,"#c9900f"),i.fillStyle=t,i.fillRect(0,0,jt,Le),Js(i,e=>{e.strokeStyle="#1a1206",e.lineWidth=3,e.lineCap="round";for(let n=0;n<6;n++){let s=120+n*150,r=150+n%2*40;e.beginPath(),e.moveTo(s-90,r),e.bezierCurveTo(s-40,r-60,s+40,r-60,s+60,r-10),e.arc(s+40,r-10,20,0,Math.PI*1.5,!0),e.stroke()}e.lineWidth=4,e.beginPath(),e.moveTo(0,120),e.lineTo(jt,120),e.stroke(),e.lineWidth=2,e.beginPath(),e.moveTo(0,128),e.lineTo(jt,128),e.stroke()})}};function MM(i,t,e,n,s){i.beginPath();for(let r=0;r<10;r++){let o=-Math.PI/2+r*Math.PI/5,a=r%2?s:n;i.lineTo(t+Math.cos(o)*a,e+Math.sin(o)*a)}i.closePath(),i.fill()}function bM(i,t,e,n,s){i.fillStyle=s;for(let r=0;r<5;r++){let o=r/5*6.28;i.beginPath(),i.ellipse(t+Math.cos(o)*n*.55,e+Math.sin(o)*n*.55,n*.5,n*.32,o,0,7),i.fill()}i.fillStyle="#ffe27a",i.beginPath(),i.arc(t,e,n*.22,0,7),i.fill()}function tm(i,t,e=jt,n=Le){let s=document.createElement("canvas");if(s.width=jt,s.height=Le,_M[i](s.getContext("2d"),t),e===jt&&n===Le)return s;let r=document.createElement("canvas");return r.width=e,r.height=n,r.getContext("2d").drawImage(s,0,0,e,n),r}function em(i,t){let e=i+t;if(sf[e])return sf[e];let n=new nn(tm(i,t));return n.colorSpace=Se,n.anisotropy=4,sf[e]=n}function nm(i,t){let e={racer:t,carbon:"#1e2025",checker:t,flames:Qp(t,rf(t)>.4?.22:.55),tiger:"#ff8a1f",camo:"#4a5a36",sakura:"#f6dce8",galaxy:"#1a1046",circuit:"#0a0c14",lava:"#160c09",goldrush:"#e8b844"}[i]||t,n={carbon:{metalness:.35,roughness:.38},goldrush:{metalness:.95,roughness:.2},galaxy:{metalness:.4,roughness:.25},circuit:{metalness:.3,roughness:.3},lava:{metalness:.1,roughness:.55}}[i]||{};return{flat:e,mat:n,glow:!!ln[i].glow}}function zl(i,t,e=160,n=70){let s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d"),o=tm(i,t);r.save(),r.beginPath(),r.moveTo(e*.04,n*.78),r.lineTo(e*.04,n*.5),r.quadraticCurveTo(e*.08,n*.4,e*.22,n*.38),r.lineTo(e*.34,n*.14),r.quadraticCurveTo(e*.5,n*.06,e*.66,n*.16),r.lineTo(e*.78,n*.38),r.quadraticCurveTo(e*.96,n*.42,e*.97,n*.6),r.lineTo(e*.97,n*.78),r.closePath(),r.clip(),r.drawImage(o,0,Le*.62,jt,Le*.3,0,0,e,n),r.restore(),r.fillStyle="#121318";for(let a of[.24,.76])r.beginPath(),r.arc(e*a,n*.78,n*.17,0,7),r.fill(),r.fillStyle="#c9ced6",r.beginPath(),r.arc(e*a,n*.78,n*.08,0,7),r.fill(),r.fillStyle="#121318";return r.fillStyle="rgba(120,170,220,.55)",r.beginPath(),r.moveTo(e*.36,n*.2),r.quadraticCurveTo(e*.5,n*.12,e*.63,n*.2),r.lineTo(e*.72,n*.37),r.lineTo(e*.3,n*.37),r.closePath(),r.fill(),s}var im={hatch:{L:3.9,R:.34,wf:1.3,wr:-1.25,roof:[-1.35,.25],pillars:[-.5],belt:.85,head:"round",tail:"block",ex:"single",doors:[.62,-.55],body:[[-1.95,.78,.36,.84,3],[-1.88,.85,.28,.94,4],[-1.5,.86,.26,.98,4],[0,.86,.26,.92,4],[.95,.85,.26,.86,4],[1.6,.82,.27,.74,4],[1.88,.75,.3,.62,3.5],[1.96,.6,.34,.5,3]],cab:[[1.02,.74,.66,.82,.86],[.85,.76,.64,.82,1.08],[.2,.77,.62,.84,1.42],[-1.2,.77,.62,.86,1.45],[-1.7,.76,.64,.9,1.22],[-1.84,.74,.66,.92,.95]]},coupe:{L:4.4,R:.36,wf:1.45,wr:-1.4,roof:[-.9,.05],pillars:[-.45],belt:.9,head:"slim",tail:"slim",ex:"twin",fin:"shark",doors:[.75],body:[[-2.2,.8,.36,.78,3],[-2.12,.9,.28,.86,4],[-1.6,.93,.26,.88,4],[-.4,.93,.25,.84,4],[.6,.92,.25,.8,4],[1.6,.9,.26,.7,4],[2.1,.82,.28,.58,3.5],[2.23,.64,.32,.48,3]],cab:[[.88,.76,.68,.76,.8],[.66,.78,.66,.76,.98],[0,.79,.62,.78,1.24],[-.75,.79,.62,.8,1.26],[-1.45,.78,.66,.82,1.02],[-1.88,.76,.68,.84,.88]]},rally:{L:4.35,R:.41,wf:1.4,wr:-1.35,roof:[-1.9,.4],pillars:[-.4,-1.3],belt:.9,head:"round",tail:"block",ex:"single",rack:!0,cladding:!0,doors:[.72,-.42],body:[[-2.17,.82,.44,.96,3],[-2.1,.88,.38,1.04,4],[-1.6,.9,.36,1.06,4],[0,.9,.36,1.02,4],[1,.89,.36,.98,4],[1.7,.86,.37,.86,4],[2.1,.8,.4,.72,3.5],[2.19,.64,.44,.6,3]],cab:[[1.12,.78,.7,.98,1.02],[.95,.79,.68,.98,1.2],[.35,.8,.66,.98,1.55],[-1.85,.8,.66,.98,1.57],[-2.04,.8,.68,.98,1.3],[-2.1,.79,.7,1,1.08]]},muscle:{L:4.84,R:.41,wf:1.6,wr:-1.55,roof:[-1.3,-.15],pillars:[-.7],belt:.92,head:"twin",tail:"wide",ex:"quad",scoop:!0,doors:[.55],body:[[-2.42,.88,.38,.9,3.5],[-2.34,.94,.3,.98,5],[-1.6,.96,.28,.98,5],[0,.96,.28,.98,5],[1.4,.95,.28,.96,5],[2.1,.93,.3,.92,5],[2.36,.88,.32,.84,4],[2.43,.78,.36,.7,3.5]],cab:[[.48,.8,.7,.92,.96],[.3,.81,.68,.92,1.12],[-.25,.82,.64,.94,1.4],[-1.2,.82,.64,.94,1.42],[-1.7,.81,.68,.94,1.18],[-1.86,.8,.7,.94,1]]},super:{L:4.56,R:.37,wf:1.34,wr:-1.45,roof:[-1,.05],pillars:[-.5],belt:.84,head:"led",tail:"slim",ex:"center",intakes:!0,vents:!0,blackPillars:!0,doors:[.78],body:[[-2.27,.86,.34,.76,3],[-2.15,.95,.26,.84,4],[-1.4,.98,.24,.86,4],[-.6,.96,.24,.8,4],[.5,.96,.24,.74,4],[1.5,.94,.25,.7,3.5],[2.1,.86,.27,.56,3],[2.29,.68,.29,.45,3]],cab:[[.98,.72,.6,.64,.68],[.72,.74,.58,.66,.86],[0,.75,.52,.7,1.1],[-.85,.74,.52,.72,1.12],[-1.6,.72,.56,.76,.92],[-1.97,.7,.58,.8,.84]]},hyper:{L:4.74,R:.38,wf:1.38,wr:-1.52,roof:[-.85,.15],pillars:[-.4],belt:.87,head:"led",tail:"bar",ex:"center",intakes:!0,vents:!0,blackPillars:!0,fin:"blade",canards:!0,doors:[.85],body:[[-2.37,.88,.32,.7,3],[-2.25,.98,.24,.78,4],[-1.5,1,.22,.82,4],[-.7,.98,.22,.76,4],[.4,.98,.22,.7,4],[1.5,.96,.23,.66,3.5],[2.2,.88,.25,.53,3],[2.38,.68,.27,.42,3]],cab:[[1.08,.68,.56,.58,.62],[.86,.7,.54,.6,.8],[.1,.72,.48,.64,1.06],[-.7,.71,.48,.68,1.08],[-1.7,.66,.5,.72,.86],[-2.07,.6,.52,.74,.78]]}};for(let i of Object.values(im))i.cab.sort((t,e)=>t[0]-e[0]),i.body.sort((t,e)=>t[0]-e[0]);function ko(i){let t=i.length;return(e,n)=>{let s=0;for(;s<t-2&&e>i[s+1][0];)s++;let r=Math.max(0,Math.min(1,(e-i[s][0])/(i[s+1][0]-i[s][0]))),o=i[Math.max(0,s-1)][n],a=i[s][n],l=i[s+1][n],c=i[Math.min(t-1,s+2)][n];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}}var kl=(i,t)=>Math.sign(i)*Math.pow(Math.abs(i),t),Ii=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};var lf=20,gi=lf*2;function cn(i,t){let e=i.fb,n=e(t,1),s=e(t,2),r=e(t,3),o=Math.max(.05,r-s),a=s+o*i.belt,l=n*.87,c=Math.min(o*.3,.15,l*.5),h=Math.min(.075,o*.12,n*.2);return{w:n,yb:s,yt:r,h:o,ys:a,wb:l,rb:c,rs:h,wt:n-h}}function Hl(i,t){let{w:e,yb:n,yt:s,ys:r,wb:o,rb:a,rs:l,wt:c}=cn(i,t),h=[];h.push([0,n],[(o-a)*.55,n]);for(let f=0;f<4;f++){let d=-Math.PI/2+f/4*Math.PI/2;h.push([o-a+Math.cos(d)*a,n+a+Math.sin(d)*a])}for(let f=0;f<5;f++){let d=f/5;h.push([o+(e-o)*Math.sin(d*Math.PI/2),n+a+(r-l-n-a)*d])}for(let f=0;f<4;f++){let d=f/4*Math.PI*.46;h.push([e-l+Math.cos(d)*l,r-l+Math.sin(d)*l])}for(let f of[0,.2,.42,.64,.84]){let d=c*(1-f)*.985;h.push([d,r+(s-r)*(1-Math.pow(d/c,2.4))])}let u=[...h,[0,s]];for(let f=h.length-1;f>=1;f--)u.push([-h[f][0],h[f][1]]);return u}function jn(i,t,e){let n=cn(i,t),s=Math.min(Math.abs(e),n.wt*.985);return n.ys+(n.yt-n.ys)*(1-Math.pow(s/n.wt,2.4))}function EM(i,t=72){let e=i.body,n=e[0][0],s=e[e.length-1][0],r=[],o=[],a=[],l=[],c=2*i.R+.1;for(let u=0;u<=t;u++){let f=n+(s-n)*u/t,d=cn(i,f),g=(d.yb+d.yt)/2,x=d.h/2;Hl(i,f).forEach(([p,_],y)=>{let v=p,P=_,b=0,w=(_-g)/x;for(let C of[i.wf,i.wr]){let z=f-C,T=Ii(i.R+.55,i.R*.5,Math.abs(z)),k=Ii(.22*d.w,.86*d.w,Math.abs(v));w>-.15&&P<c+.02&&(P+=(c+.02-P)*T*k*Ii(-.15,.25,w)),Math.abs(v)>d.wb*.9&&(v+=Math.sign(v)*.035*Ii(i.R+.55,i.R*.3,Math.abs(z))*Ii(-.6,.2,w))}for(let C of[i.wf,i.wr]){let z=f-C,T=i.R+.1;if(Math.abs(z)<T+.12&&w<.3){let k=Math.min(c-.05,i.R+Math.sqrt(Math.max(0,T*T-z*z))*Ii(T+.12,T-.02,Math.abs(z))),G=Ii(.45*d.w,.9*d.w,Math.abs(v));P<k&&(b=Math.max(b,G*Ii(0,.06,k-P)),P+=(k-P)*G)}}let I=.6+.4*Ii(-.95,.15,w),S=.88+.12*Ii(0,.25,Math.min(f-n,s-f)/(s-n));r.push(v,P,f);let M=(1-b*.92)*I*S;o.push(M,M,M),a.push(u/t,y/gi)})}for(let u=0;u<t;u++)for(let f=0;f<gi;f++){let d=u*gi+f,g=u*gi+(f+1)%gi,x=d+gi,m=g+gi;l.push(d,g,x,g,m,x)}for(let[u,f]of[[0,!0],[t,!1]]){let d=n+(s-n)*u/t,g=cn(i,d),x=r.length/3;r.push(0,(g.yb+g.yt)/2,d+(f?-.03:.03)),o.push(1,1,1),a.push(u/t,.5);for(let m=0;m<gi;m++){let p=u*gi+m,_=u*gi+(m+1)%gi;f?l.push(x,_,p):l.push(x,p,_)}}let h=new Kt;return h.setAttribute("position",new Yt(r,3)),h.setAttribute("color",new Yt(o,3)),h.setAttribute("uv",new Yt(a,2)),h.setIndex(l),h.computeVertexNormals(),h}function SM(i,t=44,e=28){let n=i.cab,s=ko(n),r=n[0][0],o=n[n.length-1][0],a=[],l=[];for(let d=0;d<=t;d++){let g=r+(o-r)*d/t,x=s(g,1),m=s(g,2),p=s(g,4),_=Math.min(s(g,3),jn(i,g,x)-.012),y=(_+p)/2,v=(p-_)/2;for(let P=0;P<e;P++){let b=P/e*Math.PI*2,w=Math.cos(b),I=Math.sin(b),S=I>0?x+(m-x)*I:x,M=S*kl(w,.5),C=y+v*kl(I,.55);a.push(M,C,g),l.push(g*.6+(Math.abs(w)>.5?0:M*.6),C*.8+(Math.abs(w)>.5?M*.15:0))}}let c=[],h=[],u=[];for(let d=0;d<t;d++)for(let g=0;g<e;g++){let x=d*e+g,m=d*e+(g+1)%e,p=x+e,_=m+e,y=r+(o-r)*(d+.5)/t,v=(g+.5)/e*Math.PI*2,P=Math.sin(v),b=Math.cos(v),w=Math.abs(b),I=s(y,1),S=s(y,2),M=s(y,4),C=Math.min(s(y,3),jn(i,y,I)-.012),z=(C+M)/2,T=(M-C)/2,k=(P>0?I+(S-I)*P:I)*kl(b,.5),G=z+T*kl(P,.55),W=G-jn(i,y,k),st=P>.82&&y>i.roof[0]-.04&&y<i.roof[1]+.02,j=i.pillars.some(X=>Math.abs(y-X)<.075)&&w>.3,Q=P>-.7&&P<.9&&w>.55&&w<.8&&(y>i.roof[1]-.05||y<i.roof[0]+.05),ut=[x,m,p,m,_,p];W<.045?u.push(...ut):st?c.push(...ut):j||Q?(i.blackPillars?u:c).push(...ut):h.push(...ut)}let f=new Kt;return f.setAttribute("position",new Yt(a,3)),f.setAttribute("uv",new Yt(l,2)),f.setIndex([...c,...h,...u]),f.addGroup(0,c.length,0),f.addGroup(c.length,h.length,1),f.addGroup(c.length+h.length,u.length,2),f.computeVertexNormals(),f}var $r={};function Ho(i,t,e,n,s){if($r[i])return $r[i];let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let o=new nn(r);return o.colorSpace=Se,o.anisotropy=4,s&&(o.wrapS=o.wrapT=Xi),$r[i]=o}function TM(){return Ho("glass",256,256,i=>{let t=i.createLinearGradient(0,0,0,256);t.addColorStop(0,"#9ab9cf"),t.addColorStop(.5,"#4a6474"),t.addColorStop(1,"#1c2730"),i.fillStyle=t,i.fillRect(0,0,256,256),i.save(),i.translate(128,128),i.rotate(-.7);for(let[e,n,s]of[[-90,26,.3],[-50,9,.2],[10,40,.16],[70,12,.24]])i.fillStyle=`rgba(255,255,255,${s})`,i.fillRect(e,-200,n,400);i.restore()},!0)}function wM(){return Ho("grille",128,64,(i,t,e)=>{i.fillStyle="#050608",i.fillRect(0,0,t,e),i.strokeStyle="#3a3f48",i.lineWidth=2;for(let n=0,s=0;n<e+8;n+=7,s++)for(let r=s%2*6;r<t+8;r+=12){i.beginPath();for(let o=0;o<6;o++){let a=o/6*Math.PI*2;i.lineTo(r+Math.cos(a)*5,n+Math.sin(a)*4)}i.closePath(),i.stroke()}},!0)}function AM(){return Ho("plate",256,64,(i,t,e)=>{i.fillStyle="#f2f2ee",i.fillRect(0,0,t,e),i.strokeStyle="#222",i.lineWidth=5,i.strokeRect(4,4,t-8,e-8),i.fillStyle="#2a4fd6",i.fillRect(6,6,30,e-12),i.fillStyle="#16181c",i.font='bold 40px "Russo One", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("DRFT 25",t/2+14,e/2+2)})}function RM(){return Ho("tyre",1024,128,(i,t,e)=>{i.fillStyle="#1b1c1f",i.fillRect(0,0,t,e);let n=e*.36,s=e*.64;i.fillStyle="#232428",i.fillRect(0,n,t,s-n),i.fillStyle="#0d0d0f";for(let r of[.44,.5,.56])i.fillRect(0,e*r-1.5,t,3);for(let r=0;r<t;r+=16)i.fillRect(r,n,4,e*.07),i.fillRect(r+8,s-e*.07,4,e*.07);i.fillStyle="rgba(210,212,216,.55)",i.font='bold 13px "Russo One", sans-serif',i.textBaseline="middle";for(let[r,o]of[[e*.16,!1],[e*.84,!0]])for(let a=0;a<2;a++)i.save(),i.translate(a*t/2+t/4,r),o&&i.scale(-1,-1),i.textAlign="center",i.fillText("DRIFT FEVER   R18",0,0),i.restore();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(0,e*.27,t,2),i.fillRect(0,e*.73,t,2)},!0)}function CM(){return Ho("disc",128,128,(i,t)=>{let e=t/2;i.fillStyle="#6b7079",i.beginPath(),i.arc(e,e,e,0,7),i.fill(),i.fillStyle="#3a3e45",i.beginPath(),i.arc(e,e,e*.45,0,7),i.fill(),i.strokeStyle="rgba(30,32,36,.8)",i.lineWidth=3;for(let n=0;n<18;n++){let s=n/18*Math.PI*2;i.beginPath(),i.arc(e,e,e*.75,s,s+.35),i.stroke()}i.fillStyle="#222";for(let n=0;n<24;n++){let s=n/24*Math.PI*2,r=e*(.6+n%2*.2);i.beginPath(),i.arc(e+Math.cos(s)*r,e+Math.sin(s)*r,2.2,0,7),i.fill()}})}function PM(){if($r.flake)return $r.flake;let i=128,t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=11,r=()=>(s=s*16807%2147483647)/2147483647;for(let a=0;a<i*i;a++)n.data[a*4]=128+(r()-.5)*90,n.data[a*4+1]=128+(r()-.5)*90,n.data[a*4+2]=255,n.data[a*4+3]=255;e.putImageData(n,0,0);let o=new nn(t);return o.wrapS=o.wrapT=Xi,o.repeat.set(40,24),$r.flake=o}function IM(i){let t=ko(i.cab),e=i.cab[i.cab.length-1][0],n=i.cab[0][0],s=(e+n)/2,r=t(s,1),o=Math.min(t(s,3),jn(i,s,r)-.012),a=Math.min(t(s,4),t(s-.35,4))-o,l=Math.min(1,a/.62),c=[],h=(g,x,m,p,_,y,v=0)=>{let P=new Jt(g,x,m);v&&P.rotateX(v),P.translate(p,_,y),c.push(P)},u=s-.05,f=.5*l;for(let g of[-1,1])h(r*.55,.1,.5,g*r*.45,o+.07,u),h(r*.55,f,.1,g*r*.45,o+.1+f/2,u-.26,-.18);h(r*1.7,.12,.3,0,o+.22*l,Math.min(e-.25,s+.55));let d=new $e(.15,.025,6,16);return d.rotateX(-1.1),d.translate(r*.45,o+.36*l,Math.min(e-.35,s+.4)),c.push(d.toNonIndexed()),h(r*.4,.3*l,.22,r*.45,o+.12+.15*l,u-.1),{geo:Ai(c.map(g=>g.index?g.toNonIndexed():g)),mid:s,yb:o,cw:r,H:a}}function LM(i){let t=ko(i.cab),e=[],n=[],s=i.body[0][0],r=i.body[i.body.length-1][0],o=80;for(let[l,c]of[[-.34,-.14],[.14,.34]]){let h=e.length/3;for(let u=0;u<=o;u++){let f=s+.04+(r-s-.08)*u/o,d=jn(i,f,l)+.006,g=jn(i,f,c)+.006;if(f>i.roof[0]&&f<i.roof[1]&&(d=Math.max(d,t(f,4)+.006),g=d),e.push(l,d,f,c,g,f),u<o){let x=h+u*2;n.push(x,x+2,x+1,x+1,x+2,x+3)}}}let a=new Kt;return a.setAttribute("position",new Yt(e,3)),a.setIndex(n),a.computeVertexNormals(),a}var of={},af={};function DM(i,t){let e=i+"_"+t;if(of[e])return of[e];let n=t?.18:.155,s=[[.62,-1],[.75,-1],[.88,-.98],[.95,-.9],[.99,-.72],[1,-.5],[1,.5],[.99,.72],[.95,.9],[.88,.98],[.75,1],[.62,1]];return of[e]=new Fr(s.map(([r,o])=>new gt(r*i,o*n)),40).rotateZ(Math.PI/2)}function UM(i,t,e){let n=i+"_"+t+"_"+e;if(af[n])return af[n];let s=e*.1,r=[],o=i*.64;r.push(new ee(o,o,.24,28,1,!0).rotateZ(Math.PI/2)),r.push(new $e(o-.006,.016,6,32).rotateY(Math.PI/2).translate(s+e*.025,0,0));let a=t===2?10:t===1?6:5;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(u,f)=>{let d=new Jt(.045,u,o-i*.16);return d.translate(0,f,(o+i*.16)/2),d.rotateX(c),d.translate(s-e*.015,0,0),d};if(t===0)r.push(h(i*.07,-i*.045),h(i*.07,i*.045));else if(t===1)r.push(h(i*.17,0));else{let u=new Jt(.04,i*.045,o-i*.14);u.translate(0,0,(o+i*.14)/2),u.rotateY(e*0),u.rotateX(c),u.rotateZ(0),u.translate(s-e*.01,0,0);let f=u.clone();f.rotateX(.34),r.push(u,f)}}r.push(new ee(i*.17,i*.2,.07,16).rotateZ(Math.PI/2).translate(s+e*.015,0,0));for(let l=0;l<5;l++){let c=l/5*Math.PI*2;r.push(new ee(.016,.016,.04,6).rotateZ(Math.PI/2).translate(s+e*.045,Math.cos(c)*i*.1,Math.sin(c)*i*.1))}return af[n]=Ai(r.map(l=>l.index?l.toNonIndexed():l))}function NM(i){if(i.skin&&ln[i.skin]){let n=nm(i.skin,i.paint),s=new zn({color:"#ffffff",map:em(i.skin,i.paint),vertexColors:!0,envMapIntensity:1.1,metalness:.3,roughness:.28,clearcoat:1,clearcoatRoughness:.05,...n.mat});return n.glow&&(s.emissiveMap=s.map,s.emissive=new xt("#ffffff"),s.emissiveIntensity=.85),s.userData.flat=n.flat,s}let t={gloss:{metalness:.35,roughness:.24,clearcoat:1,clearcoatRoughness:.04},metal:{metalness:.85,roughness:.3,clearcoat:1,clearcoatRoughness:.06},matte:{metalness:.05,roughness:.72,clearcoat:0,clearcoatRoughness:1},pearl:{metalness:.25,roughness:.18,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.7,iridescenceThicknessRange:[180,620]},candy:{metalness:.7,roughness:.14,clearcoat:1,clearcoatRoughness:0},chrome:{metalness:1,roughness:.04,clearcoat:1,clearcoatRoughness:0}}[i.finish||"gloss"]||{},e=new zn({color:i.paint,vertexColors:!0,envMapIntensity:i.finish==="chrome"?2:i.finish==="candy"?1.6:1.25,...t});return i.finish==="chrome"&&e.color.lerp(new xt("#ffffff"),.55),(i.finish==="metal"||i.finish==="candy")&&(e.normalMap=PM(),e.normalScale.set(i.finish==="candy"?.1:.18,i.finish==="candy"?.1:.18)),e}function Go(i,t){let e=im[i.type];e.fb=e.fb||ko(e.body);let n=new Me,s=new Me;n.add(s);let r=e.fb,o=ko(e.cab),a=e.body[e.body.length-1][0],l=e.body[0][0],c=r(0,1)*2,h=NM(t),u=h.clone();u.vertexColors=!1,h.map&&(u.map=null,u.emissiveMap=null,u.emissive.set(0),u.color.set(h.userData.flat));let f=new zn({map:TM(),color:"#2a3a4a",metalness:.1,roughness:.02,clearcoat:1,clearcoatRoughness:0,transparent:!0,opacity:.8,envMapIntensity:2.6,depthWrite:!1,side:pe}),d=new zn({color:"#0b0c0f",metalness:.2,roughness:.25,clearcoat:1,clearcoatRoughness:.1}),g=new ge({color:"#16181c",metalness:.1,roughness:.75}),x=new ge({color:"#eef1f4",metalness:1,roughness:.08}),m=new Zt({color:new xt(2.6,2.6,2.4),toneMapped:!1}),p=new Zt({color:new xt(.7,.04,.05),toneMapped:!1}),_=new zn({color:"#cfd8e0",metalness:.6,roughness:.05,clearcoat:1,emissive:new xt("#ffffff"),emissiveIntensity:.6}),y=new pt(EM(e),h);y.castShadow=!0,s.add(y);let v=new pt(SM(e),[u,f,d]);v.castShadow=!0,v.renderOrder=2,s.add(v);let P=IM(e);s.add(new pt(P.geo,new ge({color:"#1c1e23",roughness:.8})));{let R=Math.min(P.yb+.62,Math.min(o(P.mid-.1,4),o(P.mid-.35,4))-.15),D=new Me;D.position.set(P.cw*.45,R,P.mid-.12),D.add(new pt(new fi(.13,16,12),new ge({color:t.helmet||"#f4f4f4",metalness:.2,roughness:.3}))),D.add(new pt(new fi(.132,16,8,-1.1,2.2,1.1,.7),new ge({color:"#111",metalness:.6,roughness:.1}))),s.add(D)}let b=(R,D,Z)=>new Jt(R,D,Z),w={black:[],dark:[],chrome:[],paint:[],head:[],tail:[],lens:[],seam:[]},I=(R,D,Z=0,ot=0,rt=0)=>(D.translate(Z,ot,rt),w[R].push(D.index?D.toNonIndexed():D),D),S=(R,D)=>{let Z=Hl(e,R),ot=Z[0][0],rt=9;for(let Et=0;Et<=lf;Et++){let Ct=Math.abs(Z[Et][1]-D);Ct<rt&&(rt=Ct,ot=Z[Et][0])}return ot},M=(R,D)=>{let Z=Hl(e,R),ot=0;for(let rt=0;rt<lf;rt++){let[Et,Ct]=Z[rt],[Ht,O]=Z[rt+1];(D-Ct)*(D-O)<=0&&Ct!==O&&(ot=Math.max(ot,Et+(Ht-Et)*(D-Ct)/(O-Ct)))}return ot},C=(R,D,Z)=>{let ot=Z>0?a:l;for(let rt=0;rt<120;rt++){let Et=ot-Z*rt*.008;if(M(Et,D)>=Math.abs(R))return Et}return ot-Z*.96},z=(R,D,Z)=>{let ot=C(R,D,Z),rt=.025,Et=(C(R+rt,D,Z)-C(R-rt,D,Z))/(2*rt),Ct=(C(R,D+rt,Z)-C(R,D-rt,Z))/(2*rt),Ht=new N(-Et*Z,-Ct*Z,1).normalize();return Ht.z*=Z,Z<0&&(Ht.x=Et,Ht.y=Ct,Ht.z=-1,Ht.normalize()),Ht.z=Z*Math.max(Math.abs(Ht.z),.55),Ht.normalize(),{z:ot,q:new Ti().setFromUnitVectors(new N(0,0,Z),Ht),n:Ht}},T=(R,D,Z,ot,rt,Et=.012)=>{let Ct=z(Z,ot,rt);D.applyQuaternion(Ct.q),I(R,D,Z+Ct.n.x*Et,ot+Ct.n.y*Et,Ct.z+Ct.n.z*Et)},k=cn(e,a-.1);if(I("dark",b(c*.84,.035,.3),0,r(a-.18,2)-.015,a-.18),e.canards)for(let R of[-1,1])I("black",b(.26,.02,.14).rotateZ(R*.25),R*k.w*.78,k.yb+.12,a-.2);let G=cn(e,a),W=G.yb+(G.yt-G.yb)*.38,st=Math.min(c*(e.head==="twin"?.6:.46),M(a,W)*1.5),j=Math.max(.07,(G.yt-G.yb)*.34),Q=new ge({map:wM(),roughness:.6,metalness:.3});{let R=z(0,W,1),D=new pt(new Pe(st,j),Q);D.quaternion.copy(R.q),D.position.set(0,W,R.z+.012),s.add(D);let Z=b(st+.04,.022,.025);T("black",Z,0,W+j/2+.01,1,.01)}let ut=new ge({map:AM(),roughness:.5});{let R=G.yb+.07,D=z(0,R,1),Z=new pt(new Pe(.46,.11),ut);Z.quaternion.copy(D.q),Z.position.set(0,R,D.z+.016),s.add(Z)}let X=a-.2,ht=cn(e,X),Rt=ht.yb+(jn(e,X,ht.w*.6)-ht.yb)*.74,et=Math.min(ht.w*.62,M(a-.2,Rt)-.2);for(let R of[-1,1]){let D=[],Z=(ot,rt)=>D.push([ot,rt]);if(e.head==="led")Z("black",b(.44,.075,.1)),Z("head",b(.4,.016,.03).translate(0,.022,.05)),Z("head",b(.016,.05,.03).translate(-R*.19,0,.05)),Z("lens",new ee(.026,.026,.03,14).rotateX(Math.PI/2).translate(R*.08,-.012,.05));else if(e.head==="slim"){Z("black",b(.44,.08,.16)),Z("head",b(.42,.02,.03).translate(0,-.028,.07));for(let ot of[-.08,.08])Z("lens",new ee(.034,.034,.03,14).rotateX(Math.PI/2).translate(ot,.008,.07))}else if(e.head==="twin"){Z("black",b(.46,.14,.14));for(let ot of[-.11,.11])Z("lens",new ee(.055,.055,.03,18).rotateX(Math.PI/2).translate(ot,0,.07)),Z("head",new $e(.06,.009,6,20).translate(ot,0,.086))}else Z("black",b(.34,.15,.14)),Z("lens",new ee(.06,.06,.03,18).rotateX(Math.PI/2).translate(R*.03,0,.07)),Z("head",new $e(.068,.011,6,22).translate(R*.03,0,.088)),Z("head",b(.08,.02,.02).translate(-R*.1,-.04,.075));for(let[ot,rt]of D)rt.scale(1,1,.45),T(ot,rt,R*et,Rt,1,.025)}let ft=l+.14,Pt=cn(e,ft),bt=Pt.yb+(jn(e,ft,Pt.w*.6)-Pt.yb)*.8,Ut=Math.min(Pt.w*.64,M(l+.14,bt)-.28);for(let R of[-1,1]){let D=[];e.tail==="bar"?D.push(["black",b(.5,.06,.1)]):e.tail==="wide"?D.push(["black",b(.62,.14,.1)],["tail",b(.58,.1,.03).translate(0,0,-.045)],["chrome",b(.02,.1,.03).translate(0,0,-.05)]):e.tail==="slim"?D.push(["black",b(.5,.07,.1)],["tail",b(.48,.03,.03).translate(0,.012,-.045)],["tail",b(.03,.05,.03).translate(-R*.22,-.01,-.045)]):D.push(["black",b(.34,.17,.1)],["tail",b(.3,.08,.03).translate(0,.03,-.045)],["chrome",b(.3,.04,.03).translate(0,-.04,-.045)]);for(let[Z,ot]of D)ot.scale(1,1,.45),T(Z,ot,R*Ut,bt,-1,.02)}e.tail==="bar"&&T("tail",b(Ut*2+.3,.03,.02),0,bt+.012,-1,.03);let Nt=cn(e,l+.12);I("dark",b(c*.78,.13,.3),0,Nt.yb+.03,l+.16);for(let R=-2;R<=2;R++)I("dark",b(.025,.13,.3),R*c*.15,Nt.yb-.02,l+.18);{let R=Nt.yb+(Nt.ys-Nt.yb)*.5,D=z(0,R,-1),Z=new pt(new Pe(.46,.11),ut);Z.quaternion.copy(D.q),Z.position.set(0,R,D.z-.016),s.add(Z)}let zt=Nt.yb+.05,oe={single:[[.42,.07]],twin:[[-.42,.07],[.42,.07]],quad:[[-.5,.065],[-.36,.065],[.36,.065],[.5,.065]],center:[[-.09,.08],[.09,.08]]}[e.ex],mt=[],St=new Zt({color:new xt(.5,1.6,2.6),transparent:!0,opacity:.95,blending:Xe,depthWrite:!1,toneMapped:!1});for(let[R,D]of oe){let Z=C(R,Math.max(zt,Nt.yb+.02),-1);I("chrome",new ee(D,D*1.08,.22,16,1,!0).rotateX(Math.PI/2),R,zt,Z-.04),I("black",new On(D*.8,14).rotateY(Math.PI),R,zt,Z-.1);let ot=new pt(new vn(D*1.6,1,8).rotateX(-Math.PI/2).translate(0,0,-.5),St);ot.position.set(R,zt,Z-.16),ot.visible=!1,s.add(ot),mt.push(ot)}for(let R of[-1,1]){let D=(e.wf+e.wr)/2,Z=e.wf-e.wr-e.R*2.6;I("dark",b(.06,.085,Z),R*(cn(e,D).wb+.02),r(D,2)+.03,D);for(let Mt of[e.wf,e.wr]){let J=e.R+.1,tt=e.cladding?.085:.045,yt=24,vt=[];for(let ce=0;ce<=yt;ce++){let Ne=.12+(Math.PI-.24)*ce/yt,hn=Mt+Math.cos(Ne)*J,xe=e.R+Math.sin(Ne)*J;vt.push(S(hn,Math.min(xe,cn(e,hn).ys-.03)))}let kt=vt.map((ce,Ne)=>{let hn=0,xe=0;for(let ae=-3;ae<=3;ae++){let je=Math.min(yt,Math.max(0,Ne+ae));hn+=vt[je],xe++}return hn/xe}),ue=[],Te=[];for(let ce=0;ce<=yt;ce++){let Ne=.12+(Math.PI-.24)*ce/yt,hn=Math.cos(Ne),xe=Math.sin(Ne),ae=R*(kt[ce]+.012),je=R*(kt[ce]+.012+(e.cladding?.05:.03));if(ue.push(ae,e.R+xe*(J-.01),Mt+hn*(J-.01),je,e.R+xe*(J+tt*.4),Mt+hn*(J+tt*.4),ae*.985,e.R+xe*(J+tt),Mt+hn*(J+tt)),ce<yt){let Qe=ce*3;for(let[En,Sn]of[[0,1],[1,2]]){let Ki=Qe+En,Ln=Qe+Sn,Cs=Qe+3+En,Qr=Qe+3+Sn;R>0?Te.push(Ki,Cs,Ln,Ln,Cs,Qr):Te.push(Ki,Ln,Cs,Ln,Qr,Cs)}}}let ne=new Kt;ne.setAttribute("position",new Yt(ue,3)),ne.setIndex(Te),ne.computeVertexNormals(),w.dark.push(ne.toNonIndexed())}let ot=r(D,2)+.12,rt=[e.wf-e.R-.22,...e.doors.slice(1),e.doors.length>1?e.doors[e.doors.length-1]-1.05:e.wr+e.R+.25],Et=[e.wf-e.R-.22,...e.doors.length>1?[e.doors[1]+.08]:[],e.wr+e.R+.28].filter((Mt,J,tt)=>J===0||Math.abs(Mt-tt[J-1])>.3);for(let Mt of Et){let J=cn(e,Mt),tt=Hl(e,Mt),yt=tt.slice(6,16).filter(([,vt])=>vt>ot&&vt<J.ys-J.rs*.5);for(let vt=0;vt+1<yt.length;vt++){let[kt,ue]=yt[vt],[Te,ne]=yt[vt+1],ce=b(.008,Math.hypot(Te-kt,ne-ue)+.004,.008);ce.rotateZ(Math.atan2(Te-kt,ne-ue)*-1*R),I("seam",ce,R*((kt+Te)/2+.002),(ue+ne)/2,Mt)}}for(let Mt of e.doors){let J=cn(e,Mt-.25),tt=J.ys-.09;I("black",b(.02,.03,.16),R*(S(Mt-.25,tt)+.006),tt,Mt-.25)}let Ct=e.cab[e.cab.length-1][0]-.24,Ht=o(Ct,1),O=Math.min(o(Ct,3),jn(e,Ct,Ht))+.1;if(I("paint",b(.17,.1,.14),R*(Ht+.13),O,Ct),I("black",b(.13,.03,.05),R*(Ht+.05),O-.03,Ct+.02),I("black",b(.012,.075,.1),R*(Ht+.215),O,Ct-.01),e.intakes){let Mt=e.wr+e.R+.55,J=cn(e,Mt),tt=(J.yb+J.ys)/2+.04,yt=b(.03,(J.ys-J.yb)*.42,.62);yt.rotateY(R*.12),I("black",yt,R*(S(Mt,tt)+.004),tt,Mt)}}if(e.scoop){let R=e.wf-.1,D=jn(e,R,0);I("paint",b(.62,.12,.9).translate(0,.06,0),0,D-.03,R),I("black",b(.5,.08,.03),0,D+.05,R+.44)}if(e.vents)for(let R of[-1,1]){let D=e.wf-.05,Z=R*cn(e,D).w*.45,ot=jn(e,D,Z);for(let rt=0;rt<4;rt++)I("black",b(.26,.012,.03),Z,ot+.004,D+.07-rt*.06)}if(e.rack){let R=o(-.7,4)+.02;for(let D of[-1,1])I("black",b(.05,.06,1.6),D*c*.3,R,-.7);for(let D of[-1.3,-.7,-.1])I("black",b(c*.62,.035,.05),0,R+.04,D);I("black",b(c*.62,.1,.08),0,R+.1,.08);for(let D of[-.36,-.12,.12,.36])I("lens",new ee(.055,.055,.03,16).rotateX(Math.PI/2),D,R+.1,.13),I("chrome",new $e(.058,.01,6,18),D,R+.1,.145);for(let D of[-1,1])I("dark",b(.28,.2,.02),D*cn(e,e.wr).w*.72,.2,e.wr-e.R-.12)}if(e.fin==="shark"){let R=e.roof[0]+.16,D=new Yi;D.moveTo(-.11,0),D.quadraticCurveTo(.02,.02,.09,.075),D.lineTo(.11,0),D.closePath();let Z=new ps(D,{depth:.04,bevelEnabled:!1});Z.translate(0,0,-.02),Z.rotateY(-Math.PI/2),I("black",Z,0,o(R,4)-.005,R)}e.fin==="blade"&&I("paint",b(.035,.24,1.1),0,o(-1.7,4)+.08,-1.75);let U=e.cab[0][0],Bt=U-l<.45,_t=Bt?U+.12:l+Math.max(.22,(U-l)*.32),Dt=Bt?o(U+.2,4):jn(e,_t,0),wt=(Bt?o(U+.2,2):cn(e,_t).w)*2;if(t.spoiler===1&&I("paint",b(wt*.92,.04,Bt?.3:.34).rotateX(Bt?.15:-.3),0,Dt+.03,_t-(Bt?.05:0)),t.spoiler===2){let R=Bt?.14:.34,D=Dt+R+.03,Z=Math.max(wt*1.02,c*.9),ot=new Yi;ot.moveTo(-.25,0),ot.bezierCurveTo(-.15,.07,.12,.06,.25,-.01),ot.bezierCurveTo(.1,.015,-.12,.01,-.25,0);let rt=new ps(ot,{depth:Z,bevelEnabled:!1,curveSegments:8});rt.translate(0,0,-Z/2),rt.rotateY(Math.PI/2),rt.rotateX(.08),I("black",rt,0,D,_t);for(let Et of[-1,1]){I("black",b(.04,R+.04,.12),Et*wt*.3,Dt+R/2,_t+.02);let Ct=new Yi;Ct.moveTo(-.3,-.12),Ct.lineTo(.26,-.08),Ct.lineTo(.28,.1),Ct.lineTo(-.22,.12),Ct.closePath();let Ht=new ps(Ct,{depth:.025,bevelEnabled:!1});Ht.rotateY(Math.PI/2),I("black",Ht,Et*Z/2+(Et<0?0:-.025)+Et*.012,D,_t)}}t.stripes&&s.add(new pt(LM(e),new zn({color:t.stripeColor||"#ffffff",metalness:.2,roughness:.3,clearcoat:1,polygonOffset:!0,polygonOffsetFactor:-2})));let $t=new ge({color:new xt(t.paint).multiplyScalar(.28),roughness:.6});for(let[R,D]of[["black",d],["dark",g],["chrome",x],["paint",u],["head",m],["tail",p],["lens",_],["seam",$t]]){if(!w[R].length)continue;for(let ot of w[R])for(let rt of Object.keys(ot.attributes))rt!=="position"&&rt!=="normal"&&ot.deleteAttribute(rt);let Z=new pt(Ai(w[R]),D);Z.castShadow=R==="black"||R==="paint",s.add(Z)}let Lt=new ge({map:RM(),roughness:.88,side:pe}),L=new zn({color:t.rims||"#d0d4d8",metalness:.95,roughness:.2,clearcoat:.6,side:pe}),E=new ge({map:CM(),metalness:.7,roughness:.35}),K=new ge({color:"#d62828",roughness:.35,metalness:.2}),ct=new ee(e.R*.5,e.R*.5,.035,24).rotateZ(Math.PI/2),dt=new Jt(.09,e.R*.42,e.R*.3),lt=[],Ot=[];for(let[R,D]of[[e.wf,1],[e.wr,0]])for(let Z of[-1,1]){let ot=!D&&e.ex==="quad",rt=ot?.18:.155,Et=new Me;Et.position.set(Z*(S(R,e.R)-rt+.02),e.R,R),n.add(Et);let Ct=new pt(dt,K);Ct.position.set(Z*-.03,e.R*.28,-e.R*.2),Et.add(Ct);let Ht=new Me;Et.add(Ht);let O=new pt(DM(e.R,ot),Lt);O.castShadow=!0,Z<0&&(O.scale.x=-1),Ht.add(O);let Mt=new pt(UM(e.R,t.rimStyle||0,Z),L);Mt.position.x=Z*(rt-.155),Ht.add(Mt);let J=new pt(ct,E);J.position.x=Z*-.07,Ht.add(J),lt.push(Ht),D&&Ot.push(Et)}let B=Oo(),$=null;t.neon&&($=new pt(new Pe(c+1.8,e.L+1.4).rotateX(-Math.PI/2),new Zt({map:B,color:new xt(t.neon).multiplyScalar(1.6),transparent:!0,opacity:.95,blending:Xe,depthWrite:!1,toneMapped:!1})),$.position.y=.06,n.add($));let at=new pt(new Pe(c+.9,e.L+.9).rotateX(-Math.PI/2),new Zt({map:B,color:"#000",transparent:!0,opacity:.6,depthWrite:!1}));return at.position.y=.04,at.renderOrder=1,n.add(at),n.userData={body:s,wheels:lt,steer:Ot,flames:mt,tail:p,neon:$,shadow:at,wrad:e.R,rearX:e.wr,W:c,front:a},n}function cf(i,t,e,n){var x,m,p,_;let s=i.userData,r=(t.vF||0)/s.wrad*e;for(let y of s.wheels)y.rotation.x+=r;let o=Math.max(-.42,Math.min(.42,t.drifting?t.dDir*-t.slipA*.7+t.steer*.15:t.steer*.4));for(let y of s.steer)y.rotation.y+=(-o-y.rotation.y)*Math.min(1,e*12);let a=t.speed||0,l=Math.max(e,.001),c=(a-((x=s.lastSp)!=null?x:a))/l;s.lastSp=a,s.longA=(s.longA||0)+(Math.max(-40,Math.min(40,c))-(s.longA||0))*Math.min(1,e*8);let h=t.drifting?t.dDir*12*Math.min(1,t.slipA/.5):(t.yawRate||0)*a,u=-Math.max(-.075,Math.min(.075,h*.0042)),f=Math.max(-.045,Math.min(.06,-s.longA*.0032+(n?.025:0)));s.rollV===void 0&&(s.rollV=0,s.pitchV=0,s.bobV=0,s.bob=0,s.by0=s.body.position.y),s.wasAir&&!t.air&&(s.bobV-=1.6,s.pitchV+=.5),t.hitKick&&(s.rollV+=t.hitKick,s.bobV+=Math.abs(t.hitKick)*.6,t.hitKick=0),s.wasAir=!!t.air,s.rollV+=((u-s.body.rotation.z)*95-s.rollV*11)*e,s.body.rotation.z+=s.rollV*e,s.pitchV+=((f-s.body.rotation.x)*85-s.pitchV*10)*e,s.body.rotation.x+=s.pitchV*e,s.bobV+=(-s.bob*160-s.bobV*12)*e,s.bob+=s.bobV*e,s.body.position.y=s.by0+Math.max(-.12,Math.min(.08,s.bob)),s.tail.color.setRGB(n||t.drifting?2.4:.7,n||t.drifting?.12:.04,.05);let d=t.nitroOn||t.boostT>0;for(let y of s.flames)y.visible=d,d&&y.scale.set(1,1,.6+Math.random()*.8);s.neon&&(s.neon.material.opacity=.8+Math.sin(performance.now()/180)*.15);let g=Math.max(0,((m=t.y)!=null?m:0)+(t.yOff||0)-((_=(p=t.gy)!=null?p:t.y)!=null?_:0));s.shadow.position.y=.04-g,s.shadow.material.opacity=Math.max(.08,.6-g*.12)}var Gl=class{constructor(t,e,n=1600){this.max=n,this.i=0,this.count=0,this.last={};let s=new Float32Array(n*4*3),r=new Uint32Array(n*6);for(let o=0;o<n;o++)r.set([o*4,o*4+2,o*4+1,o*4+1,o*4+2,o*4+3],o*6);this.geo=new Kt,this.geo.setAttribute("position",new le(s,3)),this.geo.setIndex(new le(r,1)),this.geo.setDrawRange(0,0),this.mesh=new pt(this.geo,new Zt({color:e,transparent:!0,opacity:.55,depthWrite:!1,side:pe,polygonOffset:!0,polygonOffsetFactor:-2})),this.mesh.frustumCulled=!1,t.add(this.mesh)}add(t,e,n,s,r,o,a=0){let l=this.last[t];if(!o){this.last[t]=null;return}if(l&&(e-l.x)**2+(n-l.z)**2<.36)return;let c=.17,h=this.geo.attributes.position.array,u=this.i*12;if(l){let f=l.y+.045,d=a+.045;h.set([l.x-l.rx*c,f,l.z-l.rz*c,l.x+l.rx*c,f,l.z+l.rz*c,e-s*c,d,n-r*c,e+s*c,d,n+r*c],u),this.i=(this.i+1)%this.max,this.count=Math.min(this.max,this.count+1),this.geo.attributes.position.needsUpdate=!0,this.geo.setDrawRange(0,this.count*6)}this.last[t]={x:e,z:n,rx:s,rz:r,y:a}}},Vl=class{constructor(t,e=90){this.tex=Fl(),this.pool=[],this.k=0;for(let n=0;n<e;n++){let s=new qn(new Bn({map:this.tex,transparent:!0,depthWrite:!1,opacity:0}));s.visible=!1,s.userData={life:0,max:1,vx:0,vz:0,vy:0,size:1},t.add(s),this.pool.push(s)}}emit(t,e,n,s,r,o,a=1,l=1){var u;let c=this.pool[this.k=(this.k+1)%this.pool.length],h=c.userData;c.visible=!0,c.position.set(t,e,n),c.material.color.set(o).multiplyScalar((u=this.dim)!=null?u:1),Object.assign(h,{life:0,max:.9+Math.random()*.8,vx:s*.25+(Math.random()-.5)*2,vz:r*.25+(Math.random()-.5)*2,vy:.8+Math.random(),size:(1+Math.random()*.6)*l,a:.5*a})}update(t){for(let e of this.pool){if(!e.visible)continue;let n=e.userData;if(n.life+=t,n.life>=n.max){e.visible=!1;continue}let s=n.life/n.max;e.position.x+=n.vx*t,e.position.z+=n.vz*t,e.position.y+=n.vy*t,n.vx*=.96,n.vz*=.96;let r=n.size*(1.2+s*5);e.scale.set(r,r,1),e.material.opacity=n.a*(1-s)*Math.min(1,n.life*8)}}},Wl=class{constructor(t,e=80){this.n=e,this.k=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e);let n=new Kt;n.setAttribute("position",new le(this.pos,3)),this.pts=new dn(n,new an({color:"#ffc45a",size:.22,transparent:!0,blending:Xe,depthWrite:!1,toneMapped:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.pos.fill(-999)}burst(t,e,n=18,s=.5){for(let r=0;r<n;r++){let o=this.k=(this.k+1)%this.n;this.pos.set([t,s,e],o*3),this.vel.set([(Math.random()-.5)*14,2+Math.random()*5,(Math.random()-.5)*14],o*3),this.life[o]=.5+Math.random()*.4}}update(t){for(let e=0;e<this.n;e++)if(!(this.life[e]<=0)){if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-999;continue}this.vel[e*3+1]-=18*t;for(let n=0;n<3;n++)this.pos[e*3+n]+=this.vel[e*3+n]*t}this.pts.geometry.attributes.position.needsUpdate=!0}},Xl=class{constructor(t,e=400){this.n=e,this.k=0,this.pos=new Float32Array(e*3).fill(-999),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.c=new xt;let n=new Kt;n.setAttribute("position",new le(this.pos,3)),n.setAttribute("color",new le(this.col,3)),this.pts=new dn(n,new an({size:.2,vertexColors:!0,transparent:!0,blending:Xe,depthWrite:!1,toneMapped:!1})),this.pts.frustumCulled=!1,t.add(this.pts)}emit(t,e,n,s,r,o=4,a=2,l=.5){this.c.set(s).multiplyScalar(2.2);for(let c=0;c<r;c++){let h=this.k=(this.k+1)%this.n;this.pos.set([t,e,n],h*3),this.col.set([this.c.r,this.c.g,this.c.b],h*3),this.vel.set([(Math.random()-.5)*o,Math.random()*a,(Math.random()-.5)*o],h*3),this.life[h]=l*(.5+Math.random()*.7)}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-999;continue}this.vel[e*3+1]-=9*t;for(let s=0;s<3;s++)this.pos[e*3+s]+=this.vel[e*3+s]*t;let n=Math.min(1,this.life[e]*3);this.col[e*3]*=.985+n*.015,this.col[e*3+1]*=.985+n*.015,this.col[e*3+2]*=.985+n*.015}this.pts.geometry.attributes.position.needsUpdate=!0,this.pts.geometry.attributes.color.needsUpdate=!0}};var te=null,Yl,bs,Zi,$l,Vn=null;var Zl={sfx:!0,music:!0,ad:!1};function ff(){if(!$l){$l=te.createBuffer(1,te.sampleRate*2,te.sampleRate);let i=$l.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=Math.random()*2-1}return $l}function Jl(){if(te){te.state==="suspended"&&te.resume();return}try{te=new(window.AudioContext||window.webkitAudioContext),Yl=te.createGain(),Yl.connect(te.destination);let i=te.createDynamicsCompressor();i.connect(Yl),bs=te.createGain(),bs.connect(i),Zi=te.createGain(),Zi.connect(i),cm()}catch{te=null}}function cm(){te&&(Yl.gain.value=Zl.ad?0:.7,bs.gain.value=Zl.sfx?1:0,Zi.gain.value=Zl.music?.32:0)}function ti(i){Object.assign(Zl,i),cm()}function df(i){te&&(i?te.suspend():te.resume())}function qe(i,t,e="sine",n=.2,s=0,r=0,o=bs){if(!te)return;let a=te.currentTime+r,l=te.createOscillator(),c=te.createGain();l.type=e,l.frequency.setValueAtTime(i,a),s&&l.frequency.exponentialRampToValueAtTime(s,a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(c),c.connect(o),l.start(a),l.stop(a+t+.05)}function Qn(i,t,e,n,s=0,r=0,o=bs){if(!te)return;let a=te.currentTime+r,l=te.createBufferSource(),c=te.createBiquadFilter(),h=te.createGain();l.buffer=ff(),c.type=e,c.frequency.setValueAtTime(n,a),s&&c.frequency.exponentialRampToValueAtTime(s,a+i),h.gain.setValueAtTime(t,a),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(o),l.start(a,Math.random()),l.stop(a+i+.05)}var Tt={click(){qe(660,.06,"triangle",.12)},buy(){[0,4,7,12].forEach((i,t)=>qe(784*2**(i/12),.16,"triangle",.14,0,t*.06))},deny(){qe(200,.18,"square",.08,140)},coin(){qe(1320,.08,"square",.06),qe(1760,.12,"square",.05,0,.06)},beep(i){qe(i?880:440,i?.5:.18,"square",.12)},cp(){qe(880,.12,"triangle",.16),qe(1320,.2,"triangle",.14,0,.08)},bank(i){let t=523*2**(Math.min(i,5)*2/12);[0,4,7,12].slice(0,2+Math.min(i,2)).forEach((e,n)=>qe(t*2**(e/12),.2,"triangle",.13,0,n*.05))},crash(){Qn(.5,.5,"lowpass",900,80),qe(110,.3,"sawtooth",.12,50)},scrape(i){Qn(.11,Math.min(.16,.04+i*.004),"bandpass",3200,1800)},hit(i){Qn(.2,Math.min(.45,i/25),"lowpass",600,120)},nitro(){Qn(.7,.25,"bandpass",600,2400)},timeup(){[12,7,3,0].forEach((i,t)=>qe(440*2**(i/12),.25,"square",.1,0,t*.12))},charge(i){qe(500+i*260,.12,"square",.07,900+i*300)},turbo(i){Qn(.5+i*.15,.32,"bandpass",500,3200),qe(160,.35,"sawtooth",.08,420+i*120)},flick(){Qn(.22,.18,"bandpass",2600,900)},rumble(){qe(70+Math.random()*20,.06,"square",.05)},backfire(i=.5){Qn(.08,.3*i,"lowpass",900,120),Qn(.05,.18*i,"bandpass",2400,0,.05)},blowoff(){Qn(.35,.09,"highpass",4200,1600)},pop(){Qn(.35,.22,"lowpass",1800,200),qe(600+Math.random()*600,.25,"triangle",.05,1600,.05)},star(i){qe(988*2**(i*4/12),.3,"triangle",.16)}};function hm(){if(!te||Vn)return;let i=te.createOscillator(),t=te.createOscillator(),e=te.createBiquadFilter(),n=te.createGain();i.type="sawtooth",t.type="square",e.type="lowpass",e.Q.value=4,n.gain.value=0,i.connect(e),t.connect(e),e.connect(n),n.connect(bs),i.start(),t.start();let s=te.createBufferSource(),r=te.createBiquadFilter(),o=te.createGain();s.buffer=ff(),s.loop=!0,r.type="bandpass",r.frequency.value=1500,r.Q.value=3,o.gain.value=0,s.connect(r),r.connect(o),o.connect(bs),s.start();let a=te.createBufferSource(),l=te.createBiquadFilter(),c=te.createGain();a.buffer=ff(),a.loop=!0,l.type="lowpass",l.frequency.value=500,c.gain.value=0,a.connect(l),l.connect(c),c.connect(bs),a.start(),Vn={o1:i,o2:t,f:e,g:n,tf:r,tg:o,wg:c,nodes:[i,t,s,a]}}var sm=0,rm=0,om=1,am=0;function pf(i,t,e,n,s=1){if(!Vn)return;let r=te.currentTime,o=[0,.18,.36,.56,.78,1.2],a=0;for(;a<4&&i>o[a+1];)a++;a>sm&&n&&s>.5&&(rm=r,i>.3&&Math.random()<.6&&Tt.backfire(.5)),sm=a;let l=r-rm<.12,c=n?s>.5?1:.35:0,h=(.25+.75*Math.min(1,(i-o[a])/(o[a+1]-o[a])))*(l?.8:1)*(s>.5?1:.85),u=42+h*78+a*6;om>.5&&s<=.5&&i>.45&&n&&(Tt.blowoff(),am=r),s<=.5&&n&&i>.4&&r-am<1.2&&Math.random()<.06&&Tt.backfire(.35),om=s,Vn.o1.frequency.setTargetAtTime(u,r,l?.02:.05),Vn.o2.frequency.setTargetAtTime(u*.5,r,.05),Vn.f.frequency.setTargetAtTime((300+h*1400)*(.55+.45*c)+(e?800:0),r,.05),Vn.g.gain.setTargetAtTime(n?(.07+h*.05)*(.6+.4*c)*(l?.55:1):0,r,.04),Vn.tg.gain.setTargetAtTime(n?Math.min(.22,t*i*.55):0,r,.05),Vn.tf.frequency.setTargetAtTime(1200+i*800,r,.1),Vn.wg.gain.setTargetAtTime(n?i*.12:0,r,.2)}function Wo(){Vn&&(Vn.nodes.forEach(i=>{try{i.stop()}catch{}}),Vn=null)}var FM=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],hf=i=>440*2**((i-69)/12),uf=0,ql=0,lm=null,Vo=1;function um(i=1){Vo=i,!(!te||lm)&&(ql=te.currentTime+.1,uf=0,lm=setInterval(()=>{if(!te||te.state!=="running")return;let t=60/112/4;for(;ql<te.currentTime+.25;)BM(uf,ql),ql+=t,uf++},60))}function mf(i){Vo=i}function BM(i,t){let e=(i>>4)%4,n=i%16,s=FM[e],r=t-te.currentTime;Vo>0&&n%4===0&&qe(150,.25,"sine",.5,40,r,Zi),Vo>0&&(n===4||n===12)&&Qn(.18,.25,"bandpass",1800,900,r,Zi),Vo>0&&n%2===1&&Qn(.04,.08,"highpass",8e3,0,r,Zi),n%2===0&&qe(hf(s[0]-24+(n%8===6?12:0)),.2,"sawtooth",.14,0,r,Zi),n%2===0&&qe(hf(s[n/2%3]+12+(n>=8?12:0)),.14,"triangle",.05,0,r,Zi),n===0&&s.forEach(o=>qe(hf(o),1.9,"sawtooth",.025,0,r,Zi))}var Ks=()=>window.PokiSDK,js=!1,Kl=!1,Mn={init(){try{if(Ks())return Ks().init().then(()=>{js=!0},()=>{js=!0})}catch{}return Promise.resolve()},loaded(){try{js&&Ks().gameLoadingFinished()}catch{}},start(){if(!Kl){Kl=!0;try{js&&Ks().gameplayStart()}catch{}}},stop(){if(Kl){Kl=!1;try{js&&Ks().gameplayStop()}catch{}}},commercial(){if(!js)return Promise.resolve();try{return Ks().commercialBreak(()=>ti({ad:!0})).then(()=>ti({ad:!1}),()=>ti({ad:!1}))}catch{return ti({ad:!1}),Promise.resolve()}},rewarded(){if(!js)return Promise.resolve(!0);try{return Ks().rewardedBreak(()=>ti({ad:!0})).then(i=>(ti({ad:!1}),!!i),()=>(ti({ad:!1}),!1))}catch{return ti({ad:!1}),Promise.resolve(!1)}}};var xi=[{name:"Common",color:"#b8c0dc"},{name:"Rare",color:"#3fa9ff"},{name:"Epic",color:"#c05bff"},{name:"Legendary",color:"#ffcf3a"}],Li={std:{name:"Street crate",n:2,odds:[62,30,7,1],guarantee:0,price:750,colors:["#1fb8da","#0d5a75"],trim:"#d6dde8"},rare:{name:"Rare crate",n:3,odds:[38,44,15,3],guarantee:1,price:2e3,colors:["#3d6bff","#1b2a8a"],trim:"#ffcf3a"},epic:{name:"Epic crate",n:3,odds:[12,44,34,10],guarantee:2,price:5e3,colors:["#b34dff","#46136f"],trim:"#ffcf3a"}},Ql={finish_pearl:{name:"Pearl paint",tier:2},finish_candy:{name:"Candy paint",tier:2},finish_chrome:{name:"Chrome paint",tier:3}},zM=i=>i.startsWith("skin_")?ln[i.slice(5)].name+" skin":Ql[i]?Ql[i].name:vs[i]?vs[i].name:i,jl=(i,t,e,n=50)=>Math.round((t+i()*(e-t))/n)*n;function kM(i,t,e,n){let s=u=>u.filter(f=>!t.includes(f)&&!e.some(d=>d.item===f)),r=u=>u[n()*u.length|0],o=u=>s(Object.keys(ln).filter(f=>ln[f].tier===u).map(f=>"skin_"+f)),a=u=>({tier:i,kind:u.startsWith("skin_")?"skin":"item",item:u,name:zM(u)});if(i===0)return n()<.75?{tier:i,kind:"coins",amount:jl(n,200,500)}:{tier:i,kind:"xp",amount:jl(n,200,350)};if(i===1){let u=o(1),f=s(Object.keys(vs)),d=n();return u.length&&d<.5?a(r(u)):f.length&&d<.75?a(r(f)):{tier:i,kind:"coins",amount:jl(n,900,1500)}}if(i===2){let u=o(2),f=s(["finish_pearl","finish_candy"]),d=n();return u.length&&d<.6?a(r(u)):f.length&&d<.8?a(r(f)):{tier:i,kind:"coins",amount:3e3}}let l=o(3),c=s(["finish_chrome"]),h=n();return l.length&&h<.7?a(r(l)):c.length&&h<.85?a(c[0]):{tier:i,kind:"coins",amount:jl(n,7e3,9e3,500)}}function fm(i,t,e=Math.random){let n=Li[i],s=[];for(let r=0;r<n.n;r++){let o=e()*100,a=0;for(;a<3&&o>=n.odds[a];)o-=n.odds[a],a++;r===n.n-1&&n.guarantee&&!s.some(l=>l.tier>=n.guarantee)&&(a=Math.max(a,n.guarantee)),s.push(kM(a,t,s,e))}return s.sort((r,o)=>r.tier-o.tier)}var Xo=new N;function ei(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xo.copy(t),Xo[n]=0,Xo.normalize();let c=.5*o/(o+a),h=1-Xo.angleTo(i)/l;return Math.sign(Xo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Wn=class extends Jt{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,l=new N,c=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new N,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=ei(g,l,"z","y",r,n),f[p+1]=1-ei(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-ei(g,l,"z","y",r,n),f[p+1]=1-ei(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-ei(g,l,"x","z",r,t),f[p+1]=ei(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-ei(g,l,"x","z",r,t),f[p+1]=1-ei(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-ei(g,l,"x","y",r,t),f[p+1]=1-ei(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=ei(g,l,"x","y",r,t),f[p+1]=1-ei(g,l,"y","x",r,e);break}}};function HM(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.translate(256,256);for(let s=0;s<18;s++){t.rotate(Math.PI*2/18);let r=t.createLinearGradient(0,0,250,0);r.addColorStop(0,"rgba(255,255,255,.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.beginPath(),t.moveTo(0,0),t.lineTo(256,-22),t.lineTo(256,22),t.closePath(),t.fill()}let e=t.createRadialGradient(0,0,0,0,0,256);e.addColorStop(0,"rgba(255,255,255,.9)"),e.addColorStop(.25,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=e,t.fillRect(-256,-256,512,512);let n=new nn(i);return n.colorSpace=Se,n}function GM(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new nn(i)}function VM(i,t){let e=new Yi;for(let n=0;n<10;n++){let s=Math.PI/2+n*Math.PI/5,r=n%2?t:i;n?e.lineTo(Math.cos(s)*r,Math.sin(s)*r):e.moveTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function WM(i){let t=new Me,[e,n]=i.colors,s=new zn({color:e,metalness:.25,roughness:.3,clearcoat:1,clearcoatRoughness:.08}),r=new zn({color:n,metalness:.3,roughness:.4,clearcoat:.6}),o=new ge({color:i.trim,metalness:1,roughness:.22}),a=new Zt({color:new xt(e).multiplyScalar(2.2),toneMapped:!1}),l=(f,d,g,x,m,p=t)=>{let _=new pt(f,d);return _.position.set(g,x,m),_.castShadow=!0,p.add(_),_};l(new Wn(2,1.15,1.3,4,.1),s,0,.6,0),l(new Wn(1.7,.85,.05,2,.02),r,0,.58,.66),l(new Wn(1.7,.85,.05,2,.02),r,0,.58,-.66);for(let f of[-1,1])for(let d of[-1,1])l(new Wn(.16,1.2,.16,2,.05),o,f*.97,.6,d*.62);for(let f of[.06,1.14])for(let d of[-1,1])l(new Wn(2.04,.1,.1,2,.03),o,0,f,d*.64);l(new ee(.34,.34,.07,32).rotateX(Math.PI/2),o,0,.6,.7);let c=new pt(new ps(VM(.24,.1),{depth:.05,bevelEnabled:!1}),a);c.position.set(0,.6,.72),t.add(c);let h=l(new Jt(2.02,.05,1.32),new Zt({color:new xt(e).multiplyScalar(2),toneMapped:!1}),0,1.19,0),u=new Me;u.position.set(0,1.2,-.66),t.add(u),l(new Wn(2.1,.34,1.4,4,.1),s,0,.17,.66,u),l(new Wn(2.14,.08,.1,2,.03),o,0,.05,1.36,u),l(new Wn(2.14,.08,.1,2,.03),o,0,.05,-.04,u);for(let f of[-.62,.62])l(new Wn(.18,.36,1.44,2,.05),o,f,.17,.66,u);return l(new $e(.2,.045,8,20,Math.PI),o,0,.34,.66,u),l(new Wn(.3,.3,.1,2,.04),o,0,-.02,1.42,u),t.userData={lid:u,seam:h,st:c,glowM:a},t}function dm(i,t){let e=new An;e.background=new xt("#0b0a22"),e.environment=t,e.environmentIntensity=.8;let n=new Ye(38,1,.1,100);e.add(new ms("#c9d4ff","#1a1236",.8));let s=new wi("#ffffff",60,30,.5,.6);s.position.set(3,7,5),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),e.add(s);let r=new Xs("#ff2e9a",18,12);r.position.set(-3,2.5,-2),e.add(r);let o=new Xs("#2ee6ff",18,12);o.position.set(3,2,-2),e.add(o);let a=new pt(new On(9,64).rotateX(-Math.PI/2),new ge({color:"#16153a",metalness:.5,roughness:.35}));a.receiveShadow=!0,e.add(a);let l=new pt(new $e(2.1,.03,8,96).rotateX(Math.PI/2),new Zt({color:new xt("#2ee6ff").multiplyScalar(1.6),toneMapped:!1}));l.position.y=.02,e.add(l);let c=new pt(new Pe(14,14),new Zt({map:HM(),transparent:!0,opacity:.35,blending:Xe,depthWrite:!1,toneMapped:!1}));c.position.set(0,1.6,-3),e.add(c);let h=new pt(new ee(.9,.5,12,32,1,!0).translate(0,6,0),new Zt({color:"#ffffff",transparent:!0,opacity:0,blending:Xe,depthWrite:!1,side:pe,toneMapped:!1}));h.position.y=1.1,e.add(h);let u=GM(),f=260,d=new Float32Array(f*3),g=new Float32Array(f*3),x=new Float32Array(f),m=new dn(new Kt().setAttribute("position",new le(d,3)),new an({map:u,size:.16,transparent:!0,blending:Xe,depthWrite:!1,color:"#ffffff",toneMapped:!1}));e.add(m);let p=new Float32Array(60*3);for(let M=0;M<60;M++)p.set([(Math.random()-.5)*8,Math.random()*5,(Math.random()-.5)*5-1],M*3);let _=new dn(new Kt().setAttribute("position",new le(p,3)),new an({map:u,size:.09,transparent:!0,opacity:.7,blending:Xe,depthWrite:!1,color:"#9fb4ff"}));e.add(_);let y=null,v="idle",P=0,b=0,w=new xt("#ffffff"),I=0,S={scene:e,cam:n,on:!1,phase:()=>v,setCrate(M,C){y&&(e.remove(y),y.traverse(z=>{z.isMesh&&z.geometry.dispose()})),y=WM(M),e.add(y),y.userData.lid.visible=!0,v="idle",P=0,b=0,I=0,w.set(C),x.fill(0),c.material.color.set(M.colors[0]),c.material.opacity=.3,h.material.opacity=0,h.material.color.set(C),l.material.color.set(M.colors[0]).multiplyScalar(1.6)},setHue(M){w.set(M),h.material.color.set(M)},decor(M){a.visible=l.visible=c.visible=_.visible=M,e.background=M?new xt("#0b0a22"):null},tap(){return v==="idle"?(v="shake",b=0,!0):!1},burst(){for(let M=0;M<f;M++){let C=Math.random()*Math.PI*2,z=Math.random(),T=3+Math.random()*6;d.set([(Math.random()-.5)*1.6,1.25,(Math.random()-.5)*1],M*3),g.set([Math.cos(C)*T*(1-z*.6),4+Math.random()*7,Math.sin(C)*T*.6],M*3),x[M]=1+Math.random()*.8}m.material.color.copy(w).lerp(new xt("#ffffff"),.35)},update(M,C,z){P+=M,b+=M,n.aspect=C/z,n.updateProjectionMatrix();let T=z>C;n.position.set(Math.sin(P*.15)*.4,T?3:2.3,T?9.5:6.6),n.lookAt(0,v==="open"?1.6:1,0),c.rotation.z+=M*.15,c.lookAt(n.position),_.rotation.y+=M*.05;for(let G=0;G<60;G++)p[G*3+1]+=M*.25,p[G*3+1]>5&&(p[G*3+1]=0);if(_.geometry.attributes.position.needsUpdate=!0,!y)return;let k=y.userData;if(v==="idle"&&(y.position.y=.15+Math.sin(P*1.8)*.08,y.rotation.y=Math.sin(P*.7)*.5+.35,y.rotation.z=0,k.seam.material.color.copy(w).multiplyScalar(1.2+Math.sin(P*4)*.6)),v==="shake"){I=Math.min(1,b/1.3);let G=I*I;y.rotation.z=Math.sin(b*55)*.09*G,y.rotation.x=Math.sin(b*41)*.05*G,y.position.y=.15+Math.abs(Math.sin(b*30))*.12*G,y.rotation.y+=(.35-y.rotation.y)*M*6,k.lid.rotation.x=-Math.abs(Math.sin(b*37))*.1*G,k.seam.material.color.copy(w).multiplyScalar(1.5+G*5),y.scale.setScalar(1+G*.06),b>=1.3&&(v="open",b=0,S.onBurst&&S.onBurst(),S.burst())}if(v==="open"){let G=Math.min(1,b/.5);k.lid.position.set(0,1.2+9*b-6*b*b,-.66-4.5*b),k.lid.rotation.x=-1.2*G-b*5,k.lid.visible=b<1.1,y.rotation.z*=.9,y.rotation.x*=.9,y.scale.setScalar(1+.06*Math.max(0,1-b*2)),h.material.opacity=Math.min(.55,b*1.4)*(1-Math.min(.5,Math.max(0,b-2)*.2)),h.scale.set(1+Math.sin(P*6)*.05,1,1+Math.sin(P*6)*.05),c.material.opacity=Math.min(.9,.3+b*1.5),c.material.color.copy(w),k.seam.material.color.copy(w).multiplyScalar(3)}for(let G=0;G<f;G++){if(x[G]<=0){d[G*3+1]=-50;continue}x[G]-=M,g[G*3+1]-=9*M,d[G*3]+=g[G*3]*M,d[G*3+1]+=g[G*3+1]*M,d[G*3+2]+=g[G*3+2]*M,d[G*3+1]<.05&&(d[G*3+1]=.05,g[G*3+1]*=-.4)}m.geometry.attributes.position.needsUpdate=!0,m.material.size=.16}};return S}function pm(i){let t=new An;t.background=new xt("#05060c");let e=new pt(new fi(50,32,16),new Zt({color:"#0b0d18",side:We}));t.add(e);let n=(a,l,c,h,u,f,d="#ffffff")=>{let g=new pt(new Pe(a,l),new Zt({color:new xt(d).multiplyScalar(f),side:pe}));return g.position.set(c,h,u),g.lookAt(0,0,0),t.add(g),g};n(26,7,0,22,0,2.4),n(18,4,0,18,-14,1.6),n(12,18,-26,8,4,1.25),n(12,18,26,8,-4,1.1),n(30,2.2,0,3,30,.9,"#dfe8ff"),n(30,2.2,0,3,-30,.7,"#ffd9c8");let s=new pt(new On(40,32).rotateX(-Math.PI/2),new Zt({color:"#1a1d2c"}));s.position.y=-6,t.add(s);let r=new fs(i),o=r.fromScene(t,.02).texture;return r.dispose(),o}var V=i=>document.getElementById(i),fe=i=>Math.round(i).toLocaleString("en-US"),ws=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`,_f=i=>i+(["th","st","nd","rd"][i]||"th"),Jo='<svg viewBox="0 0 24 24"><path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/></svg>',XM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',Sm="driftfever_v1",mm={coins:300,crate:0,dayStreak:0,lastDay:"",rp:0,rankBest:0,streak:0,tutDone:!1,tutAsked:!1,level:1,xp:0,missions:[],mdone:{},owned:["rookie"],car:"rookie",cars:{},items:[],tracks:{},music:!0,sfx:!0,quality:"auto",gas:null,crates:{std:0,rare:0,epic:0},rstats:{played:0,wins:0},daily:"",tutorial:!1,lastFree:0},H=(()=>{try{return Object.assign(JSON.parse(JSON.stringify(mm)),JSON.parse(localStorage.getItem(Sm)||"{}"))}catch{return JSON.parse(JSON.stringify(mm))}})();H.crates||(H.crates={std:0,rare:0,epic:0});H.rstats||(H.rstats={played:0,wins:0});(H.crate||0)>=3&&(H.crates.std+=Math.floor(H.crate/3),H.crate%=3);var Tm="driftfever_ghost_",$M=i=>{try{return JSON.parse(localStorage.getItem(Tm+i)||"null")}catch{return null}},qM=(i,t)=>{try{localStorage.setItem(Tm+i,JSON.stringify(t))}catch{}},ic=()=>new Date().toISOString().slice(0,10),Sf=()=>{let i=Math.floor(Date.now()/864e5),t=Rn.filter(e=>ta()>=e.need);return t[(i*7+3)%t.length]},Ke=()=>{try{localStorage.setItem(Sm,JSON.stringify(H))}catch{}},Ko=i=>ke.find(t=>t.id===i);function Di(i){return H.cars[i]||(H.cars[i]={paint:Ko(i).paint,finish:"gloss",rims:"#d0d4d8",rimStyle:0,spoiler:0,stripes:!1,stripeColor:"#ffffff",neon:null,smoke:"#ffffff",up:{engine:0,grip:0,nitro:0}}),H.cars[i]}var Tf=i=>[{k:"top3",text:"Finish in the top 3",short:"Top 3"},{k:"win",text:"Win the race",short:"Win"},{k:"drift",text:`Score ${fe(i.drift)} drift points`,short:`${Math.round(i.drift/1e3)}k pts`}],oc=i=>{var t;return(t=i.goals)!=null?t:(1<<Math.min(3,i.stars||0))-1},wm=(i,t,e="gl")=>`<div class="${e}">${Tf(i).map((n,s)=>`<span class="${t&1<<s?"ok":""}">${Jo}<em>${n.short}</em></span>`).join("")}</div>`,ta=()=>H.devUnlock?99:Rn.reduce((i,t)=>i+((H.tracks[t.id]||{}).stars||0),0),wf=i=>!i||H.items.includes(i),ac=i=>{let t=Wr[i.t];return t.t[Math.min(i.tier,t.t.length-1)]},Af=i=>{let t=Wr[i.t],e=ac(i);return t.text.replace("{n}",t.fmt==="s"?e.toFixed(1):fe(e))};function Am(){let i=H.missions.map(e=>e.t),t=Object.keys(Wr).filter(e=>!i.includes(e));for(;H.missions.length<3&&t.length;){let e=t.splice(Math.random()*t.length|0,1)[0];H.missions.push({t:e,tier:Math.min(H.mdone[e]||0,Wr[e].t.length-1),prog:0})}}function YM(i=H.missions){return i.map(t=>{let e=Math.min(1,t.prog/ac(t));return`<div class="mis"><div class="mt"><span>${Af(t)}</span><b><i class="coin"></i>${$u(t.tier)}</b></div><div class="mb"><i style="width:${(e*100).toFixed(0)}%"></i></div></div>`}).join("")}function ZM(i){let t={bestChain:i.bestChain,score:i.score,coins:i.coins,bestAir:i.bestAir,pads:i.stats.pads,ultra:i.stats.ultra,turbos:i.stats.turbos,laps:i.lap,zonePts:i.stats.zonePts,topSpeed:i.stats.topSpeed,races:1,wins:i.pos===1?1:0,podiums:i.pos<=3?1:0},e=[];for(let n of H.missions){let s=Wr[n.t],r=t[s.stat]||0;if(n.prog=s.type==="best"?Math.max(n.prog,r):n.prog+r,n.prog>=ac(n)){let o=$u(n.tier);e.push({text:Af(n),reward:o}),H.coins+=o,H.mdone[n.t]=(H.mdone[n.t]||0)+1,n.done=!0}}return H.missions=H.missions.filter(n=>!n.done),Am(),e}function Rm(i){let t=[];for(H.xp+=i;H.xp>=_s(H.level);){H.xp-=_s(H.level),H.level++;let e=Rp(H.level),n=H.level%5===0;H.coins+=e,n&&H.crates.epic++,t.push({level:H.level,coins:e,crate:n})}return t}function Cm(){if(ke.some(e=>!H.owned.includes(e.id)&&H.level>=(e.level||1)&&H.coins>=e.price))return!0;let i=Di(H.car).up,t=ke.findIndex(e=>e.id===H.car);return["engine","grip","nitro"].some(e=>i[e]<4&&H.coins>=dc(t,i[e]))}function JM(){let i=ke.find(r=>!H.owned.includes(r.id)&&H.level>=(r.level||1)&&H.coins>=r.price);if(i)return{text:`You can buy the <b>${i.name}</b> now!`,p:1,go:!0};let t=Di(H.car).up,e=ke.findIndex(r=>r.id===H.car),n=["engine","grip","nitro"].find(r=>t[r]<4&&H.coins>=dc(e,t[r]));if(n)return{text:`Upgrade ready: <b>${{engine:"Engine",grip:"Tires",nitro:"Nitro"}[n]} level ${t[n]+1}</b>`,p:1,go:!0};let s=ke.filter(r=>!H.owned.includes(r.id)).sort((r,o)=>r.price-o.price)[0];return s?H.level<(s.level||1)?{text:`<b>${s.name}</b> unlocks at level ${s.level}`,p:H.level/s.level}:{text:`<b>${s.name}</b>: ${fe(s.price-H.coins)} coins to go`,p:H.coins/s.price}:null}function ea(){let i=_s(H.level);V("pLv").textContent=V("pLv2").textContent=H.level,V("pXp").style.strokeDasharray=`${(H.xp/i*100).toFixed(1)} 100`,V("pXpTxt").textContent=`${fe(H.xp)} / ${fe(i)} XP`;for(let t of document.querySelectorAll(".lvlTxt"))t.textContent="LV "+H.level;for(let t of document.querySelectorAll(".lvlBar"))t.style.width=(H.xp/_s(H.level)*100).toFixed(1)+"%";for(let t of document.querySelectorAll(".alert"))t.classList.toggle("on",Cm())}var mn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",mn);var Pm=V("gl"),Ue=new tl({canvas:Pm,antialias:!mn,powerPreference:"high-performance"});Ue.outputColorSpace=Se;Ue.toneMapping=Do;Ue.toneMappingExposure=1.05;Ue.shadowMap.enabled=!0;Ue.shadowMap.type=wu;Ue.info.autoReset=!1;function lc(){let i=H.quality==="auto"?mn?"mid":"high":H.quality;return{shadows:i!=="low",bloom:i==="high",ratio:Math.min(devicePixelRatio||1,i==="high"?2:i==="mid"?1.5:1)}}var He=new Ye(60,1,.1,1500),Zr=new Tl(Ue),Mf=new wl(new An,He),Yo=new Vr(new gt(256,256),.5,.5,.85);Zr.addPass(Mf);Zr.addPass(Yo);Zr.addPass(new Al);function cc(){let i=lc();Ue.setPixelRatio(i.ratio),Ue.setSize(innerWidth,innerHeight,!1),Zr.setPixelRatio(i.ratio),Zr.setSize(innerWidth,innerHeight),Yo.resolution.set(innerWidth/2,innerHeight/2),He.aspect=innerWidth/innerHeight,He.updateProjectionMatrix()}addEventListener("resize",cc);cc();function tc(i,t,e=He){Mf.camera=e,lc().bloom&&t?(Mf.scene=i,Yo.strength=t[0],Yo.threshold=t[1],Yo.radius=.55,Zr.render()):Ue.render(i,e)}var Rf=new fs(Ue),KM=Rf.fromScene(new Ml,.04).texture,Im=pm(Ue),gn=dm(Ue,Im),sn=new An;sn.environment=Im;sn.environmentIntensity=1;sn.background=new xt("#0c0e24");sn.fog=new Nr("#0c0e24",14,34);{let i=new pt(new On(30,64).rotateX(-Math.PI/2),new ge({color:"#141836",metalness:.35,roughness:.38,envMapIntensity:.5}));i.receiveShadow=!0,sn.add(i);let t=new pt(new ee(3.7,3.8,.12,64),new ge({color:"#1c2148",metalness:.5,roughness:.28,envMapIntensity:.6}));t.position.y=.06,t.receiveShadow=!0,sn.add(t);let e=new pt(new $e(3.8,.04,8,96).rotateX(Math.PI/2),new Zt({color:"#ff2e6e",toneMapped:!1}));e.position.y=.1,sn.add(e);let n=e.clone();n.material=new Zt({color:"#2ee6ff",toneMapped:!1}),n.scale.setScalar(1.6),n.position.y=.02,sn.add(n),sn.add(new ms("#d8e0ff","#1a1838",.45));let s=new wi("#ffffff",55,30,.5,.7);s.position.set(4,9,5),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),sn.add(s);let r=new wi("#ffffff",28,30,.6,.8);r.position.set(-5,6,4),sn.add(r);let o=new wi("#ff7a9a",22,30,.6,.6);o.position.set(-6,5,-6),sn.add(o);let a=new wi("#8fe9ff",30,30,.6,.6);a.position.set(6,4,-5),sn.add(a);for(let[l,c,h]of[[0,0,5],[-2.2,-1.6,3],[2.2,1.6,3]]){let u=new pt(new Pe(h,.35).rotateX(Math.PI/2),new Zt({color:new xt(2.2,2.2,2.3),toneMapped:!1,side:pe}));u.position.set(l,7.5,c),u.rotation.y=.5,sn.add(u)}}var ii=new Me;ii.position.y=.12;sn.add(ii);var jM=(()=>{let t=new Float32Array(900);for(let s=0;s<300;s++)t.set([(Math.random()-.5)*24,Math.random()*9,(Math.random()-.5)*24],s*3);let e=new Kt;e.setAttribute("position",new le(t,3));let n=new dn(e,new an({color:"#ffd9e0",size:.05,transparent:!0,opacity:.7,depthWrite:!1}));return sn.add(n),n})(),QM=[0,1,2].map(i=>{let t=new pt(new vn(2.6,14,24,1,!0).translate(0,-7,0),new Zt({color:["#ff2e6e","#8b5cff","#ff8a1f"][i],transparent:!0,opacity:.02,blending:Xe,depthWrite:!1,side:pe}));return t.position.set(Math.cos(i*2.1)*7,13,Math.sin(i*2.1)*7-3),sn.add(t),t}),$o=null,hc=null;function na(i,t){$o&&(ii.remove($o),If($o)),$o=Go(Ko(i),Di(i)),hc=i,ii.add($o),t&&(ii.userData.drop=0,ii.rotation.y=-.9)}var rn={az:.7,el:.26,dist:8.2,drag:!1,lx:0,auto:!0,idle:0};Pm.addEventListener("pointerdown",i=>{(Gt==="menu"||Gt==="garage")&&(rn.drag=!0,rn.lx=i.clientX,rn.idle=0)});addEventListener("pointermove",i=>{rn.drag&&(rn.az-=(i.clientX-rn.lx)*.008,rn.lx=i.clientX)});addEventListener("pointerup",()=>{rn.drag=!1});function t1(i){let t=performance.now()/1e3;if(jM.rotation.y+=i*.03,QM.forEach((l,c)=>{l.rotation.z=Math.sin(t*.5+c*2)*.35,l.rotation.x=Math.cos(t*.4+c)*.25}),rn.idle+=i,!rn.drag&&rn.idle>1.5&&(rn.az+=i*.25),ii.userData.drop!==void 0&&ii.userData.drop<1){let l=ii.userData.drop=Math.min(1,ii.userData.drop+i*1.9),c=l<1/2.75?7.5625*l*l:l<2/2.75?7.5625*(l-1.5/2.75)**2+.75:l<2.5/2.75?7.5625*(l-2.25/2.75)**2+.9375:7.5625*(l-2.625/2.75)**2+.984375;ii.position.y=.12+(1-c)*1.4,ii.rotation.y=-.9*(1-Math.min(1,l*1.4))**2}let e=innerHeight>innerWidth,n=(window.__orbitDist||rn.dist)*(e?Gt==="menu"?1.25:1.45:1)*(Gt==="garage"?1.25:1),s=!e&&innerHeight<=520,r=Gt==="garage"?e?0:s?2.6:.35:0;He.position.set(Math.sin(rn.az)*n,1.2+Math.sin(rn.el)*n*.5,Math.cos(rn.az)*n);let o=new N(0,.75,0),a=new N(Math.cos(rn.az),0,-Math.sin(rn.az)).multiplyScalar(r);He.position.add(a),o.add(a),Gt==="garage"?(He.position.y+=e?1.2:.9,o.y-=e?2.2:s?.55:1):Gt==="menu"&&(o.y-=e?2.1:s?.05:.25,e&&(He.position.y+=.8)),He.fov=e?62:45,He.updateProjectionMatrix(),He.lookAt(o)}var Gt="load";function jo(i){for(let t of document.querySelectorAll(".screen"))t.classList.toggle("on",t.id===i)}function Oe(i,t){V(i).classList.toggle("on",t)}function jr(){for(let i of document.querySelectorAll(".coins"))i.textContent=fe(H.coins)}var gm=0;function bn(i){let t=V("toast");t.textContent=i,t.classList.add("on"),clearTimeout(gm),gm=setTimeout(()=>t.classList.remove("on"),1800)}function ni(i,t="#29f0ff"){let e=V("feed");for(let s of e.children)s.classList.add("old");let n=document.createElement("div");for(n.className="fm",n.textContent=i,n.style.setProperty("--c",t),e.appendChild(n),setTimeout(()=>n.remove(),1400);e.children.length>3;)e.firstChild.remove()}function qr(i){let t=V("flash");t.style.setProperty("--c",i),t.classList.remove("fl"),t.offsetWidth,t.classList.add("fl")}var Lm=0;function Dm(i,t,e){let n=V("banner");n.querySelector("b").textContent=i,n.querySelector("span").textContent=t||"",n.style.setProperty("--c",e),n.classList.remove("go"),n.offsetWidth,n.classList.add("go"),Lm=performance.now()+1500}var ec=new N;function Um(i,t,e){if(ec.set(i,t,e).project(He),ec.z>1)return;let n=(ec.x+1)/2*innerWidth,s=(1-ec.y)/2*innerHeight,r=V("hCoins").getBoundingClientRect(),o=document.createElement("i");o.className="coin fly",document.body.appendChild(o);let a=r.left-26,l=r.top+8;o.animate([{transform:`translate(${n}px,${s}px) scale(.5)`,opacity:0},{transform:`translate(${n+(a-n)*.1}px,${s-50}px) scale(1.35)`,opacity:1,offset:.25},{transform:`translate(${a}px,${l}px) scale(.8)`,opacity:1}],{duration:620,easing:"cubic-bezier(.45,0,.6,1)"}).onfinish=()=>{o.remove();let c=V("hCoins").parentElement;c.classList.remove("bump"),c.offsetWidth,c.classList.add("bump")}}function Yr(i,t,e,n){if(i==="pop"&&(performance.now()<Lm||V("chain").classList.contains("on")))return ni(t+(e?"  "+e:""),n?"#ff3d5a":"#ffd23f");let s=V(i);s.querySelector("b").textContent=t;let r=s.querySelector("span");r&&(r.textContent=e||""),s.classList.toggle("bad",!!n),s.classList.remove("go"),s.offsetWidth,s.classList.add("go")}function uc(){for(let i of document.querySelectorAll(".seg")){let t=i.dataset.set,e=t==="gas"?Jr():H[t];for(let n of i.children)n.classList.toggle("on",String(e===!0?1:e===!1?0:e)===n.dataset.v)}}document.addEventListener("click",i=>{let t=i.target.closest(".seg button");if(!t)return;let e=t.parentElement.dataset.set,n=t.dataset.v;Tt.click(),H[e]=e==="quality"||e==="gas"?n:n==="1",Ke(),uc(),ti({music:H.music,sfx:H.sfx}),e==="quality"&&cc()});document.addEventListener("pointerdown",()=>{Jl(),ti({music:H.music,sfx:H.sfx}),um(Gt==="race"?1:0)},{capture:!0});function sc(){Gt="menu",jo("menu"),jr(),mf(0),hc!==H.car&&na(H.car),Am(),Ke(),V("misList2").innerHTML=YM(),ea(),er(),fc(),Cf()}function Cf(){let i=Date.now()-H.lastFree>18e4;V("freeBtn").disabled=!i,V("freeBtn").querySelector("span").textContent=i?"+300 free":"Free coins soon"}setInterval(()=>{Gt==="menu"&&Cf()},5e3);V("freeBtn").onclick=()=>{Tt.click(),Mn.rewarded().then(i=>{i&&(H.coins+=300,H.lastFree=Date.now(),Ke(),jr(),Cf(),Tt.coin(),bn("+300 coins!"))})};V("playBtn").onclick=()=>{Tt.click(),Rs(Fm().id)};V("allTracks").onclick=()=>{Tt.click(),ia()};V("dailyBtn").onclick=()=>{Tt.click(),Rs(Sf().id)};V("profBtn").onclick=()=>{Tt.click(),bn(`Level ${H.level}: race to earn XP \xB7 coins every level, Epic crate every 5th level`)};V("carPrev").onclick=()=>Bm(-1);V("carNext").onclick=()=>Bm(1);var Nm={hatch:"Hot hatch",coupe:"Sports coupe",rally:"Rally wagon",muscle:"Muscle car",super:"Supercar",hyper:"Hypercar"};function Fm(){let i=ta(),t=Rn.filter(e=>i>=e.need);return t.find(e=>((H.tracks[e.id]||{}).stars||0)<3)||t[t.length-1]}function fc(){let i=Ko(H.car),t=ke.filter(m=>H.owned.includes(m.id)),e=Zn(i,Di(i.id).up);V("mCar").textContent=i.name,V("mCarClass").innerHTML=`${Nm[i.type]||""} \xB7 <span style="color:${e.color}">CLASS ${e.cls}</span> \xB7 PR ${e.pr}`,V("cbDots").innerHTML=ke.map(m=>`<i class="${m.id===i.id?"on":H.owned.includes(m.id)?"own":""}"></i>`).join(""),V("carPrev").disabled=V("carNext").disabled=t.length<2;let n=Zn(i,Di(i.id).up),s=[["SPD",n.bars.speed],["ACC",n.bars.accel],["HDL",n.bars.hand],["NOS",n.bars.nitro]];V("mStats").innerHTML=s.map(([m,p])=>`<div class="ms"><span>${m}</span><div class="tr"><i style="width:${Math.min(100,p*100).toFixed(0)}%"></i></div><em>${Math.min(100,Math.round(p*100))}</em></div>`).join("");let r=Fm(),o=H.tracks[r.id]||{},a=o.stars||0,l=oc(o),c=Tf(r).find((m,p)=>!(l&1<<p));V("pcName").textContent=r.name,V("pcMeta").innerHTML=`${c?`Next \u2605: ${c.text}`:"All stars collected!"}${o.bestTime&&o.bestTime<1e9?` \xB7 \u23F1 ${ws(o.bestTime)}`:""}`;let h=V("pcTag");h.textContent=o.bestPos?"NEXT RACE":"NEW TRACK",h.classList.toggle("new",!o.bestPos),V("pcStars").innerHTML=[0,1,2].map(m=>Jo.replace("<svg",`<svg class="${l&1<<m?"on":""}"`)).join(""),V("mStars").textContent=`${ta()} / ${Rn.length*3}`,requestAnimationFrame(()=>{let m=V("pcArt"),p=m.getBoundingClientRect(),_=Math.min(2,devicePixelRatio||1);p.width<10||(m.width=Math.round(p.width*_),m.height=Math.round(p.height*_),Om(m,Qo(r.id),r.theme))});let u=Sf(),f=H.dailyDone===ic(),d=864e5-Date.now()%864e5;V("dcName").textContent=u.name,V("dcSub").textContent=f?`Done! Come back tomorrow \xB7 ${H.dailyStreak||1} day streak`:"Finish top 3 \u2192 Rare crate",V("dcTime").textContent=`${Math.floor(d/36e5)}h ${Math.floor(d%36e5/6e4)}m`,V("dailyBtn").classList.toggle("done",f);let g=H.missions.map(m=>({m,p:Math.min(1,m.prog/ac(m))})).sort((m,p)=>p.p-m.p)[0];V("misSub").textContent=g?Af(g.m):"All done!",V("misBar").style.width=g?(g.p*100).toFixed(0)+"%":"100%";let x=H.crates.std+H.crates.rare+H.crates.epic;V("crSub").textContent=x?`${x} ready to open`:`Next in ${3-(H.crate||0)} race${3-(H.crate||0)>1?"s":""}`,V("gSub").textContent=Cm()?"Something to buy!":"Upgrade & paint"}function Bm(i){let t=ke.filter(r=>H.owned.includes(r.id));if(t.length<2)return;let e=t.findIndex(r=>r.id===H.car),n=t[(e+i+t.length)%t.length];H.car=n.id,Ke(),Tt.flick(),na(n.id,!0),fc();let s=document.querySelector(".cbName");s.classList.remove("swap"),s.offsetWidth,s.classList.add("swap")}V("crateBtn").onclick=()=>{Tt.click(),Hm()};V("tutBtn").onclick=()=>{Tt.click(),Rs("harbor","tutorial")};V("tutYes").onclick=()=>{Tt.click(),Oe("tutAsk",!1),Rs("harbor","tutorial")};V("tutNo").onclick=()=>{Tt.click(),Oe("tutAsk",!1)};V("tutGo").onclick=()=>{Tt.click(),Oe("tutDone",!1),mc(),ia()};V("garageBtn").onclick=()=>{Tt.click(),Pf()};V("setBtn").onclick=()=>{Tt.click(),uc(),Oe("settings",!0)};V("setClose").onclick=()=>{Tt.click(),Oe("settings",!1)};V("misBtn").onclick=()=>{Tt.click(),Oe("misModal",!0)};V("misClose").onclick=()=>{Tt.click(),Oe("misModal",!1)};for(let i of document.querySelectorAll(".back"))i.onclick=()=>{Tt.click(),sc()};var xm={},Qo=i=>xm[i]||(xm[i]=Cp(Rn.find(t=>t.id===i))),e1={harbor:["#3d6fb0","#ffb37a","#2f78a8"],canyon:["#3f8ee0","#f6dcb0","#c47c45"],alpine:["#6aa9ef","#eef5ff","#dfe8f3"],neon:["#040611","#251046","#0b0d14"],autumn:["#5d9ad6","#f9e3c0","#6f8238"],volcano:["#140606","#7a2412","#221c1a"]};function Om(i,t,e){let n=i.getContext("2d"),s=i.width,r=i.height,[o,a,l]=e1[e],c=Math.min(s,r)/200,h=n.createLinearGradient(0,0,0,r);h.addColorStop(0,o),h.addColorStop(.5,a),h.addColorStop(.51,l),h.addColorStop(1,l),n.fillStyle=h,n.fillRect(0,0,s,r);let u=n.createRadialGradient(s/2,r*.42,0,s/2,r*.42,Math.max(s,r)*.7);u.addColorStop(0,"rgba(255,255,255,.12)"),u.addColorStop(1,"rgba(0,0,0,.35)"),n.fillStyle=u,n.fillRect(0,0,s,r);let f=t.bounds,d=r*.1,g=r*.58,x=Math.min(s*.78/(f.maxX-f.minX),g/(f.maxZ-f.minZ)),m=w=>s/2+(w-(f.minX+f.maxX)/2)*x,p=w=>d+g/2+(w-(f.minZ+f.maxZ)/2)*x,_=()=>{n.beginPath();for(let w=0;w<=t.n;w+=2){let I=w%t.n;w?n.lineTo(m(t.x[I]),p(t.z[I])):n.moveTo(m(t.x[I]),p(t.z[I]))}n.closePath()};n.lineJoin="round",n.lineCap="round",_(),n.lineWidth=15*c,n.strokeStyle="rgba(0,0,0,.35)",n.stroke(),_(),n.lineWidth=11*c,n.strokeStyle="#f4f4f4",n.stroke(),_(),n.lineWidth=7.5*c,n.strokeStyle="#262a33",n.stroke(),_(),n.lineWidth=.9*c,n.setLineDash([4*c,5*c]),n.strokeStyle="rgba(255,255,255,.55)",n.stroke(),n.setLineDash([]);let y=6,v=m(t.x[y])-m(t.x[0]),P=p(t.z[y])-p(t.z[0]),b=Math.atan2(P,v);n.save(),n.translate(m(t.x[0]),p(t.z[0])),n.rotate(b);for(let w=0;w<2;w++)for(let I=0;I<4;I++)n.fillStyle=(w+I)%2?"#111":"#fff",n.fillRect((w-1)*2.2*c,(I-2)*2.2*c,2.2*c,2.2*c);n.translate(9*c,0),n.fillStyle="#ff3d5a",n.beginPath(),n.moveTo(5*c,0),n.lineTo(-2*c,-4.5*c),n.lineTo(-2*c,4.5*c),n.closePath(),n.fill(),n.restore()}function ia(){Gt="tracks",jo("tracks");let i=ta();V("tStars").textContent=i,V("tgrid").innerHTML=Rn.map((t,e)=>{let n=H.tracks[t.id]||{},s=i<t.need,r=!s&&!n.bestPos;return`<button class="tcard${s?" locked":""}" data-id="${t.id}" style="--d:${e*60}ms"><canvas></canvas>
      <div class="tt"><span class="chip2">${t.laps} LAPS</span>${r?'<span class="chip2 new">NEW</span>':""}${n.bestTime&&n.bestTime<1e9?`<span class="chip2 tm">\u23F1 ${ws(n.bestTime)}</span>`:""}</div>
      <div class="tb2"><b>${t.name}</b><p>${t.blurb}</p>${wm(t,oc(n))}</div>
      ${s?`<div class="lock"><span class="ln">${t.name}</span>${XM}<b>${t.need} \u2605 needed</b><div class="lbar"><i style="width:${Math.min(100,i/t.need*100)}%"></i></div><small>You have ${i}</small></div>`:""}</button>`}).join(""),requestAnimationFrame(()=>{for(let t of document.querySelectorAll(".tcard")){let e=Rn.find(o=>o.id===t.dataset.id),n=t.querySelector("canvas"),s=t.getBoundingClientRect(),r=Math.min(2,devicePixelRatio||1);n.width=Math.max(160,Math.round(s.width*r)),n.height=Math.max(100,Math.round(s.height*r)),Om(n,Qo(e.id),e.theme),t.onclick=()=>{if(i<e.need){Tt.deny(),bn(`Collect ${e.need} stars to unlock`);return}Tt.click(),Rs(e.id)}}})}addEventListener("resize",()=>{Gt==="tracks"&&ia()});var tr=0,Ts="up";function Pf(){Gt="garage",jo("garage"),tr=ke.findIndex(i=>i.id===H.car),As(!0)}V("gList").onclick=i=>{let t=i.target.closest("[data-car]");if(!t)return;let e=+t.dataset.car;e!==tr&&(Tt.flick(),tr=e,As(!0))};var dc=(i,t)=>Math.round(Sp[t]*[1,1.35,1.6,2,2.6,3.3][i]/50)*50,n1={engine:4,grip:4,nitro:4};function bf(i,t){let e=Zn(i,{}).bars,n=Zn(i,t).bars,s=Zn(i,n1).bars,r=[["Top speed","speed"],["Acceleration","accel"],["Handling","hand"],["Nitro","nitro"],["Drift angle","drift"]],o=a=>Math.min(100,a*100).toFixed(1)+"%";return r.map(([a,l])=>`<div class="gs"><span>${a}</span><div class="tr"><i class="cap" style="width:${o(s[l])}"></i><i class="up" style="width:${o(n[l])}"></i><i class="base" style="width:${o(e[l])}"></i></div><em>${Math.round(Math.min(1,n[l])*100)}</em></div>`).join("")+'<div class="gLeg"><span><i style="background:#e8ebf8"></i>Stock</span><span><i style="background:linear-gradient(90deg,#ff8a1f,#ff2e6e)"></i>Upgrades</span><span><i style="background:repeating-linear-gradient(135deg,rgba(255,255,255,.3) 0 3px,transparent 3px 6px)"></i>Max</span></div>'}function As(i){let t=ke[tr],e=H.owned.includes(t.id),n=Di(t.id),s=Zn(t,e?n.up:{});(i||hc!==t.id)&&na(t.id,i),jr(),V("gList").innerHTML=ke.map((l,c)=>{let h=H.owned.includes(l.id),u=Zn(l,h?Di(l.id).up:{}),f=!h&&H.level<(l.level||1);return`<button class="gc${c===tr?" on":""}${h?"":" lk"}" data-car="${c}" style="--c:${u.color}"><span class="gcCls">${u.cls}</span><span class="gcT"><b>${l.name}</b><small>PR ${u.pr} \xB7 ${H.car===l.id?'<span class="drv">DRIVING</span>':h?"Owned":f?`Level ${l.level}`:`<i class="coin"></i>${fe(l.price)}`}</small></span></button>`}).join("");let r=V("gCls");r.textContent=s.cls,r.style.setProperty("--c",s.color),V("gName").textContent=t.name,V("gType").textContent=Nm[t.type]||"",V("gPR").textContent=s.pr,V("gDesc").textContent=t.desc,V("gStats").innerHTML=bf(t,e?n.up:{});let o=V("gAct");if(e){let l=H.car===t.id;o.className="btn act"+(l?" g":""),o.innerHTML=`<span>${l?"Driving this car":"Drive this car"}</span>`,o.disabled=l}else H.level<(t.level||1)?(o.className="btn act g",o.innerHTML=`<span>Unlocks at level ${t.level}</span>`,o.disabled=!0):(o.className="btn act y",o.innerHTML=`<span style="display:flex;align-items:center;gap:8px">Buy <i class="coin"></i>${fe(t.price)}</span>`,o.disabled=!1);ea();let a=[["up","Upgrades"],["paint","Paint"],["skins","Skins"],["wheels","Wheels"],["body","Body kit"],["neon","Neon"],["smoke","Smoke"]];V("gTabs").innerHTML=a.map(([l,c])=>`<button class="tab${Ts===l?" on":""}" data-t="${l}">${c}</button>`).join(""),V("gOpts").innerHTML=e?i1(t,n):`<div class="note">Buy this car to customize and upgrade it.</div><div class="upStats">${bf(t,{})}</div>`;for(let l of V("gOpts").querySelectorAll("canvas[data-skin]")){let c=zl(l.dataset.skin,n.paint,200,88);l.width=200,l.height=88,l.getContext("2d").drawImage(c,0,0)}}var qo=(i,t,e,n,s)=>`<button class="sw${t?" on":""}${s&&!wf(s)?" lk":""}" style="background:${i}" data-k="${e}" data-v="${n}" ${s?`data-i="${s}"`:""} aria-label="${n}"></button>`,Pn=(i,t,e,n,s)=>`<button class="chip${t?" on":""}" data-k="${e}" data-v="${n}" ${s?`data-i="${s}"`:""}>${i}${s&&!wf(s)?` <i class="coin"></i>${vs[s].price}`:""}</button>`;function i1(i,t){if(Ts==="paint")return`<div class="lbl">Finish</div>${Pn("Gloss",t.finish==="gloss","finish","gloss")}${Pn("Metallic",t.finish==="metal","finish","metal","finish_metal")}${Pn("Matte",t.finish==="matte","finish","matte","finish_matte")}${["pearl","candy","chrome"].map(a=>H.items.includes("finish_"+a)?Pn(a[0].toUpperCase()+a.slice(1),t.finish===a,"finish",a):`<button class="chip lk xc" data-x="finish_${a}">${a[0].toUpperCase()+a.slice(1)} <small>crates</small></button>`).join("")}<div class="lbl">Color</div>${Rl.map(a=>qo(a,t.paint===a,"paint",a)).join("")}`;if(Ts==="skins")return`<div class="lbl">Skins \xB7 ${Object.keys(ln).filter(a=>H.items.includes("skin_"+a)).length} / ${Object.keys(ln).length} collected \xB7 from crates</div><div class="skinGrid">${Pn("No skin",!t.skin,"skin","")}${Object.entries(ln).map(([a,l])=>{let c=H.items.includes("skin_"+a);return`<button class="skc t${l.tier}${t.skin===a?" on":""}${c?"":" lk"}" ${c?`data-k="skin" data-v="${a}"`:`data-xs="${a}"`}><canvas data-skin="${a}"></canvas><b>${l.name}</b><small>${xi[l.tier].name}</small></button>`}).join("")}</div>`;if(Ts==="wheels")return`<div class="lbl">Rim style</div>${Pn("Classic",t.rimStyle===0,"rimStyle",0)}${Pn("Sport",t.rimStyle===1,"rimStyle",1,"rim_1")}${Pn("Turbo",t.rimStyle===2,"rimStyle",2,"rim_2")}<div class="lbl">Rim color</div>${Cl.map(a=>qo(a,t.rims===a,"rims",a)).join("")}`;if(Ts==="body")return`<div class="lbl">Spoiler</div>${Pn("None",t.spoiler===0,"spoiler",0)}${Pn("Ducktail",t.spoiler===1,"spoiler",1,"spoiler_1")}${Pn("GT wing",t.spoiler===2,"spoiler",2,"spoiler_2")}<div class="lbl">Racing stripes</div>${Pn("Off",!t.stripes,"stripes",0)}${Pn("On",t.stripes,"stripes",1,"stripes")}${t.stripes?Rl.slice(0,12).map(a=>qo(a,t.stripeColor===a,"stripeColor",a)).join(""):""}`;if(Ts==="neon")return`<div class="lbl">Underglow</div>${Pn("Off",!t.neon,"neon","")}${bp.map(a=>qo(a,t.neon===a,"neon",a,"neon")).join("")}`;if(Ts==="smoke")return`<div class="lbl">Tire smoke color</div>${Ep.map((a,l)=>qo(a,t.smoke===a,"smoke",a,l?"smoke":null)).join("")}`;let e=ke.indexOf(i),n=Zn(i,t.up).pr,s={engine:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h3l2-2h6v2h3l2 3v5h-2v2h-3l-2-2H9l-2 2H4z"/></svg>',grip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',nitro:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L5 14h6l-2 8 9-13h-6z"/></svg>'},r=a=>+(a*100).toFixed(1),o={engine:`Top speed +${r(Hn.engine.max)}% \xB7 acceleration +${r(Hn.engine.accel)}% per level`,grip:`Grip +${r(Hn.grip.grip)}% \xB7 cornering +${r(Hn.grip.latG)}% per level`,nitro:`Nitro lasts +${r(Hn.nitro.nitro)}% longer per level`};return`<div class="upStats">${bf(i,t.up)}</div>`+["engine","grip","nitro"].map(a=>{let l=t.up[a],c=l<4?dc(e,l):0,h=l<4?Zn(i,{...t.up,[a]:l+1}).pr-n:0;return`<div class="upg2"><div class="uIc">${s[a]}</div><div class="uT"><b>${{engine:"Engine",grip:"Tires",nitro:"Nitro"}[a]}</b><small>${o[a]}</small><div class="pips">${[0,1,2,3].map(u=>`<i class="${u<l?"on":""}"></i>`).join("")}</div></div>${l<4?`<button class="btn${H.coins>=c?" y":" g"}" data-up="${a}"><span style="display:flex;align-items:center;gap:6px"><i class="coin"></i>${fe(c)} <small>+${h} PR</small></span></button>`:'<span class="mx">MAX</span>'}</div>`}).join("")}V("gTabs").onclick=i=>{let t=i.target.closest(".tab");t&&(Tt.click(),Ts=t.dataset.t,As(!1))};V("gOpts").onclick=i=>{let t=ke[tr],e=Di(t.id),n=i.target.closest("[data-up]");if(n){let h=n.dataset.up,u=dc(ke.indexOf(t),e.up[h]);if(H.coins<u){Tt.deny(),bn(`You need ${fe(u-H.coins)} more coins`);return}let f=Zn(t,e.up).pr;H.coins-=u,e.up[h]++,Ke(),Tt.buy(),bn(`Upgraded! PR ${f} \u2192 ${Zn(t,e.up).pr}`),As(!1);return}let s=i.target.closest("[data-x]");if(s){Tt.deny(),bn(`${Ql[s.dataset.x].name} only comes from crates`);return}let r=i.target.closest("[data-xs]");if(r){Tt.deny(),bn(`${ln[r.dataset.xs].name}: find it in ${["","Rare","Epic","Legendary"][ln[r.dataset.xs].tier]} drops from crates`);return}let o=i.target.closest("[data-k]");if(!o)return;let a=o.dataset.i;if(a&&!wf(a)){let h=vs[a].price;if(H.coins<h){Tt.deny(),bn(`You need ${fe(h-H.coins)} more coins`);return}H.coins-=h,H.items.push(a),Tt.buy(),bn(`${vs[a].name} unlocked for all cars!`)}else Tt.click();let l=o.dataset.k,c=o.dataset.v;(l==="rimStyle"||l==="spoiler")&&(c=+c),l==="stripes"&&(c=c==="1"),l==="neon"&&(c=c||null),e[l]=c,Ke(),As(!0)};V("gAct").onclick=()=>{let i=ke[tr];if(H.owned.includes(i.id)){H.car=i.id,Ke(),Tt.click(),As(!1);return}if(H.level<(i.level||1)){Tt.deny(),bn(`Reach level ${i.level} to unlock`);return}if(H.coins<i.price){Tt.deny(),bn(`You need ${fe(i.price-H.coins)} more coins`);return}H.coins-=i.price,H.owned.push(i.id),H.car=i.id,Ke(),Tt.buy(),bn(`${i.name} is yours!`),As(!1)};var In={};addEventListener("keydown",i=>{In[i.code]=!0,["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(i.code)&&(Gt==="race"||Gt==="countdown")&&i.preventDefault(),(i.code==="Escape"||i.code==="KeyP")&&Gt==="race"&&sa(!0)});addEventListener("keyup",i=>{In[i.code]=!1});var yi={L:!1,R:!1,D:!1,N:!1,G:!1,B:!1},Ef={tL:"L",tR:"R",tD:"D",tN:"N",tG:"G",tB:"B"},Qs=new Map,zm=(i,t)=>{let e=document.elementFromPoint(i,t),n=e&&e.closest&&e.closest("#touch .tb");return n&&getComputedStyle(n).display!=="none"?Ef[n.id]:null};function pc(){for(let i in yi)yi[i]=!1;for(let i of Qs.values())i&&(yi[i]=!0);for(let i in Ef)V(i).classList.toggle("down",yi[Ef[i]])}V("touch").addEventListener("pointerdown",i=>{let t=zm(i.clientX,i.clientY);if(t){if(i.preventDefault(),i.target.releasePointerCapture)try{i.target.releasePointerCapture(i.pointerId)}catch{}Qs.set(i.pointerId,t),Jl(),pc()}});addEventListener("pointermove",i=>{if(!Qs.has(i.pointerId))return;let t=zm(i.clientX,i.clientY);t!==Qs.get(i.pointerId)&&(Qs.set(i.pointerId,t),pc())});for(let i of["pointerup","pointercancel"])addEventListener(i,t=>{Qs.delete(t.pointerId)&&pc()});addEventListener("blur",()=>{Qs.clear(),pc()});var ym=!1;function vm(i,t){try{let e=navigator.getGamepads&&[...navigator.getGamepads()].find(n=>n&&n.vibrationActuator);e&&e.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:i,weakMagnitude:i*.6})}catch{}try{mn&&i>.5&&navigator.vibrate&&navigator.vibrate(Math.round(t*.4))}catch{}}var Jr=()=>H.gas||"manual";function s1(){let i=In.ArrowLeft||In.KeyA||yi.L,e={steer:(In.ArrowRight||In.KeyD||yi.R?1:0)-(i?1:0),drift:!!(In.Space||yi.D),nitro:!!(In.ShiftLeft||In.ShiftRight||In.KeyN||yi.N),brake:!!(In.ArrowDown||In.KeyS||yi.B),gas:Jr()==="auto"||In.ArrowUp||In.KeyW||yi.G||yi.D?1:0},n=navigator.getGamepads?[...navigator.getGamepads()].find(s=>s):null;if(n){let s=n.axes[0]||0,r=a=>n.buttons[a]&&n.buttons[a].pressed;Math.abs(s)>.15&&(e.steer=Math.sign(s)*Math.min(1,(Math.abs(s)-.15)/.7)),r(14)&&(e.steer=-1),r(15)&&(e.steer=1);let o=n.buttons[7]?n.buttons[7].value||(n.buttons[7].pressed?1:0):0;e.drift=e.drift||r(0)||r(5),e.nitro=e.nitro||r(1)||r(4),e.brake=e.brake||r(2)||r(6),e.gas=Math.max(e.gas,o>.05?o:0,(n.axes[1]||0)<-.5?1:0),r(9)&&!ym&&Gt==="race"&&sa(!0),ym=r(9)}return e}var F=null;function If(i){i.traverse(t=>{t.geometry&&t.geometry.dispose();let e=t.material?Array.isArray(t.material)?t.material:[t.material]:[];for(let n of e){for(let s of["map","emissiveMap"])n[s]&&n[s].dispose();n.dispose()}})}var _m=0;async function Rs(i,t="race"){for(let m of["results","pause","tutDone","crateModal","misModal","tutAsk"])Oe(m,!1);V("loadBar").style.width="30%",jo("load"),Gt="loading",await Mn.commercial(),await new Promise(m=>setTimeout(m,30)),F&&(If(F.world.scene),F.world.env&&F.world.env.dispose(),F=null);let e=Rn.find(m=>m.id===i),n=Qo(i),s=lc(),r=nf(n,e.theme,s,Rf);r.env||(r.scene.environment=KM),V("loadBar").style.width="80%";let o=Ko(H.car),a=Di(H.car),l=Go(o,a);if(r.scene.add(l),l.rotation.order="YXZ",r.night){let m=new wi("#fff3d6",260,70,.5,.55,1.4);m.position.set(0,1,l.userData.front),m.target.position.set(0,0,30),l.add(m,m.target)}let c=Rn.indexOf(e),h=t==="tutorial"?[]:Up(c,o,ke),u=new Dl(n,Bo(o,a.up),h,t==="tutorial"?99:e.laps||3),f=u.player,d=ke.filter(m=>m.id!==o.id).sort(()=>Math.random()-.5),g=["KAI","NOVA","REX","MILA","JIN","ZARA","DUKE","LUNA","ACE","IVY","MAX","SKY"].sort(()=>Math.random()-.5),x=u.rivals.map((m,p)=>{let _=d[p%d.length],y=Object.keys(ln),v=Go(_,{skin:Math.random()<.4?y[Math.random()*y.length|0]:"",paint:Rl[Math.random()*12|0],finish:Math.random()<.5?"metal":"gloss",rims:Cl[Math.random()*Cl.length|0],rimStyle:Math.random()*3|0,spoiler:Math.random()*3|0,stripes:Math.random()<.35,stripeColor:"#f4f4f4"});v.rotation.order="YXZ",r.scene.add(v);let P=document.createElement("canvas");P.width=256,P.height=64;let b=new nn(P);b.colorSpace=Se;let w=new qn(new Bn({map:b,depthWrite:!1,transparent:!0,fog:!1}));return w.scale.set(3.4,.85,1),w.position.y=2.6,r.scene.add(w),v.userData.tag={sprite:w,cv:P,tex:b,name:g[p],pos:0},v});if(F={mode:t,world:r,tr:n,tdef:e,mesh:l,race:f,ses:u,rivalMeshes:x,cf:a,tutI:0,tutT:0,tutSteer:0,tutDrift:0,tutNitro:0,tutExtra:0,skids:new Gl(r.scene,r.skid),smoke:new Vl(r.scene),sparks:new Wl(r.scene),glit:new Xl(r.scene),camY:f.car.y+3,lines:0,zoneOn:!1,count:3.6,lastCount:4,shake:0,finishT:0,smokeT:0,mini:a1(n),cpGate:0,hud:{},best:(H.tracks[i]||{}).best||0,tut:!H.tutorial&&t!=="tutorial",nitroWas:!1},F.smoke.dim=r.night?.42:1,F.rec=[],F.recT=0,F.ghostData=t==="race"?$M(i):null,F.ghost=null,F.ghostData){let m=Go(Ko(F.ghostData.car)||o,{paint:"#2ee6ff",finish:"gloss",rims:"#ffffff",rimStyle:0,spoiler:0});m.traverse(p=>{if(p.isMesh){let y=(Array.isArray(p.material)?p.material:[p.material]).map(v=>{let P=v.clone();return P.transparent=!0,P.opacity=.32,P.depthWrite=!1,P.color&&P.color.set("#7ff3ff"),P});p.material=y.length===1?y[0]:y,p.castShadow=!1}}),r.scene.add(m),F.ghost=m,m.visible=!1}F.daily=t==="race"&&i===Sf().id&&H.dailyDone!==ic(),rc(F.mesh,f,1),u.rivals.forEach((m,p)=>rc(x[p],m,1)),He.position.set(f.car.x+Math.sin(f.car.h)*9,3,f.car.z+Math.cos(f.car.h)*9),jo("hud"),V("touch").classList.toggle("on",mn),document.body.classList.toggle("manualgas",Jr()==="manual");{let m=H.tracks[i]||{},p=V("goals");p.innerHTML=t==="race"?`<small>STAR GOALS</small>${wm(e,oc(m),"gl big")}`:"",p.classList.toggle("on",t==="race"),clearTimeout(_m),_m=setTimeout(()=>p.classList.remove("on"),7500),F.ghostData&&setTimeout(()=>{F&&F.ghost&&Gt==="race"&&ni(`GHOST: your best ${ws(F.ghostData.t)}`,"#7ff3ff")},4200),F.daily&&setTimeout(()=>{F&&Gt==="race"&&ni("DAILY CHALLENGE: finish top 3","#ffcf3a")},5400),V("hBest").innerHTML=`<span class="ht">${Jo}${fe(e.drift)}</span>${m.bestTime&&m.bestTime<1e9?`<span>BEST ${ws(m.bestTime)}</span>`:""}`}V("chain").classList.remove("on"),V("count").textContent="",V("tut").style.display="none",V("coach").classList.remove("on","ok"),t==="tutorial"&&(V("hBest").textContent="TUTORIAL",F.race.car.nitro=0),V("tip").innerHTML=(Jr()==="manual"?`Hold <b>${mn?"GAS":"\u2191 / W"}</b> to drive \xB7 `:"")+`Hold <b>${mn?"DRIFT":"SPACE"}</b> right when <b>GO!</b> appears for a boost start`,V("tip").style.display="block",V("hud").classList.remove("inzone"),V("feed").innerHTML="",Ji("hCoins","0"),Gt="countdown",Jl(),hm(),mf(1),cc()}function rc(i,t,e){let n=t.car,s=F.tr,r=t.idx,o=Math.cos(n.h-Math.atan2(s.tx[r],s.tz[r])),a=i.userData,l=Math.min(1,e*12),c=n.y+(n.yOff||0),h=-n.pitch,u=(n.bank||0)*o;a.pose||(a.pose={y:c,p:h,r:u}),a.pose.y+=(c-a.pose.y)*Math.min(1,e*(n.air?30:20)),a.pose.p+=(h-a.pose.p)*l,a.pose.r+=(u-a.pose.r)*l,i.position.set(n.x,a.pose.y,n.z),i.rotation.set(a.pose.p,n.h,a.pose.r)}function r1(i){let t=i.order,e=i.all.filter(s=>!t.includes(s)).sort((s,r)=>r.total-s.total),n=new Map;return[...t,...e].forEach((s,r)=>n.set(s,r+1)),n}function o1(i,t){let e=i.cv.getContext("2d");e.clearRect(0,0,256,64),e.fillStyle="rgba(10,12,18,.72)",e.beginPath(),e.roundRect(4,6,248,52,14),e.fill(),e.fillStyle=t===1?"#ffd23f":"#ff3d5a",e.beginPath(),e.roundRect(8,10,56,44,10),e.fill(),e.fillStyle=t===1?"#2a1a00":"#fff",e.font='italic 32px "Russo One", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(t,36,34),e.fillStyle="#fff",e.textAlign="left",e.font=`italic ${i.name.length>8?22:i.name.length>6?26:32}px "Russo One", sans-serif`,e.fillText(i.name,74,34),i.tex.needsUpdate=!0}function a1(i){let t=document.createElement("canvas");t.width=t.height=240;let e=t.getContext("2d"),n=i.bounds,s=Math.min(200/(n.maxX-n.minX),200/(n.maxZ-n.minZ)),r=(n.minX+n.maxX)/2,o=(n.minZ+n.maxZ)/2,a=c=>120+(c-r)*s,l=c=>120+(c-o)*s;e.lineJoin="round",e.beginPath();for(let c=0;c<i.n;c+=2)c?e.lineTo(a(i.x[c]),l(i.z[c])):e.moveTo(a(i.x[c]),l(i.z[c]));return e.closePath(),e.lineWidth=12,e.strokeStyle="rgba(255,255,255,.85)",e.stroke(),e.lineWidth=7,e.strokeStyle="#2b2f38",e.stroke(),{cv:t,X:a,Y:l}}function l1(){let i=V("mini").getContext("2d"),t=F.mini,e=F.race.car;i.clearRect(0,0,240,240),i.drawImage(t.cv,0,0);for(let n of F.ses.rivals)i.fillStyle="#ffd23f",i.beginPath(),i.arc(t.X(n.car.x),t.Y(n.car.z),6,0,7),i.fill();i.save(),i.translate(t.X(e.x),t.Y(e.z)),i.rotate(-e.h+Math.PI),i.fillStyle="#ff3d5a",i.strokeStyle="#fff",i.lineWidth=3,i.beginPath(),i.moveTo(0,-13),i.lineTo(9,10),i.lineTo(-9,10),i.closePath(),i.stroke(),i.fill(),i.restore()}function Ji(i,t){F.hud[i]!==t&&(F.hud[i]=t,V(i).textContent=t)}var gf=new N,Mm=new N;function km(i){let t=F.race,e=t.car,n=s1();if(Gt==="countdown"){F.count-=i;let T=Math.ceil(F.count-.6);if(T!==F.lastCount&&T>=0){F.lastCount=T;let k=V("count");if(k.textContent=T>0?T:"GO!",k.style.setProperty("--cc",["#06d6a0","#ffd23f","#ff9a1f","#ff3d5a"][Math.min(3,T)]),k.classList.remove("go"),k.offsetWidth,k.classList.add("go"),Tt.beep(T===0),T===1&&(F.early=n.drift),T===0){let G=n.drift&&!F.early;F.ses.start(G),G?(Yr("pop","PERFECT START!","boost",!1),qr("#ffd23f"),Tt.turbo(3),F.lines=1.4):F.early&&ni("Too early!","#ff3d5a"),Gt="race",Mn.start(),F.tut&&p1(),setTimeout(()=>{V("count").textContent==="GO!"&&(V("count").textContent="")},950),V("tip").style.display="none"}}}window.__bot&&Gt==="race"&&(n=Qu(t,"drift"));let s=F.ses.update(i,n,Qu);for(let T of s){if(T.type==="hit"&&(F.sparks.burst(T.x,T.z,Math.min(30,6+T.impact*2),e.y+.5),F.shake=Math.max(F.shake,Math.min(.55,T.impact/24)),Tt.hit(T.impact),vm(Math.min(1,T.impact/14),90+T.impact*8),F.lean=(F.lean||0)+Math.sign((T.x-e.x)*-Math.cos(e.h)+(T.z-e.z)*Math.sin(e.h))*Math.min(.05,T.impact*.004)),T.type==="bump"&&(F.sparks.burst(T.x,T.z,14,e.y+.6),F.shake=Math.max(F.shake,Math.min(.4,T.impact/15)),Tt.hit(T.impact*2)),T.type==="crash"&&(Yr("pop","CRASH!",`combo lost -${fe(T.lost)}`,!0),qr("#ff3d5a"),Tt.crash(),vm(1,260)),T.type==="bank"){let k=["NICE","GREAT","AWESOME","INSANE","LEGENDARY"].indexOf(T.label)+1;Yr("pop","+"+fe(T.pts),T.label||"DRIFT",!1),Tt.bank(k)}if((T.type==="cp"||T.type==="lap")&&(F.world.flashGate(F.cpGate%4===3?-1:F.cpGate%4),F.cpGate++),T.type==="lap"&&(Dm(T.final?"FINAL LAP!":`LAP ${T.lap+1} / ${t.laps}`,ws(t.lapTimes[t.lapTimes.length-1]),T.final?"#ff3d5a":"#2a7bf4"),Tt.cp()),T.type==="charge"&&(ni(["","TURBO 1","TURBO 2","TURBO 3"][T.tier],["","#3fa9ff","#ff9a1f","#c04bff"][T.tier]),Tt.charge(T.tier)),T.type==="turbo"&&(Yr("pop",["","MINI TURBO!","SUPER TURBO!","ULTRA TURBO!"][T.tier],"",!1),qr(["","#3fa9ff","#ff9a1f","#c04bff"][T.tier]),Tt.turbo(T.tier),F.lines=.9+T.tier*.3,F.shake=Math.max(F.shake,.15+T.tier*.08)),T.type==="flick"&&(Tt.flick(),F.kick=1),T.type==="draft"&&(ni("SLIPSTREAM","#9aa3b2"),Tt.nitro()),T.type==="perfectLand"&&(ni("PERFECT LANDING","#06d6a0"),Tt.turbo(1),F.lines=.8),T.type==="pad"&&(ni("BOOST!","#29f0ff"),qr("#29f0ff"),Tt.turbo(2),F.lines=1.3,F.shake=Math.max(F.shake,.25)),T.type==="coin"&&(F.world.takeCoin(T.k),Tt.coin(),Ji("hCoins",String(t.coins)),Um(e.x,e.y+1,e.z),F.glit.emit(e.x,e.y+1.2,e.z,"#ffcc33",8,3,3,.5)),T.type==="air"&&(Yr("pop","BIG AIR!",`+${fe(T.pts)}  \xB7  ${T.t.toFixed(1)}s`,!1),Tt.bank(2)),T.type==="land"){F.shake=Math.max(F.shake,Math.min(.7,T.impact/18)),Tt.hit(T.impact*1.4);for(let k=0;k<6;k++)F.smoke.emit(e.x+(Math.random()-.5)*2,e.y+.3,e.z+(Math.random()-.5)*3,0,0,F.world.night?"#776":"#c9b9a0",.8,1.4)}if(T.type==="zoneIn"&&(V("hud").classList.add("inzone"),ni("DRIFT ZONE x2","#ff2bd6"),Tt.cp()),T.type==="zoneOut"&&V("hud").classList.remove("inzone"),T.type==="lap"&&F.world.resetCoins(),T.type==="finish"){Gt="finish",F.finishT=0,t.pos=F.ses.position(),Mn.stop(),t.pos===1?Tt.buy():Tt.timeup();let k=V("count");k.innerHTML=`${_f(t.pos)}<small>${t.pos===1?"YOU WIN!":"FINISH"}</small>`,k.classList.remove("go","fin"),k.offsetWidth,k.classList.add("fin"),qr(t.pos===1?"#ffd23f":"#29f0ff")}}if(e.nitroOn&&!F.nitroWas&&Tt.nitro(),F.nitroWas=e.nitroOn,F.rumbleT=(F.rumbleT||0)-i,e.scrape>0&&e.speed>7&&Gt==="race"?(e.scrape-=i,F.sparks.burst(e.scrapeX-e.vx*.02,e.scrapeZ-e.vz*.02,2+Math.round(e.speed/18),e.y+.45),F.scrapeT=(F.scrapeT||0)-i,F.scrapeT<=0&&(Tt.scrape(e.speed),F.scrapeT=.07),F.shake=Math.max(F.shake,.05)):e.scrape=0,e.kerb&&e.speed>15&&Gt==="race"&&(F.shake=Math.max(F.shake,.06),F.rumbleT<=0&&(Tt.rumble(),F.rumbleT=.09)),rc(F.mesh,t,i),cf(F.mesh,e,i,n.brake&&Gt==="race"),Gt==="race"&&!t.finished&&(F.recT+=i,F.recT>=.1&&(F.recT-=.1,F.rec.push(Math.round(e.x*10)/10,Math.round((e.y+(e.yOff||0))*10)/10,Math.round(e.z*10)/10,Math.round(e.h*100)/100))),F.ghost){let T=F.ghostData.p,k=t.time/.1,G=Math.floor(k)*4,W=k-Math.floor(k);if(Gt==="race"&&G+7<T.length){let st=T[G+7]-T[G+3];st=Math.atan2(Math.sin(st),Math.cos(st)),F.ghost.visible=Math.hypot(T[G]-e.x,T[G+2]-e.z)>4,F.ghost.position.set(T[G]+(T[G+4]-T[G])*W,T[G+1]+(T[G+5]-T[G+1])*W,T[G+2]+(T[G+6]-T[G+2])*W),F.ghost.rotation.set(0,T[G+3]+st*W,0)}else F.ghost.visible=!1}let r=r1(F.ses);F.ses.rivals.forEach((T,k)=>{let G=F.rivalMeshes[k],W=T.car;rc(G,T,i),cf(G,W,i,!1);let st=G.userData.tag,j=r.get(T),Q=Math.hypot(W.x-e.x,W.z-e.z);if(st.pos!==j&&(st.pos=j,o1(st,j)),st.sprite.position.set(W.x,G.position.y+2.7,W.z),st.sprite.material.opacity=Math.max(0,Math.min(1,(Q-12)/8,(160-Q)/60)),W.drifting&&!W.air&&F.smokeT<=0){let ut=G.userData,X=W.x+Math.sin(W.h)*ut.rearX,ht=W.z+Math.cos(W.h)*ut.rearX;F.smoke.emit(X,W.y+.35,ht,W.vx,W.vz,"#ffffff",.7)}F.skids.add(2+k,W.x+Math.sin(W.h)*G.userData.rearX,W.z+Math.cos(W.h)*G.userData.rearX,-Math.cos(W.h),Math.sin(W.h),W.drifting&&!W.air,W.y+(W.yOff||0))});let o=Math.sin(e.h),a=Math.cos(e.h),l=-Math.cos(e.h),c=Math.sin(e.h),h=F.mesh.userData,u=!e.air&&e.speed>6&&(e.drifting||n.brake&&e.speed>12&&Gt==="race"),f=["","#3fa9ff","#ff9a1f","#c04bff"][e.tier||0];F.smokeT-=i;for(let T=0;T<2;T++){let k=T?1:-1,G=e.x+o*h.rearX+l*k*(h.W/2-.1),W=e.z+a*h.rearX+c*k*(h.W/2-.1),st=F.race.idx,j=e.y+((G-F.tr.x[st])*F.tr.nx[st]+(W-F.tr.z[st])*F.tr.nz[st])*Math.sin(F.tr.bank[st]);F.skids.add(T,G,W,l,c,u,j),u&&F.smokeT<=0&&F.smoke.emit(G,j+.35,W,e.vx,e.vz,F.cf.smoke,Math.min(1,Math.abs(e.slip)*1.6)),u&&f&&F.glit.emit(G,j+.25,W,f,2,3,2.5,.35)}F.smokeT<=0&&(F.smokeT=.035),F.smoke.update(i),F.sparks.update(i),F.glit.update(i);let d=Math.min(1.2,e.speed/t.st.max),g=o,x=a;if(e.speed>3){let T=e.vx/e.speed,k=e.vz/e.speed;g=o*.4+T*.6,x=a*.4+k*.6;let G=Math.hypot(g,x);g/=G,x/=G}let m=innerHeight>innerWidth,p=(m?8:6.1)+d*1.8+(e.nitroOn?.9:0),_=(m?3.3:2.35)+d*.45;F.camSide=(F.camSide||0)+((e.drifting&&!e.air?e.dDir*Math.min(1,e.slipA/.5)*1.6:0)-(F.camSide||0))*Math.min(1,i*2.2);{let T=x,k=-g;g+=T*F.camSide*.12,x+=k*F.camSide*.12;let G=Math.hypot(g,x);g/=G,x/=G}F.camY+=(e.y+(e.yOff||0)-F.camY)*Math.min(1,i*(e.air?2.5:6));let y=e.x-g*p,v=e.z-x*p,P=F.camY+_;if(Gt==="countdown"){let T=Math.max(0,F.count-.6)/3,k=T*Math.PI*.9;y=e.x-(g*Math.cos(k)-x*Math.sin(k))*(p+T*3),v=e.z-(x*Math.cos(k)+g*Math.sin(k))*(p+T*3),P=F.camY+_+T*1.5}if(Gt==="finish"){F.finishT+=i;let T=F.finishT*.5;y=e.x+Math.sin(e.h+2.4+T)*9,v=e.z+Math.cos(e.h+2.4+T)*9,P=F.camY+3.4}if(P=Math.max(P,Cn(F.tr,y,v)+1.2),gf.set(y,P,v),He.position.lerp(gf,1-Math.exp(-i*(Gt==="finish"?2:6))),F.shake=Math.max(0,F.shake-i*2.5),F.shake>0){let T=performance.now()/1e3,k=F.shake*F.shake*.9;He.position.add(gf.set(Math.sin(T*41)*k+Math.sin(T*23+1)*k*.5,Math.sin(T*37+2)*k*.7,Math.sin(T*29+4)*k*.5))}let b=e.speed>3?e.vx/e.speed:o,w=e.speed>3?e.vz/e.speed:a;Mm.set(e.x+(o*.4+b*.6)*2.2,F.camY+1.1,e.z+(a*.4+w*.6)*2.2),He.lookAt(Mm),F.lean=(F.lean||0)+((e.drifting?-e.dDir*Math.min(.035,Math.abs(e.slipA)*.04):-e.steer*.008)-(F.lean||0))*Math.min(1,i*2.5),He.rotateZ(F.lean),F.kick=Math.max(0,(F.kick||0)-i*3);let I=e.nitroOn||e.boostT>0,S=(m?70:58)+d*10+(I?9:0)+(e.draftOn?3:0);if(Math.abs(He.fov-S)>.05&&(He.fov+=(S-He.fov)*Math.min(1,i*4),He.updateProjectionMatrix()),F.world.update(i,F.mesh.position,He),F.lines=Math.max(F.lines-i,I?.6:e.draftOn?.35:0),Gm(F.lines,d),pf(Math.min(1.2,e.speed/t.st.max),Math.max(e.drifting?Math.abs(e.slip):0,(e.under||0)*.7),e.nitroOn,!0,n.gas===void 0?1:n.gas),Ji("hScore",fe(t.score)),Ji("hSpd",String(Math.round(e.speed*3.6))),F.mode==="race"&&!F.goalHit&&t.score>=F.tdef.drift){F.goalHit=!0,ni(`\u2605 DRIFT GOAL ${fe(F.tdef.drift)}!`,"#ffcf3a"),Tt.star(2);let T=document.querySelector("#hBest .ht");T&&T.classList.add("ok")}let M=t.finished?t.pos:F.ses.position();if(Gt==="race"&&F.lastPos&&M<F.lastPos&&t.time>3&&F.mode!=="tutorial"){let T=250*(F.lastPos-M);t.score+=T,F.overtakes=(F.overtakes||0)+1,ni(`OVERTAKE!  +${T}`,"#ffd23f"),Tt.cp()}if(F.lastPos=M,Gt==="finish"&&t.pos===1&&F.finishT<3&&(F.fwT=(F.fwT||0)-i,F.fwT<=0)){F.fwT=.22;let T=["#ff3d5a","#ffd23f","#29f0ff","#7cff4f","#ff2bd6","#ffffff"];F.glit.emit(e.x+(Math.random()-.5)*40,e.y+14+Math.random()*10,e.z+(Math.random()-.5)*40,T[Math.random()*T.length|0],46,16,7,1.3),Tt.pop()}F.hud.pos!==M&&F.mode!=="tutorial"&&(F.hud.pos=M,V("hTime").innerHTML=`${_f(M)}<small>/${F.ses.all.length}</small>`,V("hTime").classList.remove("pp"),V("hTime").offsetWidth,V("hTime").classList.add("pp")),F.mode==="tutorial"?(Ji("hTime","TUTORIAL"),Ji("hLap",`STEP ${Math.min(F.tutI+1,Zo.length)}/${Zo.length}`),d1(i,s,n,e)):Ji("hLap",`LAP ${Math.min(t.lap+1,t.laps)}/${t.laps} \xB7 ${ws(t.time)}`);{let T=Math.min(100,e.speed/(t.st.max*1.3)*100),k=e.nitro*100,G=V("gSpd"),W=V("gNos"),st=G.parentNode.parentNode;G.style.strokeDasharray=`${T.toFixed(1)} 100`,G.classList.toggle("z",T<.8),W.style.strokeDasharray=`${k.toFixed(1)} 100`,W.classList.toggle("z",k<.8);let j=e.nitro>.985,Q=e.nitroOn?"BOOST!":j?"NITRO READY":`NITRO ${Math.round(k)}%`;st.classList.toggle("full",j&&!e.nitroOn),st.classList.toggle("using",!!e.nitroOn),F.hud.gLbl!==Q&&(F.hud.gLbl=Q,V("gLbl").textContent=Q)}V("gSpd").style.stroke=I?"#7ff9ff":e.speed>t.st.max*.95?"#ffd23f":"#fff";let C=t.chain,z=C.pts>0&&Gt==="race";if(V("chain").classList.toggle("on",z),z){Ji("cPts",fe(C.pts)),Ji("cMult","x"+C.mult),V("cMult").style.background=["#ff3d5a","#ff3d5a","#ff7a1a","#ffb703","#29f0ff","#d36bff"][C.mult],V("cClose").classList.toggle("on",C.close);let T=V("cTurbo");T.className="tur t"+(e.tier||0)+(e.sweet?" sweet":""),T.style.setProperty("--p",Math.min(1,(e.charge||0)/Fo[3]).toFixed(3))}V("wrong").style.display=t.wrongWay?"block":"none",l1(),Gt==="finish"&&F.finishT>3.2&&m1()}function er(){let i=H.crates.std+H.crates.rare+H.crates.epic,t=V("crateCnt");t&&(t.textContent=i,t.classList.toggle("on",i>0))}var xf={};function c1(i){if(xf[i])return xf[i];let t=256,e=new on(t,t,{samples:4});e.texture.colorSpace=Se,gn.decor(!1),gn.setCrate(Li[i],Li[i].colors[0]),gn.update(.3,1,1),Ue.setRenderTarget(e),Ue.setClearColor(0,0),Ue.clear(),Ue.render(gn.scene,gn.cam),Ue.setRenderTarget(null),Ue.setClearColor(0,1),gn.decor(!0);let n=new Uint8Array(t*t*4);Ue.readRenderTargetPixels(e,0,0,t,t,n),e.dispose();let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createImageData(t,t);for(let a=0;a<t;a++)o.data.set(n.subarray((t-1-a)*t*4,(t-a)*t*4),a*t*4);return r.putImageData(o,0,0),xf[i]=s.toDataURL()}var bm={},h1=i=>bm[i]||(bm[i]=zl(i,"#e63946",160,70).toDataURL()),u1=8*6e4;function Hm(){jr(),V("crInv").innerHTML=["std","rare","epic"].map(r=>{let o=Li[r],a=H.crates[r];return`<div class="crCard${a?" has":""}">${a?`<span class="own">${a}</span>`:""}<img src="${c1(r)}" alt=""><b>${o.name}</b>
      <div class="odds">${o.n} rewards${o.guarantee?` \xB7 ${xi[o.guarantee].name}+ guaranteed`:""}<br><i style="color:${xi[3].color}">Legendary ${o.odds[3]}%</i> \xB7 <i style="color:${xi[2].color}">Epic ${o.odds[2]}%</i></div>
      <div class="btns">${a?`<button class="btn y" data-open="${r}"><span>Open</span></button>`:""}<button class="btn${a?" g":""}" data-buy="${r}"><span>Buy \xB7 ${fe(o.price)}</span></button></div></div>`}).join("");let i=3-(H.crate||0);V("crNext").innerHTML=`<span>Free Street crate</span><div class="pips">${[0,1,2].map(r=>`<i class="${r<(H.crate||0)?"on":""}"></i>`).join("")}</div><small>${i} more race${i>1?"s":""}</small>`;let t=(H.lastAdCrate||0)+u1-Date.now(),e=V("crAd");e.disabled=t>0,e.querySelector("span").textContent=t>0?`Free crate in ${Math.ceil(t/6e4)} min`:"Free crate \xB7 watch ad";let n=Object.keys(ln),s=n.filter(r=>H.items.includes("skin_"+r));V("crColN").textContent=`${s.length} / ${n.length}`,V("crCol").innerHTML=n.map(r=>`<span class="${s.includes(r)?"":"lk"}" style="--c:${xi[ln[r].tier].color}" title="${ln[r].name}"><img src="${h1(r)}" alt=""></span>`).join(""),Oe("crateModal",!0)}V("crInv").onclick=i=>{let t=i.target.closest("[data-open]");if(t){Tt.click(),Oe("crateModal",!1),Kr(t.dataset.open);return}let e=i.target.closest("[data-buy]");if(!e)return;let n=e.dataset.buy,s=Li[n].price;if(H.coins<s){Tt.deny(),bn(`You need ${fe(s-H.coins)} more coins`);return}H.coins-=s,H.crates[n]++,Ke(),Tt.buy(),er(),Oe("crateModal",!1),Kr(n)};V("crAd").onclick=()=>{Tt.click(),Mn.rewarded().then(i=>{i&&(H.lastAdCrate=Date.now(),H.crates.std++,Ke(),er(),Oe("crateModal",!1),Kr("std"))})};V("crateClose").onclick=()=>{Tt.click(),Oe("crateModal",!1),Gt==="menu"&&fc()};function f1(i){if(i.kind==="skin")return`<img src="${zl(i.item.slice(5),Di(H.car).paint,200,88).toDataURL()}" alt="">`;if(i.kind==="coins")return`<svg viewBox="0 0 60 60"><defs><radialGradient id="rc" cx=".35" cy=".35"><stop offset="0" stop-color="#fff3a8"/><stop offset=".5" stop-color="#ffcc1a"/><stop offset="1" stop-color="#b37a00"/></radialGradient></defs>${[[30,40],[22,30],[38,26]].map(([e,n])=>`<ellipse cx="${e}" cy="${n}" rx="15" ry="15" fill="url(#rc)" stroke="#8a5a00" stroke-width="2"/><text x="${e}" y="${n+5}" font-size="14" text-anchor="middle" fill="#8a5a00" font-family="Russo One">$</text>`).join("")}</svg>`;if(i.kind==="xp")return'<svg viewBox="0 0 60 60"><path d="M30 4l22 13v26L30 56 8 43V17z" fill="#3fa9ff" stroke="#bfe3ff" stroke-width="3"/><text x="30" y="37" font-size="18" text-anchor="middle" fill="#fff" font-family="Russo One">XP</text></svg>';let t=i.item;if(t.startsWith("finish_")){let e=t.slice(7);return`<svg viewBox="0 0 60 60"><defs><radialGradient id="fm" cx=".3" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#9aa4b2"/><stop offset="1" stop-color="#3b4350"/></radialGradient>
      <linearGradient id="fp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd6f5"/><stop offset=".35" stop-color="#c7f0ff"/><stop offset=".7" stop-color="#e2ffd6"/><stop offset="1" stop-color="#f5d6ff"/></linearGradient>
      <radialGradient id="fc" cx=".35" cy=".3"><stop offset="0" stop-color="#ff9aa8"/><stop offset=".35" stop-color="#d0102f"/><stop offset="1" stop-color="#4a0010"/></radialGradient>
      <radialGradient id="fh" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".3" stop-color="#e8eef5"/><stop offset=".6" stop-color="#7d8794"/><stop offset=".8" stop-color="#f2f6fa"/><stop offset="1" stop-color="#5b6470"/></radialGradient></defs>
      <path d="M12 44c0-10 8-14 14-18 5-3 8-12 18-12 8 0 10 8 6 14-5 8-1 20-12 24-9 3-26 4-26-8z" fill="${{metal:"url(#fm)",matte:"#c44",pearl:"url(#fp)",candy:"url(#fc)",chrome:"url(#fh)"}[e]||"#888"}" stroke="rgba(255,255,255,.6)" stroke-width="2"/><circle cx="44" cy="18" r="3" fill="#fff" opacity=".8"/></svg>`}return t.startsWith("rim_")?`<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" fill="#1b1c1f"/><circle cx="30" cy="30" r="17" fill="none" stroke="#dfe4ea" stroke-width="3"/>${[0,1,2,3,4].map(e=>`<rect x="28.5" y="14" width="3" height="16" fill="#dfe4ea" transform="rotate(${e*72} 30 30)"/>`).join("")}<circle cx="30" cy="30" r="4" fill="#dfe4ea"/></svg>`:t.startsWith("spoiler_")?'<svg viewBox="0 0 60 60"><path d="M6 22c10-5 38-5 48 0l-2 6c-10-3-34-3-44 0z" fill="#dfe4ea"/><rect x="18" y="27" width="4" height="16" fill="#9aa4b2"/><rect x="38" y="27" width="4" height="16" fill="#9aa4b2"/><rect x="8" y="44" width="44" height="6" rx="3" fill="#3b4350"/></svg>':t==="stripes"?'<svg viewBox="0 0 60 60"><rect x="8" y="8" width="44" height="44" rx="10" fill="#e63946"/><rect x="20" y="8" width="6" height="44" fill="#fff"/><rect x="34" y="8" width="6" height="44" fill="#fff"/></svg>':t==="neon"?'<svg viewBox="0 0 60 60"><defs><radialGradient id="ng"><stop offset="0" stop-color="#29f0ff"/><stop offset="1" stop-color="#29f0ff" stop-opacity="0"/></radialGradient></defs><ellipse cx="30" cy="42" rx="28" ry="12" fill="url(#ng)"/><rect x="12" y="22" width="36" height="16" rx="6" fill="#dfe4ea"/></svg>':`<svg viewBox="0 0 60 60">${[[20,36,12],[34,30,14],[44,40,10]].map(([e,n,s])=>`<circle cx="${e}" cy="${n}" r="${s}" fill="#ff8fd0" opacity=".85"/>`).join("")}</svg>`}function Kr(i){if(!i||!H.crates[i])return;H.crates[i]--;let t=fm(i,H.items),e=Math.max(...t.map(s=>s.tier));for(let s of t)s.kind==="coins"?H.coins+=s.amount:s.kind==="xp"?Rm(s.amount):H.items.includes(s.item)||H.items.push(s.item);Ke(),jr(),ea(),er();let n=V("crateOpen");n.className="on",document.body.classList.add("crating"),gn.on=!0,gn.setCrate(Li[i],Li[i].colors[0]),V("coTitle").textContent=Li[i].name,V("coHint").textContent=mn?"Tap to open":"Click to open",V("coCards").innerHTML="",Tt.pop(),n.onclick=s=>{s.target.closest(".btn")||gn.tap()&&(V("coHint").textContent="",Tt.charge(1),setTimeout(()=>Tt.charge(2),430),setTimeout(()=>Tt.charge(3),860))},gn.onBurst=()=>{gn.setHue(xi[e].color),Tt.turbo(e>=2?3:2),n.animate([{background:"rgba(255,255,255,.75)"},{background:"rgba(255,255,255,0)"}],{duration:450}),V("coTitle").innerHTML=`<span style="color:${xi[e].color}">${e>=2?xi[e].name.toUpperCase()+"!":"Rewards"}</span>`,setTimeout(()=>{V("coCards").innerHTML=t.map((s,r)=>`<div class="rw t${s.tier}${s.kind==="skin"?" skin":""}" style="--c:${xi[s.tier].color};--d:${(r*.38).toFixed(2)}s"><div class="ic">${f1(s)}</div><b>${s.kind==="coins"?fe(s.amount)+" coins":s.kind==="xp"?"+"+s.amount+" XP":s.name}</b><small>${xi[s.tier].name.toUpperCase()}</small>${s.kind==="skin"||s.kind==="item"?'<span class="newt">NEW</span>':""}</div>`).join(""),t.forEach((s,r)=>setTimeout(()=>{s.tier>=3?Tt.turbo(3):Tt.star(s.tier)},r*380)),setTimeout(()=>{n.classList.add("done");let s=["epic","rare","std"].find(r=>H.crates[r]);V("coMore").style.display=s?"":"none",V("coMore").querySelector("span").textContent=s?`Open ${Li[s].name}`:"",V("coMore").onclick=()=>{Tt.click(),Kr(s)}},300+t.length*380)},450)}}V("coDone").onclick=()=>{if(Tt.click(),V("crateOpen").className="",document.body.classList.remove("crating"),gn.on=!1,er(),Gt==="results"){let i=H.crates.std+H.crates.rare+H.crates.epic,t=V("openCrate");t&&(i?t.querySelector("span").textContent=`Open crate${i>1?` (${i})`:""}`:t.remove())}Gt==="garage"&&As(!0),Gt==="menu"&&(ea(),fc(),hc===H.car&&na(H.car))};var Zo=[{title:"Steer",key:()=>mn?"\u25C0 \u25B6":"\u2190 \u2192",text:()=>Jr()==="manual"?mn?"Press the GAS pedal (right) to drive and steer with the arrows. The wide pedal is the BRAKE.":"Hold \u2191 (or W) to drive and steer with \u2190 \u2192 (or A / D). \u2193 / S brakes.":mn?"The car drives by itself. Tap the arrow buttons to steer along the road.":"The car drives by itself. Steer with the arrow keys (or A / D).",done:i=>i.tutSteer>1.3},{title:"Drift!",key:()=>mn?"DRIFT":"SPACE",text:()=>`HOLD ${mn?"DRIFT":"SPACE"} to slide. Steer more for a tighter drift, less for a wide one. Let go to straighten.`,done:i=>i.tutDrift>1.8},{title:"Drift turbo",key:()=>"TURBO",text:()=>"Hold the drift until the bar under your points turns BLUE, then LET GO for a turbo boost!",done:(i,t)=>t.some(e=>e.type==="turbo")},{title:"Switch sides",key:()=>mn?"\u25C0 \u25B6":"\u2190 \u2192",text:()=>"Keep holding drift and steer hard the OTHER way: the car swings into a drift to the other side.",done:i=>i.tutFlick||i.tutT>14},{title:"Nitro",key:()=>mn?"NITRO":"SHIFT",text:()=>"Drifting fills your nitro (blue ring). Press NITRO for a speed burst!",start:i=>{i.race.car.nitro=1},done:i=>i.tutNitro>.7},{title:"Boosts & coins",key:()=>">>>",text:()=>"Drive over the blue arrows for a boost and collect coins on the road.",done:i=>i.tutExtra>=2||i.tutT>16},{title:"Race!",key:()=>"1st",text:()=>"Races are 3 laps against 3 rivals. Win for stars, drift for points. Good luck!",done:i=>i.tutT>5}];function d1(i,t,e,n){let s=Zo[F.tutI];!s||F.tutEnd||(F.tutT===0&&(s.start&&s.start(F),V("coachKey").textContent=s.key(),V("coachTitle").textContent=s.title,V("coachText").textContent=s.text(),V("coachDots").innerHTML=Zo.map((r,o)=>`<i class="${o<F.tutI?"on":o===F.tutI?"cur":""}"></i>`).join(""),V("coach").classList.remove("ok"),V("coach").classList.add("on")),F.tutT+=i,Math.abs(e.steer)>.3&&!n.drifting&&(F.tutSteer+=i),n.drifting&&(F.tutDrift+=i),n.drifting&&F.tutDir!==void 0&&n.dDir!==F.tutDir&&(F.tutFlick=!0),F.tutDir=n.drifting?n.dDir:void 0,n.nitroOn&&(F.tutNitro+=i),F.tutExtra+=t.filter(r=>r.type==="pad"||r.type==="coin").length,F.tutT>.6&&s.done(F,t)&&(V("coach").classList.add("ok"),Tt.cp(),F.tutI++,F.tutT=0,F.tutI>=Zo.length&&(F.tutEnd=!0,V("coach").classList.remove("on"),Gt="results",Wo(),Mn.stop(),H.tutDone||(H.coins+=500,H.tutDone=!0,H.tutorial=!0,Ke()),V("touch").classList.remove("on"),Oe("tutDone",!0),Tt.buy())))}var Ss=V("lines"),Es=Ss.getContext("2d"),yf=!1;function Gm(i,t){if(i<=0){yf&&(Es.clearRect(0,0,Ss.width,Ss.height),yf=!1);return}Ss.width!==innerWidth>>1&&(Ss.width=innerWidth>>1,Ss.height=innerHeight>>1);let e=Ss.width,n=Ss.height,s=e/2,r=n*.55;yf=!0,Es.clearRect(0,0,e,n),Es.strokeStyle="rgba(255,255,255,"+Math.min(.5,i*.4)+")",Es.lineWidth=1.5,Es.beginPath();for(let o=0;o<26;o++){let a=Math.random()*6.283,l=Math.max(e,n)*(.35+Math.random()*.3),c=l+30+Math.random()*90*(.5+t);Es.moveTo(s+Math.cos(a)*l,r+Math.sin(a)*l*.8),Es.lineTo(s+Math.cos(a)*c,r+Math.sin(a)*c*.8)}Es.stroke()}function p1(){let i=V("tut");i.style.display="block";let t=Jr()==="manual",e=F?F.race.laps:3;i.innerHTML=mn?`${t?"<b>GAS</b> to drive \xB7 ":""}Steer <b>\u25C0 \u25B6</b> \xB7 hold <b>DRIFT</b> in corners \xB7 <b>NITRO</b> for speed<br>Race <b>${e} laps</b> \xB7 long drifts charge a <b>TURBO</b>`:`${t?"<b>\u2191 / W</b> gas \xB7 ":""}Steer <b>\u2190 \u2192</b> \xB7 <b>hold SPACE</b> to drift \xB7 <b>SHIFT</b> nitro<br>Race <b>${e} laps</b> \xB7 long drifts charge a <b>TURBO</b> that fires when you let go`,setTimeout(()=>{i.style.display="none"},9e3),H.tutorial=!0,Ke()}function m1(){Gt="results",Wo(),V("count").textContent="",V("count").className="",V("chain").classList.remove("on");let i=F.race,t=F.tdef,e=H.tracks[t.id]||(H.tracks[t.id]={best:0,stars:0}),n=i.pos||F.ses.position();i.pos=n;let s=i.score>e.best,r=e.stars||0,o=oc(e),a=(n<=3?1:0)|(n===1?2:0)|(i.score>=t.drift?4:0),l=o|a,c=[0,1,2].filter(C=>l&1<<C).length,h=i.finishTime&&(!e.bestTime||e.bestTime>=1e9||i.finishTime<e.bestTime),u=i.lapTimes.length?Math.min(...i.lapTimes):0;e.goals=l,u&&(e.bestLap=Math.min(e.bestLap||1e9,u)),h&&F.mode==="race"&&F.rec.length>40&&qM(t.id,{t:i.finishTime,car:H.car,p:F.rec});let f=F.daily&&n<=3;f&&(H.dailyDone=ic(),H.crates.rare++,H.dailyStreak=(H.dailyLast===new Date(Date.now()-864e5).toISOString().slice(0,10)&&H.dailyStreak||0)+1,H.dailyLast=ic()),e.bestPos=Math.min(e.bestPos||9,n),e.bestTime=Math.min(e.bestTime||1e9,i.finishTime||1e9),e.best=Math.max(e.best,i.score),e.stars=c;let d=wp[n-1]+Math.round(i.score/40)+i.coins;H.coins+=d,V("rPicked").textContent=i.coins;let g=ZM(i),x=H.level,m=H.xp/_s(H.level),p=Ap[n-1]+Math.round(i.score/20)+i.coins*3+g.length*100,_=Rm(p);Ke(),V("rXpTxt").textContent=`+${fe(p)} XP`,V("rLv").textContent="LV "+x;let y=V("rXp");y.style.transition="none",y.style.width=m*100+"%",setTimeout(()=>{y.style.transition="width .9s ease-out",y.style.width=_.length?"100%":H.xp/_s(H.level)*100+"%",_.length&&setTimeout(()=>{V("rLv").textContent="LV "+H.level,y.style.transition="none",y.style.width="0%",y.offsetWidth,y.style.transition="width .6s ease-out",y.style.width=H.xp/_s(H.level)*100+"%",Tt.buy()},950)},600),V("rLvUp").innerHTML=_.map(C=>`<div class="lvup">Level ${C.level} reached${ke.find(z=>z.level===C.level)?` <em>\xB7 ${ke.find(z=>z.level===C.level).name} unlocked</em>`:""}${C.crate?" <em>\xB7 +1 Epic crate</em>":""}<span><i class="coin"></i>+${fe(C.coins)}</span></div>`).join(""),V("rMis").innerHTML=g.map(C=>`<div class="mdone"><span>Mission: ${C.text}</span><b><i class="coin"></i>+${C.reward}</b></div>`).join(""),H.crate=(H.crate||0)+1;let v=!1,P=c===3&&r<3&&F.mode==="race";H.crate>=3&&(H.crate=0,H.crates.std++,v=!0),P&&H.crates.rare++,Ke();let b=H.crates.std+H.crates.rare+H.crates.epic;V("rCrate").innerHTML=(f?`<div class="crow got daily"><span>Daily challenge done! +1 Rare crate \xB7 ${H.dailyStreak} day streak</span></div>`:"")+(P?'<div class="crow got"><span>3 stars! +1 Rare crate</span></div>':"")+(v?'<div class="crow got"><span>+1 Street crate!</span></div>':`<div class="crow"><span>Next crate</span><div class="pips">${[0,1,2].map(C=>`<i class="${C<H.crate?"on":""}"></i>`).join("")}</div><small>${3-H.crate} more race${3-H.crate>1?"s":""}</small></div>`)+(b?`<button class="btn g" id="openCrate"><span>Open crate${b>1?` (${b})`:""}</span></button>`:""),b&&(V("openCrate").onclick=()=>{Tt.click(),Kr(["epic","rare","std"].find(C=>H.crates[C]))});let w=JM();V("rGoal").innerHTML=w?`<div class="goal${w.go?" go":""}"><span>${w.text}</span><div class="mb"><i style="width:${Math.min(100,w.p*100).toFixed(0)}%"></i></div></div>`:"",ea(),V("rNew").innerHTML=(h?'<span class="tagx hot">NEW BEST TIME</span>':"")+(s&&i.score>0?'<span class="tagx">DRIFT RECORD</span>':""),V("rKick").textContent=F.mode==="tutorial"?"TUTORIAL COMPLETE":F.daily?"DAILY CHALLENGE":"RACE COMPLETE",V("rTrack").textContent=t.name,V("rBest").textContent=fe(i.score),V("rChain").textContent=fe(i.bestChain),V("rLaps").innerHTML=i.finishTime?`${ws(i.finishTime)}${h?'<em class="nt">New best</em>':`<small>Best ${ws(e.bestTime)}</small>`}`:"-",V("rStarHint").innerHTML=Tf(t).map((C,z)=>`<div class="gr${l&1<<z?" ok":""}${a&1<<z&&!(o&1<<z)?" new":""}">${Jo}<span>${C.text}</span><b>${l&1<<z?o&1<<z?"done":"NEW!":""}</b></div>`).join(""),g1(V("rCoins"),d,700),V("rStars").innerHTML=[0,1,2].map(()=>Jo).join("");let I=V("rStars").children;[0,1,2].filter(C=>l&1<<C).forEach((C,z)=>setTimeout(()=>{I[C].classList.add("on"),Tt.star(z)},500+z*380)),V("rScore").innerHTML=`${_f(n)}<small>/ ${F.ses.all.length}</small>`,V("rScore").classList.toggle("p1",n===1);let S=V("rDouble");S.disabled=d<=0,S.querySelector("span").textContent=`Double coins  +${fe(d)}`,S.onclick=()=>{S.disabled=!0,Mn.rewarded().then(C=>{if(!C){S.disabled=!1;return}H.coins+=d,Ke(),V("rCoins").textContent="+"+fe(d*2),Tt.coin(),bn(`+${fe(d)} bonus coins!`)})};let M=Rn.find(C=>C.need>0&&ta()>=C.need&&(H.tracks[C.id]||{}).seen!==!0);M&&((H.tracks[M.id]=H.tracks[M.id]||{best:0,stars:0}).seen=!0,Ke(),V("rLvUp").insertAdjacentHTML("afterbegin",`<div class="lvup">New track unlocked <em>\xB7 ${M.name}</em></div>`)),Oe("results",!0),V("touch").classList.remove("on"),er()}V("rAgain").onclick=()=>{Tt.click(),Rs(F.tdef.id,F.mode)};V("rGarage").onclick=()=>{Tt.click(),mc(),Pf()};V("rTracks").onclick=()=>{Tt.click(),mc(),ia()};function g1(i,t,e=0){i.textContent="+0";let n=performance.now()+e,s=900,r=o=>{let a=Math.min(1,Math.max(0,(o-n)/s)),l=1-Math.pow(1-a,3);i.textContent="+"+fe(Math.round(t*l)),a<1?requestAnimationFrame(r):t>0&&Tt.coin()};requestAnimationFrame(r)}function mc(){Oe("results",!1),Oe("pause",!1),Wo(),Mn.stop(),V("touch").classList.remove("on"),Gm(0,0),F&&(If(F.world.scene),F.world.env&&F.world.env.dispose(),F=null)}function sa(i){i&&Gt!=="race"&&Gt!=="countdown"||(i?(F.prev=Gt,Gt="paused",Mn.stop(),pf(0,0,!1,!1),uc(),Oe("pause",!0)):(Oe("pause",!1),Gt=F.prev,Gt==="race"&&Mn.start()))}V("hPause").onclick=()=>{Tt.click(),sa(!0)};V("pResume").onclick=()=>{Tt.click(),sa(!1)};V("pRestart").onclick=()=>{Tt.click(),Oe("pause",!1),Mn.stop(),Wo(),Rs(F.tdef.id,F.mode)};V("pQuit").onclick=()=>{Tt.click(),mc(),sc()};document.addEventListener("visibilitychange",()=>{document.hidden?((Gt==="race"||Gt==="countdown")&&sa(!0),df(!0)):df(!1)});var Em=performance.now(),vf=0,nc=0;window.__fps=0;function Vm(i){requestAnimationFrame(Vm);let t=Math.min(.05,(i-Em)/1e3);Em=i,Ue.info.reset(),vf++,nc+=t,nc>=1&&(window.__fps=vf/nc,vf=0,nc=0),F&&(Gt==="race"||Gt==="countdown"||Gt==="finish")?(km(t),tc(F.world.scene,F.world.bloom)):F&&(Gt==="paused"||Gt==="results")?tc(F.world.scene,F.world.bloom):Gt!=="loading"&&(t1(t),tc(sn,[.18,.96])),gn.on&&(gn.update(t,innerWidth,innerHeight),tc(gn.scene,[.55,.7],gn.cam))}async function x1(){V("loadBar").style.width="20%";try{await Promise.race([document.fonts.load('52px "Russo One"'),new Promise(t=>setTimeout(t,1500))])}catch{}await Mn.init(),V("loadBar").style.width="60%",na(H.car);for(let t of Rn)Qo(t.id);V("loadBar").style.width="100%",uc(),requestAnimationFrame(Vm),Mn.loaded(),sc();let i=new Date().toISOString().slice(0,10);if(!H.tutDone&&!H.tutAsked)H.tutAsked=!0,Ke(),Oe("tutAsk",!0);else if(H.daily!==i){let t=new Date(Date.now()-864e5).toISOString().slice(0,10),e=H.daily===t?H.dayStreak%7+1:1,n=[250,400,600,800,1e3,1500,3e3],s=n[e-1];V("dDays").innerHTML=n.map((o,a)=>`<div class="dd${a+1<e?" got":a+1===e?" now":""}"><small>Day ${a+1}</small><i class="coin"></i><b>${o>=1e3?o/1e3+"k":o}</b></div>`).join(""),V("dClaim").querySelector("span").textContent=`Claim ${fe(s)}`,V("dDouble").querySelector("span").textContent=`Get ${fe(s*2)} \xB7 ad`,Oe("daily",!0);let r=o=>{H.coins+=o,H.daily=i,H.dayStreak=e,e===7&&H.crates.rare++,Ke(),jr(),er(),Oe("daily",!1),Tt.coin(),bn(`+${fe(o)} coins!${e===7?" + Rare crate":""}`)};V("dClaim").onclick=()=>r(s),V("dDouble").onclick=()=>Mn.rewarded().then(o=>r(o?s*2:s))}window.__scanRoad=()=>{let t=new gl,e=F.tr,n={},s=[],r=new N,o=new N(0,-1,0);F.world.scene.traverse(a=>{(a.isMesh||a.isInstancedMesh)&&!a.userData.coin&&a.visible&&s.push(a)});for(let a=0;a<e.n;a+=2)for(let l=-e.halfW+.4;l<=e.halfW-.4;l+=1.2){let c=e.h[a]+l*Math.sin(e.bank[a]);r.set(e.x[a]+e.nx[a]*l,c+3.2,e.z[a]+e.nz[a]*l),t.set(r,o),t.far=2.85;let h=t.intersectObjects(s,!1)[0];if(!h)continue;let u=Array.isArray(h.object.material)?h.object.material[0]:h.object.material,f=h.object.geometry.type+" #"+(u.color?u.color.getHexString():"?")+(h.object.isInstancedMesh?" inst":"");(n[f]=n[f]||[]).push([a,+l.toFixed(1),+(h.point.y-c).toFixed(2),h.instanceId])}return Object.fromEntries(Object.entries(n).map(([a,l])=>[a,{n:l.length,ex:l.slice(0,5)}]))},window.__game={get state(){return Gt},get R(){return F},startRace:Rs,goGarage:Pf,goTracks:ia,goMenu:sc,goCrates:Hm,openCrate:Kr,save:H,step(t,e=1/30){for(let n=0;n<t&&F&&(Gt==="race"||Gt==="countdown"||Gt==="finish");n++)km(e)},ui:{feed:ni,pop:Yr,banner:Dm,flash:qr,flyCoin:Um},scanRoad(t){let e=Rn.find(c=>c.id===t),n=Qo(t),s=nf(n,e.theme,lc(),Rf),r=[],o=new me,a=new ci;s.scene.updateMatrixWorld(!0);let l=(c,h,u)=>{if(a.copy(c.geometry.boundingSphere).applyMatrix4(h),a.radius>60)return;let f=Il(n,a.center.x,a.center.z,140);if(f.i<0)return;let d=n.h[f.i],g=(a.center.x-n.x[f.i])*n.nx[f.i]+(a.center.z-n.z[f.i])*n.nz[f.i],x=a.radius*.7;Math.abs(g)-x<n.halfW-.4&&a.center.y-x<d+1.2&&a.center.y+x>d+.25&&f.d-x<n.halfW-.4&&r.push({type:c.geometry.type,k:u,color:c.material.color?"#"+c.material.color.getHexString():"",x:+a.center.x.toFixed(1),z:+a.center.z.toFixed(1),y:+(a.center.y-d).toFixed(1),r:+a.radius.toFixed(1),lat:+g.toFixed(1),i:f.i})};return s.scene.traverse(c=>{if(!(!c.isMesh||c.userData.coin||c.userData.mound||!c.geometry))if(c.geometry.boundingSphere||c.geometry.computeBoundingSphere(),c.isInstancedMesh)for(let h=0;h<c.count;h++)c.getMatrixAt(h,o),o.premultiply(c.matrixWorld),l(c,o,h);else l(c,c.matrixWorld,-1)}),r},info(){let t=Ue.info.render;return{calls:t.calls,tris:t.triangles,geo:Ue.info.memory.geometries,tex:Ue.info.memory.textures}}}}x1();})();
