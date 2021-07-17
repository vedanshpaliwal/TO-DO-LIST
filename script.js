console.log('these is working');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    addtxt.value="";
    console.log(notesobj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html ="";
    notesobj.forEach(function(element,index) {
        html +=` <div class="card my-2 mx-2 notecard" style="width: 18rem;">
            
        <div class="card-body">
          <h5 class="card-title">TO DO-S  ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenode(this.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>`;
    });
    let noteselm = document.getElementById('notes');
    if(notesobj.length != 0){
        noteselm.innerHTML=html;
    }
    else{
        noteselm.innerHTML = `Nothing to show! Use add section to add`;
    }
}
function deletenode(index) {
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj))
    shownotes();
}
let search = document.getElementById('searchtxt');
search.addEventListener('input',()=>{
    let inputval = search.value;
    console.log("input event fired");
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0];
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none"

        }
        // console.log(cardtxt)
    })

})