import { useContext } from 'react'
import { parseRoutePath, Path } from '../model/Path'
import RouteContext from '../model/RouteContext'
import { Match, MatchOptions, matchPath } from '../model/Match'

const useMatch = (path: string, options?: MatchOptions): Match | false => {
  const { match: prevMatch } = useContext(RouteContext)
  const steps: Path = parseRoutePath(path)
  return matchPath(steps, prevMatch, options)
}

export default useMatch
