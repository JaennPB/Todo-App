// ********************************************************************************
// selectores

// entradas
const entradaTarea = document.querySelector('.contenedor__entrada--entrada');

// botones
const botonNuevaTarea = document.querySelector('.contenedor__entrada--boton');
const botonCompletarTodo = document.querySelector('.botonCompletarTodo');
const botonBorrarTodo = document.querySelector('.botonBorrarTodo');

// elementos
const incompletasDiv = document.querySelector(
  '.contenedor__tareas--incompletas'
);
const completadasDiv = document.querySelector('.contenedor__tareas--completas');
const listaDeTareas = document.querySelectorAll('.contenedor__tareas--lista');

// ********************************************************************************
// funciones

// ================================ nueva tarea
const nuevaTarea = function (e) {
  // crear tarea
  const tareaTexto = entradaTarea.value;
  html = `
  <div class="tarea-bloque">
    <span class="tarea-bloque__tarea">
      <input type="checkbox" id="completar">
      <span class="">${tareaTexto}</span>
    </span>
    <span class="tarea-bloque__botones">
      <i class="fas fa-pen" id="editar"></i>
      <i class="fas fa-trash" id="borrar"></i>
    </span>
  </div>
  `;

  const bloqueNuevasTareas = incompletasDiv.querySelectorAll('div')[1];
  bloqueNuevasTareas.insertAdjacentHTML('afterbegin', html);
  entradaTarea.value = '';

  // completar tarea
  const checked = document.querySelector('#completar');
  eventosDeBoton(checked, botonBorrar, botonEditar);
  checked.addEventListener('change', completarTarea);

  // borrar tarea
  const botonBorrar = document.querySelector('#borrar');
  botonBorrar.addEventListener('click', borrarTarea);

  // editar tarea
  const botonEditar = document.querySelector('#editar');
  botonEditar.addEventListener('click', editarTarea);
};

// ================================ completar tarea
const completarTarea = function (e) {
  borrarTarea(e);

  const texto = e.target.nextElementSibling.textContent;

  html = `
  <div class="tarea-bloque">
    <span class="tarea-bloque__tarea">
      <span class="completada">${texto}</span>
    </span>
    <span class="tarea-bloque__botones">
      <i class="fas fa-trash" id="borrar"></i>
    </span>
  </div>
  `;

  const bloqueTareasCompletadas = completadasDiv.querySelectorAll('div')[1];
  bloqueTareasCompletadas.insertAdjacentHTML('afterbegin', html);
};

// ================================ borrar tarea
const borrarTarea = function (e) {
  const elemento = e.target.closest('.tarea-bloque');
  elemento.remove();
};

// ================================ editar tarea
const editarTarea = function () {
  console.log('editar');
};

// ================================ borrar todo
const borrarTodo = function () {
  listaDeTareas.forEach((el) => {
    el.innerHTML = '';
  });
};

// ================================ completar todo
const completarTodo = function () {
  //
};

// ********************************************************************************
//event listeners

// ================================ crear nueva tarea (editar, borrar, completar)
botonNuevaTarea.addEventListener('click', nuevaTarea);

// ================================ borrar todo
botonBorrarTodo.addEventListener('click', borrarTodo);

// ARREGLAR EVENTLISTENERS DENTRO DE EVENTLISTENERS
// COMPLETAR FUNCIONALIDAD DE BORRAR COMPLETADAS
// COMPLETAR FUNCIONALIDAD DE BOTON 'COMPLETAR TODO'
// AGREGAR ANIMACIONES
