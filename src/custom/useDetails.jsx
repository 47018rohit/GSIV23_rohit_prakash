import { useSelector } from 'react-redux'

const useDetails = () => {

    const fetchedData = useSelector(state => state.details)

    return (
        fetchedData
    )
}

export default useDetails
