import React from 'react'
import LnTypo from '../LnTypo'
function Ayudarte() {
  return (
    <div id='ayudarte'>
      <div id='ayudarteIntro'>
        <LnTypo variant='h4' id='subtitleBlue'>¿COMO PUEDO AYUDARTE?</LnTypo>
        <LnTypo variant='body1'> En las consultas conmigo, el paso y el camino los decides tú. Yo te acompaño y te apoyo con toda mi
          atención y la experiencia de mis horas de vuelo. Tus problemas e inquietudes merecen un espacio en
          donde atenderlos: a tu ritmo; a tus tiempos; en un espacio seguro, cálido, respetuoso y confidencial.
          Imagínate que te ofrezco una mesa enorme bien iluminada en la que puedes volcar y vaciar tu mochila,
          tus bolsillos, tu mente, tu corazón, tu alma. Te has llenado de cosas que te pesan y no te dejan
          encontrar lo que sí necesitas y quieres. Esto lo puedes hacer sin recibir críticas, ni quejas, ni opiniones,
          ni consejos, ni juicios como los que suelen venir de la pareja, la familia, l@s amig@s, jefes,
          compañer@s de trabajo. Todos, por muy bien intencionados que puedan ser, están enredados en y con
          tu contexto; y no tienen una formación profesional concentrada exclusivamente en tu bienestar.
          Te ofrezco un espacio propio para tus problemas que, si lo son para ti, no son chicos ni grandes.</LnTypo>
      </div>
      <div id='ayudarteList'>
        <LnTypo>Los prcesos pueden ser breves y muy concretos o se van definiendo sobre la marcha.</LnTypo>
        <LnTypo>Algunos de los
          temas que he trabajado en mi consultorio son:</LnTypo>
        <ul>
          <li>-Conclusión de tesis o proyectos laborales</li>
          <li>-Mudanzas o reubicaciones</li>
          <li>-Cambios de estado civil</li>
          <li>-Cambios de etapa</li>
          <li>-Conflictos culturales o religiosos</li>
          <li>-Familias ensambladas</li>
          <li>-Crisis puntuales</li>
          <li>-Parálisis general</li>
          <li>-Cuestionamientos existenciales</li>
          <li>-Toma de decisiones</li>
        </ul>
        <LnTypo variant='body1'> Atiendo en español, inglés y alemán.</LnTypo>
      </div>
      <div> <img
        id='footsandwoman'
        alt='Pies en la play y señora tomando café'
        src='/campoLiane.jpg' />
      </div>
      <div id='elPincheMito'>
        <LnTypo variant='h3' id='subtitleBlue'>EL PINCHE MITO</LnTypo>
        <LnTypo variant='body1'>El pinche mito es un podcast para no fundamentalistas, donde hablo de diferentes temas que
          resultan recurrentes en mi consulta que me han llevado a la expresión de que esto u otro es un
          &quot; pinche mito &quot;. Lo que lo hace mito, es que no es verdad y se da por hecho y consagrado y por lo
          que me merece la adjetivación enojada del muy mexicano &quot;pinche &quot;, es cuando ese mito genera
          sufrimiento en su entorno. Esto generalmente sucede por las expectativas que estos pinches mitos
          nos generan, a nosotros, sobre otros o de terceros. Suelen ser creencias que no nos benefician.</LnTypo>
      </div>
    </div >
  )
}

export default Ayudarte
