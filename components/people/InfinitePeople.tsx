import { BASE_URL } from '@/apis/star-wars/config'
import fetchPeople, { FetchPeopleResponse } from '@/apis/star-wars/fetchPeople'
import InfiniteScroll from 'react-infinite-scroller'
import { InfiniteData, useInfiniteQuery } from 'react-query'
import Person from './Person'

const defaultURL = `${BASE_URL}/people`

const InfinitePeople = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery(
      'star-wars-people',
      ({ pageParam = defaultURL }) => fetchPeople(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error! {error}</p>

  return (
    <InfiniteScroll
      loadMore={fetchNextPage as (page: number) => void}
      hasMore={hasNextPage}
    >
      {(data as InfiniteData<FetchPeopleResponse>).pages.map((pageData) =>
        pageData.results.map(
          ({ name, hair_color: hairColor, eye_color: eyeColor }) => (
            <Person
              key={name}
              name={name}
              hairColor={hairColor}
              eyeColor={eyeColor}
            />
          )
        )
      )}
    </InfiniteScroll>
  )
}

export default InfinitePeople
