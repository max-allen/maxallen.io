import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'
import '../global.css'

const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
