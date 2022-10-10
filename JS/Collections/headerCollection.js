export const objHeaderDom = {
    // -> Title
    title: document.querySelector("#page__title"),
    // -> Div
    divSearchBox: document.querySelector("#search"),
    divTimesWrapper: document.querySelector("#search__clear--hidden"),
    divSearchResults: document.querySelector("#search__results"),
    // -> Link (a)
    linkHome: document.querySelectorAll(".header__link > a")[1],
    linkList: document.querySelector("#header__user--hidden > a"),
    // -> Button
    buttonLogin: document.querySelector("#header__button"),
    // -> Form
    formSearch: document.querySelector("#search__form"),
    // -> Select 
    selectSearch: document.querySelector("#search__select"),
    // -> Input
    inputSearch: document.querySelector("#search__input"),
    // -> Icon
    iconSearchHeader: document.querySelectorAll(".fa-search")[0],
    iconSearch: document.querySelectorAll(".fa-search")[1],
    iconTimesSearch: document.querySelectorAll(".fa-times")[0]
}