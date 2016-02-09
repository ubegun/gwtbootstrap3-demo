$wnd.GwtBootstrap3Demo.runAsyncCallback40("function NNc(){}\nfunction RNc(){}\nfunction TNc(){}\nfunction UNc(){UNc=web;QNc=new TNc}\nfunction atc(a){Xvb.call(this,a);_sc(this)}\nfunction MNc(){$Gb.call(this);YGb(this,ONc(new PNc))}\nfunction GNc(a,b,c){kGb();IGb.call(this,a,b,c,(wtc(),vtc))}\nfunction PNc(){this.a=(new RNc,UNc(),QNc);SNc(this.a)}\nfunction qSc(a){var b;if(!a.M){b=new MNc(new NNc);a.M=b}return a.M}\nfunction pSc(a){var b;if(!a.L){b=new GNc(LFb(nHb(a.a)),qSc(a),oSc(a));cGb((qHb(a.a),b),CHb(qHb(a.a)));a.L=b}return a.L}\nfunction SNc(a){if(!a.a){a.a=true;_u((CB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction ONc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new N2b;fYb(a,(b=new y$b(cCd),fYb(b,(c=new r1b,c.a='Offline',q1b(c),c)),fYb(b,(d=new lZb,fYb(d,(e=new k_b((lbc(),ibc)),Dib((bqb(),e.eb),'GPBYFDECM',true),otc(e.b,lId),gYb(e,e.b,0),e)),fYb(d,new itc((j=new sNb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ugb(j.a)).a)),fYb(d,(f=new sYc,C2b(f,(k=new sNb,k.a+=mId,new ugb(k.a)).a),Dib(f.eb,hCd,true),f)),fYb(d,new itc((l=new sNb,l.a+=nId,new ugb(l.a)).a)),fYb(d,(g=new sYc,C2b(g,(m=new sNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ugb(m.a)).a),Dib(g.eb,hCd,true),g)),Dib(d.eb,'GPBYFDEBM',true),d)),fYb(b,(h=new E1b,fYb(h,(n=new T1b,fYb(n,(o=new k_b(hbc),otc(o.b,'What is Offline?'),gYb(o,o.b,0),o)),n)),fYb(h,(p=new G1b,fYb(p,new atc((q=new sNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ugb(q.a)).a)),p)),fYb(h,new Q1b),h)),fYb(b,(i=new E1b,fYb(i,(r=new T1b,fYb(r,(s=new k_b(hbc),otc(s.b,'How to configure?'),gYb(s,s.b,0),s)),r)),fYb(i,(t=new G1b,fYb(t,new itc((u=new sNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ugb(u.a)).a)),fYb(t,(v=new sYc,C2b(v,(w=new sNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ugb(w.a)).a),Dib(v.eb,hCd,true),v)),fYb(t,new itc((A=new sNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ugb(A.a)).a)),fYb(t,(B=new sYc,C2b(B,(C=new sNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ugb(C.a)).a),Dib(B.eb,hCd,true),B)),fYb(t,new itc((D=new sNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ugb(D.a)).a)),fYb(t,(F=new sYc,C2b(F,(G=new sNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ugb(G.a)).a),Dib(F.eb,hCd,true),F)),t)),fYb(i,new Q1b),i)),b));return a}\nveb(406,232,rAd,atc);veb(971,49,$yd,GNc);var $3=ILb(UBd,'OfflinePresenter',971);veb(1212,53,_yd,MNc);var d4=ILb(UBd,'OfflineView',1212);veb(1451,1,{},NNc);var c4=ILb(UBd,'OfflineView_BinderImpl',1451);veb(1452,1,{},PNc);var _3=ILb(UBd,'OfflineView_BinderImpl/Widgets',1452);veb(1797,1,{},RNc);var QNc;var b4=ILb(UBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1797);veb(1798,1,{},TNc);_.a=false;var a4=ILb(UBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1798);veb(895,1,qBd);_.Sb=function OSc(){VIb(this.b,pSc(this.a.a))};wwd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")