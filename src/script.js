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
                desc : 'Año 2013, reconocimiento al mejor promedio de la Promoción, Asociación Argentina de Cultura Inglesa Director "Frank H. Etheridge" de Paraná',
                link : "#"
            },
            {
                title : 'Olimpíadas Nacionales de Filosofía', 
                //ico : "fab fa-java fa-8x",
                desc : "Año 2014, segundo puesto a nivel nacional, Eje Político, en las Olimpíadas de Filosofía de la Universidad Nacional de Buenos Aires",
                link : "https://www.unoentrerios.com.ar/salesiana-se-destaco-olimpiada-filosofia-n928066.html"
            },
            {
                title : 'Diplomatura', 
                //ico : "fab fa-java fa-8x",
                desc : "Año 2018, recibí una beca para el cursado de la Diplomatura en Gobernabilidad, Gerencia Política y Gestión Pública del Banco Americano de Desarrollo (CAF)",
                link : "#"
            },
            {
                title : 'Promedio', 
                //ico : "fab fa-java fa-8x",
                desc : "Año 2019, seleccionada para la 'Beca por Promedio Elevado' en el cursado regular de la Lic. en Relaciones Internacionales",
                link : "#"
            },
            {
                title : 'Promedio', 
                //ico : "fab fa-java fa-8x",
                desc : "Año 2020, seleccionada para el 'Premio Santander al mérito académico' del Banco Santander",
                link : "https://www.santander.com.ar/banco/online/iu/universitarios/premios-y-becas/premio-al-merito-academico#002-Ganadores-2020.html"
            },
            {
                title : 'Ensayo',
                //ico : "fab fa-java fa-8x",
                desc : "Año 2020, premiada en el III Concurso Federal de Ensayos del Grupo Joven del Consejo Argentino para las Relaciones Internacionales(CARI)",
                link : "https://www.youtube.com/watch?v=1tVTN5_KpTk.html"
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
            {title: 'ALAS Empresa Junior', desc: 'Liderazgo de la organización. Facilitación del diálogo intraorganizacional.'},
            {title: 'Ateneo A.D.E.S.I.', desc: 'Liderazgo. Organización y supervisión de actividades y propuestas formativas.'},
            {title: 'Cátedra "Historia Política de América', desc: 'Seguimiento de clases. Dictado de clase y acompañamiento de los y las estudiantes.'},
            {title: 'Cátedra "Ciencia Política II"', desc: 'Dictado de clases. Adaptación del contenido a la virtualidad. Intervención con actividades y dinámicas.'},
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

document.body.addEventListener("keydown", function(e) {
    console.log("name: "+e);
});

function rightSlice1(){
   
    /*console.log(document.body.scrollLeft);
    document.body.scrollLeft=10;
    //console.log(document.body.scrollLeft());*/
    
    //var elmnt = document.getElementById("card-container-1");
    /*console.log(document.body.scrollLeft);
    document.body.scrollLeft+=30;
    console.log(document.body.scrollLeft);*/
}
