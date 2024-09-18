import { render,screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test en AddCategory', () => {
    
    test('Debe cambiar el calor de la caja de texto ', () => {
      
        render(<AddCategory onNewCategory ={ ()=>{}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target:{value:'Goku'} });
        expect(input.value).toBe('Goku');

    });

    test('debe llamar onNewCategory', () => {
      
        const inputValue = 'DBZ';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory ={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target:{ value:inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory ={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target:{ value:inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
    
    
    
});
