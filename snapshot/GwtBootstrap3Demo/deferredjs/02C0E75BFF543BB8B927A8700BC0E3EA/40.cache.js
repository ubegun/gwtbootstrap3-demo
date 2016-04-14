$wnd.GwtBootstrap3Demo.runAsyncCallback40("function aTc(){}\nfunction eTc(){}\nfunction gTc(){}\nfunction hTc(){hTc=rib;dTc=new gTc}\nfunction hxc(a){Bzb.call(this,a);gxc(this)}\nfunction _Sc(){DKb.call(this);BKb(this,bTc(new cTc))}\nfunction VSc(a,b,c){PJb();lKb.call(this,a,b,c,(Dxc(),Cxc))}\nfunction cTc(){this.a=(new eTc,hTc(),dTc);fTc(this.a)}\nfunction lYc(a){var b;if(!a.M){b=new _Sc(new aTc);a.M=b}return a.M}\nfunction kYc(a){var b;if(!a.L){b=new VSc(oJb(SKb(a.a)),lYc(a),jYc(a));HJb((VKb(a.a),b),fLb(VKb(a.a)));a.L=b}return a.L}\nfunction fTc(a){if(!a.a){a.a=true;mx((PD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction bTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new p6b;J_b(a,(b=new c2b(eNd),J_b(b,(c=new V4b,c.a='Offline',U4b(c),c)),J_b(b,(d=new R0b,J_b(d,(e=new Q2b((Tec(),Qec)),wmb(e.eb,'GPBYFDEFM',true),vxc(e.b,jTd),K_b(e,e.b,0),e)),J_b(d,new pxc((j=new XQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new pkb(j.a)).a)),J_b(d,(f=new v2c,e6b(f,(k=new XQb,k.a+=kTd,new pkb(k.a)).a),wmb(f.eb,jNd,true),f)),J_b(d,new pxc((l=new XQb,l.a+=lTd,new pkb(l.a)).a)),J_b(d,(g=new v2c,e6b(g,(m=new XQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new pkb(m.a)).a),wmb(g.eb,jNd,true),g)),wmb(d.eb,'GPBYFDEEM',true),d)),J_b(b,(h=new g5b,J_b(h,(n=new v5b,J_b(n,(o=new Q2b(Pec),vxc(o.b,'What is Offline?'),K_b(o,o.b,0),o)),n)),J_b(h,(p=new i5b,J_b(p,new hxc((q=new XQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new pkb(q.a)).a)),p)),J_b(h,new s5b),h)),J_b(b,(i=new g5b,J_b(i,(r=new v5b,J_b(r,(s=new Q2b(Pec),vxc(s.b,'How to configure?'),K_b(s,s.b,0),s)),r)),J_b(i,(t=new i5b,J_b(t,new pxc((u=new XQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new pkb(u.a)).a)),J_b(t,(v=new v2c,e6b(v,(w=new XQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new pkb(w.a)).a),wmb(v.eb,jNd,true),v)),J_b(t,new pxc((A=new XQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new pkb(A.a)).a)),J_b(t,(B=new v2c,e6b(B,(C=new XQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new pkb(C.a)).a),wmb(B.eb,jNd,true),B)),J_b(t,new pxc((D=new XQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new pkb(D.a)).a)),J_b(t,(F=new v2c,e6b(F,(G=new XQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new pkb(G.a)).a),wmb(F.eb,jNd,true),F)),t)),J_b(i,new s5b),i)),b));return a}\nqib(408,232,SJd,hxc);qib(975,44,dKd,VSc);var O6=lPb(XMd,'OfflinePresenter',975);qib(1213,47,eKd,_Sc);var T6=lPb(XMd,'OfflineView',1213);qib(1491,1,{},aTc);var S6=lPb(XMd,'OfflineView_BinderImpl',1491);qib(1492,1,{},cTc);var P6=lPb(XMd,'OfflineView_BinderImpl/Widgets',1492);qib(1840,1,{},eTc);var dTc;var R6=lPb(XMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1840);qib(1841,1,{},gTc);_.a=false;var Q6=lPb(XMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1841);qib(897,1,rMd);_.Sb=function MYc(){yMb(this.b,kYc(this.a.a))};AHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
