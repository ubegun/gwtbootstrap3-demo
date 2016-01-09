$wnd.GwtBootstrap3Demo.runAsyncCallback40("function BNc(){}\nfunction FNc(){}\nfunction HNc(){}\nfunction INc(){INc=keb;ENc=new HNc}\nfunction Qsc(a){Evb.call(this,a);Psc(this)}\nfunction ANc(){PGb.call(this);NGb(this,CNc(new DNc))}\nfunction uNc(a,b,c){_Fb();xGb.call(this,a,b,c,(ktc(),jtc))}\nfunction DNc(){this.a=(new FNc,INc(),ENc);GNc(this.a)}\nfunction cSc(a){var b;if(!a.M){b=new ANc(new BNc);a.M=b}return a.M}\nfunction bSc(a){var b;if(!a.L){b=new uNc(AFb(cHb(a.a)),cSc(a),aSc(a));TFb((fHb(a.a),b),rHb(fHb(a.a)));a.L=b}return a.L}\nfunction GNc(a){if(!a.a){a.a=true;bv((CB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction CNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new B2b;WXb(a,(b=new n$b(VAd),WXb(b,(c=new f1b,c.a='Offline',e1b(c),c)),WXb(b,(d=new aZb,WXb(d,(e=new _$b((_ac(),Yac)),nib((Jpb(),e.eb),'GPBYFDECM',true),ctc(e.b,dHd),XXb(e,e.b,0),e)),WXb(d,new Ysc((j=new hNb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new egb(j.a)).a)),WXb(d,(f=new eYc,q2b(f,(k=new hNb,k.a+=eHd,new egb(k.a)).a),nib(f.eb,$Ad,true),f)),WXb(d,new Ysc((l=new hNb,l.a+=fHd,new egb(l.a)).a)),WXb(d,(g=new eYc,q2b(g,(m=new hNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new egb(m.a)).a),nib(g.eb,$Ad,true),g)),nib(d.eb,'GPBYFDEBM',true),d)),WXb(b,(h=new s1b,WXb(h,(n=new H1b,WXb(n,(o=new _$b(Xac),ctc(o.b,'What is Offline?'),XXb(o,o.b,0),o)),n)),WXb(h,(p=new u1b,WXb(p,new Qsc((q=new hNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new egb(q.a)).a)),p)),WXb(h,new E1b),h)),WXb(b,(i=new s1b,WXb(i,(r=new H1b,WXb(r,(s=new _$b(Xac),ctc(s.b,'How to configure?'),XXb(s,s.b,0),s)),r)),WXb(i,(t=new u1b,WXb(t,new Ysc((u=new hNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new egb(u.a)).a)),WXb(t,(v=new eYc,q2b(v,(w=new hNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new egb(w.a)).a),nib(v.eb,$Ad,true),v)),WXb(t,new Ysc((A=new hNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new egb(A.a)).a)),WXb(t,(B=new eYc,q2b(B,(C=new hNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new egb(C.a)).a),nib(B.eb,$Ad,true),B)),WXb(t,new Ysc((D=new hNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new egb(D.a)).a)),WXb(t,(F=new eYc,q2b(F,(G=new hNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new egb(G.a)).a),nib(F.eb,$Ad,true),F)),t)),WXb(i,new E1b),i)),b));return a}\njeb(404,231,hzd,Qsc);jeb(962,49,Rxd,uNc);var Y3=xLb(LAd,'OfflinePresenter',962);jeb(1203,53,Sxd,ANc);var b4=xLb(LAd,'OfflineView',1203);jeb(1440,1,{},BNc);var a4=xLb(LAd,'OfflineView_BinderImpl',1440);jeb(1441,1,{},DNc);var Z3=xLb(LAd,'OfflineView_BinderImpl/Widgets',1441);jeb(1786,1,{},FNc);var ENc;var _3=xLb(LAd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1786);jeb(1787,1,{},HNc);_.a=false;var $3=xLb(LAd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1787);jeb(886,1,hAd);_.Sb=function ASc(){KIb(this.b,bSc(this.a.a))};mvd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
