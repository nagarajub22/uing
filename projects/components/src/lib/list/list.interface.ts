export interface Item extends ItemAttributes {
    id: string;
    value: string;
}

export interface ItemAttributes {
    selected: boolean;
    active: boolean;
    focussed: boolean;
}

