import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "Web Design with Webflow",
    img: "img/blog/blog-post-4.jpg",
    tag: "Technology",
    date: { date: "27", month: "mar", year: "2023" },
    des: [
      "I am delighted to share my latest project, Ontario Plant Market, an exquisite web application built using the power of Webflow. Join me as we embark on a journey through the beautiful world of plants and explore the endless possibilities of this remarkable web design platform.",
      "🌿 Showcasing Skills Through Ontario Plant Market",
      "Ontario Plant Market stands as a testament to how we can create a simple, beautiful and useful web design. It helps to create visually stunning and functional websites, and I'm just talking about the one part of the full potential of Webflow.",
      "🛒 A Simulated Shopping Experience",
      "Within Ontario Plant Market, you'll find an inventory of plants, categorized for effortless browsing. Although the website does not facilitate real plant purchases, it provides an engaging simulated shopping experience, enabling visitors to explore a wide range of plant options and simulate adding them to a virtual cart.",
      "🌍 Seamless Exploration with Google Maps Integration",
      "To enhance the user experience, I seamlessly integrated the Google Maps API, allowing visitors to interact with an interactive map showcasing hypothetical locations of nurseries and stores. This integration offers users the convenience of finding nearby plant sellers through a familiar mapping interface.",
      "🌿 Informative 'About' and 'Contact' Sections",
      "Ontario Plant Market also features informative 'About' and 'Contact' sections, providing valuable insights into the project's concept and purpose. Please note that while the contact form is functional, no actual inquiries or orders will be processed.",
      "🌱 Webflow: Empowering Design and Development",
      "The creation of Ontario Plant Market was made possible by harnessing the immense power of Webflow, an exceptional web design platform. With its intuitive interface and comprehensive feature set, Webflow empowers both designers and developers, like myself, to bring captivating layouts and designs to life.",
      "🌿 Embracing the Beauty of Plants",
      "Ontario Plant Market serves as a celebration of my love for plants and web design and development. Through this project, I try my best to share with you my passion and expertise in these topics.",
      "I invite you to explore Ontario Plant Market, immerse yourself in the captivating world of plants, and experience the seamless user interface. Your feedback and questions are always welcome. Please remember that this project is purely for demonstration purposes and does not support actual plant transactions.",
      "Thanks for reading.",
      "",
      
    ],
  },
  {
    title: "Buenas prácticas para crear un sitio web",
    img: "img/blog/blog-post-3.jpg",
    tag: "Media",
    date: { date: "15", month: "mar", year: "2023" },
    des: [
      "¿Cómo estás? Hoy te quiero hablar sobre algo muy importante en el mundo del desarrollo web. Cuando se trata de construir un sitio web, hay ciertas prácticas que son fundamentales para que tenga un mayor alcance y escalabilidad. Además, es crucial tener en cuenta la accesibilidad y el posicionamiento en los motores de búsqueda. A veces se dice tanto que no sabemos por donde empezar, pero no te preocupes, aquí te tengo unos tips para que domines la red💻🚀",
      "Diseño accesible ✅",
      "La accesibilidad es como el perfecto acompañamiento para un buen plato de comida. Cuando diseñes o crees un sitio web, tienes que tener en cuenta a todas las personas, incluyendo a aquellas con discapacidades visuales, auditivas y cognitivas. Para lograrlo, asegúrate de que el sitio sea fácil de navegar y que los colores y la tipografía sean legibles. Además, no te olvides de incluir etiquetas alt para las imágenes, para que todo el mundo pueda disfrutar del contenido. ¡No dejes a nadie fuera! 🧑 🦯👩 🦽",
      "Optimización para motores de búsqueda🔍",
      "Si quieres que tu sitio web sea como una estrella de rock en la era digital, tienes que trabajar en su SEO. Para hacerlo, utilizando palabras clave relevantes en el título y la descripción del sitio web, en los títulos y subtítulos de las páginas, y en el contenido en general. También es importante crear enlaces de calidad y tener una estrategia de marketing de contenidos. Aquí hay que decir también que son muchos los parámetros que miden los motores de búsqueda, pero tal vez lo más importante sea el montaje recurrente de contenido relevante y de calidad. ¡Haz que te encuentren! 📈",
      "Diseño responsivo 📱",
      "Te imaginas ir a la playa con una ropa que no te queda bien? Lo mismo pasa con un sitio web que no se ve bien en diferentes dispositivos y tamaños de pantalla. Para evitar eso, asegúrate de tener un diseño responsivo que se ajuste al tamaño de la pantalla del dispositivo que se está utilizando para ver el sitio web. Así podrás estar seguro de que todo el mundo ve tu sitio web en todo su esplendor. Para esto existen las poderosas media queries",
      "Velocidad de carga⚡",
      "¿Te gusta esperar mucho tiempo por algo? Yo tampoco. Por eso, asegúrate de que tu sitio web cargue rápido. Optimiza las imágenes y reduce el tamaño de los archivos para que el sitio web se cargue en un abrir y cerrar de ojos. ¡No hagas esperar a nadie! ⌛️⚡️",
      "Como ves, crear un sitio web no es solo cuestión de elaborar una bonita interfaz gráfica con botones y contenido multimedia. Si quieres triunfar en la era digital, tienes que asegurarte de seguir estas mejores prácticas para que tu sitio web sea accesible, esté bien posicionado en los motores de búsqueda, tenga un diseño responsivo y cargue rápido.",
      "",
    ],
  },
  {
    title: "Strict Mode for JS Development",
    img: "img/blog/blog-post-2.jpg",
    tag: "Development",
    date: { date: "25", month: "jan", year: "2023" },
    des: [
      "JavaScript has two modes of execution: strict mode and sloppy mode. Strict mode was introduced in ECMAScript 5 and it helps developers to write safer and more efficient code. In this article, we will take a look at the most important features of strict mode and how it can help us to avoid common mistakes.",
      "First, it is important to note that strict mode is an opt-in feature, meaning that developers must explicitly enable it in their code. This allows developers to choose whether or not to use strict mode on a per-script or per-function basis. To enable strict mode, simply add the string 'use strict' at the beginning of your script or function.",
      "1. Fix the accidental creation of global variables",
      "In strict mode, we cannot assign a value to an undeclared variable. This is a common mistake that can lead to unexpected behavior and bugs in our code. For example, in the following code, we are trying to assign a value to the variable nme which was not declared before, this will throw an error in strict mode.",
      "2. Read only properties",
      "In strict mode we cannot assign a new value to a read only property. This means that we cannot change the value of an object's property if it is defined as read-only. For example, in the following code, we are trying to change the value of the 'name' property of the user object, which is defined as read-only. This will throw an error in strict mode.",
      "3. No extensible objects",
      "In strict mode we cannot add a property to an object if it is defined as not extensible. This means that we cannot add new properties to an object if it is defined as not extensible. For example, in the following code, we are trying to add the property 'age' to the user object, which is defined as not extensible. This again will throw an error in strict mode.",
      "4. Duplicated parameters",
      "In strict mode we cannot duplicate parameters of a function. This means that we cannot have two or more parameters with the same name in a function. For example, in the following code, we are trying to define a function with two parameters with the same name, in strict mode this won't work and will throw an error.",
      "5. Octal numeral system",
      "With the octal numeral system (base 8) we can represent any number with digits from 0 to 7. It is often used to represent file permissions, such as in the Unix file system and the C programming language. In some cases, octal is used to represent colors in web development, as it allows for more compact representation of colors using a three-digit code. In strict mode the correct way to use octal numeral system is with an o lowercase or O uppercase after the zero 0, e.g: 0o11, 0o23.",
      "6. Delete",
      "The operator delete helps to delete properties of an object or elements in an array returning true or false if it was deleted or not. We cannot delete a variable, a function or the object window, returning false. In strict mode the operator delete applied to these elements throw a SyntaxError.",
      "7. Arguments and eval are keywords",
      "In strict mode arguments and eval are keywords, if we use them as variable names in our code, it will throw an error.",
      "8. With is not allowed",
      "The instruction 'with' extends the scope chain in JavaScript temporarily. In strict mode code may not include a 'with' statement. The statement 'with' slows down the reading process of JavaScript's engine. We can better store a reference of the object in a variable.",
      "9. New reserved word",
      "In strict mode there are more reserved words, e.g. implements, package, public, interface, static, private, protected, yield, let.",
      "10. The behavior of free functions",
      "In strict mode, the object 'window' is not the owner of free functions, meaning that if a function is assigned to a variable and then invoked, the 'this' keyword inside the function will not reference the 'window' object. Instead, it will be undefined. This can lead to errors if the function relies on the 'this' keyword to access properties or methods. In this example, the function 'sayHello' is a method of the object 'user', which references the 'name' property of the object. When the function is assigned to a variable 'sayHello' and invoked, the 'this' keyword inside the function no longer references the 'user' object and instead is undefined. This results in an error when trying to access the 'name' property which is 'Cannot read properties of undefined (reading 'name')', a very common but useful error in JavaScript.",
      "Strict mode is a powerful tool that helps developers to write safer and more robust code by enforcing a set of rules that prevent common coding mistakes. By using strict mode, developers can avoid accidentally creating global variables, modifying read-only properties, extending non-extensible objects, and more. Additionally, strict mode disallows certain features that are considered harmful or confusing, such as the with statement and the octal numeral system.",
      "However, strict mode is not a silver bullet and it's important to keep in mind that it might also break some code that works in sloppy mode. Therefore, it is recommended to use strict mode in development and test it thoroughly before deploying it to production.",
      "Thanks for reading.",
      "",
    ],
  }, 
  {
    title: "Single Page Application (SPA)",
    img: "img/blog/blog-post-1.jpg",
    tag: "Desarrollo",
    date: { date: "17", month: "jan", year: "2023" },
    des: [
      "Una Single Page Application (SPA) es una aplicación web que se comporta como una aplicación de escritorio o móvil, pero se ejecuta en un navegador web. En lugar de recargar completamente la página cada vez que el usuario realiza una acción, una SPA carga solo los datos y contenido necesarios para mostrar la nueva vista. Esto permite una experiencia de usuario más fluida y rápida, ya que no se requiere que el navegador cargue una nueva página completa cada vez que se realiza una acción.",
      "Una SPA se construye utilizando JavaScript, HTML y CSS, y utiliza un enrutador para manejar las diferentes vistas y funcionalidades de la aplicación. El enrutador se encarga de mostrar la vista correcta según la ruta especificada en la barra de direcciones del navegador.",
      "Algunas de las ventajas de las SPA son: 1.) Mejora la experiencia de usuario al evitar recargas de página. 2.) Requiere menos ancho de banda ya que solo se carga el contenido necesario. 3.) Permite una interacción más rápida y fluida con la aplicación.",
      "Sin embargo, también hay algunas desventajas, como: 1.) Pueden ser más difíciles de indexar por los motores de búsqueda. 2.) Pueden requerir un mayor esfuerzo para asegurar la accesibilidad. 3.) Pueden ser más difíciles de depurar y probar debido a la complejidad adicional del enrutamiento y la navegación.",
      "En general, las SPA son una excelente opción para aplicaciones web que requieren una experiencia de usuario rápida y fluida, pero deben ser diseñadas y desarrolladas cuidadosamente para asegurar una buena accesibilidad y una buena optimización para motores de búsqueda.",
      "En resumen, una Single Page Application es una aplicación web que se comporta como una aplicación de escritorio o móvil, pero se ejecuta en un navegador web, evitando recargas completas de la página, mejorando la experiencia de usuario y requiriendo menos ancho de banda. Sin embargo, también presenta algunas desventajas como dificultad en indexar por motores de búsqueda, y dificultad en depurar y probar debido a la complejidad adicional del enrutamiento y la navegación.",
      "Algunos ejemplos de aplicaciones que se benefician de ser SPA son: aplicaciones de redes sociales, aplicaciones de comercio electrónico, aplicaciones de gestión de proyectos y aplicaciones de productividad. Algunos frameworks y librerías populares utilizados para desarrollar SPA incluyen Angular, React y Vue.js.",
      "Entre los sitios web conocidos que funcionan como Single Page Applications (SPAs) están:",
      "Facebook: La aplicación de Facebook en el navegador es una SPA, ya que la mayoría de las acciones se realizan dentro de una sola página sin recargar completamente la página.",
      "Gmail: la interfaz de usuario de Gmail en el navegador es una SPA, ya que las acciones de lectura de correo electrónico y la composición de mensajes se realizan dentro de una sola página sin recargar completamente la página.",
      "Twitter: Twitter utiliza una SPA para permitir al usuario navegar por tweets, buscar tweets, ver perfiles y hacer otras acciones dentro de una sola página.",
      "Netflix: La interfaz de usuario de Netflix en el navegador también es una SPA, ya que permite a los usuarios navegar por contenido, reproducir videos y realizar otras acciones sin recargar completamente.",
      "Spotify: Spotify utiliza una SPA para permitir a los usuarios navegar por su biblioteca de música, buscar y escuchar música, ver listas de reproducción y realizar otras acciones sin recargar. Spotify utiliza tecnologías como React y Redux para desarrollar su interfaz de usuario.",
      "",
    ],
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            latest <span>posts</span>
          </h2>
          <span className="title-head-subtitle">
            insights, and best practices about web development and web design
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
