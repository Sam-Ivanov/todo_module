const model = {
   arrayTodos: [],

   getArrayLS() {
      if (localStorage.length === 0) {
         arrayTodos = [];
      } else {
         this.arrayTodos = JSON.parse(localStorage.getItem('todos'));
         if (!this.validLsArr(this.arrayTodos)) {
            localStorage.clear();
            this.arrayTodos = [];
            return;
         }
      }
   },

   setArrayLS(arr) {
      localStorage.setItem('todos', JSON.stringify(arr));        //отправляем обновленный массив todos в LS
   },

   createNewTodo(text) {
      // let arrTodos = getArrayLS();                               //получаем массив todos из LS
      let id = this.generateID();                                     //генерим id
      let newTodo = {                                            //создаем новую todo
         id: id,
         text: text,
         state: 'active',
         activeRGBA: [this.getRand(0, 255), this.getRand(0, 255), this.getRand(0, 255), 0.2],
         doneRGBA: [250, 250, 250, 1]
      };
      this.arrayTodos.push(newTodo);                                    //пушим новую todo в массив todos
      this.setArrayLS(this.arrayTodos);                                      //отправляем обновленный массив todos в LS
      // createNewElement(id, text, newTodo.state, newTodo.activeRGBA, 'done', 'done-btn');
   },

   removeTodo(id) {
      // let arrTodos = getArrayLS();                               //получаем массив todos из LS
      for (let i = 0; i < this.arrayTodos.length; i++) {                //ищем todo по id
         if (this.arrayTodos[i].id == id) {
            this.arrayTodos.splice(i, 1);                               //если нашли, удаляем данный todo и выходим из цикла
            break;
         }
      }
      this.setArrayLS(this.arrayTodos);                                      //отправляем обновленный массив todos в LS
   },

   generateID() {
      return Date.now();
   },

   switchState(id) {
      // let arrTodos = getArrayLS();                               //получаем массив todos из LS
      for (let i = 0; i < this.arrayTodos.length; i++) {                //ищем todo по id
         if (this.arrayTodos[i].id == id) {
            if (this.arrayTodos[i].state === 'active') {                              //если нашли, меняем состояние данного todo и выходим из цикла
               this.arrayTodos[i].state = 'done';
            } else {
               this.arrayTodos[i].state = 'active';
            }
            break;
         }
      }
      this.setArrayLS(this.arrayTodos);                                      //отправляем обновленный массив todos в LS
      return (this.arrayTodos);
   
   },

   getRand(min, max) {
      let rand = ((max + 1 - min) * Math.random()) + min;
      return (Math.floor(rand));
   },

   validLsArr(arr) {
      if (arr.length == 0) return true;
      return (arr[0].hasOwnProperty('id') &&
         arr[0].hasOwnProperty('text') &&
         arr[0].hasOwnProperty('state') &&
         arr[0].hasOwnProperty('activeRGBA') &&
         arr[0].hasOwnProperty('doneRGBA'));
   },

   render() {     //для отладки, просто выводит тудухи в консоль
      let arr = JSON.parse(localStorage.getItem('todos'));
      if (arr === null || arr.length === 0) {
         console.log('Массив тудух пуст!');
         return;
      }
      arr.forEach(el => console.log(el));
   }
}

////////////////////////////////////////////////////////////////////
//Все ф-ции:
/**
 * getArrayLS()        (model)                                       //===Получение массива todos из LS===
 * validLsArr(arr)     (model)                                     проверка на валидность данных из LS (на случай изменения структуры данных в массиве тудух)
 * setArrayLS(arr)     (model)                                    //===Отправление массива todos в LS===
 * createNewTodo(text) (model)                                //===Создание нового todo===
 * generateID()        (model)                                       //===Генерация id по дате в мс===
 * removeTodo(id)      (model)                                          //===Удаление todo===
 * switchState(id)     (model)                                    //===Переключение состояния state в todo===
 * getRand(min, max)   (model)                                  //Генерация псевдослучайного числа для фона todo
 * 
 * switchCurrentNavBtn() (view)       ?                                 //Переключение текущей вкладки навигации (изменяет/фильтрует тудухи)
 * switchNavCurBtn(targetBtn) (view)  ?                            переключение активной кнопки навигации  (изменяет активную кнопку навигации)
 * hideElements(currentNavBtn)(view)  ?                                  скрывает тудухи не включающие класс currentBtn
 * getCurrentNavBtn() (view)          ?                                 //Получить текущую вкладку/класс навигации
 * 
 * renderBig(arr) / renderInit      (view)
 * createNewElement(id, text, state, rgba, statusBtnText, statusBtnClass) (view)     //создание всех элементов после изменения массива тудух
 * deleteElement(targetBtn)        (view)
 * switchElement(target, rgba)      (vew)                           переключение done/active
 *
 *  render()      для отладки, просто выводит тудухи в консоль
 */

/** Описание:
 * При первом запуске получаем массив тудух из LS, кладем в model.arrayTodos и оттуда пользуем. Загружаем в LS при изменении в объекте model
 * 
 * 1. Сначала описываю полностью объект model, тестирую рендером
 * 2. Далее описываю все ф-ции связвнные с рендером из arr.todos
 * 3. Продумать фильтр навигации
 * 
 * 
 * в arrTodos происходят изменения при сл. действиях:
 * 1. Создание туду
 * 2. удаление туду
 * 3. изменение статуса done/active
 * 4. 
 */