model.getArrayLS();
view.renderInit(model.arrayTodos);
view.todosFilter.showFilteredTodoElements(view.todosFilter.currentNavBtnClass);

document.querySelector('.nav').addEventListener('click', e =>{
   let navBtnTarget = e.target;
   if(navBtnTarget.classList.contains('nav-btn')){
      let navBtnList = document.querySelectorAll('.nav-btn');
      navBtnList.forEach(el=>{
         el.classList.remove('nav-current-btn');
      })

      navBtnTarget.classList.add('nav-current-btn');
      view.todosFilter.showFilteredTodoElements(navBtnTarget.dataset.nav);
      view.todosFilter.currentNavBtnClass = navBtnTarget.dataset.nav;
   }
})

document.querySelector('.todos').addEventListener('click', e => {
   e.stopPropagation();
   let target = e.target;
   if (target.classList.contains('remove-btn')) {
      model.removeTodo(target.dataset.id);
      view.deleteElement(target);
   }
   if (target.classList.contains('done-btn')) {
      let arr = model.switchState(target.dataset.id);
      let rgba;
      arr.forEach(el => {
         if (el.id == target.dataset.id) {
            if (el.state == 'active') {
               rgba = el.activeRGBA;
            } else {
               rgba = el.doneRGBA;
            }
         }
      })
      view.switchElement(target, rgba);
      view.todosFilter.showFilteredTodoElements(view.todosFilter.currentNavBtnClass);

   }
})

document.querySelector('.header__form').addEventListener('submit', function (e) {
   e.preventDefault();
   let text = document.querySelector('.inp');
   if (text.value == '') return;
   let newTodo = model.createNewTodo(text.value);
   view.createNewElement(newTodo.id, newTodo.text, newTodo.state, newTodo.activeRGBA, 'done', 'done-btn');
   e.target.reset();
   text.focus();
   view.todosFilter.showFilteredTodoElements(view.todosFilter.currentNavBtnClass);

})
