
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 99;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = { "preguntas": [ {"pregunta": "El gringo que más amábamos","respuestas": [{"respuesta": "Edgar Castillo","tipo": "false"},{"respuesta": "José Antonio Castro","tipo": "true"},{"respuesta": "José Torres","tipo": "false"},{"respuesta": "Greg Garza","tipo": "false"}] }, {"pregunta": "Canterano que la rompió en 2013 y le valió para irse a Europa","respuestas": [{"respuesta": "Santiago Fernández","tipo": "false"},{"respuesta": "Tony López","tipo": "false"},{"respuesta": "Raúl Jiménez","tipo": "true"},{"respuesta": "Francisco Torres","tipo": "false"}] }, {"pregunta": "Delantero africano que no es Jean Claude Pagal ni Kalusha Bwalya","respuestas": [{"respuesta": "Abdul Aberrazak","tipo": "false"},{"respuesta": "Omam Biyik","tipo": "true"},{"respuesta": "Alain Nkong","tipo": "false"},{"respuesta": "David Embe","tipo": "false"}] }, {"pregunta": "Manoseaba a sus compañeros durante los entrenamientos","respuestas": [{"respuesta": "Markus López","tipo": "false"},{"respuesta": "Cuauhtémoc Blanco","tipo": "false"},{"respuesta": "Germán Villa","tipo": "true"},{"respuesta": "Ilie Dumitrescu","tipo": "false"}] }, {"pregunta": "Hasta el árbitro le aplaudió cuando metió un golazo","respuestas": [{"respuesta": "Reinaldo Navia","tipo": "false"},{"respuesta": "Rolfi Montenegro ","tipo": "false"},{"respuesta": "Miguel Layún ","tipo": "false"},{"respuesta": "Florencio Cafaratti","tipo": "true"}] }, {"pregunta": "¿Quién es este rostro?","respuestas": [{"respuesta": "Roberto ‘Monito’ Rodriguez","tipo": "true"},{"respuesta": "Fabián Peña ","tipo": "false"},{"respuesta": "Lucas Castromán","tipo": "false"},{"respuesta": "Enrique Vera ","tipo": "false"}] }, {"pregunta": "¿El cuarto de derecha a izquierda en la fila de abajo?","respuestas": [{"respuesta": "Alfredo Tena","tipo": "false"},{"respuesta": "Javier Aguirre","tipo": "true"},{"respuesta": "Carlos Hermosillo ","tipo": "false"},{"respuesta": "Héctor Miguel Zelada","tipo": "false"}] }, {"pregunta": "Chicharito aprendió de él","respuestas": [{"respuesta": "Enrique Borja","tipo": "true"},{"respuesta": "Matías Vuoso ","tipo": "false"},{"respuesta": "Héctor Mihuel Zelada","tipo": "false"},{"respuesta": "Carlos Reinoso","tipo": "false"}] }, {"pregunta": "Estuvo cerca de ganar la Champions, luego la rompió con nosotros","respuestas": [{"respuesta": "Irenio Soares","tipo": "false"},{"respuesta": "Claudio Piojo López","tipo": "true"},{"respuesta": "Iván Zamorano","tipo": "false"},{"respuesta": "Nelson Pipino Cuevas ","tipo": "false"}] }, {"pregunta": "La última leyenda ","respuestas": [{"respuesta": "Djalminha","tipo": "false"},{"respuesta": "Luis Hernández","tipo": "false"},{"respuesta": "Hugo Sánchez","tipo": "false"},{"respuesta": "Cuauhtémoc Blanco","tipo": "true"}] }, {"pregunta": "Lo convertimos en estrella de TV Novelas","respuestas": [{"respuesta": "Pável Pardo","tipo": "false"},{"respuesta": "Germán Villa","tipo": "false"},{"respuesta": "Antonio de Nigris","tipo": "false"},{"respuesta": "Luis García ","tipo": "true"}] }, {"pregunta": "Repatriamos al pentapichichi del Real Madrid ","respuestas": [{"respuesta": "Hugo Sánchez","tipo": "true"},{"respuesta": "Luis García ","tipo": "false"},{"respuesta": "Efraín Juárez","tipo": "false"},{"respuesta": "Javier Chicharito Hernández ","tipo": "false"}] }, {"pregunta": "Fue nuestro patrón antes que Azcárraga ","respuestas": [{"respuesta": "Jorge Vergara","tipo": "false"},{"respuesta": "Mario Moreno","tipo": "true"},{"respuesta": "Enrique Peña Nieto","tipo": "false"},{"respuesta": "Michael Bauer ","tipo": "false"}] }, {"pregunta": "Cristiano se inspiró en él ","respuestas": [{"respuesta": "Cuauhtémoc Blanco","tipo": "false"},{"respuesta": "Salvador Cabañas ","tipo": "false"},{"respuesta": "Valentino","tipo": "true"},{"respuesta": "Marcelo Lipatín ","tipo": "false"}] }, {"pregunta": "Ningún otro portero ha jugado en Europa","respuestas": [{"respuesta": "Memo Ochoa","tipo": "true"},{"respuesta": "Armando Navarrete","tipo": "false"},{"respuesta": "Alberto Becerra","tipo": "false"},{"respuesta": "Adolfo Ríos","tipo": "false"}] }, {"pregunta": "Les dimos al último jugador que le dio un título a Cruz Azul ","respuestas": [{"respuesta": "Richard Núñez ","tipo": "false"},{"respuesta": "Chaco Giménez ","tipo": "false"},{"respuesta": "Carlos Hermosillo","tipo": "true"},{"respuesta": "Maza Rodríguez ","tipo": "false"}] }, {"pregunta": "Es el mejor jugador chileno que ha llegado a México","respuestas": [{"respuesta": "Carlos Reinoso","tipo": "true"},{"respuesta": "Jean Beausejour","tipo": "false"},{"respuesta": "Sebastián Saja","tipo": "false"},{"respuesta": "Federico Higuaín","tipo": "false"}] }, {"pregunta": "Nosotros tuvimos el técnico que anhela el Tri ","respuestas": [{"respuesta": "Marcelo Bielsa","tipo": "true"},{"respuesta": "Ricardo La Volpe","tipo": "false"},{"respuesta": "Daniel Brailovsky","tipo": "false"},{"respuesta": "Sergio Bueno ","tipo": "false"}] }, {"pregunta": "Lo nombraron el sucesor de Cuauhtémoc Blanco","respuestas": [{"respuesta": "Reinaldo Navia","tipo": "false"},{"respuesta": "Osvaldo Martínez ","tipo": "false"},{"respuesta": "Rolfi Montenegro","tipo": "false"},{"respuesta": "More Mosqueda ","tipo": "true"}] }, {"pregunta": "Compartió cancha con Lio Messi en el Barcelona B ","respuestas": [{"respuesta": "Gio dos Santos","tipo": "false"},{"respuesta": "Israel Martínez","tipo": "false"},{"respuesta": "Santiago Fernández","tipo": "true"},{"respuesta": "Ángel Reyna ","tipo": "false"}] }, {"pregunta": "Puso fin a nuestra racha de 13 años sin ser campeones","respuestas": [{"respuesta": "Kléber Boas","tipo": "false"},{"respuesta": "Hugo Norberto Castillo","tipo": "true"},{"respuesta": "Iván Zamorano","tipo": "false"},{"respuesta": "Andrés Chitiva","tipo": "false"}] }, {"pregunta": "Dijo: \"Doy balones y me devuelven sandías\"","respuestas": [{"respuesta": "Zague","tipo": "false"},{"respuesta": "José Dirceu Guimaraes","tipo": "true"},{"respuesta": "Carlos Hermosillo","tipo": "false"},{"respuesta": "Miguel Layún","tipo": "false"}] }, {"pregunta": "Fue campeón del Mundo y luego jugó con nosostros ","respuestas": [{"respuesta": "Cabinho","tipo": "false"},{"respuesta": "Rosinei","tipo": "false"},{"respuesta": "Enrique Esqueda","tipo": "false"},{"respuesta": "Didí","tipo": "true"}] }, {"pregunta": "Llegó lesionado y se fue lesionado","respuestas": [{"respuesta": "Andrés Carignano","tipo": "true"},{"respuesta": "Andrés Andrade","tipo": "false"},{"respuesta": "Alberto Becerra","tipo": "false"},{"respuesta": "Thomas Vermaelen ","tipo": "false"}] }, {"pregunta": "Nos defendió a nosotros... y también a las Chivas ","respuestas": [{"respuesta": "Marco Rossi ","tipo": "false"},{"respuesta": "Antonio Mohamed","tipo": "false"},{"respuesta": "Ramón Ramírez ","tipo": "true"},{"respuesta": "Raúl Salinas","tipo": "false"}] }, {"pregunta": "Le decían el \"cantante\"...","respuestas": [{"respuesta": "Carlos Infante","tipo": "false"},{"respuesta": "José Antonio Castro","tipo": "false"},{"respuesta": "Christian Patiño","tipo": "false"},{"respuesta": "Leonardo Fabio Moreno","tipo": "true"}] }, {"pregunta": "Nadie defendió nuestra playera más que él","respuestas": [{"respuesta": "Ramón Ramírez","tipo": "false"},{"respuesta": "Cristóbal Ortega","tipo": "true"},{"respuesta": "Cuauhtémoc Blanco","tipo": "false"},{"respuesta": "Duilio Davino ","tipo": "false"}] }, {"pregunta": "El mexicano más brasileño","respuestas": [{"respuesta": "Zague","tipo": "true"},{"respuesta": "Arlindo dos Santos","tipo": "false"},{"respuesta": "Kléber","tipo": "false"},{"respuesta": "Antonio Carlos Santos ","tipo": "false"}] }, {"pregunta": "Repartió leña por todo el futbol mexicano ","respuestas": [{"respuesta": "Isaac Terrazas","tipo": "true"},{"respuesta": "Gerardo Torrado","tipo": "false"},{"respuesta": "Diego Cervantes","tipo": "false"},{"respuesta": "Moctezuma Serrato","tipo": "false"}] }, {"pregunta": "No necesitas ver su cara para saber que fue el refuerzo más tronco de la historia","respuestas": [{"respuesta": "Tony López","tipo": "false"},{"respuesta": "Daniel Bilos ","tipo": "true"},{"respuesta": "Nicolás Olivera","tipo": "false"},{"respuesta": "Fernando Ortíz","tipo": "false"}] }, {"pregunta": "Se le recuerda por tener el peor look del América... y de la humanidad","respuestas": [{"respuesta": "Marcelo Barticciotto","tipo": "false"},{"respuesta": "Alvin Mendoza","tipo": "false"},{"respuesta": "Jean-Claude Pagal","tipo": "true"},{"respuesta": "Matías Vuoso ","tipo": "false"}] }, {"pregunta": "Fue votado el doceavo mejor futbolista del mundo... a pesar de fallar el gol más fácil de la historia ante Cruz Azul","respuestas": [{"respuesta": "Kalusha","tipo": "true"},{"respuesta": "Achille Emana","tipo": "false"},{"respuesta": "Omam Biyik","tipo": "false"},{"respuesta": "Narciso Mina","tipo": "false"}] }, {"pregunta": "Atajó un penal a Chivas en la final de Copa de 1954","respuestas": [{"respuesta": "Germán Núñez Cortina","tipo": "false"},{"respuesta": "Octavio Vial","tipo": "false"},{"respuesta": "Eduardo González Palmer","tipo": "true"},{"respuesta": "Ernesto Sota","tipo": "false"}] }, {"pregunta": " Martinoli le tiraba por tener ascendencia europea","respuestas": [{"respuesta": "Maurizio Gaudino","tipo": "false"},{"respuesta": "Lampros Kontogiannis","tipo": "true"},{"respuesta": "Marco Rossi","tipo": "false"},{"respuesta": "Frankie Oviedo","tipo": "false"}] }, {"pregunta": "¿A quién pertenece esta mata inconfundible?","respuestas": [{"respuesta": "Fabián Estay","tipo": "false"},{"respuesta": "Iván Zamorano","tipo": "true"},{"respuesta": "Frankie Oviedo","tipo": "false"},{"respuesta": "Luis Hernández ","tipo": "false"}] }, {"pregunta": "Lo único que recordamos de aquel brasileño es su apodo ","respuestas": [{"respuesta": "Daniel Brailovsky","tipo": "false"},{"respuesta": "Javier Fragoso","tipo": "false"},{"respuesta": "Osvaldo Castro ","tipo": "false"},{"respuesta": "Márcio Delvi da Costa","tipo": "true"}] }, {"pregunta": "¿Quién es este bigotón?","respuestas": [{"respuesta": "Gustavo Echaniz","tipo": "false"},{"respuesta": "Carlos Infante","tipo": "false"},{"respuesta": "Ricardo La Volpe","tipo": "true"},{"respuesta": "Pedro Pineda ","tipo": "false"}] }, {"pregunta": "El mejor amigo de este crack","respuestas": [{"respuesta": "Oswaldo Sánchez","tipo": "false"},{"respuesta": "David Faitelson","tipo": "false"},{"respuesta": "Jared Borgetti","tipo": "false"},{"respuesta": "Braulio Luna ","tipo": "true"}] }, {"pregunta": "Delantero uruguayo que tampoco fue campeón con Cruz Azul","respuestas": [{"respuesta": " Sebastián Abreu ","tipo": "true"},{"respuesta": "Federico Insúa","tipo": "false"},{"respuesta": "Egidio Arévalo","tipo": "false"},{"respuesta": "Marcelo Lipatín","tipo": "false"}] }, {"pregunta": "Nos dejó con 10 hombres en la final de la Copa Sudamericana 2007","respuestas": [{"respuesta": "Lucas Castromán","tipo": "true"},{"respuesta": "Germán Villa","tipo": "false"},{"respuesta": "Mario Pérez","tipo": "false"},{"respuesta": "Jesús Mendoza","tipo": "false"}] }, {"pregunta": "¿Habiendo clubes con más de cien años de historia, qué otro acumula más títulos en el futbol mexicano que el América?","respuestas": [{"respuesta": "Ninguno, somos únicos ","tipo": "true"},{"respuesta": "Chivas","tipo": "false"},{"respuesta": "Cruz Azul","tipo": "false"},{"respuesta": "Ilie","tipo": "false"}]}]};
	 
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		})
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=10){
	  	aficionado="Villamelón";
	  	msg="Tus amigos influyeron en la elección de tus colores. Confundes a Carlos Infante con Pedro Infante, aunque el segundo sí brilló... en el cine. Crees que cada anotación vale seis puntos, más uno extra si lo anotas con la cabeza. Miguel Herrera estaría desilusionado de tu desempeño, pero no importa, los buenos gustos son bienvenidos.";
  	}
  	
  	if(aciertos>10 && 20 >= aciertos){
	  	aficionado="Cumplidor";
	  	msg="Los colores llegaron a ti por influencia de tu padre, hermano o amigo. Nunca fuiste un clavado, te gustaba vivir el presente.  Gritaste con locura el gol del Misionero y fuiste un mar de lágrimas cuando el León arruinó el Bicampeonato. Lo sentimental es lo tuyo. Visto de otra forma, eres el Layún del conocimiento americanista.";
  	}
  	
  	if(aciertos>20 ){
	  	aficionado="Crack azulcrema";
	  	msg="Naciste para ser grande. Eres el jugador número 12 que vive, llora, ríe y disfruta con el equipo. Tu fidelidad nunca está puesta en duda, incluso en el FIFA eliges al América por encima del Barcelona y Real Madrid. Aún sigues discutiendo con tus amigos si Narciso Mina debio ser titular frente al León";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Tijuana "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " América primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol @pumamexico";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/america-99-anos");
		window.open("https://twitter.com/share?text="+text+"&hashtags=hermoso99&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


