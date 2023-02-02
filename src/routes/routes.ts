
import { Bascula, Caja, ImpresoraEtiquetas, ImpresoraTickets, Pinpad, Pokedex, Scanner} from "../pages";

type JSXComponent = () => JSX.Element;

interface IRoute {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent,
    name: string,
}

export const routes: IRoute[] = [
    {
        to: '/pokedex',
        path: 'pokedex',
        Component: Pokedex,
        name: 'Pokedex',
    },
    {
        to: '/pinpad',
        path: 'pinpad',
        Component: Pinpad,
        name: 'Pinpad',
    },
    {
        to: '/impresora_tickets',
        path: 'impresora_tickets',
        Component: ImpresoraTickets,
        name: 'Impresora de tickets',
    },
    {
        to: '/bascula',
        path: 'bascula',
        Component: Bascula,
        name: 'Bascula',
    },
    {
        to: '/scanner',
        path: 'scanner',
        Component: Scanner,
        name: 'Scanner',
    },
    {
        to: '/caja',
        path: 'caja',
        Component: Caja,
        name: 'Caja',
    },
    {
        to: '/impresora_etiquetas',
        path: 'impresora_etiquetas',
        Component: ImpresoraEtiquetas,
        name: 'Impresora de etiquetas',
    },
]