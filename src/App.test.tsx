import React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { render,screen,waitFor } from '@testing-library/react'
import { rest } from 'msw'
import {setupServer} from 'msw/node'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';


test("render a attribute", async()=>{
    render(
    <MemoryRouter>
    <App/>
    </MemoryRouter>)
    const buttonElement = screen.getByText('Submit')
    const inputElement = screen.getByTestId('input-el')
    expect(buttonElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('disabled')
})

