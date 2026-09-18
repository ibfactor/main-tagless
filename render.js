const fa = document.createElement("link");
fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
fa.setAttribute("rel", "stylesheet");
document.head.appendChild(fa);

const nav = document.createElement("nav");
const nav_logo = document.createElement("div");
nav_logo.id = "logo";
const nav_logo_img = document.createElement("img");
nav_logo_img.src = "/logo.png";
const nav_logo_h1 = document.createElement("h1");
nav_logo_h1.innerText = "IBFactor";
nav_logo.appendChild(nav_logo_img);
nav_logo.appendChild(nav_logo_h1);
nav.appendChild(nav_logo);
document.body.appendChild(nav);

const main = document.createElement("main");

const profile_card = document.createElement("div");
profile_card.id = "profile_card";
const profile_card_h2 = document.createElement("h2");
profile_card_h2.appendChild(document.createElement("i"));
profile_card_h2.children[0].innerText = "Profile";
profile_card.appendChild(profile_card_h2);
const profile_card_p = document.createElement("p");
profile_card_p.innerText = "Hi there, I'm ";
const profile_card_p_u = document.createElement("u");
profile_card_p_u.innerHTML = "Ibrahim";
profile_card_p.appendChild(profile_card_p_u);
profile_card_p.innerHTML += ". ";
profile_card_p.appendChild(document.createElement("br"));
profile_card_p.appendChild(document.createElement("br"));
profile_card_p.innerHTML += "I know HTML, CSS, JavaScript (including NodeJS), PHP, and Python.";
profile_card_p.appendChild(document.createElement("br"));
profile_card_p.appendChild(document.createElement("br"));
profile_card_p.innerHTML += "I have worked on many projects over the years but below are the open-sourced ones.";
profile_card.appendChild(profile_card_p);
main.appendChild(profile_card);

const projects = document.createElement("div");

projects.id = "projects";
projects.appendChild(document.createElement("h2"));
projects.children[0].appendChild(document.createElement("i"));
projects.children[0].children[0].innerText = "My Projects";
projects.appendChild(document.createElement("div"));
projects.innerHTML += " ";
projects.appendChild(document.createElement("div"));
projects.innerHTML += " ";
projects.appendChild(document.createElement("div"));
projects.children[1].innerText = "BlepOS";
projects.children[2].innerText = "DropIt";
projects.children[3].innerText = "CoolNewTab";
projects.children[1].appendChild(document.createElement("span"));
projects.children[2].appendChild(document.createElement("span"));
projects.children[3].appendChild(document.createElement("span"));

projects.children[1].children[0].appendChild(document.createElement("a"));
projects.children[1].children[0].appendChild(document.createElement("a"));
projects.children[2].children[0].appendChild(document.createElement("a"));
projects.children[2].children[0].appendChild(document.createElement("a"));
projects.children[3].children[0].appendChild(document.createElement("a"));
projects.children[3].children[0].appendChild(document.createElement("a"));

projects.children[1].children[0].children[0].href = "https://blepos.ibfactor.com/";
projects.children[1].children[0].children[1].href = "https://github.com/ibfactor/blepos";
projects.children[2].children[0].children[0].href = "https://dropit.ibfactor.com/";
projects.children[2].children[0].children[1].href = "https://github.com/ibfactor/drop-it";
projects.children[3].children[0].children[0].href = "https://newtab.ibfactor.com/";
projects.children[3].children[0].children[1].href = "https://github.com/ibfactor/cnt";

projects.children[1].children[0].children[0].setAttribute("target", "_blank");
projects.children[1].children[0].children[1].setAttribute("target", "_blank");
projects.children[2].children[0].children[0].setAttribute("target", "_blank");
projects.children[2].children[0].children[1].setAttribute("target", "_blank");
projects.children[3].children[0].children[0].setAttribute("target", "_blank");
projects.children[3].children[0].children[1].setAttribute("target", "_blank");

projects.children[1].children[0].children[0].appendChild(document.createElement("i"));
projects.children[1].children[0].children[1].appendChild(document.createElement("i"));
projects.children[2].children[0].children[0].appendChild(document.createElement("i"));
projects.children[2].children[0].children[1].appendChild(document.createElement("i"));
projects.children[3].children[0].children[0].appendChild(document.createElement("i"));
projects.children[3].children[0].children[1].appendChild(document.createElement("i"));

projects.children[1].children[0].children[0].children[0].setAttribute("class", "fas fa-external-link-alt");
projects.children[1].children[0].children[1].children[0].setAttribute("class", "fab fa-github");
projects.children[2].children[0].children[0].children[0].setAttribute("class", "fas fa-external-link-alt");
projects.children[2].children[0].children[1].children[0].setAttribute("class", "fab fa-github");
projects.children[3].children[0].children[0].children[0].setAttribute("class", "fas fa-external-link-alt");
projects.children[3].children[0].children[1].children[0].setAttribute("class", "fab fa-github");

projects.children[1].children[0].children[0].innerHTML += " View";
projects.children[1].children[0].children[1].innerHTML += " Source";
projects.children[2].children[0].children[0].innerHTML += " View";
projects.children[2].children[0].children[1].innerHTML += " Source";
projects.children[3].children[0].children[0].innerHTML += " View";
projects.children[3].children[0].children[1].innerHTML += " Source";

main.appendChild(projects);

const blog = document.createElement("div");
blog.id = "blog";
blog.appendChild(document.createElement("h2"));
blog.children[0].appendChild(document.createElement("i"));
blog.children[0].children[0].innerText = "Blog";
blog.appendChild(document.createElement("div"));
blog.children[1].addEventListener("click", () => {
	alert("I still have to write this lol... Just added it to show how a blog post would look.");
});
blog.children[1].appendChild(document.createElement("h4"));
blog.children[1].appendChild(document.createElement("p"));
blog.children[1].children[0].innerText = "Using a Thermal Printer via JavaScript";
blog.children[1].children[1].innerText = "Yes, the same old thermal printer you find at stores, or pretty much anywhere that handles payments. I was tasked to make it work with a hospital management system that I had coded.";
main.appendChild(blog);

const contact = document.createElement("div");
contact.id = "contact";
contact.appendChild(document.createElement("h2"));
contact.appendChild(document.createElement("p"));
contact.children[0].innerText = "Contact";
contact.children[1].innerText = "You can reach me via email at ";
contact.children[1].appendChild(document.createElement("a"));
contact.children[1].children[0].innerText = "admin@ibfactor.com";
contact.children[1].children[0].href = "mailto:admin@ibfactor.com";
main.appendChild(contact);

document.body.appendChild(main);

const notice = document.createElement("div");
notice.id = "notice";
const notice_h3 = document.createElement("h3");
notice_h3.innerText = "This website is completely tagless!";
notice.appendChild(notice_h3);
const notice_p = document.createElement("p")
notice_p.innerText = "I modified my main personal site to use no HTML tags. (this page is rendered completely in JavaScript!)";
notice.appendChild(notice_p);
document.body.appendChild(notice);