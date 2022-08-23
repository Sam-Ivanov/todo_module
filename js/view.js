const view = {

   todosFilter: {
      currentNavBtn: 'active',  //для хранения состояния активной кнопки/вкладки

      switchCurrentNavBtn() {  //??? переключение внешнего вида активной кнопки и активных тудух

      },
      switchActiveTab() {  // переключение внешнего вида активной кнопки и активных тудух
      },

      hideElements(classTarget) {    // ???просто скрывает тудухи не имеющие данного класса
      },
      showFilteredElements(classTarget) { // вместо hideElements

      }

   },

   renderInit(arr) { //renderBig / renderInit        единоразовый рендер всех тудух при первом запуске из model.arrayTodos
      let rgba;
      let statusBtnText;
      let statusBtnClass;

      arr.forEach(el => {
         if (el.state === 'active') {
            rgba = el.activeRGBA;
            statusBtnText = 'done';
            statusBtnClass = 'done-btn';
         } else {
            rgba = el.doneRGBA;
            statusBtnText = 'in active';
            statusBtnClass = 'done-btn bgGreenBtn';


         }
         this.createNewElement(el.id, el.text, el.state, rgba, statusBtnText, statusBtnClass);
      })
   },

   createNewElement(id, text, state, rgba, statusBtnText, statusBtnClass) {     //создание всех элементов после изменения массива тудух
      let todos = document.querySelector('.todos');
      let newTodo = document.createElement('div');
      // newTodo.dataset.id = id;
      newTodo.setAttribute(`class`, `all ${state}`);                 //ToDo Изменять цвет кнопки при switchState не атрибутом style а классом!(class="statusBtnBgClr")
      newTodo.innerHTML = `<div class="todo" style="background: rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]});">${text}</div>
      <button data-id="${id}" class="${statusBtnClass}">${statusBtnText}</button>
      <button data-id="${id}" class="remove-btn">del</button>`
      todos.prepend(newTodo);

   },

   deleteElement(targetBtn) {
      targetBtn.closest('.all').remove();

   },
   switchElement(target, rgba) {
      let t = target.closest('.all');
      if (t.classList.contains('active')) {
         t.classList.remove('active');
         t.classList.add('done');
      } else {
         t.classList.remove('done');
         t.classList.add('active');
      }
      target.classList.toggle('bgGreenBtn');
      target.textContent = target.textContent == 'done' ? 'in active' : 'done';
      target.previousElementSibling.style.background = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;
   
   }
}
