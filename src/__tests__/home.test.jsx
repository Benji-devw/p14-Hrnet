import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { describe, it, expect, beforeEach } from "vitest";
import Home from "../Home";
import store from "../redux/store";

describe("Home", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render", () => {
        expect(screen.getByText("HRnet")).toBeInTheDocument();
    });

    it.skip("should open modal on button click", () => {
        const button = screen.getByText("open modal");
        fireEvent.click(button);
        expect(screen.getByText("Employé Créé")).toBeInTheDocument();
    });

    it("should fill form and submit", () => {
        const inputName = screen.getByLabelText("First Name");
        const inputLastName = screen.getByLabelText("Last Name");
        const inputStartDate = screen.getByLabelText("Start Date");
        const inputDateOfBirth = screen.getByLabelText("Date of Birth");
        const inputStreet = screen.getByLabelText("Street");
        const inputCity = screen.getByLabelText("City");
        const inputZipCode = screen.getByLabelText("ZipCode");
        const inputDepartment = screen.getByLabelText("Department");
        const submitForm = screen.getByText("Ajouter un Employé");

        fireEvent.change(inputName, { target: { value: "John" } });
        fireEvent.change(inputLastName, { target: { value: "Doe" } });
        fireEvent.change(inputStartDate, { target: { value: "2021-01-01" } });
        fireEvent.change(inputDateOfBirth, { target: { value: "1990-01-01" } });
        fireEvent.change(inputStreet, { target: { value: "1234" } });
        fireEvent.change(inputCity, { target: { value: "City" } });
        fireEvent.change(inputZipCode, { target: { value: "12345" } });
        
        // Ouvrir le menu déroulant et sélectionner une option
        fireEvent.mouseDown(inputDepartment);
        const departmentOption = screen.getByText("Sales");
        fireEvent.click(departmentOption);

        fireEvent.click(submitForm);

        setTimeout(() => {
            expect(screen.getByText("Employé Créé")).toBeInTheDocument();
        }, 2500);
    });
});
