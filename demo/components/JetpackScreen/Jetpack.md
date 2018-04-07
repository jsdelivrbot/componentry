Jetpack styles collection

## Display headings

<h1 className="display-1">Adventures</h1>
<h2 className="display-2">Adventures</h2>
<h3 className="display-3">Adventures</h3>
<h4 className="display-4">Adventures</h4>

## Headings

# Adventures in development
## Adventures in development
### Adventures in development
#### Adventures in development

## Icons

## Grays

<div className="d-flex justify-content-center">
  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(gray =>(
    <div className="d-inline-block">
      <div className={`swatch bg-gray-${gray}`} />
      <div className={`text-gray-${gray}`}>text-gray-{gray}</div>
      <div className={`border-bottom border-gray-${gray}`} />
    </div>
  ))}
</div>

## Alerts
