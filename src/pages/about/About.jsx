import React from 'react';
import danceImage1 from '../../assets/aboutPhotos/photo1.jpg';
import danceImage2 from '../../assets/aboutPhotos/photo2.jpg';
import danceImage3 from '../../assets/aboutPhotos/photo3.webp';
import danceImage4 from '../../assets/aboutPhotos/photo4.jpg';
import danceImage5 from '../../assets/aboutPhotos/photo5.webp';
import danceImage6 from '../../assets/aboutPhotos/photo6.webp';
import danceImage7 from '../../assets/aboutPhotos/photo7.jpg';
import danceImage8 from '../../assets/aboutPhotos/photo8.jpg';
import danceImage9 from '../../assets/aboutPhotos/photo9.jpg';
import danceImage10 from '../../assets/aboutPhotos/photo10.jpg';
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <h2>Sobre Nuestra Academia de Baile</h2>
      <div className="about-section">
        <p>
          Fundada en 2005, nuestra academia de baile ha sido un centro de creatividad y expresión para bailarines de todas las edades y procedencias. Desde nuestros humildes comienzos en un pequeño estudio, hemos crecido hasta convertirnos en una institución líder en el arte del baile.
        </p>
        <img src={danceImage1} alt="Bailarines actuando" />
      </div>
      <div className="about-section">
        <p>
          Nuestra misión es proporcionar un entorno de crianza donde los individuos puedan descubrir la alegría y la belleza del baile mientras desarrollan confianza, disciplina y habilidades de trabajo en equipo. A través de nuestra amplia gama de clases e instructores experimentados, nos esforzamos por inspirar una pasión de por vida por el baile en nuestros estudiantes.
        </p>
        <img src={danceImage2} alt="Estudiantes practicando baile" />
      </div>
      <div className="about-section">
        <p>
          En nuestra academia, valoramos la creatividad, la dedicación y la inclusividad. Creemos que el baile es un lenguaje universal que trasciende barreras y une a las personas. Ya seas un principiante o un bailarín experimentado, hay un lugar para ti en nuestra comunidad.
        </p>
        <img src={danceImage3} alt="Instructor de baile enseñando" />
      </div>
      <div className="about-section">
        <p>
          Con una amplia variedad de estilos de baile, desde ballet clásico hasta hip-hop, salsa y más, ofrecemos algo para todos los gustos y niveles de habilidad. Nuestros programas están diseñados para fomentar el crecimiento personal y artístico mientras se construyen amistades duraderas y se crean recuerdos inolvidables.
        </p>
        <img src={danceImage4} alt="Bailarines en una presentación" />
      </div>
      <div className="about-section">
        <p>
          La pasión por el baile es lo que nos impulsa a seguir adelante. Cada clase está llena de energía y emoción mientras exploramos nuevas formas de movimiento y expresión. Nuestros instructores están comprometidos a ayudarte a alcanzar tus metas y a descubrir tu verdadero potencial como bailarín.
        </p>
        <img src={danceImage5} alt="Grupo de baile en práctica" />
      </div>
      <div className="about-section">
        <p>
          La comunidad es el corazón de nuestra academia. Aquí, encontrarás un ambiente de apoyo y camaradería donde puedes crecer como bailarín y como persona. Nos enorgullece ser un lugar donde se celebran las diferencias y se promueve la inclusión en todas sus formas.
        </p>
        <img src={danceImage6} alt="Bailarines disfrutando de la clase" />
      </div>
      <div className="about-section">
        <p>
          Cada año, organizamos emocionantes espectáculos y eventos donde nuestros estudiantes tienen la oportunidad de brillar en el escenario. Estos momentos son el culmen de meses de arduo trabajo y dedicación, y son una fuente de orgullo para toda nuestra comunidad.
        </p>
        <img src={danceImage7} alt="Espectáculo de baile en vivo" />
      </div>
      <div className="about-section">
        <p>
          El baile es más que solo movimiento; es una forma de vida. Nos inspira, nos desafía y nos une en una conexión única. En nuestra academia, te invitamos a formar parte de esta hermosa tradición y a descubrir el poder transformador del baile.
        </p>
        <img src={danceImage8} alt="Bailarines en una presentación de grupo" />
      </div>
      <div className="about-section">
        <p>
          Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestra academia. Desde nuestras instalaciones de vanguardia hasta nuestro talentoso equipo de instructores, nos esforzamos por ofrecer la mejor experiencia de baile posible para nuestros estudiantes.
        </p>
        <img src={danceImage9} alt="Estudiantes practicando en el estudio" />
      </div>
      <div className="about-section">
        <p>
          Si estás listo para dar el primer paso hacia una vida de baile, ¡no busques más! Nuestra academia está aquí para guiarte en tu viaje y ayudarte a alcanzar tus sueños. Únete a nosotros y descubre el emocionante mundo del baile hoy mismo.
        </p>
        <img src={danceImage10} alt="Instructor de baile dando instrucciones" />
      </div>
    </div>
  );
}

export default About;






