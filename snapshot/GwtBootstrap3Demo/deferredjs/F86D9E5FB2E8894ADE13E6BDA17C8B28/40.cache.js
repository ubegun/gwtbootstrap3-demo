$wnd.GwtBootstrap3Demo.runAsyncCallback40("function _Rc(){}\nfunction dSc(){}\nfunction fSc(){}\nfunction gSc(){gSc=vhb;cSc=new fSc}\nfunction gwc(a){Qyb.call(this,a);fwc(this)}\nfunction $Rc(){ZJb.call(this);XJb(this,aSc(new bSc))}\nfunction URc(a,b,c){jJb();HJb.call(this,a,b,c,(Cwc(),Bwc))}\nfunction bSc(){this.a=(new dSc,gSc(),cSc);eSc(this.a)}\nfunction WWc(a){var b;if(!a.M){b=new $Rc(new _Rc);a.M=b}return a.M}\nfunction VWc(a){var b;if(!a.L){b=new URc(KIb(mKb(a.a)),WWc(a),UWc(a));bJb((pKb(a.a),b),BKb(pKb(a.a)));a.L=b}return a.L}\nfunction eSc(a){if(!a.a){a.a=true;dx((pD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction aSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new P5b;e_b(a,(b=new B1b(LLd),e_b(b,(c=new t4b,c.a='Offline',s4b(c),c)),e_b(b,(d=new o0b,e_b(d,(e=new n2b((rec(),oec)),zlb((Vsb(),e.eb),'GPBYFDEFM',true),uwc(e.b,SRd),f_b(e,e.b,0),e)),e_b(d,new owc((j=new rQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new pjb(j.a)).a)),e_b(d,(f=new e1c,E5b(f,(k=new rQb,k.a+=TRd,new pjb(k.a)).a),zlb(f.eb,QLd,true),f)),e_b(d,new owc((l=new rQb,l.a+=URd,new pjb(l.a)).a)),e_b(d,(g=new e1c,E5b(g,(m=new rQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new pjb(m.a)).a),zlb(g.eb,QLd,true),g)),zlb(d.eb,'GPBYFDEEM',true),d)),e_b(b,(h=new G4b,e_b(h,(n=new V4b,e_b(n,(o=new n2b(nec),uwc(o.b,'What is Offline?'),f_b(o,o.b,0),o)),n)),e_b(h,(p=new I4b,e_b(p,new gwc((q=new rQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new pjb(q.a)).a)),p)),e_b(h,new S4b),h)),e_b(b,(i=new G4b,e_b(i,(r=new V4b,e_b(r,(s=new n2b(nec),uwc(s.b,'How to configure?'),f_b(s,s.b,0),s)),r)),e_b(i,(t=new I4b,e_b(t,new owc((u=new rQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new pjb(u.a)).a)),e_b(t,(v=new e1c,E5b(v,(w=new rQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new pjb(w.a)).a),zlb(v.eb,QLd,true),v)),e_b(t,new owc((A=new rQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new pjb(A.a)).a)),e_b(t,(B=new e1c,E5b(B,(C=new rQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new pjb(C.a)).a),zlb(B.eb,QLd,true),B)),e_b(t,new owc((D=new rQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new pjb(D.a)).a)),e_b(t,(F=new e1c,E5b(F,(G=new rQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new pjb(G.a)).a),zlb(F.eb,QLd,true),F)),t)),e_b(i,new S4b),i)),b));return a}\nuhb(405,231,xId,gwc);uhb(972,44,KId,URc);var Z5=HOb(CLd,'OfflinePresenter',972);uhb(1210,47,LId,$Rc);var c6=HOb(CLd,'OfflineView',1210);uhb(1481,1,{},_Rc);var b6=HOb(CLd,'OfflineView_BinderImpl',1481);uhb(1482,1,{},bSc);var $5=HOb(CLd,'OfflineView_BinderImpl/Widgets',1482);uhb(1831,1,{},dSc);var cSc;var a6=HOb(CLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1831);uhb(1832,1,{},fSc);_.a=false;var _5=HOb(CLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1832);uhb(894,1,YKd);_.Sb=function vXc(){ULb(this.b,VWc(this.a.a))};gGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")