import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TodoPage } from "../TodoPage.tsx";
import { userEvent } from "@testing-library/user-event";

describe ('Todo Page', () => {
    it('should display the title', async () => {
        render(<TodoPage />);
        expect(screen.getByRole("table")).toBeVisible();
    });

    it('should display all todos', () => {
        render(<TodoPage />);
        expect(screen.getByRole('table')).toBeVisible();
    });

    it('should display add-task button', () => {
        render(<TodoPage />);
        expect(screen.getByRole('button', {name: /add task/i})).toBeVisible();
    });

    it('should not show todo modal on load', () => {
        render(<TodoPage />);
        expect(screen.queryByRole('dialog', {name: /add new task dialog/i})).toBeNull();
    });

    it('should display add todo modal when button is clicked', async () => {
        const user = userEvent.setup();
        render(<TodoPage />);
        await user.click(screen.getByRole('button', { name: /add task/i}));
        expect(screen.getByRole('dialog', { name: /add new task dialog/i})).toBeVisible();
    });

    it('should close todo modal when clicked close', async () => {
        const user = userEvent.setup();
        render(<TodoPage />);
        await user.click(screen.getByRole('button', { name: /add task/i}));
        await user.click(screen.getByRole('button', {name: /close/i}));
        expect(screen.queryByRole('dialog', {name: /add new task dialog/i})).toBeNull();
    });

});