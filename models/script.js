const graphContent = document.getElementById('graph-content');
const pie = document.getElementById('pie');
const bar = document.getElementById('bar');
const table = document.getElementById('table');
//
const btnPie = document.getElementById('btnPie');
const btnBar = document.getElementById('btnBar');
const btnTable = document.getElementById('btnTable');

btnPie.classList.add('active');
btnTable.classList.add('active');
// btnBar.classList.add('active');
bar.classList.add('close');
function togglePie(){
    if(btnPie.classList.contains('active')){
        pie.classList.add('close');
        btnPie.classList.remove('active');
        graphContent.classList.remove('close');
        table.classList.remove('over');
    }else{
        pie.classList.remove('close');
        btnPie.classList.add('active');
        graphContent.classList.remove('close');
        table.classList.remove('over');
    }
    if(!btnPie.classList.contains('active')&&!btnBar.classList.contains('active')){
        pie.classList.add('close');
        graphContent.classList.toggle('close');
        table.classList.toggle('over');
    }else{
        graphContent.classList.remove('over');
    }
    if(btnTable.classList.contains('active')){
        graphContent.classList.remove('over');
    }
}

function toggleBar(){
    if(btnBar.classList.contains('active')){
        bar.classList.add('close');
        btnBar.classList.remove('active');
        graphContent.classList.remove('close');
        table.classList.remove('over');
    }else{
        bar.classList.remove('close');
        btnBar.classList.add('active');
        graphContent.classList.remove('close');
        table.classList.remove('over');
    }
    if(!btnPie.classList.contains('active')&& !btnBar.classList.contains('active')){
        bar.classList.add('close');
        graphContent.classList.toggle('close');
        table.classList.toggle('over');
    }
    if(!btnTable.classList.contains('active')){
        graphContent.classList.remove('over');
    }
}

function toggleTable(){
    if(btnTable.classList.contains('active')){
        table.classList.add('close');
        btnTable.classList.remove('active');
        graphContent.classList.toggle('over');
    }else {
        table.classList.remove('close');
        btnTable.classList.add('active');
        graphContent.classList.toggle('over');
    }
}

btnPie.addEventListener('click',togglePie);
btnBar.addEventListener('click',toggleBar);
btnTable.addEventListener('click',toggleTable);
// if(btnPie.classList.contains('active')){
//     pie.classList.add('close');
//     btnPie.classList.remove('active');
//     graphContent.classList.remove('close');
// }else{
//     pie.classList.remove('close');
//     btnPie.classList.add('active');
// }