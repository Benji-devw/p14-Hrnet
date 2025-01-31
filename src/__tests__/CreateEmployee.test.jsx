import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { describe, it, expect, beforeEach } from "vitest";
import CreateEmployee from "../CreateEmployee";
import store from "../redux/store";

describe("CreateEmployee test", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CreateEmployee />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render", () => {
        expect(screen.getByText("HRnet")).toBeInTheDocument();
    });

    it("should fill form and submit", () => {
        // Récupérer les champs du formulaire
        const inputName = screen.getByLabelText("First Name");
        const inputLastName = screen.getByLabelText("Last Name");
        const inputStartDate = screen.getByLabelText("Start Date");
        const inputDateOfBirth = screen.getByLabelText("Date of Birth");
        const inputStreet = screen.getByLabelText("Street");
        const inputCity = screen.getByLabelText("City");
        const inputZipCode = screen.getByLabelText("ZipCode");
        const inputDepartment = screen.getByLabelText("Department");
        const submitForm = screen.getByText("Ajouter un Employé");

        // Remplir les champs du formulaire
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

        // Soumettre le formulaire
        fireEvent.click(submitForm);

        // Vérifier que le message de succès est affiché dans la modale
        setTimeout(() => {
            expect(screen.getByText("Employé Créé")).toBeInTheDocument();
        }, 2500);
    });
});
