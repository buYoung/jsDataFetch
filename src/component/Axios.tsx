import { useApiDataStoreAxios } from "../store/apiData-axios.ts";
import { useEffect } from "react";
import { User } from "../store/apiData.type.ts";

export function AxiosPage() {
    const [users, isLoading, loadUsersAxios] = useApiDataStoreAxios((state) => [state.users, state.isLoading ,state.loadUsersAxios]);

    useEffect(() => {
        loadUsersAxios();
    }, [])

    const handleFetch = async () => {
        await loadUsersAxios();
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <button onClick={ handleFetch }>Fetch Data</button>
            <div>
                <span>size: { users.length }</span>
                <ul>
                    { users.map((item: User) => (
                        <li key={ item.id }>
                            <p>{ item.name }</p>
                            <p>{ item.email }</p>
                            <p>{ item.address }</p>
                            <p>{ item.phone }</p>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}
