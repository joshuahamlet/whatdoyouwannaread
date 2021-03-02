import { useQuery } from '@apollo/client'
import { bookQuery } from './graphql/queries';

export function useBookList() {
    const { data } = useQuery(bookQuery)
    console.log(data)
}