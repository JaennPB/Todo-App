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
      <i class="fas fa-pen"></i>
      <i class="fas fa-trash"></i>
    </span>
  </div>
  `;

  const bloqueNuevasTareas = incompletasDiv.querySelectorAll('div')[1];
  bloqueNuevasTareas.insertAdjacentHTML('afterbegin', html);
  entradaTarea.value = '';
};
// ================================ completar tarea
const completarTarea = function (e) {
  console.log(e.target);
  borrarTarea(e);

  const texto = e.target.nextElementSibling.textContent;

  html = `
  <div class="tarea-bloque">
    <span class="tarea-bloque__tarea">
      <span class="completada">${texto}</span>
    </span>
    <span class="tarea-bloque__botones">
      <i class="fas fa-trash"></i>
    </span>
  </div>
  `;

  const bloqueTareasCompletadas = completadasDiv.querySelectorAll('div')[1];
  bloqueTareasCompletadas.insertAdjacentHTML('afterbegin', html);
};

// ================================ borrar o editar elemento
const editarBorrar = function (e) {
  console.log(e.target);
  if (e.target.classList[1] === 'fa-trash') {
    console.log('borrar');
    const elemento = e.target.closest('.tarea-bloque');
    elemento.remove();
  }

  if (e.target.classList[1] === 'fa-pen') {
    console.log('editar');
  }
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

// ================================ crear nueva tarea
botonNuevaTarea.addEventListener('click', nuevaTarea);

// ================================ completar tarea
listaDeTareas.forEach((el) => el.addEventListener('change', completarTarea));

// ================================ editar, borrar tarea
listaDeTareas.forEach((el) => el.addEventListener('click', editarBorrar));

// ================================ borrar todo
botonBorrarTodo.addEventListener('click', borrarTodo);

// ================================ completar todo
// botonBorrarTodo.addEventListener('click', completarTodo);
