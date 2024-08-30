import { useEffect, useState } from "react";
/**
 * Hook personalizado que gestiona el redimensionamiento de la ventana y el estado de colapso.
 * @param {string} name - El nombre asociado al estado almacenado en el localStorage.
 * @returns {object} - Un objeto que contiene el estado de colapso y la función para cambiar ese estado.
 */
export function useResize( name ) {



    //Estado que controla si se despliega o no el menu lateral
    const [collapse, setCollapse] = useState(() => {


        //se recupera si hay un estado guardado en el localStorage
        const collapseStorage = window.localStorage.getItem(name)


        if (collapseStorage) return (JSON.parse(collapseStorage).collapse)
        //de lo contrario se pregunta si el dispisitovo es un movil paa inicializar con el menu oculto
        return (window.matchMedia("(max-width: 768px)").matches)


    })

    useEffect(() => {




        function handleResize() {

            const newCollapse = (window.innerWidth <= 1000)

            window.localStorage.setItem(name, JSON.stringify({ name: newCollapse }))
            setCollapse(newCollapse)


        }

        window.addEventListener('resize', handleResize);

        // Limpia el oyente de eventos cuando el componente se desmonta.
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [name]);


    return { collapse, setCollapse }
}