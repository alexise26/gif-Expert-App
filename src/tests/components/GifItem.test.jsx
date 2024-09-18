import { GifItem } from "../../components/GifItem";
import { fireEvent, getByText, render, screen } from "@testing-library/react";


describe('Tests para el componente GifItem', () => {

    const images = [
        {id:1,title: 'image1', url:'https://image.com/'},
        {id:2,title: 'image2', url:'https://image.com/'},
        {id:3,title: 'image3', url:'https://image.com/'},
    ];
    const image = images[0];
    
    test('debe coincidir con el snapshot', () => {
        const {container} = render ( <GifItem {...image} /> );
        expect(container).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el URL y ALT correcto', () => {
        render ( <GifItem {...image} /> );
        const {src, alt} = screen.getByRole('img');
        
        expect(alt).toBe(image.title);
        expect(src).toBe(image.url);

    });

    test('debe mostrar el titulo en el componente', () => {
        render ( <GifItem {...image} />);
        
        expect(screen.getByText(image.title)).toBeTruthy();
    });
    
    
});
