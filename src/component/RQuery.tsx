import { useQuery } from "@tanstack/react-query";
import { User } from "../store/apiData.type.ts";
import { url } from "../const/common.ts";
import { useApiDataStoreQuery } from "../store/apiData-query.ts";
import { useEffect } from "react";

export function RQueryPage() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
    const [users, setUsers] = useApiDataStoreQuery((state) => [state.users, state.setUsers]);

    useEffect(() => {
        if (!data) return;

        setUsers(data);
    }, [data])

    const handleFetch = async () => {
        // await loadUsersAxios();
    }

    if (error) return <div>Error: {error.message}</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <button onClick={ handleFetch }>Fetch Data</button>
            <div>
                <span>size: { users.length || 0 }</span>
                <ul>
                    {
                        users.map((item: User) => (
                            <li key={ item.id }>
                                <p>{ item.name }</p>
                                <p>{ item.email }</p>
                                <p>{ item.address }</p>
                                <p>{ item.phone }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
