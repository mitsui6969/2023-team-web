import { addDoc, collection } from 'firebase/firestore';

import { firebaseFirestore } from './firebase';

    function App() {
    // Create the count state.
    const [count, setCount] = useState(0);
    // Create the counter (+1 every second).
    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    // Add this section
    useEffect(() => {
        addDoc(collection(firebaseFirestore, 'people'), { name: 'Adam' })
        .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch((e) => {
            console.error('Error adding document: ', e);
        })
        .finally(() => console.log('finally'));
    }, [count]);
    return <div>...</div>;
    }