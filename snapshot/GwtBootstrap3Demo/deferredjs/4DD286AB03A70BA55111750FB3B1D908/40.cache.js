$wnd.GwtBootstrap3Demo.runAsyncCallback40("function dKc(){}\nfunction hKc(){}\nfunction jKc(){}\nfunction kKc(){kKc=jbb;gKc=new jKc}\nfunction Jpc(a){Isb.call(this,a);Ipc(this)}\nfunction cKc(){ZDb.call(this);XDb(this,eKc(new fKc))}\nfunction YJc(a,b,c){jDb();HDb.call(this,a,b,c,(cqc(),bqc))}\nfunction fKc(){this.a=(new hKc,kKc(),gKc);iKc(this.a)}\nfunction jOc(a){var b;if(!a.M){b=new cKc(new dKc);a.M=b}return a.M}\nfunction iOc(a){var b;if(!a.L){b=new YJc(KCb(mEb(a.a)),jOc(a),hOc(a));bDb((pEb(a.a),b),BEb(pEb(a.a)));a.L=b}return a.L}\nfunction iKc(a){if(!a.a){a.a=true;Vu((OA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction eKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new y_b;aVb(a,(b=new sXb(Wrd),aVb(b,(c=new k$b,c.a='Offline',j$b(c),c)),aVb(b,(d=new fWb,aVb(d,(e=new eYb((n8b(),k8b)),qfb((Pmb(),e.eb),'GPBYFDECM',true),Wpc(e.b,Zxd),bVb(e,e.b,0),e)),aVb(d,new Qpc((j=new pKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new hdb(j.a)).a)),aVb(d,(f=new lUc,n_b(f,(k=new pKb,k.a+=$xd,new hdb(k.a)).a),qfb(f.eb,_rd,true),f)),aVb(d,new Qpc((l=new pKb,l.a+=_xd,new hdb(l.a)).a)),aVb(d,(g=new lUc,n_b(g,(m=new pKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new hdb(m.a)).a),qfb(g.eb,_rd,true),g)),qfb(d.eb,'GPBYFDEBM',true),d)),aVb(b,(h=new x$b,aVb(h,(n=new M$b,aVb(n,(o=new eYb(j8b),Wpc(o.b,'What is Offline?'),bVb(o,o.b,0),o)),n)),aVb(h,(p=new z$b,aVb(p,new Jpc((q=new pKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new hdb(q.a)).a)),p)),aVb(h,new J$b),h)),aVb(b,(i=new x$b,aVb(i,(r=new M$b,aVb(r,(s=new eYb(j8b),Wpc(s.b,'How to configure?'),bVb(s,s.b,0),s)),r)),aVb(i,(t=new z$b,aVb(t,new Qpc((u=new pKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new hdb(u.a)).a)),aVb(t,(v=new lUc,n_b(v,(w=new pKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new hdb(w.a)).a),qfb(v.eb,_rd,true),v)),aVb(t,new Qpc((A=new pKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new hdb(A.a)).a)),aVb(t,(B=new lUc,n_b(B,(C=new pKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new hdb(C.a)).a),qfb(B.eb,_rd,true),B)),aVb(t,new Qpc((D=new pKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new hdb(D.a)).a)),aVb(t,(F=new lUc,n_b(F,(G=new pKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new hdb(G.a)).a),qfb(F.eb,_rd,true),F)),t)),aVb(i,new J$b),i)),b));return a}\nibb(398,226,gqd,Jpc);ibb(917,48,Qod,YJc);var Y1=GIb(Jrd,'OfflinePresenter',917);ibb(1155,51,Rod,cKc);var b2=GIb(Jrd,'OfflineView',1155);ibb(1390,1,{},dKc);var a2=GIb(Jrd,'OfflineView_BinderImpl',1390);ibb(1391,1,{},fKc);var Z1=GIb(Jrd,'OfflineView_BinderImpl/Widgets',1391);ibb(1723,1,{},hKc);var gKc;var _1=GIb(Jrd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1723);ibb(1724,1,{},jKc);_.a=false;var $1=GIb(Jrd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1724);ibb(841,1,erd);_.Sb=function HOc(){UFb(this.b,iOc(this.a.a))};vmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")