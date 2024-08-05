import React from "react";
import { render, screen } from "@testing-library/react";

import SecframeworkEditDialogComponent from "../SecframeworkEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders secframework edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SecframeworkEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("secframework-edit-dialog-component")).toBeInTheDocument();
});
