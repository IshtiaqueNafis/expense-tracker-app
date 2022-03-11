import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {dataFromSnapshot} from "../fireStore/fireStoreService";

export default function useFireStoreCollection({query, data, deps}) {
    useEffect(() => {
        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc))
                data(docs);

            },
        );
        return () => unsubscribe();

    }, deps);
}