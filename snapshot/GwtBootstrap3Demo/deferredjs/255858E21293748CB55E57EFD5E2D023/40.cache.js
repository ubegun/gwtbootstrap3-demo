$wnd.GwtBootstrap3Demo.runAsyncCallback40("function pSc(){}\nfunction tSc(){}\nfunction vSc(){}\nfunction wSc(){wSc=fhb;sSc=new vSc}\nfunction wwc(a){Dyb.call(this,a);vwc(this)}\nfunction oSc(){PJb.call(this);NJb(this,qSc(new rSc))}\nfunction iSc(a,b,c){_Ib();xJb.call(this,a,b,c,(Swc(),Rwc))}\nfunction rSc(){this.a=(new tSc,wSc(),sSc);uSc(this.a)}\nfunction kXc(a){var b;if(!a.M){b=new oSc(new pSc);a.M=b}return a.M}\nfunction jXc(a){var b;if(!a.L){b=new iSc(AIb(cKb(a.a)),kXc(a),iXc(a));TIb((fKb(a.a),b),rKb(fKb(a.a)));a.L=b}return a.L}\nfunction uSc(a){if(!a.a){a.a=true;hx((kD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction qSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new E5b;W$b(a,(b=new q1b(_Ld),W$b(b,(c=new i4b,c.a='Offline',h4b(c),c)),W$b(b,(d=new d0b,W$b(d,(e=new c2b((gec(),dec)),jlb((Hsb(),e.eb),'GPBYFDEFM',true),Kwc(e.b,fSd),X$b(e,e.b,0),e)),W$b(d,new Ewc((j=new hQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new _ib(j.a)).a)),W$b(d,(f=new u1c,t5b(f,(k=new hQb,k.a+=gSd,new _ib(k.a)).a),jlb(f.eb,eMd,true),f)),W$b(d,new Ewc((l=new hQb,l.a+=hSd,new _ib(l.a)).a)),W$b(d,(g=new u1c,t5b(g,(m=new hQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new _ib(m.a)).a),jlb(g.eb,eMd,true),g)),jlb(d.eb,'GPBYFDEEM',true),d)),W$b(b,(h=new v4b,W$b(h,(n=new K4b,W$b(n,(o=new c2b(cec),Kwc(o.b,'What is Offline?'),X$b(o,o.b,0),o)),n)),W$b(h,(p=new x4b,W$b(p,new wwc((q=new hQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new _ib(q.a)).a)),p)),W$b(h,new H4b),h)),W$b(b,(i=new v4b,W$b(i,(r=new K4b,W$b(r,(s=new c2b(cec),Kwc(s.b,'How to configure?'),X$b(s,s.b,0),s)),r)),W$b(i,(t=new x4b,W$b(t,new Ewc((u=new hQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new _ib(u.a)).a)),W$b(t,(v=new u1c,t5b(v,(w=new hQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new _ib(w.a)).a),jlb(v.eb,eMd,true),v)),W$b(t,new Ewc((A=new hQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new _ib(A.a)).a)),W$b(t,(B=new u1c,t5b(B,(C=new hQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new _ib(C.a)).a),jlb(B.eb,eMd,true),B)),W$b(t,new Ewc((D=new hQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new _ib(D.a)).a)),W$b(t,(F=new u1c,t5b(F,(G=new hQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new _ib(G.a)).a),jlb(F.eb,eMd,true),F)),t)),W$b(i,new H4b),i)),b));return a}\nehb(405,231,PId,wwc);ehb(973,44,_Id,iSc);var J5=xOb(SLd,'OfflinePresenter',973);ehb(1211,47,aJd,oSc);var O5=xOb(SLd,'OfflineView',1211);ehb(1482,1,{},pSc);var N5=xOb(SLd,'OfflineView_BinderImpl',1482);ehb(1483,1,{},rSc);var K5=xOb(SLd,'OfflineView_BinderImpl/Widgets',1483);ehb(1830,1,{},tSc);var sSc;var M5=xOb(SLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1830);ehb(1831,1,{},vSc);_.a=false;var L5=xOb(SLd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1831);ehb(895,1,mLd);_.Sb=function LXc(){KLb(this.b,jXc(this.a.a))};wGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
