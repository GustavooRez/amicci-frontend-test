import styled from 'styled-components'

export const H1WD = styled.h1`
    margin-top:0;
    text-align:center;
    color:white;
`

export const H3WD = styled.h3`
    margin-top:0;
    text-align:center;
    color:white;
    padding: 1rem;
`
export const PWD = styled.p`
    color:white;
`
export const BolderWD = styled.p`
    font-weight: bold;
    color:white;
`

export const DivFlex2C = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const DivFlex3C = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
export const DivWD = styled.div`
    width: 100%;
`
export const SeparatorWD = styled.div`
  border-top: 1px solid #ffffff3d;
  border-radius: 0.2rem;
`