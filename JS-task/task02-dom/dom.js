function changeOuterLinks() {

const outerLinks = document.querySelectorAll("nav#link-list a");
outerLinks.forEach( item => {
        if (item.innerHTML.includes("outer-link")) {
            item.setAttribute("target", "_blank");
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })

        document.querySelectorAll("nav").forEach (item=> {
            item.style.display = "flex";
            item.style.flexDirection = "column";
            item.style.margin = "0px auto";
            item.style.width = "30%";
            item.style.border = "1px solid blue";
            item.style.padding = "16px";

        })
}



export { changeOuterLinks };