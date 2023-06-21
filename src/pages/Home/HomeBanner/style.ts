import styled from 'styled-components'

export const HomeBannerContainer = styled.section`
    padding: 9.5rem 0;

    height: 70vh;

    background-image: url('/assets/img/home_background.png');
    background-size: cover;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HomeBannerContent  = styled.div`
    flex: 1;

    h1 {
        font: ${props => props.theme.fonts.Baloo['titleXL']};
        line-height: 6.2rem;
    }

    p {
        margin: 16px 0 66px 0;
        font: ${props => props.theme.fonts.Roboto['textLRegular']};
        color: ${props => props.theme.colors['base-subtitle']};
        line-height: 2.6rem;
    }
`

export const HomeBannerContentIntro  = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* column-gap: 40px; */
    row-gap: 20px;
`

export const HomeBannerContentIntroItem  = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font: ${props => props.theme.fonts.Roboto['textMRegular']};
    color: ${props => props.theme.colors['base-text']};

    div {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background-color: ${props => props.theme.colors['yellow']};

        svg {
            color: ${props => props.theme.colors['white']};
        }
    }
`

export const HomeBannerImage  = styled.div`
    flex: 1;
    display: grid;

    img {
        align-self: flex-end;
        justify-self: flex-end;
    }
    /* margin-left: 40px; */
`
