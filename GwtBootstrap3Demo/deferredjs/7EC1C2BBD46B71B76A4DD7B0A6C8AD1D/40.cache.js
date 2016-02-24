$wnd.GwtBootstrap3Demo.runAsyncCallback40("function JRc(){}\nfunction NRc(){}\nfunction PRc(){}\nfunction QRc(){QRc=hhb;MRc=new PRc}\nfunction Qvc(a){Jyb.call(this,a);Pvc(this)}\nfunction IRc(){MJb.call(this);KJb(this,KRc(new LRc))}\nfunction CRc(a,b,c){YIb();uJb.call(this,a,b,c,(kwc(),jwc))}\nfunction LRc(){this.a=(new NRc,QRc(),MRc);ORc(this.a)}\nfunction mWc(a){var b;if(!a.M){b=new IRc(new JRc);a.M=b}return a.M}\nfunction lWc(a){var b;if(!a.L){b=new CRc(xIb(_Jb(a.a)),mWc(a),kWc(a));QIb((cKb(a.a),b),oKb(cKb(a.a)));a.L=b}return a.L}\nfunction ORc(a){if(!a.a){a.a=true;bx((pD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction KRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new A5b;T$b(a,(b=new m1b(oKd),T$b(b,(c=new e4b,c.a='Offline',d4b(c),c)),T$b(b,(d=new __b,T$b(d,(e=new $1b((_dc(),Ydc)),plb((Psb(),e.eb),'GPBYFDEFM',true),cwc(e.b,rQd),U$b(e,e.b,0),e)),T$b(d,new Yvc((j=new eQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new fjb(j.a)).a)),T$b(d,(f=new o0c,p5b(f,(k=new eQb,k.a+=sQd,new fjb(k.a)).a),plb(f.eb,tKd,true),f)),T$b(d,new Yvc((l=new eQb,l.a+=tQd,new fjb(l.a)).a)),T$b(d,(g=new o0c,p5b(g,(m=new eQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new fjb(m.a)).a),plb(g.eb,tKd,true),g)),plb(d.eb,'GPBYFDEEM',true),d)),T$b(b,(h=new r4b,T$b(h,(n=new G4b,T$b(n,(o=new $1b(Xdc),cwc(o.b,'What is Offline?'),U$b(o,o.b,0),o)),n)),T$b(h,(p=new t4b,T$b(p,new Qvc((q=new eQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new fjb(q.a)).a)),p)),T$b(h,new D4b),h)),T$b(b,(i=new r4b,T$b(i,(r=new G4b,T$b(r,(s=new $1b(Xdc),cwc(s.b,'How to configure?'),U$b(s,s.b,0),s)),r)),T$b(i,(t=new t4b,T$b(t,new Yvc((u=new eQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new fjb(u.a)).a)),T$b(t,(v=new o0c,p5b(v,(w=new eQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new fjb(w.a)).a),plb(v.eb,tKd,true),v)),T$b(t,new Yvc((A=new eQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new fjb(A.a)).a)),T$b(t,(B=new o0c,p5b(B,(C=new eQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new fjb(C.a)).a),plb(B.eb,tKd,true),B)),T$b(t,new Yvc((D=new eQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new fjb(D.a)).a)),T$b(t,(F=new o0c,p5b(F,(G=new eQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new fjb(G.a)).a),plb(F.eb,tKd,true),F)),t)),T$b(i,new D4b),i)),b));return a}\nghb(406,228,eHd,Qvc);ghb(967,44,qHd,CRc);var $5=uOb(fKd,'OfflinePresenter',967);ghb(1202,48,rHd,IRc);var d6=uOb(fKd,'OfflineView',1202);ghb(1474,1,{},JRc);var c6=uOb(fKd,'OfflineView_BinderImpl',1474);ghb(1475,1,{},LRc);var _5=uOb(fKd,'OfflineView_BinderImpl/Widgets',1475);ghb(1818,1,{},NRc);var MRc;var b6=uOb(fKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1818);ghb(1819,1,{},PRc);_.a=false;var a6=uOb(fKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1819);ghb(891,1,DJd);_.Sb=function KWc(){HLb(this.b,lWc(this.a.a))};OEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")