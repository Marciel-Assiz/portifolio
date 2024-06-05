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
        React.createElement("header", { id: "welcome-section" },
        React.createElement("div", { className: "container" },
        React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-header" },"Privacy Policy"),
        React.createElement("div", { className: "card-body" },
        React.createElement("h4", { className: "card-title" },"Politica de Privacidade e Segurança"),
        React.createElement("p", { className: "card-text" },"Nossa Política de Privacidade e Segurança tem por objetivo demonstrar o compromisso com a segurança e a privacidade das informações coletadas através de cadastro de usuários em nosso site."),
        React.createElement("p", { className: "card-text" },"Todos os dados (nome, endereço, número de cartão de crédito, etc.) postados em nosso formulário de cadastro são transmitidos em modo de segurança (SSL - Secure Socket Layer) onde todas as informações são protegidas por sistemas avançados de criptografia e apenas o nosso servidor poderá interpretá-las. Dessa forma, impossibilitamos a interceptação destes dados por terceiros, tornando sua compra totalmente segura."),
        React.createElement("p", { className: "card-text" },"Adotamos os níveis totalmente requeridos quanto à segurança na proteção de dados, tendo adotado medidas técnicas para se evitar mau uso, alteração, acesso não autorizado ou subtração indevida de dados pessoais recolhidos."),
        React.createElement("p", { className: "card-text" },"Os usuários poderão exercer os direitos de acesso, cancelamento, retificação e oposição. Bem como têm o direito de obterem informações mediante contato através do e-mail: marciel.emersom@gmail.com"),
        React.createElement("p", { className: "card-text" },"Os usuários poderão, a qualquer momento, corrigir ou atualizar as informações fornecidas e demais dados cadastrais no próprio site. Ao se cadastrar no site, é necessário que você determine uma senha para realizar o Login pode ser que você não use o LOGIN COM FACEBOOK, sendo assim necessário memorizar sua senha, se você esquecê-la e quiser redefini-la, ou se quiser alterá-la por razões de segurança, faça uma solicitação de ?nova senha?. O sistema fará a redefinição da mesma e enviará uma nova senha através do e-mail cadastrado. Querendo modificá-la, basta acessar o seu cadastro e fazer a troca."),
        React.createElement("p", { className: "card-text" },"Lembre-se que ao acessar esse site e/ou fornecer seus dados pessoais, o usuário automaticamente declara conhecer e aceitar os termos das Condições de Uso e da Política da Privacidade."),
        React.createElement("p", { className: "card-text" },"Será de total responsabilidade do usuário a garantia da veracidade e exatidão dos dados pessoais fornecidos neste site, ficando certo que o usuário assume quaisquer responsabilidades e/ou transtornos quanto à inexatidão de tais informações, podendo ainda dar-nos o direito de: suspender ou cancelar imediatamente, independente de notificação, a conta de cadastro do usuário e recusar toda e qualquer utilização."),
        React.createElement("p", { className: "card-text" },"Somos autorizados a transmitir seus dados a terceiros caso isto seja necessário para cumprir regulações legais (por exemplo, da Lei Federal de Proteção de Dados), como no caso da transmissão de dados a autoridades de perseguição penal e inspeção para fins de defesa de perigos para a segurança pública, bem como a perseguição penal."),
        React.createElement("p", { className: "card-text" },"Trabalhamos com ética e respeito, oferecendo um serviço de qualidade e com total segurança"),
    )))));
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
      title: "Link para a página de Politica de privacidade" }," Politica de privacidade"
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


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));