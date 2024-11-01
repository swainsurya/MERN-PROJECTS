export const closeDrawer = () => {
    let ele = document.querySelector(".open_drawer");
    ele.style.width = "0"
    ele.style.visibility = "hidden"
}