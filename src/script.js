const title = document.querySelector('title');

//link toggle section
//sublink init navbar btn
const btnViewGraph = document.getElementById('viewGraph');
const btnViewActivity = document.getElementById('viewActivity');
const btnViewIcon = document.getElementById('viewIcon');
const btnViewColor = document.getElementById('viewColor');

//sublink init section
const viewGraph = document.getElementById('graph');
const viewActivity = document.getElementById('activity');
const viewIcon = document.getElementById('icon');
const viewColor = document.getElementById('color');

//sublink init class
btnViewGraph.classList.add('active');

viewActivity.classList.add('close');
viewIcon.classList.add('close');
viewColor.classList.add('close');
title.innerHTML='Graph';
//sublink function toggle
//anchor toggle graph
function toggleGraph(){
    if (!btnViewGraph.classList.contains('active')) {
        btnViewGraph.classList.toggle('desactive');
        btnViewGraph.classList.toggle('active');
        btnViewActivity.classList.add('desactive');
        btnViewActivity.classList.remove('active');
        btnViewIcon.classList.add('desactive');
        btnViewIcon.classList.remove('active');
        btnViewColor.classList.add('desactive');
        btnViewColor.classList.remove('active');

        viewGraph.classList.toggle('active');
        viewActivity.classList.remove('active');
        viewIcon.classList.remove('active');
        viewColor.classList.remove('active');
        title.innerHTML='Graph';
    }
}
//anchor toggle activity
function toggleActivity(){
    if (!btnViewActivity.classList.contains('active')){
        btnViewActivity.classList.toggle('desactive');
        btnViewActivity.classList.toggle('active');
        btnViewGraph.classList.add('desactive');
        btnViewGraph.classList.remove('active');
        btnViewIcon.classList.add('desactive');
        btnViewIcon.classList.remove('active');
        btnViewColor.classList.add('desactive');
        btnViewColor.classList.remove('active');

        viewActivity.classList.toggle('active');
        viewGraph.classList.remove('active');
        viewIcon.classList.remove('active');
        viewColor.classList.remove('active');
        title.innerHTML='Activity';

    }
}

//anchor toggle icon
function toggleIcon(){
    if (!btnViewIcon.classList.contains('active')) {
        btnViewIcon.classList.toggle('desactive');
        btnViewIcon.classList.toggle('active');
        btnViewGraph.classList.add('desactive');
        btnViewGraph.classList.remove('active');
        btnViewActivity.classList.add('desactive');
        btnViewActivity.classList.remove('active');
        btnViewColor.classList.add('desactive');
        btnViewColor.classList.remove('active');

        viewIcon.classList.toggle('active');
        viewGraph.classList.remove('active');
        viewActivity.classList.remove('active');
        viewColor.classList.remove('active');
        title.innerHTML='Icon';
    }
}

//anchor toggle color
function toggleColor(){
    if (!btnViewColor.classList.contains('active')){
        btnViewColor.classList.toggle('desactive');
        btnViewColor.classList.toggle('active');
        btnViewGraph.classList.add('desactive');
        btnViewGraph.classList.remove('active');
        btnViewActivity.classList.add('desactive');
        btnViewActivity.classList.remove('active');
        btnViewIcon.classList.add('desactive');
        btnViewIcon.classList.remove('active');

        viewColor.classList.toggle('active');
        viewGraph.classList.remove('active');
        viewActivity.classList.remove('active');
        viewIcon.classList.remove('active');

        title.innerHTML='Color';
    }
}
//sublink attibute function
btnViewGraph.addEventListener('click',toggleGraph);
btnViewActivity.addEventListener('click',toggleActivity);
btnViewIcon.addEventListener('click',toggleIcon);
btnViewColor.addEventListener('click',toggleColor);


//link section graph
//sublink toogle graph/data
//anchor init const
const btnViewGraphContent = document.getElementById('viewGraphContent');
const btnViewGraphFrom = document.getElementById('viewGraphForm');

const navGraphContent = document.getElementById('navGraphChoose');
const navGraphForm = document.getElementById('navGraphFrom');

const viewGraphContent = document.getElementById('graphContent');
const viewGraphForm = document.getElementById('graphForm');

btnViewGraphContent.classList.add('active');

viewGraphForm.classList.add('close');
navGraphForm.classList.add('close');


function toggleGraphContent(){
    if(btnViewGraphContent.classList.contains('active')){
        btnViewGraphContent.classList.toggle('active');
        btnViewGraphFrom.classList.toggle('active');

        viewGraphContent.classList.toggle('close');
        viewGraphForm.classList.toggle('close');

        navGraphContent.classList.toggle('close');
        navGraphForm.classList.toggle('close');
    }
    else {
        btnViewGraphContent.classList.toggle('active');
        btnViewGraphFrom.classList.toggle('active');

        viewGraphContent.classList.toggle('close');
        viewGraphForm.classList.toggle('close');

        navGraphContent.classList.toggle('close');
        navGraphForm.classList.toggle('close');
    }
}

function toggleGraphForm(){
    if(btnViewGraphFrom.classList.contains('active')){
        btnViewGraphContent.classList.toggle('active');
        btnViewGraphFrom.classList.toggle('active');

        viewGraphContent.classList.toggle('close');
        viewGraphForm.classList.toggle('close');

        navGraphContent.classList.toggle('close');
        navGraphForm.classList.toggle('close');
    }
    else {
        btnViewGraphContent.classList.toggle('active');
        btnViewGraphFrom.classList.toggle('active');

        viewGraphContent.classList.toggle('close');
        viewGraphForm.classList.toggle('close');

        navGraphContent.classList.toggle('close');
        navGraphForm.classList.toggle('close');
    }
}

btnViewGraphContent.addEventListener('click',toggleGraphContent);
btnViewGraphFrom.addEventListener("click", toggleGraphForm);

//sublink graphContent
// anchor init cont
const btnPie = document.getElementById('btnPieGraph');
const btnBar = document.getElementById('btnBarGraph');
const btnTable = document.getElementById('btnTableGraph');
const btnGraphForm = document.getElementById('bntViewGraphForm');

const closeFormGraph = document.getElementById('closeViewGraph');

const formGraphContent = document.getElementById('viewFormGraph');

btnGraphForm.classList.add('active');

function closeGraphForm(){
    formGraphContent.classList.toggle('close');
    btnGraphForm.classList.toggle('active');
}

function openGraphForm(){
    if(!btnGraphForm.classList.contains('active')){
        formGraphContent.classList.toggle('close');
        btnGraphForm.classList.toggle('active');
    }
    else{
        formGraphContent.classList.toggle('close');
        btnGraphForm.classList.toggle('active');
    }
}

closeFormGraph.addEventListener('click',closeGraphForm);
btnGraphForm.addEventListener('click',openGraphForm);

//anchor graph type choose
