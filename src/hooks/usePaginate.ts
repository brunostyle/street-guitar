import { useEffect, useState } from "react";
import { supabase } from "../assets/database";

export const usePaginate = (database: string) => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10;

    useEffect(() => {
        supabase.from(database).select('*', { count: 'exact', head: true }).then(({ count }) => {
            setTotal(Math.ceil(count! / limit));
        });
    }, []);

    return { page, limit, total, setPage }
}