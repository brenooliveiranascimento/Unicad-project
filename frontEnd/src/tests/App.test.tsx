import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import App from "../App";
import {createMemoryHistory} from "history";
import { renderWithRouterAndRedux } from "./helpers/helpers";
import { reduxState } from "./helpers/reduxMock";
import { LoadScript } from "@react-google-maps/api";
import NewDelivery from "../pages/NewDelivery/NewDelivery";
import { act } from "react-dom/test-utils";
import axios from "axios";

describe("Test if on home screen", () => {
	it("Renders the delivery table", async () => {
		renderWithRouterAndRedux(<App />,
			{
				initialEntries: ["/"],
				initialState: reduxState
			});
		const tableField = await screen.getByText(/Cadastrar/i);
		expect(tableField).toBeInTheDocument();
	});

	it("Delete a Delviery", async () => {

		jest.fn().mockResolvedValue({ data: { message: "Deleted" } });

		renderWithRouterAndRedux(<App />,
			{
				initialEntries: ["/"],
				initialState: reduxState
			});
		const delivery = await screen.getByTestId(/delivery-1/i);
		expect(delivery).toBeInTheDocument();

		const deleteButton = await screen.getByTestId(/delete-1/i);
		expect(deleteButton).toBeInTheDocument();
    
		await fireEvent.click(deleteButton);
		await expect(deleteButton).not.toHaveTextContent("Confirmar ");

		await fireEvent.click(deleteButton);
		await expect(deleteButton).not.toHaveTextContent("Deletar ");

	});

	it("We are directed to the registration screen when clicking on the sidebar link", async () => {
		renderWithRouterAndRedux(<NewDelivery />,
			{
				initialEntries: ["/newDelivery"],
				initialState: reduxState
			});
		const title = await screen.queryAllByText(/Cadastrar entrega/i);
		expect(title[0]).toBeInTheDocument();

		const clientInput = await screen.getByPlaceholderText("Cliente");
		expect(clientInput).toBeInTheDocument();
	});

});
