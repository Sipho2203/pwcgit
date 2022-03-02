{/* <button onclick= "ChangeTheme()"> Change Theme </button>

function ChangeTheme() {
    let colours = ["red","green", "blue"];
    for (i = 0 ; i <colours.length; i++) {
      //console.log(colours[i]);
        document.body.style.backgroundColor = colours[i];

    }
;} */}
function toggleDescription(){
  let briefCollapse= document.getElementById('briefDescription');
  let fullCollapse =document.getElementById('fullDescription')
  
  let bsCollapseBrief =new bootstrap.Collapse(briefCollapse);
  let bsCollapseFull =new bootstrap.Collapse(fullCollapse);

  bsCollapseBrief.toggle();
  bsCollapseFull.toggle();
}
