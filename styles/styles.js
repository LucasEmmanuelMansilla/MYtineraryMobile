
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    //ESTILOS DE HOME

    header: {
        height: '10%'
    },
    textoPortada: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textShadowColor: 'blue',
        textShadowOffset: {width: -10, height: 5}, 
        textShadowRadius: 10   
    },
    home: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    title: {
       fontSize: 40,
       marginTop: 30, 
       color: 'white',
       textAlign: 'center',
       marginLeft: '3%'
      
    },
    portada: {
        marginBottom: '10%',
        width: null, 
        height: 600,
        resizeMode: 'cover'    
    },
    callToAction: {
        marginBottom: '10%',
        width: '60%',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#8ac4d0',
        borderRadius: 20
    },
    boton: {
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
   
    //ESTILOS DE CITIES
    cities: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
     
    },
    image: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //ESTILOS CARRUSEL
    titleCarrusel: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: '10%',
  
    },
    carrusel: {
        marginBottom: '10%',
        flex: 1,
        width: '100%',
        height: 500
    },
    //INPUTS LOGIN
    input: {
        width: '50%',
        backgroundColor: 'hsla(194, 25%, 100%, 0.50)',
        marginBottom: 10,
        height: 50,
        textAlign: 'center'
    },
    btnLogin: {
        backgroundColor: 'white',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35
    }
})