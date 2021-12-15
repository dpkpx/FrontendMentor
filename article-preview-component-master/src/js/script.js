
const style = document.querySelector('.card--active').style;

document.querySelector(".card__bottom__about__share").addEventListener("focusin", () => {
    style.display = "flex";


    document.querySelector(".card__bottom__about__share").addEventListener("focusout", () => {
        style.display = "none";
    },{once:true})
})