import styled from 'styled-components'

export const Body = styled.div`
    font-family: Arial, sans-serif;
    background: linear-gradient(90deg, rgba(0,142,255,1) 0%, rgba(77,147,248,1) 35%, rgba(128,152,255,0.8239670868347339) 100%);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;

`

export const Container = styled.div`
    background: #73abf9;
    padding: 1.25rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 1rem rgb(0 0 0 / 22%);
    text-align: center;
    max-width: 70%;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 40rem;
    }
`
export const Buttons = styled.div`
    display: flex;
    gap: 0.6rem;
    justify-content: center;
`

export const WeatherContainer = styled.div`
    margin-top: 1.25rem;
    text-align: left;
    padding: 2rem;
`