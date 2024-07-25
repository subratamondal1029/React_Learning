import SearchField from "./SearchField"
import SortField from "./SortField"

const Nav = ({queryState}) => {
  return (
    <nav>
        <SearchField queryState={queryState}/>
        <SortField queryState={queryState}/>
    </nav>
  )
}

export default Nav