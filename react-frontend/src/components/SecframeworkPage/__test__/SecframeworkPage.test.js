import React from "react";
import { render, screen } from "@testing-library/react";

import SecframeworkPage from "../SecframeworkPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders secframework page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SecframeworkPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("secframework-datatable")).toBeInTheDocument();
    expect(screen.getByRole("secframework-add-button")).toBeInTheDocument();
});
