$wnd.GwtBootstrap3Demo.runAsyncCallback40("function GKc(){}\nfunction KKc(){}\nfunction MKc(){}\nfunction NKc(){NKc=Mbb;JKc=new MKc}\nfunction kqc(a){jtb.call(this,a);jqc(this)}\nfunction FKc(){AEb.call(this);yEb(this,HKc(new IKc))}\nfunction zKc(a,b,c){MDb();iEb.call(this,a,b,c,(Fqc(),Eqc))}\nfunction IKc(){this.a=(new KKc,NKc(),JKc);LKc(this.a)}\nfunction MOc(a){var b;if(!a.M){b=new FKc(new GKc);a.M=b}return a.M}\nfunction LOc(a){var b;if(!a.L){b=new zKc(lDb(PEb(a.a)),MOc(a),KOc(a));EDb((SEb(a.a),b),cFb(SEb(a.a)));a.L=b}return a.L}\nfunction LKc(a){if(!a.a){a.a=true;Vu((bB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction HKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new __b;DVb(a,(b=new VXb(xsd),DVb(b,(c=new N$b,c.a='Offline',M$b(c),c)),DVb(b,(d=new IWb,DVb(d,(e=new HYb((Q8b(),N8b)),Tfb((qnb(),e.eb),'GPBYFDECM',true),xqc(e.b,yyd),EVb(e,e.b,0),e)),DVb(d,new rqc((j=new SKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Kdb(j.a)).a)),DVb(d,(f=new OUc,Q_b(f,(k=new SKb,k.a+=zyd,new Kdb(k.a)).a),Tfb(f.eb,Csd,true),f)),DVb(d,new rqc((l=new SKb,l.a+=Ayd,new Kdb(l.a)).a)),DVb(d,(g=new OUc,Q_b(g,(m=new SKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Kdb(m.a)).a),Tfb(g.eb,Csd,true),g)),Tfb(d.eb,'GPBYFDEBM',true),d)),DVb(b,(h=new $$b,DVb(h,(n=new n_b,DVb(n,(o=new HYb(M8b),xqc(o.b,'What is Offline?'),EVb(o,o.b,0),o)),n)),DVb(h,(p=new a_b,DVb(p,new kqc((q=new SKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Kdb(q.a)).a)),p)),DVb(h,new k_b),h)),DVb(b,(i=new $$b,DVb(i,(r=new n_b,DVb(r,(s=new HYb(M8b),xqc(s.b,'How to configure?'),EVb(s,s.b,0),s)),r)),DVb(i,(t=new a_b,DVb(t,new rqc((u=new SKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Kdb(u.a)).a)),DVb(t,(v=new OUc,Q_b(v,(w=new SKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Kdb(w.a)).a),Tfb(v.eb,Csd,true),v)),DVb(t,new rqc((A=new SKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Kdb(A.a)).a)),DVb(t,(B=new OUc,Q_b(B,(C=new SKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Kdb(C.a)).a),Tfb(B.eb,Csd,true),B)),DVb(t,new rqc((D=new SKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Kdb(D.a)).a)),DVb(t,(F=new OUc,Q_b(F,(G=new SKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Kdb(G.a)).a),Tfb(F.eb,Csd,true),F)),t)),DVb(i,new k_b),i)),b));return a}\nLbb(398,226,Jqd,kqc);Lbb(917,48,rpd,zKc);var z2=hJb(ksd,'OfflinePresenter',917);Lbb(1155,51,spd,FKc);var E2=hJb(ksd,'OfflineView',1155);Lbb(1390,1,{},GKc);var D2=hJb(ksd,'OfflineView_BinderImpl',1390);Lbb(1391,1,{},IKc);var A2=hJb(ksd,'OfflineView_BinderImpl/Widgets',1391);Lbb(1723,1,{},KKc);var JKc;var C2=hJb(ksd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1723);Lbb(1724,1,{},MKc);_.a=false;var B2=hJb(ksd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1724);Lbb(841,1,Hrd);_.Sb=function iPc(){vGb(this.b,LOc(this.a.a))};Ymd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")