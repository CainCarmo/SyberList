export const objHeaderDOM = {
    // -> Title
    Title: document.querySelector("#page__title"),
    // -> Divs
    DivSearchBox:     document.querySelector("#search"),
    DivTimesWrapper:  document.querySelector("#search__clear--hidden"),
    DivSearchResults: document.querySelector("#search__results"),
    // -> Form
    FormSearch: document.querySelector("#search__form"),
    // -> Links
    LinkHome: document.querySelectorAll(".header__link > a")[1],
    LinkList: document.querySelector("#header__user--hidden > a"),
    // -> Button
    ButtonLogin: document.querySelector("#header__button"),
    // -> Select 
    SelectSearch: document.querySelector("#search__select"),
    // -> Input
    InputSearch: document.querySelector("#search__input"),
    // -> Icons
    IconSearchHeader: document.querySelectorAll(".fa-search")[0],
    IconSearchForm:   document.querySelectorAll(".fa-search")[1],
    IconTimesSearch:  document.querySelectorAll(".fa-times")[0]
}