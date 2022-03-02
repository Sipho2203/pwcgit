function toggleDescription(){
    let briefCollapse= document.getElementById('briefDescription');
    let fullCollapse =document.getElementById('fullDescription')
    
    let bsCollapseBrief =new bootstrap.Collapse(briefCollapse);
    let bsCollapseFull =new bootstrap.Collapse(fullCollapse);

    bsCollapseBrief.toggle();
    bsCollapseFull.toggle();
}
