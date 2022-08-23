const model = {
   //const arrayTodos = [];
   //getArrayLS()    получение массива из LS в arrayTodos
   //
}

const view = {

   filterTodos: {
      currentNavBtn: 'active',  //для хранения состояния активной кнопки/вкладки

      switchNavCurBtn: function () {  // переключение внешнего вида активной кнопки и активных тудух
      },

      hideElements: function (classTarget) {    // просто скрывает тудухи не имеющие данного класса
      }
   }
   //renderBig / renderInit        единоразовый рендер всех тудух при первом запуске из model.arrayTodos
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