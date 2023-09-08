import {Item} from "@/components/types";

const wait = (time: number) => {
    const start = Date.now();
    while (Date.now() - start < time) {
        // waste cpu cycles
    }
}

export const Items = (props: { items: Item[] }) => {
    // wait(500);

    if (!props.items.length) {
        return <h1>No items</h1>;
    }

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

