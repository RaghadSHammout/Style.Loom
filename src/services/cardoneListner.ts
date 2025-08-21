import { collection, onSnapshot, orderBy, query, type Unsubscribe } from "firebase/firestore";
import { db } from "../firebase";
import { setCardOne, type CardOneItem } from "../redux/slice";

export function startCardOneListener(dispatch: any): Unsubscribe {
    const colRef = collection(db, "cardone");
    const q = query(colRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(
        q,
        (snap) => {
            const data: CardOneItem[] = snap.docs.map((d) => {
                const raw = d.data() as Omit<CardOneItem, "id">;
                return {
                    ...raw,
                    id: d.id,
                    img: raw.img ?? "",
                    title: raw.title ?? "",
                    description: raw.description ?? "",
                };
            });

            dispatch(setCardOne(data));
        },
        (err) => {
            console.error("Firestore error:", err);
        }
    );

    return unsub;
}
