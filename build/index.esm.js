import e from"jszip";import t from"tweetnacl";import n from"tweetnacl-util";import{Contract as r}from"@ethersproject/contracts";import{verifyMessage as o}from"@ethersproject/wallet";import{Web3Provider as i}from"@ethersproject/providers";import a from"@metamask/detect-provider";import"eth-object";import{mappingAt as s}from"eth-util-lite";import c from"protons";import u from"multihashing";import l from"cids";import d from"libp2p";import p from"libp2p-websockets";import y from"@lit-protocol/libp2p-webrtc-direct";import{NOISE as m}from"libp2p-noise";import h from"libp2p-mplex";import f from"libp2p-kad-dht";import g from"peer-id";import"multiaddr";import v from"libp2p-bootstrap";import b from"it-pipe";import"it-length-prefixed";import"it-pushable";import w from"secrets.js-lit";import k from"uint8arrays/from-string";import P from"uint8arrays/to-string";import T from"it-all";!function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=Object.create((t&&t.prototype instanceof f?t:f).prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r=d;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?m:p,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",y="executing",m="completed",h={};function f(){}function g(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(N([])));k&&k!==n&&r.call(k,i)&&(b=k);var P=v.prototype=f.prototype=Object.create(b);function T(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){function n(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):t.resolve(d).then(function(e){u.value=e,a(u)},function(e){return n("throw",e,a,s)})}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t(function(t,o){n(e,r,t,o)})}return o=o?o.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function N(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=P.constructor=v,v.constructor=g,g.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(P),e},e.awrap=function(e){return{__await:e}},T(S.prototype),S.prototype[a]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},T(P),c(P,s,"Generator"),P[i]=function(){return this},P.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}({});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}();var S={name:"AES-CBC",length:256};function E(e,r,o){switch(o){case"x25519-xsalsa20-poly1305":var i,a=t.box.keyPair();try{i=n.decodeBase64(e)}catch(e){throw new Error("Bad public key")}var s=n.decodeUTF8(r),c=t.randomBytes(t.box.nonceLength),u=t.box(s,c,i,a.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:n.encodeBase64(c),ephemPublicKey:n.encodeBase64(a.publicKey),ciphertext:n.encodeBase64(u)};default:throw new Error("Encryption type/version not supported")}}function A(e,r){switch(e.version){case"x25519-xsalsa20-poly1305":var o,i=n.decodeBase64(r),a=n.decodeBase64(e.nonce),s=n.decodeBase64(e.ciphertext),c=n.decodeBase64(e.ephemPublicKey),u=t.box.open(s,a,c,i);try{o=n.encodeUTF8(u)}catch(e){throw new Error("Decryption failed.  Could not encode result as utf8")}if(o)return o;throw new Error("Decryption failed.  Output is falsy");default:throw new Error("Encryption type/version not supported.")}}var I=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],x=c("\nmessage Request {\n  enum Type {\n    HANDSHAKE = 0;\n    GET_KEY_FRAGMENT = 1;\n    STORE_KEY_FRAGMENT = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n  optional bytes clientPubKey = 6;\n  optional bytes merkleProof = 7;\n}\nmessage Response {\n  enum Type {\n    HANDSHAKE_RESPONSE = 0;\n    GET_KEY_FRAGMENT_RESPONSE = 1;\n    STORE_KEY_FRAGMENT_RESPONSE = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n  optional bytes serverPubKey = 4;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 1;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    AUTH_FAILURE = 2;\n    ERROR = 3;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 1;\n  required bytes fragmentNumber = 2;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),N={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137,name:"Polygon",symbol:"MATIC",decimals:18,rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://explorer.matic.network"],balanceStorageSlot:1,type:"ERC1155"},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1,name:"Ethereum",symbol:"ETH",decimals:18,balanceStorageSlot:1,type:"ERC1155"},kovan:{contractAddress:"0xA9b2180C2A479Ba9b263878C4d81AE4e0E717846",chainId:42,name:"Ethereum",symbol:"ETH",decimals:18,balanceStorageSlot:1,type:"ERC20"}},R=function(){try{var e=(new Date).toISOString(),r=F.replace("{{timestamp}}",e);return Promise.resolve(function(e){var t=e.body;try{return Promise.resolve(C()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.request({method:"personal_sign",params:[r,t]})).then(function(e){var n=o(t,e).toLowerCase();if(console.log("Signature: ",e),console.log("recovered address: ",n),n!==r){var i="ruh roh, the user signed with a different address ("+n+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:n}})})}catch(e){return Promise.reject(e)}}({body:r})).then(function(e){localStorage.setItem("lit-auth-signature",JSON.stringify({sig:e.signature,derivedVia:"web3.eth.personal.sign",signedMessage:r,address:e.address}));var o=t.box.keyPair();localStorage.setItem("lit-comms-keypair",JSON.stringify({publicKey:n.encodeBase64(o.publicKey),secretKey:n.encodeBase64(o.secretKey)})),console.log("generated and saved lit-comms-keypair")})}catch(e){return Promise.reject(e)}},K=function(e){var t=e.chain;try{return Promise.resolve(C()).then(function(e){var n=e.web3,r=e.account;return Promise.resolve(n.request({method:"eth_chainId",params:[]})).then(function(e){var o;function i(e){if(o)return e;function t(){n=JSON.parse(n);var e=function(){if(r!==n.address)return Promise.resolve(R()).then(function(){n=localStorage.getItem("lit-auth-signature"),n=JSON.parse(n)})}();return e&&e.then?e.then(function(){return n}):n}var n=localStorage.getItem("lit-auth-signature"),i=function(){if(!n)return Promise.resolve(R()).then(function(){n=localStorage.getItem("lit-auth-signature")})}();return i&&i.then?i.then(t):t()}var a=N[t],s=function(){if(e!==a.chainId)return function(){if(1!==a.chainId){var e=[{chainId:"0x"+a.chainId.toString("16"),chainName:a.name,nativeCurrency:{name:a.name,symbol:a.symbol,decimals:a.decimals},rpcUrls:a.rpcUrls,blockExplorerUrls:a.blockExplorerUrls}];return Promise.resolve(n.request({method:"wallet_addEthereumChain",params:e}).catch()).then(function(e){e&&console.log(e)})}return o=1,{errorCode:"wrong_chain"}}()}();return s&&s.then?s.then(i):i(s)})})}catch(e){return Promise.reject(e)}},L=function(e){var t=e.tokenAddress,n=e.balanceStorageSlot,r=e.tokenId;try{return console.log("getMerkleProof for { tokenAddress, balanceStorageSlot, tokenId } "+t+", "+n+", "+r),Promise.resolve(C()).then(function(e){var o=e.web3,i=s(n,r,e.account);return console.log("storageAddress: ",i),Promise.resolve(o.request({method:"eth_getBlockByNumber",params:["latest",!1]})).then(function(e){return console.log("rpcBlock: ",e),Promise.resolve(o.request({method:"eth_getProof",params:[t,[i],e.number]})).then(function(t){return console.log("rpcProof: ",t),{header:e,accountProof:t.accountProof,storageProof:t.storageProof[0].proof,blockHash:e.hash}})})})}catch(e){return Promise.reject(e)}},C=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(a()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0].toLowerCase();return{web3:e,account:n}})})}catch(e){return Promise.reject(e)}},F="I am creating an account to use LITs at {{timestamp}}";function _(e){return new Promise(function(t,n){var r=new FileReader;r.onloadend=function(){t(r.result)},r.readAsDataURL(e)})}function j(e,t,n){if(!e.s){if(n instanceof O){if(!n.s)return void(n.o=j.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(j.bind(null,e,t),j.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var O=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{j(r,1,i(this.v))}catch(e){j(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?j(r,1,t?t(o):o):n?j(r,1,n(o)):j(r,2,o)}catch(e){j(r,2,e)}},r},e}(),B=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(S,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),{symmetricKey:JSON.stringify(e),encryptedZip:t}})})})})})}catch(e){return Promise.reject(e)}},M=function(t,n){try{return Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),S,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(n)).then(function(n){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(t,n)).then(function(t){var n=new e;return Promise.resolve(n.loadAsync(t)).then(function(e){return e.files})})})}catch(e){return Promise.reject(e)}},U={},D=function(e){var t=e.tokenId,n=e.chain,r=e.tokenAddress.toLowerCase(),o=t.toString(16).padStart(64,"0"),i=u(Buffer.from(r+"|"+o+"|"+n),"sha2-256");return new l(i).toString()},H=x.Request,G=x.Response,q=x.StoreKeyFragmentResponse,J=x.GetKeyFragmentResponse,Y={zipAndEncryptString:function(t){try{var n=new e;return n.file("string.txt",t),B(n)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(t){try{for(var n=new e,r=0;r<t.length;r++)n.folder("encryptedAssets").file(t[r].name,t[r]);return B(n)}catch(e){return Promise.reject(e)}},encryptZip:B,decryptZip:M,connectWeb3:C,checkAndSignAuthMessage:K,createHtmlLIT:function(e){var t,n,r,o,i,a=e.title,s=e.htmlBody,c=e.css,u=e.encryptedZipDataUrl,l=e.tokenAddress,d=e.tokenId,p=e.chain,y=e.npmPackages,m=void 0===y?[]:y;try{var h="",f=(t=m,n=function(e){return Promise.resolve(function(e){try{return U[e]?Promise.resolve(U[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve(_(t)).then(function(t){return U[e]=t,t})})})}catch(e){return Promise.reject(e)}}(m[e])).then(function(e){h+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(a){try{for(;++i<t.length;)if((a=n(i))&&a.then){if(!((s=a)instanceof O&&1&s.s))return void a.then(e,o||(o=j.bind(null,r=new O,2)));a=a.v}r?j(r,1,a):r=a}catch(e){j(r||(r=new O),2,e)}var s}(),r);return Promise.resolve(f&&f.then?f.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+c+"</style>\n    "+h+'\n    <script>\n      var encryptedZipDataUrl = "'+u+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk@^1/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        if (!window.litNodeClient.ready){\n          alert('The LIT network is still connecting.  Please try again in about 10 seconds.')\n          return\n        }\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+c+"</style>\n    "+h+'\n    <script>\n      var encryptedZipDataUrl = "'+u+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk@^1/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        if (!window.litNodeClient.ready){\n          alert('The LIT network is still connecting.  Please try again in about 10 seconds.')\n          return\n        }\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(K({chain:t})).then(function(e){return e.errorCode?e:Promise.resolve(C()).then(function(o){var a=o.account,s=N[t].contractAddress,c=new r(s,I,new i(o.web3).getSigner());return console.log("sending to chain..."),function(t,r){try{var o=Promise.resolve(c.mint(n)).then(function(t){return console.log("sent to chain.  waiting to be mined..."),Promise.resolve(t.wait()).then(function(t){console.log("txReceipt: ",t);var n=t.events[0].args[3].toNumber();return{txHash:t.transactionHash,tokenId:n,tokenAddress:s,mintingAddress:a,authSig:e}})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(K({chain:window.chain})).then(function(n){n.errorCode&&"wrong_chain"===n.errorCode&&alert("You are connected to the wrong blockchain.  Please switch your metamask to "+window.chain);var r=N[window.chain].balanceStorageSlot;return Promise.resolve(L({tokenAddress:window.tokenAddress,balanceStorageSlot:r,tokenId:window.tokenId})).then(function(r){return Promise.resolve(window.litNodeClient.getEncryptionKey({tokenAddress:window.tokenAddress,tokenId:window.tokenId,authSig:n,chain:window.chain,merkleProof:r})).then(function(n){return Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(r){return Promise.resolve(r.blob()).then(function(r){return Promise.resolve(M(r,n)).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:N,LitNodeClient:function(){function e(e){void 0===e&&(e={alertWhenUnauthorized:!0,minNodeCount:8}),this.config=e,this.libp2p=null,this.connectedNodes=new Set,this.serverPubKeys={},this.ready=!1}var t=e.prototype;return t.getEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.chain,o=e.authSig,i=e.merkleProof;try{var a=this;return Promise.resolve(a.getEncryptionKeyFragments({tokenAddress:t,tokenId:n,authSig:o,chain:r,merkleProof:i})).then(function(e){if(e.some(function(e){return"AUTH_FAILURE"===e}))return a.config.alertWhenUnauthorized&&alert("You are not authorized to unlock to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),null;for(var t=JSON.parse(localStorage.getItem("lit-comms-keypair")),n=[],r=0;r<e.length;r++){var o=A(JSON.parse(e[r]),t.secretKey);n.push(o)}var i=w.combine(n);return P(k(i,"base16"))})}catch(e){return Promise.reject(e)}},t.saveEncryptionKey=function(e){var t=e.tokenAddress,r=e.tokenId,o=e.chain,i=e.authSig,a=e.symmetricKey,s=e.merkleProof;try{var c=this,u=Array.from(c.connectedNodes),l=u.length,d=Math.floor(l/2),p=P(k(a),"base16");console.debug("splitting up into "+l+" shares with a threshold of "+d);var y=w.share(p,l,d);if(y.length!==u.length)throw new Error("kFrags.length ("+y.length+") !== nodes.length ("+u.length+")");for(var m=[],h=t.toLowerCase(),f=0;f<u.length;f++){var g=u[f];console.debug("storing kFrag in node "+(f+1)+" of "+u.length);var v=n.encodeBase64(c.serverPubKeys[g]),b=JSON.stringify(E(v,y[f],"x25519-xsalsa20-poly1305"));m.push(c.storeDataWithNode({peerId:g,tokenAddress:h,tokenId:r,fragmentNumber:f,val:b,authSig:i,chain:o,merkleProof:s}))}return Promise.resolve(Promise.all(m)).then(function(e){return e.some(function(e){return"AUTH_FAILURE"===e})?(c.config.alertWhenUnauthorized&&alert("You are not authorized to publish to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),{success:!1}):(console.log("all stored"),{success:!0})})}catch(e){return Promise.reject(e)}},t.getEncryptionKeyFragments=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain,i=e.merkleProof;try{var a=this,s=t.toLowerCase(),c=D({tokenAddress:t,tokenId:n,chain:o}),u=new l(c);return Promise.resolve(T(a.libp2p.contentRouting.findProviders(u,{timeout:3e3}))).then(function(e){console.log("Found "+e.length+" providers");for(var t=[],u=0;u<e.length;u++){var l=e[u].id.toB58String();console.debug("Getting "+c+" from "+l),t.push(a.getDataFromNode({peerId:l,tokenAddress:s,tokenId:n,authSig:r,keyId:c,chain:o,merkleProof:i}))}return Promise.resolve(Promise.all(t))})}catch(e){return Promise.reject(e)}},t.storeDataWithNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.fragmentNumber,i=e.val,a=e.authSig,s=e.chain,c=e.merkleProof;try{console.debug("storing data with node "+t+" with tokenAddress "+n+" and tokenId "+r);var u=H.encode({type:H.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:k(i),fragmentNumber:k(o)},authSig:k(JSON.stringify(a)),tokenParams:{tokenAddress:k(n),tokenId:k(r.toString()),chain:k(s)},merkleProof:k(JSON.stringify(c))});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:u}))}catch(e){return Promise.reject(e)}},t.getDataFromNode=function(e){var t=e.peerId,r=e.tokenAddress,o=e.tokenId,i=e.keyId,a=e.authSig,s=e.chain,c=e.merkleProof;try{console.debug("getDataFromNode "+t+" with keyId "+i);var u=JSON.parse(localStorage.getItem("lit-comms-keypair")),l=H.encode({type:H.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:k(i)},authSig:k(JSON.stringify(a)),tokenParams:{tokenAddress:k(r),tokenId:k(o.toString()),chain:k(s)},clientPubKey:n.decodeBase64(u.publicKey),merkleProof:k(JSON.stringify(c))});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:l}))}catch(e){return Promise.reject(e)}},t.handshakeWithSgx=function(e){var t=e.peerId;try{console.debug("handshakeWithSgx "+t);var n=H.encode({type:H.Type.HANDSHAKE});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:n}))}catch(e){return Promise.reject(e)}},t.sendCommandToPeer=function(e){var t=e.peerId,r=e.data;try{var o=this,i=o.libp2p.connectionManager.get(g.createFromB58String(t));return Promise.resolve(i.newStream(["/lit/1.0.0"])).then(function(e){var i=e.stream;console.debug("sendCommandToPeer "+t);var a=null;return Promise.resolve(b([r],i,function(e){try{return console.debug("in sendCommandToPeer callback"),Promise.resolve(e.next()).then(function(e){var r=G.decode(e.value.slice());r.type===G.Type.HANDSHAKE_RESPONSE?(o.serverPubKeys[t]=r.serverPubKey,console.log("handshake success for "+t+" - got server pub key "+n.encodeBase64(r.serverPubKey)),a=!0):r.type===G.Type.STORE_KEY_FRAGMENT_RESPONSE?r.storeKeyFragmentResponse.result===q.Result.SUCCESS?(console.log("success storing key fragment"),a=!0):r.storeKeyFragmentResponse.result===q.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),a="AUTH_FAILURE"):(console.log("error storing key fragment: "),console.log(P(r.storeKeyFragmentResponse.errorMessage)),a=!1):r.type===G.Type.GET_KEY_FRAGMENT_RESPONSE?r.getKeyFragmentResponse.result===J.Result.SUCCESS?(console.log("success getting key fragment"),a=P(r.getKeyFragmentResponse.fragmentValue)):r.getKeyFragmentResponse.result===J.Result.NOT_FOUND?(console.log("key fragment not found"),a=!1):r.getKeyFragmentResponse.result===J.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),a="AUTH_FAILURE"):(console.log("unknown error getting key fragment"),a=!1):console.log("unknown response type")})}catch(e){return Promise.reject(e)}})).then(function(){return a})})}catch(e){return Promise.reject(e)}},t.connect=function(){try{var e,t=this;return Promise.resolve(d.create({modules:{transport:[p,y],connEncryption:[m],streamMuxer:[h],dht:f,peerDiscovery:[v]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[v.tag]={enabled:!0,list:["/dns4/node1.litgateway.com/tcp/9090/https/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{var n=e.remotePeer.toB58String();return console.debug("Connected to "+n),t.connectedNodes.has(n)||(t.connectedNodes.add(n),setTimeout(function(){try{return Promise.resolve(t.handshakeWithSgx({peerId:n})).then(function(){})}catch(e){return Promise.reject(e)}},1e3)),Promise.resolve()}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){var n=e.remotePeer.toB58String();console.debug("Disconnected from "+n),t.connectedNodes.delete(n)}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())});var e=window.setInterval(function(){Array.from(t.connectedNodes).length>=t.config.minNodeCount&&(clearInterval(e),t.ready=!0,console.debug("lit is ready"),document.dispatchEvent(new Event("lit-ready")))},1e3);window.libp2p=t.libp2p,window.PeerId=g})})}catch(e){return Promise.reject(e)}},e}(),protobufs:x,kFragKey:D,encryptWithPubKey:E,decryptWithPrivKey:A,fileToDataUrl:_,getMerkleProof:L};export default Y;
//# sourceMappingURL=index.esm.js.map
