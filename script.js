function tab(n){for(var i=1;i<3;i++){document.getElementById('p'+i).hidden=i!==n;document.getElementById('t'+i).setAttribute('aria-selected',i===n)}}
function send(){var n=document.getElementById('n').value,e=document.getElementById('e').value,m=document.getElementById('m').value;
location.href='mailto:ulfiramadini05@gmail.com?subject='+encodeURIComponent('Pesan dari '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' ('+e+')')}
(function(){
var els=document.querySelectorAll('.band,.card,.tl li,.skills h3,.tags span,.list li,.awards div,.tabs');
els.forEach(function(el){el.classList.add('rv');var p=el.parentElement,i=Array.prototype.indexOf.call(p.children,el);el.style.transitionDelay=Math.min(i,8)*70+'ms'});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
els.forEach(function(el){io.observe(el)});
var links=document.querySelectorAll('nav a');
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('header[id],section[id]').forEach(function(s){so.observe(s)});
})();
