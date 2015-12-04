$wnd.GwtBootstrap3Demo.runAsyncCallback40("function rKc(){}\nfunction vKc(){}\nfunction xKc(){}\nfunction yKc(){yKc=Kbb;uKc=new xKc}\nfunction Xpc(a){dtb.call(this,a);Wpc(this)}\nfunction qKc(){mEb.call(this);kEb(this,sKc(new tKc))}\nfunction kKc(a,b,c){yDb();WDb.call(this,a,b,c,(qqc(),pqc))}\nfunction tKc(){this.a=(new vKc,yKc(),uKc);wKc(this.a)}\nfunction xOc(a){var b;if(!a.M){b=new qKc(new rKc);a.M=b}return a.M}\nfunction wOc(a){var b;if(!a.L){b=new kKc(ZCb(BEb(a.a)),xOc(a),vOc(a));qDb((EEb(a.a),b),QEb(EEb(a.a)));a.L=b}return a.L}\nfunction wKc(a){if(!a.a){a.a=true;Vu((_A(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction sKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new M_b;pVb(a,(b=new GXb(isd),pVb(b,(c=new y$b,c.a='Offline',x$b(c),c)),pVb(b,(d=new tWb,pVb(d,(e=new sYb((B8b(),y8b)),Nfb((knb(),e.eb),'GPBYFDECM',true),iqc(e.b,kyd),qVb(e,e.b,0),e)),pVb(d,new cqc((j=new EKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Edb(j.a)).a)),pVb(d,(f=new zUc,B_b(f,(k=new EKb,k.a+=lyd,new Edb(k.a)).a),Nfb(f.eb,nsd,true),f)),pVb(d,new cqc((l=new EKb,l.a+=myd,new Edb(l.a)).a)),pVb(d,(g=new zUc,B_b(g,(m=new EKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Edb(m.a)).a),Nfb(g.eb,nsd,true),g)),Nfb(d.eb,'GPBYFDEBM',true),d)),pVb(b,(h=new L$b,pVb(h,(n=new $$b,pVb(n,(o=new sYb(x8b),iqc(o.b,'What is Offline?'),qVb(o,o.b,0),o)),n)),pVb(h,(p=new N$b,pVb(p,new Xpc((q=new EKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Edb(q.a)).a)),p)),pVb(h,new X$b),h)),pVb(b,(i=new L$b,pVb(i,(r=new $$b,pVb(r,(s=new sYb(x8b),iqc(s.b,'How to configure?'),qVb(s,s.b,0),s)),r)),pVb(i,(t=new N$b,pVb(t,new cqc((u=new EKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Edb(u.a)).a)),pVb(t,(v=new zUc,B_b(v,(w=new EKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Edb(w.a)).a),Nfb(v.eb,nsd,true),v)),pVb(t,new cqc((A=new EKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Edb(A.a)).a)),pVb(t,(B=new zUc,B_b(B,(C=new EKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Edb(C.a)).a),Nfb(B.eb,nsd,true),B)),pVb(t,new cqc((D=new EKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Edb(D.a)).a)),pVb(t,(F=new zUc,B_b(F,(G=new EKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Edb(G.a)).a),Nfb(F.eb,nsd,true),F)),t)),pVb(i,new X$b),i)),b));return a}\nJbb(398,226,uqd,Xpc);Jbb(918,48,cpd,kKc);var x2=VIb(Xrd,'OfflinePresenter',918);Jbb(1156,51,dpd,qKc);var C2=VIb(Xrd,'OfflineView',1156);Jbb(1391,1,{},rKc);var B2=VIb(Xrd,'OfflineView_BinderImpl',1391);Jbb(1392,1,{},tKc);var y2=VIb(Xrd,'OfflineView_BinderImpl/Widgets',1392);Jbb(1725,1,{},vKc);var uKc;var A2=VIb(Xrd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1725);Jbb(1726,1,{},xKc);_.a=false;var z2=VIb(Xrd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1726);Jbb(842,1,srd);_.Sb=function VOc(){hGb(this.b,wOc(this.a.a))};Jmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")