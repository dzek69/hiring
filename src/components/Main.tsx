import {useEffect, useState} from "react";
import {useItems} from "@/components/hooks";
import {Items} from "@/components/Items";

export function Main() {
    const items = useItems();
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => { setTime(Date.now() )}, 50);
    }, []);

    return (
        <div>
            <Items items={items} />
            <div>Time: {time}</div>
        </div>
    )
}
