import {render, screen} from "@testing-library/react";
import {TodoDialog} from "../TodoDialog.tsx";

describe('Todo dialog', () => {

    const fakeFunc = vi.fn();

    it('Should have a close button', () => {
        render(<TodoDialog handleClose={fakeFunc}/>);
        expect(screen.getByRole('button', {name: /close/i})).toBeVisible();
    });
})