import { CoffeeProps, CoffeesAddedListProps } from "../../utils/coffees";
import { AddCoffeeToCartActionProps, RemoveCoffeeFromTheCartActionProps, RemoveOneCoffeeFromTheCartActionProps, RequestCoffeeActionProps } from "./types";


export enum CoffeeActionTypes {
    REQUEST_COFFEES = 'REQUEST_COFFEES',
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    REMOVE_ONE_COFFEE_FROM_THE_CART = 'REMOVE_ONE_COFFEE_FROM_THE_CART',
    REMOVE_COFFEE_FROM_THE_CART = 'REMOVE_COFFEE_FROM_THE_CART'
}

export function requestCoffeesAction(coffees: CoffeeProps[]): RequestCoffeeActionProps {
    return {
        type: CoffeeActionTypes.REQUEST_COFFEES,
        payload: coffees
    }
}

export function addCoffeeToCartAction(coffeesAdded: CoffeesAddedListProps[]): AddCoffeeToCartActionProps {
    return {
        type: CoffeeActionTypes.ADD_COFFEE_TO_CART,
        payload: coffeesAdded
    }
}

export function removeOneCoffeeFromTheCartAction(id: number): RemoveOneCoffeeFromTheCartActionProps {
    return {
        type: CoffeeActionTypes.REMOVE_ONE_COFFEE_FROM_THE_CART,
        payload: id
    }
}

export function removeCoffeeFromTheCartAction(id: number): RemoveCoffeeFromTheCartActionProps {
    return {
        type: CoffeeActionTypes.REMOVE_COFFEE_FROM_THE_CART,
        payload: id
    }
}
