//! logica del menu hamburguesa

const iconMenu = document.querySelector(".bx-menu");
const ancorHomeMenu = document.querySelector(".home-a");
const ancorAboutMenu = document.querySelector(".about-a");
const ancorHabilidadesMenu = document.querySelector(".habilidades-a");
const ancorExperienciaMenu = document.querySelector(".experiencia-a");
const ancorPortfolioMenu = document.querySelector(".portfolio-a");
const ancorEducationMenu = document.querySelector(".education-a");
const ancorContactMenu = document.querySelector(".contacto-a");
const menu = document.querySelector(".nav__items");

const ancorsMenu = [
  iconMenu,
  ancorHomeMenu,
  ancorAboutMenu,
  ancorHabilidadesMenu,
  ancorExperienciaMenu,
  ancorPortfolioMenu,
  ancorEducationMenu,
  ancorContactMenu,
];

ancorsMenu.forEach((iconAncor) => {
  iconAncor.addEventListener("click", () => menu.classList.toggle("is__show"));
});

//! logica del modal de contacto

const abirModal1 = document.querySelector(".open_modal-contact1");
const abirModal2 = document.querySelector(".open_modal-contact2");
const cerrarModal = document.querySelector(".close_modal-contact");
const modal = document.querySelector(".modal__cont");

const abrirModal = [abirModal1, abirModal2];

abrirModal.forEach((abrir) => {
  abrir.addEventListener("click", () => modal.showModal());
});
cerrarModal.addEventListener("click", () => modal.close());

//! logica del modal de Proyect1

const abirProyect1 = document.querySelector(".project1");
const cerrarProyect1 = document.querySelector(".close_modal-1");
const modal1 = document.querySelector(".modal__proyecto-1");

abirProyect1.addEventListener("click", () => modal1.showModal());
cerrarProyect1.addEventListener("click", () => modal1.close());

//! logica del modal de Proyect2

const abirProyect2 = document.querySelector(".project2");
const cerrarProyect2 = document.querySelector(".close_modal-2");
const modal2 = document.querySelector(".modal__proyecto-2");

abirProyect2.addEventListener("click", () => modal2.showModal());
cerrarProyect2.addEventListener("click", () => modal2.close());

//! logica del modal de Proyect3

const abirProyect3 = document.querySelector(".project3");
const cerrarProyect3 = document.querySelector(".close_modal-3");
const modal3 = document.querySelector(".modal__proyecto-3");

abirProyect3.addEventListener("click", () => modal3.showModal());
cerrarProyect3.addEventListener("click", () => modal3.close());

//! logica del modal de Proyect4

const abirProyect4 = document.querySelector(".project4");
const cerrarProyect4 = document.querySelector(".close_modal-4");
const modal4 = document.querySelector(".modal__proyecto-4");

abirProyect4.addEventListener("click", () => modal4.showModal());
cerrarProyect4.addEventListener("click", () => modal4.close());

//! logica del modal de Proyect5

const abirProyect5 = document.querySelector(".project5");
const cerrarProyect5 = document.querySelector(".close_modal-5");
const modal5 = document.querySelector(".modal__proyecto-5");

abirProyect5.addEventListener("click", () => modal5.showModal());
cerrarProyect5.addEventListener("click", () => modal5.close());

//! logica del modal de Proyect6

const abirProyect6 = document.querySelector(".project6");
const cerrarProyect6 = document.querySelector(".close_modal-6");
const modal6 = document.querySelector(".modal__proyecto-6");

abirProyect6.addEventListener("click", () => modal6.showModal());
cerrarProyect6.addEventListener("click", () => modal6.close());

//! logica del modal de Proyect7

const abirProyect7 = document.querySelector(".project7");
const cerrarProyect7 = document.querySelector(".close_modal-7");
const modal7 = document.querySelector(".modal__proyecto-7");

abirProyect7.addEventListener("click", () => modal7.showModal());
cerrarProyect7.addEventListener("click", () => modal7.close());
