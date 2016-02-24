$wnd.GwtBootstrap3Demo.runAsyncCallback40("function oRc(){}\nfunction sRc(){}\nfunction uRc(){}\nfunction vRc(){vRc=Ngb;rRc=new uRc}\nfunction vvc(a){gyb.call(this,a);uvc(this)}\nfunction nRc(){rJb.call(this);pJb(this,pRc(new qRc))}\nfunction hRc(a,b,c){DIb();_Ib.call(this,a,b,c,(Rvc(),Qvc))}\nfunction qRc(){this.a=(new sRc,vRc(),rRc);tRc(this.a)}\nfunction TVc(a){var b;if(!a.M){b=new nRc(new oRc);a.M=b}return a.M}\nfunction SVc(a){var b;if(!a.L){b=new hRc(cIb(GJb(a.a)),TVc(a),RVc(a));vIb((JJb(a.a),b),VJb(JJb(a.a)));a.L=b}return a.L}\nfunction tRc(a){if(!a.a){a.a=true;dx((gD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction pRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new f5b;y$b(a,(b=new T0b(VJd),y$b(b,(c=new L3b,c.a='Offline',K3b(c),c)),y$b(b,(d=new G_b,y$b(d,(e=new F1b((Gdc(),Ddc)),Rkb((lsb(),e.eb),'GPBYFDEFM',true),Jvc(e.b,ZPd),z$b(e,e.b,0),e)),y$b(d,new Dvc((j=new LPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Hib(j.a)).a)),y$b(d,(f=new V_c,W4b(f,(k=new LPb,k.a+=$Pd,new Hib(k.a)).a),Rkb(f.eb,$Jd,true),f)),y$b(d,new Dvc((l=new LPb,l.a+=_Pd,new Hib(l.a)).a)),y$b(d,(g=new V_c,W4b(g,(m=new LPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Hib(m.a)).a),Rkb(g.eb,$Jd,true),g)),Rkb(d.eb,'GPBYFDEEM',true),d)),y$b(b,(h=new Y3b,y$b(h,(n=new l4b,y$b(n,(o=new F1b(Cdc),Jvc(o.b,'What is Offline?'),z$b(o,o.b,0),o)),n)),y$b(h,(p=new $3b,y$b(p,new vvc((q=new LPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Hib(q.a)).a)),p)),y$b(h,new i4b),h)),y$b(b,(i=new Y3b,y$b(i,(r=new l4b,y$b(r,(s=new F1b(Cdc),Jvc(s.b,'How to configure?'),z$b(s,s.b,0),s)),r)),y$b(i,(t=new $3b,y$b(t,new Dvc((u=new LPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Hib(u.a)).a)),y$b(t,(v=new V_c,W4b(v,(w=new LPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Hib(w.a)).a),Rkb(v.eb,$Jd,true),v)),y$b(t,new Dvc((A=new LPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Hib(A.a)).a)),y$b(t,(B=new V_c,W4b(B,(C=new LPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Hib(C.a)).a),Rkb(B.eb,$Jd,true),B)),y$b(t,new Dvc((D=new LPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Hib(D.a)).a)),y$b(t,(F=new V_c,W4b(F,(G=new LPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Hib(G.a)).a),Rkb(F.eb,$Jd,true),F)),t)),y$b(i,new i4b),i)),b));return a}\nMgb(405,228,KGd,vvc);Mgb(968,44,XGd,hRc);var E5=_Nb(MJd,'OfflinePresenter',968);Mgb(1203,48,YGd,nRc);var J5=_Nb(MJd,'OfflineView',1203);Mgb(1473,1,{},oRc);var I5=_Nb(MJd,'OfflineView_BinderImpl',1473);Mgb(1474,1,{},qRc);var F5=_Nb(MJd,'OfflineView_BinderImpl/Widgets',1474);Mgb(1816,1,{},sRc);var rRc;var H5=_Nb(MJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1816);Mgb(1817,1,{},uRc);_.a=false;var G5=_Nb(MJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1817);Mgb(892,1,iJd);_.Sb=function pWc(){mLb(this.b,SVc(this.a.a))};tEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")