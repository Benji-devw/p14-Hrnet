import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Home from "../Home";
import store from "../redux/store"; // Assurez-vous que le chemin est correct

describe.only("Home", () => {
    it("should render", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText('HRnet')).toBeInTheDocument();
    });
});
