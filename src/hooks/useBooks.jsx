import {useEffect, useState} from "react";
import portada1 from "../assets/covers/portada1.jpg";
import portada2 from "../assets/covers/portada2.jpg";
import portada3 from "../assets/covers/portada3.jpg";
import portada4 from "../assets/covers/portada4.jpg";
import portada5 from "../assets/covers/portada5.jpg";

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {
                    id: 1,
                    title: "El principito",
                    ISBN: "978-3-16-148410-0",
                    author: "Antoine de Saint-Exupéry",
                    genre: "Ficción",
                    sinapsis: "Un piloto varado en el desierto conoce a un joven príncipe de otro planeta.",
                    price: 10.99,
                    rating: 4.8,
                    img: portada1
                },
                {
                    id: 2,
                    title: "Cien años de soledad",
                    ISBN: "978-0-06-088328-7",
                    author: "Gabriel García Márquez",
                    genre: "Realismo mágico",
                    sinapsis: "La historia de la familia Buendía en el pueblo ficticio de Macondo.",
                    price: 14.99,
                    rating: 4.7,
                    img: portada2
                },
                {
                    id: 3,
                    title: "Don Quijote de la Mancha",
                    ISBN: "978-0-14-243723-0",
                    author: "Miguel de Cervantes",
                    genre: "Clásico",
                    sinapsis: "Las aventuras de un hidalgo que pierde la cordura y se convierte en caballero andante.",
                    price: 18.99,
                    rating: 4.9,
                    img: portada3
                },
                {
                    id: 4,
                    title: "1984",
                    ISBN: "978-0-452-28423-4",
                    author: "George Orwell",
                    genre: "Distopía",
                    sinapsis: "Una novela sobre un futuro totalitario y la vigilancia extrema.",
                    price: 12.99,
                    rating: 4.6,
                    img: portada4
                },
                {
                    id: 5,
                    title: "Orgullo y prejuicio",
                    ISBN: "978-0-19-953556-9",
                    author: "Jane Austen",
                    genre: "Romance",
                    sinapsis: "La historia de Elizabeth Bennet y su complicada relación con Mr. Darcy.",
                    price: 9.99,
                    rating: 4.5,
                    img: portada5
                }
            ]);
            setLoading(false);
        }, 2500);
    }, []);

    return {books, loading};
}
