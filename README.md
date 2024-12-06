### Было сказано:
*Верстка должна быть сделана с помощью чистых HTML, CSS и JS без использования ***сторонних*** библиотек или фреймворков.*

Для удобства я написал небольшой скрипт (🙃), с помощью которого смог разделить HTML на компоненты. Файлы:

* `./js/NativeComponents.js`
* `./index_NativeComponents.html`

**Настройка**
  
создаем родительский элемент с атррибутами 
> ***id="root"*** (обязательно)
> ***data-folder="./components"*** // указываем путь где хранятся компоненты (по default "./imports")
> ***data-modules="[./js/myScript_1.js, ./js/myScript_2.js]"*** // загрузжаем скрипты 

**Добавление дочерних элементов к компонентам**

Чтобы добавить дочерние элементы к компонентам, вы можете использовать элемент `<slot/>`.  Это позволяет размещать содержимое в структуре родительского компонента.

**1.  `./index.html`**

```html
// указываем путь к файлу: `data-component=""
// интерпретация: ./components/sections/Hero.html
<div data-component="sections/Hero">
  <button style="color: red;">😉</button>
</div>
```

**2.  `./components/sections/Hero.html`**
```html
<section>
 <div> <slot/> </div>
</section>
```