$wnd.GwtBootstrap3Demo.runAsyncCallback40("function jSc(){}\nfunction nSc(){}\nfunction pSc(){}\nfunction qSc(){qSc=Ihb;mSc=new pSc}\nfunction qwc(a){bzb.call(this,a);pwc(this)}\nfunction iSc(){mKb.call(this);kKb(this,kSc(new lSc))}\nfunction cSc(a,b,c){yJb();WJb.call(this,a,b,c,(Mwc(),Lwc))}\nfunction lSc(){this.a=(new nSc,qSc(),mSc);oSc(this.a)}\nfunction OWc(a){var b;if(!a.M){b=new iSc(new jSc);a.M=b}return a.M}\nfunction NWc(a){var b;if(!a.L){b=new cSc(ZIb(BKb(a.a)),OWc(a),MWc(a));qJb((EKb(a.a),b),QKb(EKb(a.a)));a.L=b}return a.L}\nfunction oSc(a){if(!a.a){a.a=true;dx((ED(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction kSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new a6b;t_b(a,(b=new O1b(RKd),t_b(b,(c=new G4b,c.a='Offline',F4b(c),c)),t_b(b,(d=new B0b,t_b(d,(e=new A2b((Bec(),yec)),Mlb((gtb(),e.eb),'GPBYFDEFM',true),Ewc(e.b,UQd),u_b(e,e.b,0),e)),t_b(d,new ywc((j=new GQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Cjb(j.a)).a)),t_b(d,(f=new Q0c,R5b(f,(k=new GQb,k.a+=VQd,new Cjb(k.a)).a),Mlb(f.eb,WKd,true),f)),t_b(d,new ywc((l=new GQb,l.a+=WQd,new Cjb(l.a)).a)),t_b(d,(g=new Q0c,R5b(g,(m=new GQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Cjb(m.a)).a),Mlb(g.eb,WKd,true),g)),Mlb(d.eb,'GPBYFDEEM',true),d)),t_b(b,(h=new T4b,t_b(h,(n=new g5b,t_b(n,(o=new A2b(xec),Ewc(o.b,'What is Offline?'),u_b(o,o.b,0),o)),n)),t_b(h,(p=new V4b,t_b(p,new qwc((q=new GQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Cjb(q.a)).a)),p)),t_b(h,new d5b),h)),t_b(b,(i=new T4b,t_b(i,(r=new g5b,t_b(r,(s=new A2b(xec),Ewc(s.b,'How to configure?'),u_b(s,s.b,0),s)),r)),t_b(i,(t=new V4b,t_b(t,new ywc((u=new GQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Cjb(u.a)).a)),t_b(t,(v=new Q0c,R5b(v,(w=new GQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Cjb(w.a)).a),Mlb(v.eb,WKd,true),v)),t_b(t,new ywc((A=new GQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Cjb(A.a)).a)),t_b(t,(B=new Q0c,R5b(B,(C=new GQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Cjb(C.a)).a),Mlb(B.eb,WKd,true),B)),t_b(t,new ywc((D=new GQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Cjb(D.a)).a)),t_b(t,(F=new Q0c,R5b(F,(G=new GQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Cjb(G.a)).a),Mlb(F.eb,WKd,true),F)),t)),t_b(i,new d5b),i)),b));return a}\nHhb(405,228,GHd,qwc);Hhb(967,44,THd,cSc);var z6=WOb(IKd,'OfflinePresenter',967);Hhb(1202,48,UHd,iSc);var E6=WOb(IKd,'OfflineView',1202);Hhb(1472,1,{},jSc);var D6=WOb(IKd,'OfflineView_BinderImpl',1472);Hhb(1473,1,{},lSc);var A6=WOb(IKd,'OfflineView_BinderImpl/Widgets',1473);Hhb(1817,1,{},nSc);var mSc;var C6=WOb(IKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1817);Hhb(1818,1,{},pSc);_.a=false;var B6=WOb(IKd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1818);Hhb(891,1,eKd);_.Sb=function kXc(){hMb(this.b,NWc(this.a.a))};oFd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")