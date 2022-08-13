import { IconChevronsUp } from '@tabler/icons'
import { RecoilState, useRecoilState } from 'recoil'

export enum SortOrder {
  ascending,
  descending,
}

const SortOrderClasses: Record<SortOrder, string> = {
  [SortOrder.ascending]: 'transition rotate-0 duration-300',
  [SortOrder.descending]: 'transition rotate-180 duration-300',
}

export interface SortOrderButtonProps {
  node: RecoilState<{ sortOrder: SortOrder; sort: Record<string, boolean> }>
  className?: string
}

const SortOrderButton: React.FC<SortOrderButtonProps> = ({
  node,
  className = '',
}) => {
  const [facets, setState] = useRecoilState(node)

  const onClick = React.useCallback(() => {
    setState((facets) => ({
      ...facets,
      sortOrder:
        facets.sortOrder === undefined ||
        facets.sortOrder === SortOrder.ascending
          ? SortOrder.descending
          : SortOrder.ascending,
    }))
  }, [facets, setState])

  return (
    <button type="button" onClick={onClick} className={className}>
      <IconChevronsUp className={SortOrderClasses[facets.sortOrder]} />
    </button>
  )
}

export default SortOrderButton
