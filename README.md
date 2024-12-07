ссылка на сайт: https://purrweb-dev.vercel.app/
### Было сказано:
*Верстка должна быть сделана с помощью чистых HTML, CSS и JS без использования ***сторонних*** библиотек или фреймворков.*

Для удобства я написал небольшой скрипт (🙃), с помощью которого смог разделить HTML на компоненты. Файлы:

* `./js/NativeComponents.js`
* `./index_NativeComponents.html`

**Настройка**
  
создаем родительский элемент с атрибутами 
> ***id="root"*** (обязательно)\
> ***data-folder="./components"*** // указываем путь где хранятся компоненты (по default "./imports")\
> ***data-modules="[./js/myScript_1.js, ./js/myScript_2.js]"*** // загрузжаем скрипты

**Добавление дочерних элементов к компонентам**

Чтобы опракинуть дочерние элементы в компонент, вы можете использовать элемент `<slot/>`(имеется проверка на тег).  Это позволяет размещать содержимое в структуру родительского компонента.

**1.  `./index.html`**

```html
<div id="root" data-folder="./components" data-modules="[./js/index.js]">
  // указываем путь к файлу: `data-component=""
  // интерпретация: ./components/sections/Hero.html
  <embed data-component="sections/Hero"/> // можно казать любой тег
</div>
```

**2.  `./components/sections/Hero.html`**
```html
<section>
  <button data-component="Button">😉<button/>
</section>
```
**3.  `./components/sections/Button.html`**
```html
<button style="color: red;">
  <slot/>
</button>
```

<img src="https://github.com/user-attachments/assets/0ecff731-2ad8-4460-9a5b-54693451e1d8" width="1200"/>
