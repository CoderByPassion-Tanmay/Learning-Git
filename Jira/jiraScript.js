     
   
let body = document.querySelector("body");
let Allcolors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
const colors = ["blue", "green", "yellow", "aqua"];
// let allDivs = document.querySelectorAll(".ticketbox");

// console.log(ticketHeader);

// xdhfhxdhdxhbdxfh
console.log(Allcolors);
let addbtn =document.querySelector(".fa-plus");
console.log(addbtn);


addbtn.addEventListener("click",function ()
{

    // create a ticket
      creatTicket();
})




// let uid = 458;
function creatTicket()
{
     //make a div dynamically.
     var uuid = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(uuid);
      let ticket = document.createElement("div");
        ticket.setAttribute("class","ticketbox");
        ticket.innerHTML = `
        <div class="ticket_header green"></div>
        <div class="ticketContent">
            <div class="uid">
            #${uuid}
            </div>
       <textarea name=""></textarea>  
        </div>`
    
        main.appendChild(ticket);
        let ticketHeader =document.querySelector(".ticket_header");

        ticketHeader.addEventListener("click" ,changeColor );

        function changeColor(e)
        {
    //       let elem = e.currentTarget;
    //       // all classes present in that element
    //       console.log(elem);
    //       let FirstClass = elem.classList[0];

    //       FirstClass.style.backgroundColor = "green" ;
        
    //  console.log("terter glgk;sdfg")
    let header = e.currentTarget;
    //    i have html element and classes can be used to identify that
    //  element and set another class to modify it's behaviour 
    // list of all the classes on an element 
    let classes = header.classList;
    let cColor = classes[1];
    // alert(cColor);
    // check idx -> next element uspe put 
    let cIdx = 0;
    for (let i = 0; i < colors.length; i++) {
        if (cColor == colors[i]) {
            cIdx = i;
            break;
        }
    }
    let nextIdx = (cIdx + 1) % colors.length;
    let nextColor = colors[nextIdx];
    // classes[1]=nextColor;
    
    classes.remove(cColor);
    classes.add(nextColor);      
  }
      // console.log(tickerHeader);



}














// why we are using loop here
// for(let i =0 ;i<Allcolors.length ; i++)
// {
//     Allcolors[i].addEventListener("click" , changeColor)
// }

// function changeColor(e){
// // console.log(e.currentTarget)
// let elem = e.currentTarget;
// // all classes present in that element
// let allClasses = elem.classList;

// console.log(allClasses);

// let color = allClasses[1];
// console.log(color);

// main.style.backgroundColor = color;

// }
