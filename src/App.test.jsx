import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe( "App component", () => {
  it("renders magnificent monkeys", () => {
    const {container} = render(<App/>)
    expect(container).toMatchSnapshot()
  })
  it("renders radical rhinos after button click", async() => {
    
  })

})

// describe('something truthy and falsy', () => {
//     it('true to be true', () => {
//       expect(true).toBe(true);
//     });
  
//     it('false to be false', () => {
//       expect(false).toBe(false);
//     });
//   });