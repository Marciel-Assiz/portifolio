function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 

/***********************
  Menu Component
 ***********************/
const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "/#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "/#about", onClick: props.toggleMenu }, "SOBRE")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "/#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "/#contact", onClick: props.toggleMenu }, "CONTATO"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};

/***********************
  Nav Component
 ***********************/
const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Marciel", /*#__PURE__*/

    React.createElement("strong", null, " Assiz")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className:
      props.showMenu === "active" ? "menu-button active" : "menu-button" }, /*#__PURE__*/

    React.createElement("span", null))))));
};

/***********************
  Header Component
 ***********************/
const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Eu"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "desenvolvo"), /*#__PURE__*/
    React.createElement("span", { className: "color" }, "sua"), " loja virtual, ou", /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "seu"), " website.")), /*#__PURE__*/

    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "Meu Portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Entrar em contato")))));
};

/***********************
  About Component
 ***********************/
const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Quem é esse cara?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Oii.. meu nome é Marciel."), /*#__PURE__*/
    React.createElement("p", null, "Sou um programador/desenvolvedor web localizado na zona norte de Curitiba, Paraná."), /*#__PURE__*/

    React.createElement("p", null, "Eu adoro encarar novos desafios, principalmente daqueles que colocam nossas habilidades em prática, gosto de resolver problemas e também de tornar as coisas bonitas e fáceis de usar. Não consigo parar de aprender coisas novas; autoditada desde cedo. Também adoro carros e motores, já fui pintor automotivo por mais de dez anos. Hoje levo apenas como hobby!")), /*#__PURE__*/

    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Mas afinal o que eu faço?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Eu sou um programador WEB."),
    React.createElement("p", null, "Para o front-end costumo trabalhar com HTML, Javascript e CSS, trabalho com essas tecnologias puras ou incluindo frameworks populares como Bootstrap, Ajax, JQuery"),

    React.createElement("p", null, "Para back-end do preferencia para o framework em PHP Laravel, por conta da sua segurança, porém em pequenas projetos onde a hospedagem não permite acesso as configuracões do servidor então uso PHP puro. Estou iniciando alguns projetos também com Node, então não seria problema dar manutenção em algum projeto que use essa tecnologia. No armazenamento uso com mais frequencia o MySQL, MariaDB. Mas tenho projetos com bancos não relacionais também como MongoDB.")), /*#__PURE__*/
    ))));
};

/***********************
  Projects Component
 ***********************/
const Projects = props => {
return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container container-fluid" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Meus trabalhos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Logo abaixo você verá alguns exemplos com animações de alguns projetos criados por mim, com algumas explicações do seu principal objeto e das suas funcionalidades.")),


    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/

    React.createElement(Project, {
    title: "Loja de Roupas Infantil",
    img:   "public/img/loja-de-roupas-infantil.png",
    tech:  "",
    link:  "https://exemplos.assiz.com.br/?link=loja-de-roupas-infantil",
    repo:  "https://github.com/Marciel-Assiz/Loja_de_Roupas_Infantil/" }, /*#__PURE__*/
    React.createElement("small", null, "Loja de roupas para criança desenvolvida sobre o framework Laravel em PHP entre outras tecnologias como JS, JQuery, Css."), /*#__PURE__*/
    React.createElement("p", null, "Ecommerce com um visual bonito, prático e responsivo. Super adaptado para dispositivos mobiles")), /*#__PURE__*/
  


    React.createElement(Project, {
    title: "Dashboard(Painel)",
    img:   "public/img/dashboard.gif",
    tech:  "",
    link:  "https://exemplos.assiz.com.br/?link=dashboard",
    repo:  "https://github.com/Marciel-Assiz/dashboard" }, /*#__PURE__*/
    React.createElement("small", null, "Dashboard desenvolvido sobre o framework Laravel em PHP entre outras tecnologias como JS, bootstrap, JQuery, Css"), /*#__PURE__*/
    React.createElement("p", null, "Dashboard, painel responsável por administrar os produto de uma loja. Busca de produtos instantanea, usando ajax, mostra o produto na hora da pesquisa, letra por letra digitada.")), /*#__PURE__*/



    React.createElement(Project, {
    title: "Checkout",
    img: "public/img/checkout.gif",
    tech: "",
    link: "https://exemples.assiz.com.br/?link=checkout",
    repo: "https://github.com/Marciel-Assiz/checkout/" }, /*#__PURE__*/
    React.createElement("small", null, "Checkout desenvolvido sobre o framework Laravel em PHP entre outras tecnologias como JS, JQuery, Css"), /*#__PURE__*/
    React.createElement("p", null, "Checkout transparente e responsivo para maior segurança na finalização da compra, evitando cesta abandonadas aumentando a conversão de vendas.")), /*#__PURE__*/



    ))));
};
  
/***********************
  Project Component
 ***********************/
const Project = props => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node" };


  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/(
    React.createElement("div", { className: "project col-12" }, /*#__PURE__*/
    React.createElement("a", {
      className: "project-link",
      href: link,
      target: "_blank",
      rel: "noopener noreferrer" }, /*#__PURE__*/

    React.createElement("img", {
      className: "project-image",
      src: props.img,
      alt: "Screenshot of " + props.title })), /*#__PURE__*/


    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(" ").map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, " "),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { className: "fa-view-source", href: repo, target: "_blank", rel: "noopener noreferrer" }, "Ver código ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Ver online", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};

/***********************
  Contact Component
 ***********************/
const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Me mande", /*#__PURE__*/
    React.createElement("br", null), "uma mensagem"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Para contato, favor enviar email para:",
    "", 
    React.createElement("span", { className: "mail" }, "marciel.emersom", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), "")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};

/***********************
  Footer Component
 ***********************/
const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("p", null, "OBRIGADO PELA VISITA!!!"), /*#__PURE__*/
    React.createElement("a", {
      href: "/politica-de-privacidade.html",
      target: "",
      rel: "noopener noreferrer",
      title: "Link para a página de Politica de privacidade" }," Politica de Privacidade"
    ),
    React.createElement("a", {
      href: "/solicitar-exclusao-dos-dados.html",
      target: "",
      rel: "noopener noreferrer",
      title: "Link para solicitar exclusao dos dados" },"Solicitar Exclusao dos Dados"
    ),
    React.createElement("a", {
      href: "/termos-de-uso.html",
      target: "",
      rel: "noopener noreferrer",
      title: "Link de Termos de Uso" },"Termos de Uso"
  ),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Marciel Assiz."), /*#__PURE__*/
   )));



};

/***********************
  Social Links Component
 ***********************/
const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.youtube.com/channel/UC9llnUi-3L7FApyOdyjH2jQ/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link para meu canal do YouTube" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-youtube" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.linkedin.com/in/assiz-marciel/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link para meu perfil no Linkedin" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.instagram.com/assizmarciel/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link para meu perfil do Instagam" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.facebook.com/marciel.assiz/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link para meu perfil do Facebook" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-facebook" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/Marciel-Assiz",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link para meu GitHub" },

    " ",/*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));

};

/***********************
  Main Component
 ***********************/
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        "active" :
        state.menuState === "deactive" ?
        "active" :
        "deactive" }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility =
      header.style.visibility === "hidden" && "visible";else
      header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
      navbar.classList.add("bg-active");else
      navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth" });

          });
        }
      }
    })();
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
