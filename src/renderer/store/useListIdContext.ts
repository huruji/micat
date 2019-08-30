import constate from 'constate';
import { useState } from 'react';

function useListId() {
    const [listId, setListId] = useState(26);
    return { listId, setListId };
}

export default constate(useListId);
