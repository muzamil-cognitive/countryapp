import React from 'react'
import * as ReactDOM from 'react-dom'
import CountryDetail from './components/CountryDetail'
import { render,screen,waitFor } from '@testing-library/react'
import { rest } from 'msw'
import {setupServer} from 'msw/node'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';


test("render a attribute", async()=>{
    render(
    <MemoryRouter>
    <CountryDetail/>
    </MemoryRouter>)
    const inputElement = screen.getByTestId('country')
    const BackHome = screen.getByTestId('back_home_link')
    expect(inputElement).toBeInTheDocument()
    expect(BackHome).toHaveTextContent('Back Home')
})

