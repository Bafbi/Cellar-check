//  SELECTEURS
const ADDButton = document.getElementById("add_button");
const ADDInput = document.getElementById("add_input");
const ADDSelect = document.getElementById("add_select");
const BOTTLEList = document.querySelector(".list");
const CSSVar = document.querySelector(":root");

//  ECOUTEURS
document.addEventListener("DOMContentLoaded", getBottles);
ADDButton.addEventListener("click", displayInput);
BOTTLEList.addEventListener("click", changeBottle);
ADDSelect.addEventListener("change", changeliquid);

//  FUNCTIONS
function displayInput(event) {
    event.preventDefault();
    let newId = Date.now();
    //Create div
    const bottleDiv = document.createElement("div");
    bottleDiv.classList.add("bottle");
    bottleDiv.setAttribute("id", newId);
    //Add glass icon
    const wineIcon = document.createElement("button");
    wineIcon.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g><g><path fill=${getComputedStyle(
        CSSVar
    ).getPropertyValue(
        "--liquid-wine-color"
    )} d="M37 12.5C37 13.8789 36.6896 15.2443 36.0866 16.5182C35.4835 17.7921 34.5996 18.9496 33.4853 19.9246C32.371 20.8996 31.0481 21.6731 29.5922 22.2007C28.1363 22.7284 26.5759 23 25 23C23.4241 23 21.8637 22.7284 20.4078 22.2007C18.9519 21.6731 17.629 20.8996 16.5147 19.9246C15.4004 18.9496 14.5165 17.7921 13.9134 16.5182C13.3104 15.2443 13 13.8789 13 12.5L25 12.5H37Z"fill-opacity="1" /></g><g class="glass"><path opacity="0.8"d="M24.4816 43.3143C24.8002 43.1211 25.1998 43.1211 25.5184 43.3143L30.6001 46.3949C31.4653 46.9194 31.0935 48.25 30.0817 48.25H19.9183C18.9065 48.25 18.5347 46.9194 19.3999 46.3949L24.4816 43.3143Z" /><rect opacity="0.8" x="24" y="23" width="2" height="22" /><path opacity="0.4"d="M39 7C39.5523 7 40.0027 7.44815 39.9741 7.99969C39.7588 12.1438 38.211 16.0691 35.6066 19.0208C32.7936 22.2089 28.9782 24 25 24C21.0218 24 17.2064 22.2089 14.3934 19.0208C11.789 16.0691 10.2412 12.1438 10.0259 7.99969C9.99729 7.44815 10.4477 7 11 7L25 7H39Z" /></g></g></svg>`;
    wineIcon.classList.add("wine-glass");
    bottleDiv.classList.add(ADDSelect.value);
    bottleDiv.appendChild(wineIcon);
    //Create li
    const newBottle = document.createElement("li");
    newBottle.innerText = ADDInput.value;
    newBottle.classList.add("bottle-item");
    bottleDiv.appendChild(newBottle);
    //Add bottle in localstorage
    saveLocalBottles(newId, ADDInput.value, ADDSelect.value, getComputedStyle(CSSVar).getPropertyValue("--liquid-wine-color"));
    //Add bottle button
    const addBottle = document.createElement("button");
    addBottle.innerHTML =
        '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5763 15.3609C28.7142 13.3598 28.2703 11.1983 28.2727 9.01326V5C28.7246 5 29.0909 4.62687 29.0909 4.16667V0.833333C29.0909 0.373128 28.7246 0 28.2727 0H21.7273C21.2754 0 20.9091 0.373128 20.9091 0.833333V4.16667C20.9091 4.62687 21.2754 5 21.7273 5V9.01326C21.7297 11.1983 21.2858 13.3598 20.4241 15.3609L18.1274 20.7092C16.7203 23.9726 15.9956 27.4984 16 31.0624V49.1667C16 49.6269 16.3664 50 16.8182 50H33.1818C33.6336 50 34 49.6269 34 49.1667V31.0624C34.0044 27.4984 33.2801 23.9726 31.8726 20.7092L29.5763 15.3609ZM22.5455 1.66667H27.4545V3.33333H22.5455V1.66667ZM32.3636 48.3333H17.6364V31.0624C17.6324 27.7279 18.3099 24.4291 19.6263 21.3757L21.923 16.0274C22.8754 13.8167 23.366 11.4278 23.3636 9.01326V5H26.6364V9.01326C26.634 11.4278 27.1246 13.8167 28.0774 16.0274L30.3737 21.3757C31.6901 24.4291 32.3676 27.7279 32.3636 31.0624V48.3333Z" fill="black"/><path d="M26.7257 21.1283L27.419 22.7116C27.7771 23.5323 28.0823 24.3746 28.3333 25.234C28.4375 25.5892 28.763 25.8333 29.1333 25.8333C29.2127 25.8333 29.2916 25.8219 29.3677 25.8C29.8096 25.671 30.0627 25.2075 29.9333 24.766C29.6611 23.8387 29.3298 22.9297 28.9425 22.0443L28.2491 20.461C28.1364 20.1786 27.8788 19.9805 27.5773 19.9434C27.2754 19.9064 26.978 20.0366 26.7997 20.2828C26.6219 20.5294 26.5926 20.8529 26.7224 21.1275L26.7257 21.1283Z" fill="black"/><path d="M25.6511 18.6666C25.7833 18.9705 26.0836 19.1667 26.4152 19.1667C26.53 19.1671 26.6435 19.1431 26.7485 19.0967C27.1696 18.9119 27.3617 18.4212 27.1773 18.0001L26.6069 16.6935C26.414 16.2866 25.9326 16.1064 25.52 16.2866C25.1074 16.4665 24.9125 16.9421 25.0802 17.36L25.6511 18.6666Z" fill="black"/><path d="M20 29.1667C19.5398 29.1667 19.1667 29.5398 19.1667 30V44.1667C19.1667 44.6269 19.5398 45 20 45H30C30.4602 45 30.8334 44.6269 30.8334 44.1667V30C30.8334 29.5398 30.4602 29.1667 30 29.1667H20ZM29.1667 43.3333H20.8334V30.8333H29.1667V43.3333Z" fill="black"/></svg>';
    addBottle.classList.add("add-bottle");
    bottleDiv.appendChild(addBottle);
    //Number of bottle
    const numberBottle = document.createElement("li");
    numberBottle.innerText = 1;
    numberBottle.classList.add("bottle-number");
    bottleDiv.appendChild(numberBottle);
    //Remove bottle button
    const removeBottle = document.createElement("button");
    removeBottle.innerHTML =
        '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5763 15.3609C28.7142 13.3598 28.2703 11.1983 28.2727 9.01326V5C28.7246 5 29.0909 4.62687 29.0909 4.16667V0.833333C29.0909 0.373128 28.7246 0 28.2727 0H21.7273C21.2754 0 20.9091 0.373128 20.9091 0.833333V4.16667C20.9091 4.62687 21.2754 5 21.7273 5V9.01326C21.7297 11.1983 21.2858 13.3598 20.4241 15.3609L18.1274 20.7092C16.7203 23.9726 15.9956 27.4984 16 31.0624V49.1667C16 49.6269 16.3664 50 16.8182 50H33.1818C33.6336 50 34 49.6269 34 49.1667V31.0624C34.0044 27.4984 33.2801 23.9726 31.8726 20.7092L29.5763 15.3609ZM22.5455 1.66667H27.4545V3.33333H22.5455V1.66667ZM32.3636 48.3333H17.6364V31.0624C17.6324 27.7279 18.3099 24.4291 19.6263 21.3757L21.923 16.0274C22.8754 13.8167 23.366 11.4278 23.3636 9.01326V5H26.6364V9.01326C26.634 11.4278 27.1246 13.8167 28.0774 16.0274L30.3737 21.3757C31.6901 24.4291 32.3676 27.7279 32.3636 31.0624V48.3333Z" fill="black"/><path d="M26.7257 21.1283L27.419 22.7116C27.7771 23.5323 28.0823 24.3746 28.3333 25.234C28.4375 25.5892 28.763 25.8333 29.1333 25.8333C29.2127 25.8333 29.2916 25.8219 29.3677 25.8C29.8096 25.671 30.0627 25.2075 29.9333 24.766C29.6611 23.8387 29.3298 22.9297 28.9425 22.0443L28.2491 20.461C28.1364 20.1786 27.8788 19.9805 27.5773 19.9434C27.2754 19.9064 26.978 20.0366 26.7997 20.2828C26.6219 20.5294 26.5926 20.8529 26.7224 21.1275L26.7257 21.1283Z" fill="black"/><path d="M25.6511 18.6666C25.7833 18.9705 26.0836 19.1667 26.4152 19.1667C26.53 19.1671 26.6435 19.1431 26.7485 19.0967C27.1696 18.9119 27.3617 18.4212 27.1773 18.0001L26.6069 16.6935C26.414 16.2866 25.9326 16.1064 25.52 16.2866C25.1074 16.4665 24.9125 16.9421 25.0802 17.36L25.6511 18.6666Z" fill="black"/><path d="M20 29.1667C19.5398 29.1667 19.1667 29.5398 19.1667 30V44.1667C19.1667 44.6269 19.5398 45 20 45H30C30.4602 45 30.8334 44.6269 30.8334 44.1667V30C30.8334 29.5398 30.4602 29.1667 30 29.1667H20ZM29.1667 43.3333H20.8334V30.8333H29.1667V43.3333Z" fill="black"/></svg>';
    removeBottle.classList.add("remove-bottle");
    bottleDiv.appendChild(removeBottle);
    //Add bottleDiv at bottleList
    BOTTLEList.appendChild(bottleDiv);
    ADDInput.value = "";
}

function changeBottle(event) {
    const item = event.target;
    if (item.classList[0] === "add-bottle") {
        item.parentElement.childNodes[3].innerText++;
    } else if (item.classList[0] === "remove-bottle") {
        if (item.parentElement.childNodes[3].innerText == 1) {
            item.parentElement.remove();
            removeLocalBottles(item.parentElement);
        } else {
            item.parentElement.childNodes[3].innerText--;
        }
    }
}

function changeliquid(event) {
    switch (ADDSelect.value) {
        case "all":
            CSSVar.style.setProperty("--liquid-wine-color", "");
            break;
        case "white":
            CSSVar.style.setProperty("--liquid-wine-color", "#F7FDA7");
            break;
        case "red":
            CSSVar.style.setProperty("--liquid-wine-color", "#76163B");
            break;
        case "rosé":
            CSSVar.style.setProperty("--liquid-wine-color", "#EF576C");
            break;
    }

    const bottles = BOTTLEList.childNodes;
    bottles.forEach(function (bottle) {
        switch (event.target.value) {
            case "all":
                bottle.style.display = "flex";
                break;
            case "white":
                if (bottle.classList.contains("white")) {
                    bottle.style.display = "flex";
                } else {
                    bottle.style.display = "none";
                }
                break;
            case "red":
                if (bottle.classList.contains("red")) {
                    bottle.style.display = "flex";
                } else {
                    bottle.style.display = "none";
                }
                break;
            case "rosé":
                if (bottle.classList.contains("rosé")) {
                    bottle.style.display = "flex";
                } else {
                    bottle.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalBottles(id, name, liquid, color) {
    //Checker si il y a des items existants
    const bottle = { id: id, name: name, liquid: liquid, color: color, number: 1 };
    let bottles;
    if (localStorage.getItem("bottles") === null) {
        bottles = [];
    } else {
        bottles = JSON.parse(localStorage.getItem("bottles"));
    }
    bottles.push(bottle);
    localStorage.setItem("bottles", JSON.stringify(bottles));
}

function getBottles() {
    let bottles;
    if (localStorage.getItem("bottles") === null) {
        bottles = [];
    } else {
        bottles = JSON.parse(localStorage.getItem("bottles"));
    }
    bottles.forEach((bottle) => {
        //Create div
        const bottleDiv = document.createElement("div");
        bottleDiv.classList.add("bottle");
        bottleDiv.setAttribute("id", bottle.id);
        //Add glass icon
        const wineIcon = document.createElement("button");
        wineIcon.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g><g><path fill=${bottle.color} d="M37 12.5C37 13.8789 36.6896 15.2443 36.0866 16.5182C35.4835 17.7921 34.5996 18.9496 33.4853 19.9246C32.371 20.8996 31.0481 21.6731 29.5922 22.2007C28.1363 22.7284 26.5759 23 25 23C23.4241 23 21.8637 22.7284 20.4078 22.2007C18.9519 21.6731 17.629 20.8996 16.5147 19.9246C15.4004 18.9496 14.5165 17.7921 13.9134 16.5182C13.3104 15.2443 13 13.8789 13 12.5L25 12.5H37Z"fill-opacity="1" /></g><g class="glass"><path opacity="0.8"d="M24.4816 43.3143C24.8002 43.1211 25.1998 43.1211 25.5184 43.3143L30.6001 46.3949C31.4653 46.9194 31.0935 48.25 30.0817 48.25H19.9183C18.9065 48.25 18.5347 46.9194 19.3999 46.3949L24.4816 43.3143Z" /><rect opacity="0.8" x="24" y="23" width="2" height="22" /><path opacity="0.4"d="M39 7C39.5523 7 40.0027 7.44815 39.9741 7.99969C39.7588 12.1438 38.211 16.0691 35.6066 19.0208C32.7936 22.2089 28.9782 24 25 24C21.0218 24 17.2064 22.2089 14.3934 19.0208C11.789 16.0691 10.2412 12.1438 10.0259 7.99969C9.99729 7.44815 10.4477 7 11 7L25 7H39Z" /></g></g></svg>`;
        wineIcon.classList.add("wine-glass");
        bottleDiv.classList.add(bottle.liquid);
        bottleDiv.appendChild(wineIcon);
        //Create li
        const newBottle = document.createElement("li");
        newBottle.innerText = bottle.name;
        newBottle.classList.add("bottle-item");
        bottleDiv.appendChild(newBottle);
        //Add bottle button
        const addBottle = document.createElement("button");
        addBottle.innerHTML =
            '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5763 15.3609C28.7142 13.3598 28.2703 11.1983 28.2727 9.01326V5C28.7246 5 29.0909 4.62687 29.0909 4.16667V0.833333C29.0909 0.373128 28.7246 0 28.2727 0H21.7273C21.2754 0 20.9091 0.373128 20.9091 0.833333V4.16667C20.9091 4.62687 21.2754 5 21.7273 5V9.01326C21.7297 11.1983 21.2858 13.3598 20.4241 15.3609L18.1274 20.7092C16.7203 23.9726 15.9956 27.4984 16 31.0624V49.1667C16 49.6269 16.3664 50 16.8182 50H33.1818C33.6336 50 34 49.6269 34 49.1667V31.0624C34.0044 27.4984 33.2801 23.9726 31.8726 20.7092L29.5763 15.3609ZM22.5455 1.66667H27.4545V3.33333H22.5455V1.66667ZM32.3636 48.3333H17.6364V31.0624C17.6324 27.7279 18.3099 24.4291 19.6263 21.3757L21.923 16.0274C22.8754 13.8167 23.366 11.4278 23.3636 9.01326V5H26.6364V9.01326C26.634 11.4278 27.1246 13.8167 28.0774 16.0274L30.3737 21.3757C31.6901 24.4291 32.3676 27.7279 32.3636 31.0624V48.3333Z" fill="black"/><path d="M26.7257 21.1283L27.419 22.7116C27.7771 23.5323 28.0823 24.3746 28.3333 25.234C28.4375 25.5892 28.763 25.8333 29.1333 25.8333C29.2127 25.8333 29.2916 25.8219 29.3677 25.8C29.8096 25.671 30.0627 25.2075 29.9333 24.766C29.6611 23.8387 29.3298 22.9297 28.9425 22.0443L28.2491 20.461C28.1364 20.1786 27.8788 19.9805 27.5773 19.9434C27.2754 19.9064 26.978 20.0366 26.7997 20.2828C26.6219 20.5294 26.5926 20.8529 26.7224 21.1275L26.7257 21.1283Z" fill="black"/><path d="M25.6511 18.6666C25.7833 18.9705 26.0836 19.1667 26.4152 19.1667C26.53 19.1671 26.6435 19.1431 26.7485 19.0967C27.1696 18.9119 27.3617 18.4212 27.1773 18.0001L26.6069 16.6935C26.414 16.2866 25.9326 16.1064 25.52 16.2866C25.1074 16.4665 24.9125 16.9421 25.0802 17.36L25.6511 18.6666Z" fill="black"/><path d="M20 29.1667C19.5398 29.1667 19.1667 29.5398 19.1667 30V44.1667C19.1667 44.6269 19.5398 45 20 45H30C30.4602 45 30.8334 44.6269 30.8334 44.1667V30C30.8334 29.5398 30.4602 29.1667 30 29.1667H20ZM29.1667 43.3333H20.8334V30.8333H29.1667V43.3333Z" fill="black"/></svg>';
        addBottle.classList.add("add-bottle");
        bottleDiv.appendChild(addBottle);
        //Number of bottle
        const numberBottle = document.createElement("li");
        numberBottle.innerText = bottle.number;
        numberBottle.classList.add("bottle-number");
        bottleDiv.appendChild(numberBottle);
        //Remove bottle button
        const removeBottle = document.createElement("button");
        removeBottle.innerHTML =
            '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5763 15.3609C28.7142 13.3598 28.2703 11.1983 28.2727 9.01326V5C28.7246 5 29.0909 4.62687 29.0909 4.16667V0.833333C29.0909 0.373128 28.7246 0 28.2727 0H21.7273C21.2754 0 20.9091 0.373128 20.9091 0.833333V4.16667C20.9091 4.62687 21.2754 5 21.7273 5V9.01326C21.7297 11.1983 21.2858 13.3598 20.4241 15.3609L18.1274 20.7092C16.7203 23.9726 15.9956 27.4984 16 31.0624V49.1667C16 49.6269 16.3664 50 16.8182 50H33.1818C33.6336 50 34 49.6269 34 49.1667V31.0624C34.0044 27.4984 33.2801 23.9726 31.8726 20.7092L29.5763 15.3609ZM22.5455 1.66667H27.4545V3.33333H22.5455V1.66667ZM32.3636 48.3333H17.6364V31.0624C17.6324 27.7279 18.3099 24.4291 19.6263 21.3757L21.923 16.0274C22.8754 13.8167 23.366 11.4278 23.3636 9.01326V5H26.6364V9.01326C26.634 11.4278 27.1246 13.8167 28.0774 16.0274L30.3737 21.3757C31.6901 24.4291 32.3676 27.7279 32.3636 31.0624V48.3333Z" fill="black"/><path d="M26.7257 21.1283L27.419 22.7116C27.7771 23.5323 28.0823 24.3746 28.3333 25.234C28.4375 25.5892 28.763 25.8333 29.1333 25.8333C29.2127 25.8333 29.2916 25.8219 29.3677 25.8C29.8096 25.671 30.0627 25.2075 29.9333 24.766C29.6611 23.8387 29.3298 22.9297 28.9425 22.0443L28.2491 20.461C28.1364 20.1786 27.8788 19.9805 27.5773 19.9434C27.2754 19.9064 26.978 20.0366 26.7997 20.2828C26.6219 20.5294 26.5926 20.8529 26.7224 21.1275L26.7257 21.1283Z" fill="black"/><path d="M25.6511 18.6666C25.7833 18.9705 26.0836 19.1667 26.4152 19.1667C26.53 19.1671 26.6435 19.1431 26.7485 19.0967C27.1696 18.9119 27.3617 18.4212 27.1773 18.0001L26.6069 16.6935C26.414 16.2866 25.9326 16.1064 25.52 16.2866C25.1074 16.4665 24.9125 16.9421 25.0802 17.36L25.6511 18.6666Z" fill="black"/><path d="M20 29.1667C19.5398 29.1667 19.1667 29.5398 19.1667 30V44.1667C19.1667 44.6269 19.5398 45 20 45H30C30.4602 45 30.8334 44.6269 30.8334 44.1667V30C30.8334 29.5398 30.4602 29.1667 30 29.1667H20ZM29.1667 43.3333H20.8334V30.8333H29.1667V43.3333Z" fill="black"/></svg>';
        removeBottle.classList.add("remove-bottle");
        bottleDiv.appendChild(removeBottle);
        //Add bottleDiv at bottleList
        BOTTLEList.appendChild(bottleDiv);
    });
}

function removeLocalBottles(bottle) {
    let bottles;
    if (localStorage.getItem("bottles") === null) {
        bottles = [];
    } else {
        bottles = JSON.parse(localStorage.getItem("bottles"));
    }
    const bottleIndex = bottle.id;
    bottles.splice(bottles.indexOf(bottles.filter((bottle) => bottle.id == bottleIndex)[0]), 1);
    localStorage.setItem("bottles", JSON.stringify(bottles));
}
