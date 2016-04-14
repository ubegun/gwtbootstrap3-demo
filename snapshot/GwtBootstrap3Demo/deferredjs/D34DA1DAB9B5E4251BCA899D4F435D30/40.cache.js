$wnd.GwtBootstrap3Demo.runAsyncCallback40("function _Rc(){}\nfunction dSc(){}\nfunction fSc(){}\nfunction gSc(){gSc=ghb;cSc=new fSc}\nfunction gwc(a){Eyb.call(this,a);fwc(this)}\nfunction $Rc(){zJb.call(this);xJb(this,aSc(new bSc))}\nfunction URc(a,b,c){LIb();hJb.call(this,a,b,c,(Cwc(),Bwc))}\nfunction bSc(){this.a=(new dSc,gSc(),cSc);eSc(this.a)}\nfunction kXc(a){var b;if(!a.M){b=new $Rc(new _Rc);a.M=b}return a.M}\nfunction jXc(a){var b;if(!a.L){b=new URc(kIb(OJb(a.a)),kXc(a),iXc(a));DIb((RJb(a.a),b),bKb(RJb(a.a)));a.L=b}return a.L}\nfunction eSc(a){if(!a.a){a.a=true;ax((dD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction aSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new o5b;G$b(a,(b=new a1b(lMd),G$b(b,(c=new U3b,c.a='Offline',T3b(c),c)),G$b(b,(d=new P_b,G$b(d,(e=new O1b((Sdc(),Pdc)),klb((Ksb(),e.eb),'GPBYFDEFM',true),uwc(e.b,qSd),H$b(e,e.b,0),e)),G$b(d,new owc((j=new TPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ajb(j.a)).a)),G$b(d,(f=new u1c,d5b(f,(k=new TPb,k.a+=rSd,new ajb(k.a)).a),klb(f.eb,qMd,true),f)),G$b(d,new owc((l=new TPb,l.a+=sSd,new ajb(l.a)).a)),G$b(d,(g=new u1c,d5b(g,(m=new TPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ajb(m.a)).a),klb(g.eb,qMd,true),g)),klb(d.eb,'GPBYFDEEM',true),d)),G$b(b,(h=new f4b,G$b(h,(n=new u4b,G$b(n,(o=new O1b(Odc),uwc(o.b,'What is Offline?'),H$b(o,o.b,0),o)),n)),G$b(h,(p=new h4b,G$b(p,new gwc((q=new TPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ajb(q.a)).a)),p)),G$b(h,new r4b),h)),G$b(b,(i=new f4b,G$b(i,(r=new u4b,G$b(r,(s=new O1b(Odc),uwc(s.b,'How to configure?'),H$b(s,s.b,0),s)),r)),G$b(i,(t=new h4b,G$b(t,new owc((u=new TPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ajb(u.a)).a)),G$b(t,(v=new u1c,d5b(v,(w=new TPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ajb(w.a)).a),klb(v.eb,qMd,true),v)),G$b(t,new owc((A=new TPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ajb(A.a)).a)),G$b(t,(B=new u1c,d5b(B,(C=new TPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ajb(C.a)).a),klb(B.eb,qMd,true),B)),G$b(t,new owc((D=new TPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ajb(D.a)).a)),G$b(t,(F=new u1c,d5b(F,(G=new TPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ajb(G.a)).a),klb(F.eb,qMd,true),F)),t)),G$b(i,new r4b),i)),b));return a}\nfhb(408,232,aJd,gwc);fhb(977,44,lJd,URc);var D5=hOb(cMd,'OfflinePresenter',977);fhb(1215,47,mJd,$Rc);var I5=hOb(cMd,'OfflineView',1215);fhb(1492,1,{},_Rc);var H5=hOb(cMd,'OfflineView_BinderImpl',1492);fhb(1493,1,{},bSc);var E5=hOb(cMd,'OfflineView_BinderImpl/Widgets',1493);fhb(1839,1,{},dSc);var cSc;var G5=hOb(cMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1839);fhb(1840,1,{},fSc);_.a=false;var F5=hOb(cMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1840);fhb(899,1,yLd);_.Sb=function LXc(){uLb(this.b,jXc(this.a.a))};IGd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
