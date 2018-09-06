// @flow
import componentryElem from '../elem-factory'
import withTheme from '../withTheme'

type Props = {
  /** Specify the flex direction of the container */
  direction?: '' | 'column' | 'column-reverse' | 'row' | 'row-reverse',
  /** Toggles between display flex and display inline-flex */
  inline?: boolean,
  /** Adds flexbox align-items atomic classes */
  align?: '' | 'start' | 'center' | 'end' | 'baseline' | 'stretch',
  /** Adds flexbox justify-content atomic classes */
  justify?: '' | 'start' | 'center' | 'end' | 'around' | 'between',
}

const Flex = ({
  align = '',
  direction = '',
  inline = false,
  justify = '',
  ...rest
}: Props) =>
  componentryElem({
    classes: {
      'd-flex': !inline,
      'd-inline-flex': inline,
      'flex-column': direction === 'column',
      'flex-column-reverse': direction === 'column-reverse',
      'flex-row': direction === 'row',
      'flex-row-reverse': direction === 'row-reverse',
      [`align-items-${align}`]: align,
      [`justify-content-${justify}`]: justify,
    },
    ...rest,
  })

export default withTheme('Flex', Flex)
