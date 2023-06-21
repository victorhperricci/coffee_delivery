import { HomeContainer } from "./style";

import { HomeBanner } from "./HomeBanner";
import { OurCoffees } from "./OurCoffees";

export function Home() {
    return (
        <HomeContainer>
            <HomeBanner />
            <OurCoffees />
        </HomeContainer>
    )
}