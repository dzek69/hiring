import {Item} from "@/components/types";

const items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

export const useItems = () => {
    return items;
}
