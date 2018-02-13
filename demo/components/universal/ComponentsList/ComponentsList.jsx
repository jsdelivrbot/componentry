import React from 'react'

type Props = {
  components: Array<string>,
}

export default ({ components }: Props) => (
  <div className="mt-1 mb-2">
    <small>
      <span>Components:</span>
      <span>
        {components.map((comp, idx) => (
          <span key={comp} className="text-muted">
            {idx ? ', ' : ' '}
            {comp}
          </span>
        ))}
      </span>
    </small>
  </div>
)
