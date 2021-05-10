Vue.component('project-card',{
    props: ['title', 'desc', 'link'],
    /*html*/
    template: `
        <div class="card m-1" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">
            <i :class="ico"></i>-->
            <div class="card-body">
              <h5 class="card-title">{{title}}</h5>
              <p class="card-text">{{desc}}</p>
              <a :href="link" class="btn btn-primary" target="_blank">Go somewhere</a>
            </div>
        </div>
    `,
});

Vue.component('exp-note',{
    props: ['title', 'desc'],
    /*html*/
    template: `
        <li>
            <a href="" class="note-link">
                <h2 class="aux">{{title}}</h2>
                <p class="aux">{{desc}}</p>
            </a>
        </li>
    `,
});

const app = new Vue({
    el: '#app',
    data:{
        firstCards:[
             {
                title : 'Inglés', 
                //ico : "fab fa-java fa-8x",
                desc : 'En 2013 me otorgaron un reconocimiento al mejor promedio de la Promoción de ese año, en la Asociación Argentina de Cultura Inglesa',
                link : ""
            },
            {
                title : 'Olimpíadas de Filosofía', 
                //ico : "fab fa-java fa-8x",
                desc : "En 2014 participé de las Olimpíadas Nacionales de Filosofía (UBA) donde obtuve el Segundo Puesto a nivel nacional en el Eje Político",
                link : "https://www.unoentrerios.com.ar/salesiana-se-destaco-olimpiada-filosofia-n928066"
            },
            {
                title : 'Diplomatura', 
                //ico : "fab fa-java fa-8x",
                desc : "En 2018, recibí una beca para el cursado de la Diplomatura en Gobernabilidad, Gerencia Política y Gestión Pública del Banco Americano de Desarrollo (CAF)",
                link : ""
            },
            {
                title : 'Promedio', 
                //ico : "fab fa-java fa-8x",
                desc : "En 2019, fui seleccionada para recibir la beca por Promedio Elevado en el cursado regular de mi carrera",
                link : ""
            },
            {
                title : 'Ensayo', 
                //ico : "fab fa-java fa-8x",
                desc : "En 2020, fui premiada con el 2° puesto, Categoría Junior, del III Concurso Federal de Ensayos del Grupo Joven del Consejo Argentino para las Relaciones Internacionales (CARI)",
                link : "http://m.apfdigital.com.ar/despachos.asp?cod_des=346745
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
        ],
        secondCards:[
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            /*{
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },*/
        ],
        exp: [
            {title: 'Title #1', desc: 'Text Content #1'},
            {title: 'Title #2', desc: 'Text Content #2'},
            {title: 'Title #3', desc: 'Text Content #3'},
            {title: 'Title #4', desc: 'Text Content #4'},
            /*{title: 'Title #5', desc: 'Text Content #5'},
            {title: 'Title #6', desc: 'Text Content #6'},*/
        ]
    }
});

document.body.addEventListener("click", function(e) {

    //e.preventDefault();
    var eventName = String((e.target).className);

    if( eventName == 'note-link' || eventName == 'aux') {
        e.preventDefault();
        //console.log('good');
    }/*
    else{
        console.log(eventName);
    }*/

});
