$(document).ready(function(){
	$(".buttonSearch").on("click", function(){ 
	var searchPoke = $(".search").val();
	var request = $.get("http://pokeapi.co/api/v2/pokemon/" + searchPoke)
		function onsuccess(pokemon){
			$(".name").append(pokemon.name);
			$(".type2").append(pokemon.types[0].type.name);
		}

		function error (error){
			console.log(error);
		}

request.done(onsuccess); //se podría poner .done o .success (es porque la api, utiliza eso para hacer la funcion) y para error .error		
	
	var description = $.get("https://pokeapi.co/api/v2/pokemon-species/" + searchPoke)
		function success (data){
			$(".description").append(data.flavor_text_entries[3].flavor_text)
		}

		function error (error){
			console.log(error);
		}

description.done(success);

	});
});

//pokemon-species/1 flavoure text


