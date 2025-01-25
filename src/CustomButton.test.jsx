import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "./CustomButton";

describe("CustomButton", ()=> {
    it("should render a button with the text 'Click me'", () => {
        render(<CustomButton onClick={ () => {}} />)
    })
})