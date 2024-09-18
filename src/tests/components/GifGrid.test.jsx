import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    
    const category = 'DBZ';
    
    test('debe mostrar el loading inicialmente ', () => {
      
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category = {category}/>);
        //screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        

    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
      
        const gifs = [
            {
                id:'123',
                title:'Goku',
                url:'https://localhost/goku.jpg'
            },
            {
                id:'ABC',
                title:'Vegeta',
                url:'https://localhost/goku.jpg'
            }
        ];



        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        });

        render(<GifGrid category = {category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
    
    
});
