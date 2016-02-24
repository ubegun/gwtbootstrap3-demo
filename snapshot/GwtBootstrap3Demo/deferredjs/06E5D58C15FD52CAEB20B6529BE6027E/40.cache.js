$wnd.GwtBootstrap3Demo.runAsyncCallback40("function ARc(){}\nfunction ERc(){}\nfunction GRc(){}\nfunction HRc(){HRc=uhb;DRc=new GRc}\nfunction Hvc(a){Fyb.call(this,a);Gvc(this)}\nfunction zRc(){HJb.call(this);FJb(this,BRc(new CRc))}\nfunction tRc(a,b,c){TIb();pJb.call(this,a,b,c,(bwc(),awc))}\nfunction CRc(){this.a=(new ERc,HRc(),DRc);FRc(this.a)}\nfunction dWc(a){var b;if(!a.M){b=new zRc(new ARc);a.M=b}return a.M}\nfunction cWc(a){var b;if(!a.L){b=new tRc(sIb(WJb(a.a)),dWc(a),bWc(a));LIb((ZJb(a.a),b),jKb(ZJb(a.a)));a.L=b}return a.L}\nfunction FRc(a){if(!a.a){a.a=true;nx((BD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction BRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new r5b;N$b(a,(b=new e1b(XJd),N$b(b,(c=new X3b,c.a='Offline',W3b(c),c)),N$b(b,(d=new T_b,N$b(d,(e=new S1b((Sdc(),Pdc)),zlb(e.eb,'GPBYFDEFM',true),Vvc(e.b,aQd),O$b(e,e.b,0),e)),N$b(d,new Pvc((j=new _Pb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new sjb(j.a)).a)),N$b(d,(f=new f0c,g5b(f,(k=new _Pb,k.a+=bQd,new sjb(k.a)).a),zlb(f.eb,aKd,true),f)),N$b(d,new Pvc((l=new _Pb,l.a+=cQd,new sjb(l.a)).a)),N$b(d,(g=new f0c,g5b(g,(m=new _Pb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new sjb(m.a)).a),zlb(g.eb,aKd,true),g)),zlb(d.eb,'GPBYFDEEM',true),d)),N$b(b,(h=new i4b,N$b(h,(n=new x4b,N$b(n,(o=new S1b(Odc),Vvc(o.b,'What is Offline?'),O$b(o,o.b,0),o)),n)),N$b(h,(p=new k4b,N$b(p,new Hvc((q=new _Pb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new sjb(q.a)).a)),p)),N$b(h,new u4b),h)),N$b(b,(i=new i4b,N$b(i,(r=new x4b,N$b(r,(s=new S1b(Odc),Vvc(s.b,'How to configure?'),O$b(s,s.b,0),s)),r)),N$b(i,(t=new k4b,N$b(t,new Pvc((u=new _Pb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new sjb(u.a)).a)),N$b(t,(v=new f0c,g5b(v,(w=new _Pb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new sjb(w.a)).a),zlb(v.eb,aKd,true),v)),N$b(t,new Pvc((A=new _Pb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new sjb(A.a)).a)),N$b(t,(B=new f0c,g5b(B,(C=new _Pb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new sjb(C.a)).a),zlb(B.eb,aKd,true),B)),N$b(t,new Pvc((D=new _Pb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new sjb(D.a)).a)),N$b(t,(F=new f0c,g5b(F,(G=new _Pb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new sjb(G.a)).a),zlb(F.eb,aKd,true),F)),t)),N$b(i,new u4b),i)),b));return a}\nthb(406,228,NGd,Hvc);thb(967,44,ZGd,tRc);var l6=pOb(OJd,'OfflinePresenter',967);thb(1202,48,$Gd,zRc);var q6=pOb(OJd,'OfflineView',1202);thb(1475,1,{},ARc);var p6=pOb(OJd,'OfflineView_BinderImpl',1475);thb(1476,1,{},CRc);var m6=pOb(OJd,'OfflineView_BinderImpl/Widgets',1476);thb(1819,1,{},ERc);var DRc;var o6=pOb(OJd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1819);thb(1820,1,{},GRc);_.a=false;var n6=pOb(OJd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1820);thb(891,1,kJd);_.Sb=function BWc(){CLb(this.b,cWc(this.a.a))};wEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")