/* IPN UK shared code: post helpers, generated cover images, article text */
(function(){
var P=window.POSTS.map(function(r){return{id:r[0],t:r[1],c:r[2],im:r[3],d:r[4],g:r[5],s:r[6],pb:r[7],p:r[8],ge:r[9],a:r[10],sc:r[11],sec:r[12],sq:r[13],o:r[14]}});
var BY={};P.forEach(function(p){BY[p.id]=p});
function rng(seed){var s=seed>>>0||1;return function(){s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var ICON={Games:"M6 12h4M8 10v4M15 11h.01M18 13h.01M5 7h14a3 3 0 013 3v4a3 3 0 01-5.2 2L15 14H9l-1.8 2A3 3 0 012 14v-4a3 3 0 013-3z",
News:"M4 5h13v14H6a2 2 0 01-2-2zM17 9h3v8a2 2 0 01-2 2M7 9h7M7 13h7",
Reviews:"M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
Guides:"M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM8 7h7M8 11h7",
Video:"M3 6h12a2 2 0 012 2v8a2 2 0 01-2 2H3zM17 10l4-2v8l-4-2",
PC:"M3 4h18v12H3zM8 20h8M12 16v4",Tech:"M7 7h10v10H7zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"};
var DEF="M12 3l9 5v8l-9 5-9-5V8z";
function cover(p,w,h){
  w=w||640;h=h||360;var r=rng(p.id*2654435761),h1=Math.floor(r()*360),h2=(h1+40+Math.floor(r()*80))%360,o="";
  for(var i=0;i<7;i++){var x=r()*w,y=r()*h,s=40+r()*h*.7,a=.07+r()*.16;
    o+=r()<.5?'<circle cx="'+x.toFixed(0)+'" cy="'+y.toFixed(0)+'" r="'+s.toFixed(0)+'" fill="#fff" fill-opacity="'+a.toFixed(2)+'"/>'
    :'<path d="M'+x.toFixed(0)+' '+(y-s).toFixed(0)+'L'+(x+s).toFixed(0)+' '+(y+s*.6).toFixed(0)+'L'+(x-s).toFixed(0)+' '+(y+s*.6).toFixed(0)+'Z" fill="#000" fill-opacity="'+(a*.9).toFixed(2)+'"/>'}
  var ic=ICON[p.c]||DEF,sc=h/360*5;
  var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl('+h1+' 70% 42%)"/><stop offset="1" stop-color="hsl('+h2+' 75% 18%)"/></linearGradient></defs><rect width="'+w+'" height="'+h+'" fill="url(#g)"/>'+o
   +'<g transform="translate('+(w/2-12*sc)+' '+(h/2-12*sc-h*.06)+') scale('+sc+')" fill="none" stroke="#fff" stroke-opacity=".92" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="'+ic+'"/></g>'
   +'<text x="'+w/2+'" y="'+(h*.82)+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="'+(h*.075)+'" letter-spacing="3" fill="#fff" fill-opacity=".9">'+esc(p.c.toUpperCase())+'</text></svg>';
  return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}
function img(p,w,h){return p.im?(window.IMGS&&window.IMGS[p.im]||p.im):cover(p,w,h)}
function fmtDate(d){var x=new Date(d+"T12:00:00Z");return x.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}
function card(p){return'<a class="card'+(p.sq?" sq":"")+'" href="#/post/'+p.id+'"><img src="'+esc(img(p))+'" alt="'+esc(p.t)+'" loading="lazy" width="640" height="360"><span class="tag">'+esc(p.c)+'</span><h3>'+esc(p.t)+'</h3></a>'}
/* ---------- article text, built from the post's own data ---------- */
function pick(r,a){return a[Math.floor(r()*a.length)]}
function article(p){
  var r=rng(p.id*7919+13),g=p.g,s=p.s,pl=p.p,ge=p.ge,out=[],hd=[],T=p.t;
  var rel=fmtDate(p.d);
  if(p.o){ /* original headlines: no invented facts about real titles */
    out.push(["",pick(r,["<strong>"+esc(T)+"</strong> is one of the stories our team is following closely this week, and here is what you need to know.","Our team has been tracking this one closely. Here is a full breakdown of <strong>"+esc(T)+"</strong>, with the key points in one place."])]);
    out.push(["What happened",pick(r,["The story has been building over the past few days, and it has already prompted plenty of discussion across the community. The headline details are covered above, and we have gathered the main talking points below.","Reaction has been quick, with players, creators and industry watchers all weighing in. We have pulled together the context so you can see how this fits into the bigger picture."])]);
    out.push(["Why it matters",pick(r,["Stories like this shape what players look forward to next, and they often signal where a franchise, a platform or a studio is heading. It is worth paying attention to how things develop from here.","This is the kind of development that tends to ripple outwards, from release plans to how fans talk about the series. We will keep an eye on how it plays out."])]);
    out.push(["What happens next","We will update this article as new details are confirmed. In the meantime, browse the related stories below, or check the latest headlines on the IPN UK home page."]);
    return{blocks:out,facts:[["Topic",T],["Category",p.c],["Published",rel],["Author",p.a]]};
  }
  var c=p.c,hook;
  var scoreWord=["","","","","","Disappointing","Mediocre","Good","Great","Excellent","Masterpiece"];
  if(c=="Reviews"){
    out.push(["",esc(g)+" is a "+esc(ge)+" from "+esc(s)+", and after a good number of hours with it on "+esc(pl)+" we are ready to give our verdict. We scored it <strong>"+p.sc+"/10 – "+scoreWord[p.sc]+"</strong>."]);
    out.push(["The verdict",pick(r,["It does a lot right and a few things wrong, and the balance tips firmly in its favour. If the genre appeals, there is plenty here to enjoy.","The ambition is easy to admire, even when the execution wobbles. It is a game with a clear identity and the confidence to stick to it."])]);
    out.push(["Gameplay",pick(r,["Moment-to-moment play is the strongest part of the package. Controls are responsive, systems are easy to learn and the difficulty curve is kind without being toothless.","The core loop is built around meaningful choices, and it keeps offering new ways to approach each encounter. Later sections add twists that keep things fresh."])]);
    out.push(["Presentation",pick(r,["Visuals are confident and consistent, with a strong art direction that carries it through the rougher technical moments. The soundtrack is a quiet highlight.","On "+esc(pl)+" it runs smoothly for the most part, with only occasional dips. The sound design and music do a lot of heavy lifting for atmosphere."])]);
    out.push(["Should you play it?",p.sc>=8?"Yes. It is easy to recommend, and fans of "+esc(ge)+"s should not wait.":p.sc>=7?"If you enjoy "+esc(ge)+"s, it is a good pick, though it may be worth waiting for a sale.":"It has moments of promise, but it is a harder sell until a few issues are patched."]);
  }else if(c=="Guides"){
    out.push(["",esc(T)+" – this guide gathers everything you need for <strong>"+esc(g)+"</strong> on "+esc(pl)+" in one place, written by the IPN UK team."]);
    out.push(["Quick tips",pick(r,["Take your time with the early hours, since the systems you learn first are the ones that matter most later. Explore every side path before pushing the main story.","Experiment with different approaches early. "+esc(g)+" rewards players who mix up their tactics rather than relying on a single strategy."])]);
    out.push(["Step by step","Follow these steps in order: 1) finish the opening tutorial, 2) unlock the main hub and talk to everyone, 3) upgrade your core gear before taking on the first major challenge, 4) return to earlier areas once you have new abilities."]);
    out.push(["Common mistakes","Do not rush ahead without upgrading, do not ignore the settings menu, and do not skip optional encounters, as they often hold the best rewards."]);
    out.push(["Where to go next","Once you finish, check our related guides below for builds, collectibles and settings advice for "+esc(g)+"."]);
  }else if(c=="Video"){
    out.push(["","Watch the latest video for <strong>"+esc(g)+"</strong>, the new "+esc(ge)+" from "+esc(s)+", coming to "+esc(pl)+"."]);
    out.push(["What you will see",pick(r,["The footage shows off the world, the combat and a first look at several new characters, set to a stirring original score.","This showcase runs through core mechanics, environments and some of the surprises waiting for players at launch."])]);
    out.push(["Details from the developer","The team at "+esc(s)+" says the video reflects work in progress and that final visuals may change before release. Publisher "+esc(p.pb)+" has said more information will follow in the coming weeks."]);
  }else if(c=="Previews"){
    out.push(["","We have spent several hours with <strong>"+esc(g)+"</strong>, the upcoming "+esc(ge)+" from "+esc(s)+", and here are our first impressions."]);
    out.push(["What we played",pick(r,["Our build covered the opening chapters and a slice of the mid-game, giving a good sense of how the systems fit together.","The preview session focused on the first few hours, including the tutorial, two major encounters and a look at progression."])]);
    out.push(["Impressions",pick(r,["Combat and movement feel great already, and the structure encourages curiosity. A few rough edges remain, but the foundation is strong.","It is easy to see the appeal. Pacing is confident, the tone is distinct, and we left wanting more."])]);
    out.push(["Outlook","We are looking forward to the full release on "+esc(pl)+" and will bring you a complete review when it launches."]);
  }else{
    var ver=pick(r,["announced","confirmed","revealed","detailed"]);
    out.push(["",esc(s)+" has "+ver+" new details about <strong>"+esc(g)+"</strong>, the "+esc(ge)+" arriving on "+esc(pl)+". Here is everything we know."]);
    out.push(["The details",pick(r,["According to the announcement, the project has been in development for several years and has grown well beyond its original scope. The team says it wants to deliver something players will return to for a long time.","The reveal included new information about features, content and the plans for post-launch support. "+esc(p.pb)+" is handling publishing duties."])]);
    out.push(["Platforms and release","It is coming to "+esc(pl)+". An exact date is listed in the facts box, and the developer says it may be refined closer to launch."]);
    out.push(["What the developers say",pick(r,["“We wanted to make something that feels fresh but familiar, and the response so far has been incredible,” a spokesperson for "+esc(s)+" said.","“Our community has shaped this game from the very start, and we cannot wait for everyone to play it,” a member of the team said."])]);
    out.push(["Our take","It is early days, but this is one to watch. We will update this article as more information comes in."]);
  }
  var facts=[["Game",g],["Developer",s],["Publisher",p.pb],["Platforms",pl],["Genre",ge],["Published",rel]];
  if(p.sc)facts.push(["Our score",p.sc+"/10"]);
  facts.push(["Author",p.a]);
  return{blocks:out,facts:facts};
}
function related(p,n){var o=[],i=p.id,tries=0,r=rng(p.id*31+7);
  while(o.length<n&&tries++<400){var q=P[Math.floor(r()*P.length)];if(q.id!==p.id&&(q.c===p.c||tries>200)&&o.indexOf(q)<0)o.push(q)}return o}
window.IPN={posts:P,by:BY,cover:cover,img:img,card:card,esc:esc,article:article,related:related,fmtDate:fmtDate};
})();
