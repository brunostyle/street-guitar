import { useEffect, useState } from "react";
import { supabase } from "../assets/database";

export const usePaginate = (database: string) => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 5;

    useEffect(() => {
        supabase.from(database).select('id', { count: 'exact', head: true }).then(({ count }) => {
            const calc = Math.ceil(count! / limit);
            setTotal(calc);
        });
    }, []);

    return { page, limit, total, setPage }
}