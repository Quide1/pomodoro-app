import svgDevFocus from "@/assets/dev-focus.svg";
import timeManagement from "@/assets/time-management.svg";
function QuestionsSection() {
  return (
    <section className="flex flex-col text-gray-700 bg-white w-full gap-8 min-h-screen">
      <div className="flex flex-row items-center gap-2 flex-wrap justify-center m-0 p-4">
        <div>
        <p className="text-3xl mb-2">Que es la técnica pomodoro</p>
        <p className='max-w-4xl'>
          La técnica Pomodoro es un método de gestión del tiempo que divide el trabajo en intervalos de 25 minutos, llamados "pomodoros", seguidos de un descanso de 5 minutos. Después de cuatro pomodoros, se toma un descanso más largo de 15 a 30 minutos. Esta técnica mejora la concentración y la productividad evitando el agotamiento mental y ayudando a mantener un alto nivel de eficiencia durante el día.
        </p>
        </div>
        <div className="max-w-[500px] ">
          <img src={svgDevFocus} alt="Dev Focus" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 flex-wrap  justify-center p-4">
        <div>
        <p className="text-3xl mb-2">Algunos consejos</p>
        <p className='max-w-4xl'>
          Para que la técnica Pomodoro sea más efectiva, elige una tarea específica antes de empezar y elimina todas las distracciones posibles. Usa los descansos para moverte y despejar tu mente, y ajusta la duración de los pomodoros según la tarea que estés realizando.
        </p>

        </div>
 
        <div className="max-w-[500px] ">
          <img src={timeManagement} alt="Time Management" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default QuestionsSection
