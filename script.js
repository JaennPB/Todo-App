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
  const tareaTexto = entradaTarea.value;

  if (!tareaTexto) {
    alert('Porfavor inserta texto valido ;)');
  } else {
    html = `
    <div class="tarea-bloque">
      <span class="tarea-bloque__tarea">
        <input type="checkbox" class="completar">
        <span class="texto">${tareaTexto}</span>
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
  }
};
// ================================ completar tarea
const completarTarea = function (e) {
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

  const el = e.target.closest('.tarea-bloque');
  el.remove();
  console.log('completando...');
};

// ================================ borrar o editar tarea
const editarBorrar = function (e) {
  if (e.target.classList[1] === 'fa-trash') {
    console.log('borrando...');
    const elemento = e.target.closest('.tarea-bloque');
    elemento.remove();
  }

  if (e.target.classList[1] === 'fa-pen') {
    console.log('editando...');
  }
};

// ================================ borrar todo
const borrarTodo = function () {
  listaDeTareas.forEach((el) => {
    el.innerHTML = '';
    console.log('borrando todo...');
  });
};

// ================================ completar todo
const completarTodo = function () {
  // guardar html de tareas en constante
  const nuevoHTML = incompletasDiv.querySelectorAll('div')[1].innerHTML;
  // borrar html de bloque antiguo
  incompletasDiv.querySelectorAll('div')[1].innerHTML = '';

  // añadir nuevo html a bloque de tareas completadas
  const bloqueTareasCompletadas = completadasDiv.querySelectorAll('div')[1];
  bloqueTareasCompletadas.insertAdjacentHTML('afterbegin', nuevoHTML);

  // borrando ciertos elementos
  const tareas = [...completadasDiv.querySelectorAll('div')[1].children];
  tareas.forEach((el) => {
    el.querySelector('.completar').remove();
    el.querySelector('.fa-pen').remove();
    el.querySelector('.texto').classList.add('completada');
    // el.classList.add('completada');
  });
  console.log('completando todo...');
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
botonCompletarTodo.addEventListener('click', completarTodo);
