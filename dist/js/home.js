document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("username"),t=document.getElementById("logout"),o=localStorage.getItem("token");o?(fetch("/api/users/me",{headers:{Authorization:`Bearer ${o}`}}).then((e=>e.json())).then((t=>{e.textContent=t.username})).catch((e=>{console.error("获取用户信息失败:",e),localStorage.removeItem("token"),window.location.href="/login.html"})),t.addEventListener("click",(e=>{e.preventDefault(),localStorage.removeItem("token"),window.location.href="/login.html"}))):window.location.href="/login.html"}));