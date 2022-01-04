import { SagaIterator } from "@redux-saga/types";
import { all} from "redux-saga/effects";

import cart from "./cart/sagas";


export default function* rootSaga(): SagaIterator {
    return yield all([
        cart,
    ])
}