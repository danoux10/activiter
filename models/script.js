const graphContent = document.getElementById('graph-content');
const pie = document.getElementById('pie');
const bar = document.getElementById('bar');

const tableContent = document.getElementById('table-content');
const table = document.getElementById('table');
//
const btnPie = document.getElementById('btnPie');
const btnBar = document.getElementById('btnBar');
const btnTable = document.getElementById('btnTable');

btnPie.classList.add('active');
btnBar.classList.add('active');
btnTable.classList.add('active');

table.classList.add('w-full');
table.classList.add('h-full');

if(btnPie.classList.contains('active')&& !btnBar.classList.contains('active')&&!btnTable.classList.contains('active')){
    graphContent.classList.add('h-full');
    pie.classList.add('w-full','h-full','scale-100');

    bar.classList.add('w-0');
    bar.classList.add('h-0');
    bar.classList.add('scale-0');

    tableContent.classList.add('w-0');
    tableContent.classList.add('h-0');
    tableContent.classList.add('scale-0');
}

if(btnPie.classList.contains('active')&& btnBar.classList.contains('active')&& !btnTable.classList.contains('active')){
    graphContent.classList.add('h-full');
    pie.classList.add('w-1/2');
    pie.classList.add('h-full');
    pie.classList.add('scale-100');

    bar.classList.add('w-1/2');
    bar.classList.add('h-full');
    bar.classList.add('scale-100');

    tableContent.classList.add('w-0');
    tableContent.classList.add('h-0');
    tableContent.classList.add('scale-0');
}

if(btnPie.classList.contains('active')&& !btnBar.classList.contains('active')&& btnTable.classList.contains('active')){
    graphContent.classList.add('h-1/2');
    pie.classList.add('w-full');
    pie.classList.add('h-full');
    pie.classList.add('scale-100');

    bar.classList.add('w-0');
    bar.classList.add('h-0');
    bar.classList.add('scale-0');

    tableContent.classList.add('h-1/2');
    tableContent.classList.add('scale-100');
}

if(!btnPie.classList.contains('active')&& btnBar.classList.contains('active')&& btnTable.classList.contains('active')){
    graphContent.classList.add('h-1/2');
    pie.classList.add('w-0');
    pie.classList.add('h-0');
    pie.classList.add('scale-0');

    bar.classList.add('w-full');
    bar.classList.add('h-full');
    bar.classList.add('scale-1000');

    tableContent.classList.add('h-1/2');
    tableContent.classList.add('scale-100');
}

if(btnPie.classList.contains('active')&& btnBar.classList.contains('active')&& btnTable.classList.contains('active')){
    graphContent.classList.add('h-1/2');
    pie.classList.add('w-1/2');
    pie.classList.add('h-full');
    pie.classList.add('scale-100');

    bar.classList.add('w-1/2');
    bar.classList.add('h-full');
    bar.classList.add('scale-100');

    tableContent.classList.add('h-1/2');
    tableContent.classList.add('scale-100');
}


btnPie.addEventListener('click',togglePie);
btnBar.addEventListener('click',toggleBar);
btnTable.addEventListener('click',toggleTable);



// btnBar.classList.add('active');

// function togglePie(){
//     if(btnPie.classList.contains('active')){
//         pie.classList.add('close');
//         btnPie.classList.remove('active');
//         graphContent.classList.remove('close');
//         table.classList.remove('over');
//     }else{
//         pie.classList.remove('close');
//         btnPie.classList.add('active');
//         graphContent.classList.remove('close');
//         table.classList.remove('over');
//     }
//     if(!btnPie.classList.contains('active')&&!btnBar.classList.contains('active')){
//         pie.classList.add('close');
//         graphContent.classList.toggle('close');
//         table.classList.toggle('over');
//     }else{
//         graphContent.classList.remove('over');
//     }
//     if(btnTable.classList.contains('active')){
//         graphContent.classList.remove('over');
//     }
// }
//
// function toggleBar(){
//     if(btnBar.classList.contains('active')){
//         bar.classList.add('close');
//         btnBar.classList.remove('active');
//         graphContent.classList.remove('close');
//         table.classList.remove('over');
//     }else{
//         bar.classList.remove('close');
//         btnBar.classList.add('active');
//         graphContent.classList.remove('close');
//         table.classList.remove('over');
//     }
//     if(!btnPie.classList.contains('active')&& !btnBar.classList.contains('active')){
//         bar.classList.add('close');
//         graphContent.classList.toggle('close');
//         table.classList.toggle('over');
//     }
//     if(!btnTable.classList.contains('active')){
//         graphContent.classList.remove('over');
//     }
// }
//
// function toggleTable(){
//     if(btnTable.classList.contains('active')){
//         table.classList.add('close');
//         btnTable.classList.remove('active');
//         graphContent.classList.toggle('over');
//     }else {
//         table.classList.remove('close');
//         btnTable.classList.add('active');
//         graphContent.classList.toggle('over');
//     }
// }