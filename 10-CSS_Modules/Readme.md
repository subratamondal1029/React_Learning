# css module in react

lest suppose i want to use a different style in app.jsx's button and button.jsx's button with same class But if i import style in app.jsx it will overWrite the button.jsx style sheet in this case we have to use css as module

## how to use css as module

1. we have to create a css file with `style.module.css`
2. we have to import css as Styles(commonlly use) object 
``` javascript
    import Styles from './Button.module.css'
    
    // styles is a object that have values eg. we have a style with class of .button we have to use like 

    <button className={styles.button}>Hello</button>
```
