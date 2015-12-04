$wnd.GwtBootstrap3Demo.runAsyncCallback40("function MJc(){}\nfunction QJc(){}\nfunction SJc(){}\nfunction TJc(){TJc=Rab;PJc=new SJc}\nfunction qpc(a){hsb.call(this,a);ppc(this)}\nfunction LJc(){GDb.call(this);EDb(this,NJc(new OJc))}\nfunction FJc(a,b,c){SCb();oDb.call(this,a,b,c,(Lpc(),Kpc))}\nfunction OJc(){this.a=(new QJc,TJc(),PJc);RJc(this.a)}\nfunction SNc(a){var b;if(!a.M){b=new LJc(new MJc);a.M=b}return a.M}\nfunction RNc(a){var b;if(!a.L){b=new FJc(rCb(VDb(a.a)),SNc(a),QNc(a));KCb((YDb(a.a),b),iEb(YDb(a.a)));a.L=b}return a.L}\nfunction RJc(a){if(!a.a){a.a=true;Yu((GA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction NJc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new f_b;JUb(a,(b=new _Wb(Erd),JUb(b,(c=new TZb,c.a='Offline',SZb(c),c)),JUb(b,(d=new OVb,JUb(d,(e=new NXb((W7b(),T7b)),Ueb((nmb(),e.eb),'GPBYFDECM',true),Dpc(e.b,Ixd),KUb(e,e.b,0),e)),JUb(d,new xpc((j=new YJb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Lcb(j.a)).a)),JUb(d,(f=new UTc,W$b(f,(k=new YJb,k.a+=Jxd,new Lcb(k.a)).a),Ueb(f.eb,Jrd,true),f)),JUb(d,new xpc((l=new YJb,l.a+=Kxd,new Lcb(l.a)).a)),JUb(d,(g=new UTc,W$b(g,(m=new YJb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Lcb(m.a)).a),Ueb(g.eb,Jrd,true),g)),Ueb(d.eb,'GPBYFDEBM',true),d)),JUb(b,(h=new e$b,JUb(h,(n=new t$b,JUb(n,(o=new NXb(S7b),Dpc(o.b,'What is Offline?'),KUb(o,o.b,0),o)),n)),JUb(h,(p=new g$b,JUb(p,new qpc((q=new YJb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Lcb(q.a)).a)),p)),JUb(h,new q$b),h)),JUb(b,(i=new e$b,JUb(i,(r=new t$b,JUb(r,(s=new NXb(S7b),Dpc(s.b,'How to configure?'),KUb(s,s.b,0),s)),r)),JUb(i,(t=new g$b,JUb(t,new xpc((u=new YJb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Lcb(u.a)).a)),JUb(t,(v=new UTc,W$b(v,(w=new YJb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Lcb(w.a)).a),Ueb(v.eb,Jrd,true),v)),JUb(t,new xpc((A=new YJb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Lcb(A.a)).a)),JUb(t,(B=new UTc,W$b(B,(C=new YJb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Lcb(C.a)).a),Ueb(B.eb,Jrd,true),B)),JUb(t,new xpc((D=new YJb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Lcb(D.a)).a)),JUb(t,(F=new UTc,W$b(F,(G=new YJb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Lcb(G.a)).a),Ueb(F.eb,Jrd,true),F)),t)),JUb(i,new q$b),i)),b));return a}\nQab(397,226,Qpd,qpc);Qab(918,48,yod,FJc);var E1=nIb(rrd,'OfflinePresenter',918);Qab(1156,51,zod,LJc);var J1=nIb(rrd,'OfflineView',1156);Qab(1389,1,{},MJc);var I1=nIb(rrd,'OfflineView_BinderImpl',1389);Qab(1390,1,{},OJc);var F1=nIb(rrd,'OfflineView_BinderImpl/Widgets',1390);Qab(1722,1,{},QJc);var PJc;var H1=nIb(rrd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1722);Qab(1723,1,{},SJc);_.a=false;var G1=nIb(rrd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1723);Qab(842,1,Oqd);_.Sb=function oOc(){BFb(this.b,RNc(this.a.a))};cmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")