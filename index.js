const username=document.getElementById("user-name")
const date=document.getElementById("user-date")
const numberofguests=document.getElementById("user-text")
const button=document.getElementById("user-button")
const usertable=document.getElementById("table-element")

function bookevent(){
    const table=document.createElement("tr")

    const user=username.value 
    const dat=date.value
    const guest=numberofguests.value

    const namecell=document.createElement("td");
    namecell.textContent=user;

    const datecell=document.createElement("td")
    datecell.textContent=dat;

    const guestcell=document.createElement("td")
    guestcell.textContent=guest;

    table.appendChild(namecell)
    table.appendChild(datecell)
    table.appendChild(guestcell)

    usertable.appendChild(table)

}

button.addEventListener("click", bookevent)