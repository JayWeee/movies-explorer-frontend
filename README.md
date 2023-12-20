# Movies Explorer 

_Movies Explorer - сервис по поиску фильмов + портфолио._  

Главная страница представляет собой портфолио с ссылками на репозитории проектов, информацией обо мне, а также о пройденном пути при выполнении проекта.  

На сайте реализована регистрация и авторизация пользователей с использованием JWT токена. После авторизации пользователю доступен поиск фильмов и добавление их в избранное.  
Для всех элементов ввода реализована валидация с подсказками и ошибками.  
При неверном пути в ссылке открывается страница 404

***

Проект создавался в рамках курса Веб-разработчик от компании [Яндекс.Практикум](https://practicum.yandex.ru/).  
Ссылка на проект: https://films-explorer.nomoreparties.co  
Ссылка на мекет - https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/light-1?node-id=1%3A8005&mode=dev  
Ссылка на backend - https://github.com/JayWeee/movies-explorer-api

## Технологии:
- React
- JSX
- Rest API
- HTML
- CSS
- Flexbox
- Grid
- BEM Nested
- Express
- MongoDB

## Установка:
Для установки необходимо скопировать репозиторий:
```Bash
git clone https://github.com/JayWeee/movies-explorer-frontend.git
```
Установка зависимостей:
```Bash
cd movies-explorer-frontend
npm i
```
Сборка проекта:
```Bash
npm run build
```
Запуск локального сервера:
```Bash
npm start
```
Файлы API храняться по пути: src/utils/MainApi.js и src/utils/MoviesApi.js  
Сайт откроется в браузере автоматически. Если этого не произошло, в адресной строке введите http://localhost:3000
