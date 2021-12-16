Sfunction asociaEvento (){
	
}
function validaCampo (campo){
	if (campo == 'nombre') {
		if (nodoNombre.value == ''){
			nodoNombre.setCustomValidity('El nombre ingresado debe tener una longitud de 2 a 20 caracteres');
			nodoNombre.style.backgroundColor = '#B82725';
		} else{
			nodoNombre.setCustomValidity('');
			nodoNombre.style.backgroundColor = '#5AA832';

function validaCampo (campo){
	if (campo == 'nombre') {
		if (nodoNombre.value == ''){
			nodoNombre.setCustomValidity('El nombre ingresado debe tener una longitud de 2 a 20 caracteres');
			nodoNombre.style.backgroundColor = '#B82725';
		} else{
			nodoNombre.setCustomValidity('');
			nodoNombre.style.backgroundColor = '#5AA832';
		}
	}
	if (campo == 'apellido') {
		if (nodoApellido.value == ''){
			nodoApellido.setCustomValidity('El apellido ingresado debe tener una longitud de 2 a 20 caracteres');
			nodoApellido.style.backgroundColor = '#B82725';
		} else{
			nodoApellido.setCustomValidity('');
			nodoApellido.style.backgroundColor = '#5AA832';
		}
	}
	if (campo == 'email') {
		if (nodoEmail.value == ''){
			nodoEmail.setCustomValidity('El email ingresado debe tener una longitud de 5 a 30 caracteres');
			nodoEmail.style.backgroundColor = '#B82725';
		} else{
			nodoEmail.setCustomValidity('');
			nodoEmail.style.backgroundColor = '#5AA832';
		}
	}
	if (campo == 'telefono') {
		if (nodoTelefono.value == ''){
			nodoTelefono.setCustomValidity('El teléfono ingresado debe tener una longitud de 5 a 15 dígitos');
			nodoTelefono.style.backgroundColor = '#B82725';
		} else{
			nodoTelefono.setCustomValidity('');
			nodoTelefono.style.backgroundColor = '#5AA832';
		}
	}
}

window.addEventListener('load',asociaEvento);

