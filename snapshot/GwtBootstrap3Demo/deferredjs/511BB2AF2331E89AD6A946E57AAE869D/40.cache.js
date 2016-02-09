$wnd.GwtBootstrap3Demo.runAsyncCallback40("function MNc(){}\nfunction QNc(){}\nfunction SNc(){}\nfunction TNc(){TNc=ueb;PNc=new SNc}\nfunction _sc(a){Ovb.call(this,a);$sc(this)}\nfunction LNc(){ZGb.call(this);XGb(this,NNc(new ONc))}\nfunction FNc(a,b,c){jGb();HGb.call(this,a,b,c,(vtc(),utc))}\nfunction ONc(){this.a=(new QNc,TNc(),PNc);RNc(this.a)}\nfunction pSc(a){var b;if(!a.M){b=new LNc(new MNc);a.M=b}return a.M}\nfunction oSc(a){var b;if(!a.L){b=new FNc(KFb(mHb(a.a)),pSc(a),nSc(a));bGb((pHb(a.a),b),BHb(pHb(a.a)));a.L=b}return a.L}\nfunction RNc(a){if(!a.a){a.a=true;bv((CB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction NNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new M2b;eYb(a,(b=new x$b(bCd),eYb(b,(c=new q1b,c.a='Offline',p1b(c),c)),eYb(b,(d=new kZb,eYb(d,(e=new j_b((kbc(),hbc)),xib((Tpb(),e.eb),'GPBYFDECM',true),ntc(e.b,mId),fYb(e,e.b,0),e)),eYb(d,new htc((j=new rNb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ogb(j.a)).a)),eYb(d,(f=new rYc,B2b(f,(k=new rNb,k.a+=nId,new ogb(k.a)).a),xib(f.eb,gCd,true),f)),eYb(d,new htc((l=new rNb,l.a+=oId,new ogb(l.a)).a)),eYb(d,(g=new rYc,B2b(g,(m=new rNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ogb(m.a)).a),xib(g.eb,gCd,true),g)),xib(d.eb,'GPBYFDEBM',true),d)),eYb(b,(h=new D1b,eYb(h,(n=new S1b,eYb(n,(o=new j_b(gbc),ntc(o.b,'What is Offline?'),fYb(o,o.b,0),o)),n)),eYb(h,(p=new F1b,eYb(p,new _sc((q=new rNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ogb(q.a)).a)),p)),eYb(h,new P1b),h)),eYb(b,(i=new D1b,eYb(i,(r=new S1b,eYb(r,(s=new j_b(gbc),ntc(s.b,'How to configure?'),fYb(s,s.b,0),s)),r)),eYb(i,(t=new F1b,eYb(t,new htc((u=new rNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ogb(u.a)).a)),eYb(t,(v=new rYc,B2b(v,(w=new rNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ogb(w.a)).a),xib(v.eb,gCd,true),v)),eYb(t,new htc((A=new rNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ogb(A.a)).a)),eYb(t,(B=new rYc,B2b(B,(C=new rNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ogb(C.a)).a),xib(B.eb,gCd,true),B)),eYb(t,new htc((D=new rNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ogb(D.a)).a)),eYb(t,(F=new rYc,B2b(F,(G=new rNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ogb(G.a)).a),xib(F.eb,gCd,true),F)),t)),eYb(i,new P1b),i)),b));return a}\nteb(405,232,qAd,_sc);teb(971,49,Zyd,FNc);var Y3=HLb(TBd,'OfflinePresenter',971);teb(1212,53,$yd,LNc);var b4=HLb(TBd,'OfflineView',1212);teb(1449,1,{},MNc);var a4=HLb(TBd,'OfflineView_BinderImpl',1449);teb(1450,1,{},ONc);var Z3=HLb(TBd,'OfflineView_BinderImpl/Widgets',1450);teb(1796,1,{},QNc);var PNc;var _3=HLb(TBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1796);teb(1797,1,{},SNc);_.a=false;var $3=HLb(TBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1797);teb(895,1,pBd);_.Sb=function NSc(){UIb(this.b,oSc(this.a.a))};vwd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")