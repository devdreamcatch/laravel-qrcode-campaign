class Tooltip{constructor(t,o){this.quill=t,this.boundsContainer=o||document.body,this.root=t.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE;let s=parseInt(window.getComputedStyle(this.root).marginTop);this.quill.root.addEventListener("scroll",()=>{this.root.style.marginTop=-1*this.quill.root.scrollTop+s+"px",this.checkBounds()}),this.hide()}checkBounds(){this.root.classList.toggle("ql-out-top",this.root.offsetTop<=0),this.root.classList.remove("ql-out-bottom"),this.root.classList.toggle("ql-out-bottom",this.root.offsetTop+this.root.offsetHeight>=this.quill.root.offsetHeight)}hide(){this.root.classList.add("ql-hidden")}position(t){let o=t.left+t.width/2-this.root.offsetWidth/2,s=t.bottom+this.quill.root.scrollTop;this.root.style.left=o+"px",this.root.style.top=s+"px";let i=this.boundsContainer.getBoundingClientRect(),e=this.root.getBoundingClientRect(),l=0;return e.right>i.right&&(l=i.right-e.right,this.root.style.left=o+l+"px"),e.left<i.left&&(l=i.left-e.left,this.root.style.left=o+l+"px"),this.checkBounds(),l}show(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}export default Tooltip;