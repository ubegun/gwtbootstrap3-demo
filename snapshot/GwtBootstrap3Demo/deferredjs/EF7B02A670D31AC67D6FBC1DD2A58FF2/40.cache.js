$wnd.GwtBootstrap3Demo.runAsyncCallback40("function YMc(){}\nfunction aNc(){}\nfunction cNc(){}\nfunction dNc(){dNc=Ddb;_Mc=new cNc}\nfunction lsc(a){$ub.call(this,a);ksc(this)}\nfunction XMc(){kGb.call(this);iGb(this,ZMc(new $Mc))}\nfunction RMc(a,b,c){wFb();UFb.call(this,a,b,c,(Hsc(),Gsc))}\nfunction $Mc(){this.a=(new aNc,dNc(),_Mc);bNc(this.a)}\nfunction BRc(a){var b;if(!a.M){b=new XMc(new YMc);a.M=b}return a.M}\nfunction ARc(a){var b;if(!a.L){b=new RMc(XEb(zGb(a.a)),BRc(a),zRc(a));oFb((CGb(a.a),b),OGb(CGb(a.a)));a.L=b}return a.L}\nfunction bNc(a){if(!a.a){a.a=true;fv((iB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction ZMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new Y1b;rXb(a,(b=new JZb(mBd),rXb(b,(c=new C0b,c.a='Offline',B0b(c),c)),rXb(b,(d=new wYb,rXb(d,(e=new v$b((wac(),tac)),Ghb((cpb(),e.eb),'GPBYFDECM',true),zsc(e.b,yHd),sXb(e,e.b,0),e)),rXb(d,new tsc((j=new EMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new xfb(j.a)).a)),rXb(d,(f=new DXc,N1b(f,(k=new EMb,k.a+=zHd,new xfb(k.a)).a),Ghb(f.eb,rBd,true),f)),rXb(d,new tsc((l=new EMb,l.a+=AHd,new xfb(l.a)).a)),rXb(d,(g=new DXc,N1b(g,(m=new EMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new xfb(m.a)).a),Ghb(g.eb,rBd,true),g)),Ghb(d.eb,'GPBYFDEBM',true),d)),rXb(b,(h=new P0b,rXb(h,(n=new c1b,rXb(n,(o=new v$b(sac),zsc(o.b,'What is Offline?'),sXb(o,o.b,0),o)),n)),rXb(h,(p=new R0b,rXb(p,new lsc((q=new EMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new xfb(q.a)).a)),p)),rXb(h,new _0b),h)),rXb(b,(i=new P0b,rXb(i,(r=new c1b,rXb(r,(s=new v$b(sac),zsc(s.b,'How to configure?'),sXb(s,s.b,0),s)),r)),rXb(i,(t=new R0b,rXb(t,new tsc((u=new EMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new xfb(u.a)).a)),rXb(t,(v=new DXc,N1b(v,(w=new EMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new xfb(w.a)).a),Ghb(v.eb,rBd,true),v)),rXb(t,new tsc((A=new EMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new xfb(A.a)).a)),rXb(t,(B=new DXc,N1b(B,(C=new EMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new xfb(C.a)).a),Ghb(B.eb,rBd,true),B)),rXb(t,new tsc((D=new EMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new xfb(D.a)).a)),rXb(t,(F=new DXc,N1b(F,(G=new EMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new xfb(G.a)).a),Ghb(F.eb,rBd,true),F)),t)),rXb(i,new _0b),i)),b));return a}\nCdb(405,232,Bzd,lsc);Cdb(972,49,jyd,RMc);var f3=UKb(cBd,'OfflinePresenter',972);Cdb(1213,53,kyd,XMc);var k3=UKb(cBd,'OfflineView',1213);Cdb(1450,1,{},YMc);var j3=UKb(cBd,'OfflineView_BinderImpl',1450);Cdb(1451,1,{},$Mc);var g3=UKb(cBd,'OfflineView_BinderImpl/Widgets',1451);Cdb(1795,1,{},aNc);var _Mc;var i3=UKb(cBd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1795);Cdb(1796,1,{},cNc);_.a=false;var h3=UKb(cBd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1796);Cdb(896,1,AAd);_.Sb=function ZRc(){fIb(this.b,ARc(this.a.a))};Hvd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")