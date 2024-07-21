import SearchField from "./SearchField"
import SortField from "./SortField"

const Nav = ({queryState, theme}) => {
  return (
    <nav>
        <SearchField queryState={queryState} mode={`${theme}Mode`}/>
        <SortField queryState={queryState} mode={`${theme}Mode`}/>
    </nav>
  )
}

export default Nav